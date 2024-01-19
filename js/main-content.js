(function () {
  const buttons = document.querySelectorAll("main ul li a");
  const sectionAbout = document.querySelector(".about");
  const main = document.querySelector(".main");

  Array.from(buttons).forEach((btn) =>
    btn.addEventListener("click", function () {
      removeActive();

      console.log(this);

      this.classList.add("active");
    })
  );

  function removeActive() {
    buttons.forEach((btn) => btn.classList.remove("active"));
  }

  window.addEventListener("resize", function () {
    const atributos = main.getBoundingClientRect();

    sectionAbout.style.height = `${atributos.height}px`;
  });
})();
