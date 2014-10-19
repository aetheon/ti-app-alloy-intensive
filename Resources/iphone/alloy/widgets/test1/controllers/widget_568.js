function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_568";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_568 = Ti.UI.createView({
        id: "widget_568"
    });
    $.__views.widget_568 && $.addTopLevelView($.__views.widget_568);
    $.__views.__alloyId13572 = Ti.UI.createView({
        id: "__alloyId13572"
    });
    $.__views.widget_568.add($.__views.__alloyId13572);
    $.__views.__alloyId13573 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13573"
    });
    $.__views.__alloyId13572.add($.__views.__alloyId13573);
    $.__views.__alloyId13574 = Ti.UI.createView({
        id: "__alloyId13574"
    });
    $.__views.__alloyId13574 && $.addTopLevelView($.__views.__alloyId13574);
    $.__views.__alloyId13575 = Ti.UI.createView({
        id: "__alloyId13575"
    });
    $.__views.__alloyId13574.add($.__views.__alloyId13575);
    $.__views.__alloyId13576 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13576"
    });
    $.__views.__alloyId13575.add($.__views.__alloyId13576);
    $.__views.__alloyId13577 = Ti.UI.createView({
        id: "__alloyId13577"
    });
    $.__views.__alloyId13577 && $.addTopLevelView($.__views.__alloyId13577);
    $.__views.__alloyId13578 = Ti.UI.createView({
        id: "__alloyId13578"
    });
    $.__views.__alloyId13577.add($.__views.__alloyId13578);
    $.__views.__alloyId13579 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13579"
    });
    $.__views.__alloyId13578.add($.__views.__alloyId13579);
    $.__views.__alloyId13580 = Ti.UI.createView({
        id: "__alloyId13580"
    });
    $.__views.__alloyId13580 && $.addTopLevelView($.__views.__alloyId13580);
    $.__views.__alloyId13581 = Ti.UI.createView({
        id: "__alloyId13581"
    });
    $.__views.__alloyId13580.add($.__views.__alloyId13581);
    $.__views.__alloyId13582 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13582"
    });
    $.__views.__alloyId13581.add($.__views.__alloyId13582);
    $.__views.__alloyId13583 = Ti.UI.createView({
        id: "__alloyId13583"
    });
    $.__views.__alloyId13583 && $.addTopLevelView($.__views.__alloyId13583);
    $.__views.__alloyId13584 = Ti.UI.createView({
        id: "__alloyId13584"
    });
    $.__views.__alloyId13583.add($.__views.__alloyId13584);
    $.__views.__alloyId13585 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13585"
    });
    $.__views.__alloyId13584.add($.__views.__alloyId13585);
    $.__views.__alloyId13586 = Ti.UI.createView({
        id: "__alloyId13586"
    });
    $.__views.__alloyId13586 && $.addTopLevelView($.__views.__alloyId13586);
    $.__views.__alloyId13587 = Ti.UI.createView({
        id: "__alloyId13587"
    });
    $.__views.__alloyId13586.add($.__views.__alloyId13587);
    $.__views.__alloyId13588 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13588"
    });
    $.__views.__alloyId13587.add($.__views.__alloyId13588);
    $.__views.__alloyId13589 = Ti.UI.createView({
        id: "__alloyId13589"
    });
    $.__views.__alloyId13589 && $.addTopLevelView($.__views.__alloyId13589);
    $.__views.__alloyId13590 = Ti.UI.createView({
        id: "__alloyId13590"
    });
    $.__views.__alloyId13589.add($.__views.__alloyId13590);
    $.__views.__alloyId13591 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13591"
    });
    $.__views.__alloyId13590.add($.__views.__alloyId13591);
    $.__views.__alloyId13592 = Ti.UI.createView({
        id: "__alloyId13592"
    });
    $.__views.__alloyId13592 && $.addTopLevelView($.__views.__alloyId13592);
    $.__views.__alloyId13593 = Ti.UI.createView({
        id: "__alloyId13593"
    });
    $.__views.__alloyId13592.add($.__views.__alloyId13593);
    $.__views.__alloyId13594 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13594"
    });
    $.__views.__alloyId13593.add($.__views.__alloyId13594);
    $.__views.__alloyId13595 = Ti.UI.createView({
        id: "__alloyId13595"
    });
    $.__views.__alloyId13595 && $.addTopLevelView($.__views.__alloyId13595);
    $.__views.__alloyId13596 = Ti.UI.createView({
        id: "__alloyId13596"
    });
    $.__views.__alloyId13595.add($.__views.__alloyId13596);
    $.__views.__alloyId13597 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13597"
    });
    $.__views.__alloyId13596.add($.__views.__alloyId13597);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;