function page1() {
  var tl = gsap.timeline();

  tl.from("#page1 h1", {
    y: 200,
    opacity: 0,
    duration: 1,
    stagger: 3,
  });
  tl.from("#page1 h3", {
    y: 200,
    opacity: 0,
    duration: 1,
    stagger: 0.5,
  });
}
page1();

function locoScroll() {
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
locoScroll();

function slick() {
  $(document).ready(function () {
    $(".client-slider").slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 900,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 4,
          },
        },
        {
          breakpoint: 520,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });
  });
}
slick();

function page2() {
  gsap.from("#page2 #page2-top", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page2-top",
      scroller: "#main",
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
  gsap.from("#page2 #page2-bottom", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page2-bottom",
      scroller: "#main",
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
}
page2();

function page3() {
  gsap.from("#page3 #page3-top", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page3-top",
      scroller: "#main",
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
  gsap.from("#page3 .mvtext h2", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: ".mvtext",
      scroller: "#main",
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
  gsap.from("#page3 .mvimg", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: ".mvimg",
      scroller: "#main",
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
}
page3();

function page4() {
  gsap.from("#page4 #page4-top", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page4-top",
      scroller: "#main",
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
  gsap.from("#page4 #value-image", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#value-image",
      scroller: "#main",
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
  gsap.from("#page4 #value-content", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#value-content",
      scroller: "#main",
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
}
page4();

function page5() {
  gsap.from("#page5 #page5-top", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page5-top",
      scroller: "#main",
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
  gsap.from("#page5 #choose-image", {
    x: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#choose-image",
      scroller: "#main",
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
  gsap.from("#page5 #choose-content", {
    x: -200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#choose-content",
      scroller: "#main",
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
}
page5();

function page6() {
  gsap.from("#page6 #page6-top", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page6-top",
      scroller: "#main",
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
  gsap.from("#page6 #process-content", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#process-content",
      scroller: "#main",
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
}
page6();

function page7() {
  gsap.from("#page7 #page7-top", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page7-top",
      scroller: "#main",
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
  gsap.from("#page7 .experties-heading", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: ".experties-heading",
      scroller: "#main",
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
  gsap.from("#page7 .experties-right-icons", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: ".experties-right-icons",
      scroller: "#main",
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
  gsap.from("#page7 .experties-right-icon-title", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: ".experties-right-icon-title",
      scroller: "#main",
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
  gsap.from("#page7 .experties-left-image", {
    x: -200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: ".experties-left-image",
      scroller: "#main",
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
}
page7();

function page8() {
  gsap.from("#page8 #page8-top", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page8-top",
      scroller: "#main",
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
  gsap.from("#page8 .slide-top", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: ".slide-top",
      scroller: "#main",
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
  gsap.from("#page8 .slide-right", {
    x: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: ".slide-right",
      scroller: "#main",
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
}
page8();

// function footer() {
//   gsap.from("#footer #footer-top", {
//     y: 200,
//     opacity: 0,
//     stagger: 2,
//     duration: 4,
//     scrollTrigger: {
//       trigger: "#footer-top",
//       scroller: "#main",
//       start: "top 80%",
//       end: "top 70%",
//       scrub: 3,
//     },
//   });
//   gsap.from("#footer .box", {
//     y: 200,
//     opacity: 0,
//     stagger: 2,
//     duration: 4,
//     scrollTrigger: {
//       trigger: ".box",
//       scroller: "#main",
//       start: "top 80%",
//       end: "top 80%",
//       scrub: 3,
//     },
//   });
// }
// footer();
