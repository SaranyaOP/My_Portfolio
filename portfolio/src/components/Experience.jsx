export default function Experience() {
  const experiences = [
    {
      company: "LGSI Bangalore",
      role: "Frontend Developer",
      duration: "June 2023 – Jan 2026",
      project: "LG ThinQ App – Robot Vacuum Cleaner",
      points: [
        "Built responsive UI features including Efficient Charging, Multi-map Navigation, and Consumable Management",
        "Used React and Recoil.js for efficient state management and improved user interaction",
        "Integrated APIs to enable seamless communication between app and robot systems",
        "Collaborated with UX designers to enhance usability and consistency",
        "Improved app performance by reducing load time by 25%",
        "Reduced defect rates by 20% through testing and debugging"
      ]
    },
    {
      company: "Cybotrix Technology",
      role: "Frontend Developer",
      duration: "Oct 2022 – Mar 2023",
      project: "Medical Planet – Healthcare",
      points: [
        "Developed clinic management features including appointment booking and medicine ordering",
        "Improved UI flows and fixed cross-browser compatibility issues",
        "Designed modules to streamline scheduling and user operations"
      ]
    }
  ];

  return (
    <div className="py-20 px-6 bg-white dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-12 dark:text-white">
        Experience
      </h2>

      <div className="max-w-4xl mx-auto border-l-4 border-blue-500 pl-6 space-y-10">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            
            {/* Dot */}
            <div className="absolute -left-[35px] top-2 w-4 h-4 bg-blue-500 rounded-full"></div>

            <h3 className="text-xl font-semibold dark:text-white">
              {exp.role} – {exp.company}
            </h3>

            <p className="text-sm text-gray-500 dark:text-gray-400">
              {exp.duration}
            </p>

            <p className="mt-2 font-medium text-gray-700 dark:text-gray-300">
              {exp.project}
            </p>

            <ul className="mt-3 list-disc ml-5 space-y-2 text-gray-600 dark:text-gray-300">
              {exp.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}