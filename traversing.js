/* global document,console,$ */
class ExerciseTraversing {
  constructor() {
  }
  traversingFun() {
      //#1 //log each image's alt attribute.
      $("img").each(function () {
          console.log($(this).attr("alt"));
      });
      //#2 //search input text box, then traverse up to the form and add a class to the form
      $("#search .input_text").closest("form").addClass("search-form");

      //#3 //class of "current" and remove that class from it; add a class of "current" to the next list item
      $("#myList").children(".current.bar").removeClass("current bar").next().addClass("current bar");

      //#4 //inside #specials; traverse your way to the submit button.
       $("#specials").find("select").parentsUntil("form").find(".input_submit");

      //#5 // in the #slideshow element; add the class "current" to it, and then add a class of "disabled" to its sibling elements
      $("#slideshow").children("li").first().addClass("current").siblings().addClass("disabled");
  }
}
$(document).ready(function () {
  var obj = new ExerciseTraversing();
  obj.traversingFun();
});
