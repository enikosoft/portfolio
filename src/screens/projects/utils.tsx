import {BiLogoPostgresql} from 'react-icons/bi';
import {FaNodeJs, FaReact} from 'react-icons/fa';
import {SiTailwindcss} from 'react-icons/si';

import {
  SiAmazonaws,
  SiApollographql,
  SiGraphql,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiPrisma,
  SiTypescript,
} from 'react-icons/si';

import btfLofo from 'assets/images/btf-logo.png';
import cfLofo from 'assets/images/cfLogo.png';
import s2eLofo from 'assets/images/s2e-logo.webp';
import viktreLofo from 'assets/images/viktre-logo.jpeg';
import weatherAppLofo from 'assets/images/weatherApp.jpeg';
import porfolioLogo from '../../../public/logo.svg';

export interface Project {
  name: string;
  description: string;
  img: string;
  stack: JSX.Element[];
  url?: string;
  git?: string;
}

export const comerciaProjects: Project[] = [
  {
    name: 'Community Funded',
    description: `Team size: 10+. Platform streamlines fundraising and community management for education and healthcare sectors. Create branded,
    mobile-optimized pages effortlessly and manage initiatives seamlessly. The platform integrates directly with
    your brand, website, and existing payment processor. Ideal for inspiring donors and building engaged
    communities.`,
    img: cfLofo,
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <FaNodeJs key="node" color="#86cf35" className="text-[28px]" />,
      <SiApollographql key="apollo" color="#E63CAD" className="text-[28px]" />,
      <SiGraphql key="graphql" color="#E63CAD" className="text-[28px]" />,
      <BiLogoPostgresql key="psql" color="#3A6596" className="text-[28px]" />,
    ],
  },
  {
    name: 'BTF',
    description: `Team size: 5. Platform that supports athletes in their development on and off the field by giving them the tools to understand who they are and share
    the context to their performance and their growth as a human being with the people most important to them on their journey.`,
    img: btfLofo,
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <FaReact key="react-native" color="#5ED4F4" className="text-[28px]" />,
      <FaNodeJs key="node" color="#86cf35" className="text-[28px]" />,
      <SiMysql key="mysql" color="#3A6596" className="text-[28px]" />,
      <SiPrisma key="prizma" color="#3294c9" className="text-[28px]" />,
      <SiAmazonaws key="serverless" color="#F1941D" className="text-[28px]" />,
    ],
  },
  {
    name: 'Say2eat',
    description: `Team size: 7. Say2eat helps restaurant chains increase direct
    online sales, collect valuable consumer insights
    and data, manage the customer relationship and
    maximize customer loyalty. By enabling. personalized and fully automated conversations
    with customers at scale, ordering food from your
    favorite restaurants has become as frictionless
    as messaging a friend. Say2eat provides a single
    and seamless solution for all voice and message
    applications (e.g Facebook Messenger, iMessage,
    Amazon Echo, Google Home, etc.).
    `,
    img: s2eLofo,
    stack: [
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <FaNodeJs key="node" color="#86cf35" className="text-[28px]" />,
      <SiNestjs key="nestjs" color="#DA224C" className="text-[28px]" />,
      <SiMongodb key="mongodb" color="#2c913f" className="text-[28px]" />,
    ],
  },
  {
    name: 'Viktre Solution',
    description: `Team size: 2. The main goal of the project is to allow a
        user to make donations on the following social projects. My responsibilities were creating new functionality, creating new site versions (their
      maintaining), bugs fixing, working with the Facebook application, add new requests to DB and fixing on the server side.`,
    img: viktreLofo,
    stack: [
      <SiJavascript key="js" color="#E9D54B" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <FaNodeJs key="node" color="#86cf35" className="text-[28px]" />,
      <SiMongodb key="mongodb" color="#2c913f" className="text-[28px]" />,
    ],
  },
];

export const customProjects: Project[] = [
  {
    name: 'My Portfolio',
    url: '',
    description: `Welcome to my portfolio! Explore my diverse range of projects,
      showcasing my expertise in building responsive and dynamic web applications.
      Dive into my code, discover my skills,
      and get in touch to discuss exciting opportunities. Let's bring ideas to life through technology!`,
    img: porfolioLogo,
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <SiTailwindcss key="tailwind color=" color="#3FBDCC" className="text-[28px]" />,
    ],
    git: 'https://github.com/enikosoft/portfolio',
  },
  {
    name: 'Weather React App',
    url: 'https://develop.d32z2z7ii5cmj4.amplifyapp.com/',
    description: `React/Typescript/StyledComponent/zustand. You can find weather and current location time for any cities, searched by Google Place Api.`,
    img: weatherAppLofo,
    stack: [
      <SiTypescript key="ts" color="#2F75C0" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
    ],
    git: 'https://github.com/enikosoft/weather-online-widget',
  },
];
