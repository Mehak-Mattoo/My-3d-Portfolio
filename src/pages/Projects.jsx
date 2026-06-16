import React from "react";
import CTA from "../components/CTA";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../constants";

const Projects = () => {
  const handleResumeDownload = () => {
    const baseUrl = window.location.origin;
    const resumePath = `${baseUrl}/Mehak_Mattoo_Resume.pdf`;

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
        <p className="text-sm md:text-base mt-2 leading-relaxed">
          A selection of products I&apos;ve built — from AI-powered workspaces
          to real-time apps — with a focus on performance, polish, and
          thoughtful UX.
        </p>
      </div>

      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
        {projects.map((project) => (
          <ProjectCard key={project.name} project={project} />
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
