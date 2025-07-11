import React from 'react';

function Footer() {
  return (
    <div className="bg-gray-200 h-screen p-4 pt-6 md:p-6 lg:p-12">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold">Get in Touch</h2>
        <p className="text-gray-600">Contact us for more information or to plan your trip to Pakistan.</p>
        <ul className="flex flex-wrap -mx-4">
          <li className="w-full md:w-1/2 xl:w-1/3 p-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fas fa-phone" /> +92 321 4567890
            </a>
          </li>
          <li className="w-full md:w-1/2 xl:w-1/3 p-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fas fa-envelope" /> [info@pakistan-tourism.com](mailto:info@pakistan-tourism.com)
            </a>
          </li>
          <li className="w-full md:w-1/2 xl:w-1/3 p-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              <i className="fas fa-map-marker-alt" /> Lahore, Pakistan
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;