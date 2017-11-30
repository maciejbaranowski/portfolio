import React from "react";
import DataProvider from "./DataProvider";

export const Contact = () => (
  <div>
    <h2>{DataProvider.getTranslations().contact}</h2>
    <span>
      🌐 <a href="http://www.maciej-baranowski.pl">www.maciej-baranowski.pl</a>
    </span>
    <br />
    <span>
      📧 <a href="mailto:bergsoft@maciej-baranowski.pl">bergsoft@maciej-baranowski.pl</a>
    </span>
  </div>
);
