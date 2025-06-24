import React from 'react';
 // adjust path based on your folder structure

const products = [
  {
    title: 'HDPE Pesticide Bottles',
    description: 'Durable and safe HDPE bottles for pesticide storage.',
  },
  {
    title: 'Agrochemical Packaging Solutions',
    description: 'Customizable agrochemical packaging solutions tailored for your brand.',
  },
  {
    title: 'Industrial HDPE Bottles',
    description: 'Strong and versatile HDPE bottles for industrial applications.',
  },
];

const Products = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-20"
      style={{ backgroundImage: "url('/photos/bg.jpg')" }}
    >
      {/* White translucent overlay */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Innovative Packaging Solutions
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-70 backdrop-blur-md rounded-2xl shadow-xl p-6 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {product.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
