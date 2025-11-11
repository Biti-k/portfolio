import { useRef } from 'react';
import { useNavigate } from 'react-router';
import RotatedText from './components/rotatedText';

function System() {
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const navigate = useNavigate();

  const goToProjects = () => {
    projectsRef.current?.classList.remove('animate-ping');
    projectsRef.current?.classList.add('big-cercle');
    setTimeout(() => {
      navigate('/portfolio/projects');
    }, 750);
  };

  const goToAboutMe = () => {
    projectsRef.current?.classList.remove('animate-ping');
    projectsRef.current?.classList.add('big-cercle-about-me');
  
    setTimeout(() => {
        navigate('/portfolio/about-me');
    }, 750);
  };

  const goToExperience = () => {
    projectsRef.current?.classList.remove('animate-ping');
    projectsRef.current?.classList.add('big-cercle-experience');

    setTimeout(() => {
      navigate('/portfolio/experience');
    }, 750);
  };

  return (
    <div className='h-full w-full overflow-hidden bg-custom-dark p-8'>
      <div className='flex flex-wrap'>
        <div className='w-[100%] h-auto experience flex justify-end section'>
          <div className='bg-purple-800 rounded-full w-[35vw] h-[35vw] md:w-[12vw] md:h-[12vw]  shadow-experience cursor-pointer' onClick={goToExperience}>
            <RotatedText text="EXPERIENCE" angle={0} />
            <div
              className='bg-custom-purple rounded-full w-[12vw] h-[12vw] md:w-[4vw] md:h-[4vw] relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping'
            />
          </div>  
        </div>
        <div className='w-[100%] h-auto mt-12 mb-12 projects flex justify-center section'>
          <div className='bg-green-400 rounded-full w-[35vw] h-[35vw] md:w-[12vw] md:h-[12vw] shadow-star cursor-pointer' onClick={goToProjects}>
            <RotatedText text="PROJECTS" angle={0} />
            <div
              className='bg-green-300 rounded-full w-[12vw] h-[12vw] md:w-[4vw] md:h-[4vw] relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping'
              id="projects"
              ref={projectsRef}
            />
          </div> 
        </div>
        <div className='w-[100%] h-auto about-me flex justify-start section'>
          <div className='bg-orange-400 rounded-full w-[35vw] h-[35vw] md:w-[12vw] md:h-[12vw] shadow-about cursor-pointer' onClick={goToAboutMe} >
            <RotatedText text="ABOUT ME" angle={0} />
            <div
              className='bg-orange-500 rounded-full w-[12vw] h-[12vw] md:w-[4vw] md:h-[4vw]  relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping' ref={aboutMeRef}
            />
          </div> 
        </div>
      </div>
    </div>
  );
}

export default System;
