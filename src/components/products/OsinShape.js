
import React, { useState } from 'react';
import './OsinShape.css';

const mainImage = '/osin-shape.png';
const images = [
  '/osin.jpg',
];

const OsinShape = () => {
  const [selectedImg, setSelectedImg] = useState(mainImage);
  return (
    <div className="osin-product-container">
      <div className="osin-product-gallery">
        <div className="osin-product-thumbs" style={{ display: 'flex', flexDirection: 'row', gap: '0.7rem', marginBottom: '1rem' }}>
          {images.map((img, i) => (
            <img
              key={img}
              src={img}
              alt={`Osin Thumb ${i+1}`}
              className={`osin-product-thumb${selectedImg === img ? ' selected' : ''}`}
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
        <img src={selectedImg || mainImage} alt="Osin Main" className="osin-product-main-img" />
      </div>
      <div className="osin-product-details">
        <h1 className="osin-product-title">Osin Shape Bottle</h1>
        <div className="osin-product-price-row">
          <span className="osin-product-price">Rs 7 / Piece</span>
    
        </div>
      
        <table className="osin-product-table">
          <tbody>
            <tr><th>Capacity</th><td>250ml 500ml 1L</td></tr>
            <tr><th>Material</th><td>HDPE</td></tr>
            <tr><th>Color</th><td>White, Blue</td></tr>
            <tr><th>Cap Type</th><td>Flip Top</td></tr>
            <tr><th>Shape</th><td>Osin</td></tr>
            <tr><th>Brand</th><td>JK Industries</td></tr>
          </tbody>
        </table>
        <div className="osin-product-note">
          <strong>Note -</strong> Available Capacity - 250ml, 500ml, 1L.
        </div>
        <div className="osin-product-desc">
          We manufacture and supply <strong>Osin Shape Bottles</strong> for various packaging needs.
        </div>
      </div>
    </div>
  );
};

export default OsinShape;
