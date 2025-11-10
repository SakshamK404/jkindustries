
import React from 'react';
import './ProductsPro.css';

const products = [
  {
    title: 'HDPE Pesticide Bottles',
    description: 'Durable and safe HDPE bottles for pesticide storage.',
  },
  {
    title: 'Agrochemical Packaging Solutions',
    description: 'Customizable agrochemical packaging solutions tailored for your brand.',
  },
  {
    title: 'Industrial HDPE Bottles',
    description: 'Strong and versatile HDPE bottles for industrial applications.',
  },
];


const Products = () => {
  return (
    <div className="products-bg">
      <div className="products-glass">
        <h2 className="products-title">Innovative Packaging Solutions</h2>
        <p className="products-desc">
          We offer a range of durable, customizable HDPE bottles and packaging solutions for agrochemical and industrial needs. Explore our products below:
        </p>
        <div className="products-section__grid">
          {products.map((product, index) => (
            <div key={index} className="products-card">
              <h3 className="products-card__title">{product.title}</h3>
              <p className="products-card__desc">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
