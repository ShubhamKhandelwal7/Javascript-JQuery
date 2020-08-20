/* global $, document */
class TwoColumnSorter {
  constructor(customSelector = {}) {
    const defaultSelector = {
      mainListSelector: "initial-count",
      listDivSelector: "#lists",
      sortButtonSelector: "#triggerButton",
      childListSelector: "priority-order"
    };
    this.updatedSelector = Object.assign({}, defaultSelector, customSelector);
    this.$mainList = $(`[${this.updatedSelector.mainListSelector}]`);
    this.mainListSelector = this.updatedSelector.mainListSelector;
    this.childListSelector = this.updatedSelector.childListSelector; 
    this.$listDiv = $(this.updatedSelector.listDivSelector);
    this.$sortButton = $(this.updatedSelector.sortButtonSelector);
  }

  init() {
    const clickHandler = () => {
      this.sortList(this.$mainList);
      this.createNewLists(this.$mainList, this.$listDiv, this.$sortButton);
    };
    this.$sortButton.on("click", clickHandler);
    $(document).on("click", "#seeAll", () => { this.seeAll(this.$mainList, this.$listDiv); });
    $(document).on("click", "#seeLess", () => { this.seeLess(); });
  }

  sortList(mainList) {
    var switching = true;
    while (switching && mainList.children().length > 1) {
      for (let j = 0; j < mainList.children().length - 1; j++) {
        switching = false;
        if (mainList.children().eq(j).attr(this.childListSelector) > mainList.children().eq(j + 1).attr(this.childListSelector)) {
          switching = true;
          mainList.children().eq(j + 1).insertBefore(mainList.children().eq(j), mainList.children().eq(j + 1));
          break;
        }
      }
    }
    this.$childList = $(`[${this.mainListSelector}] li`);
  }

  createNewLists(mainList, $listDiv, sortButton) {
    var mainListLength = mainList.children().length;
    var frag = document.createDocumentFragment();
    var div = document.createElement('div');
    var leftDiv = TwoColumnSorter.htmlCreator("div", div, "leftDiv");
    var rightDiv = TwoColumnSorter.htmlCreator("div", div, "rightDiv");
    this.leftList = TwoColumnSorter.htmlCreator("ul", leftDiv);
    this.rightList = TwoColumnSorter.htmlCreator("ul", rightDiv);
    frag.appendChild(div);
    $listDiv.append(frag);

    for (let i = 0; i < mainListLength; i++) {
      if (i < mainList.attr(this.mainListSelector)) {
        var thisList = this.leftList.append(this.$childList[i]);
        this.rightList.append(thisList.children().eq(i).clone());
      }
    }
    mainList.hide();
    sortButton.hide();
    this.rightList.children().last().replaceWith(
      $('<a>', { text: 'See All', title: 'See All', href: '#' }).attr("id", "seeAll"));
  }

  seeAll(mainList, $listDiv) {
    this.leftList.hide();
    this.rightList.hide();
    if (typeof this.leftListAll != "undefined") {
      this.leftListAll.show();
      this.rightListAll.show();
    } else {
      mainList.prepend(this.leftList.children().clone());
      var mainListLen = mainList.children().length;
      var frag = document.createDocumentFragment();
      var div = document.createElement('div');
      var leftDiv = TwoColumnSorter.htmlCreator("div", div, "leftDivAll");
      var rightDiv = TwoColumnSorter.htmlCreator("div", div, "rightDivAll");
      this.leftListAll = TwoColumnSorter.htmlCreator("ul", leftDiv);
      this.rightListAll = TwoColumnSorter.htmlCreator("ul", rightDiv);
      frag.appendChild(div);
      $listDiv.append(frag);

      for (let i = 0; i < mainListLen; i++) {
        if (i < mainListLen / 2) {
          this.leftListAll.append(this.$childList.eq(i).clone());
        } else {
          this.rightListAll.append(this.$childList.eq(i).clone());
        }
      }
      this.rightListAll.children().last().replaceWith(
        $('<a>', { text: 'See Less', title: 'See Less', href: '#' }).attr("id", "seeLess"));
    }
  }

  seeLess() {
    this.leftList.show();
    this.rightList.show();
    this.leftListAll.hide();
    this.rightListAll.hide();
  }

  static htmlCreator(tag, appendToName, id) {
    return $(`<${tag}>`).appendTo(appendToName).attr("id", id);
  }
}

$(document).ready(() => {
  const obj = new TwoColumnSorter();
  obj.init();
});
