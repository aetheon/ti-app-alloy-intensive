function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_197";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_197 = Ti.UI.createView({
        id: "widget_197"
    });
    $.__views.widget_197 && $.addTopLevelView($.__views.widget_197);
    $.__views.__alloyId2860 = Ti.UI.createView({
        id: "__alloyId2860"
    });
    $.__views.widget_197.add($.__views.__alloyId2860);
    $.__views.__alloyId2861 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2861"
    });
    $.__views.__alloyId2860.add($.__views.__alloyId2861);
    $.__views.__alloyId2862 = Ti.UI.createView({
        id: "__alloyId2862"
    });
    $.__views.__alloyId2862 && $.addTopLevelView($.__views.__alloyId2862);
    $.__views.__alloyId2863 = Ti.UI.createView({
        id: "__alloyId2863"
    });
    $.__views.__alloyId2862.add($.__views.__alloyId2863);
    $.__views.__alloyId2864 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2864"
    });
    $.__views.__alloyId2863.add($.__views.__alloyId2864);
    $.__views.__alloyId2865 = Ti.UI.createView({
        id: "__alloyId2865"
    });
    $.__views.__alloyId2865 && $.addTopLevelView($.__views.__alloyId2865);
    $.__views.__alloyId2866 = Ti.UI.createView({
        id: "__alloyId2866"
    });
    $.__views.__alloyId2865.add($.__views.__alloyId2866);
    $.__views.__alloyId2867 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2867"
    });
    $.__views.__alloyId2866.add($.__views.__alloyId2867);
    $.__views.__alloyId2868 = Ti.UI.createView({
        id: "__alloyId2868"
    });
    $.__views.__alloyId2868 && $.addTopLevelView($.__views.__alloyId2868);
    $.__views.__alloyId2869 = Ti.UI.createView({
        id: "__alloyId2869"
    });
    $.__views.__alloyId2868.add($.__views.__alloyId2869);
    $.__views.__alloyId2870 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2870"
    });
    $.__views.__alloyId2869.add($.__views.__alloyId2870);
    $.__views.__alloyId2871 = Ti.UI.createView({
        id: "__alloyId2871"
    });
    $.__views.__alloyId2871 && $.addTopLevelView($.__views.__alloyId2871);
    $.__views.__alloyId2872 = Ti.UI.createView({
        id: "__alloyId2872"
    });
    $.__views.__alloyId2871.add($.__views.__alloyId2872);
    $.__views.__alloyId2873 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2873"
    });
    $.__views.__alloyId2872.add($.__views.__alloyId2873);
    $.__views.__alloyId2874 = Ti.UI.createView({
        id: "__alloyId2874"
    });
    $.__views.__alloyId2874 && $.addTopLevelView($.__views.__alloyId2874);
    $.__views.__alloyId2875 = Ti.UI.createView({
        id: "__alloyId2875"
    });
    $.__views.__alloyId2874.add($.__views.__alloyId2875);
    $.__views.__alloyId2876 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2876"
    });
    $.__views.__alloyId2875.add($.__views.__alloyId2876);
    $.__views.__alloyId2877 = Ti.UI.createView({
        id: "__alloyId2877"
    });
    $.__views.__alloyId2877 && $.addTopLevelView($.__views.__alloyId2877);
    $.__views.__alloyId2878 = Ti.UI.createView({
        id: "__alloyId2878"
    });
    $.__views.__alloyId2877.add($.__views.__alloyId2878);
    $.__views.__alloyId2879 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2879"
    });
    $.__views.__alloyId2878.add($.__views.__alloyId2879);
    $.__views.__alloyId2880 = Ti.UI.createView({
        id: "__alloyId2880"
    });
    $.__views.__alloyId2880 && $.addTopLevelView($.__views.__alloyId2880);
    $.__views.__alloyId2881 = Ti.UI.createView({
        id: "__alloyId2881"
    });
    $.__views.__alloyId2880.add($.__views.__alloyId2881);
    $.__views.__alloyId2882 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2882"
    });
    $.__views.__alloyId2881.add($.__views.__alloyId2882);
    $.__views.__alloyId2883 = Ti.UI.createView({
        id: "__alloyId2883"
    });
    $.__views.__alloyId2883 && $.addTopLevelView($.__views.__alloyId2883);
    $.__views.__alloyId2884 = Ti.UI.createView({
        id: "__alloyId2884"
    });
    $.__views.__alloyId2883.add($.__views.__alloyId2884);
    $.__views.__alloyId2885 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2885"
    });
    $.__views.__alloyId2884.add($.__views.__alloyId2885);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;