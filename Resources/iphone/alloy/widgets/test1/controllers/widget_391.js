function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_391";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_391 = Ti.UI.createView({
        id: "widget_391"
    });
    $.__views.widget_391 && $.addTopLevelView($.__views.widget_391);
    $.__views.__alloyId8476 = Ti.UI.createView({
        id: "__alloyId8476"
    });
    $.__views.widget_391.add($.__views.__alloyId8476);
    $.__views.__alloyId8477 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8477"
    });
    $.__views.__alloyId8476.add($.__views.__alloyId8477);
    $.__views.__alloyId8478 = Ti.UI.createView({
        id: "__alloyId8478"
    });
    $.__views.__alloyId8478 && $.addTopLevelView($.__views.__alloyId8478);
    $.__views.__alloyId8479 = Ti.UI.createView({
        id: "__alloyId8479"
    });
    $.__views.__alloyId8478.add($.__views.__alloyId8479);
    $.__views.__alloyId8480 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8480"
    });
    $.__views.__alloyId8479.add($.__views.__alloyId8480);
    $.__views.__alloyId8481 = Ti.UI.createView({
        id: "__alloyId8481"
    });
    $.__views.__alloyId8481 && $.addTopLevelView($.__views.__alloyId8481);
    $.__views.__alloyId8482 = Ti.UI.createView({
        id: "__alloyId8482"
    });
    $.__views.__alloyId8481.add($.__views.__alloyId8482);
    $.__views.__alloyId8483 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8483"
    });
    $.__views.__alloyId8482.add($.__views.__alloyId8483);
    $.__views.__alloyId8484 = Ti.UI.createView({
        id: "__alloyId8484"
    });
    $.__views.__alloyId8484 && $.addTopLevelView($.__views.__alloyId8484);
    $.__views.__alloyId8485 = Ti.UI.createView({
        id: "__alloyId8485"
    });
    $.__views.__alloyId8484.add($.__views.__alloyId8485);
    $.__views.__alloyId8486 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8486"
    });
    $.__views.__alloyId8485.add($.__views.__alloyId8486);
    $.__views.__alloyId8487 = Ti.UI.createView({
        id: "__alloyId8487"
    });
    $.__views.__alloyId8487 && $.addTopLevelView($.__views.__alloyId8487);
    $.__views.__alloyId8488 = Ti.UI.createView({
        id: "__alloyId8488"
    });
    $.__views.__alloyId8487.add($.__views.__alloyId8488);
    $.__views.__alloyId8489 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8489"
    });
    $.__views.__alloyId8488.add($.__views.__alloyId8489);
    $.__views.__alloyId8490 = Ti.UI.createView({
        id: "__alloyId8490"
    });
    $.__views.__alloyId8490 && $.addTopLevelView($.__views.__alloyId8490);
    $.__views.__alloyId8491 = Ti.UI.createView({
        id: "__alloyId8491"
    });
    $.__views.__alloyId8490.add($.__views.__alloyId8491);
    $.__views.__alloyId8492 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8492"
    });
    $.__views.__alloyId8491.add($.__views.__alloyId8492);
    $.__views.__alloyId8493 = Ti.UI.createView({
        id: "__alloyId8493"
    });
    $.__views.__alloyId8493 && $.addTopLevelView($.__views.__alloyId8493);
    $.__views.__alloyId8494 = Ti.UI.createView({
        id: "__alloyId8494"
    });
    $.__views.__alloyId8493.add($.__views.__alloyId8494);
    $.__views.__alloyId8495 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8495"
    });
    $.__views.__alloyId8494.add($.__views.__alloyId8495);
    $.__views.__alloyId8496 = Ti.UI.createView({
        id: "__alloyId8496"
    });
    $.__views.__alloyId8496 && $.addTopLevelView($.__views.__alloyId8496);
    $.__views.__alloyId8497 = Ti.UI.createView({
        id: "__alloyId8497"
    });
    $.__views.__alloyId8496.add($.__views.__alloyId8497);
    $.__views.__alloyId8498 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8498"
    });
    $.__views.__alloyId8497.add($.__views.__alloyId8498);
    $.__views.__alloyId8499 = Ti.UI.createView({
        id: "__alloyId8499"
    });
    $.__views.__alloyId8499 && $.addTopLevelView($.__views.__alloyId8499);
    $.__views.__alloyId8500 = Ti.UI.createView({
        id: "__alloyId8500"
    });
    $.__views.__alloyId8499.add($.__views.__alloyId8500);
    $.__views.__alloyId8501 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8501"
    });
    $.__views.__alloyId8500.add($.__views.__alloyId8501);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;