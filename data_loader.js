/* global $,document */
const DAYS_DATA_URL = "https://bitbucket.org/skhandelwal7/jquery/raw/f29b0196c18a6b9f9742bb9321ae93e194918746/exercises/data/specials.json";
class JsonDataLoader {
  constructor(divSelector) {
    this.daysContentDiv = document.querySelector(divSelector);
    this.buttonsClass ="buttons";
  }
  init() {
    this.cacheresp = null;
    this.$daysForm = $(this.daysContentDiv).find("form");
    this.$choices = $(this.$daysForm).find("select");
    this.triggerEvents();
  }
  triggerEvents() {
    this.$daysForm.after($("<div></div>"));
    this.$choices.bind('change', () => {
      this.$choice = this.$choices.find("option:selected").val();
      this.getDataJson();
    });
    $(this.daysContentDiv).find("."+this.buttonsClass).remove();
  }
  getDataJson() {
    if (!this.cacheresp) {
      var $jsonDaysData = $.getJSON(DAYS_DATA_URL, (resp) => {
        this.cacheresp = resp;
        this.showData.call(this, this.cacheresp);
      });
    } else {
      this.showData.call(this, this.cacheresp);
    }
  }
  showData(resp) {
    $.each(resp, (key, value) => {
      if (key == this.$choice) {
        this.$daysForm.next("div").html("<h3>" + value.title + "</h3>\n<p>" + value.text + "</p><img src=" + value.image + "</img>").css("color", value.color);
      }
    });
  }
}

$(document).ready(function () {
  var divSelector = "[data-specials=true]";
  var obj = new JsonDataLoader(divSelector);
  obj.init();
});
