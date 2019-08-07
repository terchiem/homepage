import React from 'react';
import Project from './Project';

import projects from '../project-list';

class Programming extends React.Component {

  render() {
    const projectList = projects.map((project) => {
      return <Project data={project}></Project>
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