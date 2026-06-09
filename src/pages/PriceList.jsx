import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import '../assets/tech-stack.css';

const PriceList = () => {
  const [selectedService, setSelectedService] = useState(null);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    
    const rotateX = ((mouseY - centerY) / centerY) * 10;
    const rotateY = ((centerX - mouseX) / centerX) * 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)';
  };

  const services = {
    website: [
      { id: 'web-landing', name: 'LANDINGPAGE', type: '(FRONT END)', price: 'Rp 700.000', features: ['Single Page Design', 'Responsive & Modern', 'Source Code'], details: 'Layanan pembuatan Landing Page (Front End) profesional untuk Website.' },
      { id: 'web-db', name: 'DATABASE', type: '(BACK END)', price: 'Rp 1.500.000', features: ['Database Architecture', 'API Development', 'Security'], details: 'Layanan pembuatan arsitektur Database (Back End) handal untuk Website.' },
      { id: 'web-ai', name: 'AI', type: 'Integration', price: 'Rp 1.500.000', features: ['Custom AI Models', 'Smart Automation', 'Analytics'], details: 'Integrasi kecerdasan buatan (AI) mutakhir ke dalam sistem Website Anda.' },
      { id: 'web-backend-ai', name: 'BACK END + AI', type: 'Full Package', price: 'Rp 2.000.000', features: ['Database Setup', 'AI Integration', 'Advanced API'], details: 'Paket lengkap pembuatan Back End beserta integrasi AI untuk Website.' }
    ],
    mobile: [
      { id: 'mob-landing', name: 'LANDINGPAGE', type: '(FRONT END)', price: 'Rp 700.000', features: ['Mobile App UI', 'Responsive Design', 'Source Code'], details: 'Layanan pembuatan tampilan (Front End) untuk Aplikasi Mobile.' },
      { id: 'mob-db', name: 'DATABASE', type: '(BACK END)', price: 'Rp 1.500.000', features: ['Mobile Backend', 'API Development', 'Scalability'], details: 'Layanan pembuatan Database (Back End) khusus untuk Aplikasi Mobile.' },
      { id: 'mob-ai', name: 'AI', type: 'Integration', price: 'Rp 1.500.000', features: ['Mobile AI Features', 'Smart Processing', 'Optimization'], details: 'Integrasi kecerdasan buatan (AI) ke dalam Aplikasi Mobile.' },
      { id: 'mob-backend-ai', name: 'BACK END + AI', type: 'Full Package', price: 'Rp 2.000.000', features: ['Complete Backend', 'AI Integration', 'Performance'], details: 'Paket lengkap pembuatan Back End dan integrasi AI untuk Aplikasi Mobile.' }
    ],
    social_media: [
      { id: 'soc-feed', name: 'FEED INSTAGRAM', type: '(1 FEED)', price: 'Rp 150.000', features: ['Custom Design', 'High Resolution', 'Copywriting'], details: 'Desain feed Instagram profesional untuk satu post.' },
      { id: 'soc-manage', name: 'CREATE LOGO / CHANGE LOGO', type: 'Design', price: 'Rp 150.000', features: ['Custom Design', 'High Resolution', 'Source File'], details: 'Layanan pembuatan logo baru atau modifikasi logo yang sudah ada.' }
    ],
    banner: [
      { id: 'ban-x', name: 'X-BANNER WISUDA', type: 'Design', price: 'Rp 100.000', features: ['Custom Illustration', 'Print-ready Format', 'Revisions'], details: 'Desain X-Banner khusus untuk acara wisuda yang berkesan.' },
      { id: 'ban-biasa', name: 'BANNER BIASA', type: 'Design', price: 'Rp 100.000', features: ['Custom Design', 'High-Res Graphics', 'Fast Delivery'], details: 'Desain banner standar untuk berbagai keperluan marketing.' }
    ],
    uiux: [
      { id: 'ui-mob', name: 'UI MOBILE', type: 'Design', price: 'Rp 300.000', features: ['Mobile Screens', 'Wireframing', 'Prototyping'], details: 'Desain User Interface (UI) profesional untuk Aplikasi Mobile.' },
      { id: 'ui-web', name: 'UI WEBSITE', type: 'Design', price: 'Rp 300.000', features: ['Web Pages', 'Responsive Grid', 'Prototyping'], details: 'Desain User Interface (UI) profesional untuk Website.' }
    ]
  };

  useEffect(() => {
    const techItems = document.querySelectorAll('.tech-item, .price-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const item = entry.target;
                const delayStr = item.getAttribute('style')?.match(/--delay:\s*(.*?)(;|$)/);
                const delay = delayStr ? delayStr[1] : "0s";
                
                setTimeout(() => {
                    item.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                    item.style.opacity = '1';
                    item.style.transform = 'translateY(0)';
                }, parseFloat(delay) * 1000);
                
                observer.unobserve(item);
            }
        });
    }, { threshold: 0.1 });

    techItems.forEach(item => {
        observer.observe(item);
    });

    return () => {
        techItems.forEach(item => observer.unobserve(item));
    };
  }, []);

  return (
    <>
      <div className="background-grid"></div>
      <Navbar />
      <main className="tech-container" style={{ paddingBottom: '5rem' }}>
          <div className="tech-header">
              <h1 className="page-title">OUR <span className="neon-text">PRICE LIST</span></h1>
              <p className="subtitle">Layanan profesional dari The Tumpul's Digital Agency.</p>
          </div>

          <div className="tech-sections">
              {/* Modal Detail */}
              {selectedService && (
                <div style={{
                  position: 'fixed',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'rgba(0,0,0,0.7)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  zIndex: 1000,
                  animation: 'fadeIn 0.3s ease'
                }}>
                  <div style={{
                    background: 'rgba(20,20,30,0.95)',
                    border: '1px solid var(--neon-green)',
                    borderRadius: '20px',
                    padding: '2rem',
                    maxWidth: '500px',
                    color: '#fff',
                    animation: 'slideUp 0.3s ease',
                    boxShadow: '0 0 30px rgba(178, 255, 5, 0.3)'
                  }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                      <h2 style={{ color: 'var(--neon-green)', margin: 0 }}>{selectedService.name}</h2>
                      <button onClick={() => setSelectedService(null)} style={{
                        background: 'none',
                        border: 'none',
                        color: 'var(--neon-green)',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        padding: '0.5rem'
                      }}>✕</button>
                    </div>
                    
                    <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '1rem', fontSize: '0.9rem' }}>{selectedService.type}</p>
                    
                    <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem', lineHeight: '1.6' }}>{selectedService.details}</p>
                    
                    <div style={{ marginBottom: '1.5rem' }}>
                      <h4 style={{ color: 'var(--neon-green)', marginBottom: '0.5rem' }}>Fitur Included:</h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                        {selectedService.features.map((feature, idx) => (
                          <li key={idx} style={{ padding: '0.5rem 0', color: 'rgba(255,255,255,0.7)', paddingLeft: '1rem', borderLeft: '2px solid var(--neon-green)' }}>
                            ✓ {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: 'var(--neon-green)', marginBottom: '1.5rem' }}>{selectedService.price}</div>
                    
                    <button onClick={() => {
                        const text = `Halo The Tumpul's, saya tertarik untuk memesan layanan ${selectedService.name} ${selectedService.type}. Boleh minta info lebih lanjut?`;
                        window.open(`https://wa.me/6285869557636?text=${encodeURIComponent(text)}`, '_blank');
                    }} style={{
                      background: 'var(--neon-green)',
                      color: '#000',
                      border: 'none',
                      padding: '0.8rem 1.5rem',
                      borderRadius: '10px',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      width: '100%',
                      transition: 'all 0.3s'
                    }} onMouseEnter={(e) => e.target.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}>
                      Pesan Sekarang
                    </button>
                  </div>
                </div>
              )}

              {Object.keys(services).map((categoryKey) => {
                  const title = categoryKey === 'website' ? 'WEBSITE' : 
                                categoryKey === 'mobile' ? 'APLIKASI MOBILE' :
                                categoryKey === 'social_media' ? 'SOSIAL MEDIA' :
                                categoryKey === 'banner' ? 'BANNER DESIGN' : 'UI/UX';

                  return (
                      <div key={categoryKey} className="tech-category glass-card" style={{ padding: '2rem', transition: 'transform 0.1s ease', marginBottom: '3rem' }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                          <h2 style={{ marginBottom: '1.5rem', textAlign: 'center' }}>{title}</h2>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', justifyContent: 'center', width: '100%', margin: '0 auto' }}>
                              {services[categoryKey].map((service, index) => (
                                <div
                                  key={service.id}
                                  className="price-card hover-wiggle"
                                  onClick={() => setSelectedService(service)}
                                  style={{
                                    '--delay': `${(index % 3 + 1) * 0.1}s`,
                                    opacity: 0,
                                    transform: 'translateY(20px)',
                                    background: 'rgba(255,255,255,0.03)',
                                    padding: '1.5rem',
                                    borderRadius: '15px',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    minHeight: '300px'
                                  }}
                                  onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = 'var(--neon-green)';
                                    e.currentTarget.style.boxShadow = '0 0 20px rgba(178, 255, 5, 0.3)';
                                  }}
                                  onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                                    e.currentTarget.style.boxShadow = 'none';
                                  }}
                                >
                                  <h3 style={{ color: 'var(--neon-green)', marginBottom: '0.5rem', fontSize: '1.2rem', textAlign: 'center' }}>{service.name}</h3>
                                  <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '1rem', textAlign: 'center' }}>{service.type}</p>
                                  <ul style={{ listStyle: 'none', padding: 0, marginBottom: '1.5rem', textAlign: 'center', color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                      {service.features.map((feature, idx) => (
                                        <li key={idx}>{feature}</li>
                                      ))}
                                  </ul>
                                  <div style={{ marginTop: 'auto', fontWeight: 'bold', fontSize: '1.2rem', color: '#fff', textAlign: 'center' }}>{service.price}</div>
                                  <div style={{ marginTop: '1rem', fontSize: '0.8rem', color: 'var(--neon-green)', opacity: 0.7, textAlign: 'center' }}>Klik untuk detail</div>
                                </div>
                              ))}
                          </div>
                      </div>
                  );
              })}
          </div>
      </main>

      <style>{`
        .hover-wiggle:hover {
          animation: wiggle 0.5s ease-in-out;
        }
        
        @keyframes wiggle {
          0%, 100% { transform: translateX(0) translateY(0); }
          10% { transform: translateX(-5px) translateY(-2px); }
          20% { transform: translateX(5px) translateY(2px); }
          30% { transform: translateX(-5px) translateY(-2px); }
          40% { transform: translateX(5px) translateY(2px); }
          50% { transform: translateX(-5px) translateY(-2px); }
          60% { transform: translateX(5px) translateY(2px); }
          70% { transform: translateX(-5px) translateY(-2px); }
          80% { transform: translateX(5px) translateY(2px); }
          90% { transform: translateX(-5px) translateY(-2px); }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </>
  );
};

export default PriceList;
