/* global document,$ */
class ExerciseSelecting {
  constructor() {
  }
  selectingFun() {
    //#1 //all of the div elements that have a class of "module"
    var allDivsModule = $("div.module");

    //#2 //get the third item in the #myList unordered list
    var thirdMyListItem1 = $("#myListItem"); //this one being the most accurate since an ID is unique throughout the DOM and ID selectors are most efficient.
    var thirdMyListItem2 = $("#myList").children("#myListItem");
    var thirdMyListItem3 = $("#listItem_2").next();
    var thirdMyListItem4 = $("li#myListItem").closest("li");

    //#3 // label for the search input using an attribute selector.
    var labelForSearch = $("label[for=q]");

    //#4 //how many elements on the page are hidden
    var findHidden = $("body").find(":hidden").length;

    //#5 // image elements on the page have an alt attribute.
    var noOfAltAttrib = $("img[alt]").length;

    //#6 //all of the odd table rows in the table body
    var oddTableTr = $("#fruits > tbody > tr:nth-child(odd)");
  }
}
$(document).ready(function () {
  var obj = new ExerciseSelecting();
  obj.selectingFun();
});
