 # SkillSync

SkillSync is a full-stack Django web application designed to simplify job searching and listings management. It enables users to find jobs they love by searching thousands of listings and provides a platform for employers to manage their job postings efficiently.

## Features

- User registration and authentication for job seekers and employers.
- Job search with filtering by position and location.
- Featured and trending job listings on the homepage.
- Separate dashboards for job seekers and employers.
- Real-time notifications and application tracking.
- Responsive design using Bootstrap and FontAwesome icons.
- Deployed on AWS-EC2 using Docker

## Built With

- Python 3.x
- Django
- Bootstrap 5
- JavaScript (jQuery)
- FontAwesome
- SQLite (for development)
- Other dependencies listed in `requirements.txt`


### Prerequisites

- Python 3.x installed
- Virtual environment tool (venv)
- Git

### Installation

1. Clone the repository:
git clone https://github.com/Swordarsh1/SkillSync.git
cd SkillSync



2. Create and activate a virtual environment:
python3 -m venv venv
source venv/bin/activate # On Windows: venv\Scripts\activate


3. Install required packages:
pip install -r requirements.txt



4. Apply migrations:
python manage.py migrate



5. Run the development server:
python manage.py runserver



6. Open your browser at `http://127.0.0.1:8000` to see the app.

## Usage

- Register as a job seeker or employer.
- Search and apply for jobs.
- Employers can post new jobs and manage applicants.
- Check featured jobs and trending listings.

## Project Structure

- `accounts/` - User authentication and profiles.
- `jobs/` - Core app with job management.
- `jobsapp/` - Additional job-related views and forms.
- `static/` - CSS, JS, and image assets.
- `templates/` - HTML templates.
- `manage.py` - Django admin & management.
- `requirements.txt` - Python dependencies.

### Docker

To run SkillSync locally via Docker:

1. Build the image:
docker build -t skillsync .


2. (Optional) Use Docker Compose for easy setup:
docker-compose up --build


3. Run the container:
docker run -p 8000:8000 skillsync


4. Visit `http://localhost:8000` to see the app!

See `Dockerfile` and `docker-compose.yml` in the repo for more details.
AWS Deployment (EC2)


### AWS EC2 Deployment

SkillSync can be deployed to the cloud using AWS EC2:

1. Launch an Ubuntu EC2 instance.
2. Install Docker:
sudo apt update
sudo apt install docker.io
sudo systemctl start docker
sudo systemctl enable docker

3. Clone your repo onto the server:
git clone https://github.com/Swordarsh1/SkillSync.git

cd SkillSync

4. Build and run using Docker (see above).
5. Configure a security group to allow inbound traffic on port 8000.
6. Visit your EC2 public IP at `http://your-ec2-ip:8000` in your browser.

## Contributing

Contributions are welcome! Please fork the repo, make changes, and submit pull requests.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

## Contacts

Chitvan Singh 
Email: Chitvansingh11@gmail.com  
GitHub: [https://github.com/Chitvan11](https://github.com/Chitvan11)  
LinkedIn:  https://www.linkedin.com/in/chitvansingh11/

Abhinav Jaiwsal
Email: abhinav.jayaswal0308@gmail.com
GitHub: (https://github.com/abhinavjayaswal0308)
LinkedIn:  (https://www.linkedin.com/in/abhinav-jayaswal-527616331)

Adarsh Verma  
Email: Adarshve23@gmail.com  
GitHub: [https://github.com/Swordarsh1](https://github.com/Swordarsh1)  
LinkedIn:  https://www.linkedin.com/in/adarsh-verma-657596279/

Daksh Mehrotra
Email : mehrotradaksh6@gmail.com
Github : https://github.com/dakshhh20
LinkedIn : https://www.linkedin.com/in/daksh-mehrotra-82586b379/

---

*Last updated: September 27, 2025*
