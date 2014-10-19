function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_393";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_393 = Ti.UI.createView({
        id: "widget_393"
    });
    $.__views.widget_393 && $.addTopLevelView($.__views.widget_393);
    $.__views.__alloyId8528 = Ti.UI.createView({
        id: "__alloyId8528"
    });
    $.__views.widget_393.add($.__views.__alloyId8528);
    $.__views.__alloyId8529 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8529"
    });
    $.__views.__alloyId8528.add($.__views.__alloyId8529);
    $.__views.__alloyId8530 = Ti.UI.createView({
        id: "__alloyId8530"
    });
    $.__views.__alloyId8530 && $.addTopLevelView($.__views.__alloyId8530);
    $.__views.__alloyId8531 = Ti.UI.createView({
        id: "__alloyId8531"
    });
    $.__views.__alloyId8530.add($.__views.__alloyId8531);
    $.__views.__alloyId8532 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8532"
    });
    $.__views.__alloyId8531.add($.__views.__alloyId8532);
    $.__views.__alloyId8533 = Ti.UI.createView({
        id: "__alloyId8533"
    });
    $.__views.__alloyId8533 && $.addTopLevelView($.__views.__alloyId8533);
    $.__views.__alloyId8534 = Ti.UI.createView({
        id: "__alloyId8534"
    });
    $.__views.__alloyId8533.add($.__views.__alloyId8534);
    $.__views.__alloyId8535 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8535"
    });
    $.__views.__alloyId8534.add($.__views.__alloyId8535);
    $.__views.__alloyId8536 = Ti.UI.createView({
        id: "__alloyId8536"
    });
    $.__views.__alloyId8536 && $.addTopLevelView($.__views.__alloyId8536);
    $.__views.__alloyId8537 = Ti.UI.createView({
        id: "__alloyId8537"
    });
    $.__views.__alloyId8536.add($.__views.__alloyId8537);
    $.__views.__alloyId8538 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8538"
    });
    $.__views.__alloyId8537.add($.__views.__alloyId8538);
    $.__views.__alloyId8539 = Ti.UI.createView({
        id: "__alloyId8539"
    });
    $.__views.__alloyId8539 && $.addTopLevelView($.__views.__alloyId8539);
    $.__views.__alloyId8540 = Ti.UI.createView({
        id: "__alloyId8540"
    });
    $.__views.__alloyId8539.add($.__views.__alloyId8540);
    $.__views.__alloyId8541 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8541"
    });
    $.__views.__alloyId8540.add($.__views.__alloyId8541);
    $.__views.__alloyId8542 = Ti.UI.createView({
        id: "__alloyId8542"
    });
    $.__views.__alloyId8542 && $.addTopLevelView($.__views.__alloyId8542);
    $.__views.__alloyId8543 = Ti.UI.createView({
        id: "__alloyId8543"
    });
    $.__views.__alloyId8542.add($.__views.__alloyId8543);
    $.__views.__alloyId8544 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8544"
    });
    $.__views.__alloyId8543.add($.__views.__alloyId8544);
    $.__views.__alloyId8545 = Ti.UI.createView({
        id: "__alloyId8545"
    });
    $.__views.__alloyId8545 && $.addTopLevelView($.__views.__alloyId8545);
    $.__views.__alloyId8546 = Ti.UI.createView({
        id: "__alloyId8546"
    });
    $.__views.__alloyId8545.add($.__views.__alloyId8546);
    $.__views.__alloyId8547 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8547"
    });
    $.__views.__alloyId8546.add($.__views.__alloyId8547);
    $.__views.__alloyId8548 = Ti.UI.createView({
        id: "__alloyId8548"
    });
    $.__views.__alloyId8548 && $.addTopLevelView($.__views.__alloyId8548);
    $.__views.__alloyId8549 = Ti.UI.createView({
        id: "__alloyId8549"
    });
    $.__views.__alloyId8548.add($.__views.__alloyId8549);
    $.__views.__alloyId8550 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8550"
    });
    $.__views.__alloyId8549.add($.__views.__alloyId8550);
    $.__views.__alloyId8551 = Ti.UI.createView({
        id: "__alloyId8551"
    });
    $.__views.__alloyId8551 && $.addTopLevelView($.__views.__alloyId8551);
    $.__views.__alloyId8552 = Ti.UI.createView({
        id: "__alloyId8552"
    });
    $.__views.__alloyId8551.add($.__views.__alloyId8552);
    $.__views.__alloyId8553 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8553"
    });
    $.__views.__alloyId8552.add($.__views.__alloyId8553);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;