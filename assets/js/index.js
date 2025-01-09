function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}
loco();

function page1() {
  var tl = gsap.timeline();

  tl.from("#hero-heading h1", {
    x: -300,
    opacity: 0,
    duration: 1,
    stagger: 3,
  });

  tl.from("#hero-heading h3", {
    x: 300,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
  });
}
page1();

gsap.to("#page>video", {
  scrollTrigger: {
    trigger: `#page>video`,
    start: `2% top`,
    end: `bottom top`,
    scroller: `#main`,
  },
  onStart: () => {
    document.querySelector("#page>video").play();
  },
});

// gsap.to("#page", {
//   scrollTrigger: {
//     trigger: `#page`,
//     start: `top top`,
//     end: `bottom top`,
//     scroller: `#main`,
//     pin: true,
//   },
// });

gsap.to("#page-bottom", {
  scrollTrigger: {
    trigger: `#page-bottom`,
    start: `5% top`,
    end: `bottom top`,
    scroller: `#main`,
    scrub: 0.5,
  },
  opacity: 0,
});

// -------- canvas for video solution -----

function videosolutionText() {
  var clutter = "";

  document
    .querySelector("#videosolution-content>h1")
    .textContent.split("")
    .forEach(function (dets) {
      clutter += `<span>${dets}</span>`;

      document.querySelector("#videosolution-content>h1").innerHTML = clutter;
    });

  gsap.to("#videosolution-content>h1>span", {
    scrollTrigger: {
      trigger: `#videosolution-content>h1>span`,
      start: `top bottom`,
      end: `bottom top`,
      scroller: `#main`,
      scrub: 0.5,
    },
    stagger: 0.2,
    color: `white`,
  });
}
videosolutionText();

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: `#page1`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    pin: true,
  },
});

tl.to("#page1>h1", {
  top: `-50%`,
});

var tl1 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page2`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    pin: true,
  },
});

tl1.to("#page2>h1", {
  top: `-50%`,
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: `#page4`,
    start: `top top`,
    scrub: 1,
    scroller: `#main`,
    pin: true,
  },
});

tl2.to("#page4>#center-page4", {
  top: `-50%`,
});

// Three Js Solar system

