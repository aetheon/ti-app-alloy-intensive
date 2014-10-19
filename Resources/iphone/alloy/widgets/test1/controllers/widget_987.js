function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_987";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_987 = Ti.UI.createView({
        id: "widget_987"
    });
    $.__views.widget_987 && $.addTopLevelView($.__views.widget_987);
    $.__views.__alloyId25662 = Ti.UI.createView({
        id: "__alloyId25662"
    });
    $.__views.widget_987.add($.__views.__alloyId25662);
    $.__views.__alloyId25663 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25663"
    });
    $.__views.__alloyId25662.add($.__views.__alloyId25663);
    $.__views.__alloyId25664 = Ti.UI.createView({
        id: "__alloyId25664"
    });
    $.__views.__alloyId25664 && $.addTopLevelView($.__views.__alloyId25664);
    $.__views.__alloyId25665 = Ti.UI.createView({
        id: "__alloyId25665"
    });
    $.__views.__alloyId25664.add($.__views.__alloyId25665);
    $.__views.__alloyId25666 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25666"
    });
    $.__views.__alloyId25665.add($.__views.__alloyId25666);
    $.__views.__alloyId25667 = Ti.UI.createView({
        id: "__alloyId25667"
    });
    $.__views.__alloyId25667 && $.addTopLevelView($.__views.__alloyId25667);
    $.__views.__alloyId25668 = Ti.UI.createView({
        id: "__alloyId25668"
    });
    $.__views.__alloyId25667.add($.__views.__alloyId25668);
    $.__views.__alloyId25669 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25669"
    });
    $.__views.__alloyId25668.add($.__views.__alloyId25669);
    $.__views.__alloyId25670 = Ti.UI.createView({
        id: "__alloyId25670"
    });
    $.__views.__alloyId25670 && $.addTopLevelView($.__views.__alloyId25670);
    $.__views.__alloyId25671 = Ti.UI.createView({
        id: "__alloyId25671"
    });
    $.__views.__alloyId25670.add($.__views.__alloyId25671);
    $.__views.__alloyId25672 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25672"
    });
    $.__views.__alloyId25671.add($.__views.__alloyId25672);
    $.__views.__alloyId25673 = Ti.UI.createView({
        id: "__alloyId25673"
    });
    $.__views.__alloyId25673 && $.addTopLevelView($.__views.__alloyId25673);
    $.__views.__alloyId25674 = Ti.UI.createView({
        id: "__alloyId25674"
    });
    $.__views.__alloyId25673.add($.__views.__alloyId25674);
    $.__views.__alloyId25675 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25675"
    });
    $.__views.__alloyId25674.add($.__views.__alloyId25675);
    $.__views.__alloyId25676 = Ti.UI.createView({
        id: "__alloyId25676"
    });
    $.__views.__alloyId25676 && $.addTopLevelView($.__views.__alloyId25676);
    $.__views.__alloyId25677 = Ti.UI.createView({
        id: "__alloyId25677"
    });
    $.__views.__alloyId25676.add($.__views.__alloyId25677);
    $.__views.__alloyId25678 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25678"
    });
    $.__views.__alloyId25677.add($.__views.__alloyId25678);
    $.__views.__alloyId25679 = Ti.UI.createView({
        id: "__alloyId25679"
    });
    $.__views.__alloyId25679 && $.addTopLevelView($.__views.__alloyId25679);
    $.__views.__alloyId25680 = Ti.UI.createView({
        id: "__alloyId25680"
    });
    $.__views.__alloyId25679.add($.__views.__alloyId25680);
    $.__views.__alloyId25681 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25681"
    });
    $.__views.__alloyId25680.add($.__views.__alloyId25681);
    $.__views.__alloyId25682 = Ti.UI.createView({
        id: "__alloyId25682"
    });
    $.__views.__alloyId25682 && $.addTopLevelView($.__views.__alloyId25682);
    $.__views.__alloyId25683 = Ti.UI.createView({
        id: "__alloyId25683"
    });
    $.__views.__alloyId25682.add($.__views.__alloyId25683);
    $.__views.__alloyId25684 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25684"
    });
    $.__views.__alloyId25683.add($.__views.__alloyId25684);
    $.__views.__alloyId25685 = Ti.UI.createView({
        id: "__alloyId25685"
    });
    $.__views.__alloyId25685 && $.addTopLevelView($.__views.__alloyId25685);
    $.__views.__alloyId25686 = Ti.UI.createView({
        id: "__alloyId25686"
    });
    $.__views.__alloyId25685.add($.__views.__alloyId25686);
    $.__views.__alloyId25687 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25687"
    });
    $.__views.__alloyId25686.add($.__views.__alloyId25687);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;