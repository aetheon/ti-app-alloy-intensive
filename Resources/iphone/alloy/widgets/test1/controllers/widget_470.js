function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_470";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_470 = Ti.UI.createView({
        id: "widget_470"
    });
    $.__views.widget_470 && $.addTopLevelView($.__views.widget_470);
    $.__views.__alloyId10764 = Ti.UI.createView({
        id: "__alloyId10764"
    });
    $.__views.widget_470.add($.__views.__alloyId10764);
    $.__views.__alloyId10765 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10765"
    });
    $.__views.__alloyId10764.add($.__views.__alloyId10765);
    $.__views.__alloyId10766 = Ti.UI.createView({
        id: "__alloyId10766"
    });
    $.__views.__alloyId10766 && $.addTopLevelView($.__views.__alloyId10766);
    $.__views.__alloyId10767 = Ti.UI.createView({
        id: "__alloyId10767"
    });
    $.__views.__alloyId10766.add($.__views.__alloyId10767);
    $.__views.__alloyId10768 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10768"
    });
    $.__views.__alloyId10767.add($.__views.__alloyId10768);
    $.__views.__alloyId10769 = Ti.UI.createView({
        id: "__alloyId10769"
    });
    $.__views.__alloyId10769 && $.addTopLevelView($.__views.__alloyId10769);
    $.__views.__alloyId10770 = Ti.UI.createView({
        id: "__alloyId10770"
    });
    $.__views.__alloyId10769.add($.__views.__alloyId10770);
    $.__views.__alloyId10771 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10771"
    });
    $.__views.__alloyId10770.add($.__views.__alloyId10771);
    $.__views.__alloyId10772 = Ti.UI.createView({
        id: "__alloyId10772"
    });
    $.__views.__alloyId10772 && $.addTopLevelView($.__views.__alloyId10772);
    $.__views.__alloyId10773 = Ti.UI.createView({
        id: "__alloyId10773"
    });
    $.__views.__alloyId10772.add($.__views.__alloyId10773);
    $.__views.__alloyId10774 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10774"
    });
    $.__views.__alloyId10773.add($.__views.__alloyId10774);
    $.__views.__alloyId10775 = Ti.UI.createView({
        id: "__alloyId10775"
    });
    $.__views.__alloyId10775 && $.addTopLevelView($.__views.__alloyId10775);
    $.__views.__alloyId10776 = Ti.UI.createView({
        id: "__alloyId10776"
    });
    $.__views.__alloyId10775.add($.__views.__alloyId10776);
    $.__views.__alloyId10777 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10777"
    });
    $.__views.__alloyId10776.add($.__views.__alloyId10777);
    $.__views.__alloyId10778 = Ti.UI.createView({
        id: "__alloyId10778"
    });
    $.__views.__alloyId10778 && $.addTopLevelView($.__views.__alloyId10778);
    $.__views.__alloyId10779 = Ti.UI.createView({
        id: "__alloyId10779"
    });
    $.__views.__alloyId10778.add($.__views.__alloyId10779);
    $.__views.__alloyId10780 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10780"
    });
    $.__views.__alloyId10779.add($.__views.__alloyId10780);
    $.__views.__alloyId10781 = Ti.UI.createView({
        id: "__alloyId10781"
    });
    $.__views.__alloyId10781 && $.addTopLevelView($.__views.__alloyId10781);
    $.__views.__alloyId10782 = Ti.UI.createView({
        id: "__alloyId10782"
    });
    $.__views.__alloyId10781.add($.__views.__alloyId10782);
    $.__views.__alloyId10783 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10783"
    });
    $.__views.__alloyId10782.add($.__views.__alloyId10783);
    $.__views.__alloyId10784 = Ti.UI.createView({
        id: "__alloyId10784"
    });
    $.__views.__alloyId10784 && $.addTopLevelView($.__views.__alloyId10784);
    $.__views.__alloyId10785 = Ti.UI.createView({
        id: "__alloyId10785"
    });
    $.__views.__alloyId10784.add($.__views.__alloyId10785);
    $.__views.__alloyId10786 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10786"
    });
    $.__views.__alloyId10785.add($.__views.__alloyId10786);
    $.__views.__alloyId10787 = Ti.UI.createView({
        id: "__alloyId10787"
    });
    $.__views.__alloyId10787 && $.addTopLevelView($.__views.__alloyId10787);
    $.__views.__alloyId10788 = Ti.UI.createView({
        id: "__alloyId10788"
    });
    $.__views.__alloyId10787.add($.__views.__alloyId10788);
    $.__views.__alloyId10789 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10789"
    });
    $.__views.__alloyId10788.add($.__views.__alloyId10789);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;