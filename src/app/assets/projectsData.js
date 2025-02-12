export const projects = [
  {
    id: 1,
    projectName: 'Zatyshna',
    about:
      'The Zatyshna Language School website.  The homepage features an interactive castle image with clickable areas. The website is responsive and optimized for both desktop and mobile devices.',
    image: '/images/zatyshna.jpg',
    type: 'Individual project',
    repo: 'https://github.com/OlenaPobehailo/zatyshna',
    livePage: 'https://zatyshna.vercel.app/',
    technology: ['Next.js', 'React', 'CSS Modules'],
    description:
      'The Zatyshna Language School website is built using Next.js. \n\n In addition to the main menu, the homepage features an image of a castle with towers. The image is interactive, using an image map to allow users to click on various areas of the castle image. The image map is implemented using <map> and <area> tags, which define clickable regions on the image. These areas have specific coordinates that enable navigation to different parts of the site. Each clickable region is highlighted with interactive effects, triggered by mouse hover events. \n\n The website is designed to be user-friendly, with a clean, modern interface and responsive layout to provide a seamless experience on both desktop and mobile devices.',
  },
  {
    id: 2,
    projectName: 'Model Portfolio',
    about:
      'The Model Portfolio Website showcases a photo with a responsive gallery and includes a contact form for getting in touch with the model.',
    image: '/images/model-portfolio.jpg',
    type: 'Individual project',
    repo: 'https://github.com/OlenaPobehailo/tetianaandronenko',
    livePage: 'https://tetianaandronenko.vercel.app/',
    technology: ['Next.js', 'React', 'CSS Modules'],
    description:
      "The Model Portfolio Website is a platform designed to showcase a photo model's work. \n\n Visitors can browse through a collection of  images in a responsive photo gallery. The site ensures an optimal viewing experience across all devices, with a modal window feature that opens images in a detailed view when clicked. \n\n Additionally, a loader enhances the user experience by displaying during image loading. Built using Next.js, the site leverages the React-Photo-Gallery for the responsive gallery, CSS Modules for scoped component styling, and the Next.js Image Component for optimized image loading and performance. \n\n It also includes a contact form for getting in touch with the model.",
  },
  {
    id: 3,
    projectName: 'My Portfolio',
    about:
      'This project is a portfolio website built using Next.js, showcasing my skills and projects.',
    image: '/images/my-portfolio.jpg',
    type: 'Individual project',
    repo: 'https://github.com/OlenaPobehailo/my-portfolio',
    livePage: 'https://olena-pobehailo.vercel.app/',
    technology: ['Next.js', 'React', 'CSS Modules'],
    description:
      'This portfolio website showcases my skills and projects as a full-stack developer, offering visitors a seamless and interactive experience. It features a responsive design for optimal viewing across devices, highlights a diverse range of projects, showcases proficiency in front-end and back-end technologies like React, Node.js, and MongoDB, and includes a contact form for inquiries, collaborations, or discussions. Technologies used include Next.js for server-side rendering, React for UI building, CSS Modules for scoped styling, GitHub for hosting repositories, and Vercel for deployment.',
  },
  {
    id: 4,
    projectName: 'Artsander',
    about:
      'This project is a portfolio website for a professional video editor built using HTML, CSS, JavaScript, showcasing my skills and projects.',
    image: '/images/artsander.jpg',
    type: 'Individual project',
    repo: 'https://github.com/OlenaPobehailo/artsander',
    livePage: 'https://artsander.vercel.app/',
    technology: ['HTML', 'SCSS', 'JavaScript'],
    description:
      'The Video Editor Portfolio Website is designed to showcase a to showcase his work, skills, and services. \n\n Visitors can browse through a collection of  videos. The site ensures an optimal viewing experience across all devices, with a modal window feature that opens videos when clicked. \n\n A loader enhances the user experience by displaying during video loading. Built using HTML, CSS, and JavaScript. \n\n It also includes a contacts for getting in touch with the video editor.',
  },
  {
    id: 5,
    projectName: 'WebStudio',
    about:
      'The project implemented responsive/adoptive design for the best possible website viewing experience using HTML and SASS. Markup only.',
    image: '/images/webstudio.jpg',
    type: 'Individual project',
    repo: 'https://github.com/OlenaPobehailo/goit-markup-hw-08',
    livePage: 'https://olenapobehailo.github.io/goit-markup-hw-08/',
    technology: ['HTML', 'SCSS'],
    description:
      'The project implemented a responsive/adaptive design to ensure the best possible viewing experience across all devices, from mobile phones to desktops.\n\n Using HTML and SASS, the layout adjusts seamlessly to different screen sizes and orientations. The design features include breakpoints for mobile, tablet, and desktop views, ensuring that the website is both visually appealing and highly functional on any device. \n\n Additionally, the use of custom SASS variables and mixins streamlined the styling process, making the code more maintainable and scalable.',
  },
  {
    id: 6,
    projectName: 'Cucina di Catherina',
    about:
      'A responsively designed e-commerce website. This project is built in team collaboration. Markup only.',
    image: '/images/cucina-di-catherina.jpg',
    type: 'Team project',
    repo: 'https://github.com/OlenaPobehailo/team-page',
    livePage: 'https://olenapobehailo.github.io/team-page/',
    technology: ['HTML', 'SCSS'],
    description:
      'Tomato sauces online store. This project has a responsive design with breakpoints for various devices, valid HTML5 markup, custom font integration, optimized graphics and image loading, icon sprites, and a favicon.\n\n It includes a header with navigation, a hero section with a call-to-action button, product showcases, video recipes, an image gallery, and a footer with contact and social links. Implemented using HTML5, CSS3, JavaScript, and modal windows for user interaction. \n\n  I successfully created modal windows.',
  },

  // {
  //   id: 7,
  //   projectName: 'Expense Tracker',
  //   about:
  //     'Adaptive web app for tracking daily expenses on desktop, tablet, and mobile. I implemented user registration and login',
  //   image: '/images/money-makers.jpg',
  //   type: 'Team project',
  //   repo: 'https://github.com/OlenaPobehailo/money_makers',
  //   livePage: 'https://olenapobehailo.github.io/money_makers/',
  //   technology: ['React', 'Redux', 'JavaScript'],
  //   description:
  //     'Web application designed for tracking daily expenses. It features an adaptive design for desktop, tablet, and mobile devices. The core functionalities include a main dashboard for an overview of expenses, authentication pages for user registration and login, and transaction history pages to review past expenditures.\n\n In this collaborative project, I took responsibility for implementing the user registration and login functionalities. This involved setting up secure authentication flows, validating user input, and managing user sessions. Additionally, I integrated third-party libraries to enhance security and performance, ensuring that user data is handled safely and efficiently.',
  // },

  {
    id: 8,
    projectName: 'Car Rental Service',
    about:
      'The website is a car rental platform where users can select vehicles, filter by brand, price, and mileage, and create a personalized list of favorite models.',
    image: '/images/car-rental.jpg',
    type: 'Individual project',
    repo: 'https://github.com/OlenaPobehailo/car-rental-services',
    livePage: 'https://olenapobehailo.github.io/car-rental-services',
    technology: ['React', 'Redux', 'JavaScript'],
    description:
      "The website serves as a comprehensive car rental platform where users can easily select their preferred vehicle. The platform offers advanced filtering options, allowing users to refine their choices based on various criteria such as brand, price, and mileage. This helps users quickly find the car that best suits their needs and preferences. \n\n Additionally, the website includes a feature for curating a personalized list of favorite models, enabling users to save and compare different options before making a decision. The platform's adaptive design ensures a seamless user experience across desktop, tablet, and mobile devices, making it convenient for users to access the service from any device.",
  },

  {
    id: 9,
    projectName: 'Pixabay Image Search App',
    about:
      'The Pixabay Image Search App is an application that searches for images. Users enter a search query, and the app displays relevant images.',
    image: '/images/search-images.jpg',
    type: 'Individual project',
    repo: 'https://github.com/OlenaPobehailo/search-images',
    livePage: 'https://olenapobehailo.github.io/search-images/',
    technology: ['JavaScript', 'TypeScript', 'HTML', 'SCSS'],
    description:
      "The The Pixabay Image Search App is a dynamic web application designed to help users find and explore high-quality free images available on Pixabay. With a simple and intuitive interface, users can enter a search query to find images that match their interests. The application utilizes the Pixabay API to fetch and display relevant images based on the user's input. \n\n Key features of the app include real-time search functionality, where users receive instant image results as they type, and pagination to navigate through multiple pages of search results. Each image result is presented with essential details such as the image title, tags, and download options, making it easy for users to find exactly what they need.",
  },
  {
    id: 10,
    projectName: 'Movie Search App',
    about:
      'The TMDB Movie Search App is a web tool using the TMDB API, enabling users to find information about movies, actors, and reviews on The Movie Database platform.',
    image: '/images/search-movies.jpg',
    type: 'Individual project',
    repo: 'https://github.com/OlenaPobehailo/search-movies-react-app',
    livePage: 'https://olenapobehailo.github.io/search-movies-react-app/',
    technology: ['JavaScript', 'React', 'Redux', 'Styled components'],
    description:
      'The TMDB Movie Search App is a powerful web tool that leverages the TMDB API to provide users with comprehensive information about movies, actors, and reviews available on The Movie Database platform. With a user-friendly interface, the app allows users to search for their favorite movies or actors and instantly retrieve detailed information. \n\n  Users can enter movie titles, actor names, or keywords to find relevant information quickly. Each movie search result includes detailed information such as the synopsis, release date, genre, ratings, and cast. Access to user reviews and ratings for movies, helping users make informed viewing decisions. ',
  },

  {
    id: 11,
    projectName: 'PhoneBook',
    about:
      'React Application for Contacts Management is a frontend solution for organizing contacts and handling user authentication.',
    image: '/images/phonebook.jpg',
    type: 'Individual project',
    repo: 'https://github.com/OlenaPobehailo/phonebook-react-ts',
    livePage: 'https://olenapobehailo.github.io/phonebook-react-ts',
    technology: ['TypeScript', 'React', 'Redux', 'Styled components'],
    description:
      'This is a React application designed for managing contacts and user interactions. \n\n It enables users to handle contacts efficiently. Additionally, the application supports user authentication, allowing new users to register securely and log in to access personalized features. \n\n Technologies utilized include React.js for frontend development and Redux for state management within the React application. \n\n The application supports two languages: English and Ukrainian.',
  },
  {
    id: 12,
    projectName: 'Contacts REST API',
    about:
      'API for managing contacts. It includes endpoints for CRUD operations on contacts, user authentication using JWT.',
    image: '/images/contacts-rest-api.jpg',
    type: 'Individual project',
    repo: 'https://github.com/OlenaPobehailo/contacts-REST-API',
    livePage: 'https://contacts-rest-api-siob.onrender.com/api-docs/',
    technology: ['TypeScript', 'Node.js', 'MongoDB', 'Express.js'],
    description:
      'The API is designed to manage contacts, offering a range of endpoints for creating, reading, updating, and deleting contacts. It also provides user authentication through JSON Web Tokens (JWT), allowing users to register, log in, and log out securely. \n\n Additionally, the API includes features for managing user avatars, verifying users via email, and resending email verification for account security.',
  },
  {
    id: 13,
    projectName: 'LearnLingo',
    about:
      'An app for an online language teaching company. Users filter teachers by language, level, rates, and add favorites. Firebase handles auth.',
    image: '/images/LearnLingo.jpg',
    type: 'Individual project',
    repo: 'https://github.com/OlenaPobehailo/LearnLingo',
    livePage: 'https://learn-lingo-kappa.vercel.app/',
    technology: ['React', 'Firebase', 'Styled components'],
    description:
      'The application is tailored for a company providing online language teacher services.\n\n  Users can easily filter teachers based on language, knowledge levels, and rates, and then add their preferred teachers to their favorites list. Firebase takes care of user authentication, ensuring secure access to the platform. React Router handles navigation.',
  },
];
