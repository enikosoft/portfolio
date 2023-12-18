import {BiLogoPostgresql} from 'react-icons/bi';
import {FaNodeJs, FaReact} from 'react-icons/fa';
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

import cfLofo from 'assets/images/cfLogo.png';

export interface Project {
  name: string;
  description: string;
  img: string;
  stack: JSX.Element[];
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
    img: cfLofo,
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
    img: cfLofo,
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
    img: cfLofo,
    stack: [
      <SiJavascript key="js" color="#E9D54B" className="text-[28px]" />,
      <FaReact key="react" color="#5ED4F4" className="text-[28px]" />,
      <FaNodeJs key="node" color="#86cf35" className="text-[28px]" />,
      <SiMongodb key="mongodb" color="#2c913f" className="text-[28px]" />,
    ],
  },
];
