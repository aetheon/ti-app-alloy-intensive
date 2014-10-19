function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_670";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_670 = Ti.UI.createView({
        id: "widget_670"
    });
    $.__views.widget_670 && $.addTopLevelView($.__views.widget_670);
    $.__views.__alloyId16536 = Ti.UI.createView({
        id: "__alloyId16536"
    });
    $.__views.widget_670.add($.__views.__alloyId16536);
    $.__views.__alloyId16537 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16537"
    });
    $.__views.__alloyId16536.add($.__views.__alloyId16537);
    $.__views.__alloyId16538 = Ti.UI.createView({
        id: "__alloyId16538"
    });
    $.__views.__alloyId16538 && $.addTopLevelView($.__views.__alloyId16538);
    $.__views.__alloyId16539 = Ti.UI.createView({
        id: "__alloyId16539"
    });
    $.__views.__alloyId16538.add($.__views.__alloyId16539);
    $.__views.__alloyId16540 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16540"
    });
    $.__views.__alloyId16539.add($.__views.__alloyId16540);
    $.__views.__alloyId16541 = Ti.UI.createView({
        id: "__alloyId16541"
    });
    $.__views.__alloyId16541 && $.addTopLevelView($.__views.__alloyId16541);
    $.__views.__alloyId16542 = Ti.UI.createView({
        id: "__alloyId16542"
    });
    $.__views.__alloyId16541.add($.__views.__alloyId16542);
    $.__views.__alloyId16543 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16543"
    });
    $.__views.__alloyId16542.add($.__views.__alloyId16543);
    $.__views.__alloyId16544 = Ti.UI.createView({
        id: "__alloyId16544"
    });
    $.__views.__alloyId16544 && $.addTopLevelView($.__views.__alloyId16544);
    $.__views.__alloyId16545 = Ti.UI.createView({
        id: "__alloyId16545"
    });
    $.__views.__alloyId16544.add($.__views.__alloyId16545);
    $.__views.__alloyId16546 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16546"
    });
    $.__views.__alloyId16545.add($.__views.__alloyId16546);
    $.__views.__alloyId16547 = Ti.UI.createView({
        id: "__alloyId16547"
    });
    $.__views.__alloyId16547 && $.addTopLevelView($.__views.__alloyId16547);
    $.__views.__alloyId16548 = Ti.UI.createView({
        id: "__alloyId16548"
    });
    $.__views.__alloyId16547.add($.__views.__alloyId16548);
    $.__views.__alloyId16549 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16549"
    });
    $.__views.__alloyId16548.add($.__views.__alloyId16549);
    $.__views.__alloyId16550 = Ti.UI.createView({
        id: "__alloyId16550"
    });
    $.__views.__alloyId16550 && $.addTopLevelView($.__views.__alloyId16550);
    $.__views.__alloyId16551 = Ti.UI.createView({
        id: "__alloyId16551"
    });
    $.__views.__alloyId16550.add($.__views.__alloyId16551);
    $.__views.__alloyId16552 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16552"
    });
    $.__views.__alloyId16551.add($.__views.__alloyId16552);
    $.__views.__alloyId16553 = Ti.UI.createView({
        id: "__alloyId16553"
    });
    $.__views.__alloyId16553 && $.addTopLevelView($.__views.__alloyId16553);
    $.__views.__alloyId16554 = Ti.UI.createView({
        id: "__alloyId16554"
    });
    $.__views.__alloyId16553.add($.__views.__alloyId16554);
    $.__views.__alloyId16555 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16555"
    });
    $.__views.__alloyId16554.add($.__views.__alloyId16555);
    $.__views.__alloyId16556 = Ti.UI.createView({
        id: "__alloyId16556"
    });
    $.__views.__alloyId16556 && $.addTopLevelView($.__views.__alloyId16556);
    $.__views.__alloyId16557 = Ti.UI.createView({
        id: "__alloyId16557"
    });
    $.__views.__alloyId16556.add($.__views.__alloyId16557);
    $.__views.__alloyId16558 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16558"
    });
    $.__views.__alloyId16557.add($.__views.__alloyId16558);
    $.__views.__alloyId16559 = Ti.UI.createView({
        id: "__alloyId16559"
    });
    $.__views.__alloyId16559 && $.addTopLevelView($.__views.__alloyId16559);
    $.__views.__alloyId16560 = Ti.UI.createView({
        id: "__alloyId16560"
    });
    $.__views.__alloyId16559.add($.__views.__alloyId16560);
    $.__views.__alloyId16561 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16561"
    });
    $.__views.__alloyId16560.add($.__views.__alloyId16561);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;