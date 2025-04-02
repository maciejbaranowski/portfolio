import DataProvider from "./DataProvider";

import iconFacebook from "../assets/icon-facebook.svg";
import iconGithub from "../assets/icon-github.svg";
import iconLinkedin from "../assets/icon-linkedin.svg";
import iconStackoverflow from "../assets/icon-stackoverflow.svg";

export const Contact = () => (
  <div>
    <h2>{DataProvider.getTranslations().contact}</h2>
    <div className="contact-items">
      <span className="mini-panel">
        <img src={iconLinkedin} className="icon" /> LinkedIn:{" "}
        <a href="https://www.linkedin.com/in/maciej-baranowski-a7918779">
          Link
        </a>{" "}
      </span>
      <span className="mini-panel">
        <img src={iconFacebook} className="icon" /> Facebook:{" "}
        <a href="https://www.facebook.com/maciej.baranowski.37">Link</a>{" "}
      </span>
      <span className="mini-panel">
        <img src={iconGithub} className="icon" /> GitHub:{" "}
        <a href="https://github.com/maciejbaranowski">Link</a>{" "}
      </span>
      <span className="mini-panel">
        <img src={iconStackoverflow} className="icon" /> StackOverflow:
        <br />
        <a href="http://stackoverflow.com/users/1846995/maciej-baranowski">
          <img src="http://stackoverflow.com/users/flair/1846995.png?theme=clean" />
        </a>
      </span>
    </div>
  </div>
);
