function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_68";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_68 = Ti.UI.createView({
        id: "widget_68"
    });
    $.__views.widget_68 && $.addTopLevelView($.__views.widget_68);
    $.__views.__alloyId16796 = Ti.UI.createView({
        id: "__alloyId16796"
    });
    $.__views.widget_68.add($.__views.__alloyId16796);
    $.__views.__alloyId16797 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16797"
    });
    $.__views.__alloyId16796.add($.__views.__alloyId16797);
    $.__views.__alloyId16798 = Ti.UI.createView({
        id: "__alloyId16798"
    });
    $.__views.__alloyId16798 && $.addTopLevelView($.__views.__alloyId16798);
    $.__views.__alloyId16799 = Ti.UI.createView({
        id: "__alloyId16799"
    });
    $.__views.__alloyId16798.add($.__views.__alloyId16799);
    $.__views.__alloyId16800 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16800"
    });
    $.__views.__alloyId16799.add($.__views.__alloyId16800);
    $.__views.__alloyId16801 = Ti.UI.createView({
        id: "__alloyId16801"
    });
    $.__views.__alloyId16801 && $.addTopLevelView($.__views.__alloyId16801);
    $.__views.__alloyId16802 = Ti.UI.createView({
        id: "__alloyId16802"
    });
    $.__views.__alloyId16801.add($.__views.__alloyId16802);
    $.__views.__alloyId16803 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16803"
    });
    $.__views.__alloyId16802.add($.__views.__alloyId16803);
    $.__views.__alloyId16804 = Ti.UI.createView({
        id: "__alloyId16804"
    });
    $.__views.__alloyId16804 && $.addTopLevelView($.__views.__alloyId16804);
    $.__views.__alloyId16805 = Ti.UI.createView({
        id: "__alloyId16805"
    });
    $.__views.__alloyId16804.add($.__views.__alloyId16805);
    $.__views.__alloyId16806 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16806"
    });
    $.__views.__alloyId16805.add($.__views.__alloyId16806);
    $.__views.__alloyId16807 = Ti.UI.createView({
        id: "__alloyId16807"
    });
    $.__views.__alloyId16807 && $.addTopLevelView($.__views.__alloyId16807);
    $.__views.__alloyId16808 = Ti.UI.createView({
        id: "__alloyId16808"
    });
    $.__views.__alloyId16807.add($.__views.__alloyId16808);
    $.__views.__alloyId16809 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16809"
    });
    $.__views.__alloyId16808.add($.__views.__alloyId16809);
    $.__views.__alloyId16810 = Ti.UI.createView({
        id: "__alloyId16810"
    });
    $.__views.__alloyId16810 && $.addTopLevelView($.__views.__alloyId16810);
    $.__views.__alloyId16811 = Ti.UI.createView({
        id: "__alloyId16811"
    });
    $.__views.__alloyId16810.add($.__views.__alloyId16811);
    $.__views.__alloyId16812 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16812"
    });
    $.__views.__alloyId16811.add($.__views.__alloyId16812);
    $.__views.__alloyId16813 = Ti.UI.createView({
        id: "__alloyId16813"
    });
    $.__views.__alloyId16813 && $.addTopLevelView($.__views.__alloyId16813);
    $.__views.__alloyId16814 = Ti.UI.createView({
        id: "__alloyId16814"
    });
    $.__views.__alloyId16813.add($.__views.__alloyId16814);
    $.__views.__alloyId16815 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16815"
    });
    $.__views.__alloyId16814.add($.__views.__alloyId16815);
    $.__views.__alloyId16816 = Ti.UI.createView({
        id: "__alloyId16816"
    });
    $.__views.__alloyId16816 && $.addTopLevelView($.__views.__alloyId16816);
    $.__views.__alloyId16817 = Ti.UI.createView({
        id: "__alloyId16817"
    });
    $.__views.__alloyId16816.add($.__views.__alloyId16817);
    $.__views.__alloyId16818 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16818"
    });
    $.__views.__alloyId16817.add($.__views.__alloyId16818);
    $.__views.__alloyId16819 = Ti.UI.createView({
        id: "__alloyId16819"
    });
    $.__views.__alloyId16819 && $.addTopLevelView($.__views.__alloyId16819);
    $.__views.__alloyId16820 = Ti.UI.createView({
        id: "__alloyId16820"
    });
    $.__views.__alloyId16819.add($.__views.__alloyId16820);
    $.__views.__alloyId16821 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16821"
    });
    $.__views.__alloyId16820.add($.__views.__alloyId16821);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;