/*global document,$ */
class SlideShowManager {
  constructor(selector) {
    this.$slideElements = selector.$slideElements;
    this.$logoElement = selector.$logoElement;
    this.$headerElement = selector.$headerElement;
    this.navTag = selector.navTagSelector;
  }
  createSlideShow() {
    $("body").prepend(this.$slideElements);
    $(this.$logoElement).before($("<nav></nav>"));
    this.$slideElements.hide();
    this.triggerSlideshow();
  }
  triggerSlideshow() {
    this.$slideElements.eq(0).fadeIn(1500, () => {
      this.nextSlide(0, this.$slideElements.length);
    });
    this.slideNum(0, this.$slideElements.length);
  }
  nextSlide(currSlide, totalSlide) {
    this.$slideElements.eq(currSlide).fadeOut(1500, () => {
      currSlide = (currSlide + 1) % totalSlide;
      this.slideNum(currSlide, totalSlide);
      this.$slideElements.eq(currSlide).fadeIn(1500, () => {
        this.nextSlide(currSlide, totalSlide);
      });
    });
  }
  slideNum(currSlide, totalSlide) {
    this.$headerElement.find(this.navTag).html("image no: " + (currSlide + 1) + "/" + totalSlide).css("margin-left", "56%");
  }
}
$(document).ready(function () {
  var selector = {
    $slideElements: $("#slideshow li").find("img"),
    $logoElement: $("#logo"),
    $headerElement: $("#header"),
    navTagSelector: "nav"
  };
  var SlideShowManagerObj = new SlideShowManager(selector);
  SlideShowManagerObj.createSlideShow();
});
