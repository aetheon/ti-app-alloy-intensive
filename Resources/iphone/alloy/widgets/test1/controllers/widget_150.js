function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_150";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_150 = Ti.UI.createView({
        id: "widget_150"
    });
    $.__views.widget_150 && $.addTopLevelView($.__views.widget_150);
    $.__views.__alloyId1534 = Ti.UI.createView({
        id: "__alloyId1534"
    });
    $.__views.widget_150.add($.__views.__alloyId1534);
    $.__views.__alloyId1535 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1535"
    });
    $.__views.__alloyId1534.add($.__views.__alloyId1535);
    $.__views.__alloyId1536 = Ti.UI.createView({
        id: "__alloyId1536"
    });
    $.__views.__alloyId1536 && $.addTopLevelView($.__views.__alloyId1536);
    $.__views.__alloyId1537 = Ti.UI.createView({
        id: "__alloyId1537"
    });
    $.__views.__alloyId1536.add($.__views.__alloyId1537);
    $.__views.__alloyId1538 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1538"
    });
    $.__views.__alloyId1537.add($.__views.__alloyId1538);
    $.__views.__alloyId1539 = Ti.UI.createView({
        id: "__alloyId1539"
    });
    $.__views.__alloyId1539 && $.addTopLevelView($.__views.__alloyId1539);
    $.__views.__alloyId1540 = Ti.UI.createView({
        id: "__alloyId1540"
    });
    $.__views.__alloyId1539.add($.__views.__alloyId1540);
    $.__views.__alloyId1541 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1541"
    });
    $.__views.__alloyId1540.add($.__views.__alloyId1541);
    $.__views.__alloyId1542 = Ti.UI.createView({
        id: "__alloyId1542"
    });
    $.__views.__alloyId1542 && $.addTopLevelView($.__views.__alloyId1542);
    $.__views.__alloyId1543 = Ti.UI.createView({
        id: "__alloyId1543"
    });
    $.__views.__alloyId1542.add($.__views.__alloyId1543);
    $.__views.__alloyId1544 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1544"
    });
    $.__views.__alloyId1543.add($.__views.__alloyId1544);
    $.__views.__alloyId1545 = Ti.UI.createView({
        id: "__alloyId1545"
    });
    $.__views.__alloyId1545 && $.addTopLevelView($.__views.__alloyId1545);
    $.__views.__alloyId1546 = Ti.UI.createView({
        id: "__alloyId1546"
    });
    $.__views.__alloyId1545.add($.__views.__alloyId1546);
    $.__views.__alloyId1547 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1547"
    });
    $.__views.__alloyId1546.add($.__views.__alloyId1547);
    $.__views.__alloyId1548 = Ti.UI.createView({
        id: "__alloyId1548"
    });
    $.__views.__alloyId1548 && $.addTopLevelView($.__views.__alloyId1548);
    $.__views.__alloyId1549 = Ti.UI.createView({
        id: "__alloyId1549"
    });
    $.__views.__alloyId1548.add($.__views.__alloyId1549);
    $.__views.__alloyId1550 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1550"
    });
    $.__views.__alloyId1549.add($.__views.__alloyId1550);
    $.__views.__alloyId1551 = Ti.UI.createView({
        id: "__alloyId1551"
    });
    $.__views.__alloyId1551 && $.addTopLevelView($.__views.__alloyId1551);
    $.__views.__alloyId1552 = Ti.UI.createView({
        id: "__alloyId1552"
    });
    $.__views.__alloyId1551.add($.__views.__alloyId1552);
    $.__views.__alloyId1553 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1553"
    });
    $.__views.__alloyId1552.add($.__views.__alloyId1553);
    $.__views.__alloyId1554 = Ti.UI.createView({
        id: "__alloyId1554"
    });
    $.__views.__alloyId1554 && $.addTopLevelView($.__views.__alloyId1554);
    $.__views.__alloyId1555 = Ti.UI.createView({
        id: "__alloyId1555"
    });
    $.__views.__alloyId1554.add($.__views.__alloyId1555);
    $.__views.__alloyId1556 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1556"
    });
    $.__views.__alloyId1555.add($.__views.__alloyId1556);
    $.__views.__alloyId1557 = Ti.UI.createView({
        id: "__alloyId1557"
    });
    $.__views.__alloyId1557 && $.addTopLevelView($.__views.__alloyId1557);
    $.__views.__alloyId1558 = Ti.UI.createView({
        id: "__alloyId1558"
    });
    $.__views.__alloyId1557.add($.__views.__alloyId1558);
    $.__views.__alloyId1559 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1559"
    });
    $.__views.__alloyId1558.add($.__views.__alloyId1559);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;