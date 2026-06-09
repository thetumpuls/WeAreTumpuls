import React from 'react';
import { useLocation } from 'react-router-dom';

const ConsultationCTA = () => {
  const location = useLocation();

  if (location.pathname === '/about.html' || location.pathname === '/contact.html') {
    return null;
  }

  return (
    <div style={{
      width: '100%',
      padding: '4rem 2rem',
      display: 'flex',
      justifyContent: 'center',
      position: 'relative',
      zIndex: 10
    }}>
      <div style={{
        maxWidth: '800px',
        width: '100%',
        textAlign: 'center',
        background: 'rgba(255, 255, 255, 0.05)',
        padding: '3rem 2rem',
        borderRadius: '30px',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(15px)',
        WebkitBackdropFilter: 'blur(15px)'
      }}>
        <h2 style={{ color: '#fff', fontSize: '2rem', marginBottom: '1rem', fontWeight: 800 }}>Butuh Konsultasi Proyek Anda?</h2>
        <p style={{ color: 'rgba(255, 255, 255, 0.7)', fontSize: '1.1rem', marginBottom: '2.5rem', lineHeight: '1.6' }}>
          Tim kami siap membantu merealisasikan ide digital Anda. Jangan ragu untuk menghubungi kami jika Anda memiliki pertanyaan atau ingin berdiskusi lebih lanjut.
        </p>
        <button 
          onClick={() => {
            const isSpecialPage = location.pathname === '/price-list.html' || location.pathname === '/work.html';
            const text = isSpecialPage 
              ? 'Halo min, Saya tertarik dengan desain digital yang dibuat dan ingin mengetahui lebih lanjut lagi'
              : 'Halo min, Saya ingin informasi lebih lanjut mengenai desain digital';
            window.open(`https://wa.me/6285869557636?text=${encodeURIComponent(text)}`, '_blank');
          }}
          style={{
            background: 'transparent',
            color: 'var(--neon-green)',
            border: '1px solid var(--neon-green)',
            padding: '0.8rem 2.5rem',
            borderRadius: '30px',
            fontSize: '1.1rem',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--neon-green)';
            e.currentTarget.style.color = '#000';
            e.currentTarget.style.transform = 'translateY(-3px)';
            e.currentTarget.style.boxShadow = '0 10px 20px rgba(178, 255, 5, 0.2)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'transparent';
            e.currentTarget.style.color = 'var(--neon-green)';
            e.currentTarget.style.transform = 'translateY(0)';
            e.currentTarget.style.boxShadow = 'none';
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
          Konsultasi Sekarang
        </button>
      </div>
    </div>
  );
};

export default ConsultationCTA;
