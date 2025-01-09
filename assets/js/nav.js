const ham = document.getElementById("ham");
const svgContainer = document.getElementById("hamburger-icon");
const nav = document.getElementById("nav");

// SVG paths
const hamburgerSVG = `<path d="M120-240v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z"/>`;
const closeSVG = `<path d="m249-207-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>`;

let isOpen = false;

// Hamburger menu toggle
ham.addEventListener("click", () => {
  isOpen = !isOpen;
  svgContainer.style.transition = "transform 0.3s ease, opacity 0.3s ease";
  svgContainer.innerHTML = isOpen ? closeSVG : hamburgerSVG;
  svgContainer.style.transform = isOpen ? "rotate(90deg)" : "rotate(0deg)";
  svgContainer.style.opacity = isOpen ? "0.8" : "1";
  nav.style.transform = isOpen ? "translateX(0)" : "translateX(-100%)";
});

// Submenu toggle
const opensub = document.querySelectorAll(".opensub");
const submenu = document.querySelectorAll(".submenuopen");

opensub.forEach((toggle, index) => {
  toggle.addEventListener("click", () => {
    const isActive = submenu[index].classList.contains("subtoggle");

    submenu.forEach((menu) => menu.classList.remove("subtoggle"));
    opensub.forEach((icon) => icon.classList.remove("icon-rotated"));

    if (!isActive) {
      submenu[index].classList.add("subtoggle");
      toggle.classList.add("icon-rotated");
    }
  });
});

function data() {
  return {
    scrollIns: false,
  };
}
function mounted() {
  document.addEventListener("DOMContentLoaded", () => {
    initScroll();
  });

  //   $nextTick(() => {
  //     initScroll();
  //   });
}

function initScroll() {
  const scrollContainer = document.querySelector("[data-scroll-container]");
  if (!scrollContainer) {
    console.error("Scroll container not found");
    return;
  }

  const hamburger = document.getElementById("hamburger");
  const scroll = new LocomotiveScroll({
    el: scrollContainer,
    smooth: true,
    smoothMobile: true,
    getDirection: true,
    getSpeed: true,
  });

  scroll.on("scroll", (args) => {
    if (Math.round(args.scroll.y) > 0) {
      hamburger.classList.add("navbar-scrolled");
      // this.scrollIns = true;
    } else {
      // this.scrollIns = false;
      hamburger.classList.remove("navbar-scrolled");
    }
  });

  setTimeout(() => {
    let target = document.getElementById("main");
    if (target) {
      scroll.scrollTo(target);
    }
  }, 5000);
}

data();
mounted();

function scroll() {
  console.log(hamburger);
  console.log("scrolling" + window.scrollY);
  // Add an event listener for the scroll event
  window.addEventListener("scroll", () => {
    console.log("scrolling" + window.scrollY);
    // Check if the page has been scrolled from the top
    if (window.scrollY > 0) {
      // Add the 'scrolled' class
    } else {
      // Remove the 'scrolled' class
    }
  });
}
scroll();
