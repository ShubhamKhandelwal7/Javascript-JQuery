/* global prompt,window,alert */
class InputUrl {
  constructor(urlRegex) {
    this.urlRegex = urlRegex;
    this.url = '';
  }

  getUrl() {
    this.url = prompt("Please enter the desired URL", "https://");

    if (this.isUrlValid(this.url)) {
      window.open(this.url, "_blank", "width=80px, height=195px, status=no, scrollbars= no");
    }
    else alert("Inorrrect URL !!!");
  }

  isUrlValid() {
    var trimmedUrl = '';
    if (this.url) {
      trimmedUrl = this.url.trim();
    }
    else {
      trimmedUrl = this.url;
    }
    return (!!this.urlRegex.test(trimmedUrl));
  }
}

const urlRegex = new RegExp(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/);
var objInputUrl = new InputUrl(urlRegex);
objInputUrl.getUrl();
