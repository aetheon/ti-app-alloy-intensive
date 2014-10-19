function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_195";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_195 = Ti.UI.createView({
        id: "widget_195"
    });
    $.__views.widget_195 && $.addTopLevelView($.__views.widget_195);
    $.__views.__alloyId2808 = Ti.UI.createView({
        id: "__alloyId2808"
    });
    $.__views.widget_195.add($.__views.__alloyId2808);
    $.__views.__alloyId2809 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2809"
    });
    $.__views.__alloyId2808.add($.__views.__alloyId2809);
    $.__views.__alloyId2810 = Ti.UI.createView({
        id: "__alloyId2810"
    });
    $.__views.__alloyId2810 && $.addTopLevelView($.__views.__alloyId2810);
    $.__views.__alloyId2811 = Ti.UI.createView({
        id: "__alloyId2811"
    });
    $.__views.__alloyId2810.add($.__views.__alloyId2811);
    $.__views.__alloyId2812 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2812"
    });
    $.__views.__alloyId2811.add($.__views.__alloyId2812);
    $.__views.__alloyId2813 = Ti.UI.createView({
        id: "__alloyId2813"
    });
    $.__views.__alloyId2813 && $.addTopLevelView($.__views.__alloyId2813);
    $.__views.__alloyId2814 = Ti.UI.createView({
        id: "__alloyId2814"
    });
    $.__views.__alloyId2813.add($.__views.__alloyId2814);
    $.__views.__alloyId2815 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2815"
    });
    $.__views.__alloyId2814.add($.__views.__alloyId2815);
    $.__views.__alloyId2816 = Ti.UI.createView({
        id: "__alloyId2816"
    });
    $.__views.__alloyId2816 && $.addTopLevelView($.__views.__alloyId2816);
    $.__views.__alloyId2817 = Ti.UI.createView({
        id: "__alloyId2817"
    });
    $.__views.__alloyId2816.add($.__views.__alloyId2817);
    $.__views.__alloyId2818 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2818"
    });
    $.__views.__alloyId2817.add($.__views.__alloyId2818);
    $.__views.__alloyId2819 = Ti.UI.createView({
        id: "__alloyId2819"
    });
    $.__views.__alloyId2819 && $.addTopLevelView($.__views.__alloyId2819);
    $.__views.__alloyId2820 = Ti.UI.createView({
        id: "__alloyId2820"
    });
    $.__views.__alloyId2819.add($.__views.__alloyId2820);
    $.__views.__alloyId2821 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2821"
    });
    $.__views.__alloyId2820.add($.__views.__alloyId2821);
    $.__views.__alloyId2822 = Ti.UI.createView({
        id: "__alloyId2822"
    });
    $.__views.__alloyId2822 && $.addTopLevelView($.__views.__alloyId2822);
    $.__views.__alloyId2823 = Ti.UI.createView({
        id: "__alloyId2823"
    });
    $.__views.__alloyId2822.add($.__views.__alloyId2823);
    $.__views.__alloyId2824 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2824"
    });
    $.__views.__alloyId2823.add($.__views.__alloyId2824);
    $.__views.__alloyId2825 = Ti.UI.createView({
        id: "__alloyId2825"
    });
    $.__views.__alloyId2825 && $.addTopLevelView($.__views.__alloyId2825);
    $.__views.__alloyId2826 = Ti.UI.createView({
        id: "__alloyId2826"
    });
    $.__views.__alloyId2825.add($.__views.__alloyId2826);
    $.__views.__alloyId2827 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2827"
    });
    $.__views.__alloyId2826.add($.__views.__alloyId2827);
    $.__views.__alloyId2828 = Ti.UI.createView({
        id: "__alloyId2828"
    });
    $.__views.__alloyId2828 && $.addTopLevelView($.__views.__alloyId2828);
    $.__views.__alloyId2829 = Ti.UI.createView({
        id: "__alloyId2829"
    });
    $.__views.__alloyId2828.add($.__views.__alloyId2829);
    $.__views.__alloyId2830 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2830"
    });
    $.__views.__alloyId2829.add($.__views.__alloyId2830);
    $.__views.__alloyId2831 = Ti.UI.createView({
        id: "__alloyId2831"
    });
    $.__views.__alloyId2831 && $.addTopLevelView($.__views.__alloyId2831);
    $.__views.__alloyId2832 = Ti.UI.createView({
        id: "__alloyId2832"
    });
    $.__views.__alloyId2831.add($.__views.__alloyId2832);
    $.__views.__alloyId2833 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2833"
    });
    $.__views.__alloyId2832.add($.__views.__alloyId2833);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;