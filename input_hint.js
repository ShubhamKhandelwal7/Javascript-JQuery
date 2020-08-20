/* global document,$ */
class InputHint {
  constructor() {
  }
  addingHint() {
      var $input = $("#search").find("input.input_text");
      var $label = $("label[for=q]");
      var labelText = $label.text();
      $input.val(labelText).addClass("hint");
      $label.remove();
      $input.bind('focus', function () {
          $input.val("").removeClass("hint");
      });

      $input.bind('blur', function () {
          if (!$input.val().trim()) {
              $input.val(labelText).addClass("hint");
          }
      });
  }
}
$(document).ready(function () {
  var obj = new InputHint();
  obj.addingHint();
});
