import React from "react";

const tagsEn = [];
const tagsPl = [];

const tagPl = tag => {
  let index = tagsPl.indexOf(tag);
  if (index != -1) return index;
  tagsPl.push(tag);
  return tagsPl.indexOf(tag);
};
const tagEn = tag => {
  let index = tagsEn.indexOf(tag);
  if (index != -1) return index;
  tagsEn.push(tag);
  return tagsEn.indexOf(tag);
};

const dataPl = [
  {
    name: "TapetyCytaty.pl",
    description: "Aplikacja webowa mająca na celu udostępnianie obrazów z podpisami w formie cytatów.",
    link: "https://github.com/maciejbaranowski/wallpapers-frontend",
    tags: [tagPl("Javascript"), tagPl("ReactJS"), tagPl("PHP"), tagPl("HTML5"), tagPl("CSS3"), tagPl("Bootstrap3")]
  },
  {
    name: "Generator obrazów z podpisami",
    description:
      "Skrypt w języku Python, który posłużył do masowego generowania obrazów z cytatami, jako content aplikacji webowej.\
    Wykorzystano wbudowane pakiety do przetwarzania obrazów i obsługi baz danych SQLite",
    link: "http://tapetycytaty.pl",
    tags: [tagPl("Python")]
  },
  {
    name: "Kalkulator B2B",
    description:
      "Kalkulator umożliwiający obliczenie kosztów i opodatkowania dla programistów pracujących w ramach tzw. umowy B2B",
    link: "https://github.com/maciejbaranowski/b2b_calculator",
    tags: [tagPl("Javascript"), tagPl("ReactJS"), tagPl("PHP"), tagPl("HTML5"), tagPl("CSS3"), tagPl("Material UI")]
  },
  {
    name: "Pixels - strona-wizytówka",
    description: "Prosta strona-wizytówka dla firmy Pixels A.M.G. z nietypowym układem w formie pływających okręgów",
    link: "http://bergsoft.pl/projects/pixels",
    tags: [tagPl("Javascript"), tagPl("HTML5"), tagPl("CSS3")]
  },
  {
    name: "Osobista strona-wizytówka",
    description: "Prosta strona typu SPA z wyglądem opartym o framework bootstrap",
    link: "http://maciej-baranowski.pl",
    tags: [tagPl("Javascript"), tagPl("HTML5"), tagPl("CSS3"), tagPl("Bootstrap3")]
  },
  {
    name: "Galeria zdjęć oparta o Flickr API",
    description:
      "Aplikacja webowa umożliwiająca wizualizację zdjęć w formie porozrzucanych fotografii z podpisami.\
      Jako źródło zdjęć zostało użyte publiczne API serwisu Flickr",
    link: "http://bergsoft.pl/projects/thailand",
    tags: [tagPl("Javascript"), tagPl("HTML5"), tagPl("CSS3")]
  },
  {
    name: "Algorytmy detekcji i śledzenia twarzy (praca inżynierska)",
    description: "Implementacja i analiza algorytmów detekcji twarzy metodą dopasowywania wzorców falek Haara",
    link: "http://bergsoft.pl/projects/praca_inzynierska.pdf",
    tags: [tagPl("Machine Learning"), tagPl("C++"), tagPl("Akademickie (niekomercyjne)")]
  },
  {
    name: "Algorytmy rozpoznawania ręcznych tekstów strukturyzowanych (praca magisterska)",
    description:
      "Implementacja i analiza metod rozpoznawania ręcznie pisanych liter, oparte o metody klasfikacji sieciami neuronowymi i SVM",
    link: "http://bergsoft.pl/projects/praca_magisterska.pdf",
    tags: [tagPl("Machine Learning"), tagPl("Matlab"), tagPl("Akademickie (niekomercyjne)")]
  },
  {
    name: "Organizer osobisty",
    description: "Organizer osobisty wykonany jako projekt na studiach, z wykorzystaniem PHP i MySql",
    link: "http://bergsoft.pl/projects/organizer_demo",
    tags: [tagPl("PHP"), tagPl("Akademickie (niekomercyjne)")]
  },
  {
    name: "Strona firmy bergsoft",
    description: "Strona na której właśnie jesteś",
    link: "http://bergsoft.pl",
    tags: [tagPl("ReactJS"), tagPl("Javascript"), tagPl("HTML5"), tagPl("CSS3")]
  }
];

