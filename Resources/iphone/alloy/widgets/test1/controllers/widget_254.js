function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_254";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_254 = Ti.UI.createView({
        id: "widget_254"
    });
    $.__views.widget_254 && $.addTopLevelView($.__views.widget_254);
    $.__views.__alloyId4524 = Ti.UI.createView({
        id: "__alloyId4524"
    });
    $.__views.widget_254.add($.__views.__alloyId4524);
    $.__views.__alloyId4525 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4525"
    });
    $.__views.__alloyId4524.add($.__views.__alloyId4525);
    $.__views.__alloyId4526 = Ti.UI.createView({
        id: "__alloyId4526"
    });
    $.__views.__alloyId4526 && $.addTopLevelView($.__views.__alloyId4526);
    $.__views.__alloyId4527 = Ti.UI.createView({
        id: "__alloyId4527"
    });
    $.__views.__alloyId4526.add($.__views.__alloyId4527);
    $.__views.__alloyId4528 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4528"
    });
    $.__views.__alloyId4527.add($.__views.__alloyId4528);
    $.__views.__alloyId4529 = Ti.UI.createView({
        id: "__alloyId4529"
    });
    $.__views.__alloyId4529 && $.addTopLevelView($.__views.__alloyId4529);
    $.__views.__alloyId4530 = Ti.UI.createView({
        id: "__alloyId4530"
    });
    $.__views.__alloyId4529.add($.__views.__alloyId4530);
    $.__views.__alloyId4531 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4531"
    });
    $.__views.__alloyId4530.add($.__views.__alloyId4531);
    $.__views.__alloyId4532 = Ti.UI.createView({
        id: "__alloyId4532"
    });
    $.__views.__alloyId4532 && $.addTopLevelView($.__views.__alloyId4532);
    $.__views.__alloyId4533 = Ti.UI.createView({
        id: "__alloyId4533"
    });
    $.__views.__alloyId4532.add($.__views.__alloyId4533);
    $.__views.__alloyId4534 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4534"
    });
    $.__views.__alloyId4533.add($.__views.__alloyId4534);
    $.__views.__alloyId4535 = Ti.UI.createView({
        id: "__alloyId4535"
    });
    $.__views.__alloyId4535 && $.addTopLevelView($.__views.__alloyId4535);
    $.__views.__alloyId4536 = Ti.UI.createView({
        id: "__alloyId4536"
    });
    $.__views.__alloyId4535.add($.__views.__alloyId4536);
    $.__views.__alloyId4537 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4537"
    });
    $.__views.__alloyId4536.add($.__views.__alloyId4537);
    $.__views.__alloyId4538 = Ti.UI.createView({
        id: "__alloyId4538"
    });
    $.__views.__alloyId4538 && $.addTopLevelView($.__views.__alloyId4538);
    $.__views.__alloyId4539 = Ti.UI.createView({
        id: "__alloyId4539"
    });
    $.__views.__alloyId4538.add($.__views.__alloyId4539);
    $.__views.__alloyId4540 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4540"
    });
    $.__views.__alloyId4539.add($.__views.__alloyId4540);
    $.__views.__alloyId4541 = Ti.UI.createView({
        id: "__alloyId4541"
    });
    $.__views.__alloyId4541 && $.addTopLevelView($.__views.__alloyId4541);
    $.__views.__alloyId4542 = Ti.UI.createView({
        id: "__alloyId4542"
    });
    $.__views.__alloyId4541.add($.__views.__alloyId4542);
    $.__views.__alloyId4543 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4543"
    });
    $.__views.__alloyId4542.add($.__views.__alloyId4543);
    $.__views.__alloyId4544 = Ti.UI.createView({
        id: "__alloyId4544"
    });
    $.__views.__alloyId4544 && $.addTopLevelView($.__views.__alloyId4544);
    $.__views.__alloyId4545 = Ti.UI.createView({
        id: "__alloyId4545"
    });
    $.__views.__alloyId4544.add($.__views.__alloyId4545);
    $.__views.__alloyId4546 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4546"
    });
    $.__views.__alloyId4545.add($.__views.__alloyId4546);
    $.__views.__alloyId4547 = Ti.UI.createView({
        id: "__alloyId4547"
    });
    $.__views.__alloyId4547 && $.addTopLevelView($.__views.__alloyId4547);
    $.__views.__alloyId4548 = Ti.UI.createView({
        id: "__alloyId4548"
    });
    $.__views.__alloyId4547.add($.__views.__alloyId4548);
    $.__views.__alloyId4549 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4549"
    });
    $.__views.__alloyId4548.add($.__views.__alloyId4549);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;