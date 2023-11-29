import { skillset } from "./utils";

export const Technologies = () => {
  return (
    <div className="flex justify-center items-center flex-col sm:px-1 w-full">
      <div className="flex flex-row align-middle items-center pt-4">
        <span className="html-tag">{"<b>"} </span>
        <p className="px-2 font-bold text-primaryColor text-xl sm:text-2xl pb-2">
          Professional{" "}
          <span className="text-xl sm:text-2xl text-themePrimaryColor">
            Skillset
          </span>
        </p>
        <span className="html-tag">{"</b>"}</span>
      </div>

      <div className="w-full">
        <div>
          {skillset.map((skill, index) => (
            <>
              {index !== 0 && <br />}
              <div className="flex flex-row py-4">
                <span className="html-tag">{"<span>"} </span>
                <p className="px-2 font-bold text-primaryColor text-lg">
                  {skill.name}
                </p>
                <span className="html-tag">{"</span>"}</span>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 xl:grid-cols-6 gap-4">
                {skill.items.map((item, index) => (
                  <div
                    key={index}
                    className="hover:cursor-pointer hover:scale-110 rounded-lg border-1 border-themePrimaryColor shadow-technologiesCard w-full xl:w-40 border flex justify-center flex-col items-center py-4"
                  >
                    {item.icon}
                    <span className="text-primaryColor pt-2">{item.label}</span>
                  </div>
                ))}
              </div>
            </>
          ))}
        </div>
      </div>

      <div className="w-full mt-12">
        <i className="text-lg fond-light text-primaryColor pr-4">
          More information in CV
        </i>
        <button className="btn">Download</button>
      </div>
    </div>
  );
};
