function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_189";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_189 = Ti.UI.createView({
        id: "widget_189"
    });
    $.__views.widget_189 && $.addTopLevelView($.__views.widget_189);
    $.__views.__alloyId2626 = Ti.UI.createView({
        id: "__alloyId2626"
    });
    $.__views.widget_189.add($.__views.__alloyId2626);
    $.__views.__alloyId2627 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2627"
    });
    $.__views.__alloyId2626.add($.__views.__alloyId2627);
    $.__views.__alloyId2628 = Ti.UI.createView({
        id: "__alloyId2628"
    });
    $.__views.__alloyId2628 && $.addTopLevelView($.__views.__alloyId2628);
    $.__views.__alloyId2629 = Ti.UI.createView({
        id: "__alloyId2629"
    });
    $.__views.__alloyId2628.add($.__views.__alloyId2629);
    $.__views.__alloyId2630 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2630"
    });
    $.__views.__alloyId2629.add($.__views.__alloyId2630);
    $.__views.__alloyId2631 = Ti.UI.createView({
        id: "__alloyId2631"
    });
    $.__views.__alloyId2631 && $.addTopLevelView($.__views.__alloyId2631);
    $.__views.__alloyId2632 = Ti.UI.createView({
        id: "__alloyId2632"
    });
    $.__views.__alloyId2631.add($.__views.__alloyId2632);
    $.__views.__alloyId2633 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2633"
    });
    $.__views.__alloyId2632.add($.__views.__alloyId2633);
    $.__views.__alloyId2634 = Ti.UI.createView({
        id: "__alloyId2634"
    });
    $.__views.__alloyId2634 && $.addTopLevelView($.__views.__alloyId2634);
    $.__views.__alloyId2635 = Ti.UI.createView({
        id: "__alloyId2635"
    });
    $.__views.__alloyId2634.add($.__views.__alloyId2635);
    $.__views.__alloyId2636 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2636"
    });
    $.__views.__alloyId2635.add($.__views.__alloyId2636);
    $.__views.__alloyId2637 = Ti.UI.createView({
        id: "__alloyId2637"
    });
    $.__views.__alloyId2637 && $.addTopLevelView($.__views.__alloyId2637);
    $.__views.__alloyId2638 = Ti.UI.createView({
        id: "__alloyId2638"
    });
    $.__views.__alloyId2637.add($.__views.__alloyId2638);
    $.__views.__alloyId2639 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2639"
    });
    $.__views.__alloyId2638.add($.__views.__alloyId2639);
    $.__views.__alloyId2640 = Ti.UI.createView({
        id: "__alloyId2640"
    });
    $.__views.__alloyId2640 && $.addTopLevelView($.__views.__alloyId2640);
    $.__views.__alloyId2641 = Ti.UI.createView({
        id: "__alloyId2641"
    });
    $.__views.__alloyId2640.add($.__views.__alloyId2641);
    $.__views.__alloyId2642 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2642"
    });
    $.__views.__alloyId2641.add($.__views.__alloyId2642);
    $.__views.__alloyId2643 = Ti.UI.createView({
        id: "__alloyId2643"
    });
    $.__views.__alloyId2643 && $.addTopLevelView($.__views.__alloyId2643);
    $.__views.__alloyId2644 = Ti.UI.createView({
        id: "__alloyId2644"
    });
    $.__views.__alloyId2643.add($.__views.__alloyId2644);
    $.__views.__alloyId2645 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2645"
    });
    $.__views.__alloyId2644.add($.__views.__alloyId2645);
    $.__views.__alloyId2646 = Ti.UI.createView({
        id: "__alloyId2646"
    });
    $.__views.__alloyId2646 && $.addTopLevelView($.__views.__alloyId2646);
    $.__views.__alloyId2647 = Ti.UI.createView({
        id: "__alloyId2647"
    });
    $.__views.__alloyId2646.add($.__views.__alloyId2647);
    $.__views.__alloyId2648 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2648"
    });
    $.__views.__alloyId2647.add($.__views.__alloyId2648);
    $.__views.__alloyId2649 = Ti.UI.createView({
        id: "__alloyId2649"
    });
    $.__views.__alloyId2649 && $.addTopLevelView($.__views.__alloyId2649);
    $.__views.__alloyId2650 = Ti.UI.createView({
        id: "__alloyId2650"
    });
    $.__views.__alloyId2649.add($.__views.__alloyId2650);
    $.__views.__alloyId2651 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2651"
    });
    $.__views.__alloyId2650.add($.__views.__alloyId2651);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;