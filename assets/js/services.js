function loco(){
    gsap.registerPlugin(ScrollTrigger);


const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


ScrollTrigger.addEventListener("refresh", () => locoScroll.update());


ScrollTrigger.refresh();
}
loco()


gsap.from(".bottom-page1-inner h4",{
  y:80,
  opacity:0,
  duration:0.5,
  delay:1,
});
gsap.from(".bottom-page1 h1", {
  x: -100,
  opacity: 0,
  duration: 1,
  delay: 1,
});


var clutter = "";

document.querySelector("#page2>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page2>h1").innerHTML = clutter;
})



gsap.to("#page2>h1>span",{
    scrollTrigger:{
        trigger:`#page2>h1>span`,
        start:`top bottom`,
        end:`bottom top`,
        scroller:`#main`,
        scrub:.5,
    },
    stagger:.2,
    color:`white`
})



function canvas(){
const canvas = document.querySelector("#page3>canvas");
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
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00000.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00000.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00000.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00001.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00002.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00003.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00004.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00005.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00006.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00007.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00008.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00009.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00010.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00011.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00012.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00013.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00014.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00015.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00016.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00017.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00018.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00019.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00020.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00021.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00022.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00023.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00024.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00025.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00026.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00027.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00028.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00029.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00030.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00031.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00032.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00033.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00034.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00035.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00036.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00037.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00038.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00039.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00040.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00041.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00042.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00043.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00044.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00045.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00046.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00047.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00048.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00049.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00050.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00051.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00052.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00053.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00054.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00055.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00056.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00057.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00058.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00059.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00060.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00061.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00062.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00063.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00064.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00065.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00066.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00067.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00068.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00069.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00070.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00071.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00072.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00073.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00074.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00075.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00076.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00077.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00078.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00079.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00080.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00081.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00082.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00083.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00084.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00085.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00086.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00087.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00088.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00089.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00090.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00091.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00092.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00093.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00094.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00095.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00096.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00097.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00098.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00099.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00100.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00101.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00102.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00103.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00104.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00105.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00106.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00107.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00108.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00109.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00110.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00111.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00112.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00113.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00114.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00115.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00116.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00117.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00118.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00119.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00120.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00121.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00122.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00123.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00124.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00125.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00126.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00127.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00128.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00129.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00130.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00131.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00132.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00133.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00134.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00135.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00136.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00137.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00138.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00139.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00140.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00141.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00142.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00143.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00144.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00145.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00146.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00147.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00148.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00149.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00150.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00151.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00152.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00153.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00154.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00155.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00156.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00157.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00158.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00159.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00160.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00161.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00162.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00163.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00164.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00165.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00166.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00167.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00168.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00169.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00170.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00171.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00172.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00173.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00174.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00175.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00176.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00177.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00178.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00179.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00180.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00181.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00182.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00183.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00184.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00185.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00186.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00187.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00188.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00189.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00190.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00191.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00192.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00193.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00194.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00195.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00196.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00197.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00198.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00199.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00200.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00201.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00202.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00203.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00204.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00205.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00206.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00207.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00208.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00209.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00210.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00211.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00212.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00213.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00214.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00215.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00216.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00217.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00218.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00219.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00220.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00221.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00222.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00223.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00224.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00225.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00226.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00227.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00228.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00229.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00230.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00231.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00232.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00233.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00234.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00235.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00236.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00237.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00238.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00239.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00240.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00241.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00242.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00243.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00244.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00245.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00246.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00247.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00248.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00249.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00250.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00251.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00252.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00253.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00254.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00255.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00256.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00257.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00258.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00259.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00260.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00261.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00262.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00263.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00264.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00265.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00266.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00267.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00268.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00269.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00270.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00271.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00272.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00273.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00274.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00275.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00276.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00277.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00278.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00279.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00280.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00281.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00282.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00283.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00284.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00285.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00286.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00287.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00288.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00289.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00290.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00291.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00292.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00293.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00294.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00295.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00296.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00297.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00298.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00299.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00300.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00301.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00302.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00303.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00304.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00305.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00306.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00307.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00308.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00309.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00310.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00311.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00312.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00313.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00314.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00315.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00316.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00317.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00318.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00319.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00320.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00321.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00322.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00323.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00324.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00325.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00326.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00327.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00328.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00329.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00330.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00331.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00332.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00333.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00334.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00335.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00336.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00337.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00338.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00339.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00340.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00341.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00342.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00343.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00344.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00345.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00346.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00347.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00348.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00349.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00350.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00351.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00352.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00353.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00354.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00355.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00356.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00357.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00358.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00359.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00360.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00361.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00362.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00363.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00364.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00365.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00366.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00367.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00368.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00369.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00370.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00371.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00372.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00373.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00374.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00375.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00376.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00377.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00378.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00379.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00380.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00381.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00382.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00383.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00384.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00385.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00386.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00387.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00388.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00389.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00390.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00391.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00392.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00393.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00394.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00395.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00396.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00397.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00398.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00399.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00400.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00401.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00402.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00403.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00404.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00405.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00406.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00407.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00408.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00409.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00410.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00411.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00412.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00413.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00414.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00415.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00416.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00417.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00418.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00419.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00420.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00421.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00422.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00423.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00424.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00425.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00426.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00427.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00428.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00429.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00430.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00431.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00432.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00433.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00434.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00435.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00436.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00437.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00438.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00439.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00440.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00441.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00442.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00443.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00444.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00445.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00446.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00447.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00448.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00449.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00450.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00451.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00452.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00453.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00454.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00455.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00456.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00457.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00458.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00459.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00460.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00461.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00462.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00463.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00464.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00465.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00466.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00467.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00468.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00469.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00470.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00471.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00472.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00473.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00474.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00475.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00476.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00477.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00478.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00479.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00480.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00481.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00482.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00483.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00484.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00485.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00486.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00487.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00488.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00489.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00490.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00491.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00492.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00493.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00494.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00495.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00496.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00497.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00498.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00499.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00500.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00501.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00502.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00503.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00504.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00505.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00506.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00507.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00508.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00509.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00510.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00511.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00512.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00513.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00514.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00515.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00516.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00517.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00518.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00519.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00520.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00521.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00522.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00523.webp
/assets/serviceAssetsVI/serviceCanvas1/Comp 1_00524.webp


 `;
  return data.split("\n")[index];
}

const frameCount = 525;

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
    scrub: 0.5,
    trigger: `#page3`,
    start: `top top`,
    end: `250% top`,
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

  trigger: "#page3",
  pin: true,
  scroller: `#main`,
  start: `top top`,
  end: `250% top`,
});
}
canvas()






