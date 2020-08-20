/* global $,document */
class TabNavigator {
  constructor() {
  }
  addingTabNav() {
    var $divs = $("div.module");
    $divs.hide();
    var $newList = $("<ul></ul>").insertBefore($divs).first();
    $divs.each(function () {
      var $div = $(this);
      var $subList = $("<li>" + $(this).find("h2").text() + "</li>").appendTo($newList);
      $subList.bind('click', function () {
        $divs.hide();
        $div.show();
        $subList.addClass("current").siblings().removeClass("current");
      });
    });
    $divs.first().show();
  }
}
$(document).ready(function () {
  var obj = new TabNavigator();
  obj.addingTabNav();
});
