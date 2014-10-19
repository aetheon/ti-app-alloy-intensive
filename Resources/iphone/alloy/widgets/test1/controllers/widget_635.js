function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_635";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_635 = Ti.UI.createView({
        id: "widget_635"
    });
    $.__views.widget_635 && $.addTopLevelView($.__views.widget_635);
    $.__views.__alloyId15522 = Ti.UI.createView({
        id: "__alloyId15522"
    });
    $.__views.widget_635.add($.__views.__alloyId15522);
    $.__views.__alloyId15523 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15523"
    });
    $.__views.__alloyId15522.add($.__views.__alloyId15523);
    $.__views.__alloyId15524 = Ti.UI.createView({
        id: "__alloyId15524"
    });
    $.__views.__alloyId15524 && $.addTopLevelView($.__views.__alloyId15524);
    $.__views.__alloyId15525 = Ti.UI.createView({
        id: "__alloyId15525"
    });
    $.__views.__alloyId15524.add($.__views.__alloyId15525);
    $.__views.__alloyId15526 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15526"
    });
    $.__views.__alloyId15525.add($.__views.__alloyId15526);
    $.__views.__alloyId15527 = Ti.UI.createView({
        id: "__alloyId15527"
    });
    $.__views.__alloyId15527 && $.addTopLevelView($.__views.__alloyId15527);
    $.__views.__alloyId15528 = Ti.UI.createView({
        id: "__alloyId15528"
    });
    $.__views.__alloyId15527.add($.__views.__alloyId15528);
    $.__views.__alloyId15529 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15529"
    });
    $.__views.__alloyId15528.add($.__views.__alloyId15529);
    $.__views.__alloyId15530 = Ti.UI.createView({
        id: "__alloyId15530"
    });
    $.__views.__alloyId15530 && $.addTopLevelView($.__views.__alloyId15530);
    $.__views.__alloyId15531 = Ti.UI.createView({
        id: "__alloyId15531"
    });
    $.__views.__alloyId15530.add($.__views.__alloyId15531);
    $.__views.__alloyId15532 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15532"
    });
    $.__views.__alloyId15531.add($.__views.__alloyId15532);
    $.__views.__alloyId15533 = Ti.UI.createView({
        id: "__alloyId15533"
    });
    $.__views.__alloyId15533 && $.addTopLevelView($.__views.__alloyId15533);
    $.__views.__alloyId15534 = Ti.UI.createView({
        id: "__alloyId15534"
    });
    $.__views.__alloyId15533.add($.__views.__alloyId15534);
    $.__views.__alloyId15535 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15535"
    });
    $.__views.__alloyId15534.add($.__views.__alloyId15535);
    $.__views.__alloyId15536 = Ti.UI.createView({
        id: "__alloyId15536"
    });
    $.__views.__alloyId15536 && $.addTopLevelView($.__views.__alloyId15536);
    $.__views.__alloyId15537 = Ti.UI.createView({
        id: "__alloyId15537"
    });
    $.__views.__alloyId15536.add($.__views.__alloyId15537);
    $.__views.__alloyId15538 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15538"
    });
    $.__views.__alloyId15537.add($.__views.__alloyId15538);
    $.__views.__alloyId15539 = Ti.UI.createView({
        id: "__alloyId15539"
    });
    $.__views.__alloyId15539 && $.addTopLevelView($.__views.__alloyId15539);
    $.__views.__alloyId15540 = Ti.UI.createView({
        id: "__alloyId15540"
    });
    $.__views.__alloyId15539.add($.__views.__alloyId15540);
    $.__views.__alloyId15541 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15541"
    });
    $.__views.__alloyId15540.add($.__views.__alloyId15541);
    $.__views.__alloyId15542 = Ti.UI.createView({
        id: "__alloyId15542"
    });
    $.__views.__alloyId15542 && $.addTopLevelView($.__views.__alloyId15542);
    $.__views.__alloyId15543 = Ti.UI.createView({
        id: "__alloyId15543"
    });
    $.__views.__alloyId15542.add($.__views.__alloyId15543);
    $.__views.__alloyId15544 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15544"
    });
    $.__views.__alloyId15543.add($.__views.__alloyId15544);
    $.__views.__alloyId15545 = Ti.UI.createView({
        id: "__alloyId15545"
    });
    $.__views.__alloyId15545 && $.addTopLevelView($.__views.__alloyId15545);
    $.__views.__alloyId15546 = Ti.UI.createView({
        id: "__alloyId15546"
    });
    $.__views.__alloyId15545.add($.__views.__alloyId15546);
    $.__views.__alloyId15547 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15547"
    });
    $.__views.__alloyId15546.add($.__views.__alloyId15547);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;