function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_426";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_426 = Ti.UI.createView({
        id: "widget_426"
    });
    $.__views.widget_426 && $.addTopLevelView($.__views.widget_426);
    $.__views.__alloyId9490 = Ti.UI.createView({
        id: "__alloyId9490"
    });
    $.__views.widget_426.add($.__views.__alloyId9490);
    $.__views.__alloyId9491 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9491"
    });
    $.__views.__alloyId9490.add($.__views.__alloyId9491);
    $.__views.__alloyId9492 = Ti.UI.createView({
        id: "__alloyId9492"
    });
    $.__views.__alloyId9492 && $.addTopLevelView($.__views.__alloyId9492);
    $.__views.__alloyId9493 = Ti.UI.createView({
        id: "__alloyId9493"
    });
    $.__views.__alloyId9492.add($.__views.__alloyId9493);
    $.__views.__alloyId9494 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9494"
    });
    $.__views.__alloyId9493.add($.__views.__alloyId9494);
    $.__views.__alloyId9495 = Ti.UI.createView({
        id: "__alloyId9495"
    });
    $.__views.__alloyId9495 && $.addTopLevelView($.__views.__alloyId9495);
    $.__views.__alloyId9496 = Ti.UI.createView({
        id: "__alloyId9496"
    });
    $.__views.__alloyId9495.add($.__views.__alloyId9496);
    $.__views.__alloyId9497 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9497"
    });
    $.__views.__alloyId9496.add($.__views.__alloyId9497);
    $.__views.__alloyId9498 = Ti.UI.createView({
        id: "__alloyId9498"
    });
    $.__views.__alloyId9498 && $.addTopLevelView($.__views.__alloyId9498);
    $.__views.__alloyId9499 = Ti.UI.createView({
        id: "__alloyId9499"
    });
    $.__views.__alloyId9498.add($.__views.__alloyId9499);
    $.__views.__alloyId9500 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9500"
    });
    $.__views.__alloyId9499.add($.__views.__alloyId9500);
    $.__views.__alloyId9501 = Ti.UI.createView({
        id: "__alloyId9501"
    });
    $.__views.__alloyId9501 && $.addTopLevelView($.__views.__alloyId9501);
    $.__views.__alloyId9502 = Ti.UI.createView({
        id: "__alloyId9502"
    });
    $.__views.__alloyId9501.add($.__views.__alloyId9502);
    $.__views.__alloyId9503 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9503"
    });
    $.__views.__alloyId9502.add($.__views.__alloyId9503);
    $.__views.__alloyId9504 = Ti.UI.createView({
        id: "__alloyId9504"
    });
    $.__views.__alloyId9504 && $.addTopLevelView($.__views.__alloyId9504);
    $.__views.__alloyId9505 = Ti.UI.createView({
        id: "__alloyId9505"
    });
    $.__views.__alloyId9504.add($.__views.__alloyId9505);
    $.__views.__alloyId9506 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9506"
    });
    $.__views.__alloyId9505.add($.__views.__alloyId9506);
    $.__views.__alloyId9507 = Ti.UI.createView({
        id: "__alloyId9507"
    });
    $.__views.__alloyId9507 && $.addTopLevelView($.__views.__alloyId9507);
    $.__views.__alloyId9508 = Ti.UI.createView({
        id: "__alloyId9508"
    });
    $.__views.__alloyId9507.add($.__views.__alloyId9508);
    $.__views.__alloyId9509 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9509"
    });
    $.__views.__alloyId9508.add($.__views.__alloyId9509);
    $.__views.__alloyId9510 = Ti.UI.createView({
        id: "__alloyId9510"
    });
    $.__views.__alloyId9510 && $.addTopLevelView($.__views.__alloyId9510);
    $.__views.__alloyId9511 = Ti.UI.createView({
        id: "__alloyId9511"
    });
    $.__views.__alloyId9510.add($.__views.__alloyId9511);
    $.__views.__alloyId9512 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9512"
    });
    $.__views.__alloyId9511.add($.__views.__alloyId9512);
    $.__views.__alloyId9513 = Ti.UI.createView({
        id: "__alloyId9513"
    });
    $.__views.__alloyId9513 && $.addTopLevelView($.__views.__alloyId9513);
    $.__views.__alloyId9514 = Ti.UI.createView({
        id: "__alloyId9514"
    });
    $.__views.__alloyId9513.add($.__views.__alloyId9514);
    $.__views.__alloyId9515 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9515"
    });
    $.__views.__alloyId9514.add($.__views.__alloyId9515);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;