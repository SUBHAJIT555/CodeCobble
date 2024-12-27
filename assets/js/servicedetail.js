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

// const canvas = document.querySelector("canvas");
// const context = canvas.getContext("2d");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// window.addEventListener("resize", function () {
//   canvas.width = window.innerWidth;
//   canvas.height = window.innerHeight;
//   render();
// });

// function files(index) {
//   var data = `
//      /assets/canvas-asstes/homepageCanvas2/sequence_00000.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00001.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00002.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00003.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00004.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00005.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00006.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00007.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00008.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00009.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00010.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00011.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00012.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00013.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00014.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00015.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00016.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00017.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00018.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00019.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00020.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00021.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00022.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00023.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00024.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00025.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00026.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00027.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00028.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00029.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00030.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00031.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00032.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00033.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00034.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00035.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00036.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00037.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00038.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00039.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00040.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00041.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00042.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00043.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00044.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00045.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00046.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00047.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00048.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00049.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00050.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00051.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00052.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00053.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00054.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00055.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00056.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00057.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00058.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00059.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00060.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00061.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00062.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00063.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00064.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00065.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00066.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00067.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00068.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00069.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00070.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00071.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00072.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00073.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00074.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00075.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00076.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00077.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00078.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00079.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00080.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00081.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00082.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00083.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00084.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00085.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00086.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00087.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00088.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00089.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00090.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00091.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00092.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00093.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00094.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00095.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00096.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00097.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00098.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00099.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00100.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00101.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00102.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00103.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00104.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00105.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00106.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00107.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00108.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00109.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00110.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00111.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00112.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00113.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00114.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00115.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00116.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00117.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00118.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00119.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00120.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00121.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00122.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00123.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00124.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00125.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00126.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00127.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00128.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00129.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00130.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00131.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00132.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00133.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00134.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00135.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00136.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00137.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00138.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00139.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00140.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00141.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00142.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00143.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00144.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00145.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00146.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00147.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00148.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00149.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00150.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00151.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00152.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00153.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00154.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00155.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00156.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00157.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00158.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00159.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00160.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00161.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00162.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00163.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00164.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00165.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00166.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00167.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00168.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00169.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00170.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00171.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00172.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00173.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00174.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00175.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00176.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00177.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00178.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00179.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00180.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00181.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00182.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00183.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00184.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00185.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00186.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00187.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00188.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00189.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00190.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00191.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00192.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00193.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00194.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00195.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00196.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00197.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00198.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00199.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00200.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00201.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00202.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00203.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00204.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00205.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00206.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00207.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00208.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00209.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00210.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00211.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00212.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00213.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00214.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00215.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00216.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00217.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00218.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00219.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00220.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00221.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00222.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00223.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00224.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00225.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00226.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00227.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00228.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00229.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00230.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00231.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00232.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00233.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00234.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00235.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00236.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00237.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00238.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00239.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00240.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00241.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00242.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00243.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00244.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00245.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00246.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00247.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00248.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00249.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00250.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00251.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00252.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00253.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00254.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00255.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00256.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00257.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00258.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00259.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00260.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00261.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00262.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00263.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00264.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00265.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00266.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00267.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00268.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00269.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00270.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00271.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00272.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00273.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00274.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00275.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00276.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00277.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00278.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00279.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00280.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00281.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00282.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00283.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00284.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00285.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00286.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00287.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00288.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00289.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00290.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00291.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00292.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00293.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00294.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00295.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00296.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00297.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00298.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00299.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00300.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00301.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00302.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00303.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00304.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00305.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00306.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00307.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00308.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00309.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00310.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00311.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00312.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00313.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00314.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00315.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00316.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00317.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00318.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00319.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00320.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00321.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00322.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00323.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00324.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00325.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00326.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00327.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00328.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00329.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00330.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00331.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00332.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00333.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00334.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00335.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00336.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00337.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00338.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00339.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00340.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00341.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00342.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00343.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00344.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00345.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00346.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00347.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00348.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00349.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00350.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00351.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00352.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00353.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00354.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00355.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00356.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00357.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00358.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00359.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00360.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00361.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00362.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00363.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00364.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00365.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00366.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00367.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00368.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00369.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00370.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00371.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00372.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00373.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00374.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00375.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00376.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00377.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00378.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00379.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00380.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00381.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00382.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00383.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00384.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00385.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00386.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00387.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00388.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00389.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00390.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00391.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00392.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00393.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00394.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00395.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00396.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00397.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00398.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00399.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00400.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00401.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00402.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00403.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00404.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00405.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00406.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00407.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00408.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00409.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00410.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00411.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00412.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00413.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00414.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00415.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00416.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00417.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00418.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00419.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00420.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00421.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00422.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00423.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00424.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00425.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00426.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00427.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00428.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00429.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00430.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00431.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00432.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00433.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00434.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00435.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00436.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00437.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00438.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00439.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00440.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00441.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00442.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00443.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00444.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00445.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00446.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00447.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00448.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00449.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00450.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00451.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00452.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00453.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00454.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00455.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00456.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00457.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00458.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00459.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00460.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00461.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00462.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00463.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00464.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00465.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00466.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00467.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00468.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00469.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00470.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00471.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00472.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00473.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00474.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00475.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00476.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00477.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00478.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00479.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00480.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00481.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00482.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00483.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00484.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00485.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00486.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00487.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00488.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00489.webp
// /assets/canvas-asstes/homepageCanvas2/sequence_00490.webp

