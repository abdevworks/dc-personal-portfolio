export const portfolioContent = [
  {
    id: 1,
    projectSubtitle: "Projekt Linkedin Clone",
    projectTitle: "Linkedin Clone",
    description: {
      short:`
      Strona Linkedin Clone, jak sam tytuł sugeruje, została stworzona na podstawie oryginalnego portalu Linkedin. 
      Celem wykonanego projektu było zapoznanie się z nowymi technologiami, bibliotekami oraz narzędziami, 
      które w sposób praktyczny pozwoliłyby na rozwinięcie moich umiejętności związanych z tworzeniem stron internetowych.`,
      full:`
      Strona <b>Linkedin Clone</b>, jak sam tytuł sugeruje, została stworzona na podstawie oryginalnego portalu Linkedin. 
      Celem wykonanego projektu było zapoznanie się z nowymi technologiami, bibliotekami oraz narzędziami, 
      które w sposób praktyczny pozwoliłyby na rozwinięcie moich umiejętności związanych z tworzeniem stron internetowych.<br/><br/> 

      Sam projekt został stworzony w oparciu o kurs autorstwa <a href="https://www.youtube.com/results?search_query=sonny+sangha"><b>Sonny Sangha</b></a> pod tytułem <b><i>“React JS Crash Course for Beginners”</i></b>. 
      Kurs ten został wybrany przeze mnie specjalnie ponieważ obejmował zagadnienia związane z biblioteką <b>React</b>
      oraz biblioteką <b>Redux</b> i platformą <b>Firebase</b> (z którymi wcześniej nie miałem do czynienia). <br/><br/> 

      Aplikacja Linkedin Clone składa się z dwóch części. Strony logowania, gdzie użytkownik może się zalogować, bądź utworzyć nowe konto, 
      jeżeli nie posiada jeszcze własnego konta oraz strony głównej, 
      którą użytkownik może zobaczyć po zalogowaniu się do portalu, pozwalającej na zobaczenie ogólnych informacji o użytkowniku oraz wysyłanie wiadomości.<br/><br/> 
      
      Jak zostało już to wcześniej wspomniane, niniejsza strona internetowa została wykonana z wykorzystaniem platformy Firebase. 
      Platforma ta pozwoliła na autoryzację użytkownika za pomocą zarejestrowanego adresu email, utworzenie bazy danych Firestore Database 
      przechowującej informację na temat wysłanych wiadomości oraz na Hosting samej aplikacji.<br/><br/> 

      Biblioteka Redux pozwoliła na scentralizowane zarządzanie stanem użytkownika. 
      Dzięki czemu uprościło to dostęp do informacji o nim oraz aktualizację strony w oparciu o niniejsze dane.<br/><br/> 

      Projekt Linkedin Clone  pozwolił mi na zdobycie praktycznego doświadczenia przy realizacji aplikacji napisanej z wykorzystaniem biblioteki React 
      składającej się nie tylko z fronen’u, ale również posiadającej własny backend.
      
      
      `,
    },
    image: {
      src: "images/linked-in-clone.png",
      alt: "featured project",
    },
    links: {
      website: "https://linkedin-clone-yt-54cdd.web.app/",
      design: "",
      github:
        "https://github.com/abdevworks/linkedin-clone-yt/tree/main/linkedin-clone-yt",
    },
    featured: true,
  },
  {
    id: 2,
    projectSubtitle: "Projekt Portfolio",
    projectTitle: "Abwebdev-portfolio",
    description: {
      short:
        `Celem projektu abwebdev-portfolio było zaprojektowanie oraz wykonanie strony internetowej portfolio umożliwiającej prezentację wykonanych projektów, 
        opis posiadanych umiejętności oraz pozwolenie na kontakt z osobami odwiedzającymi tę stronę.
        `,
      full: `
      Celem projektu <b>abwebdev-portfolio</b> było zaprojektowanie oraz wykonanie strony internetowej portfolio umożliwiającej prezentację wykonanych projektów, 
      opis posiadanych umiejętności oraz pozwolenie na kontakt z osobami odwiedzającymi tę stronę. Projekt ten również miał za zadanie dalsze rozwinięcie moich umiejętności związanych z <b>React</b>, 
      wprowadzenie do tworzenia <b>animowanych elementów</b> strony za pomocą <b>biblioteki Gsap</b>, wykorzystanie <b>styled-components</b> do stylizacji samej strony oraz zapoznanie się z projektowaniem stron w aplikacji <b>Figma</b>. <br /><br />

      Oryginalna wersja projektu została wykonana na podstawie kursu autorstwa <a href="https://www.youtube.com/c/DesignCourse"><b>Gary Saymon’a</b></a> (DesignCourse) pod tytułem <b><i>“Designing & Building a Personal Portfolio from SCRATCH!”</i></b>. 
      Kurs ten składał się z części poświęconej na design strony w aplikacji Adobe XD, a następnie jej implementację z wykorzystaniem JavaScript, CSS oraz biblioteki gsap. <br /><br />

      Projekt ten następnie został przeze mnie rozbudowany - zarówno jego design jak i sposób w jaki został zaimplementowany. Sam design, został wykonany w aplikacji Figma. 
      Dodana została została wersja dla urządzeń mobilnych jak i strona prezentacji dla wybranego projektu. Projekt został przebudowany tak, aby wykorzystywał bibliotekę React. 
      Do samej stylizacji zamiast czystego CSS zastosowane zostały styled-components. Animacja elementów strony wykorzystująca bibliotekę Gsap została również uaktualniona tak, 
      aby poprawnie działać we współpracy z biblioteką React. <br /><br />
      
      Projekt abwebdev-portfolio pozwolił mi na praktyczne poznanie w jaki sposób są tworzone projekty stron internetowych w programie Figma. 
      Jego realizacja rozwinęła moje umiejętności związane z React, tworzeniem animacji z wykorzystaniem biblioteki Gsap oraz biblioteki styled-components do stylizacji stron internetowych.
      `,
    },
    image: {
      src: "images/abwebdev-portfolio.png",
      alt: "portfolio-project",
    },
    links: {
      website: "https://abwebdev-portfolio.web.app/",
      design:
        "https://www.figma.com/file/FUoFHw5EoNdavc7s2AmOVF/Portfolio-Project?node-id=2%3A2",
      github:
        "https://github.com/abdevworks/dc-personal-portfolio/tree/main/dc-personal-portfolio",
    },
    featured: false,
  },
];

export const skillContent = [
  {
    image: "images/dashicons_html.svg",
    alt: "html icon",
    title: "html",
    description: "Znajomość języka HTML oraz arkuszy stylów CSS.",
  },
  {
    image: "images/uil_java-script.svg",
    alt: "java script icon",
    title: "java script",
    description:
      "Znajomość języka skryptowego JavaScript poparta przykładowymi projektami.",
  },
  {
    image: "images/akar-icons_react-fill.svg",
    alt: "react icon",
    title: "react",
    description:
      "Znajomość technologii React oraz innych bibliotek z nią powiązanych jak np. styled-components.",
  },
];

export function getProject(id) {
  return portfolioContent.find((project) => project.id === id);
}
