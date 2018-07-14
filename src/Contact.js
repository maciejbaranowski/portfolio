import React from "react";
import DataProvider from "./DataProvider";

export const Contact = () => (
  <div>
    <h2>{DataProvider.getTranslations().contact}</h2>
    <span>
      📧 bergsoft[at]maciej-baranowski.pl
    </span>
  </div>
);
