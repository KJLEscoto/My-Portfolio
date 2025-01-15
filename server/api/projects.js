export default defineEventHandler((event) => {
  // Sample data for projects
  const projects = [
    {
      id: 1,
      name: "Theft Prediction System",
      description: "An AI-powered system to enhance security by predicting potential thefts in private places like warehouses and offices.",
      category: ["Code", "CS Thesis"], 
      image: "/screenshots/theft/Landing Page.png",
      projectUrl: "https://github.com/KJLEscoto/Theft-Prediction-System",
      live: false,
      liveUrl: null,
      screenshots: [
        { id: 1, path: "/screenshots/theft/Landing Page.png" },
      ]
    },
    {
      id: 2,
      name: "BeatHub",
      description: "An e-commerce website for drumming enthusiasts. Offers a wide range of drum-related products with a seamless shopping experience.",
      category: ["Design"], 
      image: "/screenshots/theft/Landing Page.png",
      projectUrl: "/#",
      live: false,
      liveUrl: null,
      screenshots: []
    },
    {
      id: 3,
      name: "STI Final Grade Calculator",
      description: "A web application that calculates final grades for tertiary students, ensuring quick and accurate computations.",
      category: ["Code"],      
      image: "/screenshots/theft/Landing Page.png",
      projectUrl: "/#",
      live: true,
      liveUrl: "",
      screenshots: []
    },
    {
      id: 4,
      name: "Personal Portfolio",
      description: "A modern and responsive personal portfolio website showcasing projects and skills.",
      category: ["Design", "Code"],
      image: "/screenshots/theft/Landing Page.png",
      projectUrl: "/#",
      live: true,
      liveUrl: "",
      screenshots: []
    },
  ];

  // Get project `id` from the route parameter
  const { name } = getQuery(event);

  // If an `id` is provided, filter the project by `id`
  if (name) {
    const project = projects.find((p) => p.name === name);
    if (!project) {
      throw createError({
        statusCode: 404,
        statusMessage: "Project not found",
      });
    }
    return project;
  }

  // Return all projects if no `id` is specified
  return projects;
});
