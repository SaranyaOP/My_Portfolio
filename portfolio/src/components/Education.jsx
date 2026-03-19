export default function Education() {
  const data = [
    "SSLC - 2014",
    "Plus Two - 2016",
    "Diploma - 2019",
    "BSc IT - 2022",
    "MCA - Pursuing"
  ];

  return (
    <div className="py-20 px-6 bg-white dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">
        Education
      </h2>

      <div className="max-w-xs mx-auto border-l-4 border-blue-500 pl-6">
        {data.map((item, i) => (
          <p key={i} className="mb-4 text-gray-700 dark:text-gray-300">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}