/* global $,document */
class DivStacker {
  constructor() {
    this.counter = 0;
  }
  init() {
    this.addDivs();
    this.highlightRemoveDiv();
  }
  addDivs() {
    $("#additem-btn").on("click", () => {
      this.counter++;
      var $newDiv = $("<div>").appendTo("#container").addClass("dynamicDiv");
      $newDiv.text(this.counter);
    });
  }
  highlightRemoveDiv() {
    $("#container").on("click", ".dynamicDiv", (event) => {
      if ($(event.currentTarget).text() == this.counter) {
        $(event.currentTarget).remove();
        this.counter--;
      }
      else $(event.currentTarget).addClass("highlighter");
    });
  }
}
$(document).ready(function () {
  var obj = new DivStacker();
  obj.init();
});
