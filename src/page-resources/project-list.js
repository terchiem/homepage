const projects = [
  {
    name: "Where in the World?",
    description: "A React Single Page Application that utilizes the REST Countries API to display a list of countries and some facts about them. Users can click on a country to learn more about it.",
    details: [
      "Features light/dark mode theme switching",
      "Implemented performant live search and filtering of countries with Reselect",
      "Use of Redux to store data from API and Redux Saga for asynchronous actions"
    ],
    tools: ["React", "Redux", "CSS", "Javascript", "Front End"],
    image: "country",
    git: "https://github.com/terchiem/rest-countries-api-react",
    link: "https://rest-countries-api-react.vercel.app/",
    codepen: ""
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
    tools: ["React", "Express", "PostgreSQL", "Full Stack"],
    image: "jobly",
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
    tools: ["PHP", "MySQL", "CSS", "Javascript", "Full Stack"],
    image: "yt-archive",
    git: "https://github.com/terchiem/yt-archive",
    link: "https://yt-archive.herokuapp.com/",
    codepen: ""
  },
  {
    name: "Single Element CSS Loaders",
    description: "A variety of loaders created with a single class on an element with a loader div wrapper. The animations are done entirely in CSS and utilizes the before and after pseudo classes to create additional animatable objects.",
    details: [],
    tools: ["Sass", "HTML", "Javascript"],
    image: "cssloader",
    git: "",
    link: "",
    codepen: "https://codepen.io/terchiem/pen/bGNdGaJ"
  },
  {
    name: "Portfolio Home Page",
    description: "I designed this home page to be a single page application using React. My goal was to have a page with a simple design and making its content easy to navigate.",
    details: [],
    tools: ["React", "Javascript", "CSS", "HTML", "Front End"],
    image: "homepage",
    git: "https://github.com/terchiem/homepage/",
    link: "",
    codepen: ""
  },
]

export default projects;