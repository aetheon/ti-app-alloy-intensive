function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_883";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_883 = Ti.UI.createView({
        id: "widget_883"
    });
    $.__views.widget_883 && $.addTopLevelView($.__views.widget_883);
    $.__views.__alloyId22672 = Ti.UI.createView({
        id: "__alloyId22672"
    });
    $.__views.widget_883.add($.__views.__alloyId22672);
    $.__views.__alloyId22673 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22673"
    });
    $.__views.__alloyId22672.add($.__views.__alloyId22673);
    $.__views.__alloyId22674 = Ti.UI.createView({
        id: "__alloyId22674"
    });
    $.__views.__alloyId22674 && $.addTopLevelView($.__views.__alloyId22674);
    $.__views.__alloyId22675 = Ti.UI.createView({
        id: "__alloyId22675"
    });
    $.__views.__alloyId22674.add($.__views.__alloyId22675);
    $.__views.__alloyId22676 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22676"
    });
    $.__views.__alloyId22675.add($.__views.__alloyId22676);
    $.__views.__alloyId22677 = Ti.UI.createView({
        id: "__alloyId22677"
    });
    $.__views.__alloyId22677 && $.addTopLevelView($.__views.__alloyId22677);
    $.__views.__alloyId22678 = Ti.UI.createView({
        id: "__alloyId22678"
    });
    $.__views.__alloyId22677.add($.__views.__alloyId22678);
    $.__views.__alloyId22679 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22679"
    });
    $.__views.__alloyId22678.add($.__views.__alloyId22679);
    $.__views.__alloyId22680 = Ti.UI.createView({
        id: "__alloyId22680"
    });
    $.__views.__alloyId22680 && $.addTopLevelView($.__views.__alloyId22680);
    $.__views.__alloyId22681 = Ti.UI.createView({
        id: "__alloyId22681"
    });
    $.__views.__alloyId22680.add($.__views.__alloyId22681);
    $.__views.__alloyId22682 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22682"
    });
    $.__views.__alloyId22681.add($.__views.__alloyId22682);
    $.__views.__alloyId22683 = Ti.UI.createView({
        id: "__alloyId22683"
    });
    $.__views.__alloyId22683 && $.addTopLevelView($.__views.__alloyId22683);
    $.__views.__alloyId22684 = Ti.UI.createView({
        id: "__alloyId22684"
    });
    $.__views.__alloyId22683.add($.__views.__alloyId22684);
    $.__views.__alloyId22685 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22685"
    });
    $.__views.__alloyId22684.add($.__views.__alloyId22685);
    $.__views.__alloyId22686 = Ti.UI.createView({
        id: "__alloyId22686"
    });
    $.__views.__alloyId22686 && $.addTopLevelView($.__views.__alloyId22686);
    $.__views.__alloyId22687 = Ti.UI.createView({
        id: "__alloyId22687"
    });
    $.__views.__alloyId22686.add($.__views.__alloyId22687);
    $.__views.__alloyId22688 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22688"
    });
    $.__views.__alloyId22687.add($.__views.__alloyId22688);
    $.__views.__alloyId22689 = Ti.UI.createView({
        id: "__alloyId22689"
    });
    $.__views.__alloyId22689 && $.addTopLevelView($.__views.__alloyId22689);
    $.__views.__alloyId22690 = Ti.UI.createView({
        id: "__alloyId22690"
    });
    $.__views.__alloyId22689.add($.__views.__alloyId22690);
    $.__views.__alloyId22691 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22691"
    });
    $.__views.__alloyId22690.add($.__views.__alloyId22691);
    $.__views.__alloyId22692 = Ti.UI.createView({
        id: "__alloyId22692"
    });
    $.__views.__alloyId22692 && $.addTopLevelView($.__views.__alloyId22692);
    $.__views.__alloyId22693 = Ti.UI.createView({
        id: "__alloyId22693"
    });
    $.__views.__alloyId22692.add($.__views.__alloyId22693);
    $.__views.__alloyId22694 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22694"
    });
    $.__views.__alloyId22693.add($.__views.__alloyId22694);
    $.__views.__alloyId22695 = Ti.UI.createView({
        id: "__alloyId22695"
    });
    $.__views.__alloyId22695 && $.addTopLevelView($.__views.__alloyId22695);
    $.__views.__alloyId22696 = Ti.UI.createView({
        id: "__alloyId22696"
    });
    $.__views.__alloyId22695.add($.__views.__alloyId22696);
    $.__views.__alloyId22697 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22697"
    });
    $.__views.__alloyId22696.add($.__views.__alloyId22697);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;