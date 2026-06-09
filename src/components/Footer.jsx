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
            


            <div style={{ flex: '0 1 250px', marginLeft: 'auto' }}>
                <h4 style={{ color: '#fff', marginBottom: '1.2rem', fontSize: '1.1rem', fontWeight: 800 }}>Contact Us</h4>
                <a href="https://maps.app.goo.gl/SrnbFRvQd2EnvzfU8" target="_blank" rel="noopener noreferrer" style={{ display: 'block', color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.8rem', lineHeight: '1.5', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--neon-green)'} onMouseOut={e => e.currentTarget.style.color='rgba(255,255,255,0.7)'}>
                    Jl. Cempaka Putih Tengah,<br />Jakarta Pusat, DKI Jakarta 10510
                    <div style={{ marginTop: '5px', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '5px', color: 'var(--neon-green)' }}>
                         <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                         Open in Google Maps
                    </div>
                </a>
                <a href="mailto:thetumpuls@gmail.com" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--neon-green)'} onMouseOut={e => e.currentTarget.style.color='rgba(255,255,255,0.7)'}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--neon-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    thetumpuls@gmail.com
                </a>
                <a href="https://wa.me/6285869557636" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--neon-green)'} onMouseOut={e => e.currentTarget.style.color='rgba(255,255,255,0.7)'}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--neon-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    +62 858-6955-7636
                </a>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '1rem' }}>
                     <a href="https://github.com/thetumpuls" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--neon-green)'} onMouseOut={e => e.currentTarget.style.color='rgba(255,255,255,0.7)'}>
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                         thetumpuls
                     </a>
                     <a href="https://www.instagram.com/thetumpuls" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--neon-green)'} onMouseOut={e => e.currentTarget.style.color='rgba(255,255,255,0.7)'}>
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                         @thetumpuls
                     </a>
                </div>
            </div>
        </div>
        
        <div style={{ width: '100%', maxWidth: '1200px', height: '1px', background: 'rgba(255,255,255,0.1)', marginTop: '2rem' }}></div>
        
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%', maxWidth: '1200px', flexWrap: 'wrap', gap: '1rem', marginTop: '0.5rem', textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.85rem' }}>
                © 2026 The Tumpul's Digital Agency. All rights reserved.
            </p>
        </div>
    </footer>
  );
};

export default Footer;
