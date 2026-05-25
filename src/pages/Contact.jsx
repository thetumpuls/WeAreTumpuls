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

    fetch("https://formsubmit.co/ajax/azzamfauzan21@gmail.com", {
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
