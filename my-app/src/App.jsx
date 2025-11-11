import { useRef } from 'react';
import { useNavigate } from 'react-router'; // ✅ Import correcto
import galaxySvg from './assets/galaxySvg.svg';
import './App.css';
import RotatedText from './components/rotatedText';

function App() {
  const flashRef = useRef(null);
  const welcomeTextRef = useRef(null);
  const projectsRef = useRef(null);
  const navigate = useNavigate(); // ✅ Inicializamos el hook dentro del componente

  const animateGalaxy = (e) => {
    const galaxy = e.currentTarget; 
    galaxy.classList.remove('animateGalaxy');

    void galaxy.offsetWidth; // Forzar reflow
    galaxy.classList.add('animateGalaxyIn');

    if (welcomeTextRef.current) {
      welcomeTextRef.current.classList.remove('flex');
      welcomeTextRef.current.classList.add('hidden');
    }
    flashOn();
    setTimeout(() => {
      navigate('/portfolio/system'); // ✅ Navegación correcta
    }, 1350); // Tiempo para que la animación termine
  };

  const flashOn = () => {
    setTimeout(() => {
      if (flashRef.current) {
        flashRef.current.classList.remove('flashOff');
        flashRef.current.classList.add('flash');
      }
    }, 500);
  };

  return (
    <div className='mainContainer overflow-hidden'>
      <a>
        <img 
          src={galaxySvg} 
          className="svgGalaxy animateGalaxy" 
          alt="Galaxy" 
          onClick={animateGalaxy} 
        />
      </a>
      <div ref={flashRef} className='flashOff'>
        <div className='bg-green-400 rounded-full w-[12vw] h-[12vw] relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-star cursor-pointer'>
          <div
            className='bg-green-300 rounded-full w-[4vw] h-[4vw] relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-ping'
            id="projects"
            ref={projectsRef}
          />
        </div>  
      </div>
      <div className='ml-50 flex flex-col rounded-3xl' ref={welcomeTextRef}>
        <h1 className='text-5xl mb-6'>Welcome to my Portfolio! :D</h1>
        <p className="text-4xl text-green-300">Click on the galaxy to enter 🔭</p>
      </div>
    </div>
  );
}

export default App;
