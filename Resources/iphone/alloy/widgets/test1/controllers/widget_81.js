function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_81";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_81 = Ti.UI.createView({
        id: "widget_81"
    });
    $.__views.widget_81 && $.addTopLevelView($.__views.widget_81);
    $.__views.__alloyId20566 = Ti.UI.createView({
        id: "__alloyId20566"
    });
    $.__views.widget_81.add($.__views.__alloyId20566);
    $.__views.__alloyId20567 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20567"
    });
    $.__views.__alloyId20566.add($.__views.__alloyId20567);
    $.__views.__alloyId20568 = Ti.UI.createView({
        id: "__alloyId20568"
    });
    $.__views.__alloyId20568 && $.addTopLevelView($.__views.__alloyId20568);
    $.__views.__alloyId20569 = Ti.UI.createView({
        id: "__alloyId20569"
    });
    $.__views.__alloyId20568.add($.__views.__alloyId20569);
    $.__views.__alloyId20570 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20570"
    });
    $.__views.__alloyId20569.add($.__views.__alloyId20570);
    $.__views.__alloyId20571 = Ti.UI.createView({
        id: "__alloyId20571"
    });
    $.__views.__alloyId20571 && $.addTopLevelView($.__views.__alloyId20571);
    $.__views.__alloyId20572 = Ti.UI.createView({
        id: "__alloyId20572"
    });
    $.__views.__alloyId20571.add($.__views.__alloyId20572);
    $.__views.__alloyId20573 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20573"
    });
    $.__views.__alloyId20572.add($.__views.__alloyId20573);
    $.__views.__alloyId20574 = Ti.UI.createView({
        id: "__alloyId20574"
    });
    $.__views.__alloyId20574 && $.addTopLevelView($.__views.__alloyId20574);
    $.__views.__alloyId20575 = Ti.UI.createView({
        id: "__alloyId20575"
    });
    $.__views.__alloyId20574.add($.__views.__alloyId20575);
    $.__views.__alloyId20576 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20576"
    });
    $.__views.__alloyId20575.add($.__views.__alloyId20576);
    $.__views.__alloyId20577 = Ti.UI.createView({
        id: "__alloyId20577"
    });
    $.__views.__alloyId20577 && $.addTopLevelView($.__views.__alloyId20577);
    $.__views.__alloyId20578 = Ti.UI.createView({
        id: "__alloyId20578"
    });
    $.__views.__alloyId20577.add($.__views.__alloyId20578);
    $.__views.__alloyId20579 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20579"
    });
    $.__views.__alloyId20578.add($.__views.__alloyId20579);
    $.__views.__alloyId20580 = Ti.UI.createView({
        id: "__alloyId20580"
    });
    $.__views.__alloyId20580 && $.addTopLevelView($.__views.__alloyId20580);
    $.__views.__alloyId20581 = Ti.UI.createView({
        id: "__alloyId20581"
    });
    $.__views.__alloyId20580.add($.__views.__alloyId20581);
    $.__views.__alloyId20582 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20582"
    });
    $.__views.__alloyId20581.add($.__views.__alloyId20582);
    $.__views.__alloyId20583 = Ti.UI.createView({
        id: "__alloyId20583"
    });
    $.__views.__alloyId20583 && $.addTopLevelView($.__views.__alloyId20583);
    $.__views.__alloyId20584 = Ti.UI.createView({
        id: "__alloyId20584"
    });
    $.__views.__alloyId20583.add($.__views.__alloyId20584);
    $.__views.__alloyId20585 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20585"
    });
    $.__views.__alloyId20584.add($.__views.__alloyId20585);
    $.__views.__alloyId20586 = Ti.UI.createView({
        id: "__alloyId20586"
    });
    $.__views.__alloyId20586 && $.addTopLevelView($.__views.__alloyId20586);
    $.__views.__alloyId20587 = Ti.UI.createView({
        id: "__alloyId20587"
    });
    $.__views.__alloyId20586.add($.__views.__alloyId20587);
    $.__views.__alloyId20588 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20588"
    });
    $.__views.__alloyId20587.add($.__views.__alloyId20588);
    $.__views.__alloyId20589 = Ti.UI.createView({
        id: "__alloyId20589"
    });
    $.__views.__alloyId20589 && $.addTopLevelView($.__views.__alloyId20589);
    $.__views.__alloyId20590 = Ti.UI.createView({
        id: "__alloyId20590"
    });
    $.__views.__alloyId20589.add($.__views.__alloyId20590);
    $.__views.__alloyId20591 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20591"
    });
    $.__views.__alloyId20590.add($.__views.__alloyId20591);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;