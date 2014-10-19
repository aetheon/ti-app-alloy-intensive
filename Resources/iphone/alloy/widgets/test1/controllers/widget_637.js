function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_637";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_637 = Ti.UI.createView({
        id: "widget_637"
    });
    $.__views.widget_637 && $.addTopLevelView($.__views.widget_637);
    $.__views.__alloyId15574 = Ti.UI.createView({
        id: "__alloyId15574"
    });
    $.__views.widget_637.add($.__views.__alloyId15574);
    $.__views.__alloyId15575 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15575"
    });
    $.__views.__alloyId15574.add($.__views.__alloyId15575);
    $.__views.__alloyId15576 = Ti.UI.createView({
        id: "__alloyId15576"
    });
    $.__views.__alloyId15576 && $.addTopLevelView($.__views.__alloyId15576);
    $.__views.__alloyId15577 = Ti.UI.createView({
        id: "__alloyId15577"
    });
    $.__views.__alloyId15576.add($.__views.__alloyId15577);
    $.__views.__alloyId15578 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15578"
    });
    $.__views.__alloyId15577.add($.__views.__alloyId15578);
    $.__views.__alloyId15579 = Ti.UI.createView({
        id: "__alloyId15579"
    });
    $.__views.__alloyId15579 && $.addTopLevelView($.__views.__alloyId15579);
    $.__views.__alloyId15580 = Ti.UI.createView({
        id: "__alloyId15580"
    });
    $.__views.__alloyId15579.add($.__views.__alloyId15580);
    $.__views.__alloyId15581 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15581"
    });
    $.__views.__alloyId15580.add($.__views.__alloyId15581);
    $.__views.__alloyId15582 = Ti.UI.createView({
        id: "__alloyId15582"
    });
    $.__views.__alloyId15582 && $.addTopLevelView($.__views.__alloyId15582);
    $.__views.__alloyId15583 = Ti.UI.createView({
        id: "__alloyId15583"
    });
    $.__views.__alloyId15582.add($.__views.__alloyId15583);
    $.__views.__alloyId15584 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15584"
    });
    $.__views.__alloyId15583.add($.__views.__alloyId15584);
    $.__views.__alloyId15585 = Ti.UI.createView({
        id: "__alloyId15585"
    });
    $.__views.__alloyId15585 && $.addTopLevelView($.__views.__alloyId15585);
    $.__views.__alloyId15586 = Ti.UI.createView({
        id: "__alloyId15586"
    });
    $.__views.__alloyId15585.add($.__views.__alloyId15586);
    $.__views.__alloyId15587 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15587"
    });
    $.__views.__alloyId15586.add($.__views.__alloyId15587);
    $.__views.__alloyId15588 = Ti.UI.createView({
        id: "__alloyId15588"
    });
    $.__views.__alloyId15588 && $.addTopLevelView($.__views.__alloyId15588);
    $.__views.__alloyId15589 = Ti.UI.createView({
        id: "__alloyId15589"
    });
    $.__views.__alloyId15588.add($.__views.__alloyId15589);
    $.__views.__alloyId15590 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15590"
    });
    $.__views.__alloyId15589.add($.__views.__alloyId15590);
    $.__views.__alloyId15591 = Ti.UI.createView({
        id: "__alloyId15591"
    });
    $.__views.__alloyId15591 && $.addTopLevelView($.__views.__alloyId15591);
    $.__views.__alloyId15592 = Ti.UI.createView({
        id: "__alloyId15592"
    });
    $.__views.__alloyId15591.add($.__views.__alloyId15592);
    $.__views.__alloyId15593 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15593"
    });
    $.__views.__alloyId15592.add($.__views.__alloyId15593);
    $.__views.__alloyId15594 = Ti.UI.createView({
        id: "__alloyId15594"
    });
    $.__views.__alloyId15594 && $.addTopLevelView($.__views.__alloyId15594);
    $.__views.__alloyId15595 = Ti.UI.createView({
        id: "__alloyId15595"
    });
    $.__views.__alloyId15594.add($.__views.__alloyId15595);
    $.__views.__alloyId15596 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15596"
    });
    $.__views.__alloyId15595.add($.__views.__alloyId15596);
    $.__views.__alloyId15597 = Ti.UI.createView({
        id: "__alloyId15597"
    });
    $.__views.__alloyId15597 && $.addTopLevelView($.__views.__alloyId15597);
    $.__views.__alloyId15598 = Ti.UI.createView({
        id: "__alloyId15598"
    });
    $.__views.__alloyId15597.add($.__views.__alloyId15598);
    $.__views.__alloyId15599 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15599"
    });
    $.__views.__alloyId15598.add($.__views.__alloyId15599);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;