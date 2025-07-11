tsParticles.load("tsparticles", {
  particles: {
    number: {
      value: 100, 
      density: {
        enable: true,
        value_area: 800, 
      },
    },
    color: {
      value: ["#ffffff", "#ffccdd", "#ccddff", "#aabbff"], 
    },
    shape: {
      type: "circle", 
      stroke: {
        width: 0,
        color: "#000000",
      },
    },
    opacity: {
      value: 0.7,
      random: true, 
      anim: {
        enable: true,
        speed: 1,
        opacity_min: 0.3,
        sync: false, 
      },
    },
    size: {
      value: 3,
      random: true, 
      anim: {
        enable: true,
        speed: 2,
        size_min: 0.5,
        sync: false, 
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 1, 
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out", 
      bounce: false,
    },
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble", // Stars grow slightly on hover
      },
      onclick: {
        enable: true,
        mode: "push", 
      },
      resize: true,
    },
    modes: {
      bubble: {
        distance: 150,
        size: 4,
        duration: 2,
        opacity: 0.8,
      },
      push: {
        particles_nb: 2, 
      },
    },
  },
  retina_detect: true,
  background: {
    color: "#0a0a1a", 
  },
});
