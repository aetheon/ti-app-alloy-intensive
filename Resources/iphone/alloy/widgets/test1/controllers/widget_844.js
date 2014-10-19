function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_844";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_844 = Ti.UI.createView({
        id: "widget_844"
    });
    $.__views.widget_844 && $.addTopLevelView($.__views.widget_844);
    $.__views.__alloyId21554 = Ti.UI.createView({
        id: "__alloyId21554"
    });
    $.__views.widget_844.add($.__views.__alloyId21554);
    $.__views.__alloyId21555 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21555"
    });
    $.__views.__alloyId21554.add($.__views.__alloyId21555);
    $.__views.__alloyId21556 = Ti.UI.createView({
        id: "__alloyId21556"
    });
    $.__views.__alloyId21556 && $.addTopLevelView($.__views.__alloyId21556);
    $.__views.__alloyId21557 = Ti.UI.createView({
        id: "__alloyId21557"
    });
    $.__views.__alloyId21556.add($.__views.__alloyId21557);
    $.__views.__alloyId21558 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21558"
    });
    $.__views.__alloyId21557.add($.__views.__alloyId21558);
    $.__views.__alloyId21559 = Ti.UI.createView({
        id: "__alloyId21559"
    });
    $.__views.__alloyId21559 && $.addTopLevelView($.__views.__alloyId21559);
    $.__views.__alloyId21560 = Ti.UI.createView({
        id: "__alloyId21560"
    });
    $.__views.__alloyId21559.add($.__views.__alloyId21560);
    $.__views.__alloyId21561 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21561"
    });
    $.__views.__alloyId21560.add($.__views.__alloyId21561);
    $.__views.__alloyId21562 = Ti.UI.createView({
        id: "__alloyId21562"
    });
    $.__views.__alloyId21562 && $.addTopLevelView($.__views.__alloyId21562);
    $.__views.__alloyId21563 = Ti.UI.createView({
        id: "__alloyId21563"
    });
    $.__views.__alloyId21562.add($.__views.__alloyId21563);
    $.__views.__alloyId21564 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21564"
    });
    $.__views.__alloyId21563.add($.__views.__alloyId21564);
    $.__views.__alloyId21565 = Ti.UI.createView({
        id: "__alloyId21565"
    });
    $.__views.__alloyId21565 && $.addTopLevelView($.__views.__alloyId21565);
    $.__views.__alloyId21566 = Ti.UI.createView({
        id: "__alloyId21566"
    });
    $.__views.__alloyId21565.add($.__views.__alloyId21566);
    $.__views.__alloyId21567 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21567"
    });
    $.__views.__alloyId21566.add($.__views.__alloyId21567);
    $.__views.__alloyId21568 = Ti.UI.createView({
        id: "__alloyId21568"
    });
    $.__views.__alloyId21568 && $.addTopLevelView($.__views.__alloyId21568);
    $.__views.__alloyId21569 = Ti.UI.createView({
        id: "__alloyId21569"
    });
    $.__views.__alloyId21568.add($.__views.__alloyId21569);
    $.__views.__alloyId21570 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21570"
    });
    $.__views.__alloyId21569.add($.__views.__alloyId21570);
    $.__views.__alloyId21571 = Ti.UI.createView({
        id: "__alloyId21571"
    });
    $.__views.__alloyId21571 && $.addTopLevelView($.__views.__alloyId21571);
    $.__views.__alloyId21572 = Ti.UI.createView({
        id: "__alloyId21572"
    });
    $.__views.__alloyId21571.add($.__views.__alloyId21572);
    $.__views.__alloyId21573 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21573"
    });
    $.__views.__alloyId21572.add($.__views.__alloyId21573);
    $.__views.__alloyId21574 = Ti.UI.createView({
        id: "__alloyId21574"
    });
    $.__views.__alloyId21574 && $.addTopLevelView($.__views.__alloyId21574);
    $.__views.__alloyId21575 = Ti.UI.createView({
        id: "__alloyId21575"
    });
    $.__views.__alloyId21574.add($.__views.__alloyId21575);
    $.__views.__alloyId21576 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21576"
    });
    $.__views.__alloyId21575.add($.__views.__alloyId21576);
    $.__views.__alloyId21577 = Ti.UI.createView({
        id: "__alloyId21577"
    });
    $.__views.__alloyId21577 && $.addTopLevelView($.__views.__alloyId21577);
    $.__views.__alloyId21578 = Ti.UI.createView({
        id: "__alloyId21578"
    });
    $.__views.__alloyId21577.add($.__views.__alloyId21578);
    $.__views.__alloyId21579 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21579"
    });
    $.__views.__alloyId21578.add($.__views.__alloyId21579);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;