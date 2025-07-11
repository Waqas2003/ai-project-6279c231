import React from 'react';
import Image1 from '../images/lahore.jpg';
import Image2 from '../images/karachi.jpg';
import Image3 from '../images/hunza.jpg';

function Cards() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h2 className="text-3xl font-bold">Popular Destinations</h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white rounded shadow-md p-4">
            <img src={Image1} alt="Lahore" className="w-full h-48 object-cover rounded-t" />
            <h3 className="text-2xl font-bold">Lahore</h3>
            <p>The cultural hub of Pakistan, Lahore is known for its historic landmarks and vibrant atmosphere.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white rounded shadow-md p-4">
            <img src={Image2} alt="Karachi" className="w-full h-48 object-cover rounded-t" />
            <h3 className="text-2xl font-bold">Karachi</h3>
            <p>The financial capital of Pakistan, Karachi is a bustling metropolis with a rich history and cultural diversity.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white rounded shadow-md p-4">
            <img src={Image3} alt="Hunza" className="w-full h-48 object-cover rounded-t" />
            <h3 className="text-2xl font-bold">Hunza</h3>
            <p>A breathtakingly beautiful valley in the Karakoram mountains, Hunza is a popular destination for trekkers and nature lovers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;