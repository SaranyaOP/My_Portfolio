export default function Skills() {
    const skills = [
    { name: "HTML", color: "orange" },
    { name: "CSS", color: "blue" },
    { name: "JavaScript", color: "yellow" },
    { name: "React", color: "cyan" },
    { name: "Redux", color: "violet" },
    { name: "MongoDB", color: "green" },
     { name: "Express.js", color: "gray" },
    { name: "Node.js", color: "lime" },
   
  ];

  const colorClasses = {
    blue: "text-blue-500 border-blue-500",
    orange: "text-orange-500 border-orange-500",
    yellow: "text-yellow-500 border-yellow-500",
    violet: "text-purple-500 border-purple-500",
    green: "text-green-700 border-green-700",
    gray: "text-gray-500 border-gray-500",
    cyan: "text-cyan-400 border-cyan-400",
    lime: "text-lime-600 border-lime-600",
  };


  return (
    <div className="py-20 px-6 bg-gray-100 dark:bg-gray-900 text-center">
      <h2 className="text-3xl font-bold mb-10 dark:text-white">Skills</h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
        {skills.map((skill, index) => (
          <span
            key={index}
            className={`px-4 py-2 border border-4 h-15 w-15 text-sm font-medium 
            bg-transparent hover:scale-105 transition ${colorClasses[skill.color]}`}
          >
           <h1 className="text-3xl">{skill.name}</h1> 
          </span>
        ))}
      </div>
    </div>
  );
}