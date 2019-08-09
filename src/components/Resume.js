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

  const skillItems = skillList.map((skill, i) => <li key={i}>{skill}</li>)

  return (
    <div className="page resume">
      <a href="https://drive.google.com/open?id=135kb6Y3Opm67rOjUC8ctwxktV6QlBhU9">
        <div className="download">
          Download PDF
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
        <div className="resume-other">
          <div>
            <h3>Skills</h3>
            <ul>
              {skillItems}
            </ul>
          </div>
          <div>
            <h3>Online Education</h3>
            <h5>The Odin Project</h5>
            <ul><li>Full Stack Ruby on Rails</li></ul>
            <h5>Free Code Camp</h5>
            <ul><li>Responsive Web Design, Javascript, Front End Libraries</li></ul>
          </div>
        </div>
        
      </section>
    </div>
  )
}

export default Resume;