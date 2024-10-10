"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface GitHubProject {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  avatar_url: string;
  language: string | null;
  homepage: string | null;
  topics: string[];
}

const Projects = () => {
  const [projects, setProjects] = useState<GitHubProject[]>([]);
  const [loading, setLoading] = useState(true);
  const token = process.env.GITHUB_ACCESS_TOKEN;

  // Fetch data on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.github.com/users/NicolasFrazao/repos",
          {},
        );

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();

        setProjects(data);
      } catch (error) {
        console.error("Error getting the projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects(); // Call the async function
  }, [token]);

  if (loading) {
    return (
      <div className="text-center py-10 text-lg font-medium">
        Loading projects...
      </div>
    );
  }

  return (
    <div className="container mx-auto p-4 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {projects.length === 0 ? (
        <p className="text-center text-gray-500">No projects found.</p>
      ) : (
        projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))
      )}
    </div>
  );
};

const ProjectCard = ({ project }: { project: GitHubProject }) => {
  return (
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow hover:shadow-lg transition-shadow p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
        {project.name}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">
        {project.description || "No description available."}
      </p>
      <div className="mb-4 flex flex-wrap items-center gap-2 text-sm">
        <p className="text-gray-600 dark:text-gray-400 font-medium">Topics:</p>
        {project.topics.length > 0 ? (
          project.topics.map((topic, index) => (
            <span
              key={index}
              className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 rounded-full px-3 py-1 text-xs font-semibold"
            >
              {topic}
            </span>
          ))
        ) : (
          <span className="text-gray-500">None</span>
        )}
      </div>
      <p className="text-gray-600 dark:text-gray-400 font-medium">Language:</p>
      <p className="text-blue-600 dark:text-blue-400 mb-2">
        {project.language || "Not specified"}
      </p>
      <p className="text-gray-600 dark:text-gray-400 font-medium">Homepage:</p>
      <Link
        className="text-blue-600 dark:text-blue-400 hover:underline mb-4"
        href={project.homepage || "#"}
      >
        {project.homepage || "Not specified"}
      </Link>
      <div className="mt-4">
        <Link
          className="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-200 font-semibold"
          href={project.html_url}
          rel="noopener noreferrer"
          target="_blank"
        >
          View on GitHub
        </Link>
      </div>
    </div>
  );
};

export default Projects;
