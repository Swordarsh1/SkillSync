from django.contrib import admin
from django.urls import path, include, re_path
from django.views.generic import TemplateView
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    
    # These include all the API endpoints we defined in jobsapp/urls.py
    path('', include('jobsapp.urls')),
    path('accounts/', include('accounts.urls')),
    
    # THE REACT CATCH-ALL
    # This must be the very last pattern. 
    # It serves the React index.html for every other route.
    re_path(r'^.*$', TemplateView.as_view(template_name='index.html')),
]

# Serve media files during development
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)