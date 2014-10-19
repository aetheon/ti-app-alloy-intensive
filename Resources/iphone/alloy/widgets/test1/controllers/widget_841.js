function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_841";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_841 = Ti.UI.createView({
        id: "widget_841"
    });
    $.__views.widget_841 && $.addTopLevelView($.__views.widget_841);
    $.__views.__alloyId21476 = Ti.UI.createView({
        id: "__alloyId21476"
    });
    $.__views.widget_841.add($.__views.__alloyId21476);
    $.__views.__alloyId21477 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21477"
    });
    $.__views.__alloyId21476.add($.__views.__alloyId21477);
    $.__views.__alloyId21478 = Ti.UI.createView({
        id: "__alloyId21478"
    });
    $.__views.__alloyId21478 && $.addTopLevelView($.__views.__alloyId21478);
    $.__views.__alloyId21479 = Ti.UI.createView({
        id: "__alloyId21479"
    });
    $.__views.__alloyId21478.add($.__views.__alloyId21479);
    $.__views.__alloyId21480 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21480"
    });
    $.__views.__alloyId21479.add($.__views.__alloyId21480);
    $.__views.__alloyId21481 = Ti.UI.createView({
        id: "__alloyId21481"
    });
    $.__views.__alloyId21481 && $.addTopLevelView($.__views.__alloyId21481);
    $.__views.__alloyId21482 = Ti.UI.createView({
        id: "__alloyId21482"
    });
    $.__views.__alloyId21481.add($.__views.__alloyId21482);
    $.__views.__alloyId21483 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21483"
    });
    $.__views.__alloyId21482.add($.__views.__alloyId21483);
    $.__views.__alloyId21484 = Ti.UI.createView({
        id: "__alloyId21484"
    });
    $.__views.__alloyId21484 && $.addTopLevelView($.__views.__alloyId21484);
    $.__views.__alloyId21485 = Ti.UI.createView({
        id: "__alloyId21485"
    });
    $.__views.__alloyId21484.add($.__views.__alloyId21485);
    $.__views.__alloyId21486 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21486"
    });
    $.__views.__alloyId21485.add($.__views.__alloyId21486);
    $.__views.__alloyId21487 = Ti.UI.createView({
        id: "__alloyId21487"
    });
    $.__views.__alloyId21487 && $.addTopLevelView($.__views.__alloyId21487);
    $.__views.__alloyId21488 = Ti.UI.createView({
        id: "__alloyId21488"
    });
    $.__views.__alloyId21487.add($.__views.__alloyId21488);
    $.__views.__alloyId21489 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21489"
    });
    $.__views.__alloyId21488.add($.__views.__alloyId21489);
    $.__views.__alloyId21490 = Ti.UI.createView({
        id: "__alloyId21490"
    });
    $.__views.__alloyId21490 && $.addTopLevelView($.__views.__alloyId21490);
    $.__views.__alloyId21491 = Ti.UI.createView({
        id: "__alloyId21491"
    });
    $.__views.__alloyId21490.add($.__views.__alloyId21491);
    $.__views.__alloyId21492 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21492"
    });
    $.__views.__alloyId21491.add($.__views.__alloyId21492);
    $.__views.__alloyId21493 = Ti.UI.createView({
        id: "__alloyId21493"
    });
    $.__views.__alloyId21493 && $.addTopLevelView($.__views.__alloyId21493);
    $.__views.__alloyId21494 = Ti.UI.createView({
        id: "__alloyId21494"
    });
    $.__views.__alloyId21493.add($.__views.__alloyId21494);
    $.__views.__alloyId21495 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21495"
    });
    $.__views.__alloyId21494.add($.__views.__alloyId21495);
    $.__views.__alloyId21496 = Ti.UI.createView({
        id: "__alloyId21496"
    });
    $.__views.__alloyId21496 && $.addTopLevelView($.__views.__alloyId21496);
    $.__views.__alloyId21497 = Ti.UI.createView({
        id: "__alloyId21497"
    });
    $.__views.__alloyId21496.add($.__views.__alloyId21497);
    $.__views.__alloyId21498 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21498"
    });
    $.__views.__alloyId21497.add($.__views.__alloyId21498);
    $.__views.__alloyId21499 = Ti.UI.createView({
        id: "__alloyId21499"
    });
    $.__views.__alloyId21499 && $.addTopLevelView($.__views.__alloyId21499);
    $.__views.__alloyId21500 = Ti.UI.createView({
        id: "__alloyId21500"
    });
    $.__views.__alloyId21499.add($.__views.__alloyId21500);
    $.__views.__alloyId21501 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21501"
    });
    $.__views.__alloyId21500.add($.__views.__alloyId21501);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;