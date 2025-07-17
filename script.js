// Back-to-top button
const backToTopButton = document.createElement("button");
backToTopButton.textContent = "↑";
backToTopButton.style.position = "fixed";
backToTopButton.style.bottom = "20px";
backToTopButton.style.right = "20px";
backToTopButton.style.width = "50px"; // Equal width and height for round shape
backToTopButton.style.height = "50px";
backToTopButton.style.padding = "10px";
backToTopButton.style.fontSize = "16px";
backToTopButton.style.backgroundColor = "rgb(89, 242, 253)";
backToTopButton.style.color = "white";
backToTopButton.style.borderRadius = "50%"; // Fully round button
backToTopButton.style.cursor = "pointer";
backToTopButton.style.display = "none";
backToTopButton.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.2)"; // Add shadow for better visibility
document.body.appendChild(backToTopButton);

// Show or hide the back-to-top button based on scroll position
window.addEventListener("scroll", function () {
  if (window.scrollY > 200) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

// Smooth scrolling to top
backToTopButton.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
// document.querySelectorAll("nav a").forEach(link => {
//   link.addEventListener("click", function (event) {
//     event.preventDefault();
//     const sectionId = this.getAttribute("href");
//     document.querySelector(sectionId).scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   });
// });
 let current = 0;
  const slides = document.querySelectorAll(".slide");

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 2000); // Change every 5 seconds


  function toggleMenu() {
      const menu = document.getElementById('sideMenu');
      menu.classList.toggle('active');
    }


  