import skills from "./skills"; // Import skills data

export default defineEventHandler(async (event) => {
  // Sample data for projects
  const projects = [
    {
      id: 1,
      name: "Theft Prediction System",
      year: "2024",
      description:
        "A web-based system that uses motion and gesture pattern recognition to identify suspicious activities, providing a practical approach to theft prediction.",
      category: ["Code", "CS Thesis"],
      image: "/screenshots/theft/Landing Page.png",
      live: false,
      projectUrl: [
        {
          label: "Github",
          link: "https://github.com/KJLEscoto/Theft-Prediction-System",
        },
      ],
      role: ["Front-end Developer", "UI/UX Designer"],
      frameworks: ["Nuxt JS", "Laravel", "Tailwind", "Python"],
      tools: [
        "Visual Studio Code",
        "XAMPP",
        "MySQL",
        "Git",
        "Github",
        "Postman",
        "Iconify",
      ],
      figmaOverview: null,
      screenshots: [
        { id: 1, path: "/screenshots/theft/Landing Page.png" },
        { id: 2, path: "/screenshots/theft/Client - Login.png" },
        { id: 3, path: "/screenshots/theft/Login - Verification Options.png" },
        { id: 4, path: "/screenshots/theft/Login - Email Verification.png" },
        { id: 5, path: "/screenshots/theft/Login - SMS Verification.png" },
        { id: 6, path: "/screenshots/theft/Client - Monitor.png" },
        { id: 7, path: "/screenshots/theft/Client - Notifications.png" },
        {
          id: 8,
          path: "/screenshots/theft/Client - Notifications Details.png",
        },
        { id: 9, path: "/screenshots/theft/Client - Settings.png" },
        { id: 10, path: "/screenshots/theft/Client - Edit Settings.png" },
        { id: 11, path: "/screenshots/theft/Admin - Login.png" },
        { id: 12, path: "/screenshots/theft/Admin - Dashboard 1.png" },
        { id: 13, path: "/screenshots/theft/Admin - Dashboard 2.png" },
        { id: 14, path: "/screenshots/theft/Admin - Motions.png" },
        { id: 15, path: "/screenshots/theft/Admin - Detected.png" },
        { id: 16, path: "/screenshots/theft/Admin - Users.png" },
        { id: 17, path: "/screenshots/theft/Admin - Create Users.png" },
        { id: 18, path: "/screenshots/theft/Admin - View User.png" },
        { id: 19, path: "/screenshots/theft/Admin - Change User Status.png" },
        { id: 20, path: "/screenshots/theft/Admin - Delete User.png" },
        { id: 21, path: "/screenshots/theft/Admin - Set Avatars.png" },
        { id: 22, path: "/screenshots/theft/Admin - Settings.png" },
        { id: 23, path: "/screenshots/theft/Admin - Update Settings.png" },
        { id: 24, path: "/screenshots/theft/Flask Server - Select Camera.png" },
        {
          id: 25,
          path: "/screenshots/theft/Flask Server - Select Head Motion.png",
        },
        {
          id: 26,
          path: "/screenshots/theft/Flask Server - Select Gesture.png",
        },
        {
          id: 27,
          path: "/screenshots/theft/Flask Server - Select Snapshot Folder.png",
        },
        { id: 28, path: "/screenshots/theft/Flask Server - Running.png" },
        { id: 29, path: "/screenshots/theft/Train - via Live.png" },
        {
          id: 30,
          path: "/screenshots/theft/via Live - Class Name and Camera Index.png",
        },
        {
          id: 31,
          path: "/screenshots/theft/via Live - Camera Input Process.png",
        },
        { id: 32, path: "/screenshots/theft/via Live - Process Done.png" },
        { id: 33, path: "/screenshots/theft/via Live - Start Training.png" },
        {
          id: 34,
          path: "/screenshots/theft/via Live - Select Algorithm and Save Model.png",
        },
        { id: 35, path: "/screenshots/theft/Train - via Video Feed.png" },
        {
          id: 36,
          path: "/screenshots/theft/via Video Feed - Browse Video Folder and Class Name.png",
        },
        {
          id: 37,
          path: "/screenshots/theft/via Video Feed - Finished Video Processing.png",
        },
        {
          id: 38,
          path: "/screenshots/theft/via Video Feed - Select Algorithm and Save Model.png",
        },
        { id: 39, path: "/screenshots/theft/Train - via Image Feed.png" },
        {
          id: 40,
          path: "/screenshots/theft/via Image Feed - Browse Image Folder and Class Name.png",
        },
        {
          id: 41,
          path: "/screenshots/theft/via Image Feed - Select Algorithm and Save Model.png",
        },
      ],
    },
    {
      id: 2,
      name: "Dota 2 | Clone Site",
      year: "2023",
      description:
        "A replica of the official Dota 2 homepage, featuring immersive design, game updates, hero details, and community highlights for fans and players.",
      category: ["Design"],
      image: "/screenshots/dota2/Landing Page 1.png",
      live: false,
      projectUrl: [
        {
          label: "Figma",
          link: "https://www.figma.com/design/49OJrImCKvmMbXLuPlkxNP/Dota-2?node-id=0-1&t=r47b2PIQ7Bkw0YIZ-1",
        },
      ],
      role: ["UI Designer"],
      frameworks: [],
      tools: ["Figma"],
      figmaOverview:
        "https://embed.figma.com/design/49OJrImCKvmMbXLuPlkxNP/Dota-2?node-id=0-1&embed-host=share",
      screenshots: [
        { id: 1, path: "/screenshots/dota2/Landing Page 1.png" },
        { id: 2, path: "/screenshots/dota2/Landing Page 2.png" },
        { id: 3, path: "/screenshots/dota2/Landing Page 3.png" },
        { id: 4, path: "/screenshots/dota2/Landing Page 4.png" },
        { id: 5, path: "/screenshots/dota2/Footer.png" },
      ],
    },
    {
      id: 3,
      name: "AuthFetch",
      year: "2024",
      description:
        "A streamlined solution for authentication and data fetching built with LaraNuxt, ensuring a seamless integration of Laravel and Nuxt JS for efficient web development.",
      category: ["Code"],
      image: "/screenshots/authfetch/Landing Page.png",
      live: false,
      projectUrl: [
        {
          label: "Github",
          link: "https://github.com/KJLEscoto/AuthFetch-Nuxt-Laravel",
        },
      ],
      role: ["Full-Stack Developer", "UI/UX Designer"],
      frameworks: ["Nuxt JS", "Laravel", "Tailwind"],
      tools: ["Visual Studio Code", "Git", "Github", "Postman", "Iconify"],
      figmaOverview: null,
      screenshots: [
        { id: 1, path: "/screenshots/authfetch/Landing Page.png" },
        { id: 2, path: "/screenshots/authfetch/Login.png" },
        { id: 3, path: "/screenshots/authfetch/Register.png" },
        { id: 4, path: "/screenshots/authfetch/Dashboard.png" },
        { id: 5, path: "/screenshots/authfetch/Fetching Users.png" },
        { id: 6, path: "/screenshots/authfetch/Fetched Users.png" },
      ],
    },
    {
      id: 4,
      name: "Levi Inspired | AOT",
      year: "2022",
      description:
        "An anime-inspired web page dedicated to Levi Ackerman from Attack on Titan. Dive into his iconic moments, character insights, and captivating aesthetics tailored for fans.",
      category: ["Design"],
      image: "/screenshots/levi/Landing Page.png",
      live: false,
      projectUrl: [
        {
          label: "Figma",
          link: "https://www.figma.com/design/wD2ulDw0oyIWsa9rzvYjmW/Levi-Inspired-Page?t=G2K4vC36jyohlT7x-1",
        },
      ],
      role: ["UI Designer"],
      frameworks: [],
      tools: ["Figma"],
      figmaOverview:
        "https://embed.figma.com/design/wD2ulDw0oyIWsa9rzvYjmW/Levi-Inspired-Page?embed-host=share",
      screenshots: [
        { id: 1, path: "/screenshots/levi/Landing Page.png" },
        { id: 2, path: "/screenshots/levi/About Page.png" },
        { id: 3, path: "/screenshots/levi/Login.png" },
        { id: 4, path: "/screenshots/levi/Register.png" },
        { id: 5, path: "/screenshots/levi/Confirm Logout.png" },
      ],
    },
    {
      id: 5,
      name: "Pixel Position",
      year: "2024",
      description:
        "A platform that connects employers and job seekers. Employers can post jobs and find talent, while job seekers can explore opportunities and apply effortlessly—all in one seamless experience.",
      category: ["Code"],
      image: "/screenshots/pixelposition/Landing Page.png",
      live: false,
      projectUrl: [
        {
          label: "Github",
          link: "https://github.com/KJLEscoto/Pixel-Position-p2",
        },
      ],
      role: ["Full-Stack Developer", "UI/UX Designer"],
      frameworks: ["Laravel", "Tailwind"],
      tools: ["Visual Studio Code", "Git", "Github", "Postman"],
      figmaOverview: null,
      screenshots: [
        { id: 1, path: "/screenshots/pixelposition/Landing Page.png" },
        { id: 2, path: "/screenshots/pixelposition/Tags and Recent Jobs.png" },
        { id: 3, path: "/screenshots/pixelposition/Search a Job.png" },
        { id: 4, path: "/screenshots/pixelposition/Search a Job - Result.png" },
        { id: 5, path: "/screenshots/pixelposition/Register Account.png" },
        { id: 6, path: "/screenshots/pixelposition/Login Account.png" },
        { id: 7, path: "/screenshots/pixelposition/Logged In.png" },
        { id: 8, path: "/screenshots/pixelposition/Post a New Job.png" },
        { id: 9, path: "/screenshots/pixelposition/Job Posted.png" },
      ],
    },
    {
      id: 6,
      name: "MASSMS",
      year: "2022",
      description:
        "A responsive web platform that offers fully-featured SMS & mobile marketing platform that doesn't stop you from scaling.",
      category: ["Design", "Code"],
      image: "/screenshots/massms/Landing Page 1.png",
      live: true,
      projectUrl: [
        {
          label: "Figma",
          link: "https://www.figma.com/design/2cqs6Qy37adrUSlLAsMBQd/MASSMS?node-id=0-1&t=vxoNmBUVnSGEs6gP-1",
        },
        { label: "Github", link: "https://github.com/KJLEscoto/MASSMS-Nuxt" },
        { label: "Live", link: "https://kinwebb-massms.netlify.app/" },
      ],
      role: ["Front-end Developer", "Web Designer"],
      frameworks: ["Nuxt JS", "Tailwind"],
      tools: ["Visual Studio Code", "Git", "Github", "Figma", "Netlify"],
      figmaOverview:
        "https://embed.figma.com/design/2cqs6Qy37adrUSlLAsMBQd/MASSMS?node-id=0-1&embed-host=share",
      screenshots: [
        { id: 1, path: "/screenshots/massms/Landing Page 1.png" },
        { id: 2, path: "/screenshots/massms/Landing Page 2.png" },
        { id: 3, path: "/screenshots/massms/Landing Page 3.png" },
        { id: 4, path: "/screenshots/massms/Landing Page 4.png" },
      ],
    },
    {
      id: 7,
      name: "Beat Hub",
      year: "2022",
      description:
        "A go-to online hub for every drummers. It offers a wide range of percussion instruments, complete drum kits, and essential accessories to fuel your passion for drumming.",
      category: ["Design"],
      image: "/screenshots/beathub/Landing Page.png",
      live: false,
      projectUrl: [
        {
          label: "Figma",
          link: "https://www.figma.com/design/TwHI9kj9o02ioQvdxU2Tca/Beat-Hub?node-id=0-1&t=hripkd2UW9IasPea-1",
        },
      ],
      role: ["UI Designer"],
      frameworks: [],
      tools: ["Figma"],
      figmaOverview:
        "https://embed.figma.com/design/TwHI9kj9o02ioQvdxU2Tca/BeatHub?node-id=0-1&embed-host=share",
      screenshots: [
        { id: 1, path: "/screenshots/beathub/Landing Page.png" },
        { id: 2, path: "/screenshots/beathub/Shop Categories.png" },
        { id: 3, path: "/screenshots/beathub/Footer.png" },
        { id: 4, path: "/screenshots/beathub/Drum Parts.png" },
        { id: 5, path: "/screenshots/beathub/Drum Parts - Heads.png" },
        { id: 6, path: "/screenshots/beathub/Drum Parts - Drum Kits.png" },
        {
          id: 7,
          path: "/screenshots/beathub/Drum Parts - Filtered Drum Kits.png",
        },
        { id: 8, path: "/screenshots/beathub/Alesis - Drum Kits.png" },
        { id: 9, path: "/screenshots/beathub/Alesis - Description.png" },
        { id: 10, path: "/screenshots/beathub/Alesis - Specification.png" },
        {
          id: 11,
          path: "/screenshots/beathub/Customer Review and Other Products.png",
        },
        { id: 12, path: "/screenshots/beathub/Product Added to Cart.png" },
        { id: 13, path: "/screenshots/beathub/Drum Parts - Drumsticks.png" },
        { id: 14, path: "/screenshots/beathub/Zildjian - Drumsticks.png" },
        { id: 15, path: "/screenshots/beathub/Zildjian - Description.png" },
        { id: 16, path: "/screenshots/beathub/Zildjian - Specification.png" },
        { id: 17, path: "/screenshots/beathub/Shopping Cart.png" },
        { id: 18, path: "/screenshots/beathub/Sign Up.png" },
        { id: 19, path: "/screenshots/beathub/Sign In.png" },
        { id: 20, path: "/screenshots/beathub/Page Loading.png" },
        { id: 21, path: "/screenshots/beathub/Checkout.png" },
        {
          id: 22,
          path: "/screenshots/beathub/Checkout - Shipment Settings.png",
        },
        {
          id: 23,
          path: "/screenshots/beathub/Checkout - Payment Method and Details.png",
        },
        { id: 24, path: "/screenshots/beathub/User Profile.png" },
        {
          id: 25,
          path: "/screenshots/beathub/User Profile - Purchase History.png",
        },
        { id: 26, path: "/screenshots/beathub/Send a Message.png" },
      ],
    },
    {
      id: 8,
      name: "Cine Stream",
      year: "2023",
      description:
        "A streaming platform for movie enthusiasts, offering the option to rent or purchase films. Enjoy a seamless cinema experience anytime, anywhere.",
      category: ["Design"],
      image: "/screenshots/cinestream/Landing Page.png",
      live: false,
      projectUrl: [
        {
          label: "Figma",
          link: "https://www.figma.com/design/pe9gZqCwi5R8IfZ5Cqg7pE/Cine-Stream?node-id=0-1&t=G2K4vC36jyohlT7x-1",
        },
      ],
      role: ["UI Designer"],
      frameworks: [],
      tools: ["Figma"],
      figmaOverview:
        "https://embed.figma.com/design/pe9gZqCwi5R8IfZ5Cqg7pE/Cine-Stream?node-id=0-1&embed-host=share",
      screenshots: [
        { id: 1, path: "/screenshots/cinestream/Landing Page.png" },
        { id: 2, path: "/screenshots/cinestream/Login.png" },
        { id: 3, path: "/screenshots/cinestream/Confirm User.png" },
        { id: 4, path: "/screenshots/cinestream/Movie Panel.png" },
        { id: 5, path: "/screenshots/cinestream/Filtered Movie.png" },
        { id: 6, path: "/screenshots/cinestream/Movie Details 1.png" },
        { id: 7, path: "/screenshots/cinestream/Movie Details 2.png" },
        { id: 8, path: "/screenshots/cinestream/Library.png" },
        { id: 9, path: "/screenshots/cinestream/Payment Option.png" },
        { id: 10, path: "/screenshots/cinestream/Downloading Movie.png" },
        { id: 11, path: "/screenshots/cinestream/Downloaded Successfully.png" },
      ],
    },
    {
      id: 9,
      name: "Final Grade Calculator",
      year: "2024",
      description:
        "A user-friendly web application designed to help tertiary students quickly and accurately compute their final grades with predefined average formula.",
      category: ["Code"],
      image: "/screenshots/finalgradecalculator/Landing Page.png",
      live: true,
      projectUrl: [
        {
          label: "Github",
          link: "https://github.com/KJLEscoto/FinalGradeCalculator-Nuxt",
        },
        {
          label: "Live",
          link: "https://kinwebb-finalgradecalculator.netlify.app/",
        },
      ],
      role: ["Full-Stack Lite Developer", "UI/UX Designer"],
      frameworks: ["Nuxt JS", "Tailwind"],
      tools: ["Git", "Github", "Netlify", "Iconify"],
      figmaOverview: null,
      screenshots: [
        { id: 1, path: "/screenshots/finalgradecalculator/Landing Page.png" },
        { id: 2, path: "/screenshots/finalgradecalculator/Grade Input.png" },
        { id: 3, path: "/screenshots/finalgradecalculator/Grade Output.png" },
      ],
    },
    {
      id: 10,
      name: "Personal Portfolio",
      year: "2025",
      description:
        "A modern and responsive personal portfolio website showcasing projects and skills.",
      category: ["Design", "Code"],
      image: "/screenshots/portfolio/Landing Page.png",
      live: true,
      projectUrl: [
        {
          label: "Figma",
          link: "https://www.figma.com/design/JXaPNyF8eqgIptKlyGv4io/My-Portfolio?node-id=0-1&t=WyAqHGrS7Hw5mECM-1",
        },
        { label: "Github", link: "https://github.com/KJLEscoto/My-Portfolio" },
        { label: "Live", link: "https://kinwebb.netlify.app/" },
      ],
      role: ["Full-Stack Lite Developer", "UI/UX Designer"],
      frameworks: ["Nuxt JS", "Tailwind"],
      tools: ["Git", "Github", "Netlify", "Figma", "Iconify"],
      figmaOverview:
        "https://embed.figma.com/design/JXaPNyF8eqgIptKlyGv4io/My-Portfolio?node-id=0-1&embed-host=share",
      screenshots: [
        { id: 1, path: "/screenshots/portfolio/Landing Page.png" },
        { id: 2, path: "/screenshots/portfolio/Skills.png" },
        { id: 3, path: "/screenshots/portfolio/Projects.png" },
        { id: 4, path: "/screenshots/portfolio/Project Details.png" },
        {
          id: 5,
          path: "/screenshots/portfolio/Screenshots - Project Details.png",
        },
        {
          id: 6,
          path: "/screenshots/portfolio/Figma Overview - Project Details.png",
        },
        { id: 7, path: "/screenshots/portfolio/Linkedin and Location.png" },
        { id: 8, path: "/screenshots/portfolio/Hire Me - Message Form.png" },
        { id: 9, path: "/screenshots/portfolio/Email Copied.png" },
        { id: 10, path: "/screenshots/portfolio/Form - Error.png" },
        { id: 11, path: "/screenshots/portfolio/Form - Sending.png" },
        { id: 12, path: "/screenshots/portfolio/Form - Sent.png" },
      ],
    },
  ];

  // Map frameworks to their details (name and icon) from skills.js
  const skillsData = skills(); // Get skills data

  const mappedProjects = projects.map((project) => {
    const mappedFrameworks = Array.isArray(project.frameworks)
      ? project.frameworks.map((framework) => {
          const skill = skillsData.find((skill) => skill.name === framework);
          return skill
            ? { name: skill.name, icon: skill.icon }
            : { name: framework, icon: null };
        })
      : [];

    const mappedTools = Array.isArray(project.tools)
      ? project.tools.map((tool) => {
          const skill = skillsData.find((skill) => skill.name === tool);
          return skill
            ? { name: skill.name, icon: skill.icon }
            : { name: tool, icon: null };
        })
      : [];

    return { ...project, frameworks: mappedFrameworks, tools: mappedTools };
  });

  // Extract query parameters
  const query = getQuery(event);
  const { name, category } = query;

  if (name) {
    // Filter project by name (case-insensitive)
    const filteredByName = mappedProjects.filter(
      (project) => project.name.toLowerCase() === name.toLowerCase()
    );

    if (filteredByName.length > 0) {
      return filteredByName;
    }

    // Return 404 if no project matches the name
    throw createError({
      statusCode: 404,
      statusMessage: "Project not found",
    });
  }

  // Uncomment to enable category filtering
  // if (category) {
  //   // Filter projects by category (case-insensitive)
  //   const filteredByCategory = mappedProjects.filter((project) =>
  //     project.category.some((cat) => cat.toLowerCase() === category.toLowerCase())
  //   );

  //   return filteredByCategory;
  // }

  // Return all projects if no specific filters are applied
  return mappedProjects;
});
