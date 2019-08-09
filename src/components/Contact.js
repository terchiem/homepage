import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <div className="contacts">
      <h3 className="contacts-header">CONTACTS</h3>
      <ul className="contacts-list">
        <li>
          <a href="mailto:terrychiem@gmail.com">
            <FontAwesomeIcon icon={faEnvelopeSquare} size="lg" />
          </a>
        </li>
        <li>
          <a href="https://www.linkedin.com/in/terrychiem">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </li>
        <li>
          <a href="https://github.com/terchiem/">
            <FontAwesomeIcon icon={faGithubSquare} size="lg" />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Contact;