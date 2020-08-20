/*global alert,document,window */
class FormValidation {
  constructor(container, selector) {
    this.container = container;
    this.formElement = container.querySelector(selector.formElementSelector);
    this.formTextBoxes = container.querySelectorAll(selector.formTextBoxesSelector);
    this.formTextArea = container.querySelectorAll(selector.formTextAreaSelector);
    this.formCheckBoxes = container.querySelectorAll(selector.formCheckBoxesSelector);
    this.formSubmitButton = container.querySelector(selector.formSubmitButtonSelector);
    this.textareaMinLen = 50;
    this.flag = true;
  }
  init() {
    this.formElement.addEventListener("submit", (event) => {
      this.flag = true;
      this.allValidationsCheck();
      if (!this.flag) {
        event.preventDefault();
      }
    });
  }
  allValidationsCheck() {
    this.runTextValidations();
    this.lengthValidation();
    this.isCheckboxChecked();
  }
  runTextValidations() {
    for (var i = 0; i < this.formTextBoxes.length; i++) {
      if (this.formTextBoxes[i].value.trim() === "") {
        alert(`${this.formTextBoxes[i].name} can't be empty`);
        this.flag = false;
      }
    }
  }
  lengthValidation() {
    for (var i = 0; i < this.formTextArea.length; i++) {
      if (this.formTextArea[i].getAttribute("data-textareaval")) {
        this.textareaMinLen = this.formTextArea[i].getAttribute("data-textareaval");
      }
      if (this.formTextArea[i].value.length < this.textareaMinLen ) {
        alert(`${this.formTextArea[i].name} should have atleast ${this.textareaMinLen}  characters`);
        this.flag = false;
      }
    }
  }
  isCheckboxChecked() {
    for (var i = 0; i < this.formCheckBoxes.length; i++) {
      if (this.formCheckBoxes[i].checked === false) {
        alert(`Please check the ${this.formCheckBoxes[i].name} checkbox`);
        this.flag = false;
      }
    }
  }
}

window.onload = () => {
  var selector = {
    containerSelector: "[data-type=container]",
    formElementSelector: "[data-form=registration]",
    formTextBoxesSelector: "[data-textvalue=true]",
    formTextAreaSelector: "[data-textareaval]",
    formCheckBoxesSelector: "[data-checkbox=true]",
    formSubmitButtonSelector: "[data-button=submit]"
  };
  var container = document.querySelectorAll(selector.containerSelector);
  for (var i = 0; i < container.length; i++) {
    var formObj = new FormValidation(container[i], selector);
    formObj.init();
  }
};