var clutter = "";

document.querySelector("#page4>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page4>h1").innerHTML = clutter;
})

gsap.to("#page4>h1>span",{
  scrollTrigger:{
      trigger:`#page4>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})







function canvas1(){
  const canvas = document.querySelector("#page5>canvas");
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
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00000.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00001.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00002.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00003.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00004.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00005.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00006.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00007.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00008.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00009.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00010.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00011.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00012.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00013.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00014.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00015.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00016.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00017.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00018.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00019.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00020.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00021.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00022.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00023.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00024.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00025.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00026.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00027.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00028.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00029.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00030.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00031.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00032.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00033.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00034.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00035.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00036.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00037.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00038.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00039.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00040.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00041.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00042.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00043.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00044.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00045.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00046.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00047.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00048.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00049.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00050.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00051.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00052.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00053.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00054.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00055.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00056.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00057.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00058.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00059.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00060.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00061.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00062.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00063.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00064.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00065.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00066.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00067.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00068.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00069.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00070.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00071.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00072.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00073.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00074.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00075.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00076.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00077.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00078.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00079.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00080.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00081.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00082.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00083.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00084.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00085.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00086.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00087.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00088.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00089.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00090.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00091.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00092.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00093.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00094.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00095.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00096.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00097.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00098.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00099.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00100.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00101.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00102.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00103.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00104.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00105.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00106.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00107.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00108.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00109.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00110.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00111.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00112.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00113.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00114.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00115.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00116.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00117.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00118.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00119.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00120.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00121.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00122.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00123.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00124.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00125.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00126.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00127.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00128.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00129.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00130.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00131.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00132.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00133.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00134.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00135.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00136.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00137.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00138.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00139.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00140.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00141.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00142.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00143.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00144.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00145.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00146.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00147.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00148.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00149.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00150.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00151.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00152.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00153.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00154.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00155.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00156.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00157.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00158.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00159.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00160.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00161.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00162.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00163.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00164.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00165.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00166.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00167.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00168.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00169.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00170.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00171.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00172.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00173.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00174.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00175.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00176.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00177.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00178.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00179.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00180.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00181.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00182.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00183.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00184.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00185.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00186.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00187.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00188.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00189.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00190.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00191.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00192.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00193.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00194.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00195.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00196.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00197.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00198.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00199.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00200.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00201.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00202.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00203.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00204.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00205.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00206.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00207.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00208.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00209.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00210.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00211.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00212.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00213.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00214.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00215.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00216.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00217.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00218.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00219.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00220.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00221.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00222.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00223.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00224.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00225.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00226.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00227.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00228.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00229.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00230.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00231.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00232.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00233.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00234.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00235.webp
/assets/serviceAssetsVI/serviceCanvas2/Service_canvas_000_00236.webp

`;
return data.split("\n")[index];
}

const frameCount = 237;

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
  scrub: .5,
  trigger: `#page5`,
  start: `top top`,
  end: `250% top`,
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

trigger: "#page5",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas1()




var clutter = "";

document.querySelector("#page6>h1").textContent.split("").forEach(function(dets){
    clutter += `<span>${dets}</span>`

    document.querySelector("#page6>h1").innerHTML = clutter;
})

gsap.to("#page6>h1>span",{
  scrollTrigger:{
      trigger:`#page6>h1>span`,
      start:`top bottom`,
      end:`bottom top`,
      scroller:`#main`,
      scrub:.5,
  },
  stagger:.2,
  color:`#fff`
})






function canvas2(){
  const canvas = document.querySelector("#page7>canvas");
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

/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00000.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00001.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00002.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00003.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00004.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00005.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00006.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00007.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00008.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00009.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00010.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00011.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00012.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00013.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00014.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00015.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00016.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00017.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00018.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00019.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00020.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00021.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00022.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00023.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00024.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00025.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00026.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00027.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00028.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00029.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00030.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00031.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00032.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00033.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00034.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00035.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00036.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00037.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00038.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00039.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00040.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00041.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00042.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00043.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00044.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00045.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00046.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00047.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00048.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00049.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00050.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00051.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00052.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00053.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00054.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00055.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00056.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00057.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00058.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00059.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00060.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00061.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00062.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00063.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00064.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00065.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00066.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00067.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00068.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00069.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00070.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00071.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00072.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00073.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00074.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00075.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00076.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00077.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00078.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00079.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00080.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00081.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00082.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00083.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00084.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00085.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00086.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00087.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00088.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00089.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00090.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00091.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00092.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00093.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00094.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00095.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00096.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00097.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00098.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00099.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00100.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00101.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00102.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00103.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00104.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00105.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00106.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00107.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00108.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00109.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00110.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00111.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00112.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00113.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00114.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00115.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00116.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00117.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00118.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00119.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00120.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00121.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00122.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00123.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00124.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00125.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00126.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00127.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00128.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00129.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00130.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00131.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00132.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00133.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00134.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00135.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00136.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00137.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00138.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00139.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00140.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00141.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00142.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00143.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00144.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00145.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00146.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00147.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00148.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00149.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00150.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00151.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00152.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00153.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00154.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00155.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00156.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00157.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00158.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00159.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00160.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00161.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00162.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00163.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00164.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00165.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00166.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00167.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00168.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00169.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00170.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00171.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00172.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00173.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00174.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00175.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00176.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00177.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00178.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00179.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00180.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00181.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00182.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00183.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00184.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00185.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00186.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00187.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00188.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00189.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00190.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00191.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00192.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00193.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00194.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00195.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00196.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00197.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00198.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00199.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00200.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00201.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00202.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00203.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00204.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00205.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00206.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00207.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00208.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00209.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00210.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00211.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00212.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00213.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00214.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00215.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00216.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00217.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00218.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00219.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00220.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00221.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00222.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00223.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00224.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00225.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00226.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00227.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00228.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00229.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00230.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00231.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00232.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00233.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00234.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00235.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00236.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00237.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00238.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00239.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00240.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00241.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00242.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00243.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00244.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00245.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00246.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00247.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00248.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00249.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00250.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00251.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00252.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00253.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00254.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00255.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00256.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00257.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00258.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00259.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00260.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00261.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00262.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00263.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00264.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00265.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00266.webp
/assets/serviceAssetsVI/serviceCanvas3/officesetup000_00267.webp
`;
return data.split("\n")[index];
}

const frameCount = 267;

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
  scrub: .5,
  trigger: `#page7`,
  start: `top 50%`,
  end: `250% top`,
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

trigger: "#page7",
pin: true,
scroller: `#main`,
start: `top top`,
end: `250% top`,
});
}
canvas2()



