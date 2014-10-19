function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_199";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_199 = Ti.UI.createView({
        id: "widget_199"
    });
    $.__views.widget_199 && $.addTopLevelView($.__views.widget_199);
    $.__views.__alloyId2912 = Ti.UI.createView({
        id: "__alloyId2912"
    });
    $.__views.widget_199.add($.__views.__alloyId2912);
    $.__views.__alloyId2913 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2913"
    });
    $.__views.__alloyId2912.add($.__views.__alloyId2913);
    $.__views.__alloyId2914 = Ti.UI.createView({
        id: "__alloyId2914"
    });
    $.__views.__alloyId2914 && $.addTopLevelView($.__views.__alloyId2914);
    $.__views.__alloyId2915 = Ti.UI.createView({
        id: "__alloyId2915"
    });
    $.__views.__alloyId2914.add($.__views.__alloyId2915);
    $.__views.__alloyId2916 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2916"
    });
    $.__views.__alloyId2915.add($.__views.__alloyId2916);
    $.__views.__alloyId2917 = Ti.UI.createView({
        id: "__alloyId2917"
    });
    $.__views.__alloyId2917 && $.addTopLevelView($.__views.__alloyId2917);
    $.__views.__alloyId2918 = Ti.UI.createView({
        id: "__alloyId2918"
    });
    $.__views.__alloyId2917.add($.__views.__alloyId2918);
    $.__views.__alloyId2919 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2919"
    });
    $.__views.__alloyId2918.add($.__views.__alloyId2919);
    $.__views.__alloyId2920 = Ti.UI.createView({
        id: "__alloyId2920"
    });
    $.__views.__alloyId2920 && $.addTopLevelView($.__views.__alloyId2920);
    $.__views.__alloyId2921 = Ti.UI.createView({
        id: "__alloyId2921"
    });
    $.__views.__alloyId2920.add($.__views.__alloyId2921);
    $.__views.__alloyId2922 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2922"
    });
    $.__views.__alloyId2921.add($.__views.__alloyId2922);
    $.__views.__alloyId2923 = Ti.UI.createView({
        id: "__alloyId2923"
    });
    $.__views.__alloyId2923 && $.addTopLevelView($.__views.__alloyId2923);
    $.__views.__alloyId2924 = Ti.UI.createView({
        id: "__alloyId2924"
    });
    $.__views.__alloyId2923.add($.__views.__alloyId2924);
    $.__views.__alloyId2925 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2925"
    });
    $.__views.__alloyId2924.add($.__views.__alloyId2925);
    $.__views.__alloyId2926 = Ti.UI.createView({
        id: "__alloyId2926"
    });
    $.__views.__alloyId2926 && $.addTopLevelView($.__views.__alloyId2926);
    $.__views.__alloyId2927 = Ti.UI.createView({
        id: "__alloyId2927"
    });
    $.__views.__alloyId2926.add($.__views.__alloyId2927);
    $.__views.__alloyId2928 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2928"
    });
    $.__views.__alloyId2927.add($.__views.__alloyId2928);
    $.__views.__alloyId2929 = Ti.UI.createView({
        id: "__alloyId2929"
    });
    $.__views.__alloyId2929 && $.addTopLevelView($.__views.__alloyId2929);
    $.__views.__alloyId2930 = Ti.UI.createView({
        id: "__alloyId2930"
    });
    $.__views.__alloyId2929.add($.__views.__alloyId2930);
    $.__views.__alloyId2931 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2931"
    });
    $.__views.__alloyId2930.add($.__views.__alloyId2931);
    $.__views.__alloyId2932 = Ti.UI.createView({
        id: "__alloyId2932"
    });
    $.__views.__alloyId2932 && $.addTopLevelView($.__views.__alloyId2932);
    $.__views.__alloyId2933 = Ti.UI.createView({
        id: "__alloyId2933"
    });
    $.__views.__alloyId2932.add($.__views.__alloyId2933);
    $.__views.__alloyId2934 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2934"
    });
    $.__views.__alloyId2933.add($.__views.__alloyId2934);
    $.__views.__alloyId2935 = Ti.UI.createView({
        id: "__alloyId2935"
    });
    $.__views.__alloyId2935 && $.addTopLevelView($.__views.__alloyId2935);
    $.__views.__alloyId2936 = Ti.UI.createView({
        id: "__alloyId2936"
    });
    $.__views.__alloyId2935.add($.__views.__alloyId2936);
    $.__views.__alloyId2937 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2937"
    });
    $.__views.__alloyId2936.add($.__views.__alloyId2937);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;