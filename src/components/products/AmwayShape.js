
import React, { useState } from 'react';
import './AmwayShape.css';

const mainImage = '/amway-shape.png';
const images = [
  '/amway.jpg',
];

const AmwayShape = () => {
  const [selectedImg, setSelectedImg] = useState(mainImage);
  return (
    <div className="amway-product-container">
      <div className="amway-product-gallery">
        <div className="amway-product-thumbs" style={{ display: 'flex', flexDirection: 'row', gap: '0.7rem', marginBottom: '1rem' }}>
          {images.map((img, i) => (
            <img
              key={img}
              src={img}
              alt={`Amway Thumb ${i+1}`}
              className={`amway-product-thumb${selectedImg === img ? ' selected' : ''}`}
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
        <img src={selectedImg || mainImage} alt="Amway Main" className="amway-product-main-img" />
      </div>
      <div className="amway-product-details">
        <h1 className="amway-product-title">Amway Shape Bottle</h1>
        <div className="amway-product-price-row">
          <span className="amway-product-price">Rs 9 / Piece</span>
      
        </div>
        
        <table className="amway-product-table">
          <tbody>
            <tr><th>Capacity</th><td>250ml 500ml 1L</td></tr>
            <tr><th>Material</th><td>HDPE</td></tr>
            <tr><th>Color</th><td>White, Blue</td></tr>
            <tr><th>Cap Type</th><td>Flip Top</td></tr>
            <tr><th>Shape</th><td>Amway</td></tr>
            <tr><th>Brand</th><td>JK Industries</td></tr>
          </tbody>
        </table>
        <div className="amway-product-note">
          <strong>Note -</strong> Available Capacity - 250ml, 500ml, 1L.
        </div>
        <div className="amway-product-desc">
          We manufacture and supply premium <strong>Amway Shape Bottles</strong> for various packaging needs.
        </div>
      </div>
    </div>
  );
};

export default AmwayShape;
