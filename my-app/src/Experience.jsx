import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './App.css';

function Experience() {
  const navigate = useNavigate();
  const purpleScreen = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll('.exp-section');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }, (index + 1) * 300);
    });
  }, []);

  const animateReturn = () => {
    containerRef.current?.classList.add('animation-back-right-top');
    purpleScreen.current?.classList.remove('opacity-0');
    purpleScreen.current?.classList.add('opacity-100', 'z-20');
    setTimeout(() => {
      navigate("/system");
    }, 700);
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center min-h-full h-auto w-full gap-4 px-4 py-5 sm:px-8 overflow-x-hidden text-white"
      ref={containerRef}
    >
      {/* 🔹 Fondo de ondas violetas */}
      <div className="absolute inset-0 -z-10 opacity-90 overflow-hidden">
        <div className="relative w-full h-full">
          <svg
            className="absolute bottom-0 h-auto animate-waveMove w-[3000%] md:w-[300%]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#6e11b0"
              fillOpacity="1"
              d="M0,256L60,234.7C120,213,240,171,360,149.3C480,128,600,128,720,144C840,160,960,192,1080,213.3C1200,235,1320,245,1380,250.7L1440,256L1440,320L0,320Z"
            ></path>
          </svg>
          <svg
            className="absolute bottom-0 opacity-60 animate-waveMove2 w-[3000%] md:w-[300%] h-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
          >
            <path
              fill="#9b59d0"
              fillOpacity="1"
              d="M0,224L60,208C120,192,240,160,360,144C480,128,600,128,720,122.7C840,117,960,107,1080,117.3C1200,128,1320,160,1380,176L1440,192L1440,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      {/* Pantalla de transición */}
      <div
        className="bg-purple-700 absolute w-full h-full z-0 opacity-0 transition duration-1000"
        ref={purpleScreen}
      ></div>

      <div
        className="absolute text-xl sm:text-2xl z-10 text-white left-3 top-3 border border-purple-300 p-2 sm:p-3 rounded-3xl cursor-pointer bg-purple-800/30 duration-200 hover:bg-purple-800/70 transition-all"
        onClick={animateReturn}
      >
        <p>Return <span>🚀</span></p>
      </div>

      {/* 🔸 Sección principal */}
      <div
        className="exp-section opacity-0 transform translate-y-6 border border-white/20 hover:border-purple-500/50 hover:shadow-lg backdrop-blur-md group hover:shadow-purple-400/50 p-4 sm:p-8 rounded-3xl shadow-lg shadow-purple-400/30 w-[95%] sm:w-[80%] max-w-3xl transition-all duration-700"
        style={{
          background: `linear-gradient(135deg, rgba(110,17,176,0.85), rgba(60,0,90,0.25))`,
        }}
      >
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center text-purple-200">
          💼 Experience
        </h1>
        <p className="text-base sm:text-lg leading-relaxed text-center">
          I've worked as a <b>Fullstack Developer</b> focused on delivering efficient, scalable solutions
          and maintaining strong communication with teams and clients.
        </p>
      </div>

      {/* 🔹 MPM Software */}
      <div
        className="exp-section opacity-0 border border-white/25 hover:border-purple-500/50 transform translate-y-6 hover:shadow-lg backdrop-blur-md group hover:shadow-purple-400/50 p-4 sm:p-8 rounded-3xl shadow-lg shadow-purple-400/30 w-[95%] sm:w-[80%] max-w-3xl transition-all duration-700"
        style={{
          background: `linear-gradient(135deg, rgba(120,20,190,0.85), rgba(100,0,150,0.25))`,
        }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-center">🏢 MPM Software</h2>
        <p className="text-base sm:text-lg leading-relaxed text-center">
          Worked for <b>1 year</b> at <b>MPM Software</b>, developing insurance software
          and enterprise solutions for recognized companies.  
          I also programmed the internal <b>intranet for time registration</b>.  
          <br /><br />
          <span className="text-purple-300">Tech stack:</span> C#, AngularJS, jQuery, Microsoft SQL  
          <br />
          <span className="italic text-sm">Full-time contract</span>
        </p>
      </div>

      {/* 🔹 Button */}
      <div
        className="exp-section mb-6 opacity-0 transform translate-y-6 border border-white/20 hover:border-purple-500/50 hover:shadow-lg backdrop-blur-md group hover:shadow-purple-400/50 p-4 sm:p-8 rounded-3xl shadow-lg shadow-purple-400/30 w-[95%] sm:w-[80%] max-w-3xl transition-all duration-700"
        style={{
          background: `linear-gradient(135deg, rgba(100,0,150,0.85), rgba(80,0,120,0.25))`,
        }}
      >
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-center">🪄 Button Technologies</h2>
        <p className="text-base sm:text-lg leading-relaxed text-center">
          Worked for <b>2 months</b> as a <b>Web Developer Intern</b>, creating and maintaining
          WordPress-based websites and adding custom functionality.  
          <br /><br />
          <span className="text-purple-300">Tech stack:</span> WordPress, PHP, jQuery  
          <br />
          <span className="italic text-sm">Internship contract</span>
        </p>
      </div>
    </div>
  );
}

export default Experience;
