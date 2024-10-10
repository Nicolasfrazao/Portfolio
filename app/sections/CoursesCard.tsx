import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";

import { certifications } from "../lib/data";

const CoursesCard = () => {
  return (
    <Card className="p-6 lg:-top-10 lg:max-h-fit shadow-lg shadow-black dark:shadow-white bg-white dark:bg-gray-800 min-h-96 mt-10 flex items-start rounded-xl border ">
      <CardHeader className="text-2xl font-bold mb-4">
        <h2 className="text-2xl font-bold mb-4">My Certifications:</h2>
      </CardHeader>
      <Divider className="bg-blue-500 rounded-xl" />
      <CardBody>
        {Object.keys(certifications).map((category) => (
          <div
            key={category}
            className="mb-6 bg-opacity-20 backdrop-blur-lg  "
          >
            <CardHeader className="text-2xl font-bold mb-2">
              <h2 className="text-xl font-semibold capitalize">
                {category.replace(/([A-Z])/g, " $1") + " :"}
              </h2>
            </CardHeader>
            <ul className="list-disc list-inside space-y-1">
              {certifications[category].map((course: string, index: number) => (
                <li
                  key={index}
                  className="text-gray-700 ml-4 p-1 dark:text-gray-300"
                >
                  {course}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default CoursesCard;
