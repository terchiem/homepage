import React from 'react';

import { workList, educationList, skillList } from '../page-resources/resume-list';

function Resume() {
  const workItems = workList.map((job, i) => {
    const tasks = job.description.map((task, i) => <li key={i}>{task}</li>);

    return (
      <div className="resume-item" key={i}>
        <h4>{job.role} — <span>{job.company}</span> ({job.date})</h4>
        <ul>
          {tasks}
        </ul>
      </div>
    )
  })

  const schoolItems = educationList.map((school, i) => (
    <div className="resume-item" key={i}>
      <h4><span>{school.name}</span> ({school.date})</h4>
      <ul><li>{school.description}</li></ul>
    </div>
  ))

  const skillItems = skillList.map((skill, i) => {
    return (
      <div className="resume-item" key={i}>
        <h4>{skill.category}</h4>
        <p>{skill.description}</p>
      </div>
    )
  });

  return (
    <div className="resume">
      <a href="https://drive.google.com/open?id=1_1cX7CPDvG34-GuEa3QYK-MHC04NzufH">
        <div className="download">
          Download Resume as PDF
        </div>
      </a>

      <section>
        <h3>Work Experience</h3>
        {workItems}
      </section>

      <section>
        <h3>Education</h3>
        {schoolItems}
      </section>

      <section>
        <div>
          <h3>Skills</h3>
          {skillItems}
        </div>
      </section>
    </div>
  )
}

export default Resume;