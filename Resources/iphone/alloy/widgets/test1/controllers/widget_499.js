function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_499";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_499 = Ti.UI.createView({
        id: "widget_499"
    });
    $.__views.widget_499 && $.addTopLevelView($.__views.widget_499);
    $.__views.__alloyId11570 = Ti.UI.createView({
        id: "__alloyId11570"
    });
    $.__views.widget_499.add($.__views.__alloyId11570);
    $.__views.__alloyId11571 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11571"
    });
    $.__views.__alloyId11570.add($.__views.__alloyId11571);
    $.__views.__alloyId11572 = Ti.UI.createView({
        id: "__alloyId11572"
    });
    $.__views.__alloyId11572 && $.addTopLevelView($.__views.__alloyId11572);
    $.__views.__alloyId11573 = Ti.UI.createView({
        id: "__alloyId11573"
    });
    $.__views.__alloyId11572.add($.__views.__alloyId11573);
    $.__views.__alloyId11574 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11574"
    });
    $.__views.__alloyId11573.add($.__views.__alloyId11574);
    $.__views.__alloyId11575 = Ti.UI.createView({
        id: "__alloyId11575"
    });
    $.__views.__alloyId11575 && $.addTopLevelView($.__views.__alloyId11575);
    $.__views.__alloyId11576 = Ti.UI.createView({
        id: "__alloyId11576"
    });
    $.__views.__alloyId11575.add($.__views.__alloyId11576);
    $.__views.__alloyId11577 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11577"
    });
    $.__views.__alloyId11576.add($.__views.__alloyId11577);
    $.__views.__alloyId11578 = Ti.UI.createView({
        id: "__alloyId11578"
    });
    $.__views.__alloyId11578 && $.addTopLevelView($.__views.__alloyId11578);
    $.__views.__alloyId11579 = Ti.UI.createView({
        id: "__alloyId11579"
    });
    $.__views.__alloyId11578.add($.__views.__alloyId11579);
    $.__views.__alloyId11580 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11580"
    });
    $.__views.__alloyId11579.add($.__views.__alloyId11580);
    $.__views.__alloyId11581 = Ti.UI.createView({
        id: "__alloyId11581"
    });
    $.__views.__alloyId11581 && $.addTopLevelView($.__views.__alloyId11581);
    $.__views.__alloyId11582 = Ti.UI.createView({
        id: "__alloyId11582"
    });
    $.__views.__alloyId11581.add($.__views.__alloyId11582);
    $.__views.__alloyId11583 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11583"
    });
    $.__views.__alloyId11582.add($.__views.__alloyId11583);
    $.__views.__alloyId11584 = Ti.UI.createView({
        id: "__alloyId11584"
    });
    $.__views.__alloyId11584 && $.addTopLevelView($.__views.__alloyId11584);
    $.__views.__alloyId11585 = Ti.UI.createView({
        id: "__alloyId11585"
    });
    $.__views.__alloyId11584.add($.__views.__alloyId11585);
    $.__views.__alloyId11586 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11586"
    });
    $.__views.__alloyId11585.add($.__views.__alloyId11586);
    $.__views.__alloyId11587 = Ti.UI.createView({
        id: "__alloyId11587"
    });
    $.__views.__alloyId11587 && $.addTopLevelView($.__views.__alloyId11587);
    $.__views.__alloyId11588 = Ti.UI.createView({
        id: "__alloyId11588"
    });
    $.__views.__alloyId11587.add($.__views.__alloyId11588);
    $.__views.__alloyId11589 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11589"
    });
    $.__views.__alloyId11588.add($.__views.__alloyId11589);
    $.__views.__alloyId11590 = Ti.UI.createView({
        id: "__alloyId11590"
    });
    $.__views.__alloyId11590 && $.addTopLevelView($.__views.__alloyId11590);
    $.__views.__alloyId11591 = Ti.UI.createView({
        id: "__alloyId11591"
    });
    $.__views.__alloyId11590.add($.__views.__alloyId11591);
    $.__views.__alloyId11592 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11592"
    });
    $.__views.__alloyId11591.add($.__views.__alloyId11592);
    $.__views.__alloyId11593 = Ti.UI.createView({
        id: "__alloyId11593"
    });
    $.__views.__alloyId11593 && $.addTopLevelView($.__views.__alloyId11593);
    $.__views.__alloyId11594 = Ti.UI.createView({
        id: "__alloyId11594"
    });
    $.__views.__alloyId11593.add($.__views.__alloyId11594);
    $.__views.__alloyId11595 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11595"
    });
    $.__views.__alloyId11594.add($.__views.__alloyId11595);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;