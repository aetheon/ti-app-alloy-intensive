function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_644";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_644 = Ti.UI.createView({
        id: "widget_644"
    });
    $.__views.widget_644 && $.addTopLevelView($.__views.widget_644);
    $.__views.__alloyId15782 = Ti.UI.createView({
        id: "__alloyId15782"
    });
    $.__views.widget_644.add($.__views.__alloyId15782);
    $.__views.__alloyId15783 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15783"
    });
    $.__views.__alloyId15782.add($.__views.__alloyId15783);
    $.__views.__alloyId15784 = Ti.UI.createView({
        id: "__alloyId15784"
    });
    $.__views.__alloyId15784 && $.addTopLevelView($.__views.__alloyId15784);
    $.__views.__alloyId15785 = Ti.UI.createView({
        id: "__alloyId15785"
    });
    $.__views.__alloyId15784.add($.__views.__alloyId15785);
    $.__views.__alloyId15786 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15786"
    });
    $.__views.__alloyId15785.add($.__views.__alloyId15786);
    $.__views.__alloyId15787 = Ti.UI.createView({
        id: "__alloyId15787"
    });
    $.__views.__alloyId15787 && $.addTopLevelView($.__views.__alloyId15787);
    $.__views.__alloyId15788 = Ti.UI.createView({
        id: "__alloyId15788"
    });
    $.__views.__alloyId15787.add($.__views.__alloyId15788);
    $.__views.__alloyId15789 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15789"
    });
    $.__views.__alloyId15788.add($.__views.__alloyId15789);
    $.__views.__alloyId15790 = Ti.UI.createView({
        id: "__alloyId15790"
    });
    $.__views.__alloyId15790 && $.addTopLevelView($.__views.__alloyId15790);
    $.__views.__alloyId15791 = Ti.UI.createView({
        id: "__alloyId15791"
    });
    $.__views.__alloyId15790.add($.__views.__alloyId15791);
    $.__views.__alloyId15792 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15792"
    });
    $.__views.__alloyId15791.add($.__views.__alloyId15792);
    $.__views.__alloyId15793 = Ti.UI.createView({
        id: "__alloyId15793"
    });
    $.__views.__alloyId15793 && $.addTopLevelView($.__views.__alloyId15793);
    $.__views.__alloyId15794 = Ti.UI.createView({
        id: "__alloyId15794"
    });
    $.__views.__alloyId15793.add($.__views.__alloyId15794);
    $.__views.__alloyId15795 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15795"
    });
    $.__views.__alloyId15794.add($.__views.__alloyId15795);
    $.__views.__alloyId15796 = Ti.UI.createView({
        id: "__alloyId15796"
    });
    $.__views.__alloyId15796 && $.addTopLevelView($.__views.__alloyId15796);
    $.__views.__alloyId15797 = Ti.UI.createView({
        id: "__alloyId15797"
    });
    $.__views.__alloyId15796.add($.__views.__alloyId15797);
    $.__views.__alloyId15798 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15798"
    });
    $.__views.__alloyId15797.add($.__views.__alloyId15798);
    $.__views.__alloyId15799 = Ti.UI.createView({
        id: "__alloyId15799"
    });
    $.__views.__alloyId15799 && $.addTopLevelView($.__views.__alloyId15799);
    $.__views.__alloyId15800 = Ti.UI.createView({
        id: "__alloyId15800"
    });
    $.__views.__alloyId15799.add($.__views.__alloyId15800);
    $.__views.__alloyId15801 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15801"
    });
    $.__views.__alloyId15800.add($.__views.__alloyId15801);
    $.__views.__alloyId15802 = Ti.UI.createView({
        id: "__alloyId15802"
    });
    $.__views.__alloyId15802 && $.addTopLevelView($.__views.__alloyId15802);
    $.__views.__alloyId15803 = Ti.UI.createView({
        id: "__alloyId15803"
    });
    $.__views.__alloyId15802.add($.__views.__alloyId15803);
    $.__views.__alloyId15804 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15804"
    });
    $.__views.__alloyId15803.add($.__views.__alloyId15804);
    $.__views.__alloyId15805 = Ti.UI.createView({
        id: "__alloyId15805"
    });
    $.__views.__alloyId15805 && $.addTopLevelView($.__views.__alloyId15805);
    $.__views.__alloyId15806 = Ti.UI.createView({
        id: "__alloyId15806"
    });
    $.__views.__alloyId15805.add($.__views.__alloyId15806);
    $.__views.__alloyId15807 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15807"
    });
    $.__views.__alloyId15806.add($.__views.__alloyId15807);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;