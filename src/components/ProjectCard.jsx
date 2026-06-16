import { github } from "../assets/icons";
import { SquareArrowOutUpRight } from "lucide-react";

const THEME_GRADIENTS = {
  "btn-back-red": "linear-gradient(135deg, #ff4b1f 70%, #ff9068 120%)",
  "btn-back-blue": "linear-gradient(135deg, #042151 80%, #60efff 120%)",
  "btn-back-yellow": "linear-gradient(135deg, #f7971e 90%, #ffd200 120%)",
  "btn-back-black": "linear-gradient(135deg, #000000 90%, #e4e7e4 120%)",
};

const ProjectCard = ({ project }) => {
  const descriptions = (
    Array.isArray(project.description)
      ? project.description
      : [project.description]
  ).filter(Boolean);

  return (
    <article
      className={`group flex flex-col rounded-xl border border-slate-200 bg-white shadow-card overflow-hidden transition-all duration-300 ${
        project.featured ? "md:col-span-2 md:flex-row" : ""
      }`}
    >
      <div
        className={`relative flex items-center justify-center overflow-hidden min-h-[160px] ${
          project.featured ? "md:min-h-0 md:w-2/5 md:p-10" : ""
        }`}
        style={{ background: THEME_GRADIENTS[project.theme] }}
      >
        <img
          src={project.imageUrl || project.iconUrl}
          alt={`${project.name} preview`}
          className={`w-full h-auto object-contain drop-shadow-lg transition-transform duration-300 group-hover:scale-105 ${
            project.featured ? "max-w-[220px]" : "max-w-[100px]"
          }`}
        />
        {project.featured && (
          <span className="absolute top-4 left-4 bg-white text-blue-500 text-xs font-semibold font-poppins px-3 py-1 rounded-full shadow-card">
            Featured
          </span>
        )}
      </div>

      <div className="flex flex-col flex-1 p-4 pt-2 gap-2">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-poppins font-semibold text-black-500">
            {project.name}
          </h3>
          <div className="flex gap-2 items-center">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={github}
                  alt="github"
                  className="w-4 h-4 object-contain"
                />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${project.name} live demo`}
              >
                <SquareArrowOutUpRight className="w-4 h-4 cursor-pointer" />
              </a>
            )}
          </div>
        </div>

        {project.highlight && (
          <p className="text-sm font-medium text-blue-500 leading-relaxed">
            {project.highlight}
          </p>
        )}

        {descriptions.map((desc, index) => (
          <p key={index} className="text-xs text-slate-500 leading-relaxed">
            {desc}
          </p>
        ))}

        {project.tech?.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-1">
            {project.tech.map((tag) => (
              <span
                key={tag}
                className="text-[10px] font-medium text-slate-600 bg-slate-100 px-2.5 py-1 rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
};

export default ProjectCard;
