import React from 'react'
import { certifications } from '../lib/data';

const CoursesCard = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">My Certifications</h2>
      {Object.keys(certifications).map((category) => (
        <div key={category} className="mb-6">
          <h3 className="text-xl font-semibold mb-2 capitalize">{category.replace(/([A-Z])/g, ' $1')}</h3>
          <ul className="list-disc list-inside space-y-1">
            {certifications[category].map((course, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">
                {course}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CoursesCard;