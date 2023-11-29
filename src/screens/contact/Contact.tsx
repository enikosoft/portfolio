import {useState} from 'react';
import {BiLogoGmail} from 'react-icons/bi';
import {FaGithub, FaInstagramSquare, FaLinkedin, FaTelegram} from 'react-icons/fa';
import TextareaAutosize from 'react-textarea-autosize';

export const Contact = () => {
  const [val, setVal] = useState('');

  const contacts = [
    {
      field: 'email',
      component: <input type="email" className="bg-transparent active:border-none focus-visible:outline-none pl-2" />,
    },
    {
      field: 'subject',
      component: <input className="bg-transparent active:border-none focus-visible:outline-none pl-2" />,
    },
    {
      field: 'message',
      component: (
        <div className="w-full">
          <TextareaAutosize
            minRows={3}
            className="text-primaryColor bg-transparent active:border-none focus-visible:outline-none pl-2 resize-none overflow-auto w-92"
            maxRows={6}
            value={val}
            onChange={(ev) => setVal(ev.target.value)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="flex justify-center items-center flex-col w-full">
      <div className="flex flex-row align-middle items-center pt-4">
        <span className="html-tag">{'<b>'} </span>
        <p className="px-2 font-bold text-primaryColor text-lg sm:text-2xl pb-2">
          Get in Touch
          <span className="text-lg sm:text-2xl text-themePrimaryColor"> - Contact Me</span>
        </p>
        <span className="html-tag">{'</b>'}</span>
      </div>
      <div className="flex flex-col lg:flex-row pt-8 lg:pt-32">
        <div>
          <div className="">
            <div className="flex flex-col items-center">
              <h3 className="font-bold text-primaryColor">FIND ME ON</h3>
              <p className="text-primaryColor">
                Please don`t hesitate to reach out to me{' '}
                <span className="text-themePrimaryColor text-lg">and connect.</span>
              </p>
            </div>
            <div className="p-2 w-full grid grid-cols-5 gap-1 sm:gap-6 items-center">
              <FaLinkedin className="text-[54px] text-themePrimaryColor m-auto hover:cursor-pointer" />{' '}
              <FaGithub className="text-[54px] text-themePrimaryColor m-auto hover:cursor-pointer" />{' '}
              <FaTelegram className="text-[54px] text-themePrimaryColor m-auto hover:cursor-pointer" />{' '}
              <FaInstagramSquare className="text-[54px] text-themePrimaryColor m-auto hover:cursor-pointer" />{' '}
              <BiLogoGmail className="text-[54px] text-themePrimaryColor m-auto hover:cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="pl-10 line-contact relative whitespace-pre-wrap sm:pl-4 sm:ml-24 w-[50%] lg:w-1/3 pt-16 lg:pt-0">
          <p className="text-xl text-themePrimaryColor">
            .contactMe<span className=" text-xl text-primaryColor">{' {'}</span>
          </p>
          {contacts.map(({field, component}) => (
            <p className="flex pl-10 text-lg  line-contact text-primaryColor" key={field}>
              {field}:{component}
            </p>
          ))}
          <p className="text-xl line-contact text-primaryColor">{'}'}</p>
          <button className="btn block lg:m-auto mt-8">Send Email</button>
        </div>
      </div>
    </div>
  );
};
