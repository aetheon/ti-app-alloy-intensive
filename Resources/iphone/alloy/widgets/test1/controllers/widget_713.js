function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_713";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_713 = Ti.UI.createView({
        id: "widget_713"
    });
    $.__views.widget_713 && $.addTopLevelView($.__views.widget_713);
    $.__views.__alloyId17784 = Ti.UI.createView({
        id: "__alloyId17784"
    });
    $.__views.widget_713.add($.__views.__alloyId17784);
    $.__views.__alloyId17785 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17785"
    });
    $.__views.__alloyId17784.add($.__views.__alloyId17785);
    $.__views.__alloyId17786 = Ti.UI.createView({
        id: "__alloyId17786"
    });
    $.__views.__alloyId17786 && $.addTopLevelView($.__views.__alloyId17786);
    $.__views.__alloyId17787 = Ti.UI.createView({
        id: "__alloyId17787"
    });
    $.__views.__alloyId17786.add($.__views.__alloyId17787);
    $.__views.__alloyId17788 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17788"
    });
    $.__views.__alloyId17787.add($.__views.__alloyId17788);
    $.__views.__alloyId17789 = Ti.UI.createView({
        id: "__alloyId17789"
    });
    $.__views.__alloyId17789 && $.addTopLevelView($.__views.__alloyId17789);
    $.__views.__alloyId17790 = Ti.UI.createView({
        id: "__alloyId17790"
    });
    $.__views.__alloyId17789.add($.__views.__alloyId17790);
    $.__views.__alloyId17791 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17791"
    });
    $.__views.__alloyId17790.add($.__views.__alloyId17791);
    $.__views.__alloyId17792 = Ti.UI.createView({
        id: "__alloyId17792"
    });
    $.__views.__alloyId17792 && $.addTopLevelView($.__views.__alloyId17792);
    $.__views.__alloyId17793 = Ti.UI.createView({
        id: "__alloyId17793"
    });
    $.__views.__alloyId17792.add($.__views.__alloyId17793);
    $.__views.__alloyId17794 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17794"
    });
    $.__views.__alloyId17793.add($.__views.__alloyId17794);
    $.__views.__alloyId17795 = Ti.UI.createView({
        id: "__alloyId17795"
    });
    $.__views.__alloyId17795 && $.addTopLevelView($.__views.__alloyId17795);
    $.__views.__alloyId17796 = Ti.UI.createView({
        id: "__alloyId17796"
    });
    $.__views.__alloyId17795.add($.__views.__alloyId17796);
    $.__views.__alloyId17797 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17797"
    });
    $.__views.__alloyId17796.add($.__views.__alloyId17797);
    $.__views.__alloyId17798 = Ti.UI.createView({
        id: "__alloyId17798"
    });
    $.__views.__alloyId17798 && $.addTopLevelView($.__views.__alloyId17798);
    $.__views.__alloyId17799 = Ti.UI.createView({
        id: "__alloyId17799"
    });
    $.__views.__alloyId17798.add($.__views.__alloyId17799);
    $.__views.__alloyId17800 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17800"
    });
    $.__views.__alloyId17799.add($.__views.__alloyId17800);
    $.__views.__alloyId17801 = Ti.UI.createView({
        id: "__alloyId17801"
    });
    $.__views.__alloyId17801 && $.addTopLevelView($.__views.__alloyId17801);
    $.__views.__alloyId17802 = Ti.UI.createView({
        id: "__alloyId17802"
    });
    $.__views.__alloyId17801.add($.__views.__alloyId17802);
    $.__views.__alloyId17803 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17803"
    });
    $.__views.__alloyId17802.add($.__views.__alloyId17803);
    $.__views.__alloyId17804 = Ti.UI.createView({
        id: "__alloyId17804"
    });
    $.__views.__alloyId17804 && $.addTopLevelView($.__views.__alloyId17804);
    $.__views.__alloyId17805 = Ti.UI.createView({
        id: "__alloyId17805"
    });
    $.__views.__alloyId17804.add($.__views.__alloyId17805);
    $.__views.__alloyId17806 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17806"
    });
    $.__views.__alloyId17805.add($.__views.__alloyId17806);
    $.__views.__alloyId17807 = Ti.UI.createView({
        id: "__alloyId17807"
    });
    $.__views.__alloyId17807 && $.addTopLevelView($.__views.__alloyId17807);
    $.__views.__alloyId17808 = Ti.UI.createView({
        id: "__alloyId17808"
    });
    $.__views.__alloyId17807.add($.__views.__alloyId17808);
    $.__views.__alloyId17809 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17809"
    });
    $.__views.__alloyId17808.add($.__views.__alloyId17809);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;