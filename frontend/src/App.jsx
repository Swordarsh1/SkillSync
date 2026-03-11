import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, Navigate, useParams , useLocation } from 'react-router-dom'



// ==========================================
// 1. CSS STYLES (Floating & Footer)
// ==========================================
const floatingStyles = `

  @keyframes bobble {

    0%, 100% { transform: translateY(0) rotate(0deg); }

    50% { transform: translateY(-25px) rotate(3deg); }

  }



  .floating-job-tag {

    position: absolute;

    background: white;

    padding: 12px 24px; /* ⬅️ Bigger padding */

    border-radius: 16px; /* ⬅️ Rounder corners for bigger bubbles */

    font-size: 1rem;    /* ⬅️ Slightly larger text */

    font-weight: 600;

    color: #666;

    border: 1px solid #eef2ff;

    box-shadow: 0 12px 30px rgba(0,0,0,0.06);

    animation: bobble 9s ease-in-out infinite; /* ⬅️ Faster speed (9s vs 12s) */

    z-index: 0;

    pointer-events: none;

    opacity: 0.7;

    white-space: nowrap;

  }



  /* 🎯 FOOTER STYLES - Matched to your Navbar theme */
  .footer-custom {
    background-color: #0f112a; /* Very dark navy/indigo */
    color: #ffffff;
    font-family: 'Inter', sans-serif;
  }
  .footer-top-bar {
    background-color: #17193d; /* Slightly lighter navy */
    border-bottom: 1px solid rgba(255,255,255,0.05);
  }
  .footer-pill-btn {
    background: transparent;
    border: 1px solid rgba(255,255,255,0.2);
    color: #fff;
    border-radius: 10px;
    padding: 8px 16px;
    font-size: 0.85rem;
    font-weight: 500;
    transition: 0.3s;
  }
  .footer-pill-btn:hover {
    background: rgba(255,255,255,0.1);
    border-color: #4f5ef6;
  }
  .footer-link {
    color: #a0a4d0;
    text-decoration: none;
    font-size: 0.9rem;
    display: block;
    margin-bottom: 10px;
    transition: 0.2s;
  }
  .footer-link:hover {
    color: #4f5ef6;
  }
  .footer-heading {
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 25px;
    letter-spacing: 0.5px;
    text-transform: uppercase;
    color: #ffffff;
  }
`;

// ==========================================
// 2. FLOATING BACKGROUND COMPONENT
// ==========================================
function FloatingBackground() {
  const items = [
    { label: "Frontend Developer", top: "15%", left: "10%", delay: "0s" },
    { label: "Machine Learning", top: "25%", left: "75%", delay: "1s" },
    { label: "Kanpur", top: "60%", left: "15%", delay: "2s" },
    { label: "UI/UX Designer", top: "70%", left: "80%", delay: "0.5s" },
    { label: "Bangalore", top: "10%", left: "85%", delay: "1.5s" },
    { label: "Product Manager", top: "80%", left: "45%", delay: "3s" },
    { label: "Remote", top: "15%", left: "50%", delay: "2.5s" },
    { label: "Full Stack", top: "50%", left: "85%", delay: "1.2s" },
    { label: "Cyber Security", top: "45%", left: "5%", delay: "0.8s" },
  ];

  return (
    <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: 0 }}>
      {items.map((item, i) => (
        <div 
          key={i} 
          className="floating-job-tag d-none d-md-block" 
          style={{ 
            top: item.top, 
            left: item.left, 
            animationDelay: item.delay 
          }}
        >
          {item.label}
        </div>
      ))}
    </div>
  );
}

