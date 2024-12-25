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
// ----------------------------------------------









// ---------- FAQ section animation ------------ 
var arrows = document.getElementsByClassName("iconfaq");
var faqs = document.getElementsByClassName("paragraphfaq");

for (let i = 0; i < arrows.length; i++) {
  arrows[i].addEventListener("click", function () {
    // Close all other sections
    for (let j = 0; j < faqs.length; j++) {
      if (j !== i) {
        faqs[j].classList.remove("faqtoggle");
        arrows[j].style.transform = "rotate(0deg)"; // Reset rotation
      }
    }

    // Toggle the clicked section
    faqs[i].classList.toggle("faqtoggle");

    // Toggle rotation based on the current state
    if (faqs[i].classList.contains("faqtoggle")) {
      arrows[i].style.transform = "rotate(585deg)";
    } else {
      arrows[i].style.transform = "rotate(0deg)";
    }
  });
}

// ---------- FAQ section animation End ------------

function locomotive() {
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
locomotive();

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
     /assets/service assets/Hero_Quick.mov Comp 1_00000.webp
/assets/service assets/Hero_Quick.mov Comp 1_00001.webp
/assets/service assets/Hero_Quick.mov Comp 1_00002.webp
/assets/service assets/Hero_Quick.mov Comp 1_00003.webp
/assets/service assets/Hero_Quick.mov Comp 1_00004.webp
/assets/service assets/Hero_Quick.mov Comp 1_00005.webp
/assets/service assets/Hero_Quick.mov Comp 1_00006.webp
/assets/service assets/Hero_Quick.mov Comp 1_00007.webp
/assets/service assets/Hero_Quick.mov Comp 1_00008.webp
/assets/service assets/Hero_Quick.mov Comp 1_00009.webp
/assets/service assets/Hero_Quick.mov Comp 1_00010.webp
/assets/service assets/Hero_Quick.mov Comp 1_00011.webp
/assets/service assets/Hero_Quick.mov Comp 1_00012.webp
/assets/service assets/Hero_Quick.mov Comp 1_00013.webp
/assets/service assets/Hero_Quick.mov Comp 1_00014.webp
/assets/service assets/Hero_Quick.mov Comp 1_00015.webp
/assets/service assets/Hero_Quick.mov Comp 1_00016.webp
/assets/service assets/Hero_Quick.mov Comp 1_00017.webp
/assets/service assets/Hero_Quick.mov Comp 1_00018.webp
/assets/service assets/Hero_Quick.mov Comp 1_00019.webp
/assets/service assets/Hero_Quick.mov Comp 1_00020.webp
/assets/service assets/Hero_Quick.mov Comp 1_00021.webp
/assets/service assets/Hero_Quick.mov Comp 1_00022.webp
/assets/service assets/Hero_Quick.mov Comp 1_00023.webp
/assets/service assets/Hero_Quick.mov Comp 1_00024.webp
/assets/service assets/Hero_Quick.mov Comp 1_00025.webp
/assets/service assets/Hero_Quick.mov Comp 1_00026.webp
/assets/service assets/Hero_Quick.mov Comp 1_00027.webp
/assets/service assets/Hero_Quick.mov Comp 1_00028.webp
/assets/service assets/Hero_Quick.mov Comp 1_00029.webp
/assets/service assets/Hero_Quick.mov Comp 1_00030.webp
/assets/service assets/Hero_Quick.mov Comp 1_00031.webp
/assets/service assets/Hero_Quick.mov Comp 1_00032.webp
/assets/service assets/Hero_Quick.mov Comp 1_00033.webp
/assets/service assets/Hero_Quick.mov Comp 1_00034.webp
/assets/service assets/Hero_Quick.mov Comp 1_00035.webp
/assets/service assets/Hero_Quick.mov Comp 1_00036.webp
/assets/service assets/Hero_Quick.mov Comp 1_00037.webp
/assets/service assets/Hero_Quick.mov Comp 1_00038.webp
/assets/service assets/Hero_Quick.mov Comp 1_00039.webp
/assets/service assets/Hero_Quick.mov Comp 1_00040.webp
/assets/service assets/Hero_Quick.mov Comp 1_00041.webp
/assets/service assets/Hero_Quick.mov Comp 1_00042.webp
/assets/service assets/Hero_Quick.mov Comp 1_00043.webp
/assets/service assets/Hero_Quick.mov Comp 1_00044.webp
/assets/service assets/Hero_Quick.mov Comp 1_00045.webp
/assets/service assets/Hero_Quick.mov Comp 1_00046.webp
/assets/service assets/Hero_Quick.mov Comp 1_00047.webp
/assets/service assets/Hero_Quick.mov Comp 1_00048.webp
/assets/service assets/Hero_Quick.mov Comp 1_00049.webp
/assets/service assets/Hero_Quick.mov Comp 1_00050.webp
/assets/service assets/Hero_Quick.mov Comp 1_00051.webp
/assets/service assets/Hero_Quick.mov Comp 1_00052.webp
/assets/service assets/Hero_Quick.mov Comp 1_00053.webp
/assets/service assets/Hero_Quick.mov Comp 1_00054.webp
/assets/service assets/Hero_Quick.mov Comp 1_00055.webp
/assets/service assets/Hero_Quick.mov Comp 1_00056.webp
/assets/service assets/Hero_Quick.mov Comp 1_00057.webp
/assets/service assets/Hero_Quick.mov Comp 1_00058.webp
/assets/service assets/Hero_Quick.mov Comp 1_00059.webp
/assets/service assets/Hero_Quick.mov Comp 1_00060.webp
/assets/service assets/Hero_Quick.mov Comp 1_00061.webp
/assets/service assets/Hero_Quick.mov Comp 1_00062.webp
/assets/service assets/Hero_Quick.mov Comp 1_00063.webp
/assets/service assets/Hero_Quick.mov Comp 1_00064.webp
/assets/service assets/Hero_Quick.mov Comp 1_00065.webp
/assets/service assets/Hero_Quick.mov Comp 1_00066.webp
/assets/service assets/Hero_Quick.mov Comp 1_00067.webp
/assets/service assets/Hero_Quick.mov Comp 1_00068.webp
/assets/service assets/Hero_Quick.mov Comp 1_00069.webp
/assets/service assets/Hero_Quick.mov Comp 1_00070.webp
/assets/service assets/Hero_Quick.mov Comp 1_00071.webp
/assets/service assets/Hero_Quick.mov Comp 1_00072.webp
/assets/service assets/Hero_Quick.mov Comp 1_00073.webp
/assets/service assets/Hero_Quick.mov Comp 1_00074.webp
/assets/service assets/Hero_Quick.mov Comp 1_00075.webp
/assets/service assets/Hero_Quick.mov Comp 1_00076.webp
/assets/service assets/Hero_Quick.mov Comp 1_00077.webp
/assets/service assets/Hero_Quick.mov Comp 1_00078.webp
/assets/service assets/Hero_Quick.mov Comp 1_00079.webp
/assets/service assets/Hero_Quick.mov Comp 1_00080.webp
/assets/service assets/Hero_Quick.mov Comp 1_00081.webp
/assets/service assets/Hero_Quick.mov Comp 1_00082.webp
/assets/service assets/Hero_Quick.mov Comp 1_00083.webp
/assets/service assets/Hero_Quick.mov Comp 1_00084.webp
/assets/service assets/Hero_Quick.mov Comp 1_00085.webp
/assets/service assets/Hero_Quick.mov Comp 1_00086.webp
/assets/service assets/Hero_Quick.mov Comp 1_00087.webp
/assets/service assets/Hero_Quick.mov Comp 1_00088.webp
/assets/service assets/Hero_Quick.mov Comp 1_00089.webp
/assets/service assets/Hero_Quick.mov Comp 1_00090.webp
/assets/service assets/Hero_Quick.mov Comp 1_00091.webp
/assets/service assets/Hero_Quick.mov Comp 1_00092.webp
/assets/service assets/Hero_Quick.mov Comp 1_00093.webp
/assets/service assets/Hero_Quick.mov Comp 1_00094.webp
/assets/service assets/Hero_Quick.mov Comp 1_00095.webp
/assets/service assets/Hero_Quick.mov Comp 1_00096.webp
/assets/service assets/Hero_Quick.mov Comp 1_00097.webp
/assets/service assets/Hero_Quick.mov Comp 1_00098.webp
/assets/service assets/Hero_Quick.mov Comp 1_00099.webp
/assets/service assets/Hero_Quick.mov Comp 1_00100.webp
/assets/service assets/Hero_Quick.mov Comp 1_00101.webp
/assets/service assets/Hero_Quick.mov Comp 1_00102.webp
/assets/service assets/Hero_Quick.mov Comp 1_00103.webp
/assets/service assets/Hero_Quick.mov Comp 1_00104.webp
/assets/service assets/Hero_Quick.mov Comp 1_00105.webp
/assets/service assets/Hero_Quick.mov Comp 1_00106.webp
/assets/service assets/Hero_Quick.mov Comp 1_00107.webp
/assets/service assets/Hero_Quick.mov Comp 1_00108.webp
/assets/service assets/Hero_Quick.mov Comp 1_00109.webp
/assets/service assets/Hero_Quick.mov Comp 1_00110.webp
/assets/service assets/Hero_Quick.mov Comp 1_00111.webp
/assets/service assets/Hero_Quick.mov Comp 1_00112.webp
/assets/service assets/Hero_Quick.mov Comp 1_00113.webp
/assets/service assets/Hero_Quick.mov Comp 1_00114.webp
/assets/service assets/Hero_Quick.mov Comp 1_00115.webp
/assets/service assets/Hero_Quick.mov Comp 1_00116.webp
/assets/service assets/Hero_Quick.mov Comp 1_00117.webp
/assets/service assets/Hero_Quick.mov Comp 1_00118.webp
/assets/service assets/Hero_Quick.mov Comp 1_00119.webp
/assets/service assets/Hero_Quick.mov Comp 1_00120.webp
/assets/service assets/Hero_Quick.mov Comp 1_00121.webp
/assets/service assets/Hero_Quick.mov Comp 1_00122.webp
/assets/service assets/Hero_Quick.mov Comp 1_00123.webp
/assets/service assets/Hero_Quick.mov Comp 1_00124.webp
/assets/service assets/Hero_Quick.mov Comp 1_00125.webp
/assets/service assets/Hero_Quick.mov Comp 1_00126.webp
/assets/service assets/Hero_Quick.mov Comp 1_00127.webp
/assets/service assets/Hero_Quick.mov Comp 1_00128.webp
/assets/service assets/Hero_Quick.mov Comp 1_00129.webp
/assets/service assets/Hero_Quick.mov Comp 1_00130.webp
/assets/service assets/Hero_Quick.mov Comp 1_00131.webp
/assets/service assets/Hero_Quick.mov Comp 1_00132.webp
/assets/service assets/Hero_Quick.mov Comp 1_00133.webp
/assets/service assets/Hero_Quick.mov Comp 1_00134.webp
/assets/service assets/Hero_Quick.mov Comp 1_00135.webp
/assets/service assets/Hero_Quick.mov Comp 1_00136.webp
/assets/service assets/Hero_Quick.mov Comp 1_00137.webp
/assets/service assets/Hero_Quick.mov Comp 1_00138.webp
/assets/service assets/Hero_Quick.mov Comp 1_00139.webp
/assets/service assets/Hero_Quick.mov Comp 1_00140.webp
/assets/service assets/Hero_Quick.mov Comp 1_00141.webp
/assets/service assets/Hero_Quick.mov Comp 1_00142.webp
/assets/service assets/Hero_Quick.mov Comp 1_00143.webp
/assets/service assets/Hero_Quick.mov Comp 1_00144.webp
/assets/service assets/Hero_Quick.mov Comp 1_00145.webp
/assets/service assets/Hero_Quick.mov Comp 1_00146.webp
/assets/service assets/Hero_Quick.mov Comp 1_00147.webp
/assets/service assets/Hero_Quick.mov Comp 1_00148.webp
/assets/service assets/Hero_Quick.mov Comp 1_00149.webp
/assets/service assets/Hero_Quick.mov Comp 1_00150.webp
/assets/service assets/Hero_Quick.mov Comp 1_00151.webp
/assets/service assets/Hero_Quick.mov Comp 1_00152.webp
/assets/service assets/Hero_Quick.mov Comp 1_00153.webp
/assets/service assets/Hero_Quick.mov Comp 1_00154.webp
/assets/service assets/Hero_Quick.mov Comp 1_00155.webp
/assets/service assets/Hero_Quick.mov Comp 1_00156.webp
/assets/service assets/Hero_Quick.mov Comp 1_00157.webp
/assets/service assets/Hero_Quick.mov Comp 1_00158.webp
/assets/service assets/Hero_Quick.mov Comp 1_00159.webp
/assets/service assets/Hero_Quick.mov Comp 1_00160.webp
/assets/service assets/Hero_Quick.mov Comp 1_00161.webp
/assets/service assets/Hero_Quick.mov Comp 1_00162.webp
/assets/service assets/Hero_Quick.mov Comp 1_00163.webp
/assets/service assets/Hero_Quick.mov Comp 1_00164.webp
/assets/service assets/Hero_Quick.mov Comp 1_00165.webp
/assets/service assets/Hero_Quick.mov Comp 1_00166.webp
/assets/service assets/Hero_Quick.mov Comp 1_00167.webp
/assets/service assets/Hero_Quick.mov Comp 1_00168.webp
/assets/service assets/Hero_Quick.mov Comp 1_00169.webp
/assets/service assets/Hero_Quick.mov Comp 1_00170.webp
/assets/service assets/Hero_Quick.mov Comp 1_00171.webp
/assets/service assets/Hero_Quick.mov Comp 1_00172.webp
/assets/service assets/Hero_Quick.mov Comp 1_00173.webp
/assets/service assets/Hero_Quick.mov Comp 1_00174.webp
/assets/service assets/Hero_Quick.mov Comp 1_00175.webp
/assets/service assets/Hero_Quick.mov Comp 1_00176.webp
/assets/service assets/Hero_Quick.mov Comp 1_00177.webp
/assets/service assets/Hero_Quick.mov Comp 1_00178.webp
/assets/service assets/Hero_Quick.mov Comp 1_00179.webp
/assets/service assets/Hero_Quick.mov Comp 1_00180.webp
/assets/service assets/Hero_Quick.mov Comp 1_00181.webp
/assets/service assets/Hero_Quick.mov Comp 1_00182.webp
/assets/service assets/Hero_Quick.mov Comp 1_00183.webp
/assets/service assets/Hero_Quick.mov Comp 1_00184.webp
/assets/service assets/Hero_Quick.mov Comp 1_00185.webp
/assets/service assets/Hero_Quick.mov Comp 1_00186.webp
/assets/service assets/Hero_Quick.mov Comp 1_00187.webp
/assets/service assets/Hero_Quick.mov Comp 1_00188.webp
/assets/service assets/Hero_Quick.mov Comp 1_00189.webp
/assets/service assets/Hero_Quick.mov Comp 1_00190.webp
/assets/service assets/Hero_Quick.mov Comp 1_00191.webp
/assets/service assets/Hero_Quick.mov Comp 1_00192.webp
/assets/service assets/Hero_Quick.mov Comp 1_00193.webp
/assets/service assets/Hero_Quick.mov Comp 1_00194.webp
/assets/service assets/Hero_Quick.mov Comp 1_00195.webp
/assets/service assets/Hero_Quick.mov Comp 1_00196.webp
/assets/service assets/Hero_Quick.mov Comp 1_00197.webp
/assets/service assets/Hero_Quick.mov Comp 1_00198.webp
/assets/service assets/Hero_Quick.mov Comp 1_00199.webp
/assets/service assets/Hero_Quick.mov Comp 1_00200.webp
/assets/service assets/Hero_Quick.mov Comp 1_00201.webp
/assets/service assets/Hero_Quick.mov Comp 1_00202.webp
/assets/service assets/Hero_Quick.mov Comp 1_00203.webp
/assets/service assets/Hero_Quick.mov Comp 1_00204.webp
/assets/service assets/Hero_Quick.mov Comp 1_00205.webp
/assets/service assets/Hero_Quick.mov Comp 1_00206.webp
/assets/service assets/Hero_Quick.mov Comp 1_00207.webp
/assets/service assets/Hero_Quick.mov Comp 1_00208.webp
/assets/service assets/Hero_Quick.mov Comp 1_00209.webp
/assets/service assets/Hero_Quick.mov Comp 1_00210.webp
/assets/service assets/Hero_Quick.mov Comp 1_00211.webp
/assets/service assets/Hero_Quick.mov Comp 1_00212.webp
/assets/service assets/Hero_Quick.mov Comp 1_00213.webp
/assets/service assets/Hero_Quick.mov Comp 1_00214.webp
/assets/service assets/Hero_Quick.mov Comp 1_00215.webp
/assets/service assets/Hero_Quick.mov Comp 1_00216.webp
/assets/service assets/Hero_Quick.mov Comp 1_00217.webp
/assets/service assets/Hero_Quick.mov Comp 1_00218.webp
/assets/service assets/Hero_Quick.mov Comp 1_00219.webp
/assets/service assets/Hero_Quick.mov Comp 1_00220.webp
/assets/service assets/Hero_Quick.mov Comp 1_00221.webp
/assets/service assets/Hero_Quick.mov Comp 1_00222.webp
/assets/service assets/Hero_Quick.mov Comp 1_00223.webp
/assets/service assets/Hero_Quick.mov Comp 1_00224.webp
/assets/service assets/Hero_Quick.mov Comp 1_00225.webp
/assets/service assets/Hero_Quick.mov Comp 1_00226.webp
/assets/service assets/Hero_Quick.mov Comp 1_00227.webp
/assets/service assets/Hero_Quick.mov Comp 1_00228.webp
/assets/service assets/Hero_Quick.mov Comp 1_00229.webp
/assets/service assets/Hero_Quick.mov Comp 1_00230.webp
/assets/service assets/Hero_Quick.mov Comp 1_00231.webp
/assets/service assets/Hero_Quick.mov Comp 1_00232.webp
/assets/service assets/Hero_Quick.mov Comp 1_00233.webp
/assets/service assets/Hero_Quick.mov Comp 1_00234.webp
/assets/service assets/Hero_Quick.mov Comp 1_00235.webp
/assets/service assets/Hero_Quick.mov Comp 1_00236.webp
/assets/service assets/Hero_Quick.mov Comp 1_00237.webp
/assets/service assets/Hero_Quick.mov Comp 1_00238.webp
/assets/service assets/Hero_Quick.mov Comp 1_00239.webp
/assets/service assets/Hero_Quick.mov Comp 1_00240.webp
/assets/service assets/Hero_Quick.mov Comp 1_00241.webp
/assets/service assets/Hero_Quick.mov Comp 1_00242.webp
/assets/service assets/Hero_Quick.mov Comp 1_00243.webp
/assets/service assets/Hero_Quick.mov Comp 1_00244.webp
/assets/service assets/Hero_Quick.mov Comp 1_00245.webp
/assets/service assets/Hero_Quick.mov Comp 1_00246.webp
/assets/service assets/Hero_Quick.mov Comp 1_00247.webp
/assets/service assets/Hero_Quick.mov Comp 1_00248.webp
/assets/service assets/Hero_Quick.mov Comp 1_00249.webp
/assets/service assets/Hero_Quick.mov Comp 1_00250.webp
/assets/service assets/Hero_Quick.mov Comp 1_00251.webp
/assets/service assets/Hero_Quick.mov Comp 1_00252.webp
/assets/service assets/Hero_Quick.mov Comp 1_00253.webp
/assets/service assets/Hero_Quick.mov Comp 1_00254.webp
/assets/service assets/Hero_Quick.mov Comp 1_00255.webp
/assets/service assets/Hero_Quick.mov Comp 1_00256.webp
/assets/service assets/Hero_Quick.mov Comp 1_00257.webp
/assets/service assets/Hero_Quick.mov Comp 1_00258.webp
/assets/service assets/Hero_Quick.mov Comp 1_00259.webp
/assets/service assets/Hero_Quick.mov Comp 1_00260.webp
/assets/service assets/Hero_Quick.mov Comp 1_00261.webp
/assets/service assets/Hero_Quick.mov Comp 1_00262.webp
/assets/service assets/Hero_Quick.mov Comp 1_00263.webp
/assets/service assets/Hero_Quick.mov Comp 1_00264.webp
/assets/service assets/Hero_Quick.mov Comp 1_00265.webp
/assets/service assets/Hero_Quick.mov Comp 1_00266.webp
/assets/service assets/Hero_Quick.mov Comp 1_00267.webp
/assets/service assets/Hero_Quick.mov Comp 1_00268.webp
/assets/service assets/Hero_Quick.mov Comp 1_00269.webp
/assets/service assets/Hero_Quick.mov Comp 1_00270.webp
/assets/service assets/Hero_Quick.mov Comp 1_00271.webp
/assets/service assets/Hero_Quick.mov Comp 1_00272.webp
/assets/service assets/Hero_Quick.mov Comp 1_00273.webp
/assets/service assets/Hero_Quick.mov Comp 1_00274.webp
/assets/service assets/Hero_Quick.mov Comp 1_00275.webp
/assets/service assets/Hero_Quick.mov Comp 1_00276.webp
/assets/service assets/Hero_Quick.mov Comp 1_00277.webp
/assets/service assets/Hero_Quick.mov Comp 1_00278.webp
/assets/service assets/Hero_Quick.mov Comp 1_00279.webp
/assets/service assets/Hero_Quick.mov Comp 1_00280.webp
/assets/service assets/Hero_Quick.mov Comp 1_00281.webp
/assets/service assets/Hero_Quick.mov Comp 1_00282.webp
/assets/service assets/Hero_Quick.mov Comp 1_00283.webp
/assets/service assets/Hero_Quick.mov Comp 1_00284.webp
/assets/service assets/Hero_Quick.mov Comp 1_00285.webp
/assets/service assets/Hero_Quick.mov Comp 1_00286.webp
/assets/service assets/Hero_Quick.mov Comp 1_00287.webp
/assets/service assets/Hero_Quick.mov Comp 1_00288.webp
/assets/service assets/Hero_Quick.mov Comp 1_00289.webp
/assets/service assets/Hero_Quick.mov Comp 1_00290.webp
/assets/service assets/Hero_Quick.mov Comp 1_00291.webp
/assets/service assets/Hero_Quick.mov Comp 1_00292.webp
/assets/service assets/Hero_Quick.mov Comp 1_00293.webp
/assets/service assets/Hero_Quick.mov Comp 1_00294.webp
/assets/service assets/Hero_Quick.mov Comp 1_00295.webp
/assets/service assets/Hero_Quick.mov Comp 1_00296.webp
/assets/service assets/Hero_Quick.mov Comp 1_00297.webp
/assets/service assets/Hero_Quick.mov Comp 1_00298.webp
/assets/service assets/Hero_Quick.mov Comp 1_00299.webp

 `;
  return data.split("\n")[index];
}

const frameCount = 300;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#hero>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#hero>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});

gsap.to("#hero1", {
  scrollTrigger: {
    trigger: `#hero1`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#hero2", {
  scrollTrigger: {
    trigger: `#hero2`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});
