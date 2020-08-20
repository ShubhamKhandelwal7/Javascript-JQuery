/* global document,window */
class NumericalValidator {
  constructor(form, selector) {
    this.form = form;
    this.textboxInput = form.querySelector(selector.textboxInput);
    this.textboxResult = form.querySelector(selector.textboxResult);
    this.btnSubmit = form.querySelector(selector.btnSubmit);
  }
  init() {
    this.bindElements();
  }
  bindElements() {
    this.form.addEventListener("submit", (event) => {
      this.textboxResult.value = this.isNumber();
      if (!this.isNumber()) {
        event.preventDefault();
      }
    });
  }
  isNumber() {
    return ((!!this.textboxInput.value) && (!isNaN(this.textboxInput.value)));
  }
}

window.onload = () => {
  var selector = {
    formSelector: "[data-value=form]",
    textboxInput: "[data-value=input-text]",
    textboxResult: "[data-value=result]",
    btnSubmit: "[data-value=submit]"
  };
  var form = document.querySelector(selector.formSelector);
  var obj = new NumericalValidator(form, selector);
  obj.init();
};
