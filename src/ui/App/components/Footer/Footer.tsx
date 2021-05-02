import React from 'react';
import {ExternalLink} from '../ExternalLink';
import {WrapperLayout} from '../WrapperLayout';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="Footer">
      <WrapperLayout>
        <ul>
          <li>
            <ExternalLink
              className="tw2"
              href="https://twitter.com/natassh"
              text="Twitter"
            />
          </li>
          <li>
            <ExternalLink
              className="lk"
              href="https://www.linkedin.com/in/natacha-ivannikova-261478113/"
              text="Linkedin"
            />
          </li>
          <li>
            <ExternalLink
              className="gh"
              href="https://github.com/natassh"
              text="GitHub"
            />
          </li>
          <li>
            <ExternalLink
              className="myweb"
              href="https://www.natachaivannikova.com/"
              text="Personal web2"
            />
          </li>
        </ul>
      </WrapperLayout>
    </footer>
  );
}

export {Footer};