gsap.to("#hero3", {
  scrollTrigger: {
    trigger: `#hero3`,
    start: `top top`,
    end: `bottom top`,
    pin: true,
    scroller: `#main`,
  },
});







// ------------------------------------- 
function page2Animation() {
  gsap.from("#page2 .heading", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: ".heading",
      scroller: "#main",
      start: "top 60%",
      end: "top 90%",
      scrub: 3,

    },
  });
  gsap.from("#page2 .sub-heading", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: ".sub-heading",
      scroller: "#main",
      start: "top 70%",
      end: "top 90%",
      scrub: 3,
    },
  });
  gsap.from("#page2 #right", {
    x: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#right",
      scroller: "#main",
      start: "top 60%",
      end: "top 90%",
      scrub: 3,
    },
  });
}
page2Animation();

function page3Animation() {
  gsap.from("#page3 .page3-heading", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page3",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 3,
    },
  });
  gsap.from("#page3 .presence", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 7,
    scrollTrigger: {
      trigger: ".presence",
      scroller: "#main",
      start: "top 70%",
      end: "top 80%",
      scrub: 5,
    },
  });
  
}
page3Animation();

function page4Animation() {
  gsap.from("#page4 #page4-heading", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page4-heading",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 3,
    },
  });
  gsap.from("#page4 #page4-subheading", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page4-subheading",
      scroller: "#main",
      start: "top 70%",
      end: "top 60%",
      scrub: 5,
    },
  });
  gsap.from("#page4 .page4image", {
    x: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: ".page4image",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 5,
    },
  });
}
page4Animation();