document.addEventListener("DOMContentLoaded", () => {
  // Scene, Camera, Renderer
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

  renderer.setSize(window.innerWidth, window.innerHeight);
  document.getElementById("three-container").appendChild(renderer.domElement);

  // Lights
  const ambientLight = new THREE.AmbientLight(0x404040, 1);
  const pointLight = new THREE.PointLight(0xffa500, 2, 100);
  pointLight.position.set(0, 0, 0);
  scene.add(ambientLight, pointLight);

  // Sun
  const sunGeometry = new THREE.SphereGeometry(5, 32, 32);
  // Create a canvas for the gradient
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 256;

  const context = canvas.getContext("2d");

  // Create a radial gradient
  const gradient = context.createRadialGradient(128, 128, 50, 128, 128, 128);
  gradient.addColorStop(0, "#666666"); // Inner color
  gradient.addColorStop(1, "#333333"); // Outer color

  context.fillStyle = gradient;
  context.fillRect(0, 0, canvas.width, canvas.height);

  // Create a texture from the canvas
  const gradientTexture = new THREE.CanvasTexture(canvas);

  // Apply the gradient texture to the sun material
  const sunMaterial = new THREE.MeshBasicMaterial({
    map: gradientTexture,
  });

  const sun = new THREE.Mesh(sunGeometry, sunMaterial);
  scene.add(sun);

  // Planets
  const planets = [];
  const planetData = [
    { radius: 8, size: 0.8, color: 0x1e90ff, speed: 0.01 }, // Mercury
    { radius: 12, size: 1, color: 0xff4500, speed: 0.007 }, // Venus
    { radius: 16, size: 1.2, color: 0x00ff00, speed: 0.005 }, // Earth
    { radius: 20, size: 1.1, color: 0xff0000, speed: 0.003 }, // Mars
  ];

  planetData.forEach((data) => {
    const planetGeometry = new THREE.SphereGeometry(data.size, 32, 32);
    const planetMaterial = new THREE.MeshStandardMaterial({
      color: data.color,
    });
    const planet = new THREE.Mesh(planetGeometry, planetMaterial);

    planet.orbitRadius = data.radius;
    planet.orbitSpeed = data.speed;
    planet.orbitAngle = Math.random() * Math.PI * 2; // Random starting angle
    planets.push(planet);
    scene.add(planet);
  });

  // Stars
  const starGeometry = new THREE.BufferGeometry();
  const starCount = 1000;
  const starPositions = new Float32Array(starCount * 3);

  for (let i = 0; i < starCount * 3; i++) {
    starPositions[i] = (Math.random() - 0.5) * 1000;
  }

  starGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(starPositions, 3)
  );

  // Create a circular texture programmatically
  function createCircularTexture() {
    const size = 128; // Size of the canvas
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;

    const context = canvas.getContext("2d");
    const radius = size / 2;

    // Draw a circle
    context.beginPath();
    context.arc(radius, radius, radius, 0, Math.PI * 2);
    context.fillStyle = "white";
    context.fill();

    return new THREE.CanvasTexture(canvas);
  }
  const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 1,
    transparent: true,
    opacity: 1,
    map: createCircularTexture(), // Use the generated circular texture
    sizeAttenuation: true,
  });

  const stars = new THREE.Points(starGeometry, starMaterial);
  scene.add(stars);

  // Camera Controls
  let mouseX = 0,
    mouseY = 0;
  const onMouseMove = (event) => {
    mouseX = (event.clientX / window.innerWidth) * 3 - 1;
    mouseY = -(event.clientY / window.innerHeight) * 3 + 1;
  };

  const onTouchMove = (event) => {
    if (event.touches.length === 1) {
      mouseX = (event.touches[0].clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.touches[0].clientY / window.innerHeight) * 2 + 1;
    }
  };

  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("touchmove", onTouchMove);

  // Animation Loop
  const animate = () => {
    requestAnimationFrame(animate);

    // Rotate planets
    planets.forEach((planet) => {
      planet.orbitAngle += planet.orbitSpeed;
      planet.position.x = planet.orbitRadius * Math.cos(planet.orbitAngle);
      planet.position.z = planet.orbitRadius * Math.sin(planet.orbitAngle);
    });

    // Move camera slightly with mouse
    camera.position.x += (mouseX * 50 - camera.position.x) * 0.05;
    camera.position.y += (mouseY * 50 - camera.position.y) * 0.05;
    camera.lookAt(scene.position);

    renderer.render(scene, camera);
  };

  animate();

  // Handle Resize
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const progressBars = document.querySelectorAll(".progress-fg");

  // Function to animate progress bars
  const animateProgress = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressBar = entry.target;
        const percentage = parseInt(
          progressBar.parentElement.nextElementSibling.innerText,
          10
        );

        // Set progress animation
        const dashOffset = 565 - (565 * percentage) / 100; // Adjust for new circumference
        progressBar.style.strokeDashoffset = dashOffset;

        observer.unobserve(progressBar); // Stop observing once animated
      }
    });
  };

  // Intersection Observer
  const observer = new IntersectionObserver(animateProgress, {
    threshold: 0.5, // Trigger when 50% of the element is visible
  });

  progressBars.forEach((bar) => observer.observe(bar));
});

