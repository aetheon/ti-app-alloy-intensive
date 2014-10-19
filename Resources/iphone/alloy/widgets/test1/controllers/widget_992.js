function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_992";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_992 = Ti.UI.createView({
        id: "widget_992"
    });
    $.__views.widget_992 && $.addTopLevelView($.__views.widget_992);
    $.__views.__alloyId25818 = Ti.UI.createView({
        id: "__alloyId25818"
    });
    $.__views.widget_992.add($.__views.__alloyId25818);
    $.__views.__alloyId25819 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25819"
    });
    $.__views.__alloyId25818.add($.__views.__alloyId25819);
    $.__views.__alloyId25820 = Ti.UI.createView({
        id: "__alloyId25820"
    });
    $.__views.__alloyId25820 && $.addTopLevelView($.__views.__alloyId25820);
    $.__views.__alloyId25821 = Ti.UI.createView({
        id: "__alloyId25821"
    });
    $.__views.__alloyId25820.add($.__views.__alloyId25821);
    $.__views.__alloyId25822 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25822"
    });
    $.__views.__alloyId25821.add($.__views.__alloyId25822);
    $.__views.__alloyId25823 = Ti.UI.createView({
        id: "__alloyId25823"
    });
    $.__views.__alloyId25823 && $.addTopLevelView($.__views.__alloyId25823);
    $.__views.__alloyId25824 = Ti.UI.createView({
        id: "__alloyId25824"
    });
    $.__views.__alloyId25823.add($.__views.__alloyId25824);
    $.__views.__alloyId25825 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25825"
    });
    $.__views.__alloyId25824.add($.__views.__alloyId25825);
    $.__views.__alloyId25826 = Ti.UI.createView({
        id: "__alloyId25826"
    });
    $.__views.__alloyId25826 && $.addTopLevelView($.__views.__alloyId25826);
    $.__views.__alloyId25827 = Ti.UI.createView({
        id: "__alloyId25827"
    });
    $.__views.__alloyId25826.add($.__views.__alloyId25827);
    $.__views.__alloyId25828 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25828"
    });
    $.__views.__alloyId25827.add($.__views.__alloyId25828);
    $.__views.__alloyId25829 = Ti.UI.createView({
        id: "__alloyId25829"
    });
    $.__views.__alloyId25829 && $.addTopLevelView($.__views.__alloyId25829);
    $.__views.__alloyId25830 = Ti.UI.createView({
        id: "__alloyId25830"
    });
    $.__views.__alloyId25829.add($.__views.__alloyId25830);
    $.__views.__alloyId25831 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25831"
    });
    $.__views.__alloyId25830.add($.__views.__alloyId25831);
    $.__views.__alloyId25832 = Ti.UI.createView({
        id: "__alloyId25832"
    });
    $.__views.__alloyId25832 && $.addTopLevelView($.__views.__alloyId25832);
    $.__views.__alloyId25833 = Ti.UI.createView({
        id: "__alloyId25833"
    });
    $.__views.__alloyId25832.add($.__views.__alloyId25833);
    $.__views.__alloyId25834 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25834"
    });
    $.__views.__alloyId25833.add($.__views.__alloyId25834);
    $.__views.__alloyId25835 = Ti.UI.createView({
        id: "__alloyId25835"
    });
    $.__views.__alloyId25835 && $.addTopLevelView($.__views.__alloyId25835);
    $.__views.__alloyId25836 = Ti.UI.createView({
        id: "__alloyId25836"
    });
    $.__views.__alloyId25835.add($.__views.__alloyId25836);
    $.__views.__alloyId25837 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25837"
    });
    $.__views.__alloyId25836.add($.__views.__alloyId25837);
    $.__views.__alloyId25838 = Ti.UI.createView({
        id: "__alloyId25838"
    });
    $.__views.__alloyId25838 && $.addTopLevelView($.__views.__alloyId25838);
    $.__views.__alloyId25839 = Ti.UI.createView({
        id: "__alloyId25839"
    });
    $.__views.__alloyId25838.add($.__views.__alloyId25839);
    $.__views.__alloyId25840 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25840"
    });
    $.__views.__alloyId25839.add($.__views.__alloyId25840);
    $.__views.__alloyId25841 = Ti.UI.createView({
        id: "__alloyId25841"
    });
    $.__views.__alloyId25841 && $.addTopLevelView($.__views.__alloyId25841);
    $.__views.__alloyId25842 = Ti.UI.createView({
        id: "__alloyId25842"
    });
    $.__views.__alloyId25841.add($.__views.__alloyId25842);
    $.__views.__alloyId25843 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25843"
    });
    $.__views.__alloyId25842.add($.__views.__alloyId25843);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;