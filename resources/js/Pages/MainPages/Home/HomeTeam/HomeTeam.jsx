import React, { useState, useEffect } from 'react';
import './HomeTeam.css';

const HomeTeam = () => {
  const [currentIndex, setCurrentIndex] = useState(2);
  const [autoSlide, setAutoSlide] = useState(true);

  // Profile images (using placeholder URLs - replace with actual image paths)
  const profileImages = [
    "https://randomuser.me/api/portraits/men/32.jpg",
    "https://randomuser.me/api/portraits/women/44.jpg",
    "https://randomuser.me/api/portraits/men/22.jpg",
    "https://randomuser.me/api/portraits/women/63.jpg",
    "https://randomuser.me/api/portraits/men/45.jpg",
    "https://randomuser.me/api/portraits/women/50.jpg",
    "https://randomuser.me/api/portraits/men/60.jpg"
  ];

  const profileData = [
    {
      name: "Engr. Md. Rasel",
      title: "Senior Database Administrator & IT Instructor",
      experience: "10+ years of experience in the IT field",
      specialization: "Oracle Database Administration and Cloud Technologies",
      skills: [
        "Oracle Database Administration",
        "Performance Tuning & Troubleshooting",
        "High Availability (RAC, Data Guard, RMAN)",
        "Cloud Computing (AWS, Azure, Oracle Cloud)",
        "UNIX/Linux System Administration"
      ],
      certifications: [
        "Oracle Database Administration 2019 Certified Professional",
        "Microsoft Certified: Azure Database Administrator Associate",
        "Oracle Cloud Infrastructure 2023 Certified DevOps Professional",
        "Oracle Cloud Infrastructure 2023 Certified Architect Associate"
      ],
      achievements: [
        "Over 6 years managing complex UNIX-based Oracle Databases",
        "Expert in database administration best practices",
        "Trained and mentored IT professionals",
        "Speaker at multiple tech seminars and conferences"
      ],
      education: "B.Sc. in Computer Science & Engineering",
      age: 35,
      expertise: ["Database Architecture", "Cloud Migration", "System Optimization"]
    },
    {
      name: "Dr. Sarah Johnson",
      title: "Lead Data Scientist & AI Researcher",
      experience: "8 years in machine learning and AI",
      specialization: "Natural Language Processing and Computer Vision",
      skills: [
        "Python, TensorFlow, PyTorch",
        "Deep Learning Architectures",
        "Big Data Processing",
        "Statistical Modeling"
      ],
      certifications: [
        "Google Professional Data Engineer",
        "AWS Certified Machine Learning Specialty",
        "Deep Learning Specialization (Coursera)"
      ],
      achievements: [
        "Published 15+ papers in top AI conferences",
        "Developed award-winning NLP models",
        "Lead AI teams at Fortune 500 companies"
      ],
      education: "Ph.D. in Artificial Intelligence",
      age: 32,
      expertise: ["Neural Networks", "Predictive Analytics", "AI Ethics"]
    },
    {
      name: "Michael Chen",
      title: "DevOps Engineer & Cloud Architect",
      experience: "7 years in cloud infrastructure",
      specialization: "CI/CD pipelines and cloud security",
      skills: [
        "AWS, Azure, GCP",
        "Kubernetes, Docker",
        "Terraform, Ansible",
        "Linux System Administration"
      ],
      certifications: [
        "AWS Certified Solutions Architect - Professional",
        "Certified Kubernetes Administrator",
        "Google Cloud Professional Architect"
      ],
      achievements: [
        "Migrated 50+ services to cloud",
        "Reduced deployment times by 80%",
        "Implemented zero-downtime deployments"
      ],
      education: "M.Sc. in Cloud Computing",
      age: 30,
      expertise: ["Infrastructure as Code", "Microservices", "Site Reliability"]
    },
    {
      name: "Emily Rodriguez",
      title: "Cybersecurity Specialist",
      experience: "9 years in information security",
      specialization: "Penetration Testing and Threat Analysis",
      skills: [
        "Ethical Hacking",
        "SIEM Solutions",
        "Network Security",
        "Incident Response"
      ],
      certifications: [
        "Certified Information Systems Security Professional (CISSP)",
        "Certified Ethical Hacker (CEH)",
        "OSCP (Offensive Security Certified Professional)"
      ],
      achievements: [
        "Secured Fortune 100 company networks",
        "Discovered critical 0-day vulnerabilities",
        "Developed security training programs"
      ],
      education: "B.Sc. in Cybersecurity",
      age: 34,
      expertise: ["Red Teaming", "Digital Forensics", "Security Compliance"]
    },
    {
      name: "David Wilson",
      title: "Full Stack Developer",
      experience: "6 years in web development",
      specialization: "JavaScript Frameworks and API Development",
      skills: [
        "React, Angular, Vue",
        "Node.js, Express",
        "MongoDB, PostgreSQL",
        "RESTful API Design"
      ],
      certifications: [
        "Google Mobile Web Specialist",
        "AWS Certified Developer",
        "Scrum Master Certified"
      ],
      achievements: [
        "Built scalable e-commerce platforms",
        "Optimized web performance by 60%",
        "Mentored junior developers"
      ],
      education: "B.Sc. in Software Engineering",
      age: 28,
      expertise: ["Progressive Web Apps", "Serverless Architecture", "UI/UX"]
    },
    {
      name: "Lisa Park",
      title: "Data Engineering Lead",
      experience: "11 years in data infrastructure",
      specialization: "Big Data Processing and ETL Pipelines",
      skills: [
        "Hadoop, Spark",
        "Data Warehousing",
        "SQL, NoSQL",
        "Data Pipeline Optimization"
      ],
      certifications: [
        "Cloudera Certified Data Engineer",
        "Google Cloud Data Engineer",
        "Databricks Certified Associate"
      ],
      achievements: [
        "Built petabyte-scale data lakes",
        "Reduced ETL processing time by 70%",
        "Designed real-time analytics systems"
      ],
      education: "M.Sc. in Data Science",
      age: 37,
      expertise: ["Distributed Systems", "Stream Processing", "Data Governance"]
    },
    {
      name: "James Thompson",
      title: "IT Project Manager",
      experience: "12 years in IT project leadership",
      specialization: "Agile Methodologies and Digital Transformation",
      skills: [
        "Scrum, Kanban",
        "Budget Management",
        "Stakeholder Communication",
        "Risk Assessment"
      ],
      certifications: [
        "Project Management Professional (PMP)",
        "SAFe Agilist",
        "ITIL Foundation"
      ],
      achievements: [
        "Delivered 50+ projects on time and budget",
        "Led teams of 50+ developers",
        "Implemented company-wide Agile practices"
      ],
      education: "MBA in Technology Management",
      age: 40,
      expertise: ["Strategic Planning", "Team Leadership", "Process Improvement"]
    }
  ];

  // Combine profile data with images
  const completeProfiles = profileData.map((profile, index) => ({
    ...profile,
    image: profileImages[index]
  }));

  // Auto slide effect
  useEffect(() => {
    if (!autoSlide) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(interval);
  }, [autoSlide]);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? completeProfiles.length - 1 : prevIndex - 1
    );
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 10000); // Re-enable auto-slide after 10 seconds
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === completeProfiles.length - 1 ? 0 : prevIndex + 1
    );
    setAutoSlide(false);
    setTimeout(() => setAutoSlide(true), 10000); // Re-enable auto-slide after 10 seconds
  };

  // Calculate visible cards (2 before, active, 2 after)
  const visibleCards = [];
  for (let i = -2; i <= 2; i++) {
    const index = (currentIndex + i + completeProfiles.length) % completeProfiles.length;
    visibleCards.push({
      ...completeProfiles[index],
      position: i,
      active: i === 0
    });
  }

  return (
    <div className="team-container">
      <h2>Our Expert Team</h2>
      <p className="team-subtitle">Meet our team of professionals with diverse expertise</p>
      
      <div className="cards-wrapper">
        <button className="nav-button prev" onClick={handlePrev} aria-label="Previous profile">
          &lt;
        </button>
        
        <div className="cards-container">
          {visibleCards.map((profile, idx) => (
            <div 
              key={idx}
              className={`profile-card ${profile.active ? 'active' : ''} pos-${profile.position}`}
              onClick={() => {
                if (!profile.active) {
                  const diff = profile.position > 0 ? profile.position : profile.position;
                  setCurrentIndex((prev) => (prev + diff + completeProfiles.length) % completeProfiles.length);
                }
              }}
            >
              <div className="card-content">
                <div className="profile-image-container">
                  <img 
                    src={profile.image} 
                    alt={profile.name} 
                    className="profile-image"
                    loading="lazy"
                  />
                  {profile.active && <div className="active-indicator"></div>}
                </div>
                
                <h3>{profile.name}</h3>
                <p className="title">{profile.title}</p>
                <p className="experience">{profile.experience}</p>
                <p className="specialization"><strong>Specialization:</strong> {profile.specialization}</p>
                
                {profile.active && (
                  <>
                    <div className="details-section">
                      <h4>Skills</h4>
                      <ul>
                        {profile.skills.map((skill, i) => (
                          <li key={i}>{skill}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="details-section">
                      <h4>Certifications</h4>
                      <ul>
                        {profile.certifications.slice(0, 3).map((cert, i) => (
                          <li key={i}>{cert}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="stats">
                      <span><strong>Age:</strong> {profile.age}</span>
                      <span><strong>Education:</strong> {profile.education}</span>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
        
        <button className="nav-button next" onClick={handleNext} aria-label="Next profile">
          &gt;
        </button>
      </div>
      
      <div className="dots-indicator">
        {completeProfiles.map((_, index) => (
          <span 
            key={index}
            className={`dot ${index === currentIndex ? 'active' : ''}`}
            onClick={() => {
              setCurrentIndex(index);
              setAutoSlide(false);
              setTimeout(() => setAutoSlide(true), 500);
            }}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default HomeTeam;