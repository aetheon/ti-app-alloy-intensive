function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_566";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_566 = Ti.UI.createView({
        id: "widget_566"
    });
    $.__views.widget_566 && $.addTopLevelView($.__views.widget_566);
    $.__views.__alloyId13520 = Ti.UI.createView({
        id: "__alloyId13520"
    });
    $.__views.widget_566.add($.__views.__alloyId13520);
    $.__views.__alloyId13521 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13521"
    });
    $.__views.__alloyId13520.add($.__views.__alloyId13521);
    $.__views.__alloyId13522 = Ti.UI.createView({
        id: "__alloyId13522"
    });
    $.__views.__alloyId13522 && $.addTopLevelView($.__views.__alloyId13522);
    $.__views.__alloyId13523 = Ti.UI.createView({
        id: "__alloyId13523"
    });
    $.__views.__alloyId13522.add($.__views.__alloyId13523);
    $.__views.__alloyId13524 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13524"
    });
    $.__views.__alloyId13523.add($.__views.__alloyId13524);
    $.__views.__alloyId13525 = Ti.UI.createView({
        id: "__alloyId13525"
    });
    $.__views.__alloyId13525 && $.addTopLevelView($.__views.__alloyId13525);
    $.__views.__alloyId13526 = Ti.UI.createView({
        id: "__alloyId13526"
    });
    $.__views.__alloyId13525.add($.__views.__alloyId13526);
    $.__views.__alloyId13527 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13527"
    });
    $.__views.__alloyId13526.add($.__views.__alloyId13527);
    $.__views.__alloyId13528 = Ti.UI.createView({
        id: "__alloyId13528"
    });
    $.__views.__alloyId13528 && $.addTopLevelView($.__views.__alloyId13528);
    $.__views.__alloyId13529 = Ti.UI.createView({
        id: "__alloyId13529"
    });
    $.__views.__alloyId13528.add($.__views.__alloyId13529);
    $.__views.__alloyId13530 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13530"
    });
    $.__views.__alloyId13529.add($.__views.__alloyId13530);
    $.__views.__alloyId13531 = Ti.UI.createView({
        id: "__alloyId13531"
    });
    $.__views.__alloyId13531 && $.addTopLevelView($.__views.__alloyId13531);
    $.__views.__alloyId13532 = Ti.UI.createView({
        id: "__alloyId13532"
    });
    $.__views.__alloyId13531.add($.__views.__alloyId13532);
    $.__views.__alloyId13533 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13533"
    });
    $.__views.__alloyId13532.add($.__views.__alloyId13533);
    $.__views.__alloyId13534 = Ti.UI.createView({
        id: "__alloyId13534"
    });
    $.__views.__alloyId13534 && $.addTopLevelView($.__views.__alloyId13534);
    $.__views.__alloyId13535 = Ti.UI.createView({
        id: "__alloyId13535"
    });
    $.__views.__alloyId13534.add($.__views.__alloyId13535);
    $.__views.__alloyId13536 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13536"
    });
    $.__views.__alloyId13535.add($.__views.__alloyId13536);
    $.__views.__alloyId13537 = Ti.UI.createView({
        id: "__alloyId13537"
    });
    $.__views.__alloyId13537 && $.addTopLevelView($.__views.__alloyId13537);
    $.__views.__alloyId13538 = Ti.UI.createView({
        id: "__alloyId13538"
    });
    $.__views.__alloyId13537.add($.__views.__alloyId13538);
    $.__views.__alloyId13539 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13539"
    });
    $.__views.__alloyId13538.add($.__views.__alloyId13539);
    $.__views.__alloyId13540 = Ti.UI.createView({
        id: "__alloyId13540"
    });
    $.__views.__alloyId13540 && $.addTopLevelView($.__views.__alloyId13540);
    $.__views.__alloyId13541 = Ti.UI.createView({
        id: "__alloyId13541"
    });
    $.__views.__alloyId13540.add($.__views.__alloyId13541);
    $.__views.__alloyId13542 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13542"
    });
    $.__views.__alloyId13541.add($.__views.__alloyId13542);
    $.__views.__alloyId13543 = Ti.UI.createView({
        id: "__alloyId13543"
    });
    $.__views.__alloyId13543 && $.addTopLevelView($.__views.__alloyId13543);
    $.__views.__alloyId13544 = Ti.UI.createView({
        id: "__alloyId13544"
    });
    $.__views.__alloyId13543.add($.__views.__alloyId13544);
    $.__views.__alloyId13545 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13545"
    });
    $.__views.__alloyId13544.add($.__views.__alloyId13545);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;