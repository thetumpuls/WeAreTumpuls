import React from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import '../assets/work.css';

const projects = [
  {
    id: 'company-profile',
    title: 'Company Profile E-Commerce',
    category: 'website',
    img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tech: 'React, Node.js, Database',
    description: 'Website company profile modern, responsif, dan siap digunakan untuk kebutuhan bisnis e-commerce. Dilengkapi dengan backend dan integrasi database.',
    linkType: 'hosting',
    link: 'https://byddealerserpong.com/'
  },
  {
    id: 'pos-mobile',
    title: 'Aplikasi Kasir Mobile POS',
    category: 'mobile',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tech: 'React Native, API, Database',
    description: 'Aplikasi mobile Point of Sales (POS) yang fungsional untuk memudahkan transaksi bisnis. Tersedia fitur manajemen produk dan integrasi backend.',
    linkType: 'hosting'
  },
  {
    id: 'cafe-social',
    title: 'Manajemen Instagram Cafe',
    category: 'social',
    img: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tech: 'Social Media Management, Design',
    description: 'Pengelolaan sosial media Instagram secara profesional, mulai dari perencanaan konten, pembuatan desain feed resolusi tinggi, hingga strategi engagement.',
    linkType: 'figma'
  },
  {
    id: 'banner-wisuda',
    title: 'X-Banner Wisuda Mahasiswa',
    category: 'banner',
    img: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tech: 'Graphic Design, Illustration',
    description: 'Desain X-Banner khusus untuk acara wisuda yang berkesan. Menggunakan resolusi tinggi agar siap untuk dicetak.',
    linkType: 'figma'
  },
  {
    id: 'uiux-portal',
    title: 'Redesign UI/UX Portal Akademik',
    category: 'uiux',
    img: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tech: 'Figma, Wireframing, Prototyping',
    description: 'Desain ulang (redesign) UI/UX portal akademik agar lebih modern, mudah digunakan (user-friendly), dan responsif di berbagai perangkat.',
    linkType: 'figma',
    link: 'https://www.figma.com/design/ff6B1OISFTmR1S8PFBRVWQ/Project-The-Tumpul-s?node-id=0-1&t=Q8cmnXj8MU6k1Gkf-1'
  },
  {
    id: 'ai-dashboard',
    title: 'AI Analytics Dashboard',
    category: 'website',
    img: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tech: 'AI Integration, React, Python',
    description: 'Dashboard analitik berbasis Artificial Intelligence (AI). Menampilkan visualisasi data cerdas secara real-time dan analisis otomatis.',
    linkType: 'hosting'
  },
  {
    id: 'wedding-website',
    title: 'Digital Wedding Website',
    category: 'website',
    img: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
    tech: 'React, Frontend, Animation',
    description: 'Website undangan pernikahan digital yang elegan, modern, dan interaktif. Dilengkapi dengan animasi dan fitur RSVP untuk tamu undangan.',
    linkType: 'github',
    link: 'https://github.com/AzimaF/web-merried'
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <>
        <Navbar />
        <main style={{ padding: '4rem', textAlign: 'center' }}>
          <h2>Project not found</h2>
          <p>We couldn't find the project you were looking for.</p>
          <Link to="/work.html" style={{ color: 'var(--neon-green)' }}>Back to works</Link>
        </main>
      </>
    );
  }

  const getLinkText = () => {
    if (project.link) {
        if (project.linkType === 'github') return 'View GitHub Repo';
        return project.linkType === 'figma' ? 'View Figma Design' : 'View Live Hosting';
    }
    if (project.linkType === 'figma') return 'View Figma (Link will be added soon)';
    return 'View Live Hosting (Link will be added soon)';
  };

  return (
    <>
      <div className="background-grid"></div>
      <Navbar />
      <main className="work-container" style={{ paddingTop: '4rem', paddingBottom: '4rem' }}>
        <div className="work-header" style={{ marginBottom: '2rem' }}>
          <h1 className="page-title">{project.title}</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '1rem' }}>{project.tech}</p>
        </div>

        <div className="projects-grid" style={{ justifyContent: 'center' }}>
          <div className="project-card glass-card" style={{ maxWidth: '900px', width: '100%', flexDirection: 'column', alignItems: 'flex-start', padding: '1rem 1.5rem' }}>
            <div style={{ width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
              <img src={project.img} alt={project.title} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: '1rem 0' }}>
              <h2 style={{ color: 'var(--neon-green)', marginBottom: '0.5rem' }}>{project.title}</h2>
              <p style={{ color: 'rgba(255,255,255,0.9)', lineHeight: 1.6 }}>{project.description}</p>
              <p style={{ marginTop: '1rem', color: 'rgba(255,255,255,0.8)', fontWeight: '600' }}>Technologies: {project.tech}</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto', width: '100%' }}>
              <a 
                href={project.link || "#"} 
                className="view-btn" 
                target={project.link ? "_blank" : "_self"}
                rel={project.link ? "noopener noreferrer" : ""}
                style={{ transform: 'none' }}
                onClick={(e) => { if (!project.link) e.preventDefault(); }}
              >
                {getLinkText()}
              </a>
              <Link to="/work.html" className="filter-btn" style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-white)' }}>Back to Works</Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ProjectDetail;
