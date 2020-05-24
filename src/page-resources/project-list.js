const projects = [
  {
    name: "Jobly",
    description: "A job searching app that I created while at Rithm School. Users can browse and search for companies or jobs. It utilizes a React Frontend and an Express Backend.",
    tools: ["React", "Express", "PostgreSQL", "Full Stack"],
    image: "jobly",
    git: "https://github.com/terchiem/react-jobly",
    link: "http://r15-jobly-frontend.herokuapp.com/",
    codepen: ""
  },
  {
    name: "Single Element CSS Loaders",
    description: "A variety of loaders created with a single class on an element with a loader div wrapper. The animations are done entirely in CSS and utilizes the before and after pseudo classes to create additional animatable objects.",
    tools: ["Sass", "HTML", "Javascript"],
    image: "cssloader",
    git: "",
    link: "",
    codepen: "https://codepen.io/terchiem/pen/bGNdGaJ"
  },
  {
    name: "YT Archive",
    description: "A project that I used to learn PHP, MySQL and practice full-stack development. This site allows a user to search for videos published to YouTube in 2005 using the YouTube Data API. There is a quota usage limit (10,000 units per day) that needs to be considered when a single search will use up around 100-110 units. To mitigate that, the site first searches its own database for videos and then turns to the API when there aren't enough results to display. The videos retrieved from the API are then saved to the database for future searches.",
    tools: ["PHP", "MySQL", "CSS", "Javascript", "Full Stack"],
    image: "yt-archive",
    git: "https://github.com/terchiem/yt-archive",
    link: "https://yt-archive.herokuapp.com/",
    codepen: ""
  },
  {
    name: "Portfolio Home Page",
    description: "I designed this home page to be a single page application using React. My goal was to have a page with a simple design and making its content easy to navigate.",
    tools: ["React", "Javascript", "CSS", "HTML", "Front End"],
    image: "homepage",
    git: "https://github.com/terchiem/homepage/",
    link: "http://terrychiem.com",
    codepen: ""
  },
  {
    name: "Weather App",
    description: "A weather app that I used as a chance to learn Vue. This app uses the OpenWeather API and fetches a 5 day forecast for a given location. This project allowed me to learn about asynchronous functions and promises. I also created the weather condition icons using an online SVG editing tool.",
    tools: ["Vue", "Javascript", "CSS", "HTML", "Front End"],
    image: "weatherapp",
    git: "https://github.com/terchiem/weather_app",
    link: "https://terchiem.github.io/weather_app/",
    codepen: ""
  },
  // {
  //   name: "Project/Task Tracker",
  //   description: "A to-do list app I made while learning to use React. It allows the user to create projects and fill them with to-do list items. I had previously made version of this app using pure Javascript and used that as a jumping off point to learn React. It made me see the light of shared states and letting React handle the DOM.",
  //   tools: ["React", "Javascript", "CSS", "HTML", "Front End"],
  //   image: "todoapp",
  //   git: "https://github.com/terchiem/todo_list_react",
  //   link: "https://terchiem.github.io/todo_list_react/",
  //   codepen: ""
  // },
  // {
  //   name: "Tic-Tac-Toe",
  //   description: "A game of Tic-Tac-Toe created with Javascript using modules and factories. The main goal of this project was to have as little global code as possible. This project definitely taught me the value of making code more modular.",
  //   tools: ["Javascript", "CSS", "HTML", "Front End"],
  //   image: "tictactoe",
  //   git: "https://github.com/terchiem/js_tictactoe",
  //   link: "https://terchiem.github.io/js_tictactoe/",
  //   codepen: ""
  // },
  // {
  //   name: "Pomodoro Clock",
  //   description: "A browser timer for utilizing the Pomodoro Technique. One of my earliest projects that taught me how to work with intervals in Javascript and how to create a timer that toggles between two values.",
  //   tools: ["Javascript", "CSS", "HTML", "Front End"],
  //   image: "pomodoro",
  //   git: "https://github.com/terchiem/pomodoro_clock",
  //   link: "https://terchiem.github.io/pomodoro_clock/",
  //   codepen: ""
  // },
]

export default projects;