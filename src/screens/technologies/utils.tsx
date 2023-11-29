import { BiLogoPostgresql } from "react-icons/bi";
import { FaCss3, FaHtml5, FaNodeJs, FaReact, FaSass } from "react-icons/fa";
import {
  SiApollographql,
  SiExpress,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";

export const skillset = [
  {
    name: "Main Skills",
    items: [
      {
        label: "Javascipt",
        icon: <SiJavascript color="#E9D54B" className="text-[48px]" />,
      },
      {
        label: "TypeScript",
        icon: <SiTypescript color="#2F75C0" className="text-[48px]" />,
      },
      {
        label: "React",
        icon: <FaReact color="#5ED4F4" className="text-[48px]" />,
      },
      {
        label: "Node.js",
        icon: <FaNodeJs color="#86cf35" className="text-[48px]" />,
      },
    ],
  },
  {
    name: "Front-End",
    items: [
      {
        label: "HTML5",
        icon: <FaHtml5 color="#DE4B25" className="text-[48px]" />,
      },
      {
        label: "CSS3",
        icon: <FaCss3 color="#2873BC" className="text-[48px]" />,
      },
      {
        label: "SASS/SCSS",
        icon: <FaSass color="#CE6C9C" className="text-[48px]" />,
      },
      {
        label: "Tailwind",
        icon: <SiTailwindcss color="#3FBDCC" className="text-[48px]" />,
      },

      {
        label: "Redux",
        icon: <SiRedux color="#7B51BE" className="text-[48px]" />,
      },

      {
        label: "Apollo",
        icon: <SiApollographql color="#E63CAD" className="text-[48px]" />,
      },
    ],
  },
  {
    name: "Back-End",
    items: [
      {
        label: "Express",
        icon: <SiExpress color="#818283" className="text-[48px]" />,
      },
      {
        label: "Graphql",
        icon: <SiGraphql color="#E63CAD" className="text-[48px]" />,
      },
      {
        label: "Mongo",
        icon: <SiMongodb color="#2c913f" className="text-[48px]" />,
      },
      {
        label: "Postgresql",
        icon: <BiLogoPostgresql color="#3A6596" className="text-[48px]" />,
      },
    ],
  },
];
