import React from 'react';

function Project(props) {
  const { name, description, details, tools, image, git, link, codepen } = props.data;
  const toolList = tools.map((tool, i) => <div key={i}>{tool}</div>);
  const detailList = details.map((detail, i) => <li key={i}>{detail}</li>);

  const src = require(`../assets/projects/${image}.jpg`);

  return (
    <li className="project">
      <img src={src} alt={name} />
      <div className="project-description">
        <div className="project-name">
          {name}
        </div>

        <p>
          {description}
        </p>

        <ul>
          {detailList}
        </ul>

        <div className="project-tools">
          {toolList}
        </div>

        {link && <a href={link}>Live</a>}
        {git && <a href={git}>Github</a>}
        {codepen && <a href={codepen}>CodePen</a>}
      </div>

    </li>
  )
}

export default Project;