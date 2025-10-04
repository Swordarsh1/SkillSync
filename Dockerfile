# Use official Python image
FROM python:3.10-slim

# Set work directory in container
WORKDIR /app

# Copy only requirements.txt first
COPY requirements.txt ./

# Install Python dependencies
RUN pip install --upgrade pip
RUN pip install --no-cache-dir -r requirements.txt

# Copy all project files except venv
COPY . .

# Collect static files (for production)
RUN python manage.py collectstatic --noinput

# Expose app port
EXPOSE 8000

# Set Django settings (change to your prod settings module if needed)
ENV DJANGO_SETTINGS_MODULE=jobs.settings


# Run Gunicorn (WSGI server)
CMD ["gunicorn", "jobs.wsgi:application", "--bind", "0.0.0.0:8000"]