function page5Animation() {
  gsap.from("#page5 .page5-heading", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 3,
    },
  });
  gsap.from("#page5 .topic", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 7,
    scrollTrigger: {
      trigger: ".topic",
      scroller: "#main",
      start: "top 70%",
      end: "top 80%",
      scrub: 5,
    },
  });
}
page5Animation();

function page6Animation() {
  gsap.from("#page6 .page6-heading", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page6",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 3,
    },
  });
  gsap.from("#page6 .technology", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: ".technology",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 3,
    },
  });
  gsap.from("#page6 .technology img", {
    x: 200,
    opacity: 0,
    stagger: 2,
    duration: 7,
    scrollTrigger: {
      trigger: ".technology",
      scroller: "#main",
      start: "top 70%",
      end: "top 90%",
      scrub: 3,
    },
  });
}
page6Animation();

function servicesAnimation() {
  gsap.from("#page-otherservices .otherservices-heading", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page-otherservices",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 3,
    },
  });
  gsap.from("#page-otherservices .service", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 7,
    scrollTrigger: {
      trigger: ".service",
      scroller: "#main",
      start: "top 70%",
      end: "top 80%",
      scrub: 5,
    },
  });
}
servicesAnimation();

function page7Animation() {
  gsap.from("#page7 #page7-heading", {
    y: 300,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page7",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 3,
    },
  });
  gsap.from("#page7 #faq", {
    y: 500,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page7",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 5,
    },
  });
}
page7Animation();

function page8Animation() {
  gsap.from("#page8 #page8-heading", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 3,
    },
  });
  gsap.from("#page8 .input-container", {
    y: 200,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 3,
    },
  });
  gsap.from("#page8 #contact-button", {
    y: 500,
    opacity: 0,
    stagger: 2,
    duration: 4,
    scrollTrigger: {
      trigger: "#page8",
      scroller: "#main",
      start: "top 60%",
      end: "top 80%",
      scrub: 3,
    },
  });
}
page8Animation();