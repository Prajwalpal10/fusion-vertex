import React from 'react';

const Services = () => {
  return (
    <div className="bg-black text-white p-8 md:p-16">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="p-6 bg-gray-900 border-2 border-green-500 rounded-lg  transition duration-300 hover:shadow-lg hover:shadow-green-400">
          <div className="text-center mb-4 text-4xl">
            {/* Replace with your icon */}
            📈<br /><br />
          <h3 className="text-2xl font-semibold mb-2">AI Trading</h3>
          </div>
          <p className="text-gray-300">Advanced algorithms and machine learning for optimal trading strategies.</p>
        </div>

        {/* Card 2 */}
        <div className="p-6 bg-gray-900 border-2 border-green-500 rounded-lg  transition duration-300 hover:shadow-lg hover:shadow-green-400">
          <div className="text-center mb-4 text-4xl">
            {/* Replace with your icon */}
          🤖
          <br /><br />
          
          <h3 className="text-2xl font-semibold mb-2">Automated Trading</h3>
          </div>
          <p className="text-gray-300">Set up automated trading systems with custom parameters.</p>
        </div>

        {/* Card 3 */}
        <div className="p-6 bg-gray-900 border-2 border-green-500 rounded-lg  transition duration-300 hover:shadow-lg hover:shadow-green-400">
          <div className="text-center mb-4 text-4xl">
            {/* Replace <br /><br />with your icon */}
            📊<br /><br />
          <h3 className="text-2xl font-semibold mb-2">Market Analysis</h3>
          </div>
          <p className="text-gray-300">Real-time market analysis and predictive modeling.</p>
        </div>
      </div>
    </div>
  );
};

export default Services;
