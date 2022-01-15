function removeDropdown() {
  if (rootState.currentOpenDropDown) {
    document
      .querySelector(`#${rootState.currentOpenDropDown} .dropdown-container`)
      .classList.remove("dropdown-active");
    document
      .querySelector(`#${rootState.currentOpenDropDown} a`)
      .classList.remove("active");
  }
}

function dropdown(element) {
  removeDropdown();

  if (element !== rootState.currentOpenDropDown) {
    document.querySelector(`#${element} a`).classList.add("active");
    document
      .querySelector(`#${element} .dropdown-container`)
      .classList.add("dropdown-active");
    rootState.currentOpenDropDown = element;
  } else {
    rootState.currentOpenDropDown = false;
  }
}

rootState.onAnyClick.push(async (event) => {
  const inDropdown = event.path.some((e) => {
    if (e.classList) {
      if (e.classList.contains("dropdown-active")) {
        return true;
      }
    }
    return false;
  });

  const onNavLink = event.path.some((e) => {
    if (e.classList) {
      if (e.classList.contains("nav-links")) {
        return true;
      }
    }
    return false;
  });

  if (!onNavLink && !inDropdown) {
    removeDropdown();
    rootState.currentOpenDropDown = false;
  }
});
