function Projects() {
  const projects = [
    {
      title: "Recipe Book App",
      desc: "React CRUD Application"
    },
    {
      title: "Movie Search App",
      desc: "Search and View Movie Details"
    },
    {
      title: "Weather Dashboard",
      desc: "Weather Forecast Application"
    }
  ];

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div className="project-container">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;