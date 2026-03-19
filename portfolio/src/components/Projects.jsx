import { projects } from "../data/data";

export default function Projects() {
  return (
    <div id="projects" className="py-20 px-6 bg-white dark:bg-gray-800">
      <h2 className="text-3xl font-bold text-center mb-10 dark:text-white">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-gray-100 dark:bg-gray-900 p-4 rounded-xl shadow hover:scale-105 transition"
          >
            <img src={p.image} className="rounded-lg" />

            <h3 className="text-xl font-semibold mt-4 dark:text-white">
              {p.name}
            </h3>

            <p className="text-gray-600 dark:text-gray-300">{p.tech}</p>

            <div className="flex gap-4 mt-4">
              <a className="text-blue-500" href={p.github}>
                GitHub
              </a>
              <a className="text-purple-500" href={p.live}>
                Live
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
