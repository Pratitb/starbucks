

let scrollPos = 0;

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



//curtain menu
let navigation = document.querySelector(".navigation");
let toggle = document.querySelector(".toggle");
toggle.addEventListener("click", function () {
  toggle.classList.toggle("active");
  navigation.classList.toggle("active");
});



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
