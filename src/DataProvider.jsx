const dataPl = [
  {
    name: "3D Homepage",
    description:
      "Aplikacja webowa tworząca stronę startową w postaci grywalnego modelu 3D.",
    link: "http://bergsoft.pl/projects/homepage",
    tags: [
      "Javascript",
      "ReactJS",
      "3D",
      "ThreeJS",
    ],
  },
  {
    name: "TapetyCytaty.pl",
    description:
      "Aplikacja webowa mająca na celu udostępnianie obrazów z podpisami w formie cytatów.",
    link: "https://github.com/maciejbaranowski/wallpapers-frontend",
    tags: [
      "Javascript",
      "ReactJS",
      "PHP",
      "HTML5",
      "CSS3",
      "Bootstrap3",
    ],
  },
  {
    name: "Generator obrazów z podpisami",
    description:
      "Skrypt w języku Python, który posłużył do masowego generowania obrazów z cytatami, jako content aplikacji webowej.\
    Wykorzystano wbudowane pakiety do przetwarzania obrazów i obsługi baz danych SQLite",
    link: "http://tapetycytaty.pl",
    tags: ["Python"],
  },
  {
    name: "Kalkulator B2B",
    description:
      "Kalkulator umożliwiający obliczenie kosztów i opodatkowania dla programistów pracujących w ramach tzw. umowy B2B",
    link: "https://github.com/maciejbaranowski/b2b_calculator",
    tags: [
      "Javascript",
      "ReactJS",
      "PHP",
      "HTML5",
      "CSS3",
      "Material UI",
    ],
  },
  {
    name: "Pixels - strona-wizytówka",
    description:
      "Prosta strona-wizytówka dla firmy Pixels A.M.G. z nietypowym układem w formie pływających okręgów",
    link: "http://bergsoft.pl/projects/pixels",
    tags: ["Javascript", "HTML5", "CSS3"],
  },
  {
    name: "Osobista strona-wizytówka",
    description:
      "Prosta strona typu SPA z wyglądem opartym o framework bootstrap",
    link: "https://maciej-baranowski.herokuapp.com/",
    tags: [
      "Javascript",
      "HTML5",
      "CSS3",
      "Bootstrap3",
    ],
  },
  {
    name: "Galeria zdjęć oparta o Flickr API",
    description:
      "Aplikacja webowa umożliwiająca wizualizację zdjęć w formie porozrzucanych fotografii z podpisami.\
      Jako źródło zdjęć zostało użyte publiczne API serwisu Flickr",
    link: "http://bergsoft.pl/projects/thailand",
    tags: ["Javascript", "HTML5", "CSS3"],
  },
  {
    name: "Algorytmy detekcji i śledzenia twarzy (praca inżynierska)",
    description:
      "Implementacja i analiza algorytmów detekcji twarzy metodą dopasowywania wzorców falek Haara",
    link: "http://bergsoft.pl/projects/praca_inzynierska.pdf",
    tags: ["Machine Learning", "C++", "Akademickie"],
  },
  {
    name: "Algorytmy rozpoznawania ręcznych tekstów strukturyzowanych (praca magisterska)",
    description:
      "Implementacja i analiza metod rozpoznawania ręcznie pisanych liter, oparte o metody klasfikacji sieciami neuronowymi i SVM",
    link: "http://bergsoft.pl/projects/praca_magisterska.pdf",
    tags: ["Machine Learning", "Matlab", "Akademickie"],
  },
  {
    name: "Organizer osobisty",
    description:
      "Organizer osobisty wykonany jako projekt na studiach, z wykorzystaniem PHP i MySql",
    link: "http://bergsoft.pl/projects/organizer_demo",
    tags: ["PHP", "Akademickie"],
  },
  {
    name: "Strona firmy bergsoft",
    description: "Strona na której właśnie jesteś",
    link: "http://bergsoft.pl",
    tags: [
      "ReactJS",
      "Javascript",
      "HTML5",
      "CSS3",
    ],
  },
];

