function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_957";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_957 = Ti.UI.createView({
        id: "widget_957"
    });
    $.__views.widget_957 && $.addTopLevelView($.__views.widget_957);
    $.__views.__alloyId24804 = Ti.UI.createView({
        id: "__alloyId24804"
    });
    $.__views.widget_957.add($.__views.__alloyId24804);
    $.__views.__alloyId24805 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24805"
    });
    $.__views.__alloyId24804.add($.__views.__alloyId24805);
    $.__views.__alloyId24806 = Ti.UI.createView({
        id: "__alloyId24806"
    });
    $.__views.__alloyId24806 && $.addTopLevelView($.__views.__alloyId24806);
    $.__views.__alloyId24807 = Ti.UI.createView({
        id: "__alloyId24807"
    });
    $.__views.__alloyId24806.add($.__views.__alloyId24807);
    $.__views.__alloyId24808 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24808"
    });
    $.__views.__alloyId24807.add($.__views.__alloyId24808);
    $.__views.__alloyId24809 = Ti.UI.createView({
        id: "__alloyId24809"
    });
    $.__views.__alloyId24809 && $.addTopLevelView($.__views.__alloyId24809);
    $.__views.__alloyId24810 = Ti.UI.createView({
        id: "__alloyId24810"
    });
    $.__views.__alloyId24809.add($.__views.__alloyId24810);
    $.__views.__alloyId24811 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24811"
    });
    $.__views.__alloyId24810.add($.__views.__alloyId24811);
    $.__views.__alloyId24812 = Ti.UI.createView({
        id: "__alloyId24812"
    });
    $.__views.__alloyId24812 && $.addTopLevelView($.__views.__alloyId24812);
    $.__views.__alloyId24813 = Ti.UI.createView({
        id: "__alloyId24813"
    });
    $.__views.__alloyId24812.add($.__views.__alloyId24813);
    $.__views.__alloyId24814 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24814"
    });
    $.__views.__alloyId24813.add($.__views.__alloyId24814);
    $.__views.__alloyId24815 = Ti.UI.createView({
        id: "__alloyId24815"
    });
    $.__views.__alloyId24815 && $.addTopLevelView($.__views.__alloyId24815);
    $.__views.__alloyId24816 = Ti.UI.createView({
        id: "__alloyId24816"
    });
    $.__views.__alloyId24815.add($.__views.__alloyId24816);
    $.__views.__alloyId24817 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24817"
    });
    $.__views.__alloyId24816.add($.__views.__alloyId24817);
    $.__views.__alloyId24818 = Ti.UI.createView({
        id: "__alloyId24818"
    });
    $.__views.__alloyId24818 && $.addTopLevelView($.__views.__alloyId24818);
    $.__views.__alloyId24819 = Ti.UI.createView({
        id: "__alloyId24819"
    });
    $.__views.__alloyId24818.add($.__views.__alloyId24819);
    $.__views.__alloyId24820 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24820"
    });
    $.__views.__alloyId24819.add($.__views.__alloyId24820);
    $.__views.__alloyId24821 = Ti.UI.createView({
        id: "__alloyId24821"
    });
    $.__views.__alloyId24821 && $.addTopLevelView($.__views.__alloyId24821);
    $.__views.__alloyId24822 = Ti.UI.createView({
        id: "__alloyId24822"
    });
    $.__views.__alloyId24821.add($.__views.__alloyId24822);
    $.__views.__alloyId24823 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24823"
    });
    $.__views.__alloyId24822.add($.__views.__alloyId24823);
    $.__views.__alloyId24824 = Ti.UI.createView({
        id: "__alloyId24824"
    });
    $.__views.__alloyId24824 && $.addTopLevelView($.__views.__alloyId24824);
    $.__views.__alloyId24825 = Ti.UI.createView({
        id: "__alloyId24825"
    });
    $.__views.__alloyId24824.add($.__views.__alloyId24825);
    $.__views.__alloyId24826 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24826"
    });
    $.__views.__alloyId24825.add($.__views.__alloyId24826);
    $.__views.__alloyId24827 = Ti.UI.createView({
        id: "__alloyId24827"
    });
    $.__views.__alloyId24827 && $.addTopLevelView($.__views.__alloyId24827);
    $.__views.__alloyId24828 = Ti.UI.createView({
        id: "__alloyId24828"
    });
    $.__views.__alloyId24827.add($.__views.__alloyId24828);
    $.__views.__alloyId24829 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24829"
    });
    $.__views.__alloyId24828.add($.__views.__alloyId24829);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;