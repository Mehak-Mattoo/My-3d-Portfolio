import React from "react";
import CTA from "../components/CTA";
import { projects } from "../constants";
import { arrow } from "../assets/icons";
import { Link } from "react-router-dom";

const Projects = () => {
  // Handle resume download
  const handleResumeDownload = () => {
    // The path to your resume file in the public folder
    // Use window.location.origin to get the base URL of your application
    const baseUrl = window.location.origin;
    const resumePath = `${baseUrl}/Mehak_Mattoo_Resume.pdf`;

    // Create an anchor element
    const link = document.createElement("a");
    link.href = resumePath;
    link.download = "Mehak_Mattoo_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p className="text-slate-500 mt-2 leading-relaxed">
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. You can check them out and feel
          free to contribute your ideas for further enhancements.
        </p>
      </div>

      <div className="mt-16 flex flex-wrap gap-7">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              {(Array.isArray(project.description)
                ? project.description
                : [project.description]
              )
                .filter(Boolean) // Removes falsy values (null, undefined, etc.)
                .map((desc, index) => (
                  <p key={index} className="mt-2 text-slate-500">
                    {desc}
                  </p>
                ))}

              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600"
                >
                  Link
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200 mt-16" />

      <CTA />

      <button
        className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-8"
        onClick={handleResumeDownload}
      >
        Download Resume
      </button>
    </section>
  );
};

export default Projects;
