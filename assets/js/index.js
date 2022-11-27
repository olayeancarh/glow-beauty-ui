document.addEventListener("DOMContentLoaded", () => {
  // Header Scroll
  let header = document.getElementById("header");

  // Create Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        let cur1 = [...entry.target.classList].includes("curology");
        let cur2 = [...entry.target.classList].includes("curology2");

        if (cur1 || cur2) {
          entry.target.classList.add("curo");
          entry.target.classList.add("curo2");
        }
      }
    });
  });

  // Elements to be tracked
  const curo1 = document.querySelector(".curology");
  const curo2 = document.querySelector(".curology2");

  // Attach elements to observer
  observer.observe(curo1);
  observer.observe(curo2);

  // Fullpage
  new fullpage("#fullPage", {
    autoScrolling: true,
    onLeave: function(origin, destination, direction, trigger){
      var leavingSection = this;
      console.log(origin.index)
  
      //after leaving section 2
      if(origin.index == 0 && direction =='down'){
        header.classList.add('hidden');
      }
  
      else if(origin.index == 1 && direction == 'up'){
        header.classList.remove('hidden');
      }
    }
  });
});
