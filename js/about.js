//accordions
const contentBox = document.getElementsByClassName("content-box");
for (let i = 0; i < contentBox.length; i++) {
  contentBox[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}