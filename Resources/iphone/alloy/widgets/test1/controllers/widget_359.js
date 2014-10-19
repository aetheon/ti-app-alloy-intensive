function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_359";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_359 = Ti.UI.createView({
        id: "widget_359"
    });
    $.__views.widget_359 && $.addTopLevelView($.__views.widget_359);
    $.__views.__alloyId7540 = Ti.UI.createView({
        id: "__alloyId7540"
    });
    $.__views.widget_359.add($.__views.__alloyId7540);
    $.__views.__alloyId7541 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7541"
    });
    $.__views.__alloyId7540.add($.__views.__alloyId7541);
    $.__views.__alloyId7542 = Ti.UI.createView({
        id: "__alloyId7542"
    });
    $.__views.__alloyId7542 && $.addTopLevelView($.__views.__alloyId7542);
    $.__views.__alloyId7543 = Ti.UI.createView({
        id: "__alloyId7543"
    });
    $.__views.__alloyId7542.add($.__views.__alloyId7543);
    $.__views.__alloyId7544 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7544"
    });
    $.__views.__alloyId7543.add($.__views.__alloyId7544);
    $.__views.__alloyId7545 = Ti.UI.createView({
        id: "__alloyId7545"
    });
    $.__views.__alloyId7545 && $.addTopLevelView($.__views.__alloyId7545);
    $.__views.__alloyId7546 = Ti.UI.createView({
        id: "__alloyId7546"
    });
    $.__views.__alloyId7545.add($.__views.__alloyId7546);
    $.__views.__alloyId7547 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7547"
    });
    $.__views.__alloyId7546.add($.__views.__alloyId7547);
    $.__views.__alloyId7548 = Ti.UI.createView({
        id: "__alloyId7548"
    });
    $.__views.__alloyId7548 && $.addTopLevelView($.__views.__alloyId7548);
    $.__views.__alloyId7549 = Ti.UI.createView({
        id: "__alloyId7549"
    });
    $.__views.__alloyId7548.add($.__views.__alloyId7549);
    $.__views.__alloyId7550 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7550"
    });
    $.__views.__alloyId7549.add($.__views.__alloyId7550);
    $.__views.__alloyId7551 = Ti.UI.createView({
        id: "__alloyId7551"
    });
    $.__views.__alloyId7551 && $.addTopLevelView($.__views.__alloyId7551);
    $.__views.__alloyId7552 = Ti.UI.createView({
        id: "__alloyId7552"
    });
    $.__views.__alloyId7551.add($.__views.__alloyId7552);
    $.__views.__alloyId7553 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7553"
    });
    $.__views.__alloyId7552.add($.__views.__alloyId7553);
    $.__views.__alloyId7554 = Ti.UI.createView({
        id: "__alloyId7554"
    });
    $.__views.__alloyId7554 && $.addTopLevelView($.__views.__alloyId7554);
    $.__views.__alloyId7555 = Ti.UI.createView({
        id: "__alloyId7555"
    });
    $.__views.__alloyId7554.add($.__views.__alloyId7555);
    $.__views.__alloyId7556 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7556"
    });
    $.__views.__alloyId7555.add($.__views.__alloyId7556);
    $.__views.__alloyId7557 = Ti.UI.createView({
        id: "__alloyId7557"
    });
    $.__views.__alloyId7557 && $.addTopLevelView($.__views.__alloyId7557);
    $.__views.__alloyId7558 = Ti.UI.createView({
        id: "__alloyId7558"
    });
    $.__views.__alloyId7557.add($.__views.__alloyId7558);
    $.__views.__alloyId7559 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7559"
    });
    $.__views.__alloyId7558.add($.__views.__alloyId7559);
    $.__views.__alloyId7560 = Ti.UI.createView({
        id: "__alloyId7560"
    });
    $.__views.__alloyId7560 && $.addTopLevelView($.__views.__alloyId7560);
    $.__views.__alloyId7561 = Ti.UI.createView({
        id: "__alloyId7561"
    });
    $.__views.__alloyId7560.add($.__views.__alloyId7561);
    $.__views.__alloyId7562 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7562"
    });
    $.__views.__alloyId7561.add($.__views.__alloyId7562);
    $.__views.__alloyId7563 = Ti.UI.createView({
        id: "__alloyId7563"
    });
    $.__views.__alloyId7563 && $.addTopLevelView($.__views.__alloyId7563);
    $.__views.__alloyId7564 = Ti.UI.createView({
        id: "__alloyId7564"
    });
    $.__views.__alloyId7563.add($.__views.__alloyId7564);
    $.__views.__alloyId7565 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7565"
    });
    $.__views.__alloyId7564.add($.__views.__alloyId7565);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;