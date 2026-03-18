from django.urls import path, include
from .views import *

app_name = "jobs"

urlpatterns = [
    # --- REACT API ENDPOINTS --- 
    path('api/home/', HomeApiView.as_view(), name='api-home'),
    path('api/auth/login/', CustomAuthToken.as_view(), name='api-login'),
    path('api/auth/register/', RegisterApiView.as_view(), name='api-register'), 
    
    path('api/jobs/create/', JobCreateApiView.as_view(), name='api-job-create'),
    path('api/jobs/<int:job_id>/apply/', ApplyJobApiView.as_view(), name='api-apply-job'),
    path('api/employer/applicants/', EmployerApplicantsApiView.as_view(), name='api-employer-applicants'),
    path('api/jobs/<int:pk>/delete/', JobDeleteApiView.as_view(), name='api-job-delete'),
    path('api/jobs/<int:pk>/', JobDetailApiView.as_view(), name='api-job-detail'),
    path('api/my-applications/', MyApplicationsApiView.as_view(), name='api-my-apps'),
    
    # Rescued these two API endpoints from the bottom!
    path('api/employer/my-jobs/', EmployerJobsApiView.as_view(), name='api-my-jobs'),
    path('api/profile/', UserProfileApiView.as_view(), name='api-profile'),

    # --- DELETED THE OLD HTML VIEWS ---
    # The paths for '', 'search', 'jobs', and 'jobs/<int:id>' are gone.
    # React Router will handle these URLs now!
]