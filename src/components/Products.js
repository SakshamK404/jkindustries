
import React from 'react';
import './Products.css';

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
    <section className="products-section" style={{ backgroundImage: "url('/photos/bg.jpg')" }}>
      <div className="products-section__overlay"></div>
      <div className="products-section__container">
        <h2 className="products-section__heading">
          Innovative Packaging Solutions
        </h2>
        <div className="products-section__grid">
          {products.map((product, index) => (
            <div key={index} className="products-card">
              <h3 className="products-card__title">{product.title}</h3>
              <p className="products-card__desc">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
