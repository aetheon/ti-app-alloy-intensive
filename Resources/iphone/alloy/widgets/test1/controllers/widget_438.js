function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_438";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_438 = Ti.UI.createView({
        id: "widget_438"
    });
    $.__views.widget_438 && $.addTopLevelView($.__views.widget_438);
    $.__views.__alloyId9828 = Ti.UI.createView({
        id: "__alloyId9828"
    });
    $.__views.widget_438.add($.__views.__alloyId9828);
    $.__views.__alloyId9829 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9829"
    });
    $.__views.__alloyId9828.add($.__views.__alloyId9829);
    $.__views.__alloyId9830 = Ti.UI.createView({
        id: "__alloyId9830"
    });
    $.__views.__alloyId9830 && $.addTopLevelView($.__views.__alloyId9830);
    $.__views.__alloyId9831 = Ti.UI.createView({
        id: "__alloyId9831"
    });
    $.__views.__alloyId9830.add($.__views.__alloyId9831);
    $.__views.__alloyId9832 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9832"
    });
    $.__views.__alloyId9831.add($.__views.__alloyId9832);
    $.__views.__alloyId9833 = Ti.UI.createView({
        id: "__alloyId9833"
    });
    $.__views.__alloyId9833 && $.addTopLevelView($.__views.__alloyId9833);
    $.__views.__alloyId9834 = Ti.UI.createView({
        id: "__alloyId9834"
    });
    $.__views.__alloyId9833.add($.__views.__alloyId9834);
    $.__views.__alloyId9835 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9835"
    });
    $.__views.__alloyId9834.add($.__views.__alloyId9835);
    $.__views.__alloyId9836 = Ti.UI.createView({
        id: "__alloyId9836"
    });
    $.__views.__alloyId9836 && $.addTopLevelView($.__views.__alloyId9836);
    $.__views.__alloyId9837 = Ti.UI.createView({
        id: "__alloyId9837"
    });
    $.__views.__alloyId9836.add($.__views.__alloyId9837);
    $.__views.__alloyId9838 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9838"
    });
    $.__views.__alloyId9837.add($.__views.__alloyId9838);
    $.__views.__alloyId9839 = Ti.UI.createView({
        id: "__alloyId9839"
    });
    $.__views.__alloyId9839 && $.addTopLevelView($.__views.__alloyId9839);
    $.__views.__alloyId9840 = Ti.UI.createView({
        id: "__alloyId9840"
    });
    $.__views.__alloyId9839.add($.__views.__alloyId9840);
    $.__views.__alloyId9841 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9841"
    });
    $.__views.__alloyId9840.add($.__views.__alloyId9841);
    $.__views.__alloyId9842 = Ti.UI.createView({
        id: "__alloyId9842"
    });
    $.__views.__alloyId9842 && $.addTopLevelView($.__views.__alloyId9842);
    $.__views.__alloyId9843 = Ti.UI.createView({
        id: "__alloyId9843"
    });
    $.__views.__alloyId9842.add($.__views.__alloyId9843);
    $.__views.__alloyId9844 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9844"
    });
    $.__views.__alloyId9843.add($.__views.__alloyId9844);
    $.__views.__alloyId9845 = Ti.UI.createView({
        id: "__alloyId9845"
    });
    $.__views.__alloyId9845 && $.addTopLevelView($.__views.__alloyId9845);
    $.__views.__alloyId9846 = Ti.UI.createView({
        id: "__alloyId9846"
    });
    $.__views.__alloyId9845.add($.__views.__alloyId9846);
    $.__views.__alloyId9847 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9847"
    });
    $.__views.__alloyId9846.add($.__views.__alloyId9847);
    $.__views.__alloyId9848 = Ti.UI.createView({
        id: "__alloyId9848"
    });
    $.__views.__alloyId9848 && $.addTopLevelView($.__views.__alloyId9848);
    $.__views.__alloyId9849 = Ti.UI.createView({
        id: "__alloyId9849"
    });
    $.__views.__alloyId9848.add($.__views.__alloyId9849);
    $.__views.__alloyId9850 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9850"
    });
    $.__views.__alloyId9849.add($.__views.__alloyId9850);
    $.__views.__alloyId9851 = Ti.UI.createView({
        id: "__alloyId9851"
    });
    $.__views.__alloyId9851 && $.addTopLevelView($.__views.__alloyId9851);
    $.__views.__alloyId9852 = Ti.UI.createView({
        id: "__alloyId9852"
    });
    $.__views.__alloyId9851.add($.__views.__alloyId9852);
    $.__views.__alloyId9853 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9853"
    });
    $.__views.__alloyId9852.add($.__views.__alloyId9853);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;