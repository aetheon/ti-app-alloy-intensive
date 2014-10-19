function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_187";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_187 = Ti.UI.createView({
        id: "widget_187"
    });
    $.__views.widget_187 && $.addTopLevelView($.__views.widget_187);
    $.__views.__alloyId2574 = Ti.UI.createView({
        id: "__alloyId2574"
    });
    $.__views.widget_187.add($.__views.__alloyId2574);
    $.__views.__alloyId2575 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2575"
    });
    $.__views.__alloyId2574.add($.__views.__alloyId2575);
    $.__views.__alloyId2576 = Ti.UI.createView({
        id: "__alloyId2576"
    });
    $.__views.__alloyId2576 && $.addTopLevelView($.__views.__alloyId2576);
    $.__views.__alloyId2577 = Ti.UI.createView({
        id: "__alloyId2577"
    });
    $.__views.__alloyId2576.add($.__views.__alloyId2577);
    $.__views.__alloyId2578 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2578"
    });
    $.__views.__alloyId2577.add($.__views.__alloyId2578);
    $.__views.__alloyId2579 = Ti.UI.createView({
        id: "__alloyId2579"
    });
    $.__views.__alloyId2579 && $.addTopLevelView($.__views.__alloyId2579);
    $.__views.__alloyId2580 = Ti.UI.createView({
        id: "__alloyId2580"
    });
    $.__views.__alloyId2579.add($.__views.__alloyId2580);
    $.__views.__alloyId2581 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2581"
    });
    $.__views.__alloyId2580.add($.__views.__alloyId2581);
    $.__views.__alloyId2582 = Ti.UI.createView({
        id: "__alloyId2582"
    });
    $.__views.__alloyId2582 && $.addTopLevelView($.__views.__alloyId2582);
    $.__views.__alloyId2583 = Ti.UI.createView({
        id: "__alloyId2583"
    });
    $.__views.__alloyId2582.add($.__views.__alloyId2583);
    $.__views.__alloyId2584 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2584"
    });
    $.__views.__alloyId2583.add($.__views.__alloyId2584);
    $.__views.__alloyId2585 = Ti.UI.createView({
        id: "__alloyId2585"
    });
    $.__views.__alloyId2585 && $.addTopLevelView($.__views.__alloyId2585);
    $.__views.__alloyId2586 = Ti.UI.createView({
        id: "__alloyId2586"
    });
    $.__views.__alloyId2585.add($.__views.__alloyId2586);
    $.__views.__alloyId2587 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2587"
    });
    $.__views.__alloyId2586.add($.__views.__alloyId2587);
    $.__views.__alloyId2588 = Ti.UI.createView({
        id: "__alloyId2588"
    });
    $.__views.__alloyId2588 && $.addTopLevelView($.__views.__alloyId2588);
    $.__views.__alloyId2589 = Ti.UI.createView({
        id: "__alloyId2589"
    });
    $.__views.__alloyId2588.add($.__views.__alloyId2589);
    $.__views.__alloyId2590 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2590"
    });
    $.__views.__alloyId2589.add($.__views.__alloyId2590);
    $.__views.__alloyId2591 = Ti.UI.createView({
        id: "__alloyId2591"
    });
    $.__views.__alloyId2591 && $.addTopLevelView($.__views.__alloyId2591);
    $.__views.__alloyId2592 = Ti.UI.createView({
        id: "__alloyId2592"
    });
    $.__views.__alloyId2591.add($.__views.__alloyId2592);
    $.__views.__alloyId2593 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2593"
    });
    $.__views.__alloyId2592.add($.__views.__alloyId2593);
    $.__views.__alloyId2594 = Ti.UI.createView({
        id: "__alloyId2594"
    });
    $.__views.__alloyId2594 && $.addTopLevelView($.__views.__alloyId2594);
    $.__views.__alloyId2595 = Ti.UI.createView({
        id: "__alloyId2595"
    });
    $.__views.__alloyId2594.add($.__views.__alloyId2595);
    $.__views.__alloyId2596 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2596"
    });
    $.__views.__alloyId2595.add($.__views.__alloyId2596);
    $.__views.__alloyId2597 = Ti.UI.createView({
        id: "__alloyId2597"
    });
    $.__views.__alloyId2597 && $.addTopLevelView($.__views.__alloyId2597);
    $.__views.__alloyId2598 = Ti.UI.createView({
        id: "__alloyId2598"
    });
    $.__views.__alloyId2597.add($.__views.__alloyId2598);
    $.__views.__alloyId2599 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2599"
    });
    $.__views.__alloyId2598.add($.__views.__alloyId2599);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;