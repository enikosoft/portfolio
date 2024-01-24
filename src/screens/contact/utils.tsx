import {BiLogoGmail} from 'react-icons/bi';
import {FaGithub, FaInstagramSquare, FaLinkedin, FaTelegram} from 'react-icons/fa';

const handleOpenSocialNetwork = (url: string) => () => {
  window.open(url, '_blank');
};

const handleOpenGmail = () => {
  window.location.href = `mailto:${'evgennikolenko.ua@gmail.com'}`;
};

export const socialNetworks = (size: number = 54, isFooter = false) => [
  <button
    title="linkedin"
    key="linkedin"
    onClick={handleOpenSocialNetwork('https://www.linkedin.com/in/eugene-nikolenko-056822151/')}
  >
    <FaLinkedin
      size={size}
      className={`m-auto text-[${size}px] ${
        isFooter ? 'text-tabBarActiveTextColor' : 'text-themePrimaryColor'
      } hover:cursor-pointer`}
    />
  </button>,
  <button title="github" key="github" onClick={handleOpenSocialNetwork('https://github.com/enikosoft/')}>
    <FaGithub
      size={size}
      className={`m-auto text-[${size}px] ${
        isFooter ? 'text-tabBarActiveTextColor' : 'text-themePrimaryColor'
      } hover:cursor-pointer`}
    />
  </button>,
  <button title="telegram" key="telegram" onClick={handleOpenSocialNetwork('https://t.me/evgennikolenko')}>
    <FaTelegram
      size={size}
      key="telegram"
      className={`m-auto text-[${size}px] ${
        isFooter ? 'text-tabBarActiveTextColor' : 'text-themePrimaryColor'
      } hover:cursor-pointer`}
    />
  </button>,
  <button
    title="instagram"
    key="instagram"
    onClick={handleOpenSocialNetwork('https://www.instagram.com/eugennikolenko/?hl=es')}
  >
    <FaInstagramSquare
      size={size}
      className={`m-auto text-[${size}px] ${
        isFooter ? 'text-tabBarActiveTextColor' : 'text-themePrimaryColor'
      } hover:cursor-pointer`}
    />
  </button>,
  <button title="gmail" key="gmail" onClick={handleOpenGmail}>
    <BiLogoGmail
      size={size}
      className={`m-auto text-[${size}px] ${
        isFooter ? 'text-tabBarActiveTextColor' : 'text-themePrimaryColor'
      } hover:cursor-pointer`}
    />
  </button>,
];
