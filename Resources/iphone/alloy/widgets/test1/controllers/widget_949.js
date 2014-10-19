function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_949";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_949 = Ti.UI.createView({
        id: "widget_949"
    });
    $.__views.widget_949 && $.addTopLevelView($.__views.widget_949);
    $.__views.__alloyId24570 = Ti.UI.createView({
        id: "__alloyId24570"
    });
    $.__views.widget_949.add($.__views.__alloyId24570);
    $.__views.__alloyId24571 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24571"
    });
    $.__views.__alloyId24570.add($.__views.__alloyId24571);
    $.__views.__alloyId24572 = Ti.UI.createView({
        id: "__alloyId24572"
    });
    $.__views.__alloyId24572 && $.addTopLevelView($.__views.__alloyId24572);
    $.__views.__alloyId24573 = Ti.UI.createView({
        id: "__alloyId24573"
    });
    $.__views.__alloyId24572.add($.__views.__alloyId24573);
    $.__views.__alloyId24574 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24574"
    });
    $.__views.__alloyId24573.add($.__views.__alloyId24574);
    $.__views.__alloyId24575 = Ti.UI.createView({
        id: "__alloyId24575"
    });
    $.__views.__alloyId24575 && $.addTopLevelView($.__views.__alloyId24575);
    $.__views.__alloyId24576 = Ti.UI.createView({
        id: "__alloyId24576"
    });
    $.__views.__alloyId24575.add($.__views.__alloyId24576);
    $.__views.__alloyId24577 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24577"
    });
    $.__views.__alloyId24576.add($.__views.__alloyId24577);
    $.__views.__alloyId24578 = Ti.UI.createView({
        id: "__alloyId24578"
    });
    $.__views.__alloyId24578 && $.addTopLevelView($.__views.__alloyId24578);
    $.__views.__alloyId24579 = Ti.UI.createView({
        id: "__alloyId24579"
    });
    $.__views.__alloyId24578.add($.__views.__alloyId24579);
    $.__views.__alloyId24580 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24580"
    });
    $.__views.__alloyId24579.add($.__views.__alloyId24580);
    $.__views.__alloyId24581 = Ti.UI.createView({
        id: "__alloyId24581"
    });
    $.__views.__alloyId24581 && $.addTopLevelView($.__views.__alloyId24581);
    $.__views.__alloyId24582 = Ti.UI.createView({
        id: "__alloyId24582"
    });
    $.__views.__alloyId24581.add($.__views.__alloyId24582);
    $.__views.__alloyId24583 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24583"
    });
    $.__views.__alloyId24582.add($.__views.__alloyId24583);
    $.__views.__alloyId24584 = Ti.UI.createView({
        id: "__alloyId24584"
    });
    $.__views.__alloyId24584 && $.addTopLevelView($.__views.__alloyId24584);
    $.__views.__alloyId24585 = Ti.UI.createView({
        id: "__alloyId24585"
    });
    $.__views.__alloyId24584.add($.__views.__alloyId24585);
    $.__views.__alloyId24586 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24586"
    });
    $.__views.__alloyId24585.add($.__views.__alloyId24586);
    $.__views.__alloyId24587 = Ti.UI.createView({
        id: "__alloyId24587"
    });
    $.__views.__alloyId24587 && $.addTopLevelView($.__views.__alloyId24587);
    $.__views.__alloyId24588 = Ti.UI.createView({
        id: "__alloyId24588"
    });
    $.__views.__alloyId24587.add($.__views.__alloyId24588);
    $.__views.__alloyId24589 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24589"
    });
    $.__views.__alloyId24588.add($.__views.__alloyId24589);
    $.__views.__alloyId24590 = Ti.UI.createView({
        id: "__alloyId24590"
    });
    $.__views.__alloyId24590 && $.addTopLevelView($.__views.__alloyId24590);
    $.__views.__alloyId24591 = Ti.UI.createView({
        id: "__alloyId24591"
    });
    $.__views.__alloyId24590.add($.__views.__alloyId24591);
    $.__views.__alloyId24592 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24592"
    });
    $.__views.__alloyId24591.add($.__views.__alloyId24592);
    $.__views.__alloyId24593 = Ti.UI.createView({
        id: "__alloyId24593"
    });
    $.__views.__alloyId24593 && $.addTopLevelView($.__views.__alloyId24593);
    $.__views.__alloyId24594 = Ti.UI.createView({
        id: "__alloyId24594"
    });
    $.__views.__alloyId24593.add($.__views.__alloyId24594);
    $.__views.__alloyId24595 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24595"
    });
    $.__views.__alloyId24594.add($.__views.__alloyId24595);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;