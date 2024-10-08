import { Card, CardBody, CardHeader } from "@nextui-org/card";
import { Divider } from "@nextui-org/react";

import { skills } from "../lib/data";

const SkillsCard = () => {
  return (
    <Card className="p-6 lg:top-0 lg:max-h-fit border-white border bg-white dark:bg-gray-800 rounded-lg shadow-lg shadow-black dark:shadow-white">
      <CardHeader>
        <h2 className="text-2xl font-bold mb-4">My Skills:</h2>
      </CardHeader>
      <Divider />
      <CardBody>
        {Object.entries(skills).map(([category, skillList]) => (
          <SkillCategory
            key={category}
            category={category}
            // @ts-ignore
            skillList={skillList}
          />
        ))}
      </CardBody>
    </Card>
  );
};

const SkillCategory = ({
  category,
  skillList,
}: {
  category: string;
  skillList: string[];
}) => {
  return (
    <div className="mb-4 relative">
      <CardHeader>
        <h3 className="text-xl font-semibold mb-2 capitalize ">
          {/* @ts-ignore */}
          {formatCategoryName(category) + ":"}
        </h3>
      </CardHeader>
      <ul className="list-disc list-inside space-y-1">
        {skillList.map((skill: string, index: number) => (
          <li key={index} className="text-gray-700 dark:text-gray-300 ml-2 p-1">
            {" " + skill}
          </li>
        ))}
      </ul>
    </div>
  );
};

const formatCategoryName = (category: string) => {
  return category.replace(/([A-Z])/g, " $1");
};

export default SkillsCard;
