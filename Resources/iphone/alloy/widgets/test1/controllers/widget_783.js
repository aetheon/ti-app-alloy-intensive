function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_783";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_783 = Ti.UI.createView({
        id: "widget_783"
    });
    $.__views.widget_783 && $.addTopLevelView($.__views.widget_783);
    $.__views.__alloyId19786 = Ti.UI.createView({
        id: "__alloyId19786"
    });
    $.__views.widget_783.add($.__views.__alloyId19786);
    $.__views.__alloyId19787 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19787"
    });
    $.__views.__alloyId19786.add($.__views.__alloyId19787);
    $.__views.__alloyId19788 = Ti.UI.createView({
        id: "__alloyId19788"
    });
    $.__views.__alloyId19788 && $.addTopLevelView($.__views.__alloyId19788);
    $.__views.__alloyId19789 = Ti.UI.createView({
        id: "__alloyId19789"
    });
    $.__views.__alloyId19788.add($.__views.__alloyId19789);
    $.__views.__alloyId19790 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19790"
    });
    $.__views.__alloyId19789.add($.__views.__alloyId19790);
    $.__views.__alloyId19791 = Ti.UI.createView({
        id: "__alloyId19791"
    });
    $.__views.__alloyId19791 && $.addTopLevelView($.__views.__alloyId19791);
    $.__views.__alloyId19792 = Ti.UI.createView({
        id: "__alloyId19792"
    });
    $.__views.__alloyId19791.add($.__views.__alloyId19792);
    $.__views.__alloyId19793 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19793"
    });
    $.__views.__alloyId19792.add($.__views.__alloyId19793);
    $.__views.__alloyId19794 = Ti.UI.createView({
        id: "__alloyId19794"
    });
    $.__views.__alloyId19794 && $.addTopLevelView($.__views.__alloyId19794);
    $.__views.__alloyId19795 = Ti.UI.createView({
        id: "__alloyId19795"
    });
    $.__views.__alloyId19794.add($.__views.__alloyId19795);
    $.__views.__alloyId19796 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19796"
    });
    $.__views.__alloyId19795.add($.__views.__alloyId19796);
    $.__views.__alloyId19797 = Ti.UI.createView({
        id: "__alloyId19797"
    });
    $.__views.__alloyId19797 && $.addTopLevelView($.__views.__alloyId19797);
    $.__views.__alloyId19798 = Ti.UI.createView({
        id: "__alloyId19798"
    });
    $.__views.__alloyId19797.add($.__views.__alloyId19798);
    $.__views.__alloyId19799 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19799"
    });
    $.__views.__alloyId19798.add($.__views.__alloyId19799);
    $.__views.__alloyId19800 = Ti.UI.createView({
        id: "__alloyId19800"
    });
    $.__views.__alloyId19800 && $.addTopLevelView($.__views.__alloyId19800);
    $.__views.__alloyId19801 = Ti.UI.createView({
        id: "__alloyId19801"
    });
    $.__views.__alloyId19800.add($.__views.__alloyId19801);
    $.__views.__alloyId19802 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19802"
    });
    $.__views.__alloyId19801.add($.__views.__alloyId19802);
    $.__views.__alloyId19803 = Ti.UI.createView({
        id: "__alloyId19803"
    });
    $.__views.__alloyId19803 && $.addTopLevelView($.__views.__alloyId19803);
    $.__views.__alloyId19804 = Ti.UI.createView({
        id: "__alloyId19804"
    });
    $.__views.__alloyId19803.add($.__views.__alloyId19804);
    $.__views.__alloyId19805 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19805"
    });
    $.__views.__alloyId19804.add($.__views.__alloyId19805);
    $.__views.__alloyId19806 = Ti.UI.createView({
        id: "__alloyId19806"
    });
    $.__views.__alloyId19806 && $.addTopLevelView($.__views.__alloyId19806);
    $.__views.__alloyId19807 = Ti.UI.createView({
        id: "__alloyId19807"
    });
    $.__views.__alloyId19806.add($.__views.__alloyId19807);
    $.__views.__alloyId19808 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19808"
    });
    $.__views.__alloyId19807.add($.__views.__alloyId19808);
    $.__views.__alloyId19809 = Ti.UI.createView({
        id: "__alloyId19809"
    });
    $.__views.__alloyId19809 && $.addTopLevelView($.__views.__alloyId19809);
    $.__views.__alloyId19810 = Ti.UI.createView({
        id: "__alloyId19810"
    });
    $.__views.__alloyId19809.add($.__views.__alloyId19810);
    $.__views.__alloyId19811 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19811"
    });
    $.__views.__alloyId19810.add($.__views.__alloyId19811);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;