import {Link} from 'react-router-dom';
import {skillset} from './utils';

import pdf from 'assets/EvgenNikolenko-JSdev.pdf';

export const Technologies = () => {
  return (
    <div className="flex justify-center items-center flex-col sm:px-1 w-full">
      <div className="flex flex-row align-middle items-center pt-4 pb-6">
        <span className="html-tag">{'<b>'} </span>
        <p className="px-2 font-bold text-primaryColor text-xl sm:text-2xl pb-2">
          Professional <span className="text-xl sm:text-2xl text-themePrimaryColor">Skillset</span>
        </p>
        <span className="html-tag">{'</b>'}</span>
      </div>

      <div className="w-full">
        {skillset.map((skill) => (
          <>
            {skill.name && (
              <div className="flex flex-row pb-6 pt-12">
                <span className="html-tag">{'<span>'} </span>
                <p className="px-2 font-bold text-primaryColor text-lg">{skill.name}</p>
                <span className="html-tag">{'</span>'}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xxl:grid-cols-4 gap-6">
              {skill.items.map((item, index) => (
                <div key={index} className="rounded-lg flex justify-center flex-col items-center w-full relative">
                  <div className="before:bg-white before:opacity-c8 before:absolute before:inset-0 before:rounded-lg"></div>
                  <div className="flex flex-row items-center relative w-full px-4 py-4 sm:py-6 sm:p-8">
                    <div className="bg h-12 w-12 sm:h-16 sm:w-16">{item.icon}</div>
                    <div className="text-primaryColor pl-4">
                      <span className="font-semibold xl:font-bold text-base h-7 xl:text-2xl">{item.label}</span>
                      {item?.expirience && (
                        <div className="flex flex-row sm:flex-col font-light text-sm xl:text-base pt-1 sm:pt-2">
                          <span className="mr-2 sm:mr-1">Expirience:</span>
                          <span>{item?.expirience} years</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        ))}
      </div>

      <div className="w-full mt-12">
        <i className="text-lg fond-light text-primaryColor pr-4">More information</i>
        <Link to={pdf} target="_blank" download>
          <button className="btn">Download CV</button>
        </Link>
      </div>
    </div>
  );
};
