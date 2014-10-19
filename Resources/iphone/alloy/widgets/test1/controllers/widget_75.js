function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_75";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_75 = Ti.UI.createView({
        id: "widget_75"
    });
    $.__views.widget_75 && $.addTopLevelView($.__views.widget_75);
    $.__views.__alloyId18824 = Ti.UI.createView({
        id: "__alloyId18824"
    });
    $.__views.widget_75.add($.__views.__alloyId18824);
    $.__views.__alloyId18825 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18825"
    });
    $.__views.__alloyId18824.add($.__views.__alloyId18825);
    $.__views.__alloyId18826 = Ti.UI.createView({
        id: "__alloyId18826"
    });
    $.__views.__alloyId18826 && $.addTopLevelView($.__views.__alloyId18826);
    $.__views.__alloyId18827 = Ti.UI.createView({
        id: "__alloyId18827"
    });
    $.__views.__alloyId18826.add($.__views.__alloyId18827);
    $.__views.__alloyId18828 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18828"
    });
    $.__views.__alloyId18827.add($.__views.__alloyId18828);
    $.__views.__alloyId18829 = Ti.UI.createView({
        id: "__alloyId18829"
    });
    $.__views.__alloyId18829 && $.addTopLevelView($.__views.__alloyId18829);
    $.__views.__alloyId18830 = Ti.UI.createView({
        id: "__alloyId18830"
    });
    $.__views.__alloyId18829.add($.__views.__alloyId18830);
    $.__views.__alloyId18831 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18831"
    });
    $.__views.__alloyId18830.add($.__views.__alloyId18831);
    $.__views.__alloyId18832 = Ti.UI.createView({
        id: "__alloyId18832"
    });
    $.__views.__alloyId18832 && $.addTopLevelView($.__views.__alloyId18832);
    $.__views.__alloyId18833 = Ti.UI.createView({
        id: "__alloyId18833"
    });
    $.__views.__alloyId18832.add($.__views.__alloyId18833);
    $.__views.__alloyId18834 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18834"
    });
    $.__views.__alloyId18833.add($.__views.__alloyId18834);
    $.__views.__alloyId18835 = Ti.UI.createView({
        id: "__alloyId18835"
    });
    $.__views.__alloyId18835 && $.addTopLevelView($.__views.__alloyId18835);
    $.__views.__alloyId18836 = Ti.UI.createView({
        id: "__alloyId18836"
    });
    $.__views.__alloyId18835.add($.__views.__alloyId18836);
    $.__views.__alloyId18837 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18837"
    });
    $.__views.__alloyId18836.add($.__views.__alloyId18837);
    $.__views.__alloyId18838 = Ti.UI.createView({
        id: "__alloyId18838"
    });
    $.__views.__alloyId18838 && $.addTopLevelView($.__views.__alloyId18838);
    $.__views.__alloyId18839 = Ti.UI.createView({
        id: "__alloyId18839"
    });
    $.__views.__alloyId18838.add($.__views.__alloyId18839);
    $.__views.__alloyId18840 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18840"
    });
    $.__views.__alloyId18839.add($.__views.__alloyId18840);
    $.__views.__alloyId18841 = Ti.UI.createView({
        id: "__alloyId18841"
    });
    $.__views.__alloyId18841 && $.addTopLevelView($.__views.__alloyId18841);
    $.__views.__alloyId18842 = Ti.UI.createView({
        id: "__alloyId18842"
    });
    $.__views.__alloyId18841.add($.__views.__alloyId18842);
    $.__views.__alloyId18843 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18843"
    });
    $.__views.__alloyId18842.add($.__views.__alloyId18843);
    $.__views.__alloyId18844 = Ti.UI.createView({
        id: "__alloyId18844"
    });
    $.__views.__alloyId18844 && $.addTopLevelView($.__views.__alloyId18844);
    $.__views.__alloyId18845 = Ti.UI.createView({
        id: "__alloyId18845"
    });
    $.__views.__alloyId18844.add($.__views.__alloyId18845);
    $.__views.__alloyId18846 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18846"
    });
    $.__views.__alloyId18845.add($.__views.__alloyId18846);
    $.__views.__alloyId18847 = Ti.UI.createView({
        id: "__alloyId18847"
    });
    $.__views.__alloyId18847 && $.addTopLevelView($.__views.__alloyId18847);
    $.__views.__alloyId18848 = Ti.UI.createView({
        id: "__alloyId18848"
    });
    $.__views.__alloyId18847.add($.__views.__alloyId18848);
    $.__views.__alloyId18849 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18849"
    });
    $.__views.__alloyId18848.add($.__views.__alloyId18849);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;