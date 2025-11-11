
import React, { useState } from 'react';
import './RightAngleShape.css';

const mainImage = '/Jerry can.png';
const images = [
  // Add more images if available
];
const RightAngleShape = () => {
  const [selectedImg, setSelectedImg] = useState(mainImage);
  return (
    <div className="rightangle-product-container">
      <div className="rightangle-product-gallery">
        <div className="rightangle-product-thumbs" style={{ display: 'flex', flexDirection: 'row', gap: '0.7rem', marginBottom: '1rem' }}>
          {images.map((img, i) => (
            <img
              key={img}
              src={img}
              alt={`Right Angle Thumb ${i+1}`}
              className={`rightangle-product-thumb${selectedImg === img ? ' selected' : ''}`}
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
        <img src={selectedImg || mainImage} alt="Right Angle Main" className="rightangle-product-main-img" />
      </div>
      <div className="rightangle-product-details">
        <h1 className="rightangle-product-title">Jerry Can</h1>
        <div className="rightangle-product-price-row">
          <span className="rightangle-product-price">Rs 10 / Piece</span>
    
        </div>
        
        <table className="rightangle-product-table">
          <tbody>
            <tr><th>Capacity</th><td>500ml 1L 5L</td></tr>
            <tr><th>Material</th><td>HDPE</td></tr>
            <tr><th>Color</th><td>White, Blue</td></tr>
            <tr><th>Cap Type</th><td>Screw Cap</td></tr>
            <tr><th>Shape</th><td>Right Angle</td></tr>
            <tr><th>Brand</th><td>JK Industries</td></tr>
          </tbody>
        </table>
        <div className="rightangle-product-note">
          <strong>Note -</strong> Available Capacity - 500ml, 1L, 5L.
        </div>
        <div className="rightangle-product-desc">
          We manufacture and supply <strong>Jerry Cans</strong> for industrial and chemical packaging.
        </div>
      </div>
    </div>
  );
};

export default RightAngleShape;
