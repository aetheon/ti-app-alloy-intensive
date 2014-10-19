function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_982";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_982 = Ti.UI.createView({
        id: "widget_982"
    });
    $.__views.widget_982 && $.addTopLevelView($.__views.widget_982);
    $.__views.__alloyId25532 = Ti.UI.createView({
        id: "__alloyId25532"
    });
    $.__views.widget_982.add($.__views.__alloyId25532);
    $.__views.__alloyId25533 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25533"
    });
    $.__views.__alloyId25532.add($.__views.__alloyId25533);
    $.__views.__alloyId25534 = Ti.UI.createView({
        id: "__alloyId25534"
    });
    $.__views.__alloyId25534 && $.addTopLevelView($.__views.__alloyId25534);
    $.__views.__alloyId25535 = Ti.UI.createView({
        id: "__alloyId25535"
    });
    $.__views.__alloyId25534.add($.__views.__alloyId25535);
    $.__views.__alloyId25536 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25536"
    });
    $.__views.__alloyId25535.add($.__views.__alloyId25536);
    $.__views.__alloyId25537 = Ti.UI.createView({
        id: "__alloyId25537"
    });
    $.__views.__alloyId25537 && $.addTopLevelView($.__views.__alloyId25537);
    $.__views.__alloyId25538 = Ti.UI.createView({
        id: "__alloyId25538"
    });
    $.__views.__alloyId25537.add($.__views.__alloyId25538);
    $.__views.__alloyId25539 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25539"
    });
    $.__views.__alloyId25538.add($.__views.__alloyId25539);
    $.__views.__alloyId25540 = Ti.UI.createView({
        id: "__alloyId25540"
    });
    $.__views.__alloyId25540 && $.addTopLevelView($.__views.__alloyId25540);
    $.__views.__alloyId25541 = Ti.UI.createView({
        id: "__alloyId25541"
    });
    $.__views.__alloyId25540.add($.__views.__alloyId25541);
    $.__views.__alloyId25542 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25542"
    });
    $.__views.__alloyId25541.add($.__views.__alloyId25542);
    $.__views.__alloyId25543 = Ti.UI.createView({
        id: "__alloyId25543"
    });
    $.__views.__alloyId25543 && $.addTopLevelView($.__views.__alloyId25543);
    $.__views.__alloyId25544 = Ti.UI.createView({
        id: "__alloyId25544"
    });
    $.__views.__alloyId25543.add($.__views.__alloyId25544);
    $.__views.__alloyId25545 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25545"
    });
    $.__views.__alloyId25544.add($.__views.__alloyId25545);
    $.__views.__alloyId25546 = Ti.UI.createView({
        id: "__alloyId25546"
    });
    $.__views.__alloyId25546 && $.addTopLevelView($.__views.__alloyId25546);
    $.__views.__alloyId25547 = Ti.UI.createView({
        id: "__alloyId25547"
    });
    $.__views.__alloyId25546.add($.__views.__alloyId25547);
    $.__views.__alloyId25548 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25548"
    });
    $.__views.__alloyId25547.add($.__views.__alloyId25548);
    $.__views.__alloyId25549 = Ti.UI.createView({
        id: "__alloyId25549"
    });
    $.__views.__alloyId25549 && $.addTopLevelView($.__views.__alloyId25549);
    $.__views.__alloyId25550 = Ti.UI.createView({
        id: "__alloyId25550"
    });
    $.__views.__alloyId25549.add($.__views.__alloyId25550);
    $.__views.__alloyId25551 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25551"
    });
    $.__views.__alloyId25550.add($.__views.__alloyId25551);
    $.__views.__alloyId25552 = Ti.UI.createView({
        id: "__alloyId25552"
    });
    $.__views.__alloyId25552 && $.addTopLevelView($.__views.__alloyId25552);
    $.__views.__alloyId25553 = Ti.UI.createView({
        id: "__alloyId25553"
    });
    $.__views.__alloyId25552.add($.__views.__alloyId25553);
    $.__views.__alloyId25554 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25554"
    });
    $.__views.__alloyId25553.add($.__views.__alloyId25554);
    $.__views.__alloyId25555 = Ti.UI.createView({
        id: "__alloyId25555"
    });
    $.__views.__alloyId25555 && $.addTopLevelView($.__views.__alloyId25555);
    $.__views.__alloyId25556 = Ti.UI.createView({
        id: "__alloyId25556"
    });
    $.__views.__alloyId25555.add($.__views.__alloyId25556);
    $.__views.__alloyId25557 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25557"
    });
    $.__views.__alloyId25556.add($.__views.__alloyId25557);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;