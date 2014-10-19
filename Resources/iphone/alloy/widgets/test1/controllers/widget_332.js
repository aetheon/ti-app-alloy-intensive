function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_332";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_332 = Ti.UI.createView({
        id: "widget_332"
    });
    $.__views.widget_332 && $.addTopLevelView($.__views.widget_332);
    $.__views.__alloyId6786 = Ti.UI.createView({
        id: "__alloyId6786"
    });
    $.__views.widget_332.add($.__views.__alloyId6786);
    $.__views.__alloyId6787 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6787"
    });
    $.__views.__alloyId6786.add($.__views.__alloyId6787);
    $.__views.__alloyId6788 = Ti.UI.createView({
        id: "__alloyId6788"
    });
    $.__views.__alloyId6788 && $.addTopLevelView($.__views.__alloyId6788);
    $.__views.__alloyId6789 = Ti.UI.createView({
        id: "__alloyId6789"
    });
    $.__views.__alloyId6788.add($.__views.__alloyId6789);
    $.__views.__alloyId6790 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6790"
    });
    $.__views.__alloyId6789.add($.__views.__alloyId6790);
    $.__views.__alloyId6791 = Ti.UI.createView({
        id: "__alloyId6791"
    });
    $.__views.__alloyId6791 && $.addTopLevelView($.__views.__alloyId6791);
    $.__views.__alloyId6792 = Ti.UI.createView({
        id: "__alloyId6792"
    });
    $.__views.__alloyId6791.add($.__views.__alloyId6792);
    $.__views.__alloyId6793 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6793"
    });
    $.__views.__alloyId6792.add($.__views.__alloyId6793);
    $.__views.__alloyId6794 = Ti.UI.createView({
        id: "__alloyId6794"
    });
    $.__views.__alloyId6794 && $.addTopLevelView($.__views.__alloyId6794);
    $.__views.__alloyId6795 = Ti.UI.createView({
        id: "__alloyId6795"
    });
    $.__views.__alloyId6794.add($.__views.__alloyId6795);
    $.__views.__alloyId6796 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6796"
    });
    $.__views.__alloyId6795.add($.__views.__alloyId6796);
    $.__views.__alloyId6797 = Ti.UI.createView({
        id: "__alloyId6797"
    });
    $.__views.__alloyId6797 && $.addTopLevelView($.__views.__alloyId6797);
    $.__views.__alloyId6798 = Ti.UI.createView({
        id: "__alloyId6798"
    });
    $.__views.__alloyId6797.add($.__views.__alloyId6798);
    $.__views.__alloyId6799 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6799"
    });
    $.__views.__alloyId6798.add($.__views.__alloyId6799);
    $.__views.__alloyId6800 = Ti.UI.createView({
        id: "__alloyId6800"
    });
    $.__views.__alloyId6800 && $.addTopLevelView($.__views.__alloyId6800);
    $.__views.__alloyId6801 = Ti.UI.createView({
        id: "__alloyId6801"
    });
    $.__views.__alloyId6800.add($.__views.__alloyId6801);
    $.__views.__alloyId6802 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6802"
    });
    $.__views.__alloyId6801.add($.__views.__alloyId6802);
    $.__views.__alloyId6803 = Ti.UI.createView({
        id: "__alloyId6803"
    });
    $.__views.__alloyId6803 && $.addTopLevelView($.__views.__alloyId6803);
    $.__views.__alloyId6804 = Ti.UI.createView({
        id: "__alloyId6804"
    });
    $.__views.__alloyId6803.add($.__views.__alloyId6804);
    $.__views.__alloyId6805 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6805"
    });
    $.__views.__alloyId6804.add($.__views.__alloyId6805);
    $.__views.__alloyId6806 = Ti.UI.createView({
        id: "__alloyId6806"
    });
    $.__views.__alloyId6806 && $.addTopLevelView($.__views.__alloyId6806);
    $.__views.__alloyId6807 = Ti.UI.createView({
        id: "__alloyId6807"
    });
    $.__views.__alloyId6806.add($.__views.__alloyId6807);
    $.__views.__alloyId6808 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6808"
    });
    $.__views.__alloyId6807.add($.__views.__alloyId6808);
    $.__views.__alloyId6809 = Ti.UI.createView({
        id: "__alloyId6809"
    });
    $.__views.__alloyId6809 && $.addTopLevelView($.__views.__alloyId6809);
    $.__views.__alloyId6810 = Ti.UI.createView({
        id: "__alloyId6810"
    });
    $.__views.__alloyId6809.add($.__views.__alloyId6810);
    $.__views.__alloyId6811 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6811"
    });
    $.__views.__alloyId6810.add($.__views.__alloyId6811);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;