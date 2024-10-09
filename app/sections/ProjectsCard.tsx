'use client';

import { useEffect, useState } from 'react';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = process.env.GITHUB_ACCESS_TOKEN;

  // Fetch data on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      try {
        const response = await fetch('https://api.github.com/users/NicolasFrazao/repos', {
          
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        setProjects(data);
      } catch (error) {
        setError(error);
        console.error("Error getting the projects:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects(); // Call the async function
  }, [token]); // Added token to the dependency array for potential changes

  if (loading) {
    return <div>Loading projects...</div>;
  }

  if (error) {
    return <div>Error loading projects: {error.message}</div>;
  }

  return (
    <div>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))
      )}
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="mb-4 p-4 border rounded shadow">
      <h3 className="text-lg font-semibold">{project.name}</h3>
      <p className="text-gray-700">{project.description || 'No description available.'}</p>
      <a
        href={project.html_url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default Projects;
