export default defineEventHandler(() => {
  // Sample data for projects
  const projects = [
    {
      id: 1,
      name: "BeatHub",
      description: "An e-commerce website for drumming enthusiasts. Offers a wide range of drum-related products with a seamless shopping experience.",
      category: "Design",
      image: "https://picsum.photos/1920/1080?random=1",
    },
    {
      id: 2,
      name: "Theft Prediction System",
      description: "An AI-powered system to enhance security by predicting potential thefts in private places like warehouses and offices.",
      category: "Code",
      image: "https://picsum.photos/1920/1080?random=2",
    },
    {
      id: 3,
      name: "STI Final Grade Calculator",
      description: "A web application that calculates final grades for tertiary students, ensuring quick and accurate computations.",
      category: "Code",
      image: "https://picsum.photos/1920/1080?random=3",
    },
    {
      id: 4,
      name: "Personal Portfolio",
      description: "A modern and responsive personal portfolio website showcasing projects and skills.",
      category: "Design",
      image: "https://picsum.photos/1920/1080?random=4",
    },
  ];

  return projects;
});
