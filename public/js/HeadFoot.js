
  function navbar(event) {
      var navbarLinks = document.getElementById('navbar-links');
      var menuIcon = document.getElementById('menu-icon');
      if (window.innerWidth > 768) {
          navbarLinks.style.display = 'block';
          menuIcon.style.display = 'none';
          navbarLinks.style.opacity = '0';
          navbarLinks.style.transition = 'opacity 0.3s ease-in-out';
          
          
          var contact = document.getElementById('header-link-contact');
          contact.addEventListener('click',function () {
            window.location.href = "../Contact_page/contact.html";
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