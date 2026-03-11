import os



BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))



SECRET_KEY = '@pzqp#x^+#(olu#wy(6=mi9&a8n+g&x#af#apn07@j=5oin=xb'



DEBUG = True



# Application definition



INSTALLED_APPS = [

'django.contrib.admin',

'django.contrib.auth',

'django.contrib.contenttypes',

'django.contrib.sessions',

'django.contrib.messages',

'django.contrib.staticfiles',

'django.contrib.humanize',


# Custom Apps

'jobsapp',

'accounts',


# API & React Integration Tools

'rest_framework',

'rest_framework.authtoken', #  Added for Token Authentication

'corsheaders',

]



DEFAULT_AUTO_FIELD = 'django.db.models.BigAutoField'



AUTH_USER_MODEL = "accounts.User"



MIDDLEWARE = [

'django.middleware.security.SecurityMiddleware',

'whitenoise.middleware.WhiteNoiseMiddleware',

'django.contrib.sessions.middleware.SessionMiddleware',


# CORS MUST go before CommonMiddleware

'corsheaders.middleware.CorsMiddleware',


'django.middleware.common.CommonMiddleware',

'django.middleware.csrf.CsrfViewMiddleware',

'django.contrib.auth.middleware.AuthenticationMiddleware',

'django.contrib.messages.middleware.MessageMiddleware',

'django.middleware.clickjacking.XFrameOptionsMiddleware',

]



ROOT_URLCONF = 'jobs.urls'



TEMPLATES = [

{

'BACKEND': 'django.template.backends.django.DjangoTemplates',

'DIRS': [os.path.join(BASE_DIR, "templates")],

'APP_DIRS': True,

'OPTIONS': {

'context_processors': [

'django.template.context_processors.debug',

'django.template.context_processors.request',

'django.contrib.auth.context_processors.auth',

'django.contrib.messages.context_processors.messages',

],

},

},

]



WSGI_APPLICATION = 'jobs.wsgi.application'



# Database



DATABASES = {

'default': {

'ENGINE': 'django.db.backends.sqlite3',

'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),

}

}



# Password validation



AUTH_PASSWORD_VALIDATORS = []



# Internationalization



LANGUAGE_CODE = 'en-us'



TIME_ZONE = 'UTC'



USE_I18N = True



USE_L10N = True



USE_TZ = True



# Static files (CSS, JavaScript, Images)



PROJECT_ROOT = os.path.dirname(os.path.abspath(__file__))



STATIC_ROOT = os.path.join(PROJECT_ROOT, 'staticfiles')

ALLOWED_HOSTS = ['django-portal.herokuapp.com', 'localhost', '*']



STATIC_URL = '/static/'

STATICFILES_DIRS = [

os.path.join(BASE_DIR, "static"),

]

STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'



MEDIA_URL = "/media/"

MEDIA_ROOT = os.path.join(BASE_DIR, "media")



# --- NEW REACT API SETTINGS ---



# Allow your Vite frontend to request data without being blocked

CORS_ALLOWED_ORIGINS = [

"http://localhost:5173",

"http://127.0.0.1:5173",

]



# Set up REST Framework to include Token Authentication

REST_FRAMEWORK = {

'DEFAULT_AUTHENTICATION_CLASSES': [

'rest_framework.authentication.TokenAuthentication', #  Added for React access

'rest_framework.authentication.SessionAuthentication',

'rest_framework.authentication.BasicAuthentication',

],

'DEFAULT_PERMISSION_CLASSES': [

'rest_framework.permissions.AllowAny',

]

}

