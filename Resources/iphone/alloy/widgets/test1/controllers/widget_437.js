function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_437";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_437 = Ti.UI.createView({
        id: "widget_437"
    });
    $.__views.widget_437 && $.addTopLevelView($.__views.widget_437);
    $.__views.__alloyId9802 = Ti.UI.createView({
        id: "__alloyId9802"
    });
    $.__views.widget_437.add($.__views.__alloyId9802);
    $.__views.__alloyId9803 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9803"
    });
    $.__views.__alloyId9802.add($.__views.__alloyId9803);
    $.__views.__alloyId9804 = Ti.UI.createView({
        id: "__alloyId9804"
    });
    $.__views.__alloyId9804 && $.addTopLevelView($.__views.__alloyId9804);
    $.__views.__alloyId9805 = Ti.UI.createView({
        id: "__alloyId9805"
    });
    $.__views.__alloyId9804.add($.__views.__alloyId9805);
    $.__views.__alloyId9806 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9806"
    });
    $.__views.__alloyId9805.add($.__views.__alloyId9806);
    $.__views.__alloyId9807 = Ti.UI.createView({
        id: "__alloyId9807"
    });
    $.__views.__alloyId9807 && $.addTopLevelView($.__views.__alloyId9807);
    $.__views.__alloyId9808 = Ti.UI.createView({
        id: "__alloyId9808"
    });
    $.__views.__alloyId9807.add($.__views.__alloyId9808);
    $.__views.__alloyId9809 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9809"
    });
    $.__views.__alloyId9808.add($.__views.__alloyId9809);
    $.__views.__alloyId9810 = Ti.UI.createView({
        id: "__alloyId9810"
    });
    $.__views.__alloyId9810 && $.addTopLevelView($.__views.__alloyId9810);
    $.__views.__alloyId9811 = Ti.UI.createView({
        id: "__alloyId9811"
    });
    $.__views.__alloyId9810.add($.__views.__alloyId9811);
    $.__views.__alloyId9812 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9812"
    });
    $.__views.__alloyId9811.add($.__views.__alloyId9812);
    $.__views.__alloyId9813 = Ti.UI.createView({
        id: "__alloyId9813"
    });
    $.__views.__alloyId9813 && $.addTopLevelView($.__views.__alloyId9813);
    $.__views.__alloyId9814 = Ti.UI.createView({
        id: "__alloyId9814"
    });
    $.__views.__alloyId9813.add($.__views.__alloyId9814);
    $.__views.__alloyId9815 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9815"
    });
    $.__views.__alloyId9814.add($.__views.__alloyId9815);
    $.__views.__alloyId9816 = Ti.UI.createView({
        id: "__alloyId9816"
    });
    $.__views.__alloyId9816 && $.addTopLevelView($.__views.__alloyId9816);
    $.__views.__alloyId9817 = Ti.UI.createView({
        id: "__alloyId9817"
    });
    $.__views.__alloyId9816.add($.__views.__alloyId9817);
    $.__views.__alloyId9818 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9818"
    });
    $.__views.__alloyId9817.add($.__views.__alloyId9818);
    $.__views.__alloyId9819 = Ti.UI.createView({
        id: "__alloyId9819"
    });
    $.__views.__alloyId9819 && $.addTopLevelView($.__views.__alloyId9819);
    $.__views.__alloyId9820 = Ti.UI.createView({
        id: "__alloyId9820"
    });
    $.__views.__alloyId9819.add($.__views.__alloyId9820);
    $.__views.__alloyId9821 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9821"
    });
    $.__views.__alloyId9820.add($.__views.__alloyId9821);
    $.__views.__alloyId9822 = Ti.UI.createView({
        id: "__alloyId9822"
    });
    $.__views.__alloyId9822 && $.addTopLevelView($.__views.__alloyId9822);
    $.__views.__alloyId9823 = Ti.UI.createView({
        id: "__alloyId9823"
    });
    $.__views.__alloyId9822.add($.__views.__alloyId9823);
    $.__views.__alloyId9824 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9824"
    });
    $.__views.__alloyId9823.add($.__views.__alloyId9824);
    $.__views.__alloyId9825 = Ti.UI.createView({
        id: "__alloyId9825"
    });
    $.__views.__alloyId9825 && $.addTopLevelView($.__views.__alloyId9825);
    $.__views.__alloyId9826 = Ti.UI.createView({
        id: "__alloyId9826"
    });
    $.__views.__alloyId9825.add($.__views.__alloyId9826);
    $.__views.__alloyId9827 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9827"
    });
    $.__views.__alloyId9826.add($.__views.__alloyId9827);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;