const dataEn = [
  {
    name: "TapetyCytaty.pl",
    description: "Web application for displaying a huge database of quote-images (Content in polish version only).",
    link: "https://github.com/maciejbaranowski/wallpapers-frontend",
    tags: [tagEn("Javascript"), tagEn("ReactJS"), tagEn("PHP"), tagEn("HTML5"), tagEn("CSS3"), tagEn("Bootstrap3")]
  },
  {
    name: "Image with caption generatr",
    description:
      "Python Script to generate content for web application (see link below - content in polish version only).",
    link: "http://tapetycytaty.pl",
    tags: [tagEn("Python")]
  },
  {
    name: "B2B Calculator",
    description:
      "Tax and costs calculator for self-employed software developers in Poland (content in polish version only)",
    link: "https://github.com/maciejbaranowski/b2b_calculator",
    tags: [tagEn("Javascript"), tagEn("ReactJS"), tagEn("PHP"), tagEn("HTML5"), tagEn("CSS3"), tagEn("Material UI")]
  },
  {
    name: "Pixels - landing page",
    description:
      "Simple landing page for Pixels A.M.G. company with innovative circle-floating layout (content in polish version only)",
    link: "http://bergsoft.pl/projects/pixels",
    tags: [tagEn("Javascript"), tagEn("HTML5"), tagEn("CSS3")]
  },
  {
    name: "Personal website",
    description: "Simple personal website built on bootstrap framework",
    link: "http://maciej-baranowski.pl",
    tags: [tagEn("Javascript"), tagEn("HTML5"), tagEn("CSS3"), tagEn("Bootstrap3")]
  },
  {
    name: "Flickr API-based photo gallery",
    description: "Web application to display set of photos with descriptions - utilizes Flickr API as a source of data",
    link: "http://bergsoft.pl/projects/thailand",
    tags: [tagEn("Javascript"), tagEn("HTML5"), tagEn("CSS3")]
  },
  {
    name: "Face detection and tracking algorithms (Engineer's degree thesis)",
    description: "Polish version only available",
    link: "http://bergsoft.pl/projects/praca_inzynierska.pdf",
    tags: [tagEn("Machine Learning"), tagEn("C++"), tagEn("Academic (non-commercial)")]
  },
  {
    name: "Recognition of structurized handwritten texts (Master's degree thesis)",
    description: "Polish version only available",
    link: "http://bergsoft.pl/projects/praca_magisterska.pdf",
    tags: [tagEn("Machine Learning"), tagEn("Matlab"), tagEn("Academic (non-commercial)")]
  },
  {
    name: "Personal organiser",
    description: "Polish version only available",
    link: "http://bergsoft.pl/projects/organizer_demo",
    tags: [tagEn("PHP"), tagEn("Academic (non-commercial)")]
  },
  {
    name: "Bergsoft company page",
    description: "The very website you are seeing right now",
    link: "http://bergsoft.pl",
    tags: [tagEn("ReactJS"), tagEn("Javascript"), tagEn("HTML5"), tagEn("CSS3")]
  }
];

class DataProviderPl {
  static getTags = () => {
    return tagsPl;
  };

  static getProjects = () => {
    return dataPl;
  };

  static getTranslations = () => {
    return {
      companyName: "BergSoft Maciej Baranowski",
      about: "O firmie",
      projects: "Projekty",
      contact: "Kontakt",
      description: [
        "Bergsoft - usługi z zakresu:",
        <ul>
          <li> Rozwijanie oprogramowania C++</li>
          <li> Tworzenie aplikacji internetowych</li>
          <li> Consulting IT </li>
          <li> Zarządzanie systemami IT</li>
        </ul>
      ]
    };
  };
}

class DataProviderEn {
  static getTags = () => {
    return tagsEn;
  };

  static getProjects = () => {
    return dataEn;
  };

  static getTranslations = () => {
    return {
      companyName: "BergSoft Maciej Baranowski",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      description: [
        "Bergsoft - services:",
        <ul>
          <li> C++ Software development</li>
          <li> Web applications development</li>
          <li> IT Consulting </li>
          <li> IT systems maintenance</li>
        </ul>
      ]
    };
  };
}

export default class DataProvider {
  static isEn = () => {
    return window.location.hash == "#en";
  };
  static isPl = () => {
    return !DataProvider.isEn();
  };
  static getTags = () => {
    if (DataProvider.isEn()) {
      return DataProviderEn.getTags();
    } else {
      return DataProviderPl.getTags();
    }
  };

  static getProjects = () => {
    if (DataProvider.isEn()) {
      return DataProviderEn.getProjects();
    } else {
      return DataProviderPl.getProjects();
    }
  };

  static getTranslations = () => {
    if (DataProvider.isEn()) {
      return DataProviderEn.getTranslations();
    } else {
      return DataProviderPl.getTranslations();
    }
  };
}