function page7Animation() {
  const isMobile = window.innerWidth <= 768;

  gsap.from("#page7-bottom1 .box-left1", {
    x: -100,
    opacity: 0,
    stagger: 2,
    ease: "power2.out",
    duration: 4,
    scrollTrigger: {
      trigger: ".box-left1",
      start: "top 80%",
      end: "top 60%",
      scrub: 3,
      scroller: isMobile ? "" : "#main",
      invalidateOnRefresh: true,
    },
  });
  gsap.from("#page7-bottom1 .box-right1", {
    x: 400,
    opacity: 0,
    stagger: 2,
    duration: 4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".box-right1",
      scroller: "#main",
      start: "top 80%",
      end: "top 60%",
      scrub: 3,
      scroller: isMobile ? "" : "#main",
      invalidateOnRefresh: true,
    },
  });
  gsap.from("#page7-bottom2 .box-left2", {
    x: -400,
    opacity: 0,
    stagger: 2,
    duration: 4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".box-left2",
      scroller: "#main",
      start: "top 80%",
      end: "top 60%",
      scrub: 3,
      scroller: isMobile ? "" : "#main",
      invalidateOnRefresh: true,
    },
  });
  gsap.from("#page7-bottom2 .box-right2", {
    x: 400,
    opacity: 0,
    stagger: 2,
    duration: 4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".box-right2",
      scroller: "#main",
      start: "top 80%",
      end: "top 60%",
      scrub: 3,
      scroller: isMobile ? "" : "#main",
      invalidateOnRefresh: true,
    },
  });
  gsap.from("#page7-bottom3 .box-left3", {
    x: -400,
    opacity: 0,
    stagger: 2,
    duration: 4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".box-left3",
      scroller: "#main",
      start: "top 80%",
      end: "top 60%",
      scrub: 3,
      scroller: isMobile ? "" : "#main",
      invalidateOnRefresh: true,
    },
  });
  gsap.from("#page7-bottom3 .box-right3", {
    x: 400,
    opacity: 0,
    stagger: 2,
    duration: 4,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".box-right3",
      scroller: "#main",
      start: "top 80%",
      end: "top 60%",
      scrub: 3,
      scroller: isMobile ? "" : "#main",
      invalidateOnRefresh: true,
    },
  });
  gsap.from("#page7-bottomlast .box-last", {
    x: -400,
    opacity: 0,
    stagger: 2,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".box-last",
      scroller: "#main",
      start: "top 100%",
      end: "top 90%",
      scrub: 2,
      scroller: isMobile ? "" : "#main",
      invalidateOnRefresh: true,
    },
  });
}
page7Animation();

gsap.to("#page23>img", {
  scrollTrigger: {
    trigger: `#page23>img`,
    start: `top bottom`,
    end: `bottom 60%`,
    scrub: 0.5,
    scroller: `#main`,
  },
  opacity: 1,
});

