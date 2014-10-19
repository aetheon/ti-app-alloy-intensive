function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_261";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_261 = Ti.UI.createView({
        id: "widget_261"
    });
    $.__views.widget_261 && $.addTopLevelView($.__views.widget_261);
    $.__views.__alloyId4732 = Ti.UI.createView({
        id: "__alloyId4732"
    });
    $.__views.widget_261.add($.__views.__alloyId4732);
    $.__views.__alloyId4733 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4733"
    });
    $.__views.__alloyId4732.add($.__views.__alloyId4733);
    $.__views.__alloyId4734 = Ti.UI.createView({
        id: "__alloyId4734"
    });
    $.__views.__alloyId4734 && $.addTopLevelView($.__views.__alloyId4734);
    $.__views.__alloyId4735 = Ti.UI.createView({
        id: "__alloyId4735"
    });
    $.__views.__alloyId4734.add($.__views.__alloyId4735);
    $.__views.__alloyId4736 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4736"
    });
    $.__views.__alloyId4735.add($.__views.__alloyId4736);
    $.__views.__alloyId4737 = Ti.UI.createView({
        id: "__alloyId4737"
    });
    $.__views.__alloyId4737 && $.addTopLevelView($.__views.__alloyId4737);
    $.__views.__alloyId4738 = Ti.UI.createView({
        id: "__alloyId4738"
    });
    $.__views.__alloyId4737.add($.__views.__alloyId4738);
    $.__views.__alloyId4739 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4739"
    });
    $.__views.__alloyId4738.add($.__views.__alloyId4739);
    $.__views.__alloyId4740 = Ti.UI.createView({
        id: "__alloyId4740"
    });
    $.__views.__alloyId4740 && $.addTopLevelView($.__views.__alloyId4740);
    $.__views.__alloyId4741 = Ti.UI.createView({
        id: "__alloyId4741"
    });
    $.__views.__alloyId4740.add($.__views.__alloyId4741);
    $.__views.__alloyId4742 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4742"
    });
    $.__views.__alloyId4741.add($.__views.__alloyId4742);
    $.__views.__alloyId4743 = Ti.UI.createView({
        id: "__alloyId4743"
    });
    $.__views.__alloyId4743 && $.addTopLevelView($.__views.__alloyId4743);
    $.__views.__alloyId4744 = Ti.UI.createView({
        id: "__alloyId4744"
    });
    $.__views.__alloyId4743.add($.__views.__alloyId4744);
    $.__views.__alloyId4745 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4745"
    });
    $.__views.__alloyId4744.add($.__views.__alloyId4745);
    $.__views.__alloyId4746 = Ti.UI.createView({
        id: "__alloyId4746"
    });
    $.__views.__alloyId4746 && $.addTopLevelView($.__views.__alloyId4746);
    $.__views.__alloyId4747 = Ti.UI.createView({
        id: "__alloyId4747"
    });
    $.__views.__alloyId4746.add($.__views.__alloyId4747);
    $.__views.__alloyId4748 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4748"
    });
    $.__views.__alloyId4747.add($.__views.__alloyId4748);
    $.__views.__alloyId4749 = Ti.UI.createView({
        id: "__alloyId4749"
    });
    $.__views.__alloyId4749 && $.addTopLevelView($.__views.__alloyId4749);
    $.__views.__alloyId4750 = Ti.UI.createView({
        id: "__alloyId4750"
    });
    $.__views.__alloyId4749.add($.__views.__alloyId4750);
    $.__views.__alloyId4751 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4751"
    });
    $.__views.__alloyId4750.add($.__views.__alloyId4751);
    $.__views.__alloyId4752 = Ti.UI.createView({
        id: "__alloyId4752"
    });
    $.__views.__alloyId4752 && $.addTopLevelView($.__views.__alloyId4752);
    $.__views.__alloyId4753 = Ti.UI.createView({
        id: "__alloyId4753"
    });
    $.__views.__alloyId4752.add($.__views.__alloyId4753);
    $.__views.__alloyId4754 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4754"
    });
    $.__views.__alloyId4753.add($.__views.__alloyId4754);
    $.__views.__alloyId4755 = Ti.UI.createView({
        id: "__alloyId4755"
    });
    $.__views.__alloyId4755 && $.addTopLevelView($.__views.__alloyId4755);
    $.__views.__alloyId4756 = Ti.UI.createView({
        id: "__alloyId4756"
    });
    $.__views.__alloyId4755.add($.__views.__alloyId4756);
    $.__views.__alloyId4757 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4757"
    });
    $.__views.__alloyId4756.add($.__views.__alloyId4757);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;