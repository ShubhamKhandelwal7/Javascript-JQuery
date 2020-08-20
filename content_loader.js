/* global $,document */
class ContentLoader {
  constructor(selector, JSONURL) {
    this.$blogLists = $(selector.blogUlSelector).children(selector.listTagSelector);
    this.headingTag = selector.headingTagSelector;
    this.divTagSelector = selector.divTagSelector;
    this.targetAttrName = selector.targetAttrSelector;
    this.anchorElements = selector.anchorElements;
    this.JSONURL = JSONURL;
  }
  loadExternal() {
    var _this = this;
    this.$blogLists.each(function (index) {
      _this.bindEvent(index);
    });
  }
  bindEvent(index) {
    var _this = this;
    this.$blogLists.eq(index).bind('click', function (event) {
      if (_this.$blogLists.eq(index).children(_this.divTagSelector).length === 0) {
        _this.$targetDiv = $("<div></div>").appendTo(_this.$blogLists.eq(index));
        _this.storeReference(_this.$blogLists.eq(index));
        event.preventDefault();
        _this.$targetDiv.load(_this.JSONURL + " #" + _this.getId(index));
      } else {
        event.preventDefault();
      }
    });
  }
  getId(index) {
    return this.anchorElements[index].href.split("#")[1];
  }
  storeReference($blogList) {
    $blogList.find(this.headingTag).data(this.targetAttrName, this.$targetDiv);
  }
}

$(document).ready(function () {
  var selector = {
    blogUlSelector: document.querySelector("[data-blogList=true]"),
    anchorElements: document.querySelectorAll("[data-href=true]"),
    headingTagSelector: "h3",
    listTagSelector: "li",
    divTagSelector: "div",
    targetAttrSelector: "target"
  };
  const JSONURL = "https://bitbucket.org/skhandelwal7/jquery/raw/f29b0196c18a6b9f9742bb9321ae93e194918746/exercises/data/blog.html";
  var contentLoaderObj = new ContentLoader(selector, JSONURL);
  contentLoaderObj.loadExternal();
});
