import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import '../assets/work.css';

const Work = () => {
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'scale(0.9)';
        
        setTimeout(() => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.parentElement.style.display = 'block';
                card.style.display = 'flex';
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'scale(1)';
                }, 50);
            } else {
                card.parentElement.style.display = 'none';
                card.style.display = 'none';
            }
        }, 300);
    });
  }, [filter]);

  const projects = [
    {
      id: 'website-1',
      category: 'website',
      title: 'Company Profile E-Commerce',
      tags: 'Website, Fullstack, React',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/work.html/company-profile'
    },
    {
      id: 'mobile-1',
      category: 'mobile',
      title: 'Aplikasi Pencatatan Keuangan',
      tags: 'Aplikasi Mobile, Database',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/work.html/pos-mobile'
    },
    {
      id: 'social-1',
      category: 'social',
      title: 'Create Logo or Change Logo',
      tags: 'Sosial Media, Feed Design',
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/work.html/cafe-social'
    },
    {
      id: 'banner-1',
      category: 'banner',
      title: 'X-Banner Wisuda',
      tags: 'Banner Design, Print',
      image: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/work.html/banner-wisuda'
    },
    {
      id: 'uiux-1',
      category: 'uiux',
      title: 'UI/UX Aplikasi Kesehatan Tanaman',
      tags: 'UI/UX, Website Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/work.html/uiux-portal'
    },
    {
      id: 'website-2',
      category: 'website',
      title: 'AI Analytics Dashboard',
      tags: 'Website, Backend + AI',
      image: 'https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/work.html/ai-dashboard'
    },
    {
      id: 'wedding-1',
      category: 'website',
      title: 'Digital Wedding Website',
      tags: 'Website, Frontend, React',
      image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      link: '/work.html/wedding-website'
    }
  ];

  return (
    <>
      <div className="background-grid"></div>
      <Navbar />
      <main className="work-container">
          <div className="work-header">
              <h1 className="page-title">SELECTED <span className="neon-text">WORKS</span></h1>
              
              <div className="filter-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
                  <button className={`filter-btn ${filter === 'all' ? 'active' : ''}`} onClick={() => setFilter('all')}>All Projects</button>
                  <button className={`filter-btn ${filter === 'website' ? 'active' : ''}`} onClick={() => setFilter('website')}>Website</button>
                  <button className={`filter-btn ${filter === 'mobile' ? 'active' : ''}`} onClick={() => setFilter('mobile')}>Aplikasi Mobile</button>
                  <button className={`filter-btn ${filter === 'social' ? 'active' : ''}`} onClick={() => setFilter('social')}>Sosial Media</button>
                  <button className={`filter-btn ${filter === 'banner' ? 'active' : ''}`} onClick={() => setFilter('banner')}>Banner Design</button>
                  <button className={`filter-btn ${filter === 'uiux' ? 'active' : ''}`} onClick={() => setFilter('uiux')}>UI/UX</button>
              </div>
          </div>

          <div className="projects-grid">
              {projects.map((project) => (
                <Link key={project.id} to={project.link} className="project-card-link" style={{ textDecoration: 'none', color: 'inherit' }}>
                    <div className="project-card glass-card" data-category={project.category}>
                      <div className="project-img-wrapper">
                          <img src={project.image} alt={project.title} className="project-img" />
                          <div className="project-overlay">
                              <span className="view-btn">View Details</span>
                          </div>
                      </div>
                      <div className="project-info">
                          <h3>{project.title}</h3>
                          <p>{project.tags}</p>
                      </div>
                    </div>
                </Link>
              ))}
          </div>
      </main>
    </>
  );
};

export default Work;