// ==========================================
// 3. FOOTER COMPONENT (Wellfound Style)
// ==========================================
function Footer() {
  return (
    <footer className="footer-custom">
      <div className="footer-top-bar py-4">
        <div className="container d-flex flex-wrap justify-content-center gap-3">
          <button className="footer-pill-btn">Job Collections <i className="fa fa-chevron-down ms-1 small"></i></button>
          <button className="footer-pill-btn">Remote Jobs <i className="fa fa-chevron-down ms-1 small"></i></button>
          <button className="footer-pill-btn">Jobs by Location <i className="fa fa-chevron-down ms-1 small"></i></button>
          <button className="footer-pill-btn">Jobs by Role <i className="fa fa-chevron-down ms-1 small"></i></button>
          <button className="footer-pill-btn">Jobs by Role & Location <i className="fa fa-chevron-down ms-1 small"></i></button>
        </div>
      </div>

      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 mb-5">
            <h3 className="fw-bold mb-4">SKILLSYNC<span style={{color: '#36dab7'}}></span></h3>
            <div className="d-flex gap-4 fs-5 mt-5">
              <a href="#" className="text-white opacity-50"><i className="fab fa-twitter"></i></a>
              <a href="#" className="text-white opacity-50"><i className="fab fa-instagram"></i></a>
              <a href="#" className="text-white opacity-50"><i className="fab fa-linkedin"></i></a>
            </div>
          </div>
          
          <div className="col-md-3 col-6 mb-4">
            <h6 className="footer-heading">For Candidates</h6>
            <a href="#" className="footer-link">Overview</a>
            <a href="#" className="footer-link">Startup Jobs</a>
            <a href="#" className="footer-link">Web3 Jobs</a>
            <a href="#" className="footer-link">Featured</a>
            <a href="#" className="footer-link">Salary Calculator</a>
          </div>

          <div className="col-md-3 col-6 mb-4">
            <h6 className="footer-heading">For Recruiters</h6>
            <a href="#" className="footer-link">Overview</a>
            <a href="#" className="footer-link">Recruit Pro</a>
            <a href="#" className="footer-link">Curated</a>
            <a href="#" className="footer-link">Hire Developers</a>
            <a href="#" className="footer-link">Pricing</a>
          </div>

          <div className="col-md-2 mb-4">
            <h6 className="footer-heading">Company</h6>
            <a href="#" className="footer-link">About</a>
            <a href="#" className="footer-link">Help</a>
            <a href="#" className="footer-link">Blog</a>
            <a href="#" className="footer-link">Terms & Risks</a>
            <a href="#" className="footer-link">Privacy & Cookies</a>
          </div>
        </div>

        <hr className="my-5 opacity-25" />

        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center small opacity-50">
          <p className="mb-0">Copyright © 2026 SkillSync. All rights reserved.</p>
          <div className="d-flex gap-3 mt-3 mt-md-0">
            <span>Browse by:</span>
            <a href="#" className="text-white text-decoration-underline">Jobs</a>
            <a href="#" className="text-white text-decoration-underline">Remote</a>
            <a href="#" className="text-white text-decoration-underline">Locations</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// ==========================================
// 4. GATEKEEPER
// ==========================================
const ProtectedRoute = ({ children, allowedRole }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('user_role');

  if (!token) return <Navigate to="/login" replace />;
  
  if (allowedRole && userRole !== allowedRole) {
    alert(`Access Denied: This area is for ${allowedRole}s only.`);
    return <Navigate to="/" replace />;
  }

  return children;
};

// ==========================================
// 4. SHARED NAVBAR
// ==========================================
function Navbar() {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const token = localStorage.getItem('token');
  const userEmail = localStorage.getItem('user_email');
  const userRole = localStorage.getItem('user_role');
  const location = useLocation(); 

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = "/";
  };

  return (
    <header className="header position-sticky top-0 shadow-sm" style={{ zIndex: 1050, background: 'linear-gradient(90deg, #4f5ef6 0%, #7c51c9 100%)', boxShadow: '0 8px 48px rgba(70,70,120,0.18)' }}>
      <nav className="navbar navbar-expand-lg py-3">
        <div className="container">
          <Link to="/" className="navbar-brand text-white fw-bold d-flex align-items-center" style={{ fontSize: '1.6rem', letterSpacing: '1.5px' }}>
            SKILL<span style={{ color: '#36dab7' }}>SYNC</span>
          </Link>
          <div className="collapse navbar-collapse justify-content-end">
            <ul className="navbar-nav ms-auto align-items-center">
              
              {location.pathname !== '/' && (
                <li className="nav-item"><Link to="/" className="nav-link text-white me-4 fw-bold small">HOME</Link></li>
              )}
              
              {token && userRole === 'employer' && (
                <li className="nav-item">
                  <Link to="/employer/dashboard" className="nav-link text-white me-4 fw-bold border border-white rounded-pill px-3 py-1 small text-uppercase">EMPLOYER PANEL</Link>
                </li>
              )}

              {token && userRole === 'employee' && (
                <li className="nav-item"><Link to="/my-applications" className="nav-link text-white me-4 fw-bold small">MY APPS</Link></li>
              )}

              <li className="nav-item ms-2 d-flex gap-2">
                {token ? (
                  <div className="dropdown" style={{ position: 'relative' }}>
                    <button 
                      className="btn btn-light rounded-pill px-4 py-2 fw-bold d-flex align-items-center shadow-sm" 
                      onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                      style={{ color: '#4f5ef6' }}
                    >
                      <div className="rounded-circle bg-primary text-white me-2 d-flex align-items-center justify-content-center" style={{width: '24px', height: '24px', fontSize: '12px'}}>
                        {userEmail ? userEmail[0].toUpperCase() : 'U'}
                      </div>
                      {userEmail ? userEmail.split('@')[0] : 'User'}
                    </button>
                    {/* 🌟 FIXED: Added onClick here so clicking anywhere inside closes the menu */}
                    <ul 
                      className={`dropdown-menu dropdown-menu-end shadow-lg border-0 mt-2 ${isUserDropdownOpen ? 'show' : ''}`} 
                      style={{ borderRadius: '15px', position: 'absolute' }}
                      onClick={() => setIsUserDropdownOpen(false)} 
                    >
                      <li><Link className="dropdown-item py-2 fw-semibold" to="/profile">My Profile</Link></li>
                      <li><hr className="dropdown-divider" /></li>
                      <li><button className="dropdown-item py-2 fw-semibold text-danger" onClick={handleLogout}>Logout</button></li>
                    </ul>
                  </div>
                ) : (
                  <>
                    <Link to="/login" className="btn btn-light rounded-pill px-4 py-2 fw-bold shadow-sm" style={{ color: '#4f5ef6', textDecoration: 'none' }}>
                      LOGIN
                    </Link>
                    <Link to="/register" className="btn btn-dark rounded-pill px-4 py-2 fw-bold shadow-sm" style={{ textDecoration: 'none' }}>
                      REGISTER
                    </Link>
                  </>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
// ==========================================
// 6. HOME PAGE
// ==========================================
function Home() {
  const [jobs, setJobs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [locationQuery, setLocationQuery] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/home/')
      .then(res => res.json())
      .then(data => {
        setJobs(data.featured_jobs);
        setLoading(false);
      })
      .catch(err => console.error(err));
  }, []);

  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    job.location.toLowerCase().includes(locationQuery.toLowerCase())
  );

  return (
    <main>
      <section className="py-5 position-relative" style={{ background: 'linear-gradient(180deg, #f8faff 0%, #eef2ff 100%)', overflow: 'hidden' }}>
        
        <FloatingBackground />

        <div className="container py-5 position-relative" style={{ zIndex: 1 }}>
          <div className="text-center mb-5">
            <h1 className="display-3 fw-bold mb-3" style={{ color: '#1a1a1a', letterSpacing: '-1px' }}>
              Your <span style={{ color: '#4f5ef6' }}>Career</span> Begins Here.
            </h1>
            <p className="lead text-muted mx-auto" style={{ maxWidth: '600px' }}>
              Join thousands of developers and creatives finding their next big move on SkillSync.
            </p>
          </div>

          <div className="col-lg-9 mx-auto bg-white p-4 rounded-5 shadow-lg border-0">
            <div className="row g-3 align-items-center">
              <div className="col-md-5">
                <div className="input-group">
                  <span className="input-group-text bg-transparent border-0"><i className="fa fa-search text-primary"></i></span>
                  <input type="text" className="form-control border-0 bg-transparent py-3" placeholder="Job Title or Keyword" onChange={(e) => setSearchQuery(e.target.value)} />
                </div>
              </div>
              <div className="col-md-5 border-start">
                <div className="input-group">
                  <span className="input-group-text bg-transparent border-0"><i className="fa fa-map-marker-alt text-danger"></i></span>
                  <input type="text" className="form-control border-0 bg-transparent py-3" placeholder="Location (e.g. Kanpur)" onChange={(e) => setLocationQuery(e.target.value)} />
                </div>
              </div>
              <div className="col-md-2">
                <button className="btn btn-primary w-100 rounded-pill py-3 fw-bold shadow" style={{ background: '#4f5ef6', border: 'none' }}>SEARCH</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container py-5">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="fw-bold m-0">Latest Opportunities</h2>
          <span className="text-muted fw-semibold">{filteredJobs.length} Jobs Found</span>
        </div>

        <div className="row">
          {filteredJobs.map(job => (
            <div className="col-lg-4 mb-4" key={job.id}>
              <div className="card h-100 border-0 shadow-sm p-4 rounded-4" style={{ transition: '0.3s' }}>
                <div className="d-flex align-items-center mb-4">
                  <div className="rounded-4 p-3 me-3" style={{ background: '#f0f4ff' }}>
                    <i className="fa fa-briefcase text-primary fs-4"></i>
                  </div>
                  <div>
                    <h5 className="fw-bold mb-1">{job.title}</h5>
                    <span className="text-muted small fw-bold text-uppercase">{job.company_name}</span>
                  </div>
                </div>
                <div className="d-flex mb-3 gap-3">
                  <div className="small text-muted"><i className="fa fa-map-marker-alt text-danger me-1"></i>{job.location}</div>
                  <div className="small text-muted"><i className="fa fa-money-bill-wave text-success me-1"></i>₹{job.salary ? job.salary : 'N/A'}</div>
                </div>
                <p className="text-muted small mb-4">{job.description.substring(0, 110)}...</p>
                <div className="mt-auto d-flex gap-2">
                  <Link to={`/jobs/${job.id}`} className="btn btn-primary flex-grow-1 rounded-pill fw-bold" style={{background: '#4f5ef6'}}>VIEW DETAILS</Link>
                  <button className="btn btn-light rounded-circle"><i className="fa fa-bookmark"></i></button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

// ==========================================
// 7. JOB DETAIL PAGE
// ==========================================
function JobDetail() {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('user_role');

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/jobs/${id}/`)
      .then(res => res.json())
      .then(data => setJob(data));
  }, [id]);

  const handleApply = () => {
    if (!token) return alert("Please login to apply!");
    if (userRole !== 'employee') return alert("Only Job Seekers can apply!");

    fetch(`http://127.0.0.1:8000/api/jobs/${id}/apply/`, {
      method: 'POST',
      headers: { 'Authorization': `Token ${token}`, 'Content-Type': 'application/json' }
    })
    .then(res => res.json())
    .then(data => alert(data.success || data.error));
  };

  if (!job) return <div className="text-center py-5"><div className="spinner-border"></div></div>;

  return (
    <div className="container py-5 mt-4">
      <div className="bg-white p-5 rounded-5 shadow-lg border-0">
        <div className="row">
          <div className="col-lg-8 border-end">
            <h1 className="fw-bold display-5 mb-2">{job.title}</h1>
            <p className="text-primary fw-bold mb-4 fs-5">{job.company_name} • {job.location}</p>
            <hr className="my-4" />
            <h5 className="fw-bold mb-3 text-uppercase small text-muted">Job Description</h5>
            <p className="text-muted lead" style={{ whiteSpace: 'pre-line', lineHeight: '1.8' }}>{job.description}</p>
          </div>
          <div className="col-lg-4 ps-lg-5">
            <div className="p-4 rounded-4 bg-light border-0">
              <h5 className="fw-bold mb-4">Job Summary</h5>
              <div className="mb-3"><span className="text-muted small text-uppercase fw-bold d-block">Salary Range</span><span className="fw-bold">₹{job.salary ? job.salary : 'Negotiable'}</span></div>
              <div className="mb-4"><span className="text-muted small text-uppercase fw-bold d-block">Posted On</span><span className="fw-bold">{new Date(job.created_at).toLocaleDateString()}</span></div>
              <button onClick={handleApply} className="btn btn-primary w-100 rounded-pill py-3 fw-bold shadow" style={{background: '#4f5ef6'}}>APPLY NOW</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 8. LOGIN PAGE
// ==========================================
function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/auth/login/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: email.toLowerCase(), password: password })
    })
    .then(res => res.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user_role', data.role);
        localStorage.setItem('user_email', data.email);
        window.location.href = "/"; 
      } else {
        alert("Login failed. Check credentials.");
      }
    }).catch(() => alert("Error connecting to server."));
  };

  return (
    <div className="container py-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-md-5">
          <div className="card shadow-lg border-0 rounded-5 p-5 bg-white">
            <h2 className="text-center fw-bold mb-4">Welcome Back</h2>
            <form onSubmit={handleLogin}>
              <div className="mb-4"><label className="fw-bold small text-muted text-uppercase mb-1">Email</label><input type="email" className="form-control rounded-pill border-0 bg-light px-4 py-3" onChange={e => setEmail(e.target.value)} required /></div>
              <div className="mb-4"><label className="fw-bold small text-muted text-uppercase mb-1">Password</label><input type="password" className="form-control rounded-pill border-0 bg-light px-4 py-3" onChange={e => setPassword(e.target.value)} required /></div>
              <button type="submit" className="btn btn-primary w-100 rounded-pill py-3 fw-bold mt-2" style={{background: '#4f5ef6'}}>LOGIN NOW</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 9. REGISTER PAGE
// ==========================================
function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [role, setRole] = useState('employee'); 

  const handleRegister = (e) => {
    e.preventDefault();
    fetch('http://127.0.0.1:8000/api/auth/register/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        email: email.toLowerCase(), 
        password: password, 
        full_name: fullName,
        role: role 
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.success) {
        alert("Registration Successful! Please Login.");
        window.location.href = "/login";
      } else {
        alert(data.error || "Registration failed.");
      }
    }).catch(() => alert("Error connecting to server."));
  };

  return (
    <div className="container py-5 mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-lg border-0 rounded-5 p-5 bg-white">
            <h2 className="text-center fw-bold mb-4">Create Account</h2>
            <form onSubmit={handleRegister}>
              <div className="mb-3">
                <label className="fw-bold small text-muted text-uppercase mb-1">Full Name</label>
                <input type="text" className="form-control rounded-pill border-0 bg-light px-4 py-3" placeholder="John Doe" onChange={e => setFullName(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label className="fw-bold small text-muted text-uppercase mb-1">Email</label>
                <input type="email" className="form-control rounded-pill border-0 bg-light px-4 py-3" placeholder="email@example.com" onChange={e => setEmail(e.target.value)} required />
              </div>
              <div className="mb-3">
                <label className="fw-bold small text-muted text-uppercase mb-1">Password</label>
                <input type="password" className="form-control rounded-pill border-0 bg-light px-4 py-3" placeholder="********" onChange={e => setPassword(e.target.value)} required />
              </div>
              <div className="mb-4">
                <label className="fw-bold small text-muted text-uppercase mb-2">I am a...</label>
                <select className="form-select rounded-pill border-0 bg-light px-4 py-3" value={role} onChange={e => setRole(e.target.value)}>
                  <option value="employee">Job Seeker</option>
                  <option value="employer">Employer</option>
                </select>
              </div>
              <button type="submit" className="btn btn-dark w-100 rounded-pill py-3 fw-bold shadow" style={{background: '#1a1a1a'}}>REGISTER NOW</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 10. EMPLOYER DASHBOARD
// ==========================================
function EmployerDashboard() {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ 
    title: '', 
    location: '', 
    description: '', 
    salary: '', 
    company_name: '', 
    company_description: '' 
  });
  const [applicants, setApplicants] = useState([]);
  const [myJobs, setMyJobs] = useState([]);
  const token = localStorage.getItem('token');

  const load = () => {
    fetch('http://127.0.0.1:8000/api/employer/applicants/', { 
      headers: { 'Authorization': `Token ${token}` } 
    })
    .then(res => res.json())
    .then(data => setApplicants(data));

    fetch('http://127.0.0.1:8000/api/employer/my-jobs/', { 
      headers: { 'Authorization': `Token ${token}` } 
    })
    .then(res => res.json())
    .then(data => setMyJobs(data));
  };

  useEffect(() => { load(); }, []);

  const handleDelete = (id) => {
    if (window.confirm("Delete job?")) {
      fetch(`http://127.0.0.1:8000/api/jobs/${id}/delete/`, { 
        method: 'DELETE', 
        headers: { 'Authorization': `Token ${token}` } 
      }).then(() => load());
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finalData = {
      ...formData,
      type: "1", 
      category: "1",
      last_date: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
    };

    fetch('http://127.0.0.1:8000/api/jobs/create/', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json', 
        'Authorization': `Token ${token}` 
      },
      body: JSON.stringify(finalData)
    })
    .then(async (res) => {
      if (res.ok) {
        alert("Job Published Successfully!");
        setShowForm(false);
        setFormData({ title: '', location: '', description: '', salary: '', company_name: '', company_description: '' }); 
        load(); 
      } else {
        const errorData = await res.json();
        console.error("Publish Error Details:", errorData);
        alert("Failed to publish. See console.");
      }
    });
  };

  return (
    <div className="container py-5 mt-4">
      <div className="p-5 bg-white shadow-lg rounded-5 border-0">
        <div className="d-flex justify-content-between align-items-center mb-5">
          <h2 className="fw-bold m-0">Employer Panel</h2>
          <button className="btn btn-primary rounded-pill px-4 fw-bold shadow-sm" onClick={() => setShowForm(!showForm)}>{showForm ? 'CANCEL' : '+ NEW POSTING'}</button>
        </div>

        {showForm ? (
          <form onSubmit={handleSubmit} className="row g-4 mb-5">
             <div className="col-md-6">
                <label className="fw-bold small text-muted text-uppercase mb-2">Job Title</label>
                <input type="text" className="form-control rounded-pill py-3 bg-light border-0 px-4" placeholder="Title" value={formData.title} onChange={e => setFormData({...formData, title: e.target.value})} required />
             </div>
             <div className="col-md-6">
                <label className="fw-bold small text-muted text-uppercase mb-2">Location</label>
                <input type="text" className="form-control rounded-pill py-3 bg-light border-0 px-4" placeholder="Location" value={formData.location} onChange={e => setFormData({...formData, location: e.target.value})} required />
             </div>
             <div className="col-md-6">
                <label className="fw-bold small text-muted text-uppercase mb-2">Salary (₹)</label>
                <input type="number" className="form-control rounded-pill py-3 bg-light border-0 px-4" placeholder="Salary" value={formData.salary} onChange={e => setFormData({...formData, salary: e.target.value})} required />
             </div>
             <div className="col-md-6">
                <label className="fw-bold small text-muted text-uppercase mb-2">Company Name</label>
                <input type="text" className="form-control rounded-pill py-3 bg-light border-0 px-4" placeholder="Company Name" value={formData.company_name} onChange={e => setFormData({...formData, company_name: e.target.value})} required />
             </div>
             <div className="col-12">
                <label className="fw-bold small text-muted text-uppercase mb-2">Company Description</label>
                <input type="text" className="form-control rounded-pill py-3 bg-light border-0 px-4" placeholder="Brief about company" value={formData.company_description} onChange={e => setFormData({...formData, company_description: e.target.value})} required />
             </div>
             <div className="col-12">
                <label className="fw-bold small text-muted text-uppercase mb-2">Job Description</label>
                <textarea className="form-control rounded-4 py-3 bg-light border-0 px-4" rows="4" placeholder="Job details" value={formData.description} onChange={e => setFormData({...formData, description: e.target.value})} required />
             </div>
             <div className="col-12"><button type="submit" className="btn btn-dark rounded-pill px-5 py-3 fw-bold mt-2">PUBLISH JOB</button></div>
          </form>
        ) : (
          <div className="row g-4 mb-5">
            <div className="col-md-6"><div className="p-4 rounded-5 text-white shadow" style={{background: '#4f5ef6'}}><h3>{myJobs.length}</h3><p className="mb-0 opacity-75 fw-bold small text-uppercase">Your Postings</p></div></div>
            <div className="col-md-6"><div className="p-4 rounded-5 text-white shadow" style={{background: '#36dab7'}}><h3>{applicants.length}</h3><p className="mb-0 opacity-75 fw-bold small text-uppercase">Applicants</p></div></div>
          </div>
        )}

        <div className="row mt-5">
          <div className="col-lg-7 border-end pe-lg-5">
            <h5 className="fw-bold mb-4">Recent Applicants</h5>
            <table className="table table-hover border-0">
              <thead className="bg-light"><tr><th className="border-0">Candidate</th><th className="border-0">Role</th><th className="border-0">Date</th></tr></thead>
              <tbody>
                {applicants.length > 0 ? applicants.map(app => (
                  <tr key={app.id}>
                    <td className="py-3 fw-bold">{app.applicant_name}</td>
                    <td className="py-3 text-muted">{app.job_title}</td>
                    <td className="py-3 small text-muted">{app.applied_at}</td>
                  </tr>
                )) : <tr><td colSpan="3" className="text-center py-4 text-muted small">No applicants yet.</td></tr>}
              </tbody>
            </table>
          </div>
          <div className="col-lg-5 ps-lg-5">
            <h5 className="fw-bold mb-4">Manage My Jobs</h5>
            {myJobs.length > 0 ? myJobs.map(job => (
              <div key={job.id} className="d-flex justify-content-between p-3 mb-2 bg-light rounded-4 small">
                <span className="fw-bold">{job.title}</span>
                <button onClick={() => handleDelete(job.id)} className="btn btn-sm btn-outline-danger rounded-circle border-0">
                  <i className="fa fa-trash"></i>
                </button>
              </div>
            )) : <p className="text-center py-4 text-muted small">You haven't posted any jobs yet.</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

// ==========================================
// 11. EMPLOYEE: MY APPLICATIONS
// ==========================================
function MyApplications() {
  const [apps, setApps] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/my-applications/', { headers: { 'Authorization': `Token ${token}` } })
      .then(res => res.json()).then(data => setApps(data));
  }, []);

  return (
    <div className="container py-5 mt-4">
      <h2 className="fw-bold mb-5">My Sent Applications</h2>
      {apps.map(app => (
        <div key={app.id} className="card border-0 shadow-sm p-4 mb-3 rounded-4 d-flex flex-row justify-content-between align-items-center">
          <div><h5 className="fw-bold mb-1">{app.job_title}</h5><p className="text-muted small mb-0">{app.company} • {app.location}</p></div>
          <span className="badge bg-soft-primary text-primary rounded-pill px-3 py-2" style={{background: '#eef2ff'}}>Applied on {app.applied_at}</span>
        </div>
      ))}
    </div>
  );
}


// ==========================================
// 12. USER PROFILE PAGE
// ==========================================
function Profile() {
  const userEmail = localStorage.getItem('user_email');
  const userRole = localStorage.getItem('user_role');
  const [isEditing, setIsEditing] = useState(false);
  
  // State to hold what the user types
  const [formData, setFormData] = useState({
    education: '',
    skills: '',
    github: '',
    companyName: '',
    companyWebsite: '',
    bio: ''
  });

  const displayName = userEmail ? userEmail.split('@')[0] : 'Your Name';

  return (
    <div className="container py-5 mt-4">
      <div className="row g-4">
        
        {/* Left Column: ID Card */}
        <div className="col-lg-4">
          <div className="card border-0 shadow-sm rounded-5 p-4 text-center h-100">
            <div 
              className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center mx-auto mb-3" 
              style={{ width: '100px', height: '100px', fontSize: '2.5rem', background: 'linear-gradient(90deg, #4f5ef6 0%, #7c51c9 100%)' }}
            >
              {userEmail ? userEmail[0].toUpperCase() : 'U'}
            </div>
            <h4 className="fw-bold mb-1">{displayName}</h4>
            <p className="text-muted mb-3">{userEmail}</p>
            <span className={`badge rounded-pill px-4 py-2 text-uppercase mb-4 ${userRole === 'employer' ? 'bg-dark' : 'bg-primary'}`}>
              {userRole === 'employer' ? 'Employer' : 'Job Seeker'}
            </span>
            <button className="btn btn-outline-primary rounded-pill w-100 fw-bold" onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? 'CANCEL EDIT' : 'EDIT PROFILE'}
            </button>
          </div>
        </div>

        {/* Right Column: Details & Settings */}
        <div className="col-lg-8">
          <div className="card border-0 shadow-sm rounded-5 p-5 h-100">
            <h4 className="fw-bold mb-4">Account Details</h4>
            
            <div className="row g-4">
              {/* Dynamic Fields based on Role */}
              {userRole === 'employee' ? (
                <>
                  <div className="col-12 border-bottom pb-3">
                    <label className="fw-bold small text-muted text-uppercase mb-2">Education</label>
                    {isEditing ? (
                      <input type="text" className="form-control rounded-pill py-3 bg-light border-0 px-4" placeholder="e.g. Second Year B.Tech CSE" value={formData.education} onChange={e => setFormData({...formData, education: e.target.value})} />
                    ) : (
                      <p className="mb-0 fs-6 text-dark">{formData.education || <span className="text-muted fst-italic">Not provided yet</span>}</p>
                    )}
                  </div>
                  
                  <div className="col-12 border-bottom pb-3">
                    <label className="fw-bold small text-muted text-uppercase mb-2">Top Skills</label>
                    {isEditing ? (
                      <input type="text" className="form-control rounded-pill py-3 bg-light border-0 px-4" placeholder="e.g. Python, C++, Machine Learning, Django" value={formData.skills} onChange={e => setFormData({...formData, skills: e.target.value})} />
                    ) : (
                      <p className="mb-0 fs-6 text-dark">{formData.skills || <span className="text-muted fst-italic">Not provided yet</span>}</p>
                    )}
                  </div>

                  <div className="col-12 border-bottom pb-3">
                    <label className="fw-bold small text-muted text-uppercase mb-2">GitHub / Portfolio URL</label>
                    {isEditing ? (
                      <input type="url" className="form-control rounded-pill py-3 bg-light border-0 px-4" placeholder="https://github.com/..." value={formData.github} onChange={e => setFormData({...formData, github: e.target.value})} />
                    ) : (
                      <p className="mb-0 fs-6">
                        {formData.github ? <a href={formData.github} target="_blank" rel="noreferrer" style={{color: '#4f5ef6'}}>{formData.github}</a> : <span className="text-muted fst-italic">Not provided yet</span>}
                      </p>
                    )}
                  </div>

                  <div className="col-12 border-bottom pb-3">
                    <label className="fw-bold small text-muted text-uppercase mb-2 d-block">Resume</label>
                    {isEditing ? (
                      <input type="file" className="form-control rounded-pill bg-light border-0 px-4 py-2" />
                    ) : (
                      <p className="mb-0 fs-6 text-muted fst-italic">No resume uploaded</p>
                    )}
                  </div>
                </>
              ) : (
                <>
                  <div className="col-12 border-bottom pb-3">
                    <label className="fw-bold small text-muted text-uppercase mb-2">Company / Startup Name</label>
                    {isEditing ? (
                      <input type="text" className="form-control rounded-pill py-3 bg-light border-0 px-4" placeholder="Company Name" value={formData.companyName} onChange={e => setFormData({...formData, companyName: e.target.value})} />
                    ) : (
                      <p className="mb-0 fs-6 text-dark">{formData.companyName || <span className="text-muted fst-italic">Not provided yet</span>}</p>
                    )}
                  </div>

                  <div className="col-12 border-bottom pb-3">
                    <label className="fw-bold small text-muted text-uppercase mb-2">Company Website</label>
                    {isEditing ? (
                      <input type="url" className="form-control rounded-pill py-3 bg-light border-0 px-4" placeholder="https://..." value={formData.companyWebsite} onChange={e => setFormData({...formData, companyWebsite: e.target.value})} />
                    ) : (
                      <p className="mb-0 fs-6">
                        {formData.companyWebsite ? <a href={formData.companyWebsite} target="_blank" rel="noreferrer" style={{color: '#4f5ef6'}}>{formData.companyWebsite}</a> : <span className="text-muted fst-italic">Not provided yet</span>}
                      </p>
                    )}
                  </div>
                </>
              )}

              {/* Common Bio Field */}
              <div className="col-12">
                <label className="fw-bold small text-muted text-uppercase mb-2">About / Bio</label>
                {isEditing ? (
                  <textarea className="form-control rounded-4 py-3 bg-light border-0 px-4" rows="4" placeholder="Tell us about yourself..." value={formData.bio} onChange={e => setFormData({...formData, bio: e.target.value})}></textarea>
                ) : (
                  <p className="mb-0 fs-6 text-dark" style={{ whiteSpace: 'pre-line' }}>{formData.bio || <span className="text-muted fst-italic">Not provided yet</span>}</p>
                )}
              </div>

              {isEditing && (
                <div className="col-12 mt-4 pt-3">
                  <button type="button" className="btn btn-primary rounded-pill px-5 py-3 fw-bold shadow-sm" style={{ background: '#4f5ef6' }} onClick={() => setIsEditing(false)}>SAVE CHANGES</button>
                </div>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

// ==========================================
// 12. MAIN APP ROUTER
// ==========================================
function App() {
  return (
    <Router>
      <style>{floatingStyles}</style>
      <div style={{ background: '#f8f9fa', minHeight: '100vh', fontFamily: "'Inter', sans-serif", display: 'flex', flexDirection: 'column' }}>
        <Navbar />
        <div style={{ flex: '1 0 auto' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            <Route path="/employer/dashboard" element={<ProtectedRoute allowedRole="employer"><EmployerDashboard /></ProtectedRoute>} />
            <Route path="/my-applications" element={<ProtectedRoute allowedRole="employee"><MyApplications /></ProtectedRoute>} />
            <Route path="/profile" element={<ProtectedRoute><Profile /></ProtectedRoute>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App;