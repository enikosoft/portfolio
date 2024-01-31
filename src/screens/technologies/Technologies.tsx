import {DonwloadCVButton} from 'components/DownloadCVButton';
import {skillset} from './utils';

export const Technologies = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center sm:px-1">
      <div className="flex flex-row items-center pb-6 pt-4 align-middle">
        <span className="html-tag">{'<b>'} </span>
        <p className="px-2 pb-2 text-xl font-bold text-primaryColor sm:text-2xl">
          Professional <span className="text-xl text-themePrimaryColor sm:text-2xl">Skillset</span>
        </p>
        <span className="html-tag">{'</b>'}</span>
      </div>

      <div className="w-full">
        {skillset.map((skill) => (
          <>
            {skill.name && (
              <div className="flex flex-row pb-6 pt-12">
                <span className="html-tag">{'<span>'} </span>
                <p className="px-2 text-lg font-bold text-primaryColor">{skill.name}</p>
                <span className="html-tag">{'</span>'}</span>
              </div>
            )}

            <div className="xxl:grid-cols-4 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
              {skill.items.map((item, index) => (
                <div key={index} className="relative flex w-full flex-col items-center justify-center rounded-lg">
                  <div className="before:absolute before:inset-0 before:rounded-lg before:bg-white before:opacity-c8 before:light:bg-black"></div>
                  <div className="relative flex w-full flex-row items-center px-4 py-4 sm:p-8 sm:py-6">
                    <div className="h-12 w-12 sm:h-16 sm:w-16">{item.icon}</div>
                    <div className="pl-4 text-primaryColor">
                      <span className="h-7 text-base font-semibold xl:text-2xl xl:font-bold">{item.label}</span>
                      {item?.expirience && (
                        <div className="flex flex-row pt-1 text-sm font-light sm:flex-col sm:pt-2 xl:text-base">
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

      <div className="mt-12 w-full">
        <i className="fond-light pr-4 text-lg text-primaryColor">More information</i>
        <DonwloadCVButton isSmall />
      </div>
    </div>
  );
};

export default Technologies;
