
// function isVisible(e) {
//     let elementBox = e.getBoundingClientRect();
//     let distanceFromTop = 700;

//     if(elementBox.top - window.innerHeight < distanceFromTop) {
//         return true
//     } else if(elementBox.top - window.innerHeight > distanceFromTop){
//         return false
//     }
// }

// function scanDocument() {
//     let sectionList = document.querySelectorAll('.hidden');
//     sectionList.forEach(function(section) {
//         if(isVisible(section)) {
//             section.classList.remove('hidden');
//         }
//     })
// }

// document.addEventListener("scroll", scanDocument)


// let elementBox = getBoundingClientRect();
// let distanceFromTop = 700;

// var test = document.getElementById('main');

// $(document).ready(function(){
//     $(window).scroll(function(){
//         $('.main').css("opacity", 1 - $(window).scrollTop()/750)
//     })
// })

//Get the button:
mybutton = document.getElementById("topBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
let lastDiv = document.getElementsByClassName("contact")

let rect = lastDiv.getBoundingClientRect()

console.log(lastDiv.getBoundingClientRect())

function scrollFunction() {
  if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
    // mybutton.style.display = "block";
    mybutton.setAttribute(
        "style", "display: block; transition: ease-in-out 400ms; color: red"
    )
  } else {
    mybutton.style.display = "none";    mybutton.setAttribute(
        "style", "display: none; transition: ease-in-out 400ms;"
    )
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}