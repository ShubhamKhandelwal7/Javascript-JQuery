/* globals document,window,alert */
class DomainRegex {
  constructor(selector) {
      this.form = document.querySelector(selector.formSelector);
      this.textboxUrl = this.form.querySelector(selector.textboxUrlSelector);
      this.submit = this.form.querySelector(selector.submitSelector);
  }
  init() {
      this.bindEvent();
  }
  bindEvent() {
      this.form.addEventListener("submit", (event) => {
          if (this.isUrlValid()) {
              this.getDomain(this.validatedUrl);
          }
          else {
              alert("Incorrect URL !!!");
              event.preventDefault();
          }
      });
  }
  isUrlValid() {
      this.validatedUrl = URLDECRYPTOR.exec(this.textboxUrl.value);
      return this.validatedUrl;
  }
  getDomain(extractedUrl) {
      if (extractedUrl[1]) {
          if (extractedUrl[2]) {
              this.showDomainSubDomain(extractedUrl[2] + "." + extractedUrl[3], extractedUrl[1]);
          }
          else {
              this.showDomainSubDomain(extractedUrl[3], extractedUrl[1]);
          }
      }
      else if (extractedUrl[2]) {
          this.showDomainSubDomain(extractedUrl[3], extractedUrl[2]);
      }
      else {
          this.showDomainSubDomain(extractedUrl[3]);
      }
  }
  showDomainSubDomain(domain, subdomain) {
      if (subdomain) {
          alert("Domain : " + domain + "\nSubDomain : " + subdomain);
      }
      else {
          alert("Domain : " + domain);
      }
  }
}
const URLDECRYPTOR = new RegExp(/^(?:(?:http|https|ftp):\/\/)?(www)?\.?(?:((?:[\w\d\_\-]+)*[\w\d\-\_]+)\.)?([\w\d\_\-]+\.[\w\d\.]{2,5})(?:\/[\w\d\-\_\?\=\&\#\.%]+)*$/);
window.onload = () => {
  var selector = {
      formSelector: "[data-value=form]",
      textboxUrlSelector: "[data-value=input-url]",
      submitSelector: "[data-value=submit-btn]"
  };
  var obj = new DomainRegex(selector);
  obj.init();
};
