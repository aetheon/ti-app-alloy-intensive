function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_186";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_186 = Ti.UI.createView({
        id: "widget_186"
    });
    $.__views.widget_186 && $.addTopLevelView($.__views.widget_186);
    $.__views.__alloyId2548 = Ti.UI.createView({
        id: "__alloyId2548"
    });
    $.__views.widget_186.add($.__views.__alloyId2548);
    $.__views.__alloyId2549 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2549"
    });
    $.__views.__alloyId2548.add($.__views.__alloyId2549);
    $.__views.__alloyId2550 = Ti.UI.createView({
        id: "__alloyId2550"
    });
    $.__views.__alloyId2550 && $.addTopLevelView($.__views.__alloyId2550);
    $.__views.__alloyId2551 = Ti.UI.createView({
        id: "__alloyId2551"
    });
    $.__views.__alloyId2550.add($.__views.__alloyId2551);
    $.__views.__alloyId2552 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2552"
    });
    $.__views.__alloyId2551.add($.__views.__alloyId2552);
    $.__views.__alloyId2553 = Ti.UI.createView({
        id: "__alloyId2553"
    });
    $.__views.__alloyId2553 && $.addTopLevelView($.__views.__alloyId2553);
    $.__views.__alloyId2554 = Ti.UI.createView({
        id: "__alloyId2554"
    });
    $.__views.__alloyId2553.add($.__views.__alloyId2554);
    $.__views.__alloyId2555 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2555"
    });
    $.__views.__alloyId2554.add($.__views.__alloyId2555);
    $.__views.__alloyId2556 = Ti.UI.createView({
        id: "__alloyId2556"
    });
    $.__views.__alloyId2556 && $.addTopLevelView($.__views.__alloyId2556);
    $.__views.__alloyId2557 = Ti.UI.createView({
        id: "__alloyId2557"
    });
    $.__views.__alloyId2556.add($.__views.__alloyId2557);
    $.__views.__alloyId2558 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2558"
    });
    $.__views.__alloyId2557.add($.__views.__alloyId2558);
    $.__views.__alloyId2559 = Ti.UI.createView({
        id: "__alloyId2559"
    });
    $.__views.__alloyId2559 && $.addTopLevelView($.__views.__alloyId2559);
    $.__views.__alloyId2560 = Ti.UI.createView({
        id: "__alloyId2560"
    });
    $.__views.__alloyId2559.add($.__views.__alloyId2560);
    $.__views.__alloyId2561 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2561"
    });
    $.__views.__alloyId2560.add($.__views.__alloyId2561);
    $.__views.__alloyId2562 = Ti.UI.createView({
        id: "__alloyId2562"
    });
    $.__views.__alloyId2562 && $.addTopLevelView($.__views.__alloyId2562);
    $.__views.__alloyId2563 = Ti.UI.createView({
        id: "__alloyId2563"
    });
    $.__views.__alloyId2562.add($.__views.__alloyId2563);
    $.__views.__alloyId2564 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2564"
    });
    $.__views.__alloyId2563.add($.__views.__alloyId2564);
    $.__views.__alloyId2565 = Ti.UI.createView({
        id: "__alloyId2565"
    });
    $.__views.__alloyId2565 && $.addTopLevelView($.__views.__alloyId2565);
    $.__views.__alloyId2566 = Ti.UI.createView({
        id: "__alloyId2566"
    });
    $.__views.__alloyId2565.add($.__views.__alloyId2566);
    $.__views.__alloyId2567 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2567"
    });
    $.__views.__alloyId2566.add($.__views.__alloyId2567);
    $.__views.__alloyId2568 = Ti.UI.createView({
        id: "__alloyId2568"
    });
    $.__views.__alloyId2568 && $.addTopLevelView($.__views.__alloyId2568);
    $.__views.__alloyId2569 = Ti.UI.createView({
        id: "__alloyId2569"
    });
    $.__views.__alloyId2568.add($.__views.__alloyId2569);
    $.__views.__alloyId2570 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2570"
    });
    $.__views.__alloyId2569.add($.__views.__alloyId2570);
    $.__views.__alloyId2571 = Ti.UI.createView({
        id: "__alloyId2571"
    });
    $.__views.__alloyId2571 && $.addTopLevelView($.__views.__alloyId2571);
    $.__views.__alloyId2572 = Ti.UI.createView({
        id: "__alloyId2572"
    });
    $.__views.__alloyId2571.add($.__views.__alloyId2572);
    $.__views.__alloyId2573 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2573"
    });
    $.__views.__alloyId2572.add($.__views.__alloyId2573);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;