//  `;
//   return data.split("\n")[index];
// }

// const frameCount = 491;

// const images = [];
// const imageSeq = {
//   frame: 1,
// };

// for (let i = 0; i < frameCount; i++) {
//   const img = new Image();
//   img.src = files(i);
//   images.push(img);
// }


// ----- hero section parrallax effect -----

document.addEventListener("mousemove", move);
function move(e) {
  this.querySelectorAll(".move").forEach((layer) => {
    const speed = layer.getAttribute("data-speed");

    const x = (window.innerWidth - e.pageX * speed) / 120;
    const y = (window.innerHeight - e.pageY * speed) / 120;

    layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
  });
}

/*===== GSAP ANIMATION =====*/

// HOME
gsap.from(".home__title", { opacity: 0, duration: 1, delay: 1.6, y: 30 });
gsap.from(".home__description", {
  opacity: 0,
  duration: 1,
  delay: 1.8,
  y: 30,
});
gsap.from(".home__button", {
  opacity: 0,
  duration: 1,
  delay: 2.1,
  y: 30,
});
gsap.from(".home__img", { opacity: 0, duration: 1, delay: 1.3, y: 30 });

// gsap.to(imageSeq, {
//   frame: frameCount - 1,
//   snap: "frame",
//   ease: `none`,
//   scrollTrigger: {
//     scrub: 5,
//     trigger: `#hero>canvas`,
//     start: `top top`,
//     end: `600% top`,
//     scroller: `#main`,
//   },
//   onUpdate: render,
// });

// images[1].onload = render;

// function render() {
//   scaleImage(images[imageSeq.frame], context);
// }

// function scaleImage(img, ctx) {
//   var canvas = ctx.canvas;
//   var hRatio = canvas.width / img.width;
//   var vRatio = canvas.height / img.height;
//   var ratio = Math.max(hRatio, vRatio);
//   var centerShift_x = (canvas.width - img.width * ratio) / 2;
//   var centerShift_y = (canvas.height - img.height * ratio) / 2;
//   ctx.clearRect(0, 0, canvas.width, canvas.height);
//   ctx.drawImage(
//     img,
//     0,
//     0,
//     img.width,
//     img.height,
//     centerShift_x,
//     centerShift_y,
//     img.width * ratio,
//     img.height * ratio
//   );
// }
// ScrollTrigger.create({
//   trigger: "#hero>canvas",
//   pin: true,
//   // markers:true,
//   scroller: `#main`,
//   start: `top top`,
//   end: `300% top`,
// });

// gsap.to("#hero1", {
//   scrollTrigger: {
//     trigger: `#hero1`,
//     start: `top top`,
//     end: `bottom top`,
//     // pin: true,
//     scroller: `#main`,
//   },
// });
// gsap.to("#hero2", {
//   scrollTrigger: {
//     trigger: `#hero2`,
//     start: `top top`,
//     end: `bottom top`,
//     // pin: true,
//     scroller: `#main`,
//   },
// });
// gsap.to("#hero3", {
//   scrollTrigger: {
//     trigger: `#hero3`,
//     start: `top top`,
//     end: `bottom top`,
//     // pin: true,
//     scroller: `#main`,
//   },
// });

// -------------------------------------
function page2Animation() {
  console.log("in page2Animation");
  gsap.from("#page2 .heading", {
    y: 200,
    // scale: 0.5,
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
    scale: 0.1,
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
    // y: 200,
    scale: 0.5,
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
