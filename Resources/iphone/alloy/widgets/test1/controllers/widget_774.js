function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_774";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_774 = Ti.UI.createView({
        id: "widget_774"
    });
    $.__views.widget_774 && $.addTopLevelView($.__views.widget_774);
    $.__views.__alloyId19526 = Ti.UI.createView({
        id: "__alloyId19526"
    });
    $.__views.widget_774.add($.__views.__alloyId19526);
    $.__views.__alloyId19527 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19527"
    });
    $.__views.__alloyId19526.add($.__views.__alloyId19527);
    $.__views.__alloyId19528 = Ti.UI.createView({
        id: "__alloyId19528"
    });
    $.__views.__alloyId19528 && $.addTopLevelView($.__views.__alloyId19528);
    $.__views.__alloyId19529 = Ti.UI.createView({
        id: "__alloyId19529"
    });
    $.__views.__alloyId19528.add($.__views.__alloyId19529);
    $.__views.__alloyId19530 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19530"
    });
    $.__views.__alloyId19529.add($.__views.__alloyId19530);
    $.__views.__alloyId19531 = Ti.UI.createView({
        id: "__alloyId19531"
    });
    $.__views.__alloyId19531 && $.addTopLevelView($.__views.__alloyId19531);
    $.__views.__alloyId19532 = Ti.UI.createView({
        id: "__alloyId19532"
    });
    $.__views.__alloyId19531.add($.__views.__alloyId19532);
    $.__views.__alloyId19533 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19533"
    });
    $.__views.__alloyId19532.add($.__views.__alloyId19533);
    $.__views.__alloyId19534 = Ti.UI.createView({
        id: "__alloyId19534"
    });
    $.__views.__alloyId19534 && $.addTopLevelView($.__views.__alloyId19534);
    $.__views.__alloyId19535 = Ti.UI.createView({
        id: "__alloyId19535"
    });
    $.__views.__alloyId19534.add($.__views.__alloyId19535);
    $.__views.__alloyId19536 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19536"
    });
    $.__views.__alloyId19535.add($.__views.__alloyId19536);
    $.__views.__alloyId19537 = Ti.UI.createView({
        id: "__alloyId19537"
    });
    $.__views.__alloyId19537 && $.addTopLevelView($.__views.__alloyId19537);
    $.__views.__alloyId19538 = Ti.UI.createView({
        id: "__alloyId19538"
    });
    $.__views.__alloyId19537.add($.__views.__alloyId19538);
    $.__views.__alloyId19539 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19539"
    });
    $.__views.__alloyId19538.add($.__views.__alloyId19539);
    $.__views.__alloyId19540 = Ti.UI.createView({
        id: "__alloyId19540"
    });
    $.__views.__alloyId19540 && $.addTopLevelView($.__views.__alloyId19540);
    $.__views.__alloyId19541 = Ti.UI.createView({
        id: "__alloyId19541"
    });
    $.__views.__alloyId19540.add($.__views.__alloyId19541);
    $.__views.__alloyId19542 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19542"
    });
    $.__views.__alloyId19541.add($.__views.__alloyId19542);
    $.__views.__alloyId19543 = Ti.UI.createView({
        id: "__alloyId19543"
    });
    $.__views.__alloyId19543 && $.addTopLevelView($.__views.__alloyId19543);
    $.__views.__alloyId19544 = Ti.UI.createView({
        id: "__alloyId19544"
    });
    $.__views.__alloyId19543.add($.__views.__alloyId19544);
    $.__views.__alloyId19545 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19545"
    });
    $.__views.__alloyId19544.add($.__views.__alloyId19545);
    $.__views.__alloyId19546 = Ti.UI.createView({
        id: "__alloyId19546"
    });
    $.__views.__alloyId19546 && $.addTopLevelView($.__views.__alloyId19546);
    $.__views.__alloyId19547 = Ti.UI.createView({
        id: "__alloyId19547"
    });
    $.__views.__alloyId19546.add($.__views.__alloyId19547);
    $.__views.__alloyId19548 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19548"
    });
    $.__views.__alloyId19547.add($.__views.__alloyId19548);
    $.__views.__alloyId19549 = Ti.UI.createView({
        id: "__alloyId19549"
    });
    $.__views.__alloyId19549 && $.addTopLevelView($.__views.__alloyId19549);
    $.__views.__alloyId19550 = Ti.UI.createView({
        id: "__alloyId19550"
    });
    $.__views.__alloyId19549.add($.__views.__alloyId19550);
    $.__views.__alloyId19551 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19551"
    });
    $.__views.__alloyId19550.add($.__views.__alloyId19551);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;