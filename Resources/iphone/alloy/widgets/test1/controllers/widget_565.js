function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_565";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_565 = Ti.UI.createView({
        id: "widget_565"
    });
    $.__views.widget_565 && $.addTopLevelView($.__views.widget_565);
    $.__views.__alloyId13494 = Ti.UI.createView({
        id: "__alloyId13494"
    });
    $.__views.widget_565.add($.__views.__alloyId13494);
    $.__views.__alloyId13495 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13495"
    });
    $.__views.__alloyId13494.add($.__views.__alloyId13495);
    $.__views.__alloyId13496 = Ti.UI.createView({
        id: "__alloyId13496"
    });
    $.__views.__alloyId13496 && $.addTopLevelView($.__views.__alloyId13496);
    $.__views.__alloyId13497 = Ti.UI.createView({
        id: "__alloyId13497"
    });
    $.__views.__alloyId13496.add($.__views.__alloyId13497);
    $.__views.__alloyId13498 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13498"
    });
    $.__views.__alloyId13497.add($.__views.__alloyId13498);
    $.__views.__alloyId13499 = Ti.UI.createView({
        id: "__alloyId13499"
    });
    $.__views.__alloyId13499 && $.addTopLevelView($.__views.__alloyId13499);
    $.__views.__alloyId13500 = Ti.UI.createView({
        id: "__alloyId13500"
    });
    $.__views.__alloyId13499.add($.__views.__alloyId13500);
    $.__views.__alloyId13501 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13501"
    });
    $.__views.__alloyId13500.add($.__views.__alloyId13501);
    $.__views.__alloyId13502 = Ti.UI.createView({
        id: "__alloyId13502"
    });
    $.__views.__alloyId13502 && $.addTopLevelView($.__views.__alloyId13502);
    $.__views.__alloyId13503 = Ti.UI.createView({
        id: "__alloyId13503"
    });
    $.__views.__alloyId13502.add($.__views.__alloyId13503);
    $.__views.__alloyId13504 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13504"
    });
    $.__views.__alloyId13503.add($.__views.__alloyId13504);
    $.__views.__alloyId13505 = Ti.UI.createView({
        id: "__alloyId13505"
    });
    $.__views.__alloyId13505 && $.addTopLevelView($.__views.__alloyId13505);
    $.__views.__alloyId13506 = Ti.UI.createView({
        id: "__alloyId13506"
    });
    $.__views.__alloyId13505.add($.__views.__alloyId13506);
    $.__views.__alloyId13507 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13507"
    });
    $.__views.__alloyId13506.add($.__views.__alloyId13507);
    $.__views.__alloyId13508 = Ti.UI.createView({
        id: "__alloyId13508"
    });
    $.__views.__alloyId13508 && $.addTopLevelView($.__views.__alloyId13508);
    $.__views.__alloyId13509 = Ti.UI.createView({
        id: "__alloyId13509"
    });
    $.__views.__alloyId13508.add($.__views.__alloyId13509);
    $.__views.__alloyId13510 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13510"
    });
    $.__views.__alloyId13509.add($.__views.__alloyId13510);
    $.__views.__alloyId13511 = Ti.UI.createView({
        id: "__alloyId13511"
    });
    $.__views.__alloyId13511 && $.addTopLevelView($.__views.__alloyId13511);
    $.__views.__alloyId13512 = Ti.UI.createView({
        id: "__alloyId13512"
    });
    $.__views.__alloyId13511.add($.__views.__alloyId13512);
    $.__views.__alloyId13513 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13513"
    });
    $.__views.__alloyId13512.add($.__views.__alloyId13513);
    $.__views.__alloyId13514 = Ti.UI.createView({
        id: "__alloyId13514"
    });
    $.__views.__alloyId13514 && $.addTopLevelView($.__views.__alloyId13514);
    $.__views.__alloyId13515 = Ti.UI.createView({
        id: "__alloyId13515"
    });
    $.__views.__alloyId13514.add($.__views.__alloyId13515);
    $.__views.__alloyId13516 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13516"
    });
    $.__views.__alloyId13515.add($.__views.__alloyId13516);
    $.__views.__alloyId13517 = Ti.UI.createView({
        id: "__alloyId13517"
    });
    $.__views.__alloyId13517 && $.addTopLevelView($.__views.__alloyId13517);
    $.__views.__alloyId13518 = Ti.UI.createView({
        id: "__alloyId13518"
    });
    $.__views.__alloyId13517.add($.__views.__alloyId13518);
    $.__views.__alloyId13519 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13519"
    });
    $.__views.__alloyId13518.add($.__views.__alloyId13519);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;