const toggle = document.getElementById("sidebarToggle");
const sidebar = document.getElementById("sidebar");

const categoryBar = document.getElementById("categoryBar");
const scrollLeftBtn = document.getElementById("scrollLeftBtn");
const scrollRightBtn = document.getElementById("scrollRightBtn");

function updateButtons() {
  const scrollLeft = categoryBar.scrollLeft;
  const maxScrollLeft = categoryBar.scrollWidth - categoryBar.clientWidth;

  if (scrollLeft > 0) {
    scrollLeftBtn.classList.remove("hidden");
  } else {
    scrollLeftBtn.classList.add("hidden");
  }

  if (scrollLeft < maxScrollLeft - 1) {
    scrollRightBtn.classList.remove("hidden");
  } else {
    scrollRightBtn.classList.add("hidden");
  }
}

scrollRightBtn.addEventListener("click", () => {
  categoryBar.scrollBy({ left: 300, behavior: "smooth" });
});

scrollLeftBtn.addEventListener("click", () => {
  categoryBar.scrollBy({ left: -300, behavior: "smooth" });
});

categoryBar.addEventListener("scroll", updateButtons);

window.addEventListener("load", updateButtons);

const searchBar = document.getElementById("searchBar");
const clearBtn = document.getElementById("clearSearch");

function toggleClearButton() {
  if (searchBar.value.length > 0) {
    clearBtn.classList.remove("hidden");
  } else {
    clearBtn.classList.add("hidden");
  }
}

const mediaQuery = window.matchMedia("(max-width: 1300px)");

function handleSidebarResize(e) {
  if (e.matches) {
    sidebar.classList.add("sidebar-compact");
    document.body.classList.add("sidebar-compact");
  } else {
    sidebar.classList.remove("sidebar-compact");
    document.body.classList.remove("sidebar-compact");
  }
}

handleSidebarResize(mediaQuery);
mediaQuery.addEventListener("change", handleSidebarResize);

searchBar.addEventListener("input", toggleClearButton);

clearBtn.addEventListener("click", () => {
  searchBar.value = "";
  searchBar.focus();
  toggleClearButton();
});

toggle.addEventListener("click", () => {
  sidebar.classList.toggle("sidebar-compact");
  document.body.classList.toggle("sidebar-compact");

  updateButtons();
});
