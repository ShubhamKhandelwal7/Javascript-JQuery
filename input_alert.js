/* globals alert,prompt,document */
class InputAlert {
  constructor(welcomeLine) {
    this.welcomeLine = welcomeLine;
    this.alertFirstName = '';
    this.alertLastName = '';
  }

  getResult() {
    this.getInput();
    this.showInput();
  }

  getInput() {
    this.alertFirstName = this.promptName(this.alertFirstName, "Please enter your first name");
    this.alertLastName = this.promptName(this.alertLastName, "Please enter your last name");
  }

  showInput() {
    var finString = (`Hello ${this.alertFirstName} ${this.alertLastName}`);
    alert(finString);
    this.welcomeLine.innerHTML = (`Welcome ${this.alertFirstName} ${this.alertLastName}`);
  }

  promptName(alertName, nameMsg) {
    while (!this.isValidName(alertName)) {
      alertName = prompt(nameMsg);
    }
    return alertName;
  }

  isValidName(alertName) {
    if (alertName) {
      alertName = alertName.trim();
    }
    return (!!alertName);
  }
}
var welcomeLine = document.querySelector("[data-heading=display]");
var inputAlertObj = new InputAlert(welcomeLine);
inputAlertObj.getResult();
