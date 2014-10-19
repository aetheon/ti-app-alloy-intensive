function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_645";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_645 = Ti.UI.createView({
        id: "widget_645"
    });
    $.__views.widget_645 && $.addTopLevelView($.__views.widget_645);
    $.__views.__alloyId15808 = Ti.UI.createView({
        id: "__alloyId15808"
    });
    $.__views.widget_645.add($.__views.__alloyId15808);
    $.__views.__alloyId15809 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15809"
    });
    $.__views.__alloyId15808.add($.__views.__alloyId15809);
    $.__views.__alloyId15810 = Ti.UI.createView({
        id: "__alloyId15810"
    });
    $.__views.__alloyId15810 && $.addTopLevelView($.__views.__alloyId15810);
    $.__views.__alloyId15811 = Ti.UI.createView({
        id: "__alloyId15811"
    });
    $.__views.__alloyId15810.add($.__views.__alloyId15811);
    $.__views.__alloyId15812 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15812"
    });
    $.__views.__alloyId15811.add($.__views.__alloyId15812);
    $.__views.__alloyId15813 = Ti.UI.createView({
        id: "__alloyId15813"
    });
    $.__views.__alloyId15813 && $.addTopLevelView($.__views.__alloyId15813);
    $.__views.__alloyId15814 = Ti.UI.createView({
        id: "__alloyId15814"
    });
    $.__views.__alloyId15813.add($.__views.__alloyId15814);
    $.__views.__alloyId15815 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15815"
    });
    $.__views.__alloyId15814.add($.__views.__alloyId15815);
    $.__views.__alloyId15816 = Ti.UI.createView({
        id: "__alloyId15816"
    });
    $.__views.__alloyId15816 && $.addTopLevelView($.__views.__alloyId15816);
    $.__views.__alloyId15817 = Ti.UI.createView({
        id: "__alloyId15817"
    });
    $.__views.__alloyId15816.add($.__views.__alloyId15817);
    $.__views.__alloyId15818 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15818"
    });
    $.__views.__alloyId15817.add($.__views.__alloyId15818);
    $.__views.__alloyId15819 = Ti.UI.createView({
        id: "__alloyId15819"
    });
    $.__views.__alloyId15819 && $.addTopLevelView($.__views.__alloyId15819);
    $.__views.__alloyId15820 = Ti.UI.createView({
        id: "__alloyId15820"
    });
    $.__views.__alloyId15819.add($.__views.__alloyId15820);
    $.__views.__alloyId15821 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15821"
    });
    $.__views.__alloyId15820.add($.__views.__alloyId15821);
    $.__views.__alloyId15822 = Ti.UI.createView({
        id: "__alloyId15822"
    });
    $.__views.__alloyId15822 && $.addTopLevelView($.__views.__alloyId15822);
    $.__views.__alloyId15823 = Ti.UI.createView({
        id: "__alloyId15823"
    });
    $.__views.__alloyId15822.add($.__views.__alloyId15823);
    $.__views.__alloyId15824 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15824"
    });
    $.__views.__alloyId15823.add($.__views.__alloyId15824);
    $.__views.__alloyId15825 = Ti.UI.createView({
        id: "__alloyId15825"
    });
    $.__views.__alloyId15825 && $.addTopLevelView($.__views.__alloyId15825);
    $.__views.__alloyId15826 = Ti.UI.createView({
        id: "__alloyId15826"
    });
    $.__views.__alloyId15825.add($.__views.__alloyId15826);
    $.__views.__alloyId15827 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15827"
    });
    $.__views.__alloyId15826.add($.__views.__alloyId15827);
    $.__views.__alloyId15828 = Ti.UI.createView({
        id: "__alloyId15828"
    });
    $.__views.__alloyId15828 && $.addTopLevelView($.__views.__alloyId15828);
    $.__views.__alloyId15829 = Ti.UI.createView({
        id: "__alloyId15829"
    });
    $.__views.__alloyId15828.add($.__views.__alloyId15829);
    $.__views.__alloyId15830 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15830"
    });
    $.__views.__alloyId15829.add($.__views.__alloyId15830);
    $.__views.__alloyId15831 = Ti.UI.createView({
        id: "__alloyId15831"
    });
    $.__views.__alloyId15831 && $.addTopLevelView($.__views.__alloyId15831);
    $.__views.__alloyId15832 = Ti.UI.createView({
        id: "__alloyId15832"
    });
    $.__views.__alloyId15831.add($.__views.__alloyId15832);
    $.__views.__alloyId15833 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15833"
    });
    $.__views.__alloyId15832.add($.__views.__alloyId15833);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;