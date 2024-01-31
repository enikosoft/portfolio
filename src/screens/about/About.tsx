import {useMediaQuery} from 'react-responsive';
import {mediaBreakpoints} from 'responsive';

export const About = () => {
  const mobileAndTablet = useMediaQuery({
    query: `(max-width: ${mediaBreakpoints.xl}px)`,
  });

  return (
    <div className="flex h-auto w-full items-center overflow-hidden text-primaryColor">
      <div className="w-full xl:w-2/3">
        <span className="html-tag">{'<html>'}</span>
        <br />
        <span className="html-tag pl-4">{'<body>'}</span>
        <br />
        <span className="html-tag pl-8">{'<h1>'}</span>

        <h1 className="pb-2 pl-10 text-3xl font-bold text-primaryColor opacity-70 sm:text-5xl">Hello,</h1>

        <span className="html-tag pl-8">{'</h1>'}</span>
        <br />
        <span className="html-tag pl-8">{'<p>'}</span>
        <p className="pb-4 pl-10 text-lg">
          My name is <span className="text-lg text-themePrimaryColor">Evgen Nikolenko</span> and I am an experienced{' '}
          <span className="text-lg text-themePrimaryColor">Full-Stack JavaScript Developer </span>
          with over 6 years of expertise in building web applications using{' '}
          <span className="text-lg text-themePrimaryColor">React and Node.js</span> technologies.
        </p>
        <p className="pb-4 pl-10 text-lg">
          Throughout my career, I`ve had the privilege of working on impactful projects with different technologies. My
          contributions to these projects have been marked by{' '}
          <span className="text-lg text-themePrimaryColor">
            a strong focus on creating efficient and user-friendly solutions
          </span>
          .{' '}
        </p>
        <p className="pb-4 pl-10 text-lg">
          I`ve consistently delivered{' '}
          <span className="text-lg text-themePrimaryColor">
            high-quality code, optimized application performance, and improved the overall user experience.
          </span>{' '}
          I am passionate about using technology to solve complex problems and am a strong advocate for Agile
          methodologies and best coding practices.
        </p>
        <span className="html-tag pl-8">{'</p>'}</span>
        <br />
        <span className="html-tag pl-4">{'</body>'}</span>
        <br />
        <span className="html-tag pl-2">{'</html>'}</span>
        {mobileAndTablet && (
          <div className="m-auto h-[200px] w-[300px] bg-about bg-cover sm:h-[400px] sm:w-[500px]"></div>
        )}
      </div>
      {!mobileAndTablet && <div className="h-[300px] w-[300px] bg-about bg-cover sm:h-[400px] sm:w-[400px]"></div>}
    </div>
  );
};

export default About;
