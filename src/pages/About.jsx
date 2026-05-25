import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import '../assets/about.css';

const teamMembers = [
    {
        name: "Fauzul Adhim",
        role: "Mahasiswa Teknik Arsitektur UMJ",
        img: "/adhim.JPG"
    },
    {
        name: "Taufik Hidayat",
        role: "Fresh Graduate Teknik Informatika UMJ",
        img: "/topik.JPG"
    },
    {
        name: "Fauzan Azima",
        role: "Fresh Graduate Teknik Informatika UMJ",
        img: "/ojan.JPG"
    },
    {
        name: "Hady Muhammad",
        role: "Mahasiswa Teknik Sipil UMJ",
        img: "/hady.JPG"
    },
    {
        name: "Muhammad Zikri",
        role: "Mahasiswa Teknik Mesin UMJ",
        img: "/jikri.JPG"
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

                <div style={{ textAlign: 'center', marginBottom: '3rem', width: '100%', zIndex: 2 }}>
                    <h2 style={{ fontSize: '2.5rem', color: '#fff', fontWeight: 800, letterSpacing: '2px', textTransform: 'uppercase' }}>The <span className="neon-text">Founders</span></h2>
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
                            padding: '2.5rem 1.5rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            animation: 'none'
                        }}>
                            <div style={{
                                width: '140px',
                                height: '140px',
                                borderRadius: '50%',
                                overflow: 'hidden',
                                marginBottom: '1.5rem',
                                border: '4px solid var(--neon-green)',
                                boxShadow: '0 10px 20px rgba(163, 255, 0, 0.2)'
                            }}>
                                <img src={member.img} alt={member.name} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', willChange: 'transform' }} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.8rem', color: '#fff', letterSpacing: '0.5px' }}>{member.name}</h3>
                            <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>{member.role}</p>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
};

export default About;
