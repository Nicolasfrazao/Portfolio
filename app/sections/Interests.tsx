import React from 'react';

import { interests } from '@/app/lib/data';

const Interests = () => {
  return (
    <section className="  py-10 px-4">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-semibold text-gray-800 dark:text-white mb-6">
          My Interests
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          A diverse set of interests that keep me curious and inspired.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="flex items-center justify-center bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-lg p-3 shadow-md transition-transform transform hover:scale-105"
            >
              {interest}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;
