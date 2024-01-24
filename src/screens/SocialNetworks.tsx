import {socialNetworks} from './contact';

export const SocialNetworks = () => {
  return (
    <div className="flex h-content min-w-[48px] justify-center bg-bgColor">
      <div className="absolute bottom-16 flex flex-col gap-4">{socialNetworks(32).map((item) => item)}</div>
    </div>
  );
};

export default SocialNetworks;
