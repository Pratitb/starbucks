let sidebar = document.querySelector(".side-nav");
let menu = document.querySelector(".mobile-menu");

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

  //show/hide coffee mobile menu

window.addEventListener("scroll", function () {
    if (document.body.getBoundingClientRect().top < scrollPos) {
      menu.style.display = "none";
    } else {
      menu.style.display = "flex";
    }
    scrollPos = document.body.getBoundingClientRect().top;
  });
  
  window.addEventListener("scroll", function () {
    if (document.body.getBoundingClientRect().top < -350) {
      document.querySelector(".side-nav").style.display = "flex";
    } else if (document.body.getBoundingClientRect().top < -4900) {
      document.querySelector(".side-nav").style.display = "none";
    } else {
      document.querySelector(".side-nav").style.display = "none";
    }
  });