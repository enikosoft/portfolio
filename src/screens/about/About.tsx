import { useMediaQuery } from "react-responsive";
import { mediaBreakpoints } from "responsive";

export const About = () => {
  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.xl}px)`,
  });

  return (
    <div className="overflow-auto px-2 w-full flex items-center text-primaryColor pt-8">
      <div className="h-about w-full xl:w-2/3">
        <span className="html-tag">{"<html>"}</span>
        <br />
        <span className="html-tag pl-4">{"<body>"}</span>
        <br />
        <span className="html-tag pl-8">{"<h1>"}</span>

        <h1 className="font-bold text-primaryColor opacity-70 pl-10 text-3xl sm:text-5xl pb-2">
          Hello,
        </h1>

        <span className="html-tag pl-8">{"</h1>"}</span>
        <br />
        <span className="html-tag pl-8">{"<p>"}</span>
        <p className="pl-10 pb-4 text-lg">
          My name is{" "}
          <span className="text-themePrimaryColor text-lg">
            Evgen Nikolenko
          </span>{" "}
          and I am an experienced{" "}
          <span className="text-themePrimaryColor text-lg">
            Full-Stack JavaScript Developer{" "}
          </span>
          with over 6 years of expertise in building web applications using{" "}
          <span className="text-themePrimaryColor text-lg">
            React and Node.js
          </span>{" "}
          technologies.
        </p>
        <p className="pl-10 pb-4 text-lg">
          Throughout my career, I`ve had the privilege of working on impactful
          projects with different technologies. My contributions to these
          projects have been marked by{" "}
          <span className="text-themePrimaryColor text-lg">
            a strong focus on creating efficient and user-friendly solutions
          </span>
          .{" "}
        </p>
        <p className="pl-10 pb-4 text-lg">
          I`ve consistently delivered{" "}
          <span className="text-themePrimaryColor text-lg">
            high-quality code, optimized application performance, and improved
            the overall user experience.
          </span>{" "}
          I am passionate about using technology to solve complex problems and
          am a strong advocate for Agile methodologies and best coding
          practices.
        </p>
        <span className="html-tag pl-8">{"</p>"}</span>
        <br />
        <span className="html-tag pl-4">{"</body>"}</span>
        <br />
        <span className="html-tag pl-2">{"</html>"}</span>
        {mobileAndTablet && (
          <div className="m-auto bg-cover bg-about w-[300px] h-[200px] sm:w-[500px] sm:h-[400px]"></div>
        )}
      </div>
      {!mobileAndTablet && (
        <div className="bg-cover bg-about w-[300px] h-[300px] sm:w-[400px] sm:h-[400px]"></div>
      )}
    </div>
  );
};
