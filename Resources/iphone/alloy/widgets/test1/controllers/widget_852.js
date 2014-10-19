function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_852";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_852 = Ti.UI.createView({
        id: "widget_852"
    });
    $.__views.widget_852 && $.addTopLevelView($.__views.widget_852);
    $.__views.__alloyId21788 = Ti.UI.createView({
        id: "__alloyId21788"
    });
    $.__views.widget_852.add($.__views.__alloyId21788);
    $.__views.__alloyId21789 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21789"
    });
    $.__views.__alloyId21788.add($.__views.__alloyId21789);
    $.__views.__alloyId21790 = Ti.UI.createView({
        id: "__alloyId21790"
    });
    $.__views.__alloyId21790 && $.addTopLevelView($.__views.__alloyId21790);
    $.__views.__alloyId21791 = Ti.UI.createView({
        id: "__alloyId21791"
    });
    $.__views.__alloyId21790.add($.__views.__alloyId21791);
    $.__views.__alloyId21792 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21792"
    });
    $.__views.__alloyId21791.add($.__views.__alloyId21792);
    $.__views.__alloyId21793 = Ti.UI.createView({
        id: "__alloyId21793"
    });
    $.__views.__alloyId21793 && $.addTopLevelView($.__views.__alloyId21793);
    $.__views.__alloyId21794 = Ti.UI.createView({
        id: "__alloyId21794"
    });
    $.__views.__alloyId21793.add($.__views.__alloyId21794);
    $.__views.__alloyId21795 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21795"
    });
    $.__views.__alloyId21794.add($.__views.__alloyId21795);
    $.__views.__alloyId21796 = Ti.UI.createView({
        id: "__alloyId21796"
    });
    $.__views.__alloyId21796 && $.addTopLevelView($.__views.__alloyId21796);
    $.__views.__alloyId21797 = Ti.UI.createView({
        id: "__alloyId21797"
    });
    $.__views.__alloyId21796.add($.__views.__alloyId21797);
    $.__views.__alloyId21798 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21798"
    });
    $.__views.__alloyId21797.add($.__views.__alloyId21798);
    $.__views.__alloyId21799 = Ti.UI.createView({
        id: "__alloyId21799"
    });
    $.__views.__alloyId21799 && $.addTopLevelView($.__views.__alloyId21799);
    $.__views.__alloyId21800 = Ti.UI.createView({
        id: "__alloyId21800"
    });
    $.__views.__alloyId21799.add($.__views.__alloyId21800);
    $.__views.__alloyId21801 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21801"
    });
    $.__views.__alloyId21800.add($.__views.__alloyId21801);
    $.__views.__alloyId21802 = Ti.UI.createView({
        id: "__alloyId21802"
    });
    $.__views.__alloyId21802 && $.addTopLevelView($.__views.__alloyId21802);
    $.__views.__alloyId21803 = Ti.UI.createView({
        id: "__alloyId21803"
    });
    $.__views.__alloyId21802.add($.__views.__alloyId21803);
    $.__views.__alloyId21804 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21804"
    });
    $.__views.__alloyId21803.add($.__views.__alloyId21804);
    $.__views.__alloyId21805 = Ti.UI.createView({
        id: "__alloyId21805"
    });
    $.__views.__alloyId21805 && $.addTopLevelView($.__views.__alloyId21805);
    $.__views.__alloyId21806 = Ti.UI.createView({
        id: "__alloyId21806"
    });
    $.__views.__alloyId21805.add($.__views.__alloyId21806);
    $.__views.__alloyId21807 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21807"
    });
    $.__views.__alloyId21806.add($.__views.__alloyId21807);
    $.__views.__alloyId21808 = Ti.UI.createView({
        id: "__alloyId21808"
    });
    $.__views.__alloyId21808 && $.addTopLevelView($.__views.__alloyId21808);
    $.__views.__alloyId21809 = Ti.UI.createView({
        id: "__alloyId21809"
    });
    $.__views.__alloyId21808.add($.__views.__alloyId21809);
    $.__views.__alloyId21810 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21810"
    });
    $.__views.__alloyId21809.add($.__views.__alloyId21810);
    $.__views.__alloyId21811 = Ti.UI.createView({
        id: "__alloyId21811"
    });
    $.__views.__alloyId21811 && $.addTopLevelView($.__views.__alloyId21811);
    $.__views.__alloyId21812 = Ti.UI.createView({
        id: "__alloyId21812"
    });
    $.__views.__alloyId21811.add($.__views.__alloyId21812);
    $.__views.__alloyId21813 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21813"
    });
    $.__views.__alloyId21812.add($.__views.__alloyId21813);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;