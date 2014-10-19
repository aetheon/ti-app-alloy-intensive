function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_255";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_255 = Ti.UI.createView({
        id: "widget_255"
    });
    $.__views.widget_255 && $.addTopLevelView($.__views.widget_255);
    $.__views.__alloyId4550 = Ti.UI.createView({
        id: "__alloyId4550"
    });
    $.__views.widget_255.add($.__views.__alloyId4550);
    $.__views.__alloyId4551 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4551"
    });
    $.__views.__alloyId4550.add($.__views.__alloyId4551);
    $.__views.__alloyId4552 = Ti.UI.createView({
        id: "__alloyId4552"
    });
    $.__views.__alloyId4552 && $.addTopLevelView($.__views.__alloyId4552);
    $.__views.__alloyId4553 = Ti.UI.createView({
        id: "__alloyId4553"
    });
    $.__views.__alloyId4552.add($.__views.__alloyId4553);
    $.__views.__alloyId4554 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4554"
    });
    $.__views.__alloyId4553.add($.__views.__alloyId4554);
    $.__views.__alloyId4555 = Ti.UI.createView({
        id: "__alloyId4555"
    });
    $.__views.__alloyId4555 && $.addTopLevelView($.__views.__alloyId4555);
    $.__views.__alloyId4556 = Ti.UI.createView({
        id: "__alloyId4556"
    });
    $.__views.__alloyId4555.add($.__views.__alloyId4556);
    $.__views.__alloyId4557 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4557"
    });
    $.__views.__alloyId4556.add($.__views.__alloyId4557);
    $.__views.__alloyId4558 = Ti.UI.createView({
        id: "__alloyId4558"
    });
    $.__views.__alloyId4558 && $.addTopLevelView($.__views.__alloyId4558);
    $.__views.__alloyId4559 = Ti.UI.createView({
        id: "__alloyId4559"
    });
    $.__views.__alloyId4558.add($.__views.__alloyId4559);
    $.__views.__alloyId4560 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4560"
    });
    $.__views.__alloyId4559.add($.__views.__alloyId4560);
    $.__views.__alloyId4561 = Ti.UI.createView({
        id: "__alloyId4561"
    });
    $.__views.__alloyId4561 && $.addTopLevelView($.__views.__alloyId4561);
    $.__views.__alloyId4562 = Ti.UI.createView({
        id: "__alloyId4562"
    });
    $.__views.__alloyId4561.add($.__views.__alloyId4562);
    $.__views.__alloyId4563 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4563"
    });
    $.__views.__alloyId4562.add($.__views.__alloyId4563);
    $.__views.__alloyId4564 = Ti.UI.createView({
        id: "__alloyId4564"
    });
    $.__views.__alloyId4564 && $.addTopLevelView($.__views.__alloyId4564);
    $.__views.__alloyId4565 = Ti.UI.createView({
        id: "__alloyId4565"
    });
    $.__views.__alloyId4564.add($.__views.__alloyId4565);
    $.__views.__alloyId4566 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4566"
    });
    $.__views.__alloyId4565.add($.__views.__alloyId4566);
    $.__views.__alloyId4567 = Ti.UI.createView({
        id: "__alloyId4567"
    });
    $.__views.__alloyId4567 && $.addTopLevelView($.__views.__alloyId4567);
    $.__views.__alloyId4568 = Ti.UI.createView({
        id: "__alloyId4568"
    });
    $.__views.__alloyId4567.add($.__views.__alloyId4568);
    $.__views.__alloyId4569 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4569"
    });
    $.__views.__alloyId4568.add($.__views.__alloyId4569);
    $.__views.__alloyId4570 = Ti.UI.createView({
        id: "__alloyId4570"
    });
    $.__views.__alloyId4570 && $.addTopLevelView($.__views.__alloyId4570);
    $.__views.__alloyId4571 = Ti.UI.createView({
        id: "__alloyId4571"
    });
    $.__views.__alloyId4570.add($.__views.__alloyId4571);
    $.__views.__alloyId4572 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4572"
    });
    $.__views.__alloyId4571.add($.__views.__alloyId4572);
    $.__views.__alloyId4573 = Ti.UI.createView({
        id: "__alloyId4573"
    });
    $.__views.__alloyId4573 && $.addTopLevelView($.__views.__alloyId4573);
    $.__views.__alloyId4574 = Ti.UI.createView({
        id: "__alloyId4574"
    });
    $.__views.__alloyId4573.add($.__views.__alloyId4574);
    $.__views.__alloyId4575 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4575"
    });
    $.__views.__alloyId4574.add($.__views.__alloyId4575);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;