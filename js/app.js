//Define Global Variables
const navList = document.getElementById("navbar__list");
const sectionList = document.querySelectorAll("section");
let nav = "";

// Create navbar from sections id we got it from the querySelectorAll
function CreateNavbar() {
  sectionList.forEach((section) => {
    nav += `<li> <a class="nav__link menu__link" href="#${section.id}" id="navli">
            ${section.dataset.nav}</a></li>`;
  });
  // add the tags to the inner htmls
  navList.innerHTML = nav;
}

//Build Nav Function Invoke
CreateNavbar();

// Set sections as active
function ActiveSection() {
  const navActive = document.querySelectorAll(".menu__link");
  sectionList.forEach((section, i) => {
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect
    let elementOffset = section.getBoundingClientRect();
    //console.log(elementOffset);
    if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
      section.classList.add("your-active-class");
      //active state on the navigation items when a section is in the viewport.
      navActive[i].classList.add("active");
    } else {
      section.classList.remove("your-active-class");
      //deactive state on the navigation items when a section is in the viewport.
      navActive[i].classList.remove("active");
    }
  });
}

// event listener to Active Section
document.addEventListener("scroll", ActiveSection);

// handle scroll event
const handleSectionClick = (e) => {
  const NavLink = e.target.getAttribute("href");
  const section = document.querySelector(NavLink);
  e.preventDefault();
  section.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
};

// event listener to Menu Links
const menuLinks = document.querySelectorAll(".menu__link");
menuLinks.forEach((link) => link.addEventListener("click", handleSectionClick));
