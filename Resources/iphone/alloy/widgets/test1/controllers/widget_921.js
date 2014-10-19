function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_921";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_921 = Ti.UI.createView({
        id: "widget_921"
    });
    $.__views.widget_921 && $.addTopLevelView($.__views.widget_921);
    $.__views.__alloyId23790 = Ti.UI.createView({
        id: "__alloyId23790"
    });
    $.__views.widget_921.add($.__views.__alloyId23790);
    $.__views.__alloyId23791 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23791"
    });
    $.__views.__alloyId23790.add($.__views.__alloyId23791);
    $.__views.__alloyId23792 = Ti.UI.createView({
        id: "__alloyId23792"
    });
    $.__views.__alloyId23792 && $.addTopLevelView($.__views.__alloyId23792);
    $.__views.__alloyId23793 = Ti.UI.createView({
        id: "__alloyId23793"
    });
    $.__views.__alloyId23792.add($.__views.__alloyId23793);
    $.__views.__alloyId23794 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23794"
    });
    $.__views.__alloyId23793.add($.__views.__alloyId23794);
    $.__views.__alloyId23795 = Ti.UI.createView({
        id: "__alloyId23795"
    });
    $.__views.__alloyId23795 && $.addTopLevelView($.__views.__alloyId23795);
    $.__views.__alloyId23796 = Ti.UI.createView({
        id: "__alloyId23796"
    });
    $.__views.__alloyId23795.add($.__views.__alloyId23796);
    $.__views.__alloyId23797 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23797"
    });
    $.__views.__alloyId23796.add($.__views.__alloyId23797);
    $.__views.__alloyId23798 = Ti.UI.createView({
        id: "__alloyId23798"
    });
    $.__views.__alloyId23798 && $.addTopLevelView($.__views.__alloyId23798);
    $.__views.__alloyId23799 = Ti.UI.createView({
        id: "__alloyId23799"
    });
    $.__views.__alloyId23798.add($.__views.__alloyId23799);
    $.__views.__alloyId23800 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23800"
    });
    $.__views.__alloyId23799.add($.__views.__alloyId23800);
    $.__views.__alloyId23801 = Ti.UI.createView({
        id: "__alloyId23801"
    });
    $.__views.__alloyId23801 && $.addTopLevelView($.__views.__alloyId23801);
    $.__views.__alloyId23802 = Ti.UI.createView({
        id: "__alloyId23802"
    });
    $.__views.__alloyId23801.add($.__views.__alloyId23802);
    $.__views.__alloyId23803 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23803"
    });
    $.__views.__alloyId23802.add($.__views.__alloyId23803);
    $.__views.__alloyId23804 = Ti.UI.createView({
        id: "__alloyId23804"
    });
    $.__views.__alloyId23804 && $.addTopLevelView($.__views.__alloyId23804);
    $.__views.__alloyId23805 = Ti.UI.createView({
        id: "__alloyId23805"
    });
    $.__views.__alloyId23804.add($.__views.__alloyId23805);
    $.__views.__alloyId23806 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23806"
    });
    $.__views.__alloyId23805.add($.__views.__alloyId23806);
    $.__views.__alloyId23807 = Ti.UI.createView({
        id: "__alloyId23807"
    });
    $.__views.__alloyId23807 && $.addTopLevelView($.__views.__alloyId23807);
    $.__views.__alloyId23808 = Ti.UI.createView({
        id: "__alloyId23808"
    });
    $.__views.__alloyId23807.add($.__views.__alloyId23808);
    $.__views.__alloyId23809 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23809"
    });
    $.__views.__alloyId23808.add($.__views.__alloyId23809);
    $.__views.__alloyId23810 = Ti.UI.createView({
        id: "__alloyId23810"
    });
    $.__views.__alloyId23810 && $.addTopLevelView($.__views.__alloyId23810);
    $.__views.__alloyId23811 = Ti.UI.createView({
        id: "__alloyId23811"
    });
    $.__views.__alloyId23810.add($.__views.__alloyId23811);
    $.__views.__alloyId23812 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23812"
    });
    $.__views.__alloyId23811.add($.__views.__alloyId23812);
    $.__views.__alloyId23813 = Ti.UI.createView({
        id: "__alloyId23813"
    });
    $.__views.__alloyId23813 && $.addTopLevelView($.__views.__alloyId23813);
    $.__views.__alloyId23814 = Ti.UI.createView({
        id: "__alloyId23814"
    });
    $.__views.__alloyId23813.add($.__views.__alloyId23814);
    $.__views.__alloyId23815 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23815"
    });
    $.__views.__alloyId23814.add($.__views.__alloyId23815);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;