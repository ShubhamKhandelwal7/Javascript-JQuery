/* global $,document */
class ExerciseManipulate {
  constructor() {
  }
  manipulatingFun() {

      //#1 //Add five new list items to the end of the unordered list #myList.
      $("#myList").append("<li>List item 8</li>", "<li>List item 9</li>", "<li>List item 10</li>", "<li>List item 11</li>", "<li>List item 12</li>");

      //#2 //Remove the odd list items
      $("#myList li:even").remove();

      //#3 //h2 and another paragraph to the last div.module
      $("div#specials").append("<h2>New Heading Tag</h2>", "<p>New Paragraph Tag</p>");

      //#4 // option to the select element; give the option the value "Wednesday"
      $("select[name]").append("<option value=Wednesday>Wednesday</option>");

      //#5 //
      $("img[alt]").first().clone($("div#specials").after("<div></div>"));

  }
}
$(document).ready(function () {
  var obj = new ExerciseManipulate();
  obj.manipulatingFun();
});
