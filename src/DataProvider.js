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
    name: "Projekt 1...",
    description: "Opis projektu...",
    link: "http://127.0.0.1",
    tags: [tag("Javascript"), tag("Machine Learning")]
  },
  {
    name: "Inny projekt",
    description: "Opis projektu...",
    tags: [tag("C++"), tag("Python")]
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
