function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_531";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_531 = Ti.UI.createView({
        id: "widget_531"
    });
    $.__views.widget_531 && $.addTopLevelView($.__views.widget_531);
    $.__views.__alloyId12532 = Ti.UI.createView({
        id: "__alloyId12532"
    });
    $.__views.widget_531.add($.__views.__alloyId12532);
    $.__views.__alloyId12533 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12533"
    });
    $.__views.__alloyId12532.add($.__views.__alloyId12533);
    $.__views.__alloyId12534 = Ti.UI.createView({
        id: "__alloyId12534"
    });
    $.__views.__alloyId12534 && $.addTopLevelView($.__views.__alloyId12534);
    $.__views.__alloyId12535 = Ti.UI.createView({
        id: "__alloyId12535"
    });
    $.__views.__alloyId12534.add($.__views.__alloyId12535);
    $.__views.__alloyId12536 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12536"
    });
    $.__views.__alloyId12535.add($.__views.__alloyId12536);
    $.__views.__alloyId12537 = Ti.UI.createView({
        id: "__alloyId12537"
    });
    $.__views.__alloyId12537 && $.addTopLevelView($.__views.__alloyId12537);
    $.__views.__alloyId12538 = Ti.UI.createView({
        id: "__alloyId12538"
    });
    $.__views.__alloyId12537.add($.__views.__alloyId12538);
    $.__views.__alloyId12539 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12539"
    });
    $.__views.__alloyId12538.add($.__views.__alloyId12539);
    $.__views.__alloyId12540 = Ti.UI.createView({
        id: "__alloyId12540"
    });
    $.__views.__alloyId12540 && $.addTopLevelView($.__views.__alloyId12540);
    $.__views.__alloyId12541 = Ti.UI.createView({
        id: "__alloyId12541"
    });
    $.__views.__alloyId12540.add($.__views.__alloyId12541);
    $.__views.__alloyId12542 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12542"
    });
    $.__views.__alloyId12541.add($.__views.__alloyId12542);
    $.__views.__alloyId12543 = Ti.UI.createView({
        id: "__alloyId12543"
    });
    $.__views.__alloyId12543 && $.addTopLevelView($.__views.__alloyId12543);
    $.__views.__alloyId12544 = Ti.UI.createView({
        id: "__alloyId12544"
    });
    $.__views.__alloyId12543.add($.__views.__alloyId12544);
    $.__views.__alloyId12545 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12545"
    });
    $.__views.__alloyId12544.add($.__views.__alloyId12545);
    $.__views.__alloyId12546 = Ti.UI.createView({
        id: "__alloyId12546"
    });
    $.__views.__alloyId12546 && $.addTopLevelView($.__views.__alloyId12546);
    $.__views.__alloyId12547 = Ti.UI.createView({
        id: "__alloyId12547"
    });
    $.__views.__alloyId12546.add($.__views.__alloyId12547);
    $.__views.__alloyId12548 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12548"
    });
    $.__views.__alloyId12547.add($.__views.__alloyId12548);
    $.__views.__alloyId12549 = Ti.UI.createView({
        id: "__alloyId12549"
    });
    $.__views.__alloyId12549 && $.addTopLevelView($.__views.__alloyId12549);
    $.__views.__alloyId12550 = Ti.UI.createView({
        id: "__alloyId12550"
    });
    $.__views.__alloyId12549.add($.__views.__alloyId12550);
    $.__views.__alloyId12551 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12551"
    });
    $.__views.__alloyId12550.add($.__views.__alloyId12551);
    $.__views.__alloyId12552 = Ti.UI.createView({
        id: "__alloyId12552"
    });
    $.__views.__alloyId12552 && $.addTopLevelView($.__views.__alloyId12552);
    $.__views.__alloyId12553 = Ti.UI.createView({
        id: "__alloyId12553"
    });
    $.__views.__alloyId12552.add($.__views.__alloyId12553);
    $.__views.__alloyId12554 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12554"
    });
    $.__views.__alloyId12553.add($.__views.__alloyId12554);
    $.__views.__alloyId12555 = Ti.UI.createView({
        id: "__alloyId12555"
    });
    $.__views.__alloyId12555 && $.addTopLevelView($.__views.__alloyId12555);
    $.__views.__alloyId12556 = Ti.UI.createView({
        id: "__alloyId12556"
    });
    $.__views.__alloyId12555.add($.__views.__alloyId12556);
    $.__views.__alloyId12557 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12557"
    });
    $.__views.__alloyId12556.add($.__views.__alloyId12557);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;