const tagsEn = [];
const tagsPl = [];

const tagPl = (tag) => {
  let index = tagsPl.indexOf(tag);
  if (index != -1) return index;
  tagsPl.push(tag);
  return tagsPl.indexOf(tag);
};
const tagEn = (tag) => {
  let index = tagsEn.indexOf(tag);
  if (index != -1) return index;
  tagsEn.push(tag);
  return tagsEn.indexOf(tag);
};

const dataPl = [
  {
    name: "3D Homepage",
    description:
      "Aplikacja webowa tworząca stronę startową w postaci grywalnego modelu 3D.",
    link: "http://bergsoft.pl/projects/homepage",
    tags: [
      tagPl("Javascript"),
      tagPl("ReactJS"),
      tagPl("3D"),
      tagPl("ThreeJS"),
    ],
  },
  {
    name: "TapetyCytaty.pl",
    description:
      "Aplikacja webowa mająca na celu udostępnianie obrazów z podpisami w formie cytatów.",
    link: "https://github.com/maciejbaranowski/wallpapers-frontend",
    tags: [
      tagPl("Javascript"),
      tagPl("ReactJS"),
      tagPl("PHP"),
      tagPl("HTML5"),
      tagPl("CSS3"),
      tagPl("Bootstrap3"),
    ],
  },
  {
    name: "Generator obrazów z podpisami",
    description:
      "Skrypt w języku Python, który posłużył do masowego generowania obrazów z cytatami, jako content aplikacji webowej.\
    Wykorzystano wbudowane pakiety do przetwarzania obrazów i obsługi baz danych SQLite",
    link: "http://tapetycytaty.pl",
    tags: [tagPl("Python")],
  },
  {
    name: "Kalkulator B2B",
    description:
      "Kalkulator umożliwiający obliczenie kosztów i opodatkowania dla programistów pracujących w ramach tzw. umowy B2B",
    link: "https://github.com/maciejbaranowski/b2b_calculator",
    tags: [
      tagPl("Javascript"),
      tagPl("ReactJS"),
      tagPl("PHP"),
      tagPl("HTML5"),
      tagPl("CSS3"),
      tagPl("Material UI"),
    ],
  },
  {
    name: "Pixels - strona-wizytówka",
    description:
      "Prosta strona-wizytówka dla firmy Pixels A.M.G. z nietypowym układem w formie pływających okręgów",
    link: "http://bergsoft.pl/projects/pixels",
    tags: [tagPl("Javascript"), tagPl("HTML5"), tagPl("CSS3")],
  },
  {
    name: "Osobista strona-wizytówka",
    description:
      "Prosta strona typu SPA z wyglądem opartym o framework bootstrap",
    link: "https://maciej-baranowski.herokuapp.com/",
    tags: [
      tagPl("Javascript"),
      tagPl("HTML5"),
      tagPl("CSS3"),
      tagPl("Bootstrap3"),
    ],
  },
  {
    name: "Galeria zdjęć oparta o Flickr API",
    description:
      "Aplikacja webowa umożliwiająca wizualizację zdjęć w formie porozrzucanych fotografii z podpisami.\
      Jako źródło zdjęć zostało użyte publiczne API serwisu Flickr",
    link: "http://bergsoft.pl/projects/thailand",
    tags: [tagPl("Javascript"), tagPl("HTML5"), tagPl("CSS3")],
  },
  {
    name: "Algorytmy detekcji i śledzenia twarzy (praca inżynierska)",
    description:
      "Implementacja i analiza algorytmów detekcji twarzy metodą dopasowywania wzorców falek Haara",
    link: "http://bergsoft.pl/projects/praca_inzynierska.pdf",
    tags: [tagPl("Machine Learning"), tagPl("C++"), tagPl("Akademickie")],
  },
  {
    name: "Algorytmy rozpoznawania ręcznych tekstów strukturyzowanych (praca magisterska)",
    description:
      "Implementacja i analiza metod rozpoznawania ręcznie pisanych liter, oparte o metody klasfikacji sieciami neuronowymi i SVM",
    link: "http://bergsoft.pl/projects/praca_magisterska.pdf",
    tags: [tagPl("Machine Learning"), tagPl("Matlab"), tagPl("Akademickie")],
  },
  {
    name: "Organizer osobisty",
    description:
      "Organizer osobisty wykonany jako projekt na studiach, z wykorzystaniem PHP i MySql",
    link: "http://bergsoft.pl/projects/organizer_demo",
    tags: [tagPl("PHP"), tagPl("Akademickie")],
  },
  {
    name: "Strona firmy bergsoft",
    description: "Strona na której właśnie jesteś",
    link: "http://bergsoft.pl",
    tags: [
      tagPl("ReactJS"),
      tagPl("Javascript"),
      tagPl("HTML5"),
      tagPl("CSS3"),
    ],
  },
];

