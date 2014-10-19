function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_333";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_333 = Ti.UI.createView({
        id: "widget_333"
    });
    $.__views.widget_333 && $.addTopLevelView($.__views.widget_333);
    $.__views.__alloyId6812 = Ti.UI.createView({
        id: "__alloyId6812"
    });
    $.__views.widget_333.add($.__views.__alloyId6812);
    $.__views.__alloyId6813 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6813"
    });
    $.__views.__alloyId6812.add($.__views.__alloyId6813);
    $.__views.__alloyId6814 = Ti.UI.createView({
        id: "__alloyId6814"
    });
    $.__views.__alloyId6814 && $.addTopLevelView($.__views.__alloyId6814);
    $.__views.__alloyId6815 = Ti.UI.createView({
        id: "__alloyId6815"
    });
    $.__views.__alloyId6814.add($.__views.__alloyId6815);
    $.__views.__alloyId6816 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6816"
    });
    $.__views.__alloyId6815.add($.__views.__alloyId6816);
    $.__views.__alloyId6817 = Ti.UI.createView({
        id: "__alloyId6817"
    });
    $.__views.__alloyId6817 && $.addTopLevelView($.__views.__alloyId6817);
    $.__views.__alloyId6818 = Ti.UI.createView({
        id: "__alloyId6818"
    });
    $.__views.__alloyId6817.add($.__views.__alloyId6818);
    $.__views.__alloyId6819 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6819"
    });
    $.__views.__alloyId6818.add($.__views.__alloyId6819);
    $.__views.__alloyId6820 = Ti.UI.createView({
        id: "__alloyId6820"
    });
    $.__views.__alloyId6820 && $.addTopLevelView($.__views.__alloyId6820);
    $.__views.__alloyId6821 = Ti.UI.createView({
        id: "__alloyId6821"
    });
    $.__views.__alloyId6820.add($.__views.__alloyId6821);
    $.__views.__alloyId6822 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6822"
    });
    $.__views.__alloyId6821.add($.__views.__alloyId6822);
    $.__views.__alloyId6823 = Ti.UI.createView({
        id: "__alloyId6823"
    });
    $.__views.__alloyId6823 && $.addTopLevelView($.__views.__alloyId6823);
    $.__views.__alloyId6824 = Ti.UI.createView({
        id: "__alloyId6824"
    });
    $.__views.__alloyId6823.add($.__views.__alloyId6824);
    $.__views.__alloyId6825 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6825"
    });
    $.__views.__alloyId6824.add($.__views.__alloyId6825);
    $.__views.__alloyId6826 = Ti.UI.createView({
        id: "__alloyId6826"
    });
    $.__views.__alloyId6826 && $.addTopLevelView($.__views.__alloyId6826);
    $.__views.__alloyId6827 = Ti.UI.createView({
        id: "__alloyId6827"
    });
    $.__views.__alloyId6826.add($.__views.__alloyId6827);
    $.__views.__alloyId6828 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6828"
    });
    $.__views.__alloyId6827.add($.__views.__alloyId6828);
    $.__views.__alloyId6829 = Ti.UI.createView({
        id: "__alloyId6829"
    });
    $.__views.__alloyId6829 && $.addTopLevelView($.__views.__alloyId6829);
    $.__views.__alloyId6830 = Ti.UI.createView({
        id: "__alloyId6830"
    });
    $.__views.__alloyId6829.add($.__views.__alloyId6830);
    $.__views.__alloyId6831 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6831"
    });
    $.__views.__alloyId6830.add($.__views.__alloyId6831);
    $.__views.__alloyId6832 = Ti.UI.createView({
        id: "__alloyId6832"
    });
    $.__views.__alloyId6832 && $.addTopLevelView($.__views.__alloyId6832);
    $.__views.__alloyId6833 = Ti.UI.createView({
        id: "__alloyId6833"
    });
    $.__views.__alloyId6832.add($.__views.__alloyId6833);
    $.__views.__alloyId6834 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6834"
    });
    $.__views.__alloyId6833.add($.__views.__alloyId6834);
    $.__views.__alloyId6835 = Ti.UI.createView({
        id: "__alloyId6835"
    });
    $.__views.__alloyId6835 && $.addTopLevelView($.__views.__alloyId6835);
    $.__views.__alloyId6836 = Ti.UI.createView({
        id: "__alloyId6836"
    });
    $.__views.__alloyId6835.add($.__views.__alloyId6836);
    $.__views.__alloyId6837 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6837"
    });
    $.__views.__alloyId6836.add($.__views.__alloyId6837);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;