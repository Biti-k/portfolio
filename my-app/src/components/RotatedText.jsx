import React, { useState, useEffect, useRef } from 'react';

/**
 * RotatedText (animable)
 *
 * Props:
 *  - text: string
 *  - radius: CSS size (px, vw, rem...)
 *  - startAngle: initial degrees for first char (default -90 = top)
 *  - clockwise: boolean, true => rotation direction is clockwise
 *  - className: wrapper classes
 *  - autoRotate: boolean, si true anima automáticamente
 *  - speed: grados por segundo (positivo)
 */
export default function RotatedText({
  text = '',
  radius = '6vw',
  startAngle = -90,
  clockwise = true,
  className = '',
  autoRotate = true,
  speed = 30 // grados por segundo
}) {
  const chars = Array.from(text);
  const n = chars.length;
  if (n === 0) return null;

  // CORRECCIÓN: ángulo por carácter -> 360/n (no 180/n)
  const angleStep = 180 / n;


  // estado que representa el offset (startAngle animado)
  const [angleOffset, setAngleOffset] = useState(startAngle);

  // refs para RAF y tiempo anterior
  const rafRef = useRef(null);
  const lastTimeRef = useRef(null);

    // 🔹 Detecta si la pantalla es menor que "md" (≈768px)
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    // 🔹 Calcula el radio dinámico para RotatedText
  radius = isMobile ? '20vw' : '6vw';

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);



  // si startAngle cambia desde fuera, actualizamos el offset inicial
  useEffect(() => {
    setAngleOffset(startAngle);
  }, [startAngle]);

  useEffect(() => {
    if (!autoRotate || speed === 0) {
      // Si no hay animación, deja el ángulo en startAngle
      setAngleOffset(startAngle);
      return;
    }

    lastTimeRef.current = null;

    const tick = (timeMs) => {
      if (lastTimeRef.current == null) lastTimeRef.current = timeMs;
      const dt = (timeMs - lastTimeRef.current) / 1000; // segundos
      lastTimeRef.current = timeMs;

      setAngleOffset((prev) => {
        const dir = clockwise ? 1 : -1;
        let next = prev + dir * speed * dt;
        // normalizar para no dejar el número crecer indefinidamente
        next = ((next % 360) + 360) % 360; // 0..359
        return next;
      });

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
      lastTimeRef.current = null;
    };
  }, [autoRotate, speed, clockwise, startAngle]);

  return (
  <div className={`relative top-[50%] left-[50%] flex justify-center w-full text-2xl ${className}`} style={{ width: 0, height: 0 }}>
      {chars.map((ch, i) => {
        const angle = angleOffset + (clockwise ? 1 : -1) * i * angleStep;

        // Colocación: centrar -> rotar sistema -> sacar al radio -> contra-rotar para mantener letra vertical
        const transform = `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}) rotate(${-angle}deg)`;

        return (
          <span
            key={i}
            aria-hidden="true"
            style={{
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform,
              transformOrigin: 'center',
              whiteSpace: 'pre',
              display: 'inline-block',
              userSelect: 'none'
            }}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </span>
        );
      })}
    </div>
  );
}
