import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router';
import './App.css';

function AboutMe() {
  const navigate = useNavigate();
  const redScreen = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const sections = document.querySelectorAll('.about-section');
    sections.forEach((section, index) => {
      setTimeout(() => {
        section.style.opacity = '1';
        section.style.transform = 'translateY(0)';
      }, (index + 1) * 300);
    });
  }, []);

  const animateReturn = () => {
    containerRef.current?.classList.add('animation-back-left-bottom');
    redScreen.current?.classList.remove('opacity-0');
    redScreen.current?.classList.add('opacity-100', 'z-20');
    setTimeout(() => {
      navigate("/portfolio/system");
    }, 700);
  };

  return (
    <div
    className="relative flex flex-col items-center justify-center min-h-full h-auto w-full gap-4 px-4 py-5 sm:px-8 overflow-x-hidden text-white"
    ref={containerRef}
    >
    {/* 🔹 Fondo de ondas rojas/naranjas */}
    <div className="absolute inset-0 -z-10 opacity-90 overflow-hidden">
        <div className="relative w-full h-full">
        <svg
            className="absolute bottom-0 h-auto animate-waveMove w-[3000%] md:w-[300%]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
        >
            <path
            fill="#ff5500"
            fillOpacity="1"
            d="M0,288L48,266.7C96,245,192,203,288,186.7C384,171,480,181,576,197.3C672,213,768,235,864,229.3C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L0,320Z"
            ></path>
        </svg>
        <svg
            className="absolute bottom-0 opacity-60 animate-waveMove2 w-[3000%] md:w-[300%] h-auto"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            preserveAspectRatio="none"
        >
            <path
            fill="#ffbb33"
            fillOpacity="1"
            d="M0,224L60,208C120,192,240,160,360,144C480,128,600,128,720,122.7C840,117,960,107,1080,117.3C1200,128,1320,160,1380,176L1440,192L1440,320L0,320Z"
            ></path>
        </svg>
        </div>
    </div>

    {/* Pantalla de transición */}
    <div
        className="bg-amber-500 absolute w-full h-full z-0 opacity-0 transition duration-1000"
        ref={redScreen}
    ></div>

    <div
        className="absolute text-xl sm:text-2xl z-10 text-white left-3 top-3 border border-yellow-300 p-2 sm:p-3 rounded-3xl cursor-pointer bg-red-500/25 duration-200 hover:bg-red-500/75 transition-all"
        onClick={animateReturn}
    >
        <p>Return <span>🚀</span></p>
    </div>

    {/* 🔸 Sección principal */}
    <div className="about-section opacity-0 transform translate-y-6 border border-white/20 hover:border-red-500/50 hover:shadow-lg backdrop-blur-md group hover:shadow-yellow-400/50 p-4 sm:p-8 rounded-3xl shadow-lg shadow-yellow-400/30 w-[95%] sm:w-[80%] max-w-3xl transition-all duration-700"
        style={{
            background: `linear-gradient(135deg, rgba(220,50,0,0.85), rgb(225,110,0,0.1))`,
        }}>
        <h1 className="text-2xl sm:text-4xl font-bold mb-4 text-center">About Me</h1>
        <p className="text-base sm:text-lg leading-relaxed text-center">
        I'm <span className="font-bold text-yellow-300">Diego De Luca</span>, a passionate
        <span className="text-amber-500"> fullstack developer</span> with a strong curiosity
        for science, art, technology, and how things work.  
        I love building interactive web applications that combine clean design and solid logic.
        </p>
        <div className='flex gap-2 mt-4 sm:mt-5 justify-center flex-wrap'>
        <span className='text-sm sm:text-base'>Reach me through <span className='text-yellow-300'>diegoarmandodluca@gmail.com</span> or find me on:</span> 
        <a className='flex items-center' target='_blank' href='https://www.linkedin.com/in/diego-de-luca-95561b274/'>
            <img className='w-6 h-6 sm:w-7 sm:h-7 object-contain' src='./src/assets/icons/linkedin.webp'></img>
        </a>
        <a className='flex items-center' target='_blank' href='https://github.com/Biti-k'>
            <img className='w-6 h-6 sm:w-7 sm:h-7 object-contain' src='./src/assets/icons/github.png'></img>
        </a>
        </div>
    </div>

    {/* 🔹 Otras secciones */}
    <div className="about-section opacity-0 border border-white/25 hover:border-red-500/50 transform translate-y-6 hover:shadow-lg backdrop-blur-md group hover:shadow-yellow-400/50 p-4 sm:p-8 rounded-3xl shadow-lg shadow-yellow-400/30 w-[95%] sm:w-[80%] max-w-3xl transition-all duration-700"
        style={{ background: `linear-gradient(135deg, rgba(225,0,0,0.85), rgb(225,20,0,0.1))` }}>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-center">🎓 Studies</h2>
        <p className="text-base sm:text-lg leading-relaxed text-center">
        📘 <b>Degree in Web Development</b> — specialized in backend and frontend technologies.  
        <br />👨‍💻 Currently studying a <b>Physics degree</b> while working in tech.
        </p>
    </div>

    <div className="about-section opacity-0 transform border border-white/20 hover:border-red-500/50 translate-y-6 hover:shadow-lg backdrop-blur-md group hover:shadow-yellow-400/50 p-4 sm:p-8 rounded-3xl shadow-lg shadow-yellow-400/30 w-[95%] sm:w-[80%] max-w-3xl transition-all duration-700"
        style={{ background: `linear-gradient(135deg, rgba(225,0,50,0.85), rgb(225,0,100,0.1))` }}>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-center">🧠 Skills</h2>
        <p className="text-base sm:text-lg leading-relaxed text-center">
            React • Javascript • C# • .NET • PHP • Laravel • MySQL • MicrosoftSQL • TailwindCSS  
            <br />
            Git • REST APIs • Agile Methodologies • Problem Solving • Teamwork • Adaptability
        </p>
    </div>

    <div className="about-section mb-6 opacity-0 transform translate-y-6 border border-white/20 hover:border-red-500/50 hover:shadow-lg backdrop-blur-md group hover:shadow-yellow-400/50 p-4 sm:p-8 rounded-3xl shadow-lg shadow-yellow-400/30 w-[95%] sm:w-[80%] max-w-3xl transition-all duration-700"
        style={{ background: `linear-gradient(135deg, rgba(225,0,0,0.85), rgb(225,20,0,0.1))` }}>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-3 text-center">🌍 Languages</h2>
        <p className="text-base sm:text-lg leading-relaxed text-center">
        Spanish — Native  
        <br /> English — Advanced
        <br /> Catalan — Advanced
        </p>
    </div>
    </div>

  );
}

export default AboutMe;