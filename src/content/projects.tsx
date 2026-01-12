import type { IconType } from "react-icons";
import { FaJava, FaAngular, FaDocker, FaReact } from "react-icons/fa";
import { IoIosCube } from "react-icons/io";
import { SiModrinth, SiMongodb,SiSpring, SiSqlite, SiTypescript } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { TbBrandKotlin } from "react-icons/tb";
import { FaDartLang } from "react-icons/fa6";
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
    image: "https://static.planetminecraft.com/files/image/minecraft/data-pack/2021/151/15124496-portada_l.jpg",
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
    image: "https://github.com/devdiagon/OOPSW14575-BIT_CODERZ/blob/main/06-Code/Organivent/src/main/resources/images/organivent_icon.jpeg?raw=true",
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