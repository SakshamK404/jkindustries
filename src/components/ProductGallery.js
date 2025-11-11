// src/components/ProductGallery.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProductGallery.css';

const products = [
  { id: 1, name: 'Ciba Shape',      image: '/ciba-shape.png',      link: '/products/ciba' },
  { id: 2, name: 'Vertical Shape',  image: '/vertical-shape.png',  link: '/products/vertical' },
  { id: 3, name: 'Amway Shape',     image: '/amway-shape.png',     link: '/products/amway' },
  { id: 4, name: 'Jerry Can',       image: '/Jerry can.png',       link: '/products/rightangle' },
  { id: 5, name: 'Osin Shape',      image: '/osin-shape.png',      link: '/products/osin' },
  { id: 6, name: 'Oval Jerry',      image: '/oval-jerry.png',      link: '/products/ovaljerry' },
  { id: 7, name: 'Aloe Vera Shape', image: '/aloe-vera-shape.png', link: '/products/aloevera' },
];

export default function ProductGallery() {
  const navigate = useNavigate();

  return (
    <section className="product-gallery" id="products">
      <div className="product-gallery__header">
        <p className="product-gallery__eyebrow">Our Products</p>
        <h2 className="product-gallery__title">Product Range</h2>
        <p className="product-gallery__subtitle">Durable HDPE packaging built for performance and reliability</p>
      </div>
      <div className="product-gallery__grid">
        {products.map((p) => (
          <motion.div
            key={p.id}
            className="product-card"
            role="button"
            tabIndex={0}
            aria-label={`View details for ${p.name}`}
            onClick={() => {
              window.scrollTo(0, 0); // Scroll to top before navigating
              navigate(p.link);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                window.scrollTo(0, 0);
                navigate(p.link);
              }
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <div className="product-card__img-container">
              <img
                src={p.image}
                alt={p.name}
                className="product-card__img"
              />
              <div className="product-card__overlay">
                <button className="product-card__cta" aria-label={`Open ${p.name}`}>
                  View details →
                </button>
              </div>
            </div>
            <div className="product-card__name">{p.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
