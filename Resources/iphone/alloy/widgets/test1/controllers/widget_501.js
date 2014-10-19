function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_501";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_501 = Ti.UI.createView({
        id: "widget_501"
    });
    $.__views.widget_501 && $.addTopLevelView($.__views.widget_501);
    $.__views.__alloyId11674 = Ti.UI.createView({
        id: "__alloyId11674"
    });
    $.__views.widget_501.add($.__views.__alloyId11674);
    $.__views.__alloyId11675 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11675"
    });
    $.__views.__alloyId11674.add($.__views.__alloyId11675);
    $.__views.__alloyId11676 = Ti.UI.createView({
        id: "__alloyId11676"
    });
    $.__views.__alloyId11676 && $.addTopLevelView($.__views.__alloyId11676);
    $.__views.__alloyId11677 = Ti.UI.createView({
        id: "__alloyId11677"
    });
    $.__views.__alloyId11676.add($.__views.__alloyId11677);
    $.__views.__alloyId11678 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11678"
    });
    $.__views.__alloyId11677.add($.__views.__alloyId11678);
    $.__views.__alloyId11679 = Ti.UI.createView({
        id: "__alloyId11679"
    });
    $.__views.__alloyId11679 && $.addTopLevelView($.__views.__alloyId11679);
    $.__views.__alloyId11680 = Ti.UI.createView({
        id: "__alloyId11680"
    });
    $.__views.__alloyId11679.add($.__views.__alloyId11680);
    $.__views.__alloyId11681 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11681"
    });
    $.__views.__alloyId11680.add($.__views.__alloyId11681);
    $.__views.__alloyId11682 = Ti.UI.createView({
        id: "__alloyId11682"
    });
    $.__views.__alloyId11682 && $.addTopLevelView($.__views.__alloyId11682);
    $.__views.__alloyId11683 = Ti.UI.createView({
        id: "__alloyId11683"
    });
    $.__views.__alloyId11682.add($.__views.__alloyId11683);
    $.__views.__alloyId11684 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11684"
    });
    $.__views.__alloyId11683.add($.__views.__alloyId11684);
    $.__views.__alloyId11685 = Ti.UI.createView({
        id: "__alloyId11685"
    });
    $.__views.__alloyId11685 && $.addTopLevelView($.__views.__alloyId11685);
    $.__views.__alloyId11686 = Ti.UI.createView({
        id: "__alloyId11686"
    });
    $.__views.__alloyId11685.add($.__views.__alloyId11686);
    $.__views.__alloyId11687 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11687"
    });
    $.__views.__alloyId11686.add($.__views.__alloyId11687);
    $.__views.__alloyId11688 = Ti.UI.createView({
        id: "__alloyId11688"
    });
    $.__views.__alloyId11688 && $.addTopLevelView($.__views.__alloyId11688);
    $.__views.__alloyId11689 = Ti.UI.createView({
        id: "__alloyId11689"
    });
    $.__views.__alloyId11688.add($.__views.__alloyId11689);
    $.__views.__alloyId11690 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11690"
    });
    $.__views.__alloyId11689.add($.__views.__alloyId11690);
    $.__views.__alloyId11691 = Ti.UI.createView({
        id: "__alloyId11691"
    });
    $.__views.__alloyId11691 && $.addTopLevelView($.__views.__alloyId11691);
    $.__views.__alloyId11692 = Ti.UI.createView({
        id: "__alloyId11692"
    });
    $.__views.__alloyId11691.add($.__views.__alloyId11692);
    $.__views.__alloyId11693 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11693"
    });
    $.__views.__alloyId11692.add($.__views.__alloyId11693);
    $.__views.__alloyId11694 = Ti.UI.createView({
        id: "__alloyId11694"
    });
    $.__views.__alloyId11694 && $.addTopLevelView($.__views.__alloyId11694);
    $.__views.__alloyId11695 = Ti.UI.createView({
        id: "__alloyId11695"
    });
    $.__views.__alloyId11694.add($.__views.__alloyId11695);
    $.__views.__alloyId11696 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11696"
    });
    $.__views.__alloyId11695.add($.__views.__alloyId11696);
    $.__views.__alloyId11697 = Ti.UI.createView({
        id: "__alloyId11697"
    });
    $.__views.__alloyId11697 && $.addTopLevelView($.__views.__alloyId11697);
    $.__views.__alloyId11698 = Ti.UI.createView({
        id: "__alloyId11698"
    });
    $.__views.__alloyId11697.add($.__views.__alloyId11698);
    $.__views.__alloyId11699 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11699"
    });
    $.__views.__alloyId11698.add($.__views.__alloyId11699);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;