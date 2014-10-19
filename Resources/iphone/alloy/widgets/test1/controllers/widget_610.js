function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_610";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_610 = Ti.UI.createView({
        id: "widget_610"
    });
    $.__views.widget_610 && $.addTopLevelView($.__views.widget_610);
    $.__views.__alloyId14820 = Ti.UI.createView({
        id: "__alloyId14820"
    });
    $.__views.widget_610.add($.__views.__alloyId14820);
    $.__views.__alloyId14821 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14821"
    });
    $.__views.__alloyId14820.add($.__views.__alloyId14821);
    $.__views.__alloyId14822 = Ti.UI.createView({
        id: "__alloyId14822"
    });
    $.__views.__alloyId14822 && $.addTopLevelView($.__views.__alloyId14822);
    $.__views.__alloyId14823 = Ti.UI.createView({
        id: "__alloyId14823"
    });
    $.__views.__alloyId14822.add($.__views.__alloyId14823);
    $.__views.__alloyId14824 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14824"
    });
    $.__views.__alloyId14823.add($.__views.__alloyId14824);
    $.__views.__alloyId14825 = Ti.UI.createView({
        id: "__alloyId14825"
    });
    $.__views.__alloyId14825 && $.addTopLevelView($.__views.__alloyId14825);
    $.__views.__alloyId14826 = Ti.UI.createView({
        id: "__alloyId14826"
    });
    $.__views.__alloyId14825.add($.__views.__alloyId14826);
    $.__views.__alloyId14827 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14827"
    });
    $.__views.__alloyId14826.add($.__views.__alloyId14827);
    $.__views.__alloyId14828 = Ti.UI.createView({
        id: "__alloyId14828"
    });
    $.__views.__alloyId14828 && $.addTopLevelView($.__views.__alloyId14828);
    $.__views.__alloyId14829 = Ti.UI.createView({
        id: "__alloyId14829"
    });
    $.__views.__alloyId14828.add($.__views.__alloyId14829);
    $.__views.__alloyId14830 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14830"
    });
    $.__views.__alloyId14829.add($.__views.__alloyId14830);
    $.__views.__alloyId14831 = Ti.UI.createView({
        id: "__alloyId14831"
    });
    $.__views.__alloyId14831 && $.addTopLevelView($.__views.__alloyId14831);
    $.__views.__alloyId14832 = Ti.UI.createView({
        id: "__alloyId14832"
    });
    $.__views.__alloyId14831.add($.__views.__alloyId14832);
    $.__views.__alloyId14833 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14833"
    });
    $.__views.__alloyId14832.add($.__views.__alloyId14833);
    $.__views.__alloyId14834 = Ti.UI.createView({
        id: "__alloyId14834"
    });
    $.__views.__alloyId14834 && $.addTopLevelView($.__views.__alloyId14834);
    $.__views.__alloyId14835 = Ti.UI.createView({
        id: "__alloyId14835"
    });
    $.__views.__alloyId14834.add($.__views.__alloyId14835);
    $.__views.__alloyId14836 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14836"
    });
    $.__views.__alloyId14835.add($.__views.__alloyId14836);
    $.__views.__alloyId14837 = Ti.UI.createView({
        id: "__alloyId14837"
    });
    $.__views.__alloyId14837 && $.addTopLevelView($.__views.__alloyId14837);
    $.__views.__alloyId14838 = Ti.UI.createView({
        id: "__alloyId14838"
    });
    $.__views.__alloyId14837.add($.__views.__alloyId14838);
    $.__views.__alloyId14839 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14839"
    });
    $.__views.__alloyId14838.add($.__views.__alloyId14839);
    $.__views.__alloyId14840 = Ti.UI.createView({
        id: "__alloyId14840"
    });
    $.__views.__alloyId14840 && $.addTopLevelView($.__views.__alloyId14840);
    $.__views.__alloyId14841 = Ti.UI.createView({
        id: "__alloyId14841"
    });
    $.__views.__alloyId14840.add($.__views.__alloyId14841);
    $.__views.__alloyId14842 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14842"
    });
    $.__views.__alloyId14841.add($.__views.__alloyId14842);
    $.__views.__alloyId14843 = Ti.UI.createView({
        id: "__alloyId14843"
    });
    $.__views.__alloyId14843 && $.addTopLevelView($.__views.__alloyId14843);
    $.__views.__alloyId14844 = Ti.UI.createView({
        id: "__alloyId14844"
    });
    $.__views.__alloyId14843.add($.__views.__alloyId14844);
    $.__views.__alloyId14845 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14845"
    });
    $.__views.__alloyId14844.add($.__views.__alloyId14845);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;