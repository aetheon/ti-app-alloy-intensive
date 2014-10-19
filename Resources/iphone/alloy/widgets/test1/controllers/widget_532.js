function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_532";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_532 = Ti.UI.createView({
        id: "widget_532"
    });
    $.__views.widget_532 && $.addTopLevelView($.__views.widget_532);
    $.__views.__alloyId12558 = Ti.UI.createView({
        id: "__alloyId12558"
    });
    $.__views.widget_532.add($.__views.__alloyId12558);
    $.__views.__alloyId12559 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12559"
    });
    $.__views.__alloyId12558.add($.__views.__alloyId12559);
    $.__views.__alloyId12560 = Ti.UI.createView({
        id: "__alloyId12560"
    });
    $.__views.__alloyId12560 && $.addTopLevelView($.__views.__alloyId12560);
    $.__views.__alloyId12561 = Ti.UI.createView({
        id: "__alloyId12561"
    });
    $.__views.__alloyId12560.add($.__views.__alloyId12561);
    $.__views.__alloyId12562 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12562"
    });
    $.__views.__alloyId12561.add($.__views.__alloyId12562);
    $.__views.__alloyId12563 = Ti.UI.createView({
        id: "__alloyId12563"
    });
    $.__views.__alloyId12563 && $.addTopLevelView($.__views.__alloyId12563);
    $.__views.__alloyId12564 = Ti.UI.createView({
        id: "__alloyId12564"
    });
    $.__views.__alloyId12563.add($.__views.__alloyId12564);
    $.__views.__alloyId12565 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12565"
    });
    $.__views.__alloyId12564.add($.__views.__alloyId12565);
    $.__views.__alloyId12566 = Ti.UI.createView({
        id: "__alloyId12566"
    });
    $.__views.__alloyId12566 && $.addTopLevelView($.__views.__alloyId12566);
    $.__views.__alloyId12567 = Ti.UI.createView({
        id: "__alloyId12567"
    });
    $.__views.__alloyId12566.add($.__views.__alloyId12567);
    $.__views.__alloyId12568 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12568"
    });
    $.__views.__alloyId12567.add($.__views.__alloyId12568);
    $.__views.__alloyId12569 = Ti.UI.createView({
        id: "__alloyId12569"
    });
    $.__views.__alloyId12569 && $.addTopLevelView($.__views.__alloyId12569);
    $.__views.__alloyId12570 = Ti.UI.createView({
        id: "__alloyId12570"
    });
    $.__views.__alloyId12569.add($.__views.__alloyId12570);
    $.__views.__alloyId12571 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12571"
    });
    $.__views.__alloyId12570.add($.__views.__alloyId12571);
    $.__views.__alloyId12572 = Ti.UI.createView({
        id: "__alloyId12572"
    });
    $.__views.__alloyId12572 && $.addTopLevelView($.__views.__alloyId12572);
    $.__views.__alloyId12573 = Ti.UI.createView({
        id: "__alloyId12573"
    });
    $.__views.__alloyId12572.add($.__views.__alloyId12573);
    $.__views.__alloyId12574 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12574"
    });
    $.__views.__alloyId12573.add($.__views.__alloyId12574);
    $.__views.__alloyId12575 = Ti.UI.createView({
        id: "__alloyId12575"
    });
    $.__views.__alloyId12575 && $.addTopLevelView($.__views.__alloyId12575);
    $.__views.__alloyId12576 = Ti.UI.createView({
        id: "__alloyId12576"
    });
    $.__views.__alloyId12575.add($.__views.__alloyId12576);
    $.__views.__alloyId12577 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12577"
    });
    $.__views.__alloyId12576.add($.__views.__alloyId12577);
    $.__views.__alloyId12578 = Ti.UI.createView({
        id: "__alloyId12578"
    });
    $.__views.__alloyId12578 && $.addTopLevelView($.__views.__alloyId12578);
    $.__views.__alloyId12579 = Ti.UI.createView({
        id: "__alloyId12579"
    });
    $.__views.__alloyId12578.add($.__views.__alloyId12579);
    $.__views.__alloyId12580 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12580"
    });
    $.__views.__alloyId12579.add($.__views.__alloyId12580);
    $.__views.__alloyId12581 = Ti.UI.createView({
        id: "__alloyId12581"
    });
    $.__views.__alloyId12581 && $.addTopLevelView($.__views.__alloyId12581);
    $.__views.__alloyId12582 = Ti.UI.createView({
        id: "__alloyId12582"
    });
    $.__views.__alloyId12581.add($.__views.__alloyId12582);
    $.__views.__alloyId12583 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12583"
    });
    $.__views.__alloyId12582.add($.__views.__alloyId12583);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;