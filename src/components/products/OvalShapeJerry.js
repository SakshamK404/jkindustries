
import React, { useState } from 'react';
import './OvalShapeJerry.css';

const mainImage = '/oval-jerry.png';
const images = [
  '/oval jerry.jpg',
];

const OvalShapeJerry = () => {
  const [selectedImg, setSelectedImg] = useState(mainImage);
  return (
    <div className="ovaljerry-product-container">
      <div className="ovaljerry-product-gallery">
        <div className="ovaljerry-product-thumbs" style={{ display: 'flex', flexDirection: 'row', gap: '0.7rem', marginBottom: '1rem' }}>
          {images.map((img, i) => (
            <img
              key={img}
              src={img}
              alt={`Oval Jerry Thumb ${i+1}`}
              className={`ovaljerry-product-thumb${selectedImg === img ? ' selected' : ''}`}
              onClick={() => setSelectedImg(img)}
            />
          ))}
        </div>
        <img src={selectedImg || mainImage} alt="Oval Jerry Main" className="ovaljerry-product-main-img" />
      </div>
      <div className="ovaljerry-product-details">
        <h1 className="ovaljerry-product-title">Oval Shape Jerry Can</h1>
        <div className="ovaljerry-product-price-row">
          <span className="ovaljerry-product-price">Rs 12 / Piece</span>
       
        </div>
       
        <table className="ovaljerry-product-table">
          <tbody>
            <tr><th>Capacity</th><td>1L 5L 10L</td></tr>
            <tr><th>Material</th><td>HDPE</td></tr>
            <tr><th>Color</th><td>White, Blue</td></tr>
            <tr><th>Cap Type</th><td>Screw Cap</td></tr>
            <tr><th>Shape</th><td>Oval Jerry</td></tr>
            <tr><th>Brand</th><td>JK Industries</td></tr>
          </tbody>
        </table>
        <div className="ovaljerry-product-note">
          <strong>Note -</strong> Available Capacity - 1L, 5L, 10L.
        </div>
        <div className="ovaljerry-product-desc">
          We manufacture and supply <strong>Oval Shape Jerry Cans</strong> for industrial and chemical packaging.
        </div>
      </div>
    </div>
  );
};

export default OvalShapeJerry;
