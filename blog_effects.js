/* global document,$ */
class BlogEffects {
    constructor() {
    }
    revealHidden(parentSelector,listSelector) {
        var $listElements = $(parentSelector).children(listSelector);

        $listElements.each(function () {
            var $listElement = $(this);
            var $heading = $listElement.find("[data-heading=true]");
            $heading.bind('click', function (event) {
                event.preventDefault();
                $listElement.find("[data-content=true]").slideDown();
                $listElement.siblings("li").find("[data-content=true]").slideUp();
            });
        });
    }
}
$(document).ready(function () {
    var obj = new BlogEffects();
    var parentSelector = "[data-blogUlist=true]";
    var listSelector = "[data-subList=true]";
    obj.revealHidden(parentSelector,listSelector);
});