const dataEn = [
  {
    name: "3D Homepage",
    description: "Web application serving as gameable 3D scene hub.",
    link: "http://bergsoft.pl/projects/homepage",
    tags: [
      "Javascript",
      "ReactJS",
      "3D",
      "ThreeJS",
    ],
  },
  {
    name: "TapetyCytaty.pl",
    description:
      "Web application for displaying a huge database of quote-images (Content in polish version only).",
    link: "https://github.com/maciejbaranowski/wallpapers-frontend",
    tags: [
      "Javascript",
      "ReactJS",
      "PHP",
      "HTML5",
      "CSS3",
      "Bootstrap3",
    ],
  },
  {
    name: "Image with caption generatr",
    description:
      "Python Script to generate content for web application (see link below - content in polish version only).",
    link: "http://tapetycytaty.pl",
    tags: ["Python"],
  },
  {
    name: "B2B Calculator",
    description:
      "Tax and costs calculator for self-employed software developers in Poland (content in polish version only)",
    link: "https://github.com/maciejbaranowski/b2b_calculator",
    tags: [
      "Javascript",
      "ReactJS",
      "PHP",
      "HTML5",
      "CSS3",
      "Material UI",
    ],
  },
  {
    name: "Pixels - landing page",
    description:
      "Simple landing page for Pixels A.M.G. company with innovative circle-floating layout (content in polish version only)",
    link: "http://bergsoft.pl/projects/pixels",
    tags: ["Javascript", "HTML5", "CSS3"],
  },
  {
    name: "Personal website",
    description: "Simple personal website built on bootstrap framework",
    link: "https://maciej-baranowski.herokuapp.com/",
    tags: [
      "Javascript",
      "HTML5",
      "CSS3",
      "Bootstrap3",
    ],
  },
  {
    name: "Flickr API-based photo gallery",
    description:
      "Web application to display set of photos with descriptions - utilizes Flickr API as a source of data",
    link: "http://bergsoft.pl/projects/thailand",
    tags: ["Javascript", "HTML5", "CSS3"],
  },
  {
    name: "Face detection and tracking algorithms (Engineer's degree thesis)",
    description: "Polish version only available",
    link: "http://bergsoft.pl/projects/praca_inzynierska.pdf",
    tags: ["Machine Learning", "C++", "Academic"],
  },
  {
    name: "Recognition of structurized handwritten texts (Master's degree thesis)",
    description: "Polish version only available",
    link: "http://bergsoft.pl/projects/praca_magisterska.pdf",
    tags: ["Machine Learning", "Matlab", "Academic"],
  },
  {
    name: "Personal organiser",
    description: "Polish version only available",
    link: "http://bergsoft.pl/projects/organizer_demo",
    tags: ["PHP", "Academic"],
  },
  {
    name: "Bergsoft company page",
    description: "The very website you are seeing right now",
    link: "http://bergsoft.pl",
    tags: [
      "ReactJS",
      "Javascript",
      "HTML5",
      "CSS3",
    ],
  },
];

class DataProviderPl {
  static getProjects = () => {
    return dataPl;
  };

  static getTranslations = () => {
    return {
      about: "O mnie",
      projects: "Projekty",
      contact: "Kontakt",
      cv: "CV",
      private: "Prywatne",
      accessRestricted: "Brak dostępu",
      homepage: {
        name: "Maciej Baranowski",
        title: "Software Developer",
        description: "Jestem programistą z Wrocławia, od ponad 10 lat komercyjnie tworzę rozwiązania software'owe. Obecnie specjalizuję się w technologiach webowych na każdym poziomie:"
      }
    };
  };

