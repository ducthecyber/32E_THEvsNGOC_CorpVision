var tagButton1 = document.getElementById('click');
var tagButton2 = document.getElementById('click1');
var tagButton3 = document.getElementById('click2');

click.onclick = function () {
  tagButton1.style.boxShadow = '2px 2px 0.2rem rgb(0, 159, 77, 50%)';
  tagButton1.style.borderColor = 'green';
  tagButton1.style.borderRadius = '10px'
  tagButton3.style.boxShadow = '';
  tagButton3.style.borderColor = '';
  tagButton2.style.boxShadow = '';
  tagButton2.style.borderColor = ''

}
click1.onclick = function () {
  tagButton2.style.boxShadow = '2px 2px 0.2rem rgb(0, 159, 77, 50%)';
  tagButton2.style.borderColor = 'green';
  tagButton2.style.borderRadius = '10px'
  tagButton1.style.boxShadow = '';
  tagButton1.style.borderColor = '';
  tagButton3.style.boxShadow = '';
  tagButton3.style.borderColor = '';
}
click2.onclick = function () {
  tagButton3.style.boxShadow = '2px 2px 0.2rem rgb(0, 159, 77, 50%)';
  tagButton3.style.borderColor = 'green';
  tagButton3.style.borderRadius = '10px'
  tagButton1.style.boxShadow = '';
  tagButton1.style.borderColor = '';
  tagButton2.style.boxShadow = '';
  tagButton2.style.borderColor = '';
}
window.onscroll = function() {myFunction()};
var header = document.getElementById("header");
var sticky = header.offsetTop;
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
} 
