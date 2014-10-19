function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_784";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_784 = Ti.UI.createView({
        id: "widget_784"
    });
    $.__views.widget_784 && $.addTopLevelView($.__views.widget_784);
    $.__views.__alloyId19812 = Ti.UI.createView({
        id: "__alloyId19812"
    });
    $.__views.widget_784.add($.__views.__alloyId19812);
    $.__views.__alloyId19813 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19813"
    });
    $.__views.__alloyId19812.add($.__views.__alloyId19813);
    $.__views.__alloyId19814 = Ti.UI.createView({
        id: "__alloyId19814"
    });
    $.__views.__alloyId19814 && $.addTopLevelView($.__views.__alloyId19814);
    $.__views.__alloyId19815 = Ti.UI.createView({
        id: "__alloyId19815"
    });
    $.__views.__alloyId19814.add($.__views.__alloyId19815);
    $.__views.__alloyId19816 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19816"
    });
    $.__views.__alloyId19815.add($.__views.__alloyId19816);
    $.__views.__alloyId19817 = Ti.UI.createView({
        id: "__alloyId19817"
    });
    $.__views.__alloyId19817 && $.addTopLevelView($.__views.__alloyId19817);
    $.__views.__alloyId19818 = Ti.UI.createView({
        id: "__alloyId19818"
    });
    $.__views.__alloyId19817.add($.__views.__alloyId19818);
    $.__views.__alloyId19819 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19819"
    });
    $.__views.__alloyId19818.add($.__views.__alloyId19819);
    $.__views.__alloyId19820 = Ti.UI.createView({
        id: "__alloyId19820"
    });
    $.__views.__alloyId19820 && $.addTopLevelView($.__views.__alloyId19820);
    $.__views.__alloyId19821 = Ti.UI.createView({
        id: "__alloyId19821"
    });
    $.__views.__alloyId19820.add($.__views.__alloyId19821);
    $.__views.__alloyId19822 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19822"
    });
    $.__views.__alloyId19821.add($.__views.__alloyId19822);
    $.__views.__alloyId19823 = Ti.UI.createView({
        id: "__alloyId19823"
    });
    $.__views.__alloyId19823 && $.addTopLevelView($.__views.__alloyId19823);
    $.__views.__alloyId19824 = Ti.UI.createView({
        id: "__alloyId19824"
    });
    $.__views.__alloyId19823.add($.__views.__alloyId19824);
    $.__views.__alloyId19825 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19825"
    });
    $.__views.__alloyId19824.add($.__views.__alloyId19825);
    $.__views.__alloyId19826 = Ti.UI.createView({
        id: "__alloyId19826"
    });
    $.__views.__alloyId19826 && $.addTopLevelView($.__views.__alloyId19826);
    $.__views.__alloyId19827 = Ti.UI.createView({
        id: "__alloyId19827"
    });
    $.__views.__alloyId19826.add($.__views.__alloyId19827);
    $.__views.__alloyId19828 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19828"
    });
    $.__views.__alloyId19827.add($.__views.__alloyId19828);
    $.__views.__alloyId19829 = Ti.UI.createView({
        id: "__alloyId19829"
    });
    $.__views.__alloyId19829 && $.addTopLevelView($.__views.__alloyId19829);
    $.__views.__alloyId19830 = Ti.UI.createView({
        id: "__alloyId19830"
    });
    $.__views.__alloyId19829.add($.__views.__alloyId19830);
    $.__views.__alloyId19831 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19831"
    });
    $.__views.__alloyId19830.add($.__views.__alloyId19831);
    $.__views.__alloyId19832 = Ti.UI.createView({
        id: "__alloyId19832"
    });
    $.__views.__alloyId19832 && $.addTopLevelView($.__views.__alloyId19832);
    $.__views.__alloyId19833 = Ti.UI.createView({
        id: "__alloyId19833"
    });
    $.__views.__alloyId19832.add($.__views.__alloyId19833);
    $.__views.__alloyId19834 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19834"
    });
    $.__views.__alloyId19833.add($.__views.__alloyId19834);
    $.__views.__alloyId19835 = Ti.UI.createView({
        id: "__alloyId19835"
    });
    $.__views.__alloyId19835 && $.addTopLevelView($.__views.__alloyId19835);
    $.__views.__alloyId19836 = Ti.UI.createView({
        id: "__alloyId19836"
    });
    $.__views.__alloyId19835.add($.__views.__alloyId19836);
    $.__views.__alloyId19837 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19837"
    });
    $.__views.__alloyId19836.add($.__views.__alloyId19837);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;