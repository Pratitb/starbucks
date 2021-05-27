let images = document.querySelectorAll(".sb-can");
let mainImg = document.querySelector(".popular-drink");
let background = document.querySelector(".circle");
let highlight = document.querySelector(".highlight");
let menuBtn = document.querySelector(".menu-btn");
let pandemic = document.querySelector(".pandemic");

for (let i = 0; i < images.length; i++) {
    images[i].addEventListener("click", changeBg);
  }
  
  function changeBg(e) {
    if (e.target == images[0]) {
      background.style.background = "#00704a";
      highlight.style.color = "#00704a";
      menuBtn.style.background = "#00704a";
      pandemic.style.background = "#00704a";
      pandemic.style.color = "#fff";
      menuBtn.style.color = "#fff";
    } else if (e.target == images[1]) {
      background.style.background = "#e9adbb";
      highlight.style.color = "#e9adbb";
      menuBtn.style.background = "#e9adbb";
      pandemic.style.background = "#e9adbb";
      pandemic.style.color = "rgba(0,0,0,0.65)";
      menuBtn.style.color = "#333";
    } else if (e.target == images[2]) {
      background.style.background = "#d54dad";
      highlight.style.color = "#d54dad";
      menuBtn.style.background = "#d54dad";
      pandemic.style.background = "#d54dad";
      menuBtn.style.color = "#fff";
    } else {
      background.style.background = "#4f7687";
      highlight.style.color = "#4f7687";
      menuBtn.style.background = "#4f7687";
      pandemic.style.background = "#4f7687";
      pandemic.style.color = "#fff";
      menuBtn.style.color = "#fff";
    }
  
    let value = e.target;
    let src = value.getAttribute("src");
    mainImg.src = src;
  }