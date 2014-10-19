function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_702";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_702 = Ti.UI.createView({
        id: "widget_702"
    });
    $.__views.widget_702 && $.addTopLevelView($.__views.widget_702);
    $.__views.__alloyId17472 = Ti.UI.createView({
        id: "__alloyId17472"
    });
    $.__views.widget_702.add($.__views.__alloyId17472);
    $.__views.__alloyId17473 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17473"
    });
    $.__views.__alloyId17472.add($.__views.__alloyId17473);
    $.__views.__alloyId17474 = Ti.UI.createView({
        id: "__alloyId17474"
    });
    $.__views.__alloyId17474 && $.addTopLevelView($.__views.__alloyId17474);
    $.__views.__alloyId17475 = Ti.UI.createView({
        id: "__alloyId17475"
    });
    $.__views.__alloyId17474.add($.__views.__alloyId17475);
    $.__views.__alloyId17476 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17476"
    });
    $.__views.__alloyId17475.add($.__views.__alloyId17476);
    $.__views.__alloyId17477 = Ti.UI.createView({
        id: "__alloyId17477"
    });
    $.__views.__alloyId17477 && $.addTopLevelView($.__views.__alloyId17477);
    $.__views.__alloyId17478 = Ti.UI.createView({
        id: "__alloyId17478"
    });
    $.__views.__alloyId17477.add($.__views.__alloyId17478);
    $.__views.__alloyId17479 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17479"
    });
    $.__views.__alloyId17478.add($.__views.__alloyId17479);
    $.__views.__alloyId17480 = Ti.UI.createView({
        id: "__alloyId17480"
    });
    $.__views.__alloyId17480 && $.addTopLevelView($.__views.__alloyId17480);
    $.__views.__alloyId17481 = Ti.UI.createView({
        id: "__alloyId17481"
    });
    $.__views.__alloyId17480.add($.__views.__alloyId17481);
    $.__views.__alloyId17482 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17482"
    });
    $.__views.__alloyId17481.add($.__views.__alloyId17482);
    $.__views.__alloyId17483 = Ti.UI.createView({
        id: "__alloyId17483"
    });
    $.__views.__alloyId17483 && $.addTopLevelView($.__views.__alloyId17483);
    $.__views.__alloyId17484 = Ti.UI.createView({
        id: "__alloyId17484"
    });
    $.__views.__alloyId17483.add($.__views.__alloyId17484);
    $.__views.__alloyId17485 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17485"
    });
    $.__views.__alloyId17484.add($.__views.__alloyId17485);
    $.__views.__alloyId17486 = Ti.UI.createView({
        id: "__alloyId17486"
    });
    $.__views.__alloyId17486 && $.addTopLevelView($.__views.__alloyId17486);
    $.__views.__alloyId17487 = Ti.UI.createView({
        id: "__alloyId17487"
    });
    $.__views.__alloyId17486.add($.__views.__alloyId17487);
    $.__views.__alloyId17488 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17488"
    });
    $.__views.__alloyId17487.add($.__views.__alloyId17488);
    $.__views.__alloyId17489 = Ti.UI.createView({
        id: "__alloyId17489"
    });
    $.__views.__alloyId17489 && $.addTopLevelView($.__views.__alloyId17489);
    $.__views.__alloyId17490 = Ti.UI.createView({
        id: "__alloyId17490"
    });
    $.__views.__alloyId17489.add($.__views.__alloyId17490);
    $.__views.__alloyId17491 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17491"
    });
    $.__views.__alloyId17490.add($.__views.__alloyId17491);
    $.__views.__alloyId17492 = Ti.UI.createView({
        id: "__alloyId17492"
    });
    $.__views.__alloyId17492 && $.addTopLevelView($.__views.__alloyId17492);
    $.__views.__alloyId17493 = Ti.UI.createView({
        id: "__alloyId17493"
    });
    $.__views.__alloyId17492.add($.__views.__alloyId17493);
    $.__views.__alloyId17494 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17494"
    });
    $.__views.__alloyId17493.add($.__views.__alloyId17494);
    $.__views.__alloyId17495 = Ti.UI.createView({
        id: "__alloyId17495"
    });
    $.__views.__alloyId17495 && $.addTopLevelView($.__views.__alloyId17495);
    $.__views.__alloyId17496 = Ti.UI.createView({
        id: "__alloyId17496"
    });
    $.__views.__alloyId17495.add($.__views.__alloyId17496);
    $.__views.__alloyId17497 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17497"
    });
    $.__views.__alloyId17496.add($.__views.__alloyId17497);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;