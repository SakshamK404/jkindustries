
import React, { useState } from 'react';
import './EmidaShape.css';

const mainImage = '/emida.webp';
const images = [
  '/emida.jpg',
];

const EmidaShape = () => {
  const [selectedImg, setSelectedImg] = useState(mainImage);
  return (
    <div className="emida-product-container">
      <div className="emida-product-gallery">
        <div className="emida-product-thumbs" style={{ display: 'flex', flexDirection: 'row', gap: '0.7rem', marginBottom: '1rem' }}>
          {images.map((img, i) => (
            <img
              key={img}
              src={img}
              alt={`Emida Thumb ${i+1}`}
              className={`emida-product-thumb${selectedImg === img ? ' selected' : ''}`}
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
        <img src={selectedImg || mainImage} alt="Emida Main" className="emida-product-main-img" />
      </div>
      <div className="emida-product-details">
        <h1 className="emida-product-title">Emida Shape Bottle</h1>
        <div className="emida-product-price-row">
          <span className="emida-product-price">Rs 6 / Piece</span>
      
        </div>
     
        <table className="emida-product-table">
          <tbody>
            <tr><th>Capacity</th><td>100ml 250ml 500ml</td></tr>
            <tr><th>Material</th><td>HDPE</td></tr>
            <tr><th>Color</th><td>White, Yellow</td></tr>
            <tr><th>Cap Type</th><td>Flip Top</td></tr>
            <tr><th>Shape</th><td>Emida</td></tr>
            <tr><th>Brand</th><td>JK Industries</td></tr>
          </tbody>
        </table>
        <div className="emida-product-note">
          <strong>Note -</strong> Available Capacity - 100ml, 250ml, 500ml.
        </div>
        <div className="emida-product-desc">
          We manufacture and supply <strong>Emida Shape Bottles</strong> for agrochemical and industrial packaging.
        </div>
      </div>
    </div>
  );
};

export default EmidaShape;
