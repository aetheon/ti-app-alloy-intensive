function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_540";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_540 = Ti.UI.createView({
        id: "widget_540"
    });
    $.__views.widget_540 && $.addTopLevelView($.__views.widget_540);
    $.__views.__alloyId12792 = Ti.UI.createView({
        id: "__alloyId12792"
    });
    $.__views.widget_540.add($.__views.__alloyId12792);
    $.__views.__alloyId12793 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12793"
    });
    $.__views.__alloyId12792.add($.__views.__alloyId12793);
    $.__views.__alloyId12794 = Ti.UI.createView({
        id: "__alloyId12794"
    });
    $.__views.__alloyId12794 && $.addTopLevelView($.__views.__alloyId12794);
    $.__views.__alloyId12795 = Ti.UI.createView({
        id: "__alloyId12795"
    });
    $.__views.__alloyId12794.add($.__views.__alloyId12795);
    $.__views.__alloyId12796 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12796"
    });
    $.__views.__alloyId12795.add($.__views.__alloyId12796);
    $.__views.__alloyId12797 = Ti.UI.createView({
        id: "__alloyId12797"
    });
    $.__views.__alloyId12797 && $.addTopLevelView($.__views.__alloyId12797);
    $.__views.__alloyId12798 = Ti.UI.createView({
        id: "__alloyId12798"
    });
    $.__views.__alloyId12797.add($.__views.__alloyId12798);
    $.__views.__alloyId12799 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12799"
    });
    $.__views.__alloyId12798.add($.__views.__alloyId12799);
    $.__views.__alloyId12800 = Ti.UI.createView({
        id: "__alloyId12800"
    });
    $.__views.__alloyId12800 && $.addTopLevelView($.__views.__alloyId12800);
    $.__views.__alloyId12801 = Ti.UI.createView({
        id: "__alloyId12801"
    });
    $.__views.__alloyId12800.add($.__views.__alloyId12801);
    $.__views.__alloyId12802 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12802"
    });
    $.__views.__alloyId12801.add($.__views.__alloyId12802);
    $.__views.__alloyId12803 = Ti.UI.createView({
        id: "__alloyId12803"
    });
    $.__views.__alloyId12803 && $.addTopLevelView($.__views.__alloyId12803);
    $.__views.__alloyId12804 = Ti.UI.createView({
        id: "__alloyId12804"
    });
    $.__views.__alloyId12803.add($.__views.__alloyId12804);
    $.__views.__alloyId12805 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12805"
    });
    $.__views.__alloyId12804.add($.__views.__alloyId12805);
    $.__views.__alloyId12806 = Ti.UI.createView({
        id: "__alloyId12806"
    });
    $.__views.__alloyId12806 && $.addTopLevelView($.__views.__alloyId12806);
    $.__views.__alloyId12807 = Ti.UI.createView({
        id: "__alloyId12807"
    });
    $.__views.__alloyId12806.add($.__views.__alloyId12807);
    $.__views.__alloyId12808 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12808"
    });
    $.__views.__alloyId12807.add($.__views.__alloyId12808);
    $.__views.__alloyId12809 = Ti.UI.createView({
        id: "__alloyId12809"
    });
    $.__views.__alloyId12809 && $.addTopLevelView($.__views.__alloyId12809);
    $.__views.__alloyId12810 = Ti.UI.createView({
        id: "__alloyId12810"
    });
    $.__views.__alloyId12809.add($.__views.__alloyId12810);
    $.__views.__alloyId12811 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12811"
    });
    $.__views.__alloyId12810.add($.__views.__alloyId12811);
    $.__views.__alloyId12812 = Ti.UI.createView({
        id: "__alloyId12812"
    });
    $.__views.__alloyId12812 && $.addTopLevelView($.__views.__alloyId12812);
    $.__views.__alloyId12813 = Ti.UI.createView({
        id: "__alloyId12813"
    });
    $.__views.__alloyId12812.add($.__views.__alloyId12813);
    $.__views.__alloyId12814 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12814"
    });
    $.__views.__alloyId12813.add($.__views.__alloyId12814);
    $.__views.__alloyId12815 = Ti.UI.createView({
        id: "__alloyId12815"
    });
    $.__views.__alloyId12815 && $.addTopLevelView($.__views.__alloyId12815);
    $.__views.__alloyId12816 = Ti.UI.createView({
        id: "__alloyId12816"
    });
    $.__views.__alloyId12815.add($.__views.__alloyId12816);
    $.__views.__alloyId12817 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12817"
    });
    $.__views.__alloyId12816.add($.__views.__alloyId12817);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;