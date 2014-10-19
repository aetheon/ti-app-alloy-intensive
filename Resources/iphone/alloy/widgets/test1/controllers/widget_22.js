function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_22";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_22 = Ti.UI.createView({
        id: "widget_22"
    });
    $.__views.widget_22 && $.addTopLevelView($.__views.widget_22);
    $.__views.__alloyId3536 = Ti.UI.createView({
        id: "__alloyId3536"
    });
    $.__views.widget_22.add($.__views.__alloyId3536);
    $.__views.__alloyId3537 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3537"
    });
    $.__views.__alloyId3536.add($.__views.__alloyId3537);
    $.__views.__alloyId3538 = Ti.UI.createView({
        id: "__alloyId3538"
    });
    $.__views.__alloyId3538 && $.addTopLevelView($.__views.__alloyId3538);
    $.__views.__alloyId3539 = Ti.UI.createView({
        id: "__alloyId3539"
    });
    $.__views.__alloyId3538.add($.__views.__alloyId3539);
    $.__views.__alloyId3540 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3540"
    });
    $.__views.__alloyId3539.add($.__views.__alloyId3540);
    $.__views.__alloyId3541 = Ti.UI.createView({
        id: "__alloyId3541"
    });
    $.__views.__alloyId3541 && $.addTopLevelView($.__views.__alloyId3541);
    $.__views.__alloyId3542 = Ti.UI.createView({
        id: "__alloyId3542"
    });
    $.__views.__alloyId3541.add($.__views.__alloyId3542);
    $.__views.__alloyId3543 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3543"
    });
    $.__views.__alloyId3542.add($.__views.__alloyId3543);
    $.__views.__alloyId3544 = Ti.UI.createView({
        id: "__alloyId3544"
    });
    $.__views.__alloyId3544 && $.addTopLevelView($.__views.__alloyId3544);
    $.__views.__alloyId3545 = Ti.UI.createView({
        id: "__alloyId3545"
    });
    $.__views.__alloyId3544.add($.__views.__alloyId3545);
    $.__views.__alloyId3546 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3546"
    });
    $.__views.__alloyId3545.add($.__views.__alloyId3546);
    $.__views.__alloyId3547 = Ti.UI.createView({
        id: "__alloyId3547"
    });
    $.__views.__alloyId3547 && $.addTopLevelView($.__views.__alloyId3547);
    $.__views.__alloyId3548 = Ti.UI.createView({
        id: "__alloyId3548"
    });
    $.__views.__alloyId3547.add($.__views.__alloyId3548);
    $.__views.__alloyId3549 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3549"
    });
    $.__views.__alloyId3548.add($.__views.__alloyId3549);
    $.__views.__alloyId3550 = Ti.UI.createView({
        id: "__alloyId3550"
    });
    $.__views.__alloyId3550 && $.addTopLevelView($.__views.__alloyId3550);
    $.__views.__alloyId3551 = Ti.UI.createView({
        id: "__alloyId3551"
    });
    $.__views.__alloyId3550.add($.__views.__alloyId3551);
    $.__views.__alloyId3552 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3552"
    });
    $.__views.__alloyId3551.add($.__views.__alloyId3552);
    $.__views.__alloyId3553 = Ti.UI.createView({
        id: "__alloyId3553"
    });
    $.__views.__alloyId3553 && $.addTopLevelView($.__views.__alloyId3553);
    $.__views.__alloyId3554 = Ti.UI.createView({
        id: "__alloyId3554"
    });
    $.__views.__alloyId3553.add($.__views.__alloyId3554);
    $.__views.__alloyId3555 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3555"
    });
    $.__views.__alloyId3554.add($.__views.__alloyId3555);
    $.__views.__alloyId3556 = Ti.UI.createView({
        id: "__alloyId3556"
    });
    $.__views.__alloyId3556 && $.addTopLevelView($.__views.__alloyId3556);
    $.__views.__alloyId3557 = Ti.UI.createView({
        id: "__alloyId3557"
    });
    $.__views.__alloyId3556.add($.__views.__alloyId3557);
    $.__views.__alloyId3558 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3558"
    });
    $.__views.__alloyId3557.add($.__views.__alloyId3558);
    $.__views.__alloyId3559 = Ti.UI.createView({
        id: "__alloyId3559"
    });
    $.__views.__alloyId3559 && $.addTopLevelView($.__views.__alloyId3559);
    $.__views.__alloyId3560 = Ti.UI.createView({
        id: "__alloyId3560"
    });
    $.__views.__alloyId3559.add($.__views.__alloyId3560);
    $.__views.__alloyId3561 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3561"
    });
    $.__views.__alloyId3560.add($.__views.__alloyId3561);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;