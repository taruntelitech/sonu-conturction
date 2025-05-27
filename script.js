document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for contacting Sonu Construction!");
      form.reset();
    });
  }
});


  function toggleMenu() {
    document.getElementById('nav-menu').querySelector('ul').classList.toggle('show');
  }