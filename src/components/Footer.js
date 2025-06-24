import React from 'react';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
  return (
    <footer className="bg-[#2e2e2e] text-white px-8 py-10">
      {/* Links Section */}
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {/* Our Company */}
        <div>
          <h3 className="font-bold text-lg mb-4">OUR COMPANY</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/company-brief">Company Brief</Link></li>
            <li><Link to="/#products">Our Products</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </ul>
        </div>

        {/* Our Products - Combined */}
        <div>
          <h3 className="font-bold text-lg mb-4">OUR PRODUCTS</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            <ul className="space-y-2 text-sm">
              <li><Link to="/products/ciba">Ciba Shape</Link></li>
              <li><Link to="/products/vertical">Vertical Shape</Link></li>
              <li><Link to="/products/amway">Amway Shape</Link></li>
              <li><Link to="/products/rightangle">Jerry Can</Link></li>
            </ul>
            <ul className="space-y-2 text-sm mt-4 sm:mt-0">
              <li><Link to="/products/osin">Osin Shape</Link></li>
              <li><Link to="/products/ovaljerry">Oval Jerry</Link></li>
              <li><Link to="/products/aloevera">Aloe Vera Shape</Link></li>
            </ul>
          </div>
        </div>

        {/* Optional third column */}
        <div></div>
      </div>

      {/* Location Section */}
      <div className="max-w-screen-xl mx-auto mt-12 px-4 text-center">
        <h3 className="text-2xl font-semibold mb-4">Our Location</h3>
        <p className="text-sm text-gray-300 mb-4">
          MIDC Malegaon, Sinnar Dist, Nasik, Maharashtra - 422113
        </p>
        <div
          className="overflow-hidden rounded-lg shadow-lg border border-gray-700 mx-auto"
          style={{ maxWidth: '1000px' }}
        >
          <iframe
            title="JK Industries Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240040.54814874983!2d73.67915746362576!3d19.939840703742796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddb9a8c9d908b7%3A0xb4bb1b455d88d650!2sJ%20K%20Industries!5e0!3m2!1sen!2sin!4v1749648331488!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </footer>
  );
};

export default FooterComponent;
