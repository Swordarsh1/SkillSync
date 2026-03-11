from django.urls import path, include
from .views import *

app_name = "jobs"

urlpatterns = [
    # REACT API ENDPOINTS 
    path('api/home/', HomeApiView.as_view(), name='api-home'),
    path('api/auth/login/', CustomAuthToken.as_view(), name='api-login'),
    path('api/auth/register/', RegisterApiView.as_view(), name='api-register'), # Added Registration Endpoint
    
    path('api/jobs/create/', JobCreateApiView.as_view(), name='api-job-create'),
    path('api/jobs/<int:job_id>/apply/', ApplyJobApiView.as_view(), name='api-apply-job'),
    path('api/employer/applicants/', EmployerApplicantsApiView.as_view(), name='api-employer-applicants'),
    path('api/jobs/<int:pk>/delete/', JobDeleteApiView.as_view(), name='api-job-delete'),
    path('api/jobs/<int:pk>/', JobDetailApiView.as_view(), name='api-job-detail'),
    path('api/my-applications/', MyApplicationsApiView.as_view(), name='api-my-apps'),

    # EXISTING HTML/TEMPLATE VIEWS 
    path('', HomeView.as_view(), name='home'),
    path('search', SearchView.as_view(), name='searh'),
    path('jobs', JobListView.as_view(), name='jobs'),
    path('jobs/<int:id>', JobDetailsView.as_view(), name='jobs-detail'),
    path('api/employer/my-jobs/', EmployerJobsApiView.as_view(), name='api-my-jobs'),
    path('api/profile/', UserProfileApiView.as_view(), name='api-profile'),
]