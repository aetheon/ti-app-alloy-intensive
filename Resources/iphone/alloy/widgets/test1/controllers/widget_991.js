function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_991";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_991 = Ti.UI.createView({
        id: "widget_991"
    });
    $.__views.widget_991 && $.addTopLevelView($.__views.widget_991);
    $.__views.__alloyId25792 = Ti.UI.createView({
        id: "__alloyId25792"
    });
    $.__views.widget_991.add($.__views.__alloyId25792);
    $.__views.__alloyId25793 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25793"
    });
    $.__views.__alloyId25792.add($.__views.__alloyId25793);
    $.__views.__alloyId25794 = Ti.UI.createView({
        id: "__alloyId25794"
    });
    $.__views.__alloyId25794 && $.addTopLevelView($.__views.__alloyId25794);
    $.__views.__alloyId25795 = Ti.UI.createView({
        id: "__alloyId25795"
    });
    $.__views.__alloyId25794.add($.__views.__alloyId25795);
    $.__views.__alloyId25796 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25796"
    });
    $.__views.__alloyId25795.add($.__views.__alloyId25796);
    $.__views.__alloyId25797 = Ti.UI.createView({
        id: "__alloyId25797"
    });
    $.__views.__alloyId25797 && $.addTopLevelView($.__views.__alloyId25797);
    $.__views.__alloyId25798 = Ti.UI.createView({
        id: "__alloyId25798"
    });
    $.__views.__alloyId25797.add($.__views.__alloyId25798);
    $.__views.__alloyId25799 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25799"
    });
    $.__views.__alloyId25798.add($.__views.__alloyId25799);
    $.__views.__alloyId25800 = Ti.UI.createView({
        id: "__alloyId25800"
    });
    $.__views.__alloyId25800 && $.addTopLevelView($.__views.__alloyId25800);
    $.__views.__alloyId25801 = Ti.UI.createView({
        id: "__alloyId25801"
    });
    $.__views.__alloyId25800.add($.__views.__alloyId25801);
    $.__views.__alloyId25802 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25802"
    });
    $.__views.__alloyId25801.add($.__views.__alloyId25802);
    $.__views.__alloyId25803 = Ti.UI.createView({
        id: "__alloyId25803"
    });
    $.__views.__alloyId25803 && $.addTopLevelView($.__views.__alloyId25803);
    $.__views.__alloyId25804 = Ti.UI.createView({
        id: "__alloyId25804"
    });
    $.__views.__alloyId25803.add($.__views.__alloyId25804);
    $.__views.__alloyId25805 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25805"
    });
    $.__views.__alloyId25804.add($.__views.__alloyId25805);
    $.__views.__alloyId25806 = Ti.UI.createView({
        id: "__alloyId25806"
    });
    $.__views.__alloyId25806 && $.addTopLevelView($.__views.__alloyId25806);
    $.__views.__alloyId25807 = Ti.UI.createView({
        id: "__alloyId25807"
    });
    $.__views.__alloyId25806.add($.__views.__alloyId25807);
    $.__views.__alloyId25808 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25808"
    });
    $.__views.__alloyId25807.add($.__views.__alloyId25808);
    $.__views.__alloyId25809 = Ti.UI.createView({
        id: "__alloyId25809"
    });
    $.__views.__alloyId25809 && $.addTopLevelView($.__views.__alloyId25809);
    $.__views.__alloyId25810 = Ti.UI.createView({
        id: "__alloyId25810"
    });
    $.__views.__alloyId25809.add($.__views.__alloyId25810);
    $.__views.__alloyId25811 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25811"
    });
    $.__views.__alloyId25810.add($.__views.__alloyId25811);
    $.__views.__alloyId25812 = Ti.UI.createView({
        id: "__alloyId25812"
    });
    $.__views.__alloyId25812 && $.addTopLevelView($.__views.__alloyId25812);
    $.__views.__alloyId25813 = Ti.UI.createView({
        id: "__alloyId25813"
    });
    $.__views.__alloyId25812.add($.__views.__alloyId25813);
    $.__views.__alloyId25814 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25814"
    });
    $.__views.__alloyId25813.add($.__views.__alloyId25814);
    $.__views.__alloyId25815 = Ti.UI.createView({
        id: "__alloyId25815"
    });
    $.__views.__alloyId25815 && $.addTopLevelView($.__views.__alloyId25815);
    $.__views.__alloyId25816 = Ti.UI.createView({
        id: "__alloyId25816"
    });
    $.__views.__alloyId25815.add($.__views.__alloyId25816);
    $.__views.__alloyId25817 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25817"
    });
    $.__views.__alloyId25816.add($.__views.__alloyId25817);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;