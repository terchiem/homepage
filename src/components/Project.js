import React from 'react';

function Project(props) {
  const { name, description, tools, image, git, link } = props.data;
  const toolList = tools.map((tool) => <div>{tool}</div>);

  return (
    <li className="project">
      <img src={image} alt={name} />
      <div className="project-description">
        <div className="project-name">
          {name}
        </div>
        <p>
          {description}
        </p>
        <a href={link}>Live</a>
        <a href={git}>Github</a>
      </div>
      <div className="project-tools">
        {toolList}
      </div>
    </li>
  )
}

export default Project;