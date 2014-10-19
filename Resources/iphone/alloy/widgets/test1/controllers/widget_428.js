function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_428";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_428 = Ti.UI.createView({
        id: "widget_428"
    });
    $.__views.widget_428 && $.addTopLevelView($.__views.widget_428);
    $.__views.__alloyId9542 = Ti.UI.createView({
        id: "__alloyId9542"
    });
    $.__views.widget_428.add($.__views.__alloyId9542);
    $.__views.__alloyId9543 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9543"
    });
    $.__views.__alloyId9542.add($.__views.__alloyId9543);
    $.__views.__alloyId9544 = Ti.UI.createView({
        id: "__alloyId9544"
    });
    $.__views.__alloyId9544 && $.addTopLevelView($.__views.__alloyId9544);
    $.__views.__alloyId9545 = Ti.UI.createView({
        id: "__alloyId9545"
    });
    $.__views.__alloyId9544.add($.__views.__alloyId9545);
    $.__views.__alloyId9546 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9546"
    });
    $.__views.__alloyId9545.add($.__views.__alloyId9546);
    $.__views.__alloyId9547 = Ti.UI.createView({
        id: "__alloyId9547"
    });
    $.__views.__alloyId9547 && $.addTopLevelView($.__views.__alloyId9547);
    $.__views.__alloyId9548 = Ti.UI.createView({
        id: "__alloyId9548"
    });
    $.__views.__alloyId9547.add($.__views.__alloyId9548);
    $.__views.__alloyId9549 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9549"
    });
    $.__views.__alloyId9548.add($.__views.__alloyId9549);
    $.__views.__alloyId9550 = Ti.UI.createView({
        id: "__alloyId9550"
    });
    $.__views.__alloyId9550 && $.addTopLevelView($.__views.__alloyId9550);
    $.__views.__alloyId9551 = Ti.UI.createView({
        id: "__alloyId9551"
    });
    $.__views.__alloyId9550.add($.__views.__alloyId9551);
    $.__views.__alloyId9552 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9552"
    });
    $.__views.__alloyId9551.add($.__views.__alloyId9552);
    $.__views.__alloyId9553 = Ti.UI.createView({
        id: "__alloyId9553"
    });
    $.__views.__alloyId9553 && $.addTopLevelView($.__views.__alloyId9553);
    $.__views.__alloyId9554 = Ti.UI.createView({
        id: "__alloyId9554"
    });
    $.__views.__alloyId9553.add($.__views.__alloyId9554);
    $.__views.__alloyId9555 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9555"
    });
    $.__views.__alloyId9554.add($.__views.__alloyId9555);
    $.__views.__alloyId9556 = Ti.UI.createView({
        id: "__alloyId9556"
    });
    $.__views.__alloyId9556 && $.addTopLevelView($.__views.__alloyId9556);
    $.__views.__alloyId9557 = Ti.UI.createView({
        id: "__alloyId9557"
    });
    $.__views.__alloyId9556.add($.__views.__alloyId9557);
    $.__views.__alloyId9558 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9558"
    });
    $.__views.__alloyId9557.add($.__views.__alloyId9558);
    $.__views.__alloyId9559 = Ti.UI.createView({
        id: "__alloyId9559"
    });
    $.__views.__alloyId9559 && $.addTopLevelView($.__views.__alloyId9559);
    $.__views.__alloyId9560 = Ti.UI.createView({
        id: "__alloyId9560"
    });
    $.__views.__alloyId9559.add($.__views.__alloyId9560);
    $.__views.__alloyId9561 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9561"
    });
    $.__views.__alloyId9560.add($.__views.__alloyId9561);
    $.__views.__alloyId9562 = Ti.UI.createView({
        id: "__alloyId9562"
    });
    $.__views.__alloyId9562 && $.addTopLevelView($.__views.__alloyId9562);
    $.__views.__alloyId9563 = Ti.UI.createView({
        id: "__alloyId9563"
    });
    $.__views.__alloyId9562.add($.__views.__alloyId9563);
    $.__views.__alloyId9564 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9564"
    });
    $.__views.__alloyId9563.add($.__views.__alloyId9564);
    $.__views.__alloyId9565 = Ti.UI.createView({
        id: "__alloyId9565"
    });
    $.__views.__alloyId9565 && $.addTopLevelView($.__views.__alloyId9565);
    $.__views.__alloyId9566 = Ti.UI.createView({
        id: "__alloyId9566"
    });
    $.__views.__alloyId9565.add($.__views.__alloyId9566);
    $.__views.__alloyId9567 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9567"
    });
    $.__views.__alloyId9566.add($.__views.__alloyId9567);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;