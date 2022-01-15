rootState = {
  currentOpenDropDown: false,
  onAnyClick: [],
};

document.onclick = function (event) {
  rootState.onAnyClick.forEach((fn) => {
    fn(event);
  });
};
