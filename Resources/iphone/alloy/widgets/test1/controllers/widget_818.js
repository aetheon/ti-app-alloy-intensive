function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_818";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_818 = Ti.UI.createView({
        id: "widget_818"
    });
    $.__views.widget_818 && $.addTopLevelView($.__views.widget_818);
    $.__views.__alloyId20800 = Ti.UI.createView({
        id: "__alloyId20800"
    });
    $.__views.widget_818.add($.__views.__alloyId20800);
    $.__views.__alloyId20801 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20801"
    });
    $.__views.__alloyId20800.add($.__views.__alloyId20801);
    $.__views.__alloyId20802 = Ti.UI.createView({
        id: "__alloyId20802"
    });
    $.__views.__alloyId20802 && $.addTopLevelView($.__views.__alloyId20802);
    $.__views.__alloyId20803 = Ti.UI.createView({
        id: "__alloyId20803"
    });
    $.__views.__alloyId20802.add($.__views.__alloyId20803);
    $.__views.__alloyId20804 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20804"
    });
    $.__views.__alloyId20803.add($.__views.__alloyId20804);
    $.__views.__alloyId20805 = Ti.UI.createView({
        id: "__alloyId20805"
    });
    $.__views.__alloyId20805 && $.addTopLevelView($.__views.__alloyId20805);
    $.__views.__alloyId20806 = Ti.UI.createView({
        id: "__alloyId20806"
    });
    $.__views.__alloyId20805.add($.__views.__alloyId20806);
    $.__views.__alloyId20807 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20807"
    });
    $.__views.__alloyId20806.add($.__views.__alloyId20807);
    $.__views.__alloyId20808 = Ti.UI.createView({
        id: "__alloyId20808"
    });
    $.__views.__alloyId20808 && $.addTopLevelView($.__views.__alloyId20808);
    $.__views.__alloyId20809 = Ti.UI.createView({
        id: "__alloyId20809"
    });
    $.__views.__alloyId20808.add($.__views.__alloyId20809);
    $.__views.__alloyId20810 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20810"
    });
    $.__views.__alloyId20809.add($.__views.__alloyId20810);
    $.__views.__alloyId20811 = Ti.UI.createView({
        id: "__alloyId20811"
    });
    $.__views.__alloyId20811 && $.addTopLevelView($.__views.__alloyId20811);
    $.__views.__alloyId20812 = Ti.UI.createView({
        id: "__alloyId20812"
    });
    $.__views.__alloyId20811.add($.__views.__alloyId20812);
    $.__views.__alloyId20813 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20813"
    });
    $.__views.__alloyId20812.add($.__views.__alloyId20813);
    $.__views.__alloyId20814 = Ti.UI.createView({
        id: "__alloyId20814"
    });
    $.__views.__alloyId20814 && $.addTopLevelView($.__views.__alloyId20814);
    $.__views.__alloyId20815 = Ti.UI.createView({
        id: "__alloyId20815"
    });
    $.__views.__alloyId20814.add($.__views.__alloyId20815);
    $.__views.__alloyId20816 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20816"
    });
    $.__views.__alloyId20815.add($.__views.__alloyId20816);
    $.__views.__alloyId20817 = Ti.UI.createView({
        id: "__alloyId20817"
    });
    $.__views.__alloyId20817 && $.addTopLevelView($.__views.__alloyId20817);
    $.__views.__alloyId20818 = Ti.UI.createView({
        id: "__alloyId20818"
    });
    $.__views.__alloyId20817.add($.__views.__alloyId20818);
    $.__views.__alloyId20819 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20819"
    });
    $.__views.__alloyId20818.add($.__views.__alloyId20819);
    $.__views.__alloyId20820 = Ti.UI.createView({
        id: "__alloyId20820"
    });
    $.__views.__alloyId20820 && $.addTopLevelView($.__views.__alloyId20820);
    $.__views.__alloyId20821 = Ti.UI.createView({
        id: "__alloyId20821"
    });
    $.__views.__alloyId20820.add($.__views.__alloyId20821);
    $.__views.__alloyId20822 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20822"
    });
    $.__views.__alloyId20821.add($.__views.__alloyId20822);
    $.__views.__alloyId20823 = Ti.UI.createView({
        id: "__alloyId20823"
    });
    $.__views.__alloyId20823 && $.addTopLevelView($.__views.__alloyId20823);
    $.__views.__alloyId20824 = Ti.UI.createView({
        id: "__alloyId20824"
    });
    $.__views.__alloyId20823.add($.__views.__alloyId20824);
    $.__views.__alloyId20825 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20825"
    });
    $.__views.__alloyId20824.add($.__views.__alloyId20825);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;