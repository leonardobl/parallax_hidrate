"use strict";

(function () {
  const buttons = document.querySelectorAll("main ul li a");
  const sectionAbout = document.querySelector(".about");
  const main = document.querySelector(".main");
  const title = document.querySelector(".title");
  const garrafa = document.querySelector("#garrafa");
  const gargalo = document.querySelector("#gargalo");
  const tampa = document.querySelector("#tampa");

  Array.from(buttons).forEach((btn) =>
    btn.addEventListener("click", function () {
      removeActive();

      this.classList.add("active");
    })
  );

  function ajusteLayout({ margintop, fontSize, height }) {
    title.style.marginTop = `${margintop}px`;
    title.style.fontSize = `${fontSize}px`;
    sectionAbout.style.height = `${height}px`;
    garrafa.style.top = `50%`;
    gargalo.style.top = `36%`;
    tampa.style.top = `36%`;
  }

  function removeActive() {
    buttons.forEach((btn) => btn.classList.remove("active"));
  }

  window.addEventListener("load", function () {
    const height = main.getBoundingClientRect().height;
    const newMarginTop = height * 0.22;
    const newFontSize = height * 0.06;

    ajusteLayout({ fontSize: newFontSize, height, margintop: newMarginTop });
  });

  window.addEventListener("resize", function () {
    const height = main.getBoundingClientRect().height;
    const newMarginTop = height * 0.22;
    const newFontSize = height * 0.06;

    ajusteLayout({ fontSize: newFontSize, height, margintop: newMarginTop });
  });
})();
