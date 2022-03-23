export const portfolioContent = [
  {
    id: 1,
    projectSubtitle: "Featured Project",
    projectTitle: "Linkedin Clone",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor a elit velit. Vel posuere lorem neque velit auctor ut gravida tellus. Vel quam mauris elementum fermentum mattis ante.",
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
    projectSubtitle: "guitar app one",
    projectTitle: "Fretastic.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor a elit velit. Vel posuere lorem neque velit auctor ut gravida tellus. Vel quam mauris elementum fermentum mattis ante.",
    image: {
      src: "images/project-two.png",
      alt: "fretastic",
    },
    links: {
      website: "https://linkedin-clone-yt-54cdd.web.app/",
      design:
        "https://www.figma.com/file/FUoFHw5EoNdavc7s2AmOVF/Portfolio-Project?node-id=2%3A2",
      github:
        "https://github.com/abdevworks/linkedin-clone-yt/tree/main/linkedin-clone-yt",
    },
    featured: false,
  },
  {
    id: 3,
    projectSubtitle: "guitar app two",
    projectTitle: "Fretastic.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor a elit velit. Vel posuere lorem neque velit auctor ut gravida tellus. Vel quam mauris elementum fermentum mattis ante.",
    image: {
      src: "images/project-two.png",
      alt: "fretastic",
    },
    links: {
      website: "https://linkedin-clone-yt-54cdd.web.app/",
      design:
        "https://www.figma.com/file/FUoFHw5EoNdavc7s2AmOVF/Portfolio-Project?node-id=2%3A2",
      github:
        "https://github.com/abdevworks/linkedin-clone-yt/tree/main/linkedin-clone-yt",
    },
    featured: false,
  },
  {
    id: 4,
    projectSubtitle: "guitar app three",
    projectTitle: "Fretastic.com",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec tortor a elit velit. Vel posuere lorem neque velit auctor ut gravida tellus. Vel quam mauris elementum fermentum mattis ante.",
    image: {
      src: "images/project-two.png",
      alt: "fretastic",
    },
    links: {
      website: "https://linkedin-clone-yt-54cdd.web.app/",
      design:
        "https://www.figma.com/file/FUoFHw5EoNdavc7s2AmOVF/Portfolio-Project?node-id=2%3A2",
      github:
        "https://github.com/abdevworks/linkedin-clone-yt/tree/main/linkedin-clone-yt",
    },
    featured: false,
  },
];

export const skillContent = [
  {
    image: "images/dashicons_html.svg",
    alt: "html icon",
    title: "html",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem quis euismod lacus viverra.",
  },
  {
    image: "images/uil_java-script.svg",
    alt: "java script icon",
    title: "java script",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem quis euismod lacus viverra.",
  },
  {
    image: "images/akar-icons_react-fill.svg",
    alt: "react icon",
    title: "react",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sem quis euismod lacus viverra.",
  },
];

export function getProject(id) {
  return portfolioContent.find((project) => project.id === id);
}
