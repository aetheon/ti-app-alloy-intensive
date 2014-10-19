function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_922";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_922 = Ti.UI.createView({
        id: "widget_922"
    });
    $.__views.widget_922 && $.addTopLevelView($.__views.widget_922);
    $.__views.__alloyId23816 = Ti.UI.createView({
        id: "__alloyId23816"
    });
    $.__views.widget_922.add($.__views.__alloyId23816);
    $.__views.__alloyId23817 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23817"
    });
    $.__views.__alloyId23816.add($.__views.__alloyId23817);
    $.__views.__alloyId23818 = Ti.UI.createView({
        id: "__alloyId23818"
    });
    $.__views.__alloyId23818 && $.addTopLevelView($.__views.__alloyId23818);
    $.__views.__alloyId23819 = Ti.UI.createView({
        id: "__alloyId23819"
    });
    $.__views.__alloyId23818.add($.__views.__alloyId23819);
    $.__views.__alloyId23820 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23820"
    });
    $.__views.__alloyId23819.add($.__views.__alloyId23820);
    $.__views.__alloyId23821 = Ti.UI.createView({
        id: "__alloyId23821"
    });
    $.__views.__alloyId23821 && $.addTopLevelView($.__views.__alloyId23821);
    $.__views.__alloyId23822 = Ti.UI.createView({
        id: "__alloyId23822"
    });
    $.__views.__alloyId23821.add($.__views.__alloyId23822);
    $.__views.__alloyId23823 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23823"
    });
    $.__views.__alloyId23822.add($.__views.__alloyId23823);
    $.__views.__alloyId23824 = Ti.UI.createView({
        id: "__alloyId23824"
    });
    $.__views.__alloyId23824 && $.addTopLevelView($.__views.__alloyId23824);
    $.__views.__alloyId23825 = Ti.UI.createView({
        id: "__alloyId23825"
    });
    $.__views.__alloyId23824.add($.__views.__alloyId23825);
    $.__views.__alloyId23826 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23826"
    });
    $.__views.__alloyId23825.add($.__views.__alloyId23826);
    $.__views.__alloyId23827 = Ti.UI.createView({
        id: "__alloyId23827"
    });
    $.__views.__alloyId23827 && $.addTopLevelView($.__views.__alloyId23827);
    $.__views.__alloyId23828 = Ti.UI.createView({
        id: "__alloyId23828"
    });
    $.__views.__alloyId23827.add($.__views.__alloyId23828);
    $.__views.__alloyId23829 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23829"
    });
    $.__views.__alloyId23828.add($.__views.__alloyId23829);
    $.__views.__alloyId23830 = Ti.UI.createView({
        id: "__alloyId23830"
    });
    $.__views.__alloyId23830 && $.addTopLevelView($.__views.__alloyId23830);
    $.__views.__alloyId23831 = Ti.UI.createView({
        id: "__alloyId23831"
    });
    $.__views.__alloyId23830.add($.__views.__alloyId23831);
    $.__views.__alloyId23832 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23832"
    });
    $.__views.__alloyId23831.add($.__views.__alloyId23832);
    $.__views.__alloyId23833 = Ti.UI.createView({
        id: "__alloyId23833"
    });
    $.__views.__alloyId23833 && $.addTopLevelView($.__views.__alloyId23833);
    $.__views.__alloyId23834 = Ti.UI.createView({
        id: "__alloyId23834"
    });
    $.__views.__alloyId23833.add($.__views.__alloyId23834);
    $.__views.__alloyId23835 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23835"
    });
    $.__views.__alloyId23834.add($.__views.__alloyId23835);
    $.__views.__alloyId23836 = Ti.UI.createView({
        id: "__alloyId23836"
    });
    $.__views.__alloyId23836 && $.addTopLevelView($.__views.__alloyId23836);
    $.__views.__alloyId23837 = Ti.UI.createView({
        id: "__alloyId23837"
    });
    $.__views.__alloyId23836.add($.__views.__alloyId23837);
    $.__views.__alloyId23838 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23838"
    });
    $.__views.__alloyId23837.add($.__views.__alloyId23838);
    $.__views.__alloyId23839 = Ti.UI.createView({
        id: "__alloyId23839"
    });
    $.__views.__alloyId23839 && $.addTopLevelView($.__views.__alloyId23839);
    $.__views.__alloyId23840 = Ti.UI.createView({
        id: "__alloyId23840"
    });
    $.__views.__alloyId23839.add($.__views.__alloyId23840);
    $.__views.__alloyId23841 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23841"
    });
    $.__views.__alloyId23840.add($.__views.__alloyId23841);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;