$(document).ready(function () {
  $("html,body").addClass("overflow");
  setTimeout(() => {
    $("html,body").removeClass("overflow");
  }, 2500);

  gsap.registerPlugin(ScrollTrigger);

  var $animeCard = document.querySelector(".anime-card-inner");
  //loader img
  gsap.set($animeCard, {
    rotationY: 90,
    top: "50%",
    left: "50%",
    xPercent: -50,
    yPercent: -50,
    width: "40vh",
    height: "40vh",
    scale: 1,
  });

  //img set
  gsap.set(".anime-card-front img", {
    attr: {
      src: "https://www.yudiz.com/codepen/gsap-landing-page/tanjiro.jpg",
    },
  });
  gsap.set(".anime-card-back img", {
    attr: {
      src: "https://www.yudiz.com/codepen/gsap-landing-page/zenitsu.jpg",
    },
  });

  //Main card-wrapper
  gsap.set(".anime-card", { x: "50%", y: "50%" });

  // Main-text animation
  //Main text load
  gsap.set(".main-txt", { opacity: 0, yPercent: 50 });
  const mainTxt = gsap.timeline();
  mainTxt.to(".main-txt", { opacity: 1, yPercent: -50, duration: 2 });

  //Main text opacity down
  const mainTxt2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".main-txt",
      start: "center center",
      end: "+=50",
      markers: false,
      scrub: 1,
    },
  });
  mainTxt2.to(".main-txt", { opacity: 0, ease: "linear" });

  //loader to scale
  const tl = gsap.timeline();
  tl.to($animeCard, {
    rotationY: 0,
    ease: Expo.easeIn,
    duration: 2.5,
    scale: 1,
    width: "100vw",
    height: "100vh",
  });

  //Banner one image scale down
  const t2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner",
      start: "center center",
      end: "+=600",
      markers: false,
      scrub: 1,
    },
  });
  if (window.innerWidth >= 1200 && window.innerWidth <= 1499) {
    t2.to($animeCard, {
      height: "60vh",
      width: "472.5px",
      left: "calc(243.75px + (50% - 585px) + 682.5px)",
    });
  } else if (window.innerWidth >= 992 && window.innerWidth <= 1199) {
    t2.to($animeCard, {
      height: "60vh",
      width: "465px",
      left: "calc(240px + (50% - 480px) + 480px)",
    });
  } else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
    t2.to($animeCard, {
      height: "60vh",
      width: "345px",
      left: "calc(180px + (50% - 360px) + 360px)",
    });
  } else if (window.innerWidth <= 767) {
    t2.to($animeCard, {
      height: "calc(100vh - 340px)",
      width: "95%",
      left: "50%",
      top: "calc(100% - 40px)",
      yPercent: -100,
    });
  } else {
    t2.to($animeCard, {
      height: "60vh",
      width: "535px",
      left: "calc(275px + (50% - 660px) + 770px)",
    });
  }

  gsap.to(".main-wallpaper", {
    opacity: 0,
    scrollTrigger: {
      trigger: ".banner",
      start: "center+=" + 100 + " center",
      end: "bottom center",
      markers: false,
      scrub: 1,
    },
  });

  //Banner text-animation
  gsap.set(".banner-content", { opacity: 0, yPercent: 50 });
  gsap.to(".banner-content", {
    ease: "linear",
    yPercent: 0,
    opacity: 1,
    scrollTrigger: {
      trigger: ".banner",
      start: "center+=" + 300 + " center",
      end: "+=200",
      markers: false,
      scrub: 1,
    },
  });

  //Banner animation
  gsap.to(".banner", {
    ease: "linear",
    scrollTrigger: {
      trigger: ".banner",
      start: "center center",
      end: "+=600",
      markers: false,
      pin: true,
      pinSpacing: true,
      scrub: 1,
    },
  });

  //Banner two animation
  gsap.to(".banner-two", {
    ease: "linear",
    scrollTrigger: {
      trigger: ".banner-two",
      start: "center center",
      end: "+=600",
      markers: false,
      pin: true,
      pinSpacing: true,
      scrub: 1,
    },
  });

  //Banner two image rotation
  const t3 = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner-two",
      start: "top center",
      end: "+=600",
      markers: false,
      scrub: 1,
    },
  });
  if (window.innerWidth <= 767) {
    t3.to($animeCard, {
      rotationY: -180,
      height: "100vh",
      width: "100vw",
      left: "50%",
      top: "50%",
      yPercent: -50,
    });
  } else {
    t3.to($animeCard, {
      rotationY: -180,
      height: "100vh",
      width: "100vw",
      left: "50%",
    });
  }

  //Banner three animation
  gsap.to(".banner-three", {
    ease: "linear",
    scrollTrigger: {
      trigger: ".banner-three",
      start: "center center",
      end: "+=600",
      markers: false,
      pin: true,
      pinSpacing: true,
      scrub: 1,
    },
  });

  //Banner three image rotation
  const t4 = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner-three",
      start: "top center",
      end: "+=600",
      markers: false,
      scrub: 1,
    },
  });
  if (window.innerWidth >= 1200 && window.innerWidth <= 1499) {
    t4.to($animeCard, {
      rotationY: -360,
      height: "60vh",
      width: "472.5px",
      left: "calc((50% - 585px) + 243.75px)",
    });
  } else if (window.innerWidth >= 992 && window.innerWidth <= 1199) {
    t4.to($animeCard, {
      rotationY: -360,
      height: "60vh",
      width: "465px",
      left: "calc((50% - 465px) + 240px)",
    });
  } else if (window.innerWidth >= 768 && window.innerWidth <= 991) {
    t4.to($animeCard, {
      rotationY: -360,
      height: "60vh",
      width: "345px",
      left: "calc((50% - 360px) + 180px)",
    });
  } else if (window.innerWidth <= 767) {
    t4.to($animeCard, {
      rotationY: -360,
      height: "calc(100vh - 340px)",
      width: "95%",
      left: "50%",
      top: "calc(100% - 40px)",
      yPercent: -100,
    });
  } else {
    t4.to($animeCard, {
      rotationY: -360,
      height: "60vh",
      width: "535px",
      left: "calc((50% - 660px) + 275px)",
    });
  }

  //Banner four animation
  gsap.to(".banner-four", {
    ease: "linear",
    scrollTrigger: {
      trigger: ".banner-four",
      start: "center center",
      end: "+=600",
      markers: false,
      pin: true,
      pinSpacing: true,
      scrub: 1,
    },
  });

  //Banner four image rotation
  const t5 = gsap.timeline({
    scrollTrigger: {
      trigger: ".banner-four",
      start: "top center",
      end: "+=600",
      markers: false,
      scrub: 1,
    },
  });
  if (window.innerWidth <= 767) {
    t5.to($animeCard, {
      rotationY: -180,
      height: "100vh",
      width: "100vw",
      left: "50%",
      top: "50%",
      yPercent: -50,
    });
  } else {
    t5.to($animeCard, {
      rotationY: -180,
      height: "100vh",
      width: "100vw",
      left: "50%",
    });
  }

  // Main wrapper card
  gsap.to(".anime-card", {
    ease: "linear",
    scrollTrigger: {
      trigger: ".anime-card",
      start: "top top",
      end: "top bottom",
      endTrigger: ".slider-card ",
      markers: false,
      pin: true,
      pinSpacing: false,
      scrub: 1,
    },
  });

  //slider-left img animation
  gsap.set(".slider-left img:first-child", { xPercent: 50 });
  gsap.set(".slider-left img:not(:first-child)", { xPercent: 100 });
  gsap.to(".slider-left .img-1", {
    ease: "none",
    xPercent: -95,
    scale: 0.6,
    scrollTrigger: {
      trigger: ".slider-card",
      start: "center+=" + 180 + " center",
      end: "center+=" + 900 + " center",
      markers: false,
      scrub: 1,
    },
  });
  gsap.to(".slider-left .img-2", {
    ease: "none",
    xPercent: -70,
    scale: 0.7,
    scrollTrigger: {
      trigger: ".slider-card",
      start: "center+=" + 360 + " center",
      end: "center+=" + 900 + " center",
      markers: false,
      scrub: 1,
    },
  });
  gsap.to(".slider-left .img-3", {
    ease: "none",
    xPercent: -40,
    scale: 0.8,
    scrollTrigger: {
      trigger: ".slider-card",
      start: "center+=" + 540 + " center",
      end: "center+=" + 900 + " center",
      markers: false,
      scrub: 1,
    },
  });
  gsap.to(".slider-left .img-4", {
    ease: "none",
    xPercent: -10,
    scale: 0.9,
    scrollTrigger: {
      trigger: ".slider-card",
      start: "center+=" + 720 + " center",
      end: "center+=" + 900 + " center",
      markers: false,
      scrub: 1,
    },
  });
  gsap.to(".slider-left .img-5", {
    ease: "none",
    xPercent: 20,
    scale: 1,
    scrollTrigger: {
      trigger: ".slider-card",
      start: "center+=" + 800 + " center",
      end: "center+=" + 900 + " center",
      markers: false,
      scrub: 1,
    },
  });

  // slider right img animation
  gsap.set(".slider-right img:first-child", { xPercent: -50 });
  gsap.set(".slider-right img:not(:first-child)", { xPercent: -100 });
  gsap.to(".slider-right .img-1", {
    ease: "none",
    xPercent: 95,
    scale: 0.6,
    scrollTrigger: {
      trigger: ".slider-card ",
      start: "center+=" + 180 + " center",
      end: "center+=" + 900 + " center",
      markers: false,
      scrub: 1,
    },
  });
  gsap.to(".slider-right .img-2", {
    ease: "none",
    xPercent: 70,
    scale: 0.7,
    scrollTrigger: {
      trigger: ".slider-card ",
      start: "center+=" + 360 + " center",
      end: "center+=" + 900 + " center",
      markers: false,
      scrub: 1,
    },
  });
  gsap.to(".slider-right .img-3", {
    ease: "none",
    xPercent: 40,
    scale: 0.8,
    scrollTrigger: {
      trigger: ".slider-card ",
      start: "center+=" + 540 + " center",
      end: "center+=" + 900 + " center",
      markers: false,
      scrub: 1,
    },
  });
  gsap.to(".slider-right .img-4", {
    ease: "none",
    xPercent: 10,
    scale: 0.9,
    scrollTrigger: {
      trigger: ".slider-card ",
      start: "center+=" + 720 + " center",
      end: "center+=" + 900 + " center",
      markers: false,
      scrub: 1,
    },
  });
  gsap.to(".slider-right .img-5", {
    ease: "none",
    xPercent: -20,
    scale: 1,
    scrollTrigger: {
      trigger: ".slider-card ",
      start: "center+=" + 800 + " center",
      end: "center+=" + 900 + " center",
      markers: false,
      scrub: 1,
    },
  });

  //slider card
  gsap.to(".slider-card", {
    ease: "linear",
    scrollTrigger: {
      trigger: ".slider-card",
      start: "center center",
      end: "+=1000",
      markers: false,
      pin: true,
      pinSpacing: true,
      scrub: 1,
    },
  });

  // image source changed
  gsap.to(".anime-card-front img", {
    attr: {
      src: "https://www.yudiz.com/codepen/gsap-landing-page/inosuke.jpg",
    },
    scrollTrigger: {
      trigger: ".banner-three",
      start: "top bottom",
      end: "top bottom",
      endTrigger: ".slider-card ",
      markers: false,
      scrub: 1,
    },
  });

  gsap.to(".anime-card-back img", {
    attr: { src: "https://www.yudiz.com/codepen/gsap-landing-page/nezuko.png" },
    scrollTrigger: {
      trigger: ".banner-four",
      start: "top bottom",
      end: "top bottom",
      endTrigger: ".slider-card ",
      markers: false,
      scrub: 1,
    },
  });
});

