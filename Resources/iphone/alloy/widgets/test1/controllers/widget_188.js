function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_188";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_188 = Ti.UI.createView({
        id: "widget_188"
    });
    $.__views.widget_188 && $.addTopLevelView($.__views.widget_188);
    $.__views.__alloyId2600 = Ti.UI.createView({
        id: "__alloyId2600"
    });
    $.__views.widget_188.add($.__views.__alloyId2600);
    $.__views.__alloyId2601 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2601"
    });
    $.__views.__alloyId2600.add($.__views.__alloyId2601);
    $.__views.__alloyId2602 = Ti.UI.createView({
        id: "__alloyId2602"
    });
    $.__views.__alloyId2602 && $.addTopLevelView($.__views.__alloyId2602);
    $.__views.__alloyId2603 = Ti.UI.createView({
        id: "__alloyId2603"
    });
    $.__views.__alloyId2602.add($.__views.__alloyId2603);
    $.__views.__alloyId2604 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2604"
    });
    $.__views.__alloyId2603.add($.__views.__alloyId2604);
    $.__views.__alloyId2605 = Ti.UI.createView({
        id: "__alloyId2605"
    });
    $.__views.__alloyId2605 && $.addTopLevelView($.__views.__alloyId2605);
    $.__views.__alloyId2606 = Ti.UI.createView({
        id: "__alloyId2606"
    });
    $.__views.__alloyId2605.add($.__views.__alloyId2606);
    $.__views.__alloyId2607 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2607"
    });
    $.__views.__alloyId2606.add($.__views.__alloyId2607);
    $.__views.__alloyId2608 = Ti.UI.createView({
        id: "__alloyId2608"
    });
    $.__views.__alloyId2608 && $.addTopLevelView($.__views.__alloyId2608);
    $.__views.__alloyId2609 = Ti.UI.createView({
        id: "__alloyId2609"
    });
    $.__views.__alloyId2608.add($.__views.__alloyId2609);
    $.__views.__alloyId2610 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2610"
    });
    $.__views.__alloyId2609.add($.__views.__alloyId2610);
    $.__views.__alloyId2611 = Ti.UI.createView({
        id: "__alloyId2611"
    });
    $.__views.__alloyId2611 && $.addTopLevelView($.__views.__alloyId2611);
    $.__views.__alloyId2612 = Ti.UI.createView({
        id: "__alloyId2612"
    });
    $.__views.__alloyId2611.add($.__views.__alloyId2612);
    $.__views.__alloyId2613 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2613"
    });
    $.__views.__alloyId2612.add($.__views.__alloyId2613);
    $.__views.__alloyId2614 = Ti.UI.createView({
        id: "__alloyId2614"
    });
    $.__views.__alloyId2614 && $.addTopLevelView($.__views.__alloyId2614);
    $.__views.__alloyId2615 = Ti.UI.createView({
        id: "__alloyId2615"
    });
    $.__views.__alloyId2614.add($.__views.__alloyId2615);
    $.__views.__alloyId2616 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2616"
    });
    $.__views.__alloyId2615.add($.__views.__alloyId2616);
    $.__views.__alloyId2617 = Ti.UI.createView({
        id: "__alloyId2617"
    });
    $.__views.__alloyId2617 && $.addTopLevelView($.__views.__alloyId2617);
    $.__views.__alloyId2618 = Ti.UI.createView({
        id: "__alloyId2618"
    });
    $.__views.__alloyId2617.add($.__views.__alloyId2618);
    $.__views.__alloyId2619 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2619"
    });
    $.__views.__alloyId2618.add($.__views.__alloyId2619);
    $.__views.__alloyId2620 = Ti.UI.createView({
        id: "__alloyId2620"
    });
    $.__views.__alloyId2620 && $.addTopLevelView($.__views.__alloyId2620);
    $.__views.__alloyId2621 = Ti.UI.createView({
        id: "__alloyId2621"
    });
    $.__views.__alloyId2620.add($.__views.__alloyId2621);
    $.__views.__alloyId2622 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2622"
    });
    $.__views.__alloyId2621.add($.__views.__alloyId2622);
    $.__views.__alloyId2623 = Ti.UI.createView({
        id: "__alloyId2623"
    });
    $.__views.__alloyId2623 && $.addTopLevelView($.__views.__alloyId2623);
    $.__views.__alloyId2624 = Ti.UI.createView({
        id: "__alloyId2624"
    });
    $.__views.__alloyId2623.add($.__views.__alloyId2624);
    $.__views.__alloyId2625 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2625"
    });
    $.__views.__alloyId2624.add($.__views.__alloyId2625);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;