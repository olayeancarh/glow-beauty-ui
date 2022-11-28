document.addEventListener("DOMContentLoaded", () => {
  // Header Scroll
  let header = document.getElementById("header");

  // Create Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        if ([...entry.target.classList].includes("curology")) {
          entry.target.classList.add("curo");
        }
        if ([...entry.target.classList].includes("curology2")) {
          entry.target.classList.add("curo2");
        }
        if ([...entry.target.classList].includes("trending")) {
          entry.target.classList.add("trend");
        }
        if ([...entry.target.classList].includes("section3")) {
          entry.target.classList.add("sect3");
        }
        if ([...entry.target.classList].includes("section32")) {
          entry.target.classList.add("sect32");
        }
        if ([...entry.target.classList].includes("section4")) {
          entry.target.classList.add("sect4");
        }
        if ([...entry.target.classList].includes("section42")) {
          entry.target.classList.add("sect42");
        }
        if ([...entry.target.classList].includes("section44")) {
          entry.target.classList.add("sect44");
        }
        if ([...entry.target.classList].includes("section5")) {
          entry.target.classList.add("sect5");
        }
        if ([...entry.target.classList].includes("section6")) {
          entry.target.classList.add("sect6");
        }
        if ([...entry.target.classList].includes("section52")) {
          entry.target.classList.add("sect52");
        }
        if ([...entry.target.classList].includes("section62")) {
          entry.target.classList.add("sect62");
        }
        if ([...entry.target.classList].includes("section7")) {
          entry.target.classList.add("sect7");
        }
        if ([...entry.target.classList].includes("section71")) {
          entry.target.classList.add("sect71");
        }
        if ([...entry.target.classList].includes("section72")) {
          entry.target.classList.add("sect72");
        }
        if ([...entry.target.classList].includes("section73")) {
          entry.target.classList.add("sect73");
        }
        if ([...entry.target.classList].includes("section74")) {
          entry.target.classList.add("sect74");
        }
        if ([...entry.target.classList].includes("section75")) {
          entry.target.classList.add("sect75");
        }
        if ([...entry.target.classList].includes("section63")) {
          entry.target.classList.add("sect63");
        }
        if ([...entry.target.classList].includes("img1")) {
          entry.target.classList.add("zoom1");
        }
        if ([...entry.target.classList].includes("img2")) {
          entry.target.classList.add("zoom2");
        }
        if ([...entry.target.classList].includes("img3")) {
          entry.target.classList.add("zoom3");
        }
      }
    });
  });

  // Attach elements to observer
  observer.observe(document.querySelector(".curology"));
  observer.observe(document.querySelector(".curology2"));
  observer.observe(document.querySelector(".trending"));
  observer.observe(document.querySelector(".section3"));
  observer.observe(document.querySelector(".section32"));
  observer.observe(document.querySelector(".section4"));
  observer.observe(document.querySelector(".section42"));
  observer.observe(document.querySelector(".section44"));
  observer.observe(document.querySelector(".section5"));
  observer.observe(document.querySelector(".section6"));
  observer.observe(document.querySelector(".section52"));
  observer.observe(document.querySelector(".section62"));
  observer.observe(document.querySelector(".section7"));
  observer.observe(document.querySelector(".section71"));
  observer.observe(document.querySelector(".section72"));
  observer.observe(document.querySelector(".section73"));
  observer.observe(document.querySelector(".section74"));
  observer.observe(document.querySelector(".section75"));
  observer.observe(document.querySelector(".section63"));
  observer.observe(document.querySelector(".img1"));
  observer.observe(document.querySelector(".img2"));
  observer.observe(document.querySelector(".img3"));

  // Fullpage JS
  new fullpage("#fullPage", {
    autoScrolling: true,
    onLeave: function (origin, destination, direction, trigger) {
      //after leaving & entering section 0
      if (origin.index == 0 && direction == "down") {
        header.classList.add("hidden");
      } else if (origin.index == 1 && direction == "up") {
        header.classList.remove("hidden");
      }
    },
  });
});
