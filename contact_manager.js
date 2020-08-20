/* global alert, $, document, setTimeout, clearTimeout */
class ContactManager {
  constructor(customOptions) {
    var defaultOptions = {};
    Object.assign(customOptions, defaultOptions);
    this.$username = customOptions.$username;
    this.$email = customOptions.$email;
    this.$addBtn = customOptions.$addBtn;
    this.$userSearch = customOptions.$userSearch;
    this.container = customOptions.$container;
    this.emailRegex = customOptions.emailRegex;
  }

  init() {
    this.$addBtn.on("click", ContactManager.validator.bind(this, this.$username, this.$email, this.emailRegex, this.container));
    this.container.on("click", ".deleteBtn", (event) => {
      ContactManager.removeElements(event);
    });

    this.$userSearch.on("keyup", ContactManager.debounce((event) => {
      this.$newElements = $(".newElements");
      this.inputValue = this.$userSearch.val();
      ContactManager.suggestName(this.$newElements, this.inputValue);
    }, 1000, this.$userSearch));
  }

  static debounce(func, delay, $userSearch) {
    let interval;
    return () => {
      clearTimeout(interval);
      if (this.inputValue != $userSearch.val()) {
        interval = setTimeout(() => func.apply(this), delay);
      }
    };
  }

  static validator($username, $email, emailRegex, container) {
    if ($username.val().trim()) {
      if (this.constructor.checkEmail($email, emailRegex)) {
        ContactManager.addElements($username.val(), $email.val(), container);
      } else {
        alert("Email is Invalid");
      }
    } else {
      alert("Please enter name");
    }
  }

  static addElements(name, email, container) {
    var newDiv = $("<div>").appendTo(container).addClass("newElements").css("border", "2px");
    newDiv.html("<br/>" + "NAME: " + name + "<br/>" + "EMAIL: " + email).attr("id", name);
    $("<input type=button value=Delete>").appendTo(newDiv).addClass("deleteBtn");
  }

  static removeElements(event) {
    $(event.currentTarget).closest("div").remove();
  }

  static checkEmail($email, emailRegex) {
    var EmailRegex = new RegExp(emailRegex);
    if ($email.val().trim()) {
      return EmailRegex.test($email.val());
    }
  }

  static suggestName($newElements, inputValue) {
    var count = 0;
    if (!inputValue) {
      $newElements.show();
    } else {
      $newElements.hide();
      for (var j = 0; j < $newElements.length; j++) {
        count = 0;
        for (var i = 0; i < inputValue.length; i++) {
          if (inputValue[i] == $newElements[j].id[i] && count == i) {
            $($newElements[j]).show();
            count++;
          } else {
            $($newElements[j]).hide();
          }
        }
      }
    }
  }
}

$(document).ready(() => {
  var customOptions = {
    $username: $("#username"),
    $email: $("#useremail"),
    $addBtn: $("#userbutton"),
    $userSearch: $("#usersearch"),
    $container: $("#container-div"),
    emailRegex: "^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$"
  };
  var obj = new ContactManager(customOptions);
  obj.init();
});
