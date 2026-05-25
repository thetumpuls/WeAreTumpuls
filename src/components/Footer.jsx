import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer style={{
        background: 'rgba(0, 0, 0, 0.2)', // translucent black for a sleek dark feel
        padding: '3rem 4rem 1.5rem',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1.5rem',
        marginTop: 'auto',
        position: 'relative',
        zIndex: 10
    }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '1200px', flexWrap: 'wrap', gap: '3rem' }}>
            <div style={{ flex: '1 1 300px' }}>
                <NavLink to="/" style={{ textDecoration: 'none' }}>
                    <div className="logo" style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', fontWeight: 900, fontSize: '1.2rem', letterSpacing: '-0.5px' }}>
                        <span className="logo-box" style={{ background: '#fff', color: '#111', padding: '0.2rem 0.6rem', borderRadius: '20px', marginRight: '5px' }}>The</span>
                        <span className="logo-text" style={{ color: 'var(--neon-green)' }}>Tumpul's</span>
                    </div>
                </NavLink>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', lineHeight: '1.6' }}>
                    Creative Digital Agency yang berbasis di Universitas Muhammadiyah Jakarta. Mengasah ide-ide Anda menjadi karya digital yang tajam dan inovatif.
                </p>
            </div>
            
            <div style={{ flex: '1 1 150px' }}>
                <h4 style={{ color: '#fff', marginBottom: '1.2rem', fontSize: '1.1rem', fontWeight: 800 }}>Quick Links</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    <NavLink to="/" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--neon-green)'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.7)'}>Home</NavLink>
                    <NavLink to="/about.html" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--neon-green)'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.7)'}>About We</NavLink>
                    <NavLink to="/price-list.html" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--neon-green)'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.7)'}>Price List</NavLink>
                    <NavLink to="/work.html" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseOver={e => e.target.style.color='var(--neon-green)'} onMouseOut={e => e.target.style.color='rgba(255,255,255,0.7)'}>Our Works</NavLink>
                </div>
            </div>

            <div style={{ flex: '1 1 200px' }}>
                <h4 style={{ color: '#fff', marginBottom: '1.2rem', fontSize: '1.1rem', fontWeight: 800 }}>Contact Us</h4>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.8rem', lineHeight: '1.5' }}>
                    Jl. Cempaka Putih Tengah,<br />Jakarta Pusat, DKI Jakarta 10510
                </p>
                <a href="mailto:azzamfauzan21@gmail.com" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--neon-green)'} onMouseOut={e => e.currentTarget.style.color='rgba(255,255,255,0.7)'}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--neon-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    azzamfauzan21@gmail.com
                </a>
                <a href="https://wa.me/6289602693952" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--neon-green)'} onMouseOut={e => e.currentTarget.style.color='rgba(255,255,255,0.7)'}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--neon-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    +62 896-0269-3952
                </a>
            </div>
        </div>
        
        <div style={{ width: '100%', maxWidth: '1200px', height: '1px', background: 'rgba(255,255,255,0.1)', marginTop: '2rem' }}></div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', maxWidth: '1200px', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem' }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
                &copy; {new Date().getFullYear()} The Tumpul's Digital Agency. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.85rem' }}>Privacy Policy</a>
                <a href="#" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none', fontSize: '0.85rem' }}>Terms of Service</a>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
