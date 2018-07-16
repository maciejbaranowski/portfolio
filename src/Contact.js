import React from "react";
import DataProvider from "./DataProvider";

export const Contact = () => (
  <div>
    <h2>{DataProvider.getTranslations().contact}</h2>
    <div className="contact-items">
      <span className="mini-panel">📧 E-mail: bergsoft[at]maciej-baranowski.pl</span>
      <span className="mini-panel">LinkedIn: <a href="https://www.linkedin.com/in/maciej-baranowski-a7918779">Link</a> </span>
      <span className="mini-panel">Facebook: <a href="https://www.facebook.com/maciej.baranowski.37">Link</a> </span>
      <span className="mini-panel">StackOverflow:<br/>
    <a href="http://stackoverflow.com/users/1846995/maciej-baranowski">
      <img src="http://stackoverflow.com/users/flair/1846995.png?theme=clean"/>
    </a></span>
    </div>
  </div>
);
