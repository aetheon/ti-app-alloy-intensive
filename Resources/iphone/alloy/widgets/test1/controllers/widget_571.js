function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_571";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_571 = Ti.UI.createView({
        id: "widget_571"
    });
    $.__views.widget_571 && $.addTopLevelView($.__views.widget_571);
    $.__views.__alloyId13676 = Ti.UI.createView({
        id: "__alloyId13676"
    });
    $.__views.widget_571.add($.__views.__alloyId13676);
    $.__views.__alloyId13677 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13677"
    });
    $.__views.__alloyId13676.add($.__views.__alloyId13677);
    $.__views.__alloyId13678 = Ti.UI.createView({
        id: "__alloyId13678"
    });
    $.__views.__alloyId13678 && $.addTopLevelView($.__views.__alloyId13678);
    $.__views.__alloyId13679 = Ti.UI.createView({
        id: "__alloyId13679"
    });
    $.__views.__alloyId13678.add($.__views.__alloyId13679);
    $.__views.__alloyId13680 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13680"
    });
    $.__views.__alloyId13679.add($.__views.__alloyId13680);
    $.__views.__alloyId13681 = Ti.UI.createView({
        id: "__alloyId13681"
    });
    $.__views.__alloyId13681 && $.addTopLevelView($.__views.__alloyId13681);
    $.__views.__alloyId13682 = Ti.UI.createView({
        id: "__alloyId13682"
    });
    $.__views.__alloyId13681.add($.__views.__alloyId13682);
    $.__views.__alloyId13683 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13683"
    });
    $.__views.__alloyId13682.add($.__views.__alloyId13683);
    $.__views.__alloyId13684 = Ti.UI.createView({
        id: "__alloyId13684"
    });
    $.__views.__alloyId13684 && $.addTopLevelView($.__views.__alloyId13684);
    $.__views.__alloyId13685 = Ti.UI.createView({
        id: "__alloyId13685"
    });
    $.__views.__alloyId13684.add($.__views.__alloyId13685);
    $.__views.__alloyId13686 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13686"
    });
    $.__views.__alloyId13685.add($.__views.__alloyId13686);
    $.__views.__alloyId13687 = Ti.UI.createView({
        id: "__alloyId13687"
    });
    $.__views.__alloyId13687 && $.addTopLevelView($.__views.__alloyId13687);
    $.__views.__alloyId13688 = Ti.UI.createView({
        id: "__alloyId13688"
    });
    $.__views.__alloyId13687.add($.__views.__alloyId13688);
    $.__views.__alloyId13689 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13689"
    });
    $.__views.__alloyId13688.add($.__views.__alloyId13689);
    $.__views.__alloyId13690 = Ti.UI.createView({
        id: "__alloyId13690"
    });
    $.__views.__alloyId13690 && $.addTopLevelView($.__views.__alloyId13690);
    $.__views.__alloyId13691 = Ti.UI.createView({
        id: "__alloyId13691"
    });
    $.__views.__alloyId13690.add($.__views.__alloyId13691);
    $.__views.__alloyId13692 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13692"
    });
    $.__views.__alloyId13691.add($.__views.__alloyId13692);
    $.__views.__alloyId13693 = Ti.UI.createView({
        id: "__alloyId13693"
    });
    $.__views.__alloyId13693 && $.addTopLevelView($.__views.__alloyId13693);
    $.__views.__alloyId13694 = Ti.UI.createView({
        id: "__alloyId13694"
    });
    $.__views.__alloyId13693.add($.__views.__alloyId13694);
    $.__views.__alloyId13695 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13695"
    });
    $.__views.__alloyId13694.add($.__views.__alloyId13695);
    $.__views.__alloyId13696 = Ti.UI.createView({
        id: "__alloyId13696"
    });
    $.__views.__alloyId13696 && $.addTopLevelView($.__views.__alloyId13696);
    $.__views.__alloyId13697 = Ti.UI.createView({
        id: "__alloyId13697"
    });
    $.__views.__alloyId13696.add($.__views.__alloyId13697);
    $.__views.__alloyId13698 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13698"
    });
    $.__views.__alloyId13697.add($.__views.__alloyId13698);
    $.__views.__alloyId13699 = Ti.UI.createView({
        id: "__alloyId13699"
    });
    $.__views.__alloyId13699 && $.addTopLevelView($.__views.__alloyId13699);
    $.__views.__alloyId13700 = Ti.UI.createView({
        id: "__alloyId13700"
    });
    $.__views.__alloyId13699.add($.__views.__alloyId13700);
    $.__views.__alloyId13701 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13701"
    });
    $.__views.__alloyId13700.add($.__views.__alloyId13701);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;