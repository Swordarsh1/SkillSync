from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from django.utils import timezone
from django.contrib.auth import authenticate
from django.shortcuts import get_object_or_404
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.hashers import make_password # 🔒 For password hashing

from jobsapp.models import Job, Applicant
from jobsapp.serializers import JobSerializer
from accounts.models import User # 👤 Import your custom User model
from jobsapp.models import UserProfile
from jobsapp.serializers import UserProfileSerializer

# --- Home API ---
class HomeApiView(APIView):
    def get(self, request, format=None):
        featured_jobs = Job.objects.all().order_by('-created_at')[:6]
        trending_jobs = Job.objects.filter(created_at__month=timezone.now().month)[:3]
        
        featured_serializer = JobSerializer(featured_jobs, many=True)
        trending_serializer = JobSerializer(trending_jobs, many=True)
        
        return Response({
            'featured_jobs': featured_serializer.data,
            'trending_jobs': trending_serializer.data
        })

# --- Job Detail API ---
class JobDetailApiView(APIView):
    def get(self, request, pk):
        job = get_object_or_404(Job, pk=pk)
        serializer = JobSerializer(job)
        return Response(serializer.data)

# --- Employer: View Applicants ---
class EmployerApplicantsApiView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if request.user.role != 'employer':
            return Response({"error": "Unauthorized"}, status=403)
        
        applicants = Applicant.objects.filter(job__user=request.user).order_by('-created_at')
        data = [{
            "id": app.id,
            "job_title": app.job.title,
            "applicant_name": app.user.get_full_name() or app.user.email,
            "applied_at": app.created_at.strftime("%b %d, %Y")
        } for app in applicants]
        
        return Response(data)
class EmployerJobsApiView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        if request.user.role != 'employer':
            return Response({"error": "Unauthorized"}, status=403)
        
        # 🎯 Filter jobs by the logged-in user
        jobs = Job.objects.filter(user=request.user).order_by('-created_at')
        serializer = JobSerializer(jobs, many=True)
        return Response(serializer.data)

# --- Employer: Create Job ---
class JobCreateApiView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        if request.user.role != 'employer':
            return Response({"error": "Only employers can post jobs."}, status=403)

        serializer = JobSerializer(data=request.data)
        if serializer.is_valid():
            # ⚓ Crucial: manually assign the user before saving
            serializer.save(user=request.user) 
            return Response(serializer.data, status=201)
        
        # If it fails, return the specific errors (e.g., "This field is required")
        return Response(serializer.errors, status=400)

# --- Employer: Delete Job ---
class JobDeleteApiView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request, pk):
        try:
            job = Job.objects.get(pk=pk, user=request.user)
            job.delete()
            return Response({"success": "Job deleted"}, status=status.HTTP_204_NO_CONTENT)
        except Job.DoesNotExist:
            return Response({"error": "Job not found or unauthorized"}, status=404)

# --- Employee: Apply for Job ---
class ApplyJobApiView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, job_id):
        if request.user.role != 'employee':
            return Response({"error": "Only job seekers can apply."}, status=403)
        
        if Applicant.objects.filter(user=request.user, job_id=job_id).exists():
            return Response({"error": "You already applied for this job!"}, status=400)

        Applicant.objects.create(user=request.user, job_id=job_id)
        return Response({"success": "Application sent!"}, status=201)

# --- Employee: View My Applications ---
class MyApplicationsApiView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        apps = Applicant.objects.filter(user=request.user).order_by('-created_at')
        data = [{
            "id": a.id,
            "job_title": a.job.title,
            "company": a.job.user.get_full_name() or a.job.user.email,
            "applied_at": a.created_at.strftime("%b %d, %Y"),
            "location": a.job.location
        } for a in apps]
        return Response(data)

# --- 🚀 NEW: User Registration API ---
class RegisterApiView(APIView):
    def post(self, request):
        data = request.data
        try:
            # Basic validation
            if User.objects.filter(email=data['email'].lower()).exists():
                return Response({'error': 'Email already exists'}, status=400)
            
            user = User.objects.create(
                first_name=data['full_name'],
                email=data['email'].lower(),
                password=make_password(data['password']), # 🔐 Hash the password!
                role=data['role'],
                is_active=True # Ensure user is active to login later
            )
            return Response({'success': True}, status=status.HTTP_201_CREATED)
        except Exception as e:
            return Response({'error': str(e)}, status=400)

# --- Login API ---
class CustomAuthToken(ObtainAuthToken):
    def post(self, request, *args, **kwargs):
        email_input = request.data.get('username')
        email = email_input.lower() if email_input else None
        password = request.data.get('password')

        user = authenticate(request, username=email, password=password)
        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            return Response({
                'token': token.key,
                'user_id': user.pk,
                'email': user.email,
                'role': user.role  
            })
        return Response({"error": "Invalid Credentials"}, status=400)
    

class UserProfileApiView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        # Automatically fetch or create a blank profile for the logged-in user
        profile, created = UserProfile.objects.get_or_create(user=request.user)
        serializer = UserProfileSerializer(profile)
        return Response(serializer.data)

    def put(self, request):
        profile, created = UserProfile.objects.get_or_create(user=request.user)
        # partial=True allows us to update just a few fields without requiring all of them
        serializer = UserProfileSerializer(profile, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({"success": "Profile updated successfully!", "data": serializer.data})
        return Response(serializer.errors, status=400)