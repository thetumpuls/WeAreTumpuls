import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../assets/contact.css';

const Contact = () => {
  const [formStatus, setFormStatus] = useState({ message: '', type: '' });
  const [isSending, setIsSending] = useState(false);

  useEffect(() => {
    const cards = document.querySelectorAll('.contact-form-container');
    
    const handleMouseMove = (e) => {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top;  
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = ((y - centerY) / centerY) * -15; 
        const rotateY = ((x - centerX) / centerX) * 15;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        card.style.transition = 'transform 0.1s ease-out';
    };

    const handleMouseLeave = (e) => {
        const card = e.currentTarget;
        card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
        card.style.transition = 'transform 0.5s ease-out';
    };

    cards.forEach(card => {
        card.addEventListener('mousemove', handleMouseMove);
        card.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
        cards.forEach(card => {
            card.removeEventListener('mousemove', handleMouseMove);
            card.removeEventListener('mouseleave', handleMouseLeave);
        });
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const email = e.target.email.value;
    const message = e.target.message.value;

    if (!name || !email || !message) {
        setFormStatus({ message: 'Please fill out all fields.', type: 'status-error' });
        return;
    }

    setIsSending(true);

    fetch("https://formsubmit.co/ajax/thetumpuls@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        })
    })
    .then(response => response.json())
    .then(data => {
        setFormStatus({ message: 'Message sent successfully! We will get back to you soon.', type: 'status-success' });
        e.target.reset();
        setIsSending(false);

        setTimeout(() => {
            setFormStatus({ message: '', type: '' });
        }, 5000);
    })
    .catch(error => {
        console.error(error);
        setFormStatus({ message: 'Failed to send message. Please try again later.', type: 'status-error' });
        setIsSending(false);
    });
  };

  return (
    <>
      <div className="background-grid"></div>
      <Navbar />
      <main className="contact-container">
          <div className="contact-wrapper">
              <div className="contact-info">
                  <h1 className="page-title">LET'S <br/><span className="neon-text">TALK!</span></h1>
                  <p className="contact-desc">Got a project in mind or just want to say hi? Feel free to send a message. We are currently open for new projects and collaborations.</p>
                  
                  <div className="social-links">
                      <a href="https://www.instagram.com/thetumpuls/" target="_blank" rel="noopener noreferrer" className="social-btn glass-card">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                          <span>Instagram</span>
                      </a>
                      <a href="https://github.com/thetumpuls" target="_blank" rel="noopener noreferrer" className="social-btn glass-card">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                          <span>Github</span>
                      </a>
                      <a href="https://www.threads.com/@thetumpuls" target="_blank" rel="noopener noreferrer" className="social-btn glass-card">
                          <svg width="24" height="24" viewBox="0 0 192 192" fill="currentColor"><path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"/></svg>
                          <span>Threads</span>
                      </a>
                  </div>
              </div>

              <div className="contact-form-container glass-card">
                  <form id="contactForm" className="contact-form" onSubmit={handleSubmit}>
                      <div className="input-group">
                          <input type="text" id="name" name="name" required />
                          <label htmlFor="name">Your Name</label>
                      </div>
                      <div className="input-group">
                          <input type="email" id="email" name="email" required />
                          <label htmlFor="email">Email Address</label>
                      </div>
                      <div className="input-group">
                          <textarea id="message" name="message" rows="4" required></textarea>
                          <label htmlFor="message">Message</label>
                      </div>
                      <button type="submit" className="submit-btn" style={{ opacity: isSending ? 0.7 : 1, pointerEvents: isSending ? 'none' : 'auto' }}>
                          <span>{isSending ? 'Sending...' : 'Send Message'}</span>
                          {!isSending && <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>}
                      </button>
                      <div className={`form-status ${formStatus.type}`} id="formStatus">{formStatus.message}</div>
                  </form>
              </div>
          </div>
      </main>
    </>
  );
};

export default Contact;
