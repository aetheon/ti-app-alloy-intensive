function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_471";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_471 = Ti.UI.createView({
        id: "widget_471"
    });
    $.__views.widget_471 && $.addTopLevelView($.__views.widget_471);
    $.__views.__alloyId10790 = Ti.UI.createView({
        id: "__alloyId10790"
    });
    $.__views.widget_471.add($.__views.__alloyId10790);
    $.__views.__alloyId10791 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10791"
    });
    $.__views.__alloyId10790.add($.__views.__alloyId10791);
    $.__views.__alloyId10792 = Ti.UI.createView({
        id: "__alloyId10792"
    });
    $.__views.__alloyId10792 && $.addTopLevelView($.__views.__alloyId10792);
    $.__views.__alloyId10793 = Ti.UI.createView({
        id: "__alloyId10793"
    });
    $.__views.__alloyId10792.add($.__views.__alloyId10793);
    $.__views.__alloyId10794 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10794"
    });
    $.__views.__alloyId10793.add($.__views.__alloyId10794);
    $.__views.__alloyId10795 = Ti.UI.createView({
        id: "__alloyId10795"
    });
    $.__views.__alloyId10795 && $.addTopLevelView($.__views.__alloyId10795);
    $.__views.__alloyId10796 = Ti.UI.createView({
        id: "__alloyId10796"
    });
    $.__views.__alloyId10795.add($.__views.__alloyId10796);
    $.__views.__alloyId10797 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10797"
    });
    $.__views.__alloyId10796.add($.__views.__alloyId10797);
    $.__views.__alloyId10798 = Ti.UI.createView({
        id: "__alloyId10798"
    });
    $.__views.__alloyId10798 && $.addTopLevelView($.__views.__alloyId10798);
    $.__views.__alloyId10799 = Ti.UI.createView({
        id: "__alloyId10799"
    });
    $.__views.__alloyId10798.add($.__views.__alloyId10799);
    $.__views.__alloyId10800 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10800"
    });
    $.__views.__alloyId10799.add($.__views.__alloyId10800);
    $.__views.__alloyId10801 = Ti.UI.createView({
        id: "__alloyId10801"
    });
    $.__views.__alloyId10801 && $.addTopLevelView($.__views.__alloyId10801);
    $.__views.__alloyId10802 = Ti.UI.createView({
        id: "__alloyId10802"
    });
    $.__views.__alloyId10801.add($.__views.__alloyId10802);
    $.__views.__alloyId10803 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10803"
    });
    $.__views.__alloyId10802.add($.__views.__alloyId10803);
    $.__views.__alloyId10804 = Ti.UI.createView({
        id: "__alloyId10804"
    });
    $.__views.__alloyId10804 && $.addTopLevelView($.__views.__alloyId10804);
    $.__views.__alloyId10805 = Ti.UI.createView({
        id: "__alloyId10805"
    });
    $.__views.__alloyId10804.add($.__views.__alloyId10805);
    $.__views.__alloyId10806 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10806"
    });
    $.__views.__alloyId10805.add($.__views.__alloyId10806);
    $.__views.__alloyId10807 = Ti.UI.createView({
        id: "__alloyId10807"
    });
    $.__views.__alloyId10807 && $.addTopLevelView($.__views.__alloyId10807);
    $.__views.__alloyId10808 = Ti.UI.createView({
        id: "__alloyId10808"
    });
    $.__views.__alloyId10807.add($.__views.__alloyId10808);
    $.__views.__alloyId10809 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10809"
    });
    $.__views.__alloyId10808.add($.__views.__alloyId10809);
    $.__views.__alloyId10810 = Ti.UI.createView({
        id: "__alloyId10810"
    });
    $.__views.__alloyId10810 && $.addTopLevelView($.__views.__alloyId10810);
    $.__views.__alloyId10811 = Ti.UI.createView({
        id: "__alloyId10811"
    });
    $.__views.__alloyId10810.add($.__views.__alloyId10811);
    $.__views.__alloyId10812 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10812"
    });
    $.__views.__alloyId10811.add($.__views.__alloyId10812);
    $.__views.__alloyId10813 = Ti.UI.createView({
        id: "__alloyId10813"
    });
    $.__views.__alloyId10813 && $.addTopLevelView($.__views.__alloyId10813);
    $.__views.__alloyId10814 = Ti.UI.createView({
        id: "__alloyId10814"
    });
    $.__views.__alloyId10813.add($.__views.__alloyId10814);
    $.__views.__alloyId10815 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10815"
    });
    $.__views.__alloyId10814.add($.__views.__alloyId10815);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;