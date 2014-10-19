function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_194";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_194 = Ti.UI.createView({
        id: "widget_194"
    });
    $.__views.widget_194 && $.addTopLevelView($.__views.widget_194);
    $.__views.__alloyId2782 = Ti.UI.createView({
        id: "__alloyId2782"
    });
    $.__views.widget_194.add($.__views.__alloyId2782);
    $.__views.__alloyId2783 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2783"
    });
    $.__views.__alloyId2782.add($.__views.__alloyId2783);
    $.__views.__alloyId2784 = Ti.UI.createView({
        id: "__alloyId2784"
    });
    $.__views.__alloyId2784 && $.addTopLevelView($.__views.__alloyId2784);
    $.__views.__alloyId2785 = Ti.UI.createView({
        id: "__alloyId2785"
    });
    $.__views.__alloyId2784.add($.__views.__alloyId2785);
    $.__views.__alloyId2786 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2786"
    });
    $.__views.__alloyId2785.add($.__views.__alloyId2786);
    $.__views.__alloyId2787 = Ti.UI.createView({
        id: "__alloyId2787"
    });
    $.__views.__alloyId2787 && $.addTopLevelView($.__views.__alloyId2787);
    $.__views.__alloyId2788 = Ti.UI.createView({
        id: "__alloyId2788"
    });
    $.__views.__alloyId2787.add($.__views.__alloyId2788);
    $.__views.__alloyId2789 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2789"
    });
    $.__views.__alloyId2788.add($.__views.__alloyId2789);
    $.__views.__alloyId2790 = Ti.UI.createView({
        id: "__alloyId2790"
    });
    $.__views.__alloyId2790 && $.addTopLevelView($.__views.__alloyId2790);
    $.__views.__alloyId2791 = Ti.UI.createView({
        id: "__alloyId2791"
    });
    $.__views.__alloyId2790.add($.__views.__alloyId2791);
    $.__views.__alloyId2792 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2792"
    });
    $.__views.__alloyId2791.add($.__views.__alloyId2792);
    $.__views.__alloyId2793 = Ti.UI.createView({
        id: "__alloyId2793"
    });
    $.__views.__alloyId2793 && $.addTopLevelView($.__views.__alloyId2793);
    $.__views.__alloyId2794 = Ti.UI.createView({
        id: "__alloyId2794"
    });
    $.__views.__alloyId2793.add($.__views.__alloyId2794);
    $.__views.__alloyId2795 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2795"
    });
    $.__views.__alloyId2794.add($.__views.__alloyId2795);
    $.__views.__alloyId2796 = Ti.UI.createView({
        id: "__alloyId2796"
    });
    $.__views.__alloyId2796 && $.addTopLevelView($.__views.__alloyId2796);
    $.__views.__alloyId2797 = Ti.UI.createView({
        id: "__alloyId2797"
    });
    $.__views.__alloyId2796.add($.__views.__alloyId2797);
    $.__views.__alloyId2798 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2798"
    });
    $.__views.__alloyId2797.add($.__views.__alloyId2798);
    $.__views.__alloyId2799 = Ti.UI.createView({
        id: "__alloyId2799"
    });
    $.__views.__alloyId2799 && $.addTopLevelView($.__views.__alloyId2799);
    $.__views.__alloyId2800 = Ti.UI.createView({
        id: "__alloyId2800"
    });
    $.__views.__alloyId2799.add($.__views.__alloyId2800);
    $.__views.__alloyId2801 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2801"
    });
    $.__views.__alloyId2800.add($.__views.__alloyId2801);
    $.__views.__alloyId2802 = Ti.UI.createView({
        id: "__alloyId2802"
    });
    $.__views.__alloyId2802 && $.addTopLevelView($.__views.__alloyId2802);
    $.__views.__alloyId2803 = Ti.UI.createView({
        id: "__alloyId2803"
    });
    $.__views.__alloyId2802.add($.__views.__alloyId2803);
    $.__views.__alloyId2804 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2804"
    });
    $.__views.__alloyId2803.add($.__views.__alloyId2804);
    $.__views.__alloyId2805 = Ti.UI.createView({
        id: "__alloyId2805"
    });
    $.__views.__alloyId2805 && $.addTopLevelView($.__views.__alloyId2805);
    $.__views.__alloyId2806 = Ti.UI.createView({
        id: "__alloyId2806"
    });
    $.__views.__alloyId2805.add($.__views.__alloyId2806);
    $.__views.__alloyId2807 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2807"
    });
    $.__views.__alloyId2806.add($.__views.__alloyId2807);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;