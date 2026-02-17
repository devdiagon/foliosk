import type { IconType } from "react-icons";
import { FaJava, FaAngular, FaDocker, FaReact, FaPython } from "react-icons/fa";
import { IoIosCube } from "react-icons/io";
import { 
  SiFirebase,
  SiGooglemaps,
  SiModrinth,
  SiMongodb,
  SiOpenstreetmap,
  SiQgis,
  SiSpring,
  SiSqlite,
  SiStreamlit,
  SiTypescript
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandKotlin } from "react-icons/tb";
import { FaDartLang, FaFlutter } from "react-icons/fa6";
import { IoLogoElectron } from "react-icons/io5";

export interface Project {
  name: string;
  description: string;
  image?: string | null;
  technologies: {
    label: string;
    icon: IconType;
  }[];
  repository: string | null;
  url: {
    label: string;
    icon: IconType;
    link: string;
  } | null;
}

export const projects: Project[] = [
  {
    name: "Technical Enchant+",
    description: "It's a datapack that adds a new custom enchantment ecosystem to Minecraft. These enchantments enhance gameplay by introducing new mechanics, configurations & external integration via addons or complements.",
    image: "assets/img/projects/teplus_banner.jpg",
    technologies: [
      {
        label: "mcfunction",
        icon: IoIosCube,
      }
    ],
    repository: "https://github.com/Frektip/Technical-Enchant-Renewed",
    url: {
      label: "Modrinth",
      icon: SiModrinth,
      link: "https://modrinth.com/datapack/technical-enchant+-renewed",
    }
  },
  {
    name: "Organivent",
    description: "Desktop app to help managing musical events, including staff, invoices, schedules, and equipment.",
    image: "assets/img/projects/organivent_icon.jpeg",
    technologies: [
      {
        label: "Java",
        icon: FaJava,
      },
      {
        label: "MongoDB",
        icon: SiMongodb,
      }
    ],
    repository: "https://github.com/devdiagon/OOPSW14575-BIT_CODERZ",
    url: null,
  },
  {
    name: "Packlead",
    description: "Realtime tracking mobile app. Allows to manage orders and track the current location of dispatchers using a map.",
    image: "assets/img/projects/packlead_icon.png",
    technologies: [
      {
        label: "Flutter",
        icon: FaFlutter,
      },
      {
        label: "Firebase",
        icon: SiFirebase ,
      },
      {
        label: "Google Maps",
        icon: SiGooglemaps,
      }
    ],
    repository: "https://github.com/Saint-Roche-Microsystems/packlead",
    url: null,
  },
  {
    name: "Spring API",
    description: "Simple web application for managing products and their categories using microservices architecture. It can be deployed using Docker containers.",
    technologies: [
      {
        label: "Angular",
        icon: FaAngular,
      },
      {
        label: "Spring",
        icon: SiSpring,
      },
      {
        label: "MySQL",
        icon: GrMysql,
      },
      {
        label: "Docker",
        icon: FaDocker,
      }
    ],
    repository: "https://github.com/devdiagon/Spring-API",
    url: null,
  },
  {
    name: "GeonsitQ",
    description: "Urban recommendation system based on geospatial and Open Street Map data analisis for the city of Quito. It organizes its codebase with various design patterns.",
    technologies: [
      {
        label: "Python",
        icon: FaPython,
      },
      {
        label: "Streamlit",
        icon: SiStreamlit,
      },
      {
        label: "Shapefiles",
        icon: SiQgis, 
      },
      {
        label: "OSM",
        icon: SiOpenstreetmap,
      },
    ],
    repository: "https://github.com/devdiagon/GeonsitQ",
    url: null,
  },
  {
    name: "MultiSites",
    description: "Multiplatform application based on DevExpert tutorial. This app displays the 15 most relevant tourist sites based on the device's current location using Open Trip Map API.",
    technologies: [
      {
        label: "Kotlin",
        icon: TbBrandKotlin,
      },
      {
        label: "SQLite",
        icon: SiSqlite,
      }
    ],
    repository: "https://github.com/devdiagon/MultiSites",
    url: null,
  },
  {
    name: "Filmsit",
    description: "Mobile app that allows to discover and search for different movies using the ThemovieDB API. Includes features such as searching, filtering and pagination.",
    technologies: [
      {
        label: "Dart",
        icon: FaDartLang,
      }
    ],
    repository: "https://github.com/Saint-Roche-Microsystems/Filmsit",
    url: null,
  },
  {
    name: "Ya Void",
    description: "[In progress] Desktop app to help manage the vehicle routes of Rosaprima farms.",
    technologies: [
      {
        label: "React",
        icon: FaReact,
      },
      {
        label: "TypeScript",
        icon: SiTypescript,
      },
      {
        label: "Electron",
        icon: IoLogoElectron,
      },
      {
        label: "SQLite",
        icon: SiSqlite,
      }
    ],
    repository: "https://github.com/devdiagon/ya-void",
    url: null,
  },
];