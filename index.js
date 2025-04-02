document.addEventListener("DOMContentLoaded", function () {
  // Password visibility toggle
  const passwordInput = document.querySelector("#passwordInput");
  const togglePassword = document.querySelector("#togglePassword");

  if (togglePassword && passwordInput) {
    togglePassword.addEventListener("click", function (event) {
      event.preventDefault();
      event.stopPropagation();

      if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.src = "/assests/Group 1000002935.png"; // Open eye icon
        console.log("👁️ Password Visible");
      } else {
        passwordInput.type = "password";
        togglePassword.src = "/assests/Group 27205.png"; // Closed eye icon
        console.log("🔒 Password Hidden");
      }
    });
  }

  // Highlight active nav link
  const currentPage1 = window.location.pathname.split("/").pop();
  const navLinks = document.querySelectorAll(".navbar-nav .nav-item a");

  navLinks.forEach((link) => {
    if (link.getAttribute("href") === `/${currentPage1}`) {
      link.classList.add("active");
    }
  });

  // Profile dropdown toggle
  function toggleMenu(menuId) {
    document.getElementById(menuId).classList.toggle("active");
  }

  if (document.getElementById("profileToggle")) {
    document
      .getElementById("profileToggle")
      .addEventListener("click", function () {
        toggleMenu("dropdownMenu");
      });
  }

  if (document.getElementById("profileToggle2")) {
    document
      .getElementById("profileToggle2")
      .addEventListener("click", function () {
        toggleMenu("dropdownMenu2");
      });
  }

  // Close dropdown menu when clicking outside
  document.addEventListener("click", function (event) {
    if (!event.target.closest(".profile") && !event.target.closest(".menu")) {
      document.getElementById("dropdownMenu")?.classList.remove("active");
      document.getElementById("dropdownMenu2")?.classList.remove("active");
    }
  });

  // Sidebar active link
  const sidebarLinks = document.querySelectorAll(".sidebar ul li a");
  const currentPage = window.location.pathname.split("/").pop(); // Get current file name

  sidebarLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Chatbox toggle
  const chatIcon = document.getElementById("chatIcon");
  const closeChat = document.getElementById("closeChat");
  const chatBox = document.getElementById("chatBox"); // Make sure to define your chat box ID correctly

  if (closeChat && chatBox) {
    closeChat.addEventListener("click", function () {
      chatBox.style.display = "none"; // Close chat box when clicked
    });
  }

  // Sidebar Close Button
  const closeSidebar = document.getElementById("closeSidebar");
  const sideBox = document.getElementById("sideBox"); // Make sure to define your sidebar ID correctly

  if (closeSidebar && sideBox) {
    closeSidebar.addEventListener("click", function () {
      sideBox.style.display = "none"; // Close sidebar when clicked
    });
  }

  if (chatIcon && chatBox) {
    chatIcon.addEventListener("click", function () {
      if (chatBox.style.display === "none" || chatBox.style.display === "") {
        chatBox.style.display = "block";
      } else {
        chatBox.style.display = "none";
      }
    });
  }

  // Sidebar toggle
  const sidebarIcon = document.querySelector(".sidebar-icon");
  const sidebar = document.querySelector(".sidebar");

  if (sidebarIcon && sidebar) {
    sidebarIcon.addEventListener("click", function () {
      if (sidebar.style.display === "none" || sidebar.style.display === "") {
        sidebar.style.display = "block"; // Show sidebar
      } else {
        sidebar.style.display = "none"; // Hide sidebar
      }
    });
  }

  // Image upload preview
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

  // Show/hide images when input changes
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

  // Attach event listeners to input fields
  fields.forEach(({ inputId, imageId }) => {
    const input = document.getElementById(inputId);
    input.addEventListener("input", () => toggleImage(inputId, imageId));
    input.addEventListener("focus", () => toggleImage(inputId, imageId));
    input.addEventListener("blur", () => toggleImage(inputId, imageId));
  });
});
