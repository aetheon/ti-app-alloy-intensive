function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_888";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_888 = Ti.UI.createView({
        id: "widget_888"
    });
    $.__views.widget_888 && $.addTopLevelView($.__views.widget_888);
    $.__views.__alloyId22802 = Ti.UI.createView({
        id: "__alloyId22802"
    });
    $.__views.widget_888.add($.__views.__alloyId22802);
    $.__views.__alloyId22803 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22803"
    });
    $.__views.__alloyId22802.add($.__views.__alloyId22803);
    $.__views.__alloyId22804 = Ti.UI.createView({
        id: "__alloyId22804"
    });
    $.__views.__alloyId22804 && $.addTopLevelView($.__views.__alloyId22804);
    $.__views.__alloyId22805 = Ti.UI.createView({
        id: "__alloyId22805"
    });
    $.__views.__alloyId22804.add($.__views.__alloyId22805);
    $.__views.__alloyId22806 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22806"
    });
    $.__views.__alloyId22805.add($.__views.__alloyId22806);
    $.__views.__alloyId22807 = Ti.UI.createView({
        id: "__alloyId22807"
    });
    $.__views.__alloyId22807 && $.addTopLevelView($.__views.__alloyId22807);
    $.__views.__alloyId22808 = Ti.UI.createView({
        id: "__alloyId22808"
    });
    $.__views.__alloyId22807.add($.__views.__alloyId22808);
    $.__views.__alloyId22809 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22809"
    });
    $.__views.__alloyId22808.add($.__views.__alloyId22809);
    $.__views.__alloyId22810 = Ti.UI.createView({
        id: "__alloyId22810"
    });
    $.__views.__alloyId22810 && $.addTopLevelView($.__views.__alloyId22810);
    $.__views.__alloyId22811 = Ti.UI.createView({
        id: "__alloyId22811"
    });
    $.__views.__alloyId22810.add($.__views.__alloyId22811);
    $.__views.__alloyId22812 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22812"
    });
    $.__views.__alloyId22811.add($.__views.__alloyId22812);
    $.__views.__alloyId22813 = Ti.UI.createView({
        id: "__alloyId22813"
    });
    $.__views.__alloyId22813 && $.addTopLevelView($.__views.__alloyId22813);
    $.__views.__alloyId22814 = Ti.UI.createView({
        id: "__alloyId22814"
    });
    $.__views.__alloyId22813.add($.__views.__alloyId22814);
    $.__views.__alloyId22815 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22815"
    });
    $.__views.__alloyId22814.add($.__views.__alloyId22815);
    $.__views.__alloyId22816 = Ti.UI.createView({
        id: "__alloyId22816"
    });
    $.__views.__alloyId22816 && $.addTopLevelView($.__views.__alloyId22816);
    $.__views.__alloyId22817 = Ti.UI.createView({
        id: "__alloyId22817"
    });
    $.__views.__alloyId22816.add($.__views.__alloyId22817);
    $.__views.__alloyId22818 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22818"
    });
    $.__views.__alloyId22817.add($.__views.__alloyId22818);
    $.__views.__alloyId22819 = Ti.UI.createView({
        id: "__alloyId22819"
    });
    $.__views.__alloyId22819 && $.addTopLevelView($.__views.__alloyId22819);
    $.__views.__alloyId22820 = Ti.UI.createView({
        id: "__alloyId22820"
    });
    $.__views.__alloyId22819.add($.__views.__alloyId22820);
    $.__views.__alloyId22821 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22821"
    });
    $.__views.__alloyId22820.add($.__views.__alloyId22821);
    $.__views.__alloyId22822 = Ti.UI.createView({
        id: "__alloyId22822"
    });
    $.__views.__alloyId22822 && $.addTopLevelView($.__views.__alloyId22822);
    $.__views.__alloyId22823 = Ti.UI.createView({
        id: "__alloyId22823"
    });
    $.__views.__alloyId22822.add($.__views.__alloyId22823);
    $.__views.__alloyId22824 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22824"
    });
    $.__views.__alloyId22823.add($.__views.__alloyId22824);
    $.__views.__alloyId22825 = Ti.UI.createView({
        id: "__alloyId22825"
    });
    $.__views.__alloyId22825 && $.addTopLevelView($.__views.__alloyId22825);
    $.__views.__alloyId22826 = Ti.UI.createView({
        id: "__alloyId22826"
    });
    $.__views.__alloyId22825.add($.__views.__alloyId22826);
    $.__views.__alloyId22827 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22827"
    });
    $.__views.__alloyId22826.add($.__views.__alloyId22827);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;