const target = document.querySelector("footer");

const scrollToTopBtn = document.querySelector(".scrollToTopBtn")
const rootElement = document.documentElement

function callback(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            scrollToTopBtn.classList.add("showBtn")
        } else {
            scrollToTopBtn.classList.remove("showBtn")
        }
    });
}

function scrollToTop() {
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

scrollToTopBtn.addEventListener("click", scrollToTop);

let observer = new IntersectionObserver(callback);

observer.observe(target)


const projectItem = document.querySelectorAll('.project-item');

for(var i = 0; i < projectItem.length; i++){
    projectItem[i].addEventListener('focusin', function(){
        if(!projectItem[i].classList == 'project-item:hover'){
        projectItem[i].classList.addClass('project-item:hover')
        } else {
        projectItem[i].classList.remove('project-item:hover')
        }
    }, false)
}