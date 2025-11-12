import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router';
import './App.css';
import planetImg from "./assets/projectsPlanet.gif";
import raceImg from "./assets/projectRace.png";
import skateImg from "./assets/skatey.png";

import reactIcon from "./assets/icons/react.png";
import tailwindIcon from "./assets/icons/tailwind.webp";
import nodeIcon from "./assets/icons/nodejs.png";
import laravelIcon from "./assets/icons/laravel.png";
import htmlIcon from "./assets/icons/html.png";
import jsIcon from "./assets/icons/javascript.png";
import cssIcon from "./assets/icons/css.webp";


function Projects() {
  const navigate = useNavigate();
  const greenScreen = useRef(null);
  const holeContainer = useRef(null);
  const [projects, setProjects] = useState([
    {
      title: "Planets Exploration App 🪐",
      image: planetImg,
      url: "https://github.com/Biti-k/planetsReact",
      urlWebsite: "https://planetsreact.netlify.app/",
      description: "A web application that allows users to explore different planets in our solar system and outside of it using data from NASA APIs through my NodeJS backend (expressJS).",
      icons: [reactIcon, tailwindIcon, nodeIcon],
    },
    {
      title: "Race Manager App 🏃",
      image: raceImg,
      url: "https://github.com/Biti-k/raceApp",
      description: "Final project for my studies in Web Development. A web application to manage racing events, including participant registration, race scheduling, and results tracking in live.",
      icons: [laravelIcon, tailwindIcon, reactIcon],
    },
    {
      title: "Skate Shop E-commerce 🛹",
      image: skateImg,
      url: "https://github.com/Biti-k/SkateyTienda",
      description: "An e-commerce website for a skate shop, featuring product listings and shopping cart functionality",
      icons: [htmlIcon, jsIcon, cssIcon],
    },
  ]);


  useEffect(() => {
    const element = holeContainer.current;
    if (!element) return; // Evita el error si no existe

    const rect = element.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Pasamos las coordenadas a CSS
    document.documentElement.style.setProperty("--circle-x", `${x}px`);
    document.documentElement.style.setProperty("--circle-y", `${y}px`);

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, (index + 1) * 200);
    });
  }, []);

  const animateReturn = () => {
    holeContainer.current?.classList.add('animation-back');
    greenScreen.current?.classList.remove('opacity-0');
    greenScreen.current?.classList.add('opacity-100', 'z-20');
    setTimeout(() => {
      navigate("/system");
    }, 700);
  };

  return (
    <div
      className='relative flex justify-center items-center w-full flex-col gap-3 px-8 md:py-5 py-20 overflow-hidden min-h-screen h-auto'
      ref={holeContainer}
    >
      {/* 🔹 Fondo de ondas verdes */}
      <div className="absolute inset-0 -z-10 opacity-90 overflow-hidden">
        <svg
          className="absolute bottom-0 sm:w-[250%] w-[3500%]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#00ff88"
            fillOpacity="1"
            d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,160C672,181,768,235,864,224C960,213,1056,139,1152,106.7C1248,75,1344,85,1392,90.7L1440,96L1440,320L0,320Z"
          ></path>
        </svg>
        <svg
          className="absolute bottom-0 opacity-60 animate-waveMove2 sm:w-[250%] w-[3500%]"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#00cc66"
            fillOpacity="1"
            d="M0,288L60,272C120,256,240,224,360,208C480,192,600,192,720,176C840,160,960,128,1080,122.7C1200,117,1320,139,1380,149.3L1440,160L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* Pantalla verde de salida */}
      <div className='bg-green-400 absolute w-full h-full z-0 opacity-0 transition duration-1000' ref={greenScreen}></div>

      <div className='absolute w-full flex h-auto md:left-3 md:top-3 top-2 left-0 md:justify-start justify-center'>
        <div className='md:w-[10%] w-[60%]  text-2xl z-10 text-white bg-green-300/15 hover:bg-green-300/50 transition duration-200 border-1 border-green-300 p-3 rounded-3xl cursor-pointer ' onClick={animateReturn}>
          <p className='text-center'>Return <span>🚀</span></p>
        </div>
      </div>

      {projects.map((project, index) => (
        <div
          key={index}
          className="group project-card h-auto sm:h-[320px] w-[100%] sm:w-[80%] flex flex-col sm:flex-row rounded-3xl p-3 sm:p-5 backdrop-blur-md border border-white/20 hover:border-green-300/60 transition-all duration-500 shadow-md hover:shadow-lg hover:shadow-green-400/30 opacity-0"
          style={{
            background: `linear-gradient(135deg, rgba(0,225,75,0.25), rgba(50,225,200,0.1))`,
            transform: 'translateY(20px)',
          }}
        >
          <div className='flex justify-center sm:justify-start items-center sm:w-1/4'>
            <svg className='sm:w-[250px] sm:h-[250px] w-[150px] h-[150px]' viewBox="0 0 1 1" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <path
                  id={`star-path-${index}`}
                  d="M0.475097 0.020608 C0.480612 -0.006869 0.519388 -0.006869 0.524903 0.020608 L0.571269 0.251605 C0.575051 0.270448 0.597161 0.278588 0.612010 0.266604 L0.793792 0.119895 C0.815436 0.102427 0.845153 0.127617 0.831980 0.152266 L0.721096 0.359768 C0.712075 0.376650 0.723822 0.397229 0.742771 0.397739 L0.975238 0.403995 C1.002890 0.404739 1.009630 0.443354 0.983905 0.453651 L0.767467 0.540292 C0.749850 0.547345 0.745772 0.570735 0.759940 0.583470 L0.934130 0.740035 C0.954822 0.758634 0.935419 0.792584 0.909186 0.783681 L0.688795 0.708892 C0.670805 0.702787 0.652793 0.718074 0.655584 0.737078 L0.689853 0.970393 C0.693926 0.998124 0.657484 1.011520 0.643038 0.987606 L0.521679 0.786683 C0.511768 0.770275 0.488232 0.770275 0.478321 0.786683 L0.356962 0.987606 C0.342516 1.011520 0.306074 0.998123 0.310147 0.970393 L0.344416 0.737078 C0.347207 0.718074 0.329195 0.702787 0.311205 0.708892 L0.090814 0.783681 C0.064580 0.792584 0.045178 0.758634 0.065870 0.740035 L0.240060 0.583470 C0.254228 0.570735 0.250150 0.547345 0.232533 0.540292 L0.016095 0.453651 C-0.009629 0.443354 -0.002889 0.404739 0.024762 0.403995 L0.257229 0.397739 C0.276178 0.397229 0.287925 0.376650 0.278904 0.359768 L0.168020 0.152266 C0.154848 0.127617 0.184564 0.102427 0.206208 0.119895 L0.387990 0.266604 C0.402839 0.278588 0.424949 0.270448 0.428731 0.251605 L0.475097 0.020608 Z"
                />
                <mask id={`mask-${index}`}>
                  <rect width="1" height="1" fill="black" />
                  <use href={`#star-path-${index}`} fill="white" />
                </mask>
              </defs>
              <use href={`#star-path-${index}`} fill="#242424" transform="translate(0.01, 0.01)" />
              <image href={project.image} width="1" height="1" preserveAspectRatio="xMidYMid slice" mask={`url(#mask-${index})`} />
            </svg>
          </div>

          <div className='px-4 sm:px-10 w-full sm:w-2/3 text-base sm:text-2xl mt-3 sm:mt-4 text-white overflow-hidden'>
            <h2 className='text-2xl sm:text-4xl text-center sm:text-left font-bold mb-1'>{project.title}</h2>
            <div className='flex flex-col mb-3'>
              <p className='text-sm sm:text-base'>{project.description}</p>
              <div className='flex flex-wrap mt-2'>
                {project.icons && project.icons.map((icon, idx) => (
                  <img key={idx} src={icon} alt="icon" className='inline-block border-white/15 border bg-green-400/25 rounded-md w-7 h-7 sm:w-9 sm:h-9 mr-2 mt-2 object-contain' />
                ))}
              </div>
            </div>
            <a href={project.url} className='font-bold text-amber-400 hover:text-cyan-300 transition duration-300' target="_blank">Github Link! 📂</a><br />
            {project.urlWebsite &&
              <a href={project.urlWebsite} className='font-bold text-amber-400 hover:text-cyan-300 transition duration-300' target="_blank">Website direct link 🌐</a>}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
