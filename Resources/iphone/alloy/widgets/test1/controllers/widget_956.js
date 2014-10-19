function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_956";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_956 = Ti.UI.createView({
        id: "widget_956"
    });
    $.__views.widget_956 && $.addTopLevelView($.__views.widget_956);
    $.__views.__alloyId24778 = Ti.UI.createView({
        id: "__alloyId24778"
    });
    $.__views.widget_956.add($.__views.__alloyId24778);
    $.__views.__alloyId24779 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24779"
    });
    $.__views.__alloyId24778.add($.__views.__alloyId24779);
    $.__views.__alloyId24780 = Ti.UI.createView({
        id: "__alloyId24780"
    });
    $.__views.__alloyId24780 && $.addTopLevelView($.__views.__alloyId24780);
    $.__views.__alloyId24781 = Ti.UI.createView({
        id: "__alloyId24781"
    });
    $.__views.__alloyId24780.add($.__views.__alloyId24781);
    $.__views.__alloyId24782 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24782"
    });
    $.__views.__alloyId24781.add($.__views.__alloyId24782);
    $.__views.__alloyId24783 = Ti.UI.createView({
        id: "__alloyId24783"
    });
    $.__views.__alloyId24783 && $.addTopLevelView($.__views.__alloyId24783);
    $.__views.__alloyId24784 = Ti.UI.createView({
        id: "__alloyId24784"
    });
    $.__views.__alloyId24783.add($.__views.__alloyId24784);
    $.__views.__alloyId24785 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24785"
    });
    $.__views.__alloyId24784.add($.__views.__alloyId24785);
    $.__views.__alloyId24786 = Ti.UI.createView({
        id: "__alloyId24786"
    });
    $.__views.__alloyId24786 && $.addTopLevelView($.__views.__alloyId24786);
    $.__views.__alloyId24787 = Ti.UI.createView({
        id: "__alloyId24787"
    });
    $.__views.__alloyId24786.add($.__views.__alloyId24787);
    $.__views.__alloyId24788 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24788"
    });
    $.__views.__alloyId24787.add($.__views.__alloyId24788);
    $.__views.__alloyId24789 = Ti.UI.createView({
        id: "__alloyId24789"
    });
    $.__views.__alloyId24789 && $.addTopLevelView($.__views.__alloyId24789);
    $.__views.__alloyId24790 = Ti.UI.createView({
        id: "__alloyId24790"
    });
    $.__views.__alloyId24789.add($.__views.__alloyId24790);
    $.__views.__alloyId24791 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24791"
    });
    $.__views.__alloyId24790.add($.__views.__alloyId24791);
    $.__views.__alloyId24792 = Ti.UI.createView({
        id: "__alloyId24792"
    });
    $.__views.__alloyId24792 && $.addTopLevelView($.__views.__alloyId24792);
    $.__views.__alloyId24793 = Ti.UI.createView({
        id: "__alloyId24793"
    });
    $.__views.__alloyId24792.add($.__views.__alloyId24793);
    $.__views.__alloyId24794 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24794"
    });
    $.__views.__alloyId24793.add($.__views.__alloyId24794);
    $.__views.__alloyId24795 = Ti.UI.createView({
        id: "__alloyId24795"
    });
    $.__views.__alloyId24795 && $.addTopLevelView($.__views.__alloyId24795);
    $.__views.__alloyId24796 = Ti.UI.createView({
        id: "__alloyId24796"
    });
    $.__views.__alloyId24795.add($.__views.__alloyId24796);
    $.__views.__alloyId24797 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24797"
    });
    $.__views.__alloyId24796.add($.__views.__alloyId24797);
    $.__views.__alloyId24798 = Ti.UI.createView({
        id: "__alloyId24798"
    });
    $.__views.__alloyId24798 && $.addTopLevelView($.__views.__alloyId24798);
    $.__views.__alloyId24799 = Ti.UI.createView({
        id: "__alloyId24799"
    });
    $.__views.__alloyId24798.add($.__views.__alloyId24799);
    $.__views.__alloyId24800 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24800"
    });
    $.__views.__alloyId24799.add($.__views.__alloyId24800);
    $.__views.__alloyId24801 = Ti.UI.createView({
        id: "__alloyId24801"
    });
    $.__views.__alloyId24801 && $.addTopLevelView($.__views.__alloyId24801);
    $.__views.__alloyId24802 = Ti.UI.createView({
        id: "__alloyId24802"
    });
    $.__views.__alloyId24801.add($.__views.__alloyId24802);
    $.__views.__alloyId24803 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24803"
    });
    $.__views.__alloyId24802.add($.__views.__alloyId24803);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;