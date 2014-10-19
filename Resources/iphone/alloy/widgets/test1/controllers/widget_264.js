function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_264";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_264 = Ti.UI.createView({
        id: "widget_264"
    });
    $.__views.widget_264 && $.addTopLevelView($.__views.widget_264);
    $.__views.__alloyId4810 = Ti.UI.createView({
        id: "__alloyId4810"
    });
    $.__views.widget_264.add($.__views.__alloyId4810);
    $.__views.__alloyId4811 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4811"
    });
    $.__views.__alloyId4810.add($.__views.__alloyId4811);
    $.__views.__alloyId4812 = Ti.UI.createView({
        id: "__alloyId4812"
    });
    $.__views.__alloyId4812 && $.addTopLevelView($.__views.__alloyId4812);
    $.__views.__alloyId4813 = Ti.UI.createView({
        id: "__alloyId4813"
    });
    $.__views.__alloyId4812.add($.__views.__alloyId4813);
    $.__views.__alloyId4814 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4814"
    });
    $.__views.__alloyId4813.add($.__views.__alloyId4814);
    $.__views.__alloyId4815 = Ti.UI.createView({
        id: "__alloyId4815"
    });
    $.__views.__alloyId4815 && $.addTopLevelView($.__views.__alloyId4815);
    $.__views.__alloyId4816 = Ti.UI.createView({
        id: "__alloyId4816"
    });
    $.__views.__alloyId4815.add($.__views.__alloyId4816);
    $.__views.__alloyId4817 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4817"
    });
    $.__views.__alloyId4816.add($.__views.__alloyId4817);
    $.__views.__alloyId4818 = Ti.UI.createView({
        id: "__alloyId4818"
    });
    $.__views.__alloyId4818 && $.addTopLevelView($.__views.__alloyId4818);
    $.__views.__alloyId4819 = Ti.UI.createView({
        id: "__alloyId4819"
    });
    $.__views.__alloyId4818.add($.__views.__alloyId4819);
    $.__views.__alloyId4820 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4820"
    });
    $.__views.__alloyId4819.add($.__views.__alloyId4820);
    $.__views.__alloyId4821 = Ti.UI.createView({
        id: "__alloyId4821"
    });
    $.__views.__alloyId4821 && $.addTopLevelView($.__views.__alloyId4821);
    $.__views.__alloyId4822 = Ti.UI.createView({
        id: "__alloyId4822"
    });
    $.__views.__alloyId4821.add($.__views.__alloyId4822);
    $.__views.__alloyId4823 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4823"
    });
    $.__views.__alloyId4822.add($.__views.__alloyId4823);
    $.__views.__alloyId4824 = Ti.UI.createView({
        id: "__alloyId4824"
    });
    $.__views.__alloyId4824 && $.addTopLevelView($.__views.__alloyId4824);
    $.__views.__alloyId4825 = Ti.UI.createView({
        id: "__alloyId4825"
    });
    $.__views.__alloyId4824.add($.__views.__alloyId4825);
    $.__views.__alloyId4826 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4826"
    });
    $.__views.__alloyId4825.add($.__views.__alloyId4826);
    $.__views.__alloyId4827 = Ti.UI.createView({
        id: "__alloyId4827"
    });
    $.__views.__alloyId4827 && $.addTopLevelView($.__views.__alloyId4827);
    $.__views.__alloyId4828 = Ti.UI.createView({
        id: "__alloyId4828"
    });
    $.__views.__alloyId4827.add($.__views.__alloyId4828);
    $.__views.__alloyId4829 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4829"
    });
    $.__views.__alloyId4828.add($.__views.__alloyId4829);
    $.__views.__alloyId4830 = Ti.UI.createView({
        id: "__alloyId4830"
    });
    $.__views.__alloyId4830 && $.addTopLevelView($.__views.__alloyId4830);
    $.__views.__alloyId4831 = Ti.UI.createView({
        id: "__alloyId4831"
    });
    $.__views.__alloyId4830.add($.__views.__alloyId4831);
    $.__views.__alloyId4832 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4832"
    });
    $.__views.__alloyId4831.add($.__views.__alloyId4832);
    $.__views.__alloyId4833 = Ti.UI.createView({
        id: "__alloyId4833"
    });
    $.__views.__alloyId4833 && $.addTopLevelView($.__views.__alloyId4833);
    $.__views.__alloyId4834 = Ti.UI.createView({
        id: "__alloyId4834"
    });
    $.__views.__alloyId4833.add($.__views.__alloyId4834);
    $.__views.__alloyId4835 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4835"
    });
    $.__views.__alloyId4834.add($.__views.__alloyId4835);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;