///////////////////////////
const cursor = document.querySelector(".cb-cursor");
window.onpointermove = (event) => {
  const { clientX, clientY } = event;
  cursor.animate(
    {
      left: `${clientX}px`,
      top: `${clientY}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
};
const elements = [...document.querySelectorAll("h2 div")];
elements.map((element) => {
  element.onmouseover = () => {
    cursor.classList.add("-video");
  };
  element.onmouseout = () => {
    cursor.classList.remove("-video");
  };
});

// --------------------------------------------------------------------------

// testimonial js

const slider = document.querySelector(".testimonial-slider");
const testimonials = document.querySelectorAll(".testimonial");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const dotsContainer = document.querySelector(".dots-container");

let currentIndex = 0;
let touchStartX = 0;
let touchEndX = 0;
let autoSlideInterval;

//* event listeners

function initApp() {
  slider.addEventListener("touchstart", handleTouchStart);
  slider.addEventListener("touchend", handleTouchEnd);
  slider.addEventListener("mouseover", stopAutoSlide);
  slider.addEventListener("mouseleave", startAutoSlide);
  nextBtn.addEventListener("click", nextTestimonial);
  prevBtn.addEventListener("click", prevTestimonial);
}

//* auto slide

function startAutoSlide() {
  autoSlideInterval = setInterval(nextTestimonial, 5000); // 5s
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

//* touch navigation

function handleTouchStart(event) {
  touchStartX = event.touches[0].clientX;
}

function handleTouchEnd(event) {
  touchEndX = event.changedTouches[0].clientX;

  handleTouchSwipe();
}

function handleTouchSwipe() {
  const swipeThreshold = 50; // swipe sensitivity

  if (touchStartX - touchEndX > swipeThreshold) {
    nextTestimonial(); // swipe left
  } else if (touchEndX - touchStartX > swipeThreshold) {
    prevTestimonial(); // swipe right
  }
}

//* dot navigation

function renderDotButtons() {
  for (let i = 0; i < testimonials.length; i++) {
    const button = document.createElement("button");
    button.classList.add("dot");
    button.classList.toggle("active", i === currentIndex);
    button.ariaLabel = `Jump to Testimonial ${i + 1}`;
    button.addEventListener("click", () => showTestimonial(i));
    dotsContainer.appendChild(button);
  }
}

//* slide functions

function showTestimonial(index) {
  currentIndex = index;

  // update slide position
  testimonials.forEach((testimonial) => {
    testimonial.style.transform = `translateX(${-index * 100}%)`;
  });

  // update active dot
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === currentIndex);
  });
}

function nextTestimonial() {
  const nextIndex = (currentIndex + 1) % testimonials.length;
  showTestimonial(nextIndex);
}

function prevTestimonial() {
  const prevIndex =
    (currentIndex - 1 + testimonials.length) % testimonials.length;
  showTestimonial(prevIndex);
}

//* initialize

document.addEventListener("DOMContentLoaded", function () {
  renderDotButtons();
  startAutoSlide();
  initApp();
});

function customCursor() {
  document.addEventListener("DOMContentLoaded", () => {
    const cursor = document.getElementById("custom-cursor");

    // Move the cursor
    document.addEventListener("mousemove", (e) => {
      cursor.style.left = `${e.clientX}px`;
      cursor.style.top = `${e.clientY}px`;
    });

    // Add hover effect for text elements
    const interactiveElements = document.querySelectorAll("a, button, .btn");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", () =>
        cursor.classList.add("hover-effect")
      );
      el.addEventListener("mouseleave", () =>
        cursor.classList.remove("hover-effect")
      );
    });

    // Add click effect
    document.addEventListener("mousedown", () =>
      cursor.classList.add("click-effect")
    );
    document.addEventListener("mouseup", () =>
      cursor.classList.remove("click-effect")
    );
  });
}
customCursor();
