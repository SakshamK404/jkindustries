import React from 'react';

const FooterComponent = () => {
  return (
    <footer className="bg-[#2e2e2e] text-white px-8 py-10">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Our Company */}
        <div>
          <h3 className="font-bold text-lg mb-4">OUR COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Home</a></li>
            <li><a href="#">Company Brief</a></li>
            <li><a href="#">Our Products</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
        </div>

        {/* Our Products Left */}
        <div>
          <h3 className="font-bold text-lg mb-4">OUR PRODUCTS</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#">EMIDA Shape</a></li>
            <li><a href="#">CIBA Shape</a></li>
            <li><a href="#">Aloe Shape</a></li>
            <li><a href="#">Amway Shape</a></li>
          </ul>
        </div>

        {/* Our Products Right */}
        <div className="pt-8 md:pt-0">
          <ul className="space-y-2 text-sm">
            <li><a href="#">Vertical Shape</a></li>
            <li><a href="#">Right Angle Shape</a></li>
            <li><a href="#">Osin Shape</a></li>
            <li><a href="#">Oval Jerry Shape</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
