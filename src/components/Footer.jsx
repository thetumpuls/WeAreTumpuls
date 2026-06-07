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
                <a href="mailto:thetumpuls@gmail.com" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginBottom: '0.6rem', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--neon-green)'} onMouseOut={e => e.currentTarget.style.color='rgba(255,255,255,0.7)'}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--neon-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                    thetumpuls@gmail.com
                </a>
                <a href="https://wa.me/6285781021417" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--neon-green)'} onMouseOut={e => e.currentTarget.style.color='rgba(255,255,255,0.7)'}>
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--neon-green)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                    +62 857-8102-1417
                </a>
                <div style={{ display: 'flex', gap: '10px', marginTop: '1rem' }}>
                     <a href="https://github.com/thetumpuls" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--neon-green)'} onMouseOut={e => e.currentTarget.style.color='rgba(255,255,255,0.7)'}>
                         <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                     </a>
                     <a href="https://www.threads.com/@thetumpuls" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.7)', transition: 'color 0.3s' }} onMouseOver={e => e.currentTarget.style.color='var(--neon-green)'} onMouseOut={e => e.currentTarget.style.color='rgba(255,255,255,0.7)'}>
                         <svg width="20" height="20" viewBox="0 0 192 192" fill="currentColor"><path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.707 61.7381 111.932 64.1366 115.961 68.814C118.893 72.2193 120.854 76.925 121.825 82.8638C114.511 81.6207 106.601 81.2385 98.145 81.7233C74.3247 83.0954 59.0111 96.9879 60.0396 116.292C60.5615 126.084 65.4397 134.508 73.775 140.011C80.8224 144.663 89.899 146.938 99.3323 146.423C111.79 145.74 121.563 140.987 128.381 132.296C133.559 125.696 136.834 117.143 138.28 106.366C144.217 109.949 148.617 114.664 151.047 120.332C155.179 129.967 155.42 145.8 142.501 158.708C131.182 170.016 117.576 174.908 97.0135 175.059C74.2042 174.89 56.9538 167.575 45.7381 153.317C35.2355 139.966 29.8077 120.682 29.6052 96C29.8077 71.3178 35.2355 52.0336 45.7381 38.6827C56.9538 24.4249 74.2039 17.11 97.0132 16.9405C119.988 17.1113 137.539 24.4614 149.184 38.788C154.894 45.8136 159.199 54.6488 162.037 64.9503L178.184 60.6422C174.744 47.9622 169.331 37.0357 161.965 27.974C147.036 9.60668 125.202 0.195148 97.0695 0H96.9569C68.8816 0.19447 47.2921 9.6418 32.7883 28.0793C19.8819 44.4864 13.2244 67.3157 13.0007 95.9325L13 96L13.0007 96.0675C13.2244 124.684 19.8819 147.514 32.7883 163.921C47.2921 182.358 68.8816 191.806 96.9569 192H97.0695C122.03 191.827 139.624 185.292 154.118 170.811C173.081 151.866 172.51 128.119 166.26 113.541C161.776 103.087 153.227 94.5962 141.537 88.9883ZM98.4405 129.507C88.0005 130.095 77.1544 125.409 76.6196 115.372C76.2232 107.93 81.9158 99.626 99.0812 98.6368C101.047 98.5234 102.976 98.468 104.871 98.468C111.106 98.468 116.939 99.0737 122.242 100.233C120.264 124.935 108.662 128.946 98.4405 129.507Z"/></svg>
                     </a>
                </div>
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
