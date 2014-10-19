function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_323";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_323 = Ti.UI.createView({
        id: "widget_323"
    });
    $.__views.widget_323 && $.addTopLevelView($.__views.widget_323);
    $.__views.__alloyId6526 = Ti.UI.createView({
        id: "__alloyId6526"
    });
    $.__views.widget_323.add($.__views.__alloyId6526);
    $.__views.__alloyId6527 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6527"
    });
    $.__views.__alloyId6526.add($.__views.__alloyId6527);
    $.__views.__alloyId6528 = Ti.UI.createView({
        id: "__alloyId6528"
    });
    $.__views.__alloyId6528 && $.addTopLevelView($.__views.__alloyId6528);
    $.__views.__alloyId6529 = Ti.UI.createView({
        id: "__alloyId6529"
    });
    $.__views.__alloyId6528.add($.__views.__alloyId6529);
    $.__views.__alloyId6530 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6530"
    });
    $.__views.__alloyId6529.add($.__views.__alloyId6530);
    $.__views.__alloyId6531 = Ti.UI.createView({
        id: "__alloyId6531"
    });
    $.__views.__alloyId6531 && $.addTopLevelView($.__views.__alloyId6531);
    $.__views.__alloyId6532 = Ti.UI.createView({
        id: "__alloyId6532"
    });
    $.__views.__alloyId6531.add($.__views.__alloyId6532);
    $.__views.__alloyId6533 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6533"
    });
    $.__views.__alloyId6532.add($.__views.__alloyId6533);
    $.__views.__alloyId6534 = Ti.UI.createView({
        id: "__alloyId6534"
    });
    $.__views.__alloyId6534 && $.addTopLevelView($.__views.__alloyId6534);
    $.__views.__alloyId6535 = Ti.UI.createView({
        id: "__alloyId6535"
    });
    $.__views.__alloyId6534.add($.__views.__alloyId6535);
    $.__views.__alloyId6536 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6536"
    });
    $.__views.__alloyId6535.add($.__views.__alloyId6536);
    $.__views.__alloyId6537 = Ti.UI.createView({
        id: "__alloyId6537"
    });
    $.__views.__alloyId6537 && $.addTopLevelView($.__views.__alloyId6537);
    $.__views.__alloyId6538 = Ti.UI.createView({
        id: "__alloyId6538"
    });
    $.__views.__alloyId6537.add($.__views.__alloyId6538);
    $.__views.__alloyId6539 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6539"
    });
    $.__views.__alloyId6538.add($.__views.__alloyId6539);
    $.__views.__alloyId6540 = Ti.UI.createView({
        id: "__alloyId6540"
    });
    $.__views.__alloyId6540 && $.addTopLevelView($.__views.__alloyId6540);
    $.__views.__alloyId6541 = Ti.UI.createView({
        id: "__alloyId6541"
    });
    $.__views.__alloyId6540.add($.__views.__alloyId6541);
    $.__views.__alloyId6542 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6542"
    });
    $.__views.__alloyId6541.add($.__views.__alloyId6542);
    $.__views.__alloyId6543 = Ti.UI.createView({
        id: "__alloyId6543"
    });
    $.__views.__alloyId6543 && $.addTopLevelView($.__views.__alloyId6543);
    $.__views.__alloyId6544 = Ti.UI.createView({
        id: "__alloyId6544"
    });
    $.__views.__alloyId6543.add($.__views.__alloyId6544);
    $.__views.__alloyId6545 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6545"
    });
    $.__views.__alloyId6544.add($.__views.__alloyId6545);
    $.__views.__alloyId6546 = Ti.UI.createView({
        id: "__alloyId6546"
    });
    $.__views.__alloyId6546 && $.addTopLevelView($.__views.__alloyId6546);
    $.__views.__alloyId6547 = Ti.UI.createView({
        id: "__alloyId6547"
    });
    $.__views.__alloyId6546.add($.__views.__alloyId6547);
    $.__views.__alloyId6548 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6548"
    });
    $.__views.__alloyId6547.add($.__views.__alloyId6548);
    $.__views.__alloyId6549 = Ti.UI.createView({
        id: "__alloyId6549"
    });
    $.__views.__alloyId6549 && $.addTopLevelView($.__views.__alloyId6549);
    $.__views.__alloyId6550 = Ti.UI.createView({
        id: "__alloyId6550"
    });
    $.__views.__alloyId6549.add($.__views.__alloyId6550);
    $.__views.__alloyId6551 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6551"
    });
    $.__views.__alloyId6550.add($.__views.__alloyId6551);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;