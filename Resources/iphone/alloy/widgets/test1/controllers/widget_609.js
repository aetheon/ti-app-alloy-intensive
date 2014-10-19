function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_609";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_609 = Ti.UI.createView({
        id: "widget_609"
    });
    $.__views.widget_609 && $.addTopLevelView($.__views.widget_609);
    $.__views.__alloyId14768 = Ti.UI.createView({
        id: "__alloyId14768"
    });
    $.__views.widget_609.add($.__views.__alloyId14768);
    $.__views.__alloyId14769 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14769"
    });
    $.__views.__alloyId14768.add($.__views.__alloyId14769);
    $.__views.__alloyId14770 = Ti.UI.createView({
        id: "__alloyId14770"
    });
    $.__views.__alloyId14770 && $.addTopLevelView($.__views.__alloyId14770);
    $.__views.__alloyId14771 = Ti.UI.createView({
        id: "__alloyId14771"
    });
    $.__views.__alloyId14770.add($.__views.__alloyId14771);
    $.__views.__alloyId14772 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14772"
    });
    $.__views.__alloyId14771.add($.__views.__alloyId14772);
    $.__views.__alloyId14773 = Ti.UI.createView({
        id: "__alloyId14773"
    });
    $.__views.__alloyId14773 && $.addTopLevelView($.__views.__alloyId14773);
    $.__views.__alloyId14774 = Ti.UI.createView({
        id: "__alloyId14774"
    });
    $.__views.__alloyId14773.add($.__views.__alloyId14774);
    $.__views.__alloyId14775 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14775"
    });
    $.__views.__alloyId14774.add($.__views.__alloyId14775);
    $.__views.__alloyId14776 = Ti.UI.createView({
        id: "__alloyId14776"
    });
    $.__views.__alloyId14776 && $.addTopLevelView($.__views.__alloyId14776);
    $.__views.__alloyId14777 = Ti.UI.createView({
        id: "__alloyId14777"
    });
    $.__views.__alloyId14776.add($.__views.__alloyId14777);
    $.__views.__alloyId14778 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14778"
    });
    $.__views.__alloyId14777.add($.__views.__alloyId14778);
    $.__views.__alloyId14779 = Ti.UI.createView({
        id: "__alloyId14779"
    });
    $.__views.__alloyId14779 && $.addTopLevelView($.__views.__alloyId14779);
    $.__views.__alloyId14780 = Ti.UI.createView({
        id: "__alloyId14780"
    });
    $.__views.__alloyId14779.add($.__views.__alloyId14780);
    $.__views.__alloyId14781 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14781"
    });
    $.__views.__alloyId14780.add($.__views.__alloyId14781);
    $.__views.__alloyId14782 = Ti.UI.createView({
        id: "__alloyId14782"
    });
    $.__views.__alloyId14782 && $.addTopLevelView($.__views.__alloyId14782);
    $.__views.__alloyId14783 = Ti.UI.createView({
        id: "__alloyId14783"
    });
    $.__views.__alloyId14782.add($.__views.__alloyId14783);
    $.__views.__alloyId14784 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14784"
    });
    $.__views.__alloyId14783.add($.__views.__alloyId14784);
    $.__views.__alloyId14785 = Ti.UI.createView({
        id: "__alloyId14785"
    });
    $.__views.__alloyId14785 && $.addTopLevelView($.__views.__alloyId14785);
    $.__views.__alloyId14786 = Ti.UI.createView({
        id: "__alloyId14786"
    });
    $.__views.__alloyId14785.add($.__views.__alloyId14786);
    $.__views.__alloyId14787 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14787"
    });
    $.__views.__alloyId14786.add($.__views.__alloyId14787);
    $.__views.__alloyId14788 = Ti.UI.createView({
        id: "__alloyId14788"
    });
    $.__views.__alloyId14788 && $.addTopLevelView($.__views.__alloyId14788);
    $.__views.__alloyId14789 = Ti.UI.createView({
        id: "__alloyId14789"
    });
    $.__views.__alloyId14788.add($.__views.__alloyId14789);
    $.__views.__alloyId14790 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14790"
    });
    $.__views.__alloyId14789.add($.__views.__alloyId14790);
    $.__views.__alloyId14791 = Ti.UI.createView({
        id: "__alloyId14791"
    });
    $.__views.__alloyId14791 && $.addTopLevelView($.__views.__alloyId14791);
    $.__views.__alloyId14792 = Ti.UI.createView({
        id: "__alloyId14792"
    });
    $.__views.__alloyId14791.add($.__views.__alloyId14792);
    $.__views.__alloyId14793 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14793"
    });
    $.__views.__alloyId14792.add($.__views.__alloyId14793);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;