import { skills } from "../lib/data";

const SkillsCard = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">My Skills</h2>
      {Object.entries(skills).map(([category, skillList]) => (
        <SkillCategory key={category} category={category} skillList={skillList} />
      ))}
    </div>
  );
};

const SkillCategory = ({ category, skillList }) => {
  return (
    <div className="mb-6">
      <h3 className="text-xl font-semibold mb-2 capitalize">
        {formatCategoryName(category)}
      </h3>
      <ul className="list-disc list-inside space-y-1">
        {skillList.map((skill : string, index : number) => (
          <li key={index} className="text-gray-700 dark:text-gray-300">
            {skill}
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
