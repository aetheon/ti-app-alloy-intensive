function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_887";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_887 = Ti.UI.createView({
        id: "widget_887"
    });
    $.__views.widget_887 && $.addTopLevelView($.__views.widget_887);
    $.__views.__alloyId22776 = Ti.UI.createView({
        id: "__alloyId22776"
    });
    $.__views.widget_887.add($.__views.__alloyId22776);
    $.__views.__alloyId22777 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22777"
    });
    $.__views.__alloyId22776.add($.__views.__alloyId22777);
    $.__views.__alloyId22778 = Ti.UI.createView({
        id: "__alloyId22778"
    });
    $.__views.__alloyId22778 && $.addTopLevelView($.__views.__alloyId22778);
    $.__views.__alloyId22779 = Ti.UI.createView({
        id: "__alloyId22779"
    });
    $.__views.__alloyId22778.add($.__views.__alloyId22779);
    $.__views.__alloyId22780 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22780"
    });
    $.__views.__alloyId22779.add($.__views.__alloyId22780);
    $.__views.__alloyId22781 = Ti.UI.createView({
        id: "__alloyId22781"
    });
    $.__views.__alloyId22781 && $.addTopLevelView($.__views.__alloyId22781);
    $.__views.__alloyId22782 = Ti.UI.createView({
        id: "__alloyId22782"
    });
    $.__views.__alloyId22781.add($.__views.__alloyId22782);
    $.__views.__alloyId22783 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22783"
    });
    $.__views.__alloyId22782.add($.__views.__alloyId22783);
    $.__views.__alloyId22784 = Ti.UI.createView({
        id: "__alloyId22784"
    });
    $.__views.__alloyId22784 && $.addTopLevelView($.__views.__alloyId22784);
    $.__views.__alloyId22785 = Ti.UI.createView({
        id: "__alloyId22785"
    });
    $.__views.__alloyId22784.add($.__views.__alloyId22785);
    $.__views.__alloyId22786 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22786"
    });
    $.__views.__alloyId22785.add($.__views.__alloyId22786);
    $.__views.__alloyId22787 = Ti.UI.createView({
        id: "__alloyId22787"
    });
    $.__views.__alloyId22787 && $.addTopLevelView($.__views.__alloyId22787);
    $.__views.__alloyId22788 = Ti.UI.createView({
        id: "__alloyId22788"
    });
    $.__views.__alloyId22787.add($.__views.__alloyId22788);
    $.__views.__alloyId22789 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22789"
    });
    $.__views.__alloyId22788.add($.__views.__alloyId22789);
    $.__views.__alloyId22790 = Ti.UI.createView({
        id: "__alloyId22790"
    });
    $.__views.__alloyId22790 && $.addTopLevelView($.__views.__alloyId22790);
    $.__views.__alloyId22791 = Ti.UI.createView({
        id: "__alloyId22791"
    });
    $.__views.__alloyId22790.add($.__views.__alloyId22791);
    $.__views.__alloyId22792 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22792"
    });
    $.__views.__alloyId22791.add($.__views.__alloyId22792);
    $.__views.__alloyId22793 = Ti.UI.createView({
        id: "__alloyId22793"
    });
    $.__views.__alloyId22793 && $.addTopLevelView($.__views.__alloyId22793);
    $.__views.__alloyId22794 = Ti.UI.createView({
        id: "__alloyId22794"
    });
    $.__views.__alloyId22793.add($.__views.__alloyId22794);
    $.__views.__alloyId22795 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22795"
    });
    $.__views.__alloyId22794.add($.__views.__alloyId22795);
    $.__views.__alloyId22796 = Ti.UI.createView({
        id: "__alloyId22796"
    });
    $.__views.__alloyId22796 && $.addTopLevelView($.__views.__alloyId22796);
    $.__views.__alloyId22797 = Ti.UI.createView({
        id: "__alloyId22797"
    });
    $.__views.__alloyId22796.add($.__views.__alloyId22797);
    $.__views.__alloyId22798 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22798"
    });
    $.__views.__alloyId22797.add($.__views.__alloyId22798);
    $.__views.__alloyId22799 = Ti.UI.createView({
        id: "__alloyId22799"
    });
    $.__views.__alloyId22799 && $.addTopLevelView($.__views.__alloyId22799);
    $.__views.__alloyId22800 = Ti.UI.createView({
        id: "__alloyId22800"
    });
    $.__views.__alloyId22799.add($.__views.__alloyId22800);
    $.__views.__alloyId22801 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22801"
    });
    $.__views.__alloyId22800.add($.__views.__alloyId22801);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;