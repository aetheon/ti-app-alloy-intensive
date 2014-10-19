function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_807";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_807 = Ti.UI.createView({
        id: "widget_807"
    });
    $.__views.widget_807 && $.addTopLevelView($.__views.widget_807);
    $.__views.__alloyId20488 = Ti.UI.createView({
        id: "__alloyId20488"
    });
    $.__views.widget_807.add($.__views.__alloyId20488);
    $.__views.__alloyId20489 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20489"
    });
    $.__views.__alloyId20488.add($.__views.__alloyId20489);
    $.__views.__alloyId20490 = Ti.UI.createView({
        id: "__alloyId20490"
    });
    $.__views.__alloyId20490 && $.addTopLevelView($.__views.__alloyId20490);
    $.__views.__alloyId20491 = Ti.UI.createView({
        id: "__alloyId20491"
    });
    $.__views.__alloyId20490.add($.__views.__alloyId20491);
    $.__views.__alloyId20492 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20492"
    });
    $.__views.__alloyId20491.add($.__views.__alloyId20492);
    $.__views.__alloyId20493 = Ti.UI.createView({
        id: "__alloyId20493"
    });
    $.__views.__alloyId20493 && $.addTopLevelView($.__views.__alloyId20493);
    $.__views.__alloyId20494 = Ti.UI.createView({
        id: "__alloyId20494"
    });
    $.__views.__alloyId20493.add($.__views.__alloyId20494);
    $.__views.__alloyId20495 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20495"
    });
    $.__views.__alloyId20494.add($.__views.__alloyId20495);
    $.__views.__alloyId20496 = Ti.UI.createView({
        id: "__alloyId20496"
    });
    $.__views.__alloyId20496 && $.addTopLevelView($.__views.__alloyId20496);
    $.__views.__alloyId20497 = Ti.UI.createView({
        id: "__alloyId20497"
    });
    $.__views.__alloyId20496.add($.__views.__alloyId20497);
    $.__views.__alloyId20498 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20498"
    });
    $.__views.__alloyId20497.add($.__views.__alloyId20498);
    $.__views.__alloyId20499 = Ti.UI.createView({
        id: "__alloyId20499"
    });
    $.__views.__alloyId20499 && $.addTopLevelView($.__views.__alloyId20499);
    $.__views.__alloyId20500 = Ti.UI.createView({
        id: "__alloyId20500"
    });
    $.__views.__alloyId20499.add($.__views.__alloyId20500);
    $.__views.__alloyId20501 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20501"
    });
    $.__views.__alloyId20500.add($.__views.__alloyId20501);
    $.__views.__alloyId20502 = Ti.UI.createView({
        id: "__alloyId20502"
    });
    $.__views.__alloyId20502 && $.addTopLevelView($.__views.__alloyId20502);
    $.__views.__alloyId20503 = Ti.UI.createView({
        id: "__alloyId20503"
    });
    $.__views.__alloyId20502.add($.__views.__alloyId20503);
    $.__views.__alloyId20504 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20504"
    });
    $.__views.__alloyId20503.add($.__views.__alloyId20504);
    $.__views.__alloyId20505 = Ti.UI.createView({
        id: "__alloyId20505"
    });
    $.__views.__alloyId20505 && $.addTopLevelView($.__views.__alloyId20505);
    $.__views.__alloyId20506 = Ti.UI.createView({
        id: "__alloyId20506"
    });
    $.__views.__alloyId20505.add($.__views.__alloyId20506);
    $.__views.__alloyId20507 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20507"
    });
    $.__views.__alloyId20506.add($.__views.__alloyId20507);
    $.__views.__alloyId20508 = Ti.UI.createView({
        id: "__alloyId20508"
    });
    $.__views.__alloyId20508 && $.addTopLevelView($.__views.__alloyId20508);
    $.__views.__alloyId20509 = Ti.UI.createView({
        id: "__alloyId20509"
    });
    $.__views.__alloyId20508.add($.__views.__alloyId20509);
    $.__views.__alloyId20510 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20510"
    });
    $.__views.__alloyId20509.add($.__views.__alloyId20510);
    $.__views.__alloyId20511 = Ti.UI.createView({
        id: "__alloyId20511"
    });
    $.__views.__alloyId20511 && $.addTopLevelView($.__views.__alloyId20511);
    $.__views.__alloyId20512 = Ti.UI.createView({
        id: "__alloyId20512"
    });
    $.__views.__alloyId20511.add($.__views.__alloyId20512);
    $.__views.__alloyId20513 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20513"
    });
    $.__views.__alloyId20512.add($.__views.__alloyId20513);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;