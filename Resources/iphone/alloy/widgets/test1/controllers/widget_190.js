function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_190";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_190 = Ti.UI.createView({
        id: "widget_190"
    });
    $.__views.widget_190 && $.addTopLevelView($.__views.widget_190);
    $.__views.__alloyId2678 = Ti.UI.createView({
        id: "__alloyId2678"
    });
    $.__views.widget_190.add($.__views.__alloyId2678);
    $.__views.__alloyId2679 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2679"
    });
    $.__views.__alloyId2678.add($.__views.__alloyId2679);
    $.__views.__alloyId2680 = Ti.UI.createView({
        id: "__alloyId2680"
    });
    $.__views.__alloyId2680 && $.addTopLevelView($.__views.__alloyId2680);
    $.__views.__alloyId2681 = Ti.UI.createView({
        id: "__alloyId2681"
    });
    $.__views.__alloyId2680.add($.__views.__alloyId2681);
    $.__views.__alloyId2682 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2682"
    });
    $.__views.__alloyId2681.add($.__views.__alloyId2682);
    $.__views.__alloyId2683 = Ti.UI.createView({
        id: "__alloyId2683"
    });
    $.__views.__alloyId2683 && $.addTopLevelView($.__views.__alloyId2683);
    $.__views.__alloyId2684 = Ti.UI.createView({
        id: "__alloyId2684"
    });
    $.__views.__alloyId2683.add($.__views.__alloyId2684);
    $.__views.__alloyId2685 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2685"
    });
    $.__views.__alloyId2684.add($.__views.__alloyId2685);
    $.__views.__alloyId2686 = Ti.UI.createView({
        id: "__alloyId2686"
    });
    $.__views.__alloyId2686 && $.addTopLevelView($.__views.__alloyId2686);
    $.__views.__alloyId2687 = Ti.UI.createView({
        id: "__alloyId2687"
    });
    $.__views.__alloyId2686.add($.__views.__alloyId2687);
    $.__views.__alloyId2688 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2688"
    });
    $.__views.__alloyId2687.add($.__views.__alloyId2688);
    $.__views.__alloyId2689 = Ti.UI.createView({
        id: "__alloyId2689"
    });
    $.__views.__alloyId2689 && $.addTopLevelView($.__views.__alloyId2689);
    $.__views.__alloyId2690 = Ti.UI.createView({
        id: "__alloyId2690"
    });
    $.__views.__alloyId2689.add($.__views.__alloyId2690);
    $.__views.__alloyId2691 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2691"
    });
    $.__views.__alloyId2690.add($.__views.__alloyId2691);
    $.__views.__alloyId2692 = Ti.UI.createView({
        id: "__alloyId2692"
    });
    $.__views.__alloyId2692 && $.addTopLevelView($.__views.__alloyId2692);
    $.__views.__alloyId2693 = Ti.UI.createView({
        id: "__alloyId2693"
    });
    $.__views.__alloyId2692.add($.__views.__alloyId2693);
    $.__views.__alloyId2694 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2694"
    });
    $.__views.__alloyId2693.add($.__views.__alloyId2694);
    $.__views.__alloyId2695 = Ti.UI.createView({
        id: "__alloyId2695"
    });
    $.__views.__alloyId2695 && $.addTopLevelView($.__views.__alloyId2695);
    $.__views.__alloyId2696 = Ti.UI.createView({
        id: "__alloyId2696"
    });
    $.__views.__alloyId2695.add($.__views.__alloyId2696);
    $.__views.__alloyId2697 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2697"
    });
    $.__views.__alloyId2696.add($.__views.__alloyId2697);
    $.__views.__alloyId2698 = Ti.UI.createView({
        id: "__alloyId2698"
    });
    $.__views.__alloyId2698 && $.addTopLevelView($.__views.__alloyId2698);
    $.__views.__alloyId2699 = Ti.UI.createView({
        id: "__alloyId2699"
    });
    $.__views.__alloyId2698.add($.__views.__alloyId2699);
    $.__views.__alloyId2700 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2700"
    });
    $.__views.__alloyId2699.add($.__views.__alloyId2700);
    $.__views.__alloyId2701 = Ti.UI.createView({
        id: "__alloyId2701"
    });
    $.__views.__alloyId2701 && $.addTopLevelView($.__views.__alloyId2701);
    $.__views.__alloyId2702 = Ti.UI.createView({
        id: "__alloyId2702"
    });
    $.__views.__alloyId2701.add($.__views.__alloyId2702);
    $.__views.__alloyId2703 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2703"
    });
    $.__views.__alloyId2702.add($.__views.__alloyId2703);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;