export default function Experience() {
  const experiences = [
    {
      company: "LGSI Bangalore",
      role: "Frontend Developer",
      duration: "June 2023 – Jan 2026",
      project: "LG ThinQ App – Robot Vacuum Cleaner",
      points: [
        "Developed scalable and responsive UI components for features like multi-map navigation, efficient charging, and consumable tracking using React",
        "Implemented state management using Recoil.js to handle complex device states and improve real-time UI updates",
        "Integrated REST APIs to enable seamless communication between the application and IoT-based robot systems",
        "Optimized performance by reducing initial load time by 25% through code splitting and lazy loading",
        "Improved application stability by identifying and fixing critical bugs, reducing defect rates by 20%",
        "Collaborated with UX designers to refine user flows, improving usability and consistency across screens"
      ]
    },
    {
      company: "Cybotrix Technology, Bangalore",
      role: "Frontend Developer",
      duration: "Oct 2022 – Mar 2023",
      project: "Medical Planet – Healthcare",
      points: [
        "Built responsive UI for clinic management features including appointment scheduling and medicine ordering",
        "Improved cross-browser compatibility and fixed UI inconsistencies across multiple devices",
        "Designed and implemented reusable components to streamline development and improve maintainability"
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