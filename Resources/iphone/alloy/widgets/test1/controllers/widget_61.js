function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_61";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_61 = Ti.UI.createView({
        id: "widget_61"
    });
    $.__views.widget_61 && $.addTopLevelView($.__views.widget_61);
    $.__views.__alloyId14794 = Ti.UI.createView({
        id: "__alloyId14794"
    });
    $.__views.widget_61.add($.__views.__alloyId14794);
    $.__views.__alloyId14795 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14795"
    });
    $.__views.__alloyId14794.add($.__views.__alloyId14795);
    $.__views.__alloyId14796 = Ti.UI.createView({
        id: "__alloyId14796"
    });
    $.__views.__alloyId14796 && $.addTopLevelView($.__views.__alloyId14796);
    $.__views.__alloyId14797 = Ti.UI.createView({
        id: "__alloyId14797"
    });
    $.__views.__alloyId14796.add($.__views.__alloyId14797);
    $.__views.__alloyId14798 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14798"
    });
    $.__views.__alloyId14797.add($.__views.__alloyId14798);
    $.__views.__alloyId14799 = Ti.UI.createView({
        id: "__alloyId14799"
    });
    $.__views.__alloyId14799 && $.addTopLevelView($.__views.__alloyId14799);
    $.__views.__alloyId14800 = Ti.UI.createView({
        id: "__alloyId14800"
    });
    $.__views.__alloyId14799.add($.__views.__alloyId14800);
    $.__views.__alloyId14801 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14801"
    });
    $.__views.__alloyId14800.add($.__views.__alloyId14801);
    $.__views.__alloyId14802 = Ti.UI.createView({
        id: "__alloyId14802"
    });
    $.__views.__alloyId14802 && $.addTopLevelView($.__views.__alloyId14802);
    $.__views.__alloyId14803 = Ti.UI.createView({
        id: "__alloyId14803"
    });
    $.__views.__alloyId14802.add($.__views.__alloyId14803);
    $.__views.__alloyId14804 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14804"
    });
    $.__views.__alloyId14803.add($.__views.__alloyId14804);
    $.__views.__alloyId14805 = Ti.UI.createView({
        id: "__alloyId14805"
    });
    $.__views.__alloyId14805 && $.addTopLevelView($.__views.__alloyId14805);
    $.__views.__alloyId14806 = Ti.UI.createView({
        id: "__alloyId14806"
    });
    $.__views.__alloyId14805.add($.__views.__alloyId14806);
    $.__views.__alloyId14807 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14807"
    });
    $.__views.__alloyId14806.add($.__views.__alloyId14807);
    $.__views.__alloyId14808 = Ti.UI.createView({
        id: "__alloyId14808"
    });
    $.__views.__alloyId14808 && $.addTopLevelView($.__views.__alloyId14808);
    $.__views.__alloyId14809 = Ti.UI.createView({
        id: "__alloyId14809"
    });
    $.__views.__alloyId14808.add($.__views.__alloyId14809);
    $.__views.__alloyId14810 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14810"
    });
    $.__views.__alloyId14809.add($.__views.__alloyId14810);
    $.__views.__alloyId14811 = Ti.UI.createView({
        id: "__alloyId14811"
    });
    $.__views.__alloyId14811 && $.addTopLevelView($.__views.__alloyId14811);
    $.__views.__alloyId14812 = Ti.UI.createView({
        id: "__alloyId14812"
    });
    $.__views.__alloyId14811.add($.__views.__alloyId14812);
    $.__views.__alloyId14813 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14813"
    });
    $.__views.__alloyId14812.add($.__views.__alloyId14813);
    $.__views.__alloyId14814 = Ti.UI.createView({
        id: "__alloyId14814"
    });
    $.__views.__alloyId14814 && $.addTopLevelView($.__views.__alloyId14814);
    $.__views.__alloyId14815 = Ti.UI.createView({
        id: "__alloyId14815"
    });
    $.__views.__alloyId14814.add($.__views.__alloyId14815);
    $.__views.__alloyId14816 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14816"
    });
    $.__views.__alloyId14815.add($.__views.__alloyId14816);
    $.__views.__alloyId14817 = Ti.UI.createView({
        id: "__alloyId14817"
    });
    $.__views.__alloyId14817 && $.addTopLevelView($.__views.__alloyId14817);
    $.__views.__alloyId14818 = Ti.UI.createView({
        id: "__alloyId14818"
    });
    $.__views.__alloyId14817.add($.__views.__alloyId14818);
    $.__views.__alloyId14819 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14819"
    });
    $.__views.__alloyId14818.add($.__views.__alloyId14819);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;