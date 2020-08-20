/* global document,window */
class SwitchBetweenCountries {
  constructor(container, selector) {
    this.container = container;
    this.selectLeft = container.querySelector(selector.selectLeftSelector);
    this.selectRight = container.querySelector(selector.selectRightSelector);
    this.addButton = container.querySelector(selector.addButtonSelector);
    this.remButton = container.querySelector(selector.remButtonSelector);
  }
  init() {
    this.remButton.addEventListener("click", () => {
      while (this.selectRight.selectedIndex !== -1) {
        this.removeCountry(this.selectLeft, this.selectRight);
      }
    });

    this.addButton.addEventListener("click", () => {
      while (this.selectLeft.selectedIndex !== -1) {
        this.addCountry(this.selectLeft, this.selectRight);
      }
    });
  }
  addCountry(selectLeft, selectRight) {
    var selectedIndexToAdd = selectLeft.selectedIndex;
    selectRight.appendChild(selectLeft[selectedIndexToAdd]);
  }
  removeCountry(selectLeft, selectRight) {
    var selectedIndexToRem = selectRight.selectedIndex;
    selectLeft.appendChild(selectRight[selectedIndexToRem]);
  }
}

window.onload = () => {
  var selector = {
    container: "[data-type=container]",
    selectLeftSelector: "[data-move=select-left]",
    selectRightSelector: "[data-move=select-right]",
    addButtonSelector: "[data-move=add-button]",
    remButtonSelector: "[data-move=rem-button]"
  };
  var container = document.querySelectorAll(selector.container);
  for (var i = 0; i < container.length; i++) {
    var obj = new SwitchBetweenCountries(container[i], selector);
    obj.init();
  }
};
