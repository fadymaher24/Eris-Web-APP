function navbar(event) {
    var navbarLinks = document.getElementById('navbar-links');
    var menuIcon = document.getElementById('menu-icon');
    if (window.innerWidth > 768) {
        navbarLinks.style.display = 'block';
        menuIcon.style.display = 'none';
        navbarLinks.style.opacity = '0';
        navbarLinks.style.transition *= 'opacity 0.3s ease-in-out';
        
        
        var contact = document.getElementById('header-link-contact');
        contact.addEventListener('click',function () {
          window.location.href = "https://www.facebook.com";
        });
      

        setTimeout(function () {
            navbarLinks.style.opacity = '1';
        }, 0);
    } else {
        navbarLinks.style.opacity = '0';
        navbarLinks.style.transition = 'opacity 0.3s ease-in-out';
        setTimeout(function () {
            navbarLinks.style.display = 'none';
            menuIcon.style.display = 'block';
        }, 300);

    }
}

window.addEventListener('resize', navbar);
window.addEventListener('load', navbar);

var menuIcon = document.getElementById("menu-icon");
var sideMenu = document.querySelector(".side-menu");

sideMenu.style.right = "-250px";

menuIcon.addEventListener("click", function () {
    sideMenu.style.right = "0";
});

document.addEventListener("click", function (event) {
    var isClickInsideMenu = sideMenu.contains(event.target);
    var isClickOnMenuIcon = (event.target === menuIcon);

    if (!isClickInsideMenu && !isClickOnMenuIcon) {
        sideMenu.style.right = "-250px";
    }
});

const track = document.getElementById("image-track");

const handleOnDown = e => track.dataset.mouseDownAt = e.clientX;

const handleOnUp = () => {
  track.dataset.mouseDownAt = "0";  
  track.dataset.prevPercentage = track.dataset.percentage;
}

const handleOnMove = e => {
  if(track.dataset.mouseDownAt === "0") return;
  
  const mouseDelta = parseFloat(track.dataset.mouseDownAt) - e.clientX,
        maxDelta = window.innerWidth / 2;
  
  const percentage = (mouseDelta / maxDelta) * -100,
        nextPercentageUnconstrained = parseFloat(track.dataset.prevPercentage) + percentage,
        nextPercentage = Math.max(Math.min(nextPercentageUnconstrained, 0), -100);
  
  track.dataset.percentage = nextPercentage;
  
  track.animate({
    transform: `translate(${nextPercentage}%, -50%)`
  }, { duration: 1200, fill: "forwards" });
  
  for(const image of track.getElementsByClassName("image")) {
    image.animate({
      objectPosition: `${100 + nextPercentage}% center`
    }, { duration: 1200, fill: "forwards" });
  }
}

/* -- Had to add extra lines for touch events -- */

window.onmousedown = e => handleOnDown(e);

window.ontouchstart = e => handleOnDown(e.touches[0]);

window.onmouseup = e => handleOnUp(e);

window.ontouchend = e => handleOnUp(e.touches[0]);

window.onmousemove = e => handleOnMove(e);

window.ontouchmove = e => handleOnMove(e.touches[0]);

AOS.init({
    duration: 1200,
  })
  