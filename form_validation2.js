/*global alert,document,window */
class FormValidator {
  constructor(formElement, selector, constTextMinLength) {
    this.formElement = formElement;
    this.constTextMinLength = constTextMinLength;
    this.textBoxesFields = formElement.querySelectorAll(selector.formTextBoxesSelector);
    this.textAreaFields = formElement.querySelectorAll(selector.formTextAreaSelector);
    this.emailFields = formElement.querySelectorAll(selector.formEmailSelector);
    this.urlFields = formElement.querySelectorAll(selector.formUrlSelector);
    this.checkBoxesFields = formElement.querySelectorAll(selector.formCheckBoxesSelector);
    this.formSubmitButton = formElement.querySelector(selector.formSubmitButton);
    this.emailRegex = new RegExp(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/);
    this.urlRegex = new RegExp(/^(?:(?:http|https|ftp):\/\/)?(www\.)?(?:((?:[\w\d\_\-])?\.)?([\w\d\-\_]+)\.)?([\w\d\_\-]+\.[\w\d]{2,3})(?:\/[\w\d\-\_\?\=\&\#\.%]+)*$/);
    this.flag = true;
  }
  init() {
    this.bindEvents();
  }
  bindEvents() {
    this.formElement.addEventListener("submit", (event) => {
      this.flag = true;
      this.allValidationsCheck();
      if (!this.flag) {
        event.preventDefault();
      }
    });
  }
  allValidationsCheck() {
    this.isPresent();
    this.checkValidationPattern(this.emailFields, this.emailRegex);
    this.checkValidationPattern(this.urlFields, this.urlRegex);
    this.lengthValidation();
    this.isCheckboxChecked();
  }
  isPresent() {
    for (var i = 0; i < this.textBoxesFields.length; i++) {
      if (this.textBoxesFields[i].value === "") {
        alert(`${this.textBoxesFields[i].name} can't be empty`);
        this.flag = false;
      }
    }
  }
  lengthValidation() {
    for (var j = 0; j < this.textAreaFields.length; j++) {
      if (this.textAreaFields[j].getAttribute("data-min-required")) {
        this.minTextareaLength = this.textAreaFields[j].getAttribute("data-min-required");
      }
      else {
        this.minTextareaLength = this.constTextMinLength;
      }
      if (this.textAreaFields[j].value.length < this.minTextareaLength) {
        alert(`${this.textAreaFields[j].name} should have atleast ${this.minTextareaLength} characters`);
        this.flag = false;
      }
    }
  }
  checkValidationPattern(textToCheck, regexchecker) {
    for (var n = 0; n < textToCheck.length; n++) {
      if (textToCheck[n].value) {
        this.isPatternValid(textToCheck[n], regexchecker);
      }
    }
  }
  isCheckboxChecked() {
    for (var i = 0; i < this.checkBoxesFields.length; i++) {
      if (this.checkBoxesFields[i].checked === false) {
        alert(`Please check the ${this.checkBoxesFields[i].name} checkbox`);
        this.flag = false;
      }
    }
  }
  isPatternValid(fieldPattern, regexchecker) {
    if (!regexchecker.test(fieldPattern.value)) {
      alert(`${fieldPattern.name} is Invalid !!\nPlease enter again.`);
      this.flag = false;
    }
  }
}
window.onload = () => {
  var selector = {
    formElementSelector: "[data-form=registration]",
    formTextBoxesSelector: "[data-presence-required=true]",
    formTextAreaSelector: "[data-min-required]",
    formEmailSelector: "[data-email=true]",
    formUrlSelector: "[data-url=true]",
    formCheckBoxesSelector: "[data-checkbox=true]",
    formSubmitButton: "[data-button=submit]"
  };
  var formElement = document.querySelector(selector.formElementSelector);
  const constTextMinLength = 50;
  var formObj = new FormValidator(formElement, selector, constTextMinLength);
  formObj.init();
};
