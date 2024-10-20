const navList = document.querySelector(".nav__list");

navList.addEventListener("click", function (e) {
  e.preventDefault();

  const navItem = e.target.closest(".nav__item");
  if (!navItem) return;

  const dropdownType = navItem.getAttribute("data-dropdown");

  const dropdownList = document.querySelector(`[data-dropdown-list="${dropdownType}"]`);
  const arrow = document.querySelector(`[data-arrow="${dropdownType}"]`);

  dropdownList.classList.toggle("hidden");

  const isDropdownHidden = dropdownList.classList.contains("hidden");
  arrow.src = isDropdownHidden ? "images/icon-arrow-down.svg" : "images/icon-arrow-up.svg";
});
