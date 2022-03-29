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

document.getElementById("card1").onclick = function(){
  if(this.classList.contains("rotateCard")){
      this.classList.remove("rotateCard");
      // flipState[currentQues]=-1;
  }
  else{
      this.classList.add("rotateCard");
      // flipState[currentQues]=1; //means card was reverted once
  }
  
}

document.getElementById("card2").onclick = function(){
  if(this.classList.contains("rotateCard")){
      this.classList.remove("rotateCard");
      // flipState[currentQues]=-1;
  }
  else{
      this.classList.add("rotateCard");
      // flipState[currentQues]=1; //means card was reverted once
  }
  
}
document.getElementById("card3").onclick = function(){
  if(this.classList.contains("rotateCard")){
      this.classList.remove("rotateCard");
      // flipState[currentQues]=-1;
  }
  else{
      this.classList.add("rotateCard");
      // flipState[currentQues]=1; //means card was reverted once
  }
  
}
document.getElementById("card4").onclick = function(){
  if(this.classList.contains("rotateCard")){
      this.classList.remove("rotateCard");
      // flipState[currentQues]=-1;
  }
  else{
      this.classList.add("rotateCard");
      // flipState[currentQues]=1; //means card was reverted once
  }
  
}
document.getElementById("card5").onclick = function(){
  if(this.classList.contains("rotateCard")){
      this.classList.remove("rotateCard");
      // flipState[currentQues]=-1;
  }
  else{
      this.classList.add("rotateCard");
      // flipState[currentQues]=1; //means card was reverted once
  }
  
}





//  function fitText(outputSelector){
//     // max font size in pixels
//     const maxFontSize = 50;
//     // get the DOM output element by its selector
//     let outputDiv = document.getElementById(outputSelector);
//     // get element's width
//     let width = outputDiv.clientWidth;
//     // get content's width
//     let contentWidth = outputDiv.scrollWidth;
//     // get fontSize
//     let fontSize = parseInt(window.getComputedStyle(outputDiv, null).getPropertyValue('font-size'),10);
//     // if content's width is bigger then elements width - overflow
//     if (contentWidth > width){
//         fontSize = Math.ceil(fontSize * width/contentWidth,10);
//         fontSize =  fontSize > maxFontSize  ? fontSize = maxFontSize  : fontSize - 1;
//         outputDiv.style.fontSize = fontSize+'px';   
//     }else{
//         // content is smaller then width... let's resize in 1 px until it fits 
//         while (contentWidth === width && fontSize < maxFontSize){
//             fontSize = Math.ceil(fontSize) + 1;
//             fontSize = fontSize > maxFontSize  ? fontSize = maxFontSize  : fontSize;
//             outputDiv.style.fontSize = fontSize+'px';   
//             // update widths
//             width = outputDiv.clientWidth;
//             contentWidth = outputDiv.scrollWidth;
//             if (contentWidth > width){
//                 outputDiv.style.fontSize = fontSize-1+'px'; 
//             }
//         }
//     }
// }

// https://github.com/ricardobrg/fitText/