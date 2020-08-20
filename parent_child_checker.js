/* global document,window */
class ParentChckbox {
  constructor(parentCheckboxes, childCheckboxes, divChildElements) {
    this.parentCheckboxes = parentCheckboxes;
    this.childCheckboxes = childCheckboxes;
    this.divChildElements = divChildElements;
  }
  bindEvents() {
    this.parentCheckboxes.addEventListener("click", () => {
      this.checkEvents();
    });
    for (let m = 0; m < this.childCheckboxes.length; m++) {
      this.childCheckboxes[m].addEventListener("click", () => {
        this.unCheckEvents();
      });
    }
  }

  checkEvents() {
    if (this.parentCheckboxes.checked === true) {
      this.divChildElements.style.display = "block";
      this.divChildElements.scrollIntoView();
      this.checkAllChild();
    }
    else {
      this.divChildElements.style.display = "none";
      this.unCheckAllChild();
    }
  }

  unCheckEvents() {
    var count = 0;
    for (var z = 0; z < this.childCheckboxes.length; z++) {
      if (this.childCheckboxes[z].checked === false) {
        count++;
      }
      if (count === this.childCheckboxes.length) {
        this.parentCheckboxes.checked = false;
        this.divChildElements.style.display = "none";
      }
    }
  }

  checkAllChild() {
    for (var j = 0; j < this.childCheckboxes.length; j++) {
      this.childCheckboxes[j].checked = true;
    }
  }

  unCheckAllChild() {
    for (var k = 0; k < this.childCheckboxes.length; k++) {
      this.childCheckboxes[k].checked = false;
    }
  }
}

window.onload = () => {
  var childCheckboxes = [];
  var divChildElements = [];
  var parentCheckboxes = document.querySelectorAll("[ data-checkbox=parent]");
  for (var i = 0; i < parentCheckboxes.length; i++) {
    childCheckboxes = document.querySelectorAll("[ data-childcheckbox=" + parentCheckboxes[i].name + "]");
    divChildElements = document.querySelector("[div-child=" + parentCheckboxes[i].name + "]");
    var parentObj = new ParentChckbox(parentCheckboxes[i], childCheckboxes, divChildElements);
    parentObj.bindEvents();
  }
};
