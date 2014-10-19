function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_88";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_88 = Ti.UI.createView({
        id: "widget_88"
    });
    $.__views.widget_88 && $.addTopLevelView($.__views.widget_88);
    $.__views.__alloyId22568 = Ti.UI.createView({
        id: "__alloyId22568"
    });
    $.__views.widget_88.add($.__views.__alloyId22568);
    $.__views.__alloyId22569 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22569"
    });
    $.__views.__alloyId22568.add($.__views.__alloyId22569);
    $.__views.__alloyId22570 = Ti.UI.createView({
        id: "__alloyId22570"
    });
    $.__views.__alloyId22570 && $.addTopLevelView($.__views.__alloyId22570);
    $.__views.__alloyId22571 = Ti.UI.createView({
        id: "__alloyId22571"
    });
    $.__views.__alloyId22570.add($.__views.__alloyId22571);
    $.__views.__alloyId22572 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22572"
    });
    $.__views.__alloyId22571.add($.__views.__alloyId22572);
    $.__views.__alloyId22573 = Ti.UI.createView({
        id: "__alloyId22573"
    });
    $.__views.__alloyId22573 && $.addTopLevelView($.__views.__alloyId22573);
    $.__views.__alloyId22574 = Ti.UI.createView({
        id: "__alloyId22574"
    });
    $.__views.__alloyId22573.add($.__views.__alloyId22574);
    $.__views.__alloyId22575 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22575"
    });
    $.__views.__alloyId22574.add($.__views.__alloyId22575);
    $.__views.__alloyId22576 = Ti.UI.createView({
        id: "__alloyId22576"
    });
    $.__views.__alloyId22576 && $.addTopLevelView($.__views.__alloyId22576);
    $.__views.__alloyId22577 = Ti.UI.createView({
        id: "__alloyId22577"
    });
    $.__views.__alloyId22576.add($.__views.__alloyId22577);
    $.__views.__alloyId22578 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22578"
    });
    $.__views.__alloyId22577.add($.__views.__alloyId22578);
    $.__views.__alloyId22579 = Ti.UI.createView({
        id: "__alloyId22579"
    });
    $.__views.__alloyId22579 && $.addTopLevelView($.__views.__alloyId22579);
    $.__views.__alloyId22580 = Ti.UI.createView({
        id: "__alloyId22580"
    });
    $.__views.__alloyId22579.add($.__views.__alloyId22580);
    $.__views.__alloyId22581 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22581"
    });
    $.__views.__alloyId22580.add($.__views.__alloyId22581);
    $.__views.__alloyId22582 = Ti.UI.createView({
        id: "__alloyId22582"
    });
    $.__views.__alloyId22582 && $.addTopLevelView($.__views.__alloyId22582);
    $.__views.__alloyId22583 = Ti.UI.createView({
        id: "__alloyId22583"
    });
    $.__views.__alloyId22582.add($.__views.__alloyId22583);
    $.__views.__alloyId22584 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22584"
    });
    $.__views.__alloyId22583.add($.__views.__alloyId22584);
    $.__views.__alloyId22585 = Ti.UI.createView({
        id: "__alloyId22585"
    });
    $.__views.__alloyId22585 && $.addTopLevelView($.__views.__alloyId22585);
    $.__views.__alloyId22586 = Ti.UI.createView({
        id: "__alloyId22586"
    });
    $.__views.__alloyId22585.add($.__views.__alloyId22586);
    $.__views.__alloyId22587 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22587"
    });
    $.__views.__alloyId22586.add($.__views.__alloyId22587);
    $.__views.__alloyId22588 = Ti.UI.createView({
        id: "__alloyId22588"
    });
    $.__views.__alloyId22588 && $.addTopLevelView($.__views.__alloyId22588);
    $.__views.__alloyId22589 = Ti.UI.createView({
        id: "__alloyId22589"
    });
    $.__views.__alloyId22588.add($.__views.__alloyId22589);
    $.__views.__alloyId22590 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22590"
    });
    $.__views.__alloyId22589.add($.__views.__alloyId22590);
    $.__views.__alloyId22591 = Ti.UI.createView({
        id: "__alloyId22591"
    });
    $.__views.__alloyId22591 && $.addTopLevelView($.__views.__alloyId22591);
    $.__views.__alloyId22592 = Ti.UI.createView({
        id: "__alloyId22592"
    });
    $.__views.__alloyId22591.add($.__views.__alloyId22592);
    $.__views.__alloyId22593 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22593"
    });
    $.__views.__alloyId22592.add($.__views.__alloyId22593);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;