const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: false,
  effect: "cards",

  // If we need pagination
  // pagination: {
  //   el: '.swiper-pagination',
  //   dynamicBullets: true,
  // },

  // Navigation arrows
  // navigation: {
  //   nextEl: '.swiper-button-next',
  //   prevEl: '.swiper-button-prev',
  // },

  // And if we need scrollbar
  // scrollbar: {
  //   el: '.swiper-scrollbar',
  // },
});

// ONclick even for the slide class Not element
// var anchors = document.getElementsByTagName('a');
//         for(var i = 0; i < anchors.length; i++) {
//             var anchor = anchors[i];
//             if(/\bhohoho\b/).match(anchor.className)) {
//                 anchor.onclick = function() {
//                     alert('ho ho ho');
//                 }
//             }
//         }

//test onclick for first question
// document.getElementById("slideNumber1").onclick = function(){
//   this.classList.add("rotateCard");
//   console.log("clicked");
// }
// TEST SuccessFull. click works

document.getElementById("card1").onclick = function () {
  if (this.classList.contains("rotateCard")) {
    this.classList.remove("rotateCard");
    // flipState[currentQues]=-1;
  }
  else {
    this.classList.add("rotateCard");
    // flipState[currentQues]=1; //means card was reverted once
  }

}

document.getElementById("card2").onclick = function () {
  if (this.classList.contains("rotateCard")) {
    this.classList.remove("rotateCard");
    // flipState[currentQues]=-1;
  }
  else {
    this.classList.add("rotateCard");
    // flipState[currentQues]=1; //means card was reverted once
  }

}
document.getElementById("card3").onclick = function () {
  if (this.classList.contains("rotateCard")) {
    this.classList.remove("rotateCard");
    // flipState[currentQues]=-1;
  }
  else {
    this.classList.add("rotateCard");
    // flipState[currentQues]=1; //means card was reverted once
  }

}
document.getElementById("card4").onclick = function () {
  if (this.classList.contains("rotateCard")) {
    this.classList.remove("rotateCard");
    // flipState[currentQues]=-1;
  }
  else {
    this.classList.add("rotateCard");
    // flipState[currentQues]=1; //means card was reverted once
  }

}
document.getElementById("card5").onclick = function () {
  if (this.classList.contains("rotateCard")) {
    this.classList.remove("rotateCard");
    // flipState[currentQues]=-1;
  }
  else {
    this.classList.add("rotateCard");
    // flipState[currentQues]=1; //means card was reverted once
  }

}
//window resizing resizes the image too
function picsizecalculator() {
  var w = document.getElementById('card1').offsetWidth;
  var h = document.getElementById('card1').offsetHeight;
  //set width for the image 1
  let aspectRatioP1 = 418 / 357;
  if ((0.75 * w / aspectRatioP1) > 0.5 * h) { // 75% of width 
    let picwidth = 0.5 * h * aspectRatioP1;
    document.getElementById("q1pic").style.width = picwidth + "px";
    document.getElementById("q1pic").style.height = 0.5 * h + "px";
    console.log("Case 1", w, h);
  }
  else { //calculate height from 75% width.
    document.getElementById("q1pic").style.width = 0.75 * w + "px";
    document.getElementById("q1pic").style.height = 0.75 * w / aspectRatioP1 + "px";
    console.log("Case 2", w, h);
  }

  //set width for the image 2
  let aspectRatioP2 = 526 / 297;
  if ((0.60 * w / aspectRatioP2) > 0.5 * h) { // 60% of width 
    let picwidth = 0.5 * h * aspectRatioP2;
    document.getElementById("q2pic").style.width = picwidth + "px";
    document.getElementById("q2pic").style.height = 0.5 * h + "px";
    console.log("Case 1", w, h);
  }
  else { //calculate height from 60% width.
    document.getElementById("q2pic").style.width = 0.60 * w + "px";
    document.getElementById("q2pic").style.height = 0.60 * w / aspectRatioP2 + "px";
    console.log("Case 2", w, h);
  }
}
window.onload = picsizecalculator;
window.onresize = picsizecalculator;
