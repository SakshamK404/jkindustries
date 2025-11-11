
import React, { useState } from 'react';
import './AloeVeraShape.css';

const mainImage = '/aloe-vera-shape.png';
const images = [
  '/aloe.jpg',
  '/aloe-veraa.jpg',
];

const AloeVeraShape = () => {
  const [selectedImg, setSelectedImg] = useState(mainImage);
  return (
    <div className="aloevera-product-container">
      <div className="aloevera-product-gallery">
        <div className="aloevera-product-thumbs" style={{ display: 'flex', flexDirection: 'row', gap: '0.7rem', marginBottom: '1rem' }}>
          {images.map((img, i) => (
            <img
              key={img}
              src={img}
              alt={`Aloe Vera Thumb ${i+1}`}
              className={`aloevera-product-thumb${selectedImg === img ? ' selected' : ''}`}
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
        <img src={selectedImg || mainImage} alt="Aloe Vera Main" className="aloevera-product-main-img" />
      </div>
      <div className="aloevera-product-details">
        <h1 className="aloevera-product-title">Aloe Vera Shape Bottle</h1>
        <div className="aloevera-product-price-row">
          <span className="aloevera-product-price">Rs 8 / Piece</span>
        
        </div>
       
        <table className="aloevera-product-table">
          <tbody>
            <tr><th>Capacity</th><td>100ml 250ml 500ml</td></tr>
            <tr><th>Material</th><td>HDPE</td></tr>
            <tr><th>Color</th><td>White, Green</td></tr>
            <tr><th>Cap Type</th><td>Flip Top</td></tr>
            <tr><th>Shape</th><td>Aloe Vera</td></tr>
            <tr><th>Brand</th><td>JK Industries</td></tr>
          </tbody>
        </table>
        <div className="aloevera-product-note">
          <strong>Note -</strong> Available Capacity - 100ml, 250ml, 500ml.
        </div>
        <div className="aloevera-product-desc">
          We manufacture and supply high-quality <strong>Aloe Vera Shape Bottles</strong> for cosmetic and personal care packaging.
        </div>
      </div>
    </div>
  );
};

export default AloeVeraShape;
