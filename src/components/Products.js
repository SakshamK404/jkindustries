import React from 'react';

const products = [
  {
    title: 'HDPE pesticide bottles',
    description: 'Durable and safe HDPE bottles for pesticide storage.',
  },
  {
    title: 'Agrochemical packaging solutions',
    description: 'Customizable agrochemical packaging solutions for your products.',

  },
  {
    title: 'Industrial HDPE bottles',
    description: 'Strong and versatile HDPE bottles for industrial use.',
  },
];

const Products = () => {
  return (
    <section
      style={{ backgroundImage: "url('public\photos\bg.jpg')" }}
      className="relative bg-cover bg-center bg-no-repeat py-16"
    >
      {/* Semi-transparent overlay */}
      <div className="absolute inset-0 bg-white/80 z-0"></div>

      <div className="relative z-10 container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-6">
          Innovative packaging solutions
        </h2>

        <div className="flex flex-wrap -mx-4">
          {products.map((product, index) => (
            <div key={index} className="w-full md:w-1/3 px-4 mb-6">
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
                  <p className="text-gray-700">{product.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
