function page1() {
  var tl = gsap.timeline();
  tl.from("#page1 .box-image", {
    y: 200,
    opacity: 0,
    duration: 0.5,
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


function page2(){
  gsap.from("#page2 #page2-left", {
    x: -200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page2-left",
      scroller: "#main",
      start: "top 80%",
      end: "top 60%",
      scrub: 3,
    },
  });
  gsap.from("#page2 #page2-right", {
    x: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page2-right",
      scroller: "#main",
      start: "top 80%",
      end: "top 60%",
      scrub: 3,
    },
  });
}
page2();

function page3(){
  gsap.from("#page3 .page3-box-even", {
    y: -200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: ".page3-box-even",
      scroller: "#main",
      start: "top 80%",
      end: "top 70%",
      scrub: 3,
    },
  });
  gsap.from("#page3 .page3-box", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: ".page3-box",
      scroller: "#main",
      start: "top 80%",
      end: "top 60%",
      scrub: 3,
    },
  });
}
page3();

gsap.from("#page4 #page4-left", {
  x: 200,
  opacity: 0,
  stagger: 2,
  duration: 4,
  scrollTrigger: {
    trigger: "#page4-left",
    scroller: "#main",
    start: "top 80%",
    end: "top 60%",
    scrub: 3,
  },
});
gsap.from("#page4 #page4-right", {
  x: -200,
  opacity: 0,
  stagger: 2,
  duration: 4,
  scrollTrigger: {
    trigger: "#page4-right",
    scroller: "#main",
    start: "top 80%",
    end: "top 60%",
    scrub: 3,
  },
});