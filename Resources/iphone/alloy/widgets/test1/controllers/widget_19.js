function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_19";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_19 = Ti.UI.createView({
        id: "widget_19"
    });
    $.__views.widget_19 && $.addTopLevelView($.__views.widget_19);
    $.__views.__alloyId2652 = Ti.UI.createView({
        id: "__alloyId2652"
    });
    $.__views.widget_19.add($.__views.__alloyId2652);
    $.__views.__alloyId2653 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2653"
    });
    $.__views.__alloyId2652.add($.__views.__alloyId2653);
    $.__views.__alloyId2654 = Ti.UI.createView({
        id: "__alloyId2654"
    });
    $.__views.__alloyId2654 && $.addTopLevelView($.__views.__alloyId2654);
    $.__views.__alloyId2655 = Ti.UI.createView({
        id: "__alloyId2655"
    });
    $.__views.__alloyId2654.add($.__views.__alloyId2655);
    $.__views.__alloyId2656 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2656"
    });
    $.__views.__alloyId2655.add($.__views.__alloyId2656);
    $.__views.__alloyId2657 = Ti.UI.createView({
        id: "__alloyId2657"
    });
    $.__views.__alloyId2657 && $.addTopLevelView($.__views.__alloyId2657);
    $.__views.__alloyId2658 = Ti.UI.createView({
        id: "__alloyId2658"
    });
    $.__views.__alloyId2657.add($.__views.__alloyId2658);
    $.__views.__alloyId2659 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2659"
    });
    $.__views.__alloyId2658.add($.__views.__alloyId2659);
    $.__views.__alloyId2660 = Ti.UI.createView({
        id: "__alloyId2660"
    });
    $.__views.__alloyId2660 && $.addTopLevelView($.__views.__alloyId2660);
    $.__views.__alloyId2661 = Ti.UI.createView({
        id: "__alloyId2661"
    });
    $.__views.__alloyId2660.add($.__views.__alloyId2661);
    $.__views.__alloyId2662 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2662"
    });
    $.__views.__alloyId2661.add($.__views.__alloyId2662);
    $.__views.__alloyId2663 = Ti.UI.createView({
        id: "__alloyId2663"
    });
    $.__views.__alloyId2663 && $.addTopLevelView($.__views.__alloyId2663);
    $.__views.__alloyId2664 = Ti.UI.createView({
        id: "__alloyId2664"
    });
    $.__views.__alloyId2663.add($.__views.__alloyId2664);
    $.__views.__alloyId2665 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2665"
    });
    $.__views.__alloyId2664.add($.__views.__alloyId2665);
    $.__views.__alloyId2666 = Ti.UI.createView({
        id: "__alloyId2666"
    });
    $.__views.__alloyId2666 && $.addTopLevelView($.__views.__alloyId2666);
    $.__views.__alloyId2667 = Ti.UI.createView({
        id: "__alloyId2667"
    });
    $.__views.__alloyId2666.add($.__views.__alloyId2667);
    $.__views.__alloyId2668 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2668"
    });
    $.__views.__alloyId2667.add($.__views.__alloyId2668);
    $.__views.__alloyId2669 = Ti.UI.createView({
        id: "__alloyId2669"
    });
    $.__views.__alloyId2669 && $.addTopLevelView($.__views.__alloyId2669);
    $.__views.__alloyId2670 = Ti.UI.createView({
        id: "__alloyId2670"
    });
    $.__views.__alloyId2669.add($.__views.__alloyId2670);
    $.__views.__alloyId2671 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2671"
    });
    $.__views.__alloyId2670.add($.__views.__alloyId2671);
    $.__views.__alloyId2672 = Ti.UI.createView({
        id: "__alloyId2672"
    });
    $.__views.__alloyId2672 && $.addTopLevelView($.__views.__alloyId2672);
    $.__views.__alloyId2673 = Ti.UI.createView({
        id: "__alloyId2673"
    });
    $.__views.__alloyId2672.add($.__views.__alloyId2673);
    $.__views.__alloyId2674 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2674"
    });
    $.__views.__alloyId2673.add($.__views.__alloyId2674);
    $.__views.__alloyId2675 = Ti.UI.createView({
        id: "__alloyId2675"
    });
    $.__views.__alloyId2675 && $.addTopLevelView($.__views.__alloyId2675);
    $.__views.__alloyId2676 = Ti.UI.createView({
        id: "__alloyId2676"
    });
    $.__views.__alloyId2675.add($.__views.__alloyId2676);
    $.__views.__alloyId2677 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2677"
    });
    $.__views.__alloyId2676.add($.__views.__alloyId2677);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;