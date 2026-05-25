import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../assets/style.css';

const Home = () => {
    const navigate = useNavigate();

    useEffect(() => {
        // 3D Tilt Effect for Glass Cards
        const cards = document.querySelectorAll('.glass-card');

        const handleMouseMove = (e) => {
            const card = e.currentTarget;
            let baseRot = 0;
            if (card.classList.contains('card-left')) {
                baseRot = -8;
            } else if (card.classList.contains('card-right')) {
                baseRot = 12;
            }

            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -20;
            const rotateY = ((x - centerX) / centerX) * 20;

            card.style.animation = 'none';
            card.style.transform = `perspective(1000px) rotate(${baseRot}deg) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
            card.style.transition = 'transform 0.1s ease-out';
        };

        const handleMouseLeave = (e) => {
            const card = e.currentTarget;
            let baseRot = 0;
            if (card.classList.contains('card-left')) {
                baseRot = -8;
            } else if (card.classList.contains('card-right')) {
                baseRot = 12;
            }

            card.style.transform = `rotate(${baseRot}deg)`;
            card.style.transition = 'transform 0.5s ease-out';

            setTimeout(() => {
                card.style.animation = 'float 6s ease-in-out infinite';
            }, 500);
        };

        cards.forEach(card => {
            card.addEventListener('mousemove', handleMouseMove);
            card.addEventListener('mouseleave', handleMouseLeave);
        });

        const neonText = document.querySelector('.neon-text');
        const colors = ['#a3ff00', '#00e5ff', '#ff00e6', '#ffffff'];

        let intervalId;
        if (neonText) {
            intervalId = setInterval(() => {
                if (Math.random() > 0.96) {
                    const randomColor = colors[Math.floor(Math.random() * colors.length)];
                    neonText.style.color = randomColor;
                    neonText.style.textShadow = `0 0 10px ${randomColor}, 0 0 20px ${randomColor}`;

                    setTimeout(() => {
                        neonText.style.color = 'var(--neon-green)';
                        neonText.style.textShadow = 'none';
                    }, 150);
                }
            }, 100);
        }

        return () => {
            cards.forEach(card => {
                card.removeEventListener('mousemove', handleMouseMove);
                card.removeEventListener('mouseleave', handleMouseLeave);
            });
            if (intervalId) clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <div className="background-grid"></div>

            <Navbar />
            <div className="hero-section" style={{ minHeight: 'calc(100vh - 100px)' }}>
                <main className="hero-content">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', zIndex: 2 }}>
                        <h1 className="hero-title">
                            <span className="neon-text" id="hashtag">#THE</span><br />
                            TUMPUL'S
                        </h1>
                        <p style={{ maxWidth: '600px', textAlign: 'center', marginTop: '1rem', fontSize: '1.2rem', lineHeight: '1.6', color: 'rgba(255, 255, 255, 0.8)' }}>
                            Creative Digital Agency. Kami berdedikasi untuk memberikan solusi terbaik di bidang pengembangan web, desain kreatif, social media management, dan teknologi AI terkini.
                        </p>
                    </div>

                    {/* Left floating card */}
                    <div className="glass-card card-left">
                        <div className="avatar-container">
                            <img src="./The-Tumpul-hitam.png" alt="Avatar" className="avatar-img" />
                        </div>
                        <div className="card-info">
                            <h4>creative.agency</h4>
                            <p>100+ projects done</p>
                        </div>
                    </div>

                    {/* Right floating card */}
                    <div className="glass-card card-right">
                        <div className="avatar-container">
                            <img src="./The-Tumpul.png" alt="Avatar" className="avatar-img" />
                        </div>
                        <div className="card-info">
                            <h4>marketing.expert</h4>
                            <p>50+ active clients</p>
                        </div>
                    </div>

                    {/* Hand drawn arrows */}
                    <svg className="neon-arrow arrow-1" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M130 20 C 130 20, 40 40, 30 120 M 30 120 L 10 90 M 30 120 L 60 110" stroke="#b2ff05"
                            strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    <svg className="neon-arrow arrow-2" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 130 C 20 130, 110 110, 120 30 M 120 30 L 140 60 M 120 30 L 90 40" stroke="#b2ff05"
                            strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    {/* Circular Badge */}
                    <div className="circular-badge">
                        <svg viewBox="0 0 100 100" width="120" height="120" className="rotating-text">
                            <defs>
                                <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                            </defs>
                            <text fontSize="13" fontWeight="900" fill="#000" letterSpacing="1">
                                <textPath href="#circle">
                                    DIGITAL AGENCY • WORK WITH US •
                                </textPath>
                            </text>
                        </svg>
                        <div className="center-icon">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"
                                strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="19" x2="19" y2="5"></line>
                                <polyline points="9 5 19 5 19 15"></polyline>
                            </svg>
                        </div>
                    </div>
                </main>
            </div>

            <section className="bottom-section">
                <div className="services-container">
                    {/* Card 1 */}
                    <div className="service-card" onClick={() => navigate('/price-list.html')} style={{ cursor: 'pointer' }}>
                        <h3>FRONTEND<br />DEVELOPMENT</h3>
                        <p>Creating beautiful and interactive user interfaces for modern web.</p>
                        <div className="tag-row">
                            <div className="tag blue-tag">
                                <img src="./React-icon.png" alt="React" className="tag-icon" />
                                <span>React.js</span>
                            </div>
                            <div className="tag neon-tag">HTML/CSS</div>
                        </div>
                    </div>

                    <svg className="black-arrow" viewBox="0 0 50 50" fill="none">
                        <path d="M10 10 Q 30 20, 40 40 M 40 40 L 45 25 M 40 40 L 25 45" stroke="#000" strokeWidth="3"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    {/* Card 2 */}
                    <div className="service-card center-card" onClick={() => navigate('/price-list.html')} style={{ cursor: 'pointer' }}>
                        <h3>MODERN & RESPONSIVE<br />WEB DESIGNS</h3>
                        <p>Ensuring your website looks perfect on all devices and screens.</p>
                        <div className="tag-row">
                            <div className="tag dark-blue-tag">
                                <span>Figma Design</span>
                            </div>
                            <div className="tag solid-neon-tag">
                                <span>UI/UX</span>
                            </div>
                        </div>
                        {/* Small badge inside center card */}
                        <div className="mini-badge">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="19" x2="19" y2="5"></line>
                                <polyline points="9 5 19 5 19 15"></polyline>
                            </svg>
                        </div>
                    </div>

                    <svg className="black-arrow arrow-up" viewBox="0 0 50 50" fill="none">
                        <path d="M10 40 Q 30 30, 40 10 M 40 10 L 45 25 M 40 10 L 25 15" stroke="#000" strokeWidth="3"
                            strokeLinecap="round" strokeLinejoin="round" />
                    </svg>

                    {/* Card 3 */}
                    <div className="service-card" onClick={() => navigate('/price-list.html')} style={{ cursor: 'pointer' }}>
                        <h3>BACKEND<br />& API SYSTEMS</h3>
                        <p>Building robust and scalable server architectures to power your apps.</p>
                        <div className="tag-row">
                            <div className="tag big-neon-tag">
                                <span className="small-text">EST. PROJECT TIME</span>
                                <span className="big-text">2-4 WEEKS</span>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Home;
