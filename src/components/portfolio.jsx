import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/portfolio.css';
import SilverLeafLogo from '../assets/gallery/silverleafproj.jpg';
import SitaaraOneLogo from '../assets/gallery/sitaaraoneproj.png';
import RestornLogo from '../assets/gallery/restornlogo.png';
import ElevenCricket from '../assets/gallery/elevenlogo.png';
import JsonBazaar from '../assets/gallery/jsonbazaar.png';
import MovieFlx from '../assets/gallery/movie1.png';
import Vaartha from '../assets/gallery/vaartha.png'
import 'bootstrap-icons/font/bootstrap-icons.css'; // Ensure Bootstrap icons are imported

const Portfolio = ({item}) => {
  const [activeFilter, setActiveFilter] = useState('*');
  const [modalData, setModalData] = useState(null);

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const navigate = useNavigate()

  const portfolioItems = [
    {
      id: 1,
      category: 'wordpress',
      title: 'Silver Leaf',
      image: SilverLeafLogo,
    },
    {
      id: 2,
      category: 'wordpress',
      title : 'Sitaara One',
      image : SitaaraOneLogo,
    },
    {
      id: 3,
      category: 'react',
      title : 'Restorn',
      image : RestornLogo,
    },
    {
      id: 4,
      category: 'wordpress',
      title : 'Eleven Cricket',
      image : ElevenCricket,
    },
    {
      id: 5,
      category : 'react',
      title : 'Json Bazaar',
      image : JsonBazaar,
    },
    {
      id: 6,
      category: 'react',
      title : 'Movie Flx',
      image : MovieFlx,
    },
    {
      id: 7,
      category: 'wordpress',
      title : 'Vaartha Digital',
      image : Vaartha,
    }

  ];

  const filteredItems =
    activeFilter === '*'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  return (
    <div id = "portfolio" className="portfolio-section m-3 p-6" data-aos="fade-up">
      <div className="portfolio-filters">
        <button
          id = "techcategeory"
          className={activeFilter === '*' ? 'active' : ''}
          onClick={() => handleFilterChange('*')}
        >
          All
        </button>
        <button
          id = "techcategeory"
          className={activeFilter === 'wordpress' ? 'active' : ''}
          onClick={() => handleFilterChange('wordpress')}
        >
          Wordpress
        </button>
        <button
          id = "techcategeory"       
          className={activeFilter === 'javascript' ? 'active' : ''}
          onClick={() => handleFilterChange('javascript')}
        >
          Javascript
        </button>
        <button
          id = "techcategeory"
          className={activeFilter === 'react' ? 'active' : ''}
          onClick={() => handleFilterChange('react')}
        >
          React 
        </button>
      </div>

      <div className="portfolio-grid">
        {filteredItems.map((item , i) => (
          <div key={item.id} className="portfolio-item" data-category={item.category}>
            <div className="portfolio-image-wrapper">
              <h3 className="project-title">{item.title}</h3>
              <img className="portfolio-image" src={item.image} alt={item.title} />
              <div className="portfolio-overlay">
              {/* <Link to={`/project/${item.id}`}> */}
                              <button
                  className="link-icon"
                  aria-label="Zoom"
                  onClick={() => navigate(`/project/${item.id}`)}
                >
                  <i className="bi bi-link-45deg"></i>
                </button>

                <button
                  className="zoom-icon"
                  onClick={() => setModalData(item)}
                  aria-label="Zoom"
                >
                  <i className="bi bi-zoom-in"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalData && (
        <div
          className="modal fade show"
          style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.8)' }}
          tabIndex="-1"
          role="dialog"
          onClick={() => setModalData(null)}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-body" onClick={(e) => e.stopPropagation()}>
                <img
                  src={modalData.image}
                  alt={modalData.title}
                  style={{ width: '100%', height: 'auto' }}
                />
                <div
                  style={{
                    borderTop: '1px solid #fff',
                    backgroundColor: '#fff',
                    padding: '10px',
                    textAlign: 'center',
                  }}
                >
                  <span style={{ color: '#000', fontWeight: 'bold' }}>{modalData.title}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
