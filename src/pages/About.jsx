import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../assets/about.css';

const teamMembers = [
    {
        name: "Taufik Hidayat",
        role: "CHIEF EXECUTIVE OFFICER",
        img: "./topik.JPG",
        ig: "https://www.instagram.com/taufikk_hidyt/"
    },
    {
        name: "Hadi Muhammad Rasyidan",
        role: "CHIEF OPERATING OFFICER",
        img: "./hady.JPG",
        ig: "https://www.instagram.com/hadimrsy/"
    },
    {
        name: "Muhammad Ziqri Nur Akbar",
        role: "CHIEF MARKETING OFFICER",
        img: "./foto-jikri.png",
        ig: "https://www.instagram.com/barrubbangunn/"
    },
    {
        name: "Fauzul Adhim",
        role: "HEAD SOCIAL MEDIA",
        img: "./adhim.JPG",
        ig: "https://www.instagram.com/fauzladhm_/"
    },
    {
        name: "Fauzan Azima",
        role: "HEAD PROGRAMMER",
        img: "./ojan.JPG",
        ig: "https://www.instagram.com/faoezan.a/"
    }
];

const About = () => {
    useEffect(() => {
        // Fade in animation for about text
        const aboutText = document.querySelector('.about-header');
        if (aboutText) {
            setTimeout(() => {
                aboutText.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
                aboutText.style.opacity = '1';
                aboutText.style.transform = 'translateY(0)';
            }, 100);
        }

        // Team cards animation
        const cards = document.querySelectorAll('.team-card');
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.style.transition = 'opacity 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275), transform 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 300 + (index * 150));
        });

        // 3D Tilt Effect for Team Cards
        const handleMouseMove = (e) => {
            const card = e.currentTarget;
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = ((y - centerY) / centerY) * -15;
            const rotateY = ((x - centerX) / centerX) * 15;

            card.style.transition = 'transform 0.1s ease-out';
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        };

        const handleMouseLeave = (e) => {
            const card = e.currentTarget;
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.transition = 'transform 0.5s ease-out';
        };

        // Attach event listeners after entrance animation finishes
        setTimeout(() => {
            cards.forEach(card => {
                card.addEventListener('mousemove', handleMouseMove);
                card.addEventListener('mouseleave', handleMouseLeave);
            });
        }, 300 + (cards.length * 150) + 600);

        return () => {
            cards.forEach(card => {
                card.removeEventListener('mousemove', handleMouseMove);
                card.removeEventListener('mouseleave', handleMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div className="background-grid"></div>

            <Navbar />

            <main className="about-container" style={{ flexDirection: 'column', padding: '2rem 2rem 6rem', alignItems: 'center' }}>

                <div className="about-header" style={{ opacity: 0, transform: 'translateY(20px)', textAlign: 'center', maxWidth: '800px', marginBottom: '4rem', zIndex: 2 }}>
                    <h1 className="page-title">WE ARE <br /><span className="neon-text">THE TUMPUL'S</span></h1>
                    <p className="bio-intro" style={{ fontSize: '1.2rem', color: 'rgba(255,255,255,0.8)', marginTop: '1rem', lineHeight: '1.6' }}>
                        Sebuah Digital Agency dengan tim profesional berjumlah 5 orang. Kami berdedikasi dalam menciptakan solusi digital yang kreatif dan inovatif untuk meningkatkan kualitas produk Anda.
                    </p>

                    <div style={{ marginTop: '2.5rem', padding: '2rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.1)', textAlign: 'center' }}>
                        <h2 style={{ fontSize: '1.8rem', color: 'var(--neon-green)', marginBottom: '1rem', fontWeight: 800 }}>Our Story</h2>
                        <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', lineHeight: '1.8' }}>
                            Nama <strong>"The Tumpul's"</strong> bermula dari sebuah filosofi sederhana: <em>sebuah alat yang awalnya tumpul, jika terus diasah akan menjadi sangat tajam</em>. Kami berlima berangkat dari berbagai latar belakang di Universitas Muhammadiyah Jakarta—mulai dari Informatika, Arsitektur, Sipil, hingga Mesin. Perbedaan ini justru menyatukan kami. Melalui diskusi dan kolaborasi antar lintas ilmu, kami percaya bahwa setiap ide yang "tumpul" dapat kami asah menjadi sebuah solusi digital yang tajam, inovatif, dan tepat sasaran. The Tumpul's lahir sebagai wujud nyata dari dedikasi kami untuk membantu visi klien menjadi karya digital yang luar biasa.
                        </p>
                    </div>
                </div>

                <div style={{ 
                    display: 'flex', 
                    flexWrap: 'wrap', 
                    justifyContent: 'space-between', 
                    alignItems: 'center', 
                    marginBottom: '4rem', 
                    width: '100%', 
                    maxWidth: '1200px', 
                    zIndex: 2, 
                    gap: '2rem' 
                }}>
                    <h2 style={{ fontSize: '3rem', color: '#fff', fontWeight: 900, letterSpacing: '1px', textTransform: 'uppercase', flex: '1 1 300px' }}>
                        The <br/><span className="neon-text">Founders</span>
                    </h2>
                    <div style={{ flex: '1 1 500px', borderLeft: '4px solid var(--neon-green)', paddingLeft: '1.5rem' }}>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', lineHeight: '1.7' }}>
                            We offer a comprehensive suite of services to cater to various aspects of a client’s needs. Digital agencies are at the forefront of the digital landscape, combining creative and technical expertise to help clients thrive in the digital world.
                        </p>
                    </div>
                </div>

                <div className="team-grid" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '2.5rem',
                    justifyContent: 'center',
                    width: '100%',
                    maxWidth: '1200px',
                    zIndex: 2
                }}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-card glass-card" style={{
                            opacity: 0,
                            transform: 'translateY(30px)',
                            position: 'relative',
                            width: '320px',
                            height: 'auto',
                            padding: '0',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            animation: 'none',
                            cursor: 'pointer',
                            overflow: 'hidden'
                        }}
                        onClick={() => setActiveCard(activeCard === index ? null : index)}
                        >
                            <div style={{
                                width: '100%',
                                height: '280px',
                                overflow: 'hidden',
                                borderTopLeftRadius: '20px',
                                borderTopRightRadius: '20px',
                            }}>
                                <img src={member.img} alt={member.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: ['Hadi Muhammad Rasyidan', 'Fauzul Adhim', 'Muhammad Ziqri Nur Akbar'].includes(member.name) ? 'center 25%' : 'center top' }} />
                            </div>
                            <div style={{ padding: '1.5rem', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.8rem', color: '#fff', letterSpacing: '0.5px' }}>{member.name}</h3>
                                <p className="role-text" style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>{member.role}</p>
                                <div className="ig-icon-container" style={{ 
                                    display: 'flex', 
                                    gap: '15px', 
                                    justifyContent: 'center'
                                }}>
                                    <a href={member.ig} target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.6)', transition: 'color 0.3s' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--neon-green)'} onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.6)'}>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <style>{`
                    .team-card .ig-icon-container {
                        max-height: 0;
                        opacity: 0;
                        margin-top: 0;
                        overflow: hidden;
                        transition: all 0.3s ease;
                    }
                    .team-card:hover .ig-icon-container {
                        max-height: 50px;
                        opacity: 1;
                        margin-top: 10px;
                    }
                    .team-card p.role-text {
                        margin-bottom: 0;
                        transition: margin 0.3s ease;
                    }
                    .team-card:hover p.role-text {
                        margin-bottom: 1.5rem;
                    }
                `}</style>
            </main>
        </>
    );
};

export default About;
