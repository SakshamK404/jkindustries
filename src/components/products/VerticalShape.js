
import React, { useState } from 'react';
import './VerticalShape.css';

const mainImage = '/vertical-shape.png';
const images = [
  '/photos/vertical.jpg',
  '/photos/vertical-shape.png',
];

const VerticalShape = () => {
  const [selectedImg, setSelectedImg] = useState(mainImage);
  return (
    <div className="vertical-product-container">
      <div className="vertical-product-gallery">
        <div className="vertical-product-thumbs" style={{ display: 'flex', flexDirection: 'row', gap: '0.7rem', marginBottom: '1rem' }}>
          {images.map((img, i) => (
            <img
              key={img}
              src={img}
              alt={`Vertical Shape Thumb ${i+1}`}
              className={`vertical-product-thumb${selectedImg === img ? ' selected' : ''}`}
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
        <img src={selectedImg || mainImage} alt="Vertical Shape Main" className="vertical-product-main-img" />
      </div>
      <div className="vertical-product-details">
        <h1 className="vertical-product-title">Vertical Shape Bottle</h1>
        <div className="vertical-product-price-row">
          <span className="vertical-product-price">Rs 12 / Piece</span>
    
        </div>
        
        <table className="vertical-product-table">
          <tbody>
            <tr><th>Capacity</th><td>1L, 2L, 5L</td></tr>
            <tr><th>Material</th><td>HDPE</td></tr>
            <tr><th>Color</th><td>White, Natural</td></tr>
            <tr><th>Cap Type</th><td>Screw Cap</td></tr>
            <tr><th>Shape</th><td>Vertical</td></tr>
            <tr><th>Brand</th><td>JK Industries</td></tr>
          </tbody>
        </table>
        <div className="vertical-product-note">
          <strong>Note -</strong> Available Capacity - 1L, 2L, 5L
        </div>
        <div className="vertical-product-desc">
          We manufacture and supply <strong>Vertical Shape Bottles</strong> for industrial and chemical packaging.
        </div>
      </div>
    </div>
  );
};

export default VerticalShape;
