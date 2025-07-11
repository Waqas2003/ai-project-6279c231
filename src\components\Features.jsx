import React from 'react';

function Features() {
  return (
    <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
      <h2 className="text-3xl font-bold">What to Expect</h2>
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white rounded shadow-md p-4">
            <h3 className="text-2xl font-bold">Natural Beauty</h3>
            <p>From the Karakoram mountains to the Arabian Sea, Pakistan is home to diverse natural landscapes.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white rounded shadow-md p-4">
            <h3 className="text-2xl font-bold">Rich Culture</h3>
            <p>Pakistan has a rich cultural heritage, with a blend of Islamic, Mughal, and British influences.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 xl:w-1/3 p-4">
          <div className="bg-white rounded shadow-md p-4">
            <h3 className="text-2xl font-bold">Delicious Cuisine</h3>
            <p>From spicy curries to sweet desserts, Pakistani cuisine is a fusion of flavors and aromas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;