const dataEn = [
  {
    name: "3D Homepage",
    description: "Web application serving as gameable 3D scene hub.",
    link: "http://bergsoft.pl/projects/homepage",
    tags: [
      tagEn("Javascript"),
      tagEn("ReactJS"),
      tagEn("3D"),
      tagEn("ThreeJS"),
    ],
  },
  {
    name: "TapetyCytaty.pl",
    description:
      "Web application for displaying a huge database of quote-images (Content in polish version only).",
    link: "https://github.com/maciejbaranowski/wallpapers-frontend",
    tags: [
      tagEn("Javascript"),
      tagEn("ReactJS"),
      tagEn("PHP"),
      tagEn("HTML5"),
      tagEn("CSS3"),
      tagEn("Bootstrap3"),
    ],
  },
  {
    name: "Image with caption generatr",
    description:
      "Python Script to generate content for web application (see link below - content in polish version only).",
    link: "http://tapetycytaty.pl",
    tags: [tagEn("Python")],
  },
  {
    name: "B2B Calculator",
    description:
      "Tax and costs calculator for self-employed software developers in Poland (content in polish version only)",
    link: "https://github.com/maciejbaranowski/b2b_calculator",
    tags: [
      tagEn("Javascript"),
      tagEn("ReactJS"),
      tagEn("PHP"),
      tagEn("HTML5"),
      tagEn("CSS3"),
      tagEn("Material UI"),
    ],
  },
  {
    name: "Pixels - landing page",
    description:
      "Simple landing page for Pixels A.M.G. company with innovative circle-floating layout (content in polish version only)",
    link: "http://bergsoft.pl/projects/pixels",
    tags: [tagEn("Javascript"), tagEn("HTML5"), tagEn("CSS3")],
  },
  {
    name: "Personal website",
    description: "Simple personal website built on bootstrap framework",
    link: "https://maciej-baranowski.herokuapp.com/",
    tags: [
      tagEn("Javascript"),
      tagEn("HTML5"),
      tagEn("CSS3"),
      tagEn("Bootstrap3"),
    ],
  },
  {
    name: "Flickr API-based photo gallery",
    description:
      "Web application to display set of photos with descriptions - utilizes Flickr API as a source of data",
    link: "http://bergsoft.pl/projects/thailand",
    tags: [tagEn("Javascript"), tagEn("HTML5"), tagEn("CSS3")],
  },
  {
    name: "Face detection and tracking algorithms (Engineer's degree thesis)",
    description: "Polish version only available",
    link: "http://bergsoft.pl/projects/praca_inzynierska.pdf",
    tags: [tagEn("Machine Learning"), tagEn("C++"), tagEn("Academic")],
  },
  {
    name: "Recognition of structurized handwritten texts (Master's degree thesis)",
    description: "Polish version only available",
    link: "http://bergsoft.pl/projects/praca_magisterska.pdf",
    tags: [tagEn("Machine Learning"), tagEn("Matlab"), tagEn("Academic")],
  },
  {
    name: "Personal organiser",
    description: "Polish version only available",
    link: "http://bergsoft.pl/projects/organizer_demo",
    tags: [tagEn("PHP"), tagEn("Academic")],
  },
  {
    name: "Bergsoft company page",
    description: "The very website you are seeing right now",
    link: "http://bergsoft.pl",
    tags: [
      tagEn("ReactJS"),
      tagEn("Javascript"),
      tagEn("HTML5"),
      tagEn("CSS3"),
    ],
  },
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
      about: "O mnie",
      projects: "Projekty",
      contact: "Kontakt",
      cv: "CV",
      private: "Prywatne",
      accessRestricted: "Brak dostępu",
      description: [
        "Jestem programistą z Wrocławia, w ramach firmy Bergsoft zajmuję się: ",
        <ul>
          <li key={0}> Rozwijaniem oprogramowania C++</li>
          <li key={1}> Tworzenie aplikacji internetowych</li>
          <li key={2}> Consultingiem IT </li>
          <li key={3}> Zarządzaniem systemami IT</li>
        </ul>,
      ],
    };
  };

  static getCv = () => {
    return [
      {
        text: "Doświadczenie",
        icon: "icon-briefcase",
        descriptions: [
          [
            "BergSoft Maciej Baranowski",
            "Programista - konsultant",
            "Listopad 2017 - dziś",
          ],
          ["Qiagen", "C++ Software developer", "Wrzesień 2016 - Listopad 2017"],
          [
            "Nokia Networks",
            "Software developer",
            "Październik 2014 - Wrzesień 2016",
          ],
          [
            "Nokia Solutions and Networks",
            "Software developer",
            "Czerwiec 2013 - Wrzesień 2013",
          ],
        ],
      },
      {
        text: "Edukacja",
        icon: "icon-file-text-alt",
        descriptions: [
          [
            "Informatyka studia magisterskie",
            "Politechnika Wrocławska",
            "2015 - 2016 (ukończone z oceną bardzo dobrą)",
          ],
          [
            "Automatyka i Robotyka studia inżynierskie",
            "Politechnika Wrocławska",
            "2011 - 2015 (ukończone z wyróżnieniem)",
          ],
        ],
      },
      {
        text: "Języki",
        icon: "icon-flag",
        descriptions: [
          ["Angielski", "Zaawansowany (certyfikat poziom C1)", ""],
          ["Niemiecki", "Podstawowy", ""],
        ],
      },
    ];
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
      cv: "CV",
      private: "Private",
      accessRestricted: "No Access",
      description: [
        "I am a programmer located in Wroclaw, Poland. I offer services of:",
        <ul>
          <li key={0}> C++ Software development</li>
          <li key={1}> Web applications development</li>
          <li key={2}> IT Consulting </li>
          <li key={3}> IT systems maintenance</li>
        </ul>,
      ],
    };
  };

  static getCv = () => {
    return [
      {
        text: "Experience",
        descriptions: [
          [
            "BergSoft Maciej Baranowski",
            "Software development Consultant",
            "November 2017 - Ongoing",
          ],
          [
            "Qiagen",
            "C++ Software developer",
            "September 2016 - November 2017",
          ],
          [
            "Nokia Networks",
            "Software developer",
            "October 2014 - September 2016",
          ],
          [
            "Nokia Solutions and Networks",
            "Software developer",
            "June 2013 - September 2013",
          ],
        ],
      },
      {
        text: "Education",
        descriptions: [
          ["Computer Science (MSc)", "Wroclaw Univ. of Tech.", "2015 - 2016"],
          [
            "Control Engineering and Robotics (Eng)",
            "Wroclaw Univ. of Tech.",
            "2011 - 2015 (Finished with excellent grade)",
          ],
        ],
      },
      {
        text: "Languages",
        descriptions: [
          ["Polish", "Native", ""],
          ["English", "Advanced (C1 Level certificate)", ""],
          ["German", "Basic", ""],
        ],
      },
    ];
  };
}

export default class DataProvider {
  static isEn = false;
  static getTags = () => {
    if (DataProvider.isEn) {
      return DataProviderEn.getTags();
    } else {
      return DataProviderPl.getTags();
    }
  };

  static getProjects = () => {
    if (DataProvider.isEn) {
      return DataProviderEn.getProjects();
    } else {
      return DataProviderPl.getProjects();
    }
  };

  static getTranslations = () => {
    if (DataProvider.isEn) {
      return DataProviderEn.getTranslations();
    } else {
      return DataProviderPl.getTranslations();
    }
  };
  static getCv = () => {
    if (DataProvider.isEn) {
      return DataProviderEn.getCv();
    } else {
      return DataProviderPl.getCv();
    }
  };
}