gsap.to(".page7-cir",{
  scrollTrigger:{
    trigger:`.page7-cir`,
    start:`top center`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5
  },
  scale:1.5
})



gsap.to(".page7-cir-inner",{
  scrollTrigger:{
    trigger:`.page7-cir-inner`,
    start:`top center`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:.5
  },
  // backgroundColor : `#0a3bce91`,
})

 gsap.from("#page11 .page11-inner", {
   y: 120,
   opacity: 0,
   stagger: 0.5,
   duration: 0.5,
   scrollTrigger: {
     trigger: ".page11-inner",
     scroller: "#main",
     start: "top 80%",
     end: "top -10%",
     scrub: 3,
   },
 });
//  gsap.from("#page10 .right10-inner", {
//    y: 120,
//    opacity: 0,
//    stagger: 0.5,
//    duration: 0.5,
//    scrollTrigger: {
//      trigger: ".right10-inner",
//      scroller: "#main",
//      start: "top 80%",
//      end: "top -10%",
//      scrub: 3,
//    },
//  });
 gsap.from("#page11 .service", {
   y: 120,
   opacity: 0,
   stagger: 0.5,
   duration: 0.5,
   scrollTrigger: {
     trigger: ".service",
     scroller: "#main",
     start: "top 80%",
     end: "top -10%",
     scrub: 3,
   },
 });
