(() => {
  const initBurgerMenu = () => {
    const burgerMenu = document.querySelector(".burger");
    const navBar = document.querySelector("nav");
    let navBarStatus = false;

    if (window.getComputedStyle(navBar).overflow === "hidden") {
      const navHeight = navBar.offsetHeight;
      navBar.style.height = "0px";

      const toggleMenu = () => {
        if (navBarStatus) {
          navBarStatus = false;
          navBar.style.height = "0px";
          burgerMenu.classList.remove("changeBurger");
        } else {
          navBarStatus = true;
          navBar.style.height = navHeight + "px";
          burgerMenu.classList.add("changeBurger");
        }
      };

      burgerMenu.addEventListener("click", toggleMenu);
    }
  };

  const handleResize = () => {
    initBurgerMenu();
  };

  initBurgerMenu();
  window.addEventListener("resize", handleResize);
})();
