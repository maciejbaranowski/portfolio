const tags = [
  "Javascript",
  "Webdevelopment",
  "ReactJS",
  "HTML5",
  "CSS3",
  "Python",
  "Image Processing",
  "C++",
  "Machine Learning"
];

const tag = tag => {
  return tags.indexOf(tag);
};

const data = [
  {
    name: "TapetyCytaty.pl",
    description: "Opis projektu...",
    link: "http://google.com",
    tags: [tag("Javascript"), tag("Machine Learning")]
  },
  {
    name: "Inny projekt",
    description: "Opis projektu...",
    link: "http://google.com",
    tags: [tag("trololo"), tag("C++"), tag("Python")]
  }
];

export default class DataProvider {
  static getTags = () => {
    return tags;
  };

  static getProjects = () => {
    return data;
  };
}
