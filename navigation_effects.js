/* global document,$ */
class NavigationEffects {
  constructor(options) {
    this.$navLists = options.$navLists;
    this.ulTag = options.ulTag;
    this.hoverClassName = options.hoverClassName;
  }
  addDropDown() {
    this.$navLists.hover((event) => {
      this.hoverIn(event);
    }, (event) => {
      this.hoverOut(event);
    });
  }
  hoverIn(event) {
    $(event.currentTarget).find(this.ulTag).addClass(this.hoverClassName).show();
  }
  hoverOut(event) {
    $(event.currentTarget).find(this.ulTag).removeClass(this.hoverClassName).hide();
  }
}

$(document).ready(function () {
  var options = {
    $navLists: $("#nav li"),
    ulTag: "ul",
    hoverClassName: "hover"
  };
  var obj = new NavigationEffects(options);
  obj.addDropDown();
});
