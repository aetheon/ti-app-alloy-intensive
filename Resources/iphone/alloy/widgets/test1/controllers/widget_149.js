function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_149";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_149 = Ti.UI.createView({
        id: "widget_149"
    });
    $.__views.widget_149 && $.addTopLevelView($.__views.widget_149);
    $.__views.__alloyId1482 = Ti.UI.createView({
        id: "__alloyId1482"
    });
    $.__views.widget_149.add($.__views.__alloyId1482);
    $.__views.__alloyId1483 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1483"
    });
    $.__views.__alloyId1482.add($.__views.__alloyId1483);
    $.__views.__alloyId1484 = Ti.UI.createView({
        id: "__alloyId1484"
    });
    $.__views.__alloyId1484 && $.addTopLevelView($.__views.__alloyId1484);
    $.__views.__alloyId1485 = Ti.UI.createView({
        id: "__alloyId1485"
    });
    $.__views.__alloyId1484.add($.__views.__alloyId1485);
    $.__views.__alloyId1486 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1486"
    });
    $.__views.__alloyId1485.add($.__views.__alloyId1486);
    $.__views.__alloyId1487 = Ti.UI.createView({
        id: "__alloyId1487"
    });
    $.__views.__alloyId1487 && $.addTopLevelView($.__views.__alloyId1487);
    $.__views.__alloyId1488 = Ti.UI.createView({
        id: "__alloyId1488"
    });
    $.__views.__alloyId1487.add($.__views.__alloyId1488);
    $.__views.__alloyId1489 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1489"
    });
    $.__views.__alloyId1488.add($.__views.__alloyId1489);
    $.__views.__alloyId1490 = Ti.UI.createView({
        id: "__alloyId1490"
    });
    $.__views.__alloyId1490 && $.addTopLevelView($.__views.__alloyId1490);
    $.__views.__alloyId1491 = Ti.UI.createView({
        id: "__alloyId1491"
    });
    $.__views.__alloyId1490.add($.__views.__alloyId1491);
    $.__views.__alloyId1492 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1492"
    });
    $.__views.__alloyId1491.add($.__views.__alloyId1492);
    $.__views.__alloyId1493 = Ti.UI.createView({
        id: "__alloyId1493"
    });
    $.__views.__alloyId1493 && $.addTopLevelView($.__views.__alloyId1493);
    $.__views.__alloyId1494 = Ti.UI.createView({
        id: "__alloyId1494"
    });
    $.__views.__alloyId1493.add($.__views.__alloyId1494);
    $.__views.__alloyId1495 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1495"
    });
    $.__views.__alloyId1494.add($.__views.__alloyId1495);
    $.__views.__alloyId1496 = Ti.UI.createView({
        id: "__alloyId1496"
    });
    $.__views.__alloyId1496 && $.addTopLevelView($.__views.__alloyId1496);
    $.__views.__alloyId1497 = Ti.UI.createView({
        id: "__alloyId1497"
    });
    $.__views.__alloyId1496.add($.__views.__alloyId1497);
    $.__views.__alloyId1498 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1498"
    });
    $.__views.__alloyId1497.add($.__views.__alloyId1498);
    $.__views.__alloyId1499 = Ti.UI.createView({
        id: "__alloyId1499"
    });
    $.__views.__alloyId1499 && $.addTopLevelView($.__views.__alloyId1499);
    $.__views.__alloyId1500 = Ti.UI.createView({
        id: "__alloyId1500"
    });
    $.__views.__alloyId1499.add($.__views.__alloyId1500);
    $.__views.__alloyId1501 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1501"
    });
    $.__views.__alloyId1500.add($.__views.__alloyId1501);
    $.__views.__alloyId1502 = Ti.UI.createView({
        id: "__alloyId1502"
    });
    $.__views.__alloyId1502 && $.addTopLevelView($.__views.__alloyId1502);
    $.__views.__alloyId1503 = Ti.UI.createView({
        id: "__alloyId1503"
    });
    $.__views.__alloyId1502.add($.__views.__alloyId1503);
    $.__views.__alloyId1504 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1504"
    });
    $.__views.__alloyId1503.add($.__views.__alloyId1504);
    $.__views.__alloyId1505 = Ti.UI.createView({
        id: "__alloyId1505"
    });
    $.__views.__alloyId1505 && $.addTopLevelView($.__views.__alloyId1505);
    $.__views.__alloyId1506 = Ti.UI.createView({
        id: "__alloyId1506"
    });
    $.__views.__alloyId1505.add($.__views.__alloyId1506);
    $.__views.__alloyId1507 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1507"
    });
    $.__views.__alloyId1506.add($.__views.__alloyId1507);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;