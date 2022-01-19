function removeDropdown() {
  if (rootState.currentOpenDropDown) {
    const element = rootState.currentOpenDropDown;
    const dropdown = document.getElementById(`dropdown_${element}`);
    const dropdownLink = document.getElementById(`dropdown-link_${element}`);
    dropdown.classList.remove("dropdown-active");
    dropdownLink.classList.remove("active");
  }
}

function dropdown(element) {
  removeDropdown();

  if (element !== rootState.currentOpenDropDown) {
    const dropdown = document.getElementById(`dropdown_${element}`);
    const dropdownLink = document.getElementById(`dropdown-link_${element}`);

    dropdownLink.classList.add("active");
    dropdown.classList.add("dropdown-active");
    rootState.currentOpenDropDown = element;
  } else {
    rootState.currentOpenDropDown = false;
  }
}

rootState.onAnyClick.push(async (event) => {
  const seekable = [...event.target.parentNode.children];
  const inDropdown = seekable.some((e) => {
    if (e.closest(`#dropdown_${rootState.currentOpenDropDown}`)) {
      return true;
    }
  });

  const inNavLink = seekable.some((e) => {
    if (e.closest(".active")) {
      return true;
    }
  });

  if (!inNavLink && !inDropdown && rootState.currentOpenDropDown) {
    removeDropdown();
    rootState.currentOpenDropDown = false;
  }
});
