
import React, { useState } from 'react';
import './CibaShape.css';

const mainImage = '/ciba-shape.png';
const images = [
  '/photos/ciba.jpg',
  '/photos/ciba-shape.png',
];

const CibaShape = () => {
  const [selectedImg, setSelectedImg] = useState(mainImage);
  return (
    <div className="ciba-product-container">
      <div className="ciba-product-gallery">
  <div className="ciba-product-thumbs" style={{ display: 'flex', flexDirection: 'row', gap: '0.7rem', marginBottom: '1rem' }}>
          {images.map((img, i) => (
            <img
              key={img}
              src={img}
              alt={`Ciba Shape Thumb ${i+1}`}
              className={`ciba-product-thumb${selectedImg === img ? ' selected' : ''}`}
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
        <img src={selectedImg || mainImage} alt="Ciba Shape Main" className="ciba-product-main-img" />
      </div>
      <div className="ciba-product-details">
        <h1 className="ciba-product-title">Ciba Shape Bottle</h1>
        <div className="ciba-product-price-row">
          <span className="ciba-product-price">Rs 7 / Piece</span>
        
        </div>
        
        <table className="ciba-product-table">
          <tbody>
            <tr><th>Capacity</th><td>1L, 500ml, 250ml</td></tr>
            <tr><th>Material</th><td>HDPE</td></tr>
            <tr><th>Color</th><td>White</td></tr>
            <tr><th>Cap Type</th><td>Flip Top</td></tr>
            <tr><th>Shape</th><td>Ciba</td></tr>
            <tr><th>Brand</th><td>JK Industries</td></tr>
          </tbody>
        </table>
        <div className="ciba-product-note">
          <strong>Note -</strong> Available Capacity - 1L, 500ml, 250ml
        </div>
        <div className="ciba-product-desc">
          We are one of the leading organizations for manufacturing and supplying excellent quality <strong>Ciba Shape Bottles</strong>.
        </div>
      </div>
    </div>
  );
};

export default CibaShape;
