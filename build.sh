#!/usr/bin/env bash
<<<<<<< HEAD
# Exit on error
set -o errexit

echo "--- Building React Frontend ---"
cd frontend
npm install
npm run build
cd ..

echo "--- Building Django Backend ---"
=======
set -o errexit
>>>>>>> b2cad1256230f4ba3ff88285a85c376e7d266e18
pip install -r requirements.txt
python manage.py collectstatic --no-input
python manage.py migrate