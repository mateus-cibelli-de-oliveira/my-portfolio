import { useEffect } from "react";
import { styled } from "@mui/material/styles";

const Canvas = styled("canvas")(() => ({
  width: "240px",
  height: "130px",
  position: "absolute",
  left: 0,
  zIndex: -1,
  backgroundColor: "transparent",
}));

const AnimatedBackground = () => {
  useEffect(() => {
    const numparticles = 10;
    const canvas = document.getElementById("backdrop") as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.fillStyle = "white";
    ctx.strokeStyle = "white";
    ctx.lineWidth = 1;

    const h = canvas.height;
    const w = canvas.width;

    const particlesx: number[] = [];
    const particlesy: number[] = [];
    const particlesdx: number[] = [];
    const particlesdy: number[] = [];

    for (let c = 0; c < numparticles; c++) {
      particlesx[c] = Math.random() * w;
      particlesy[c] = Math.random() * h;
      particlesdx[c] = Math.random() * 2 - 1;
      particlesdy[c] = Math.random() * 2 - 1;
    }

    const interval = setInterval(() => {
      ctx.clearRect(0, 0, w, h);

      for (let c = 0; c < numparticles; c++) {
        const x = Math.round(particlesx[c]) + 0.5;
        const y = Math.round(particlesy[c]) + 0.5;
        ctx.beginPath();
        ctx.arc(x, y, 5, 0, 2 * Math.PI);
        ctx.fill();
        particlesx[c] += particlesdx[c];
        particlesy[c] += particlesdy[c];

        if (particlesx[c] < 0 || particlesx[c] > w) particlesdx[c] *= -1;
        if (particlesy[c] < 0 || particlesy[c] > h) particlesdy[c] *= -1;
      }

      for (let c = 0; c < numparticles; c++) {
        const x = particlesx[c];
        const y = particlesy[c];
        ctx.beginPath();
        ctx.moveTo(Math.round(x) + 0.5, Math.round(y) + 0.5);
        for (let i = 0; i < numparticles; i++) {
          ctx.lineTo(
            Math.round(particlesx[i]) + 0.5,
            Math.round(particlesy[i]) + 0.5
          );
          ctx.stroke();
        }
      }
    }, 5);

    return () => clearInterval(interval);
  }, []);

  return <Canvas id="backdrop" />;
};

export default AnimatedBackground;
