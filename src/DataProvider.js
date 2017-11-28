const tags = [];

const tag = tag => {
  let index = tags.indexOf(tag);
  if (index != -1) return index;
  tags.push(tag);
  return tags.indexOf(tag);
};

const data = [
  {
    name: "TapetyCytaty.pl",
    description: "Aplikacja webowa mająca na celu udostępnianie obrazów z podpisami w formie cytatów.",
    link: "https://github.com/maciejbaranowski/wallpapers-frontend",
    tags: [tag("Javascript"), tag("ReactJS"), tag("PHP"), tag("HTML5"), tag("CSS3"), tag("Bootstrap3")]
  },
  {
    name: "Generator obrazów z podpisami",
    description:
      "Skrypt w języku Python, który posłużył do masowego generowania obrazów z cytatami, jako content aplikacji webowej.\
    Wykorzystano wbudowane pakiety do przetwarzania obrazów i obsługi baz danych SQLite",
    link: "http://tapetycytaty.pl",
    tags: [tag("Python")]
  },
  {
    name: "Kalkulator B2B",
    description:
      "Kalkulator umożliwiający obliczenie kosztów i opodatkowania dla programistów pracujących w ramach tzw. umowy B2B",
    link: "https://github.com/maciejbaranowski/b2b_calculator",
    tags: [tag("Javascript"), tag("ReactJS"), tag("PHP"), tag("HTML5"), tag("CSS3"), tag("Material UI")]
  },
  {
    name: "Pixels - strona-wizytówka",
    description: "Prosta strona-wizytówka dla firmy Pixels A.M.G. z nietypowym układem w formie pływających okręgów",
    link: "http://bergsoft.pl/pixels",
    tags: [tag("Javascript"), tag("HTML5"), tag("CSS3")]
  },
  {
    name: "Osobista strona-wizytówka",
    description: "Prosta strona typu SPA z wyglądem opartym o framework bootstrap",
    link: "http://maciej-baranowski.pl",
    tags: [tag("Javascript"), tag("HTML5"), tag("CSS3"), tag("Bootstrap3")]
  },
  {
    name: "Galeria zdjęć oparta o Flickr API",
    description:
      "Aplikacja webowa umożliwiająca wizualizację zdjęć w formie porozrzucanych fotografii z podpisami.\
      Jako źródło zdjęć zostało użyte publiczne API serwisu Flickr",
    link: "http://bergsoft.pl/thailand",
    tags: [tag("Javascript"), tag("HTML5"), tag("CSS3")]
  },
  {
    name: "Algorytmy detekcji i śledzenia twarzy (praca inżynierska)",
    description: "Implementacja i analiza algorytmów detekcji twarzy metodą dopasowywania wzorców falek Haara",
    link: "http://bergsoft.pl/projekty/praca_inzynierska.pdf",
    tags: [tag("Machine Learning"), tag("C++"), tag("Szkoleniowe (niekomercyjne)")]
  },
  {
    name: "Algorytmy rozpoznawania ręcznych tekstów strukturyzowanych (praca magisterska)",
    description:
      "Implementacja i analiza metod rozpoznawania ręcznie pisanych liter, oparte o metody klasfikacji sieciami neuronowymi i SVM",
    link: "http://bergsoft.pl/projekty/praca_magisterska.pdf",
    tags: [tag("Machine Learning"), tag("Matlab"), tag("Szkoleniowe (niekomercyjne)")]
  },
  {
    name: "Organizer osobisty",
    description: "Organizer osobisty wykonany jako projekt na studiach, z wykorzystaniem PHP i MySql",
    link: "http://bergsoft.pl/projekty/organizer_demo",
    tags: [tag("PHP"), tag("Szkoleniowe (niekomercyjne)")]
  },
  {
    name: "Strona firmy bergsoft",
    description: "Strona na której właśnie jesteś",
    link: "http://bergsoft.pl",
    tags: [tag("ReactJS"), tag("Javascript"), tag("HTML5"), tag("CSS3")]
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