  static getCv = () => {
    return [
      {
        text: "Doświadczenie",
        icon: "icon-briefcase",
        descriptions: [
          {
            title: "AWS Fullstack developer",
            description: "Dla HSBC",
            timespan: "Listopad 2022 - Obecnie",
            icons: ["react", "typescript", "amazonwebservices", "terraform", "python"],
          },
          {
            title: "Fullstack developer",
            description: "Dla Safeguard Global",
            timespan: "Grudzień 2020 - Listopad 2022",
            icons: ["react", "typescript", "python", "amazonwebservices"],
          },
          {
            title: "Fullstack developer with Machine learning",
            description: "Dla Credit Suisse",
            timespan: "Lipiec 2018 - Grudzień 2020",
            icons: ["python", "react", "javascript"],
          },
          {
            title: "Software developer",
            description: "Dla Nokia Networks",
            timespan: "Listopad 2017 - Lipiec 2018",
            icons: ["cplusplus", "python"],
          },
          {
            title: "C++ Software developer",
            description: "Dla Qiagen",
            timespan: "Wrzesień 2016 - Listopad 2017",
            icons: ["cplusplus", "python", "javascript"],
          },
          {
            title: "Software developer",
            description: "Dla Nokia Networks",
            timespan: "Październik 2014 - Wrzesień 2016",
            icons: ["cplusplus", "python"]
          },
          {
            title: "Software developer",
            description: "Dla Nokia Solutions and Networks",
            timespan: "Czerwiec 2013 - Wrzesień 2013",
            icons: ["cplusplus", "python"]
          },
        ],
      },
      {
        text: "Edukacja",
        icon: "icon-file-text-alt",
        descriptions: [
          {
            title: "Informatyka",
            description: "Politechnika Wrocławska studia magisterskie (ukończone z oceną bardzo dobrą)",
            timespan: "2015 - 2016"
          },
          {
            title: "Automatyka i Robotyka",
            description: "Politechnika Wrocławska - studia inżynierskie (ukończone z wyróżnieniem)",
            timespan: "2011 - 2015"
          },
        ],
      },
    ];
  };
}

class DataProviderEn {
  static getProjects = () => {
    return dataEn;
  };

  static getTranslations = () => {
    return {
      about: "About",
      projects: "Projects",
      contact: "Contact",
      cv: "CV",
      private: "Private",
      accessRestricted: "No Access",
      homepage: {
        name: "Maciej Baranowski",
        title: "Software Developer",
        description: "I am a software developer located in Wroclaw, Poland with 10+ years of experience. These days I specialize in fullstack web development, my core technology stack:"
      },
    };
  };

  static getCv = () => {
    return [
      {
        text: "Experience",
        descriptions: [
          {
            title: "AWS Fullstack developer",
            description: "Company: HSBC",
            timespan: "November 2022 - Ongoing",
            icons: ["react", "typescript", "amazonwebservices", "terraform", "python"],
          },
          {
            title: "Fullstack developer",
            description: "Company: Safeguard Global",
            timespan: "December 2020 - November 2022",
            icons: ["react", "typescript", "python", "amazonwebservices"],
          },
          {
            title: "Fullstack developer with Machine learning",
            description: "Company: Credit Suisse",
            timespan: "July 2018 - December 2020",
            icons: ["python", "react", "javascript"],
          },
          {
            title: "Software developer",
            description: "Company: Nokia Networks",
            timespan: "November 2017 - July 2018",
            icons: ["cplusplus", "python"],
          },
          {
            title: "C++ Software developer",
            description: "Company: Qiagen",
            timespan: "September 2016 - November 2017",
            icons: ["cplusplus", "python", "javascript"],
          },
          {
            title: "Software developer",
            description: "Company: Nokia Networks",
            timespan: "October 2014 - September 2016",
            icons: ["cplusplus", "python"]
          },
          {
            title: "Software developer",
            description: "Company: Nokia Solutions and Networks",
            timespan: "June 2013 - September 2013",
            icons: ["cplusplus", "python"]
          },
        ],
      },
      {
        text: "Education",
        descriptions: [
          {
            title: "Computer Science (MSc)",
            description: "Wroclaw Univ. of Tech.",
            timespan: "2015 - 2016"
          },
          {
            title: "Control Engineering and Robotics (Eng) (Finished with excellent grade)",
            description: "Wroclaw Univ. of Tech.",
            timespan: "2011 - 2015"
          },
        ],
      },
    ];
  };
}

export default class DataProvider {
  static isEn = false;

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
