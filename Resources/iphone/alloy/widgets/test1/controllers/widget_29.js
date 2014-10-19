function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_29";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_29 = Ti.UI.createView({
        id: "widget_29"
    });
    $.__views.widget_29 && $.addTopLevelView($.__views.widget_29);
    $.__views.__alloyId5538 = Ti.UI.createView({
        id: "__alloyId5538"
    });
    $.__views.widget_29.add($.__views.__alloyId5538);
    $.__views.__alloyId5539 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5539"
    });
    $.__views.__alloyId5538.add($.__views.__alloyId5539);
    $.__views.__alloyId5540 = Ti.UI.createView({
        id: "__alloyId5540"
    });
    $.__views.__alloyId5540 && $.addTopLevelView($.__views.__alloyId5540);
    $.__views.__alloyId5541 = Ti.UI.createView({
        id: "__alloyId5541"
    });
    $.__views.__alloyId5540.add($.__views.__alloyId5541);
    $.__views.__alloyId5542 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5542"
    });
    $.__views.__alloyId5541.add($.__views.__alloyId5542);
    $.__views.__alloyId5543 = Ti.UI.createView({
        id: "__alloyId5543"
    });
    $.__views.__alloyId5543 && $.addTopLevelView($.__views.__alloyId5543);
    $.__views.__alloyId5544 = Ti.UI.createView({
        id: "__alloyId5544"
    });
    $.__views.__alloyId5543.add($.__views.__alloyId5544);
    $.__views.__alloyId5545 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5545"
    });
    $.__views.__alloyId5544.add($.__views.__alloyId5545);
    $.__views.__alloyId5546 = Ti.UI.createView({
        id: "__alloyId5546"
    });
    $.__views.__alloyId5546 && $.addTopLevelView($.__views.__alloyId5546);
    $.__views.__alloyId5547 = Ti.UI.createView({
        id: "__alloyId5547"
    });
    $.__views.__alloyId5546.add($.__views.__alloyId5547);
    $.__views.__alloyId5548 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5548"
    });
    $.__views.__alloyId5547.add($.__views.__alloyId5548);
    $.__views.__alloyId5549 = Ti.UI.createView({
        id: "__alloyId5549"
    });
    $.__views.__alloyId5549 && $.addTopLevelView($.__views.__alloyId5549);
    $.__views.__alloyId5550 = Ti.UI.createView({
        id: "__alloyId5550"
    });
    $.__views.__alloyId5549.add($.__views.__alloyId5550);
    $.__views.__alloyId5551 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5551"
    });
    $.__views.__alloyId5550.add($.__views.__alloyId5551);
    $.__views.__alloyId5552 = Ti.UI.createView({
        id: "__alloyId5552"
    });
    $.__views.__alloyId5552 && $.addTopLevelView($.__views.__alloyId5552);
    $.__views.__alloyId5553 = Ti.UI.createView({
        id: "__alloyId5553"
    });
    $.__views.__alloyId5552.add($.__views.__alloyId5553);
    $.__views.__alloyId5554 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5554"
    });
    $.__views.__alloyId5553.add($.__views.__alloyId5554);
    $.__views.__alloyId5555 = Ti.UI.createView({
        id: "__alloyId5555"
    });
    $.__views.__alloyId5555 && $.addTopLevelView($.__views.__alloyId5555);
    $.__views.__alloyId5556 = Ti.UI.createView({
        id: "__alloyId5556"
    });
    $.__views.__alloyId5555.add($.__views.__alloyId5556);
    $.__views.__alloyId5557 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5557"
    });
    $.__views.__alloyId5556.add($.__views.__alloyId5557);
    $.__views.__alloyId5558 = Ti.UI.createView({
        id: "__alloyId5558"
    });
    $.__views.__alloyId5558 && $.addTopLevelView($.__views.__alloyId5558);
    $.__views.__alloyId5559 = Ti.UI.createView({
        id: "__alloyId5559"
    });
    $.__views.__alloyId5558.add($.__views.__alloyId5559);
    $.__views.__alloyId5560 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5560"
    });
    $.__views.__alloyId5559.add($.__views.__alloyId5560);
    $.__views.__alloyId5561 = Ti.UI.createView({
        id: "__alloyId5561"
    });
    $.__views.__alloyId5561 && $.addTopLevelView($.__views.__alloyId5561);
    $.__views.__alloyId5562 = Ti.UI.createView({
        id: "__alloyId5562"
    });
    $.__views.__alloyId5561.add($.__views.__alloyId5562);
    $.__views.__alloyId5563 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5563"
    });
    $.__views.__alloyId5562.add($.__views.__alloyId5563);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;