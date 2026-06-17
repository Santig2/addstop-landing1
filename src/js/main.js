import '../css/style.css';
import gsap from 'gsap';

document.addEventListener("DOMContentLoaded", () => {
  // Animación inicial usando GSAP
  gsap.from(".hero h1", { opacity: 0, y: -50, duration: 1, ease: "power3.out" });
  gsap.from(".hero p", { opacity: 0, y: 30, duration: 1, delay: 0.3, ease: "power3.out" });
  gsap.from(".cta-button", { opacity: 0, scale: 0.8, duration: 1, delay: 0.6, ease: "elastic.out(1, 0.5)" });

  console.log("Landing page inicializada correctamente.");
});
