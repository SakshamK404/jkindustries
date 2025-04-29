// src/components/ProductGallery.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ProductGallery.css';

const products = [
  { id: 1, name: 'Ciba Shape',      image: '/ciba-shape.png',      link: '/products/ciba' },
  { id: 2, name: 'Vertical Shape',  image: '/vertical-shape.png',  link: '/products/vertical' },
  { id: 3, name: 'Amway Shape',     image: '/amway-shape.png',     link: '/products/amway' },
  { id: 4, name: 'Right Angle',     image: '/right-angle-shape.png', link: '/products/rightangle' },
  { id: 5, name: 'Osin Shape',      image: '/osin-shape.png',      link: '/products/osin' },
  { id: 6, name: 'Oval Jerry',      image: '/oval-jerry.png',      link: '/products/ovaljerry' },
  { id: 7, name: 'Aloe Vera Shape', image: '/aloe-vera-shape.png',  link: '/products/aloevera' },
];

export default function ProductGallery() {
  const navigate = useNavigate();

  return (
    <section className="product-gallery" id="products">
      <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
      <div className="product-gallery__grid">
        {products.map((p) => (
          <motion.div
            key={p.id}
            className="product-card"
            onClick={() => navigate(p.link)}
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
            </div>
            <div className="product-card__name">{p.name}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
