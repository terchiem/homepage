import React from 'react';
import Project from './Project';

import projects from '../page-resources/project-list';

class Programming extends React.Component {

  render() {
    const projectList = projects.map((project, i) => {
      return <Project data={project} key={i}></Project>
    })

    return (
      <div className="page">
        <ul className="projects">
          {projectList}
        </ul>
      </div>
    )
  }
}

export default Programming;