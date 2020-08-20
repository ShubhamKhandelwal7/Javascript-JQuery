/* global document,alert */
class MaximumChecker {
  constructor(selector) {
    this.form = document.querySelector(selector.formSelector);
    this.allDays = document.querySelectorAll(selector.allDaysSelector);
    this.noneCheckbox = this.form.querySelector(selector.noneCheckboxSelector);
    this.selectedThree = [];
    this.totalDays = this.allDays.length;
  }
  selectedDays() {
    for (let i = 0; i < this.totalDays; i++) {
      this.allDays[i].addEventListener("click", () => {
        if (this.allDays[i].checked === true) {
          this.noneCheckbox.checked = false;
          this.countCheck(i);
        }
        else {
          this.selectedThree.splice(i, 1);
        }
      });
    }
    this.noneCheckbox.addEventListener("click", this.noneChecked.bind(this));
  }
  countCheck(index) {
    if (this.selectedThree.length < 3) {
      this.selectedThree.push(index);
    }
    else {
      this.allDays[index].checked = false;
      alert("Only 3 days can be selected. You have already selected  " + this.allDays[this.selectedThree[0]].value + "," + this.allDays[this.selectedThree[1]].value + " and " + this.allDays[this.selectedThree[2]].value + ".");
    }
  }
  noneChecked() {
    for (var i = 0; i < this.allDays.length; i++) {
      this.allDays[i].checked = false;
    }
    this.selectedThree = [];
  }
}
window.onload = () => {
  var selector = {
    formSelector: "[data-form=true]",
    allDaysSelector: "[data-checkbox=true]",
    noneCheckboxSelector: "[data-nonecheckbox=true]"
  };
  var obj = new MaximumChecker(selector);
  obj.selectedDays();
};
