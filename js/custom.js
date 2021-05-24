let images = document.querySelectorAll(".sb-can");
let mainImg = document.querySelector(".popular-drink");
let background = document.querySelector(".circle");
let highlight = document.querySelector(".highlight");
let menuBtn = document.querySelector(".menu-btn");
let sidebar = document.querySelector(".side-nav");
let pandemic = document.querySelector(".pandemic");
let menu = document.querySelector('.mobile-menu');
let scrollPos = 0;


//Homepage hero images
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

//AOS initialisation
AOS.init({
  duration: 2000,
});

//Sidebar Hide/Show
/* let scroll = function(){
    let y = window.scrollY;
    if(y>=500){
        sidebar.style.visibility = 'visible';
        
    }
    else if (y<=1000){
        sidebar.style.visibility = 'hidden';
    }
    
}
window.addEventListener('scroll', scroll); */

//Menu sidebar active buttons
document.querySelectorAll(".sidebar-btn").forEach((a) => {
  a.addEventListener("click", function () {
    document.querySelectorAll(".menu-active").forEach((a) => {
      a.classList.remove("menu-active");
    });

    a.classList.add("menu-active");
  });
});

//Menu filter gallery
$(document).ready(function () {
  $(".sidebar-btn").click(function () {
    const value = $(this).attr("data-filter");
    if (value == "") {
      $(".product-card").show("1000");
    } else {
      $(".product-card")
        .not("." + value)
        .hide("1000");
      $(".product-card")
        .filter("." + value)
        .show("1000");
    }
  });
});

//curtain menu
let navigation = document.querySelector(".navigation");
let toggle = document.querySelector(".toggle");
toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
});

//accordions
const contentBox = document.getElementsByClassName("content-box");
for (let i = 0; i < contentBox.length; i++) {
  contentBox[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

//typing effect
const lines = ["Help slow the spread of COVID-19."];
//we define 2 counters. 1 that goes through each word one by one
let count = 0;
//check which text we are using index
let index = 0;
//this will be the text selected at that time. grab words from array and put it in here
let currentText = "";
//specify individual letters
let letter = "";

function type() {
  //this design will run the function immediately on reading it
  if (count === lines.length) {
    count = 0;
  }
  currentText = lines[count];
  letter = currentText.slice(0, ++index);
  //this takes the current text, slices it and goes over each letter individually and keep going forward
  document.querySelector(".typing").textContent = letter;
  if (letter.length === currentText.length) {
    count++;
  }
  setTimeout(type, 100);
  //we invoke the function every 400ms
}

type();

//show/hide coffee mobile menu

if( Android|webOS|iPhone|iPad|Mac|Macintosh|iPod|BlackBerry|IEMobile.test(navigator.userAgent) ) {
  window.addEventListener('scroll', function(){
    if(document.body.getBoundingClientRect().top < scrollPos){
      menu.style.display = 'none';
    }
    else{
      menu.style.display = 'flex';
    }
    scrollPos = document.body.getBoundingClientRect().top;
  })
 }



window.addEventListener('scroll', function(){
  if(document.body.getBoundingClientRect().top < -490){
    document.querySelector('.side-nav').style.display = 'flex';
  }
  else if(document.body.getBoundingClientRect().top < -4900){
    document.querySelector('.side-nav').style.display = 'none';
  }
  else{
    document.querySelector('.side-nav').style.display = 'none';
  }
})
/* let scrolltop = pageYOffset;
let coffeeMenu = document.querySelector('.mobile-menu');
window.addEventListener('scroll', function(){
  let verticalScroll = window.pageYOffset || document.documentElement.scrollTop;
  if(verticalScroll > scrolltop){
    coffeeMenu.style.display = 'none';
  }
  else{
    coffeeMenu.style.display = 'flex';
  }
}) */
