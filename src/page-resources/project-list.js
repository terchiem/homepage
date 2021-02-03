const projects = [
  {
    name: 'Smart Shopping List',
    description: 'A shopping list app that learns a user\'s buying habits over time and suggests items that are most likely needed to be bought on the next trip to the store.',
    details: [
      'Collaborated on a distributed team of 4 developers to build a Progressive Web App using React, Cloud Firestore and Agile methodologies',
      'Optimized the app for accessibility through user testing and audits',
      'Participated in pair and mob programming, weekly demos and retrospectives'
    ],
    tools: ['React', 'Javascript', 'CSS', 'Cloud Firestore'],
    image: 'shopping',
    git: 'https://github.com/the-collab-lab/tcl-12-smart-shopping-list',
    link: 'https://tcl-12-smart-shopping-list.netlify.app/',
    codepen: ''
  },
  {
    name: 'Movie Fan',
    description: 'A movie searching app that utilizes the Open Movie Database API and lets users vote for their favorite movies.',
    details: [
      'Single-page React client',
      'Express back end used to serve endpoints for the OMDB API and movie voting',
      'MongoDB used to store movie id\'s and vote counts'
    ],
    tools: ['React', 'Javascript', 'CSS', 'Node', 'Express', 'MongoDB'],
    image: 'moviefan',
    git: 'https://github.com/terchiem/movie-fan',
    link: 'https://movie-fan.netlify.app/',
    codepen: ''
  },
  {
    name: "Where in the World?",
    description: "A React Single Page Application that utilizes the REST Countries API to display a list of countries and some facts about them. Users can click on a country to learn more about it.",
    details: [
      "Features light/dark mode theme switching",
      "Implemented performant live search and filtering of countries with Reselect",
      "Use of Redux to store data from API and Redux Saga for asynchronous actions"
    ],
    tools: ["React", "Redux", "CSS", "Javascript"],
    image: "world",
    git: "https://github.com/terchiem/rest-countries-api-react",
    link: "https://rest-countries-api-react.vercel.app/",
    codepen: ""
  },
  {
    name: 'Banana Doodle',
    description: 'A fun app that draws a random banana doodle from Google\'s Quick Draw dataset of 300,000+ drawings.',
    details: [],
    tools: ['HTML5 Canvas', 'Javascript', 'CSS', 'Flask'],
    image: 'banana',
    git: 'https://github.com/terchiem/banana-doodle',
    link: 'https://banana-doodle.vercel.app/',
    codepen: ''
  },
  {
    name: "Jobly",
    description: "A Full Stack application for job searching. Users can log in to browse and search for companies or jobs. It utilizes a React client and an Express server connected to a Postgres DB.",
    details: [
      "Front End done solo; Back End done with partner",
      "Protected user routes through authorization/authentication middleware on the server and JWTokens on the client",
      "Implemented live search feature using lodash to debounce AJAX calls",
      "Utilized REST API for standard CRUD functionality on the server side"
    ],
    tools: ["React", "Express", "PostgreSQL"],
    image: "job",
    git: "https://github.com/terchiem/react-jobly",
    link: "http://r15-jobly-frontend.herokuapp.com/",
    codepen: ""
  },
  {
    name: "YT Archive",
    description: "A Full Stack application that allows a user to search for videos published to YouTube in the platform's first year of release.",
    details: [
      "Solo project",
      "Searches are done through YouTube API calls and the results are then cached in a MySQL DB to help mitigate the API quota usage limit",
      "Implemented pagination of search results"
    ],
    tools: ["PHP", "MySQL", "CSS", "Javascript"],
    image: "archive",
    git: "https://github.com/terchiem/yt-archive",
    link: "https://yt-archive.herokuapp.com/",
    codepen: ""
  },
  {
    name: "Single Element CSS Loaders",
    description: "A variety of loaders created with a single class on an element with a loader div wrapper. The animations are done entirely in CSS and utilizes the before and after pseudo classes to create additional animatable objects.",
    details: [],
    tools: ["Sass", "HTML", "Javascript"],
    image: "loader",
    git: "",
    link: "",
    codepen: "https://codepen.io/terchiem/pen/bGNdGaJ"
  },
  {
    name: "Portfolio Home Page",
    description: "I designed this home page to be a single page application using React. My goal was to have a page with a simple design and making its content easy to navigate.",
    details: [],
    tools: ["React", "Javascript", "CSS", "HTML"],
    image: "portfolio",
    git: "https://github.com/terchiem/homepage/",
    link: "",
    codepen: ""
  },
]

export default projects;