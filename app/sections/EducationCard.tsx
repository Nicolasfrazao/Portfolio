'use client';

import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";
import { useState } from "react";

const EducationCard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex flex-col justify-center items-center min-h-screen ${darkMode ? "bg-gray-900" : "bg-gray-100"} p-6`}>
      <button
        onClick={toggleDarkMode}
        className={`mb-6 px-4 py-2 rounded-md font-semibold ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <Card
        className={`backdrop-blur-lg ${
          darkMode ? "bg-black bg-opacity-40 text-white" : "bg-white bg-opacity-60 text-gray-800"
        } shadow-2xl rounded-xl p-8 max-w-3xl border ${darkMode ? "border-gray-800" : "border-gray-300"}`}
        style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" }}
      >
        <CardHeader>
          <h1 className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            Education
          </h1>
        </CardHeader>
        <Divider className={`${darkMode ? "bg-gray-700" : "bg-gray-300"}`} />
        <CardBody>
          <ul className="list-none space-y-6 text-lg leading-relaxed">
            <li className="flex flex-col">
              <h3 className={`font-semibold ${darkMode ? "text-blue-300" : "text-blue-500"}`}>
                Bachelor of Science in Computer Science
              </h3>
              <span className="text-sm italic mb-2">
                XYZ University, 2020 - 2024
              </span>
              <p className="text-gray-600 dark:text-gray-300">
                Specialized in software engineering and AI, gaining hands-on experience
                in web development, data science, and cybersecurity.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className={`font-semibold ${darkMode ? "text-blue-300" : "text-blue-500"}`}>
                Certificate in Cloud Computing
              </h3>
              <span className="text-sm italic mb-2">
                ABC Institute, 2022
              </span>
              <p className="text-gray-600 dark:text-gray-300">
                Completed a comprehensive certification program on cloud architecture, deployment,
                and optimization with a focus on AWS and Azure services.
              </p>
            </li>
            <li className="flex flex-col">
              <h3 className={`font-semibold ${darkMode ? "text-blue-300" : "text-blue-500"}`}>
                Advanced Diploma in Cybersecurity
              </h3>
              <span className="text-sm italic mb-2">
                DEF Tech Academy, 2021
              </span>
              <p className="text-gray-600 dark:text-gray-300">
                Gained in-depth knowledge on network security, ethical hacking, and data protection
                strategies through intensive training and projects.
              </p>
            </li>
          </ul>
        </CardBody>
      </Card>
    </div>
  );
};

export default EducationCard;
