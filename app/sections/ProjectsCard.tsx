'use client';

import { useEffect, useState } from 'react';

const Projects = () => {
  const [activeProjects, setActiveProjects] = useState('');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const token = process.env.GITHUB_ACCESS_TOKEN!;

  // Fetch data on component mount
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projects = await fetch('https://api.github.com/users/NicolasFrazao/repos');
        const data = await projects.json();
        setProjects(data);
      } catch (error) {
        console.error("Error getting the projects:", error);
      }
    };

    fetchProjects(); // Call the async function
  }, []); // Empty dependency array ensures it only runs once on mount

  return (
    <div>
      {projects.map((project: any) => (
        <div key={project.id}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
          <a href={project.html_url} target="_blank" rel="noopener noreferrer">
            View on GitHub
          </a>
        </div>
      ))}
    </div>
  );
};

export default Projects;
