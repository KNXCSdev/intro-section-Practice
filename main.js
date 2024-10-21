const navList = document.querySelector(".nav__list");
const navMobileList = document.querySelector(".nav__mobile__list");
const navBtn = document.querySelector(".nav__mobile-btn");
const mobileMenuOpen = document.querySelector(".nav__mobile__menu-Open");
const mobileMenuClose = document.querySelector(".nav__mobile__menu-Close");
const mobileMenuExpand = document.querySelector(".nav__mobile__expand");
const overlay = document.querySelector(".black");

navBtn.addEventListener("click", function (e) {
  e.preventDefault();
  mobileMenuExpand.classList.toggle("hidden");
  mobileMenuOpen.classList.toggle("hidden");
  mobileMenuClose.classList.toggle("hidden");
  overlay.classList.toggle("hidden");
});

function handleDropdownToggle(e, type) {
  const navItem = e.target.closest(`[data-dropdown-${type}]`);
  if (!navItem) return;

  const dropdownType = navItem.getAttribute(`data-dropdown-${type}`);
  const dropdownList = document.querySelector(`[data-dropdown-${type}-list="${dropdownType}"]`);
  const arrow = document.querySelector(`[data-${type}-arrow="${dropdownType}"]`);

  dropdownList.classList.toggle("hidden");
  const isDropdownHidden = dropdownList.classList.contains("hidden");
  arrow.src = isDropdownHidden ? "images/icon-arrow-down.svg" : "images/icon-arrow-up.svg";
}

navList.addEventListener("click", function (e) {
  e.preventDefault();
  handleDropdownToggle(e, "desktop");
});

navMobileList.addEventListener("click", function (e) {
  e.preventDefault();
  handleDropdownToggle(e, "mobile");
});
