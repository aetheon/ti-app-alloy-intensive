function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_193";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_193 = Ti.UI.createView({
        id: "widget_193"
    });
    $.__views.widget_193 && $.addTopLevelView($.__views.widget_193);
    $.__views.__alloyId2756 = Ti.UI.createView({
        id: "__alloyId2756"
    });
    $.__views.widget_193.add($.__views.__alloyId2756);
    $.__views.__alloyId2757 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2757"
    });
    $.__views.__alloyId2756.add($.__views.__alloyId2757);
    $.__views.__alloyId2758 = Ti.UI.createView({
        id: "__alloyId2758"
    });
    $.__views.__alloyId2758 && $.addTopLevelView($.__views.__alloyId2758);
    $.__views.__alloyId2759 = Ti.UI.createView({
        id: "__alloyId2759"
    });
    $.__views.__alloyId2758.add($.__views.__alloyId2759);
    $.__views.__alloyId2760 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2760"
    });
    $.__views.__alloyId2759.add($.__views.__alloyId2760);
    $.__views.__alloyId2761 = Ti.UI.createView({
        id: "__alloyId2761"
    });
    $.__views.__alloyId2761 && $.addTopLevelView($.__views.__alloyId2761);
    $.__views.__alloyId2762 = Ti.UI.createView({
        id: "__alloyId2762"
    });
    $.__views.__alloyId2761.add($.__views.__alloyId2762);
    $.__views.__alloyId2763 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2763"
    });
    $.__views.__alloyId2762.add($.__views.__alloyId2763);
    $.__views.__alloyId2764 = Ti.UI.createView({
        id: "__alloyId2764"
    });
    $.__views.__alloyId2764 && $.addTopLevelView($.__views.__alloyId2764);
    $.__views.__alloyId2765 = Ti.UI.createView({
        id: "__alloyId2765"
    });
    $.__views.__alloyId2764.add($.__views.__alloyId2765);
    $.__views.__alloyId2766 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2766"
    });
    $.__views.__alloyId2765.add($.__views.__alloyId2766);
    $.__views.__alloyId2767 = Ti.UI.createView({
        id: "__alloyId2767"
    });
    $.__views.__alloyId2767 && $.addTopLevelView($.__views.__alloyId2767);
    $.__views.__alloyId2768 = Ti.UI.createView({
        id: "__alloyId2768"
    });
    $.__views.__alloyId2767.add($.__views.__alloyId2768);
    $.__views.__alloyId2769 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2769"
    });
    $.__views.__alloyId2768.add($.__views.__alloyId2769);
    $.__views.__alloyId2770 = Ti.UI.createView({
        id: "__alloyId2770"
    });
    $.__views.__alloyId2770 && $.addTopLevelView($.__views.__alloyId2770);
    $.__views.__alloyId2771 = Ti.UI.createView({
        id: "__alloyId2771"
    });
    $.__views.__alloyId2770.add($.__views.__alloyId2771);
    $.__views.__alloyId2772 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2772"
    });
    $.__views.__alloyId2771.add($.__views.__alloyId2772);
    $.__views.__alloyId2773 = Ti.UI.createView({
        id: "__alloyId2773"
    });
    $.__views.__alloyId2773 && $.addTopLevelView($.__views.__alloyId2773);
    $.__views.__alloyId2774 = Ti.UI.createView({
        id: "__alloyId2774"
    });
    $.__views.__alloyId2773.add($.__views.__alloyId2774);
    $.__views.__alloyId2775 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2775"
    });
    $.__views.__alloyId2774.add($.__views.__alloyId2775);
    $.__views.__alloyId2776 = Ti.UI.createView({
        id: "__alloyId2776"
    });
    $.__views.__alloyId2776 && $.addTopLevelView($.__views.__alloyId2776);
    $.__views.__alloyId2777 = Ti.UI.createView({
        id: "__alloyId2777"
    });
    $.__views.__alloyId2776.add($.__views.__alloyId2777);
    $.__views.__alloyId2778 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2778"
    });
    $.__views.__alloyId2777.add($.__views.__alloyId2778);
    $.__views.__alloyId2779 = Ti.UI.createView({
        id: "__alloyId2779"
    });
    $.__views.__alloyId2779 && $.addTopLevelView($.__views.__alloyId2779);
    $.__views.__alloyId2780 = Ti.UI.createView({
        id: "__alloyId2780"
    });
    $.__views.__alloyId2779.add($.__views.__alloyId2780);
    $.__views.__alloyId2781 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2781"
    });
    $.__views.__alloyId2780.add($.__views.__alloyId2781);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;