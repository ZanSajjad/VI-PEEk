// var swiper = new Swiper(".mySwiper", {
//   slidesPerView: 1,          // Show 5 slides by default
//   centeredSlides: true,      // Center the active slide
//   spaceBetween: 20,          // Space between slides
//   loop: true,                // Infinite loop
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
//   breakpoints: {
//     320: {
//       slidesPerView: 1,      // Mobile: 1 slide
//       spaceBetween: 10,
//     },
//     768: {
//       slidesPerView: 3,      // Tablet: 3 slides
//       spaceBetween: 15,
//     },
//     1024: {
//       slidesPerView: 5,      // Desktop: 5 slides
//       spaceBetween: 20,
//     },
//   },
// });

document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".sidebar ul li a");
  const currentPage = window.location.pathname.split("/").pop();
  const currentPage1 = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".navbar-nav .nav-item a");

  navLinks.forEach(link => {
      if (link.getAttribute("href") === `/${currentPage1}`) {
          link.classList.add("active");
      }
  });

  // profile dropdown

  function toggleMenu(menuId) {
    document.getElementById(menuId).classList.toggle("active");
  }

  document
    .getElementById("profileToggle")
    .addEventListener("click", function () {
      toggleMenu("dropdownMenu");
    });

  document
    .getElementById("profileToggle2")
    .addEventListener("click", function () {
      toggleMenu("dropdownMenu2");
    });

  // Close menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".profile") && !event.target.closest(".menu")) {
      document.getElementById("dropdownMenu").classList.remove("active");
      document.getElementById("dropdownMenu2").classList.remove("active");
    }
  });



  links.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // chatBox
  var chatIcon = document.getElementById("chatIcon");
  var chatBox = document.getElementById("chatBox");

  if (chatIcon && chatBox) {
    chatIcon.addEventListener("click", function () {
      if (chatBox.style.display === "none" || chatBox.style.display === "") {
        chatBox.style.display = "block";
      } else {
        chatBox.style.display = "none";
      }
    });
  }

  var chatIcon = document.getElementById("chatIcon");
  var chatBox = document.getElementById("chatBox");
  var closeChat = document.getElementById("closeChat");

  if (chatIcon && chatBox) {
    chatIcon.addEventListener("click", function () {
      chatBox.style.display = "block"; // Open chat
    });
  }

  if (closeChat && chatBox) {
    closeChat.addEventListener("click", function () {
      chatBox.style.display = "none"; // Close chat
    });
  }

  // sidebar

  var sidebarIcon = document.querySelector(".sidebar-icon");
  var sidebar = document.querySelector(".sidebar");

  if (sidebarIcon && sidebar) {
    sidebarIcon.addEventListener("click", function () {
      if (sidebar.style.display === "none" || sidebar.style.display === "") {
        sidebar.style.display = "block"; // Show sidebar
      } else {
        sidebar.style.display = "none"; // Hide sidebar
      }
    });
  }

  var sidebarIcon = document.getElementById("sidebar-icon");
  var sidebar = document.querySelector(".sidebar");
  var closeSidebar = document.getElementById("closeSidebar");

  if (sidebarIcon && sidebar) {
    sidebarIcon.addEventListener("click", function () {
      sidebar.style.display = "block"; // Open side
    });
  }

  if (closeSidebar && sidebar) {
    closeSidebar.addEventListener("click", function () {
      sidebar.style.display = "none"; // Close side
    });
  }

  // image upload
  document
    .getElementById("imageUpload")
    .addEventListener("change", function (event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
          document.getElementById("profileImage").src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    });

  function toggleImage(inputId, imageId) {
    const inputField = document.getElementById(inputId);
    const image = document.getElementById(imageId);

    if (inputField.value.trim().length > 0) {
      image.style.display = "block";
    } else {
      image.style.display = "none";
    }
  }

  // Define input fields and images
  const fields = [
    { inputId: "emailInput", imageId: "emailImage" },
    { inputId: "usernameInput", imageId: "inputImage" },
  ];

  // Attach event listeners
  fields.forEach(({ inputId, imageId }) => {
    const input = document.getElementById(inputId);
    input.addEventListener("input", () => toggleImage(inputId, imageId));
    input.addEventListener("focus", () => toggleImage(inputId, imageId));
    input.addEventListener("blur", () => toggleImage(inputId, imageId));
  });
});
