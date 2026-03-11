from rest_framework import serializers
from .models import Job, Applicant
from accounts.models import User
from .models import UserProfile


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'first_name', 'last_name', 'email', 'role']

class JobSerializer(serializers.ModelSerializer):
 
    user = UserSerializer(read_only=True) 

    class Meta:
        model = Job
        fields = '__all__'  

class ApplicantSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    job = JobSerializer(read_only=True)

    class Meta:
        model = Applicant
        fields = '__all__'

class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserProfile
        fields = '__all__'