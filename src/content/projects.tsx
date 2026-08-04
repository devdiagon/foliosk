import type { IconType } from "react-icons";
import { FaJava, FaReact, FaPython } from "react-icons/fa";
import { IoIosCube } from "react-icons/io";
import { 
  SiBlender,
  SiFirebase,
  SiGooglemaps,
  SiModrinth,
  SiMongodb,
  SiOpenstreetmap,
  SiQgis,
  SiSqlite,
  SiStreamlit,
  SiTypescript
} from "react-icons/si";
import { TbBrandCSharp, TbBrandKotlin, TbInfoOctagon } from "react-icons/tb";
import { FaFlutter, FaUnity } from "react-icons/fa6";
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
    repository: "https://github.com/devdiagon/packlead",
    url: null,
  },
  {
    name: "Voy!",
    description: "Desktop app to help manage the vehicle routes of Rosaprima farms, generating reports for each trip.",
    image: "assets/img/projects/voy_icon.png",
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
  {
    name: "Yona-Biker",
    description: "Arcade delivery 3D videogame. For Windows with keyboard, gamepad and VR control support.",
    image: "assets/img/projects/yona-biker_icon.png",
    technologies: [
      {
        label: "Unity",
        icon: FaUnity,
      },
      {
        label: "C Sharp",
        icon: TbBrandCSharp,
      },
      {
        label: "Blender",
        icon: SiBlender,
      }
    ],
    repository: "https://github.com/devdiagon/yona-biker",
    url: {
      label: "Request DEMO",
      icon: TbInfoOctagon,
      link: "mailto:fredericktimo@gmail.com?subject=Request%20for%20Yona-Biker%20DEMO&body=Hello,%0A%0AI%20would%20like%20to%20request%20a%20DEMO%20of%20the%20Yona-Biker%20game.%0A%0AThank%20you.",
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
    name: "GeonsitQ",
    description: "Urban recommendation system based on geospatial and Open Street Map data analisis for the city of Quito. It organizes its codebase with various design patterns.",
    image: "assets/img/projects/geonsitq_icon.png",
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
        label: "Flutter",
        icon: FaFlutter,
      }
    ],
    repository: "https://github.com/Saint-Roche-Microsystems/Filmsit",
    url: null,
  },
];