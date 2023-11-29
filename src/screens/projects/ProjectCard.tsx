import img from 'assets/images/cf.png';
import {BiLogoPostgresql} from 'react-icons/bi';

import {FaNodeJs, FaReact} from 'react-icons/fa';
import {SiApollographql, SiGraphql, SiTypescript} from 'react-icons/si';
export const ProjectCard = () => {
  return (
    <div className="mt-4 w-[98%] hover:cursor-pointer rounded-lg border-1 border-themePrimaryColor shadow-technologiesCard pb-4">
      <div className="h-[300px] flex justify-center bg-slate-200">
        <img src={img} className="m-auto w-full h-auto px-10" />
      </div>
      <div className="p-4 pb-0 flex flex-row gap-2 md-6 items-center">
        <span className="text-themePrimaryColor text-lg">Stack:</span>
        <SiTypescript color="#2F75C0" className="text-[32px]" />
        <FaReact color="#5ED4F4" className="text-[32px]" />
        <FaNodeJs color="#86cf35" className="text-[32px]" />
        <SiApollographql color="#E63CAD" className="text-[32px]" />
        <SiGraphql color="#E63CAD" className="text-[32px]" />
        <BiLogoPostgresql color="#3A6596" className="text-[32px]" />
      </div>
      <p className="text-primaryColor text-base p-4">
        Platform streamlines fundraising and community management for education and healthcare sectors. Create branded,
        mobile-optimized pages effortlessly and manage initiatives seamlessly. The platform integrates directly with
        your brand, website, and existing payment processor. Ideal for inspiring donors and building engaged
        communities.
      </p>
    </div>
  );
};
