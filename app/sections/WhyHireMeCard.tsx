"use client";

import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";
import { useState, useRef } from "react";

const WhyHireMeCard = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div
      className={`flex flex-col justify-center items-center min-h-screen ${darkMode ? "bg-inherit" : "bg-inherit"} p-6`}
    >
      <button
        className={`mb-6 px-4 py-2 rounded-md font-semibold ${darkMode ? "bg-white text-black" : "bg-black text-white"}`}
        onClick={toggleDarkMode}
      >
        {darkMode ? "Light Mode" : "Dark Mode"}
      </button>

      <Card
        className={`backdrop-blur-lg ${
          darkMode
            ? "bg-black bg-opacity-40 text-white"
            : "bg-white bg-opacity-60 text-gray-800"
        } shadow-2xl rounded-xl p-8 max-w-3xl border ${darkMode ? "border-gray-800" : "border-gray-300"}`}
        style={{ boxShadow: "0 4px 30px rgba(0, 0, 0, 0.5)" }}
      >
        <CardHeader>
          <h1
            className={`text-3xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            Why Hire Me?
          </h1>
        </CardHeader>
        <Divider className={`${darkMode ? "bg-gray-700" : "bg-gray-300"}`} />
        <CardBody>
          <p className="mb-6">
            When you hire me, you're not just bringing a highly skilled
            professional on board—you’re investing in a versatile powerhouse who
            will drive exceptional results across multiple facets of your
            business. With a track record of transforming challenges into
            opportunities, I offer a unique blend of technical expertise,
            strategic insight, and unstoppable dedication.
          </p>
          <p className="mb-6">
            I bring over 150 certifications across software development, cloud
            computing, cybersecurity, digital marketing, and entrepreneurship,
            which means I'm prepared to solve problems from every angle and at
            every scale. My technical toolkit includes an array of programming
            languages and frameworks—like NextJS, Node, Python, TypeScript, and
            C++—and I have hands-on experience with industry-leading
            technologies such as AWS, Prisma, and GraphQL.
          </p>
          <p className="mb-6">
            I don’t just focus on delivering results; I focus on driving
            game-changing growth. With me, you're not only gaining a software
            engineer, but also an entrepreneur, investor, and project leader who
            understands how to harness technology for scalable success.
          </p>
          <p className="mb-6">
            What truly sets me apart is my athletic discipline and relentless
            drive for excellence. I approach every project with the same
            intensity I bring to my athletic endeavors—always striving for the
            next level and pushing the boundaries of what’s possible. I’m
            committed to continuous growth, learning, and a level of focus that
            turns vision into reality.
          </p>
          <h3
            className={`text-2xl font-semibold mb-4 ${darkMode ? "text-blue-300" : "text-blue-500"}`}
          >
            By hiring me, you’ll get a professional who is:
          </h3>
          <ul className="list-none space-y-4 text-lg leading-relaxed">
            <li className="flex items-start">
              <span
                className={`mr-3 font-bold ${darkMode ? "text-blue-300" : "text-blue-500"}`}
              >
                Multidisciplinary:
              </span>
              <span>
                Capable of handling a wide range of responsibilities across
                software engineering, business development, and operational
                management.
              </span>
            </li>
            <li className="flex items-start">
              <span
                className={`mr-3 font-bold ${darkMode ? "text-blue-300" : "text-blue-500"}`}
              >
                Strategic:
              </span>
              <span>
                Skilled at analyzing and optimizing processes to enhance
                efficiency, reduce costs, and increase profitability.
              </span>
            </li>
            <li className="flex items-start">
              <span
                className={`mr-3 font-bold ${darkMode ? "text-blue-300" : "text-blue-500"}`}
              >
                Dedicated:
              </span>
              <span>
                Driven by a passion for continuous improvement and always aiming
                to exceed expectations.
              </span>
            </li>
          </ul>
          <p className="mt-6">
            Let’s make your goals my mission. Together, we’ll elevate your
            projects to new heights, leverage cutting-edge technology, and
            achieve unparalleled growth. Your success is my priority, and I’m
            ready to bring everything I’ve got to make it happen.
          </p>
        </CardBody>
      </Card>
    </div>
  );
};

export default WhyHireMeCard;
