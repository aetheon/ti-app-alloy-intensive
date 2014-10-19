function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_202";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_202 = Ti.UI.createView({
        id: "widget_202"
    });
    $.__views.widget_202 && $.addTopLevelView($.__views.widget_202);
    $.__views.__alloyId3042 = Ti.UI.createView({
        id: "__alloyId3042"
    });
    $.__views.widget_202.add($.__views.__alloyId3042);
    $.__views.__alloyId3043 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3043"
    });
    $.__views.__alloyId3042.add($.__views.__alloyId3043);
    $.__views.__alloyId3044 = Ti.UI.createView({
        id: "__alloyId3044"
    });
    $.__views.__alloyId3044 && $.addTopLevelView($.__views.__alloyId3044);
    $.__views.__alloyId3045 = Ti.UI.createView({
        id: "__alloyId3045"
    });
    $.__views.__alloyId3044.add($.__views.__alloyId3045);
    $.__views.__alloyId3046 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3046"
    });
    $.__views.__alloyId3045.add($.__views.__alloyId3046);
    $.__views.__alloyId3047 = Ti.UI.createView({
        id: "__alloyId3047"
    });
    $.__views.__alloyId3047 && $.addTopLevelView($.__views.__alloyId3047);
    $.__views.__alloyId3048 = Ti.UI.createView({
        id: "__alloyId3048"
    });
    $.__views.__alloyId3047.add($.__views.__alloyId3048);
    $.__views.__alloyId3049 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3049"
    });
    $.__views.__alloyId3048.add($.__views.__alloyId3049);
    $.__views.__alloyId3050 = Ti.UI.createView({
        id: "__alloyId3050"
    });
    $.__views.__alloyId3050 && $.addTopLevelView($.__views.__alloyId3050);
    $.__views.__alloyId3051 = Ti.UI.createView({
        id: "__alloyId3051"
    });
    $.__views.__alloyId3050.add($.__views.__alloyId3051);
    $.__views.__alloyId3052 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3052"
    });
    $.__views.__alloyId3051.add($.__views.__alloyId3052);
    $.__views.__alloyId3053 = Ti.UI.createView({
        id: "__alloyId3053"
    });
    $.__views.__alloyId3053 && $.addTopLevelView($.__views.__alloyId3053);
    $.__views.__alloyId3054 = Ti.UI.createView({
        id: "__alloyId3054"
    });
    $.__views.__alloyId3053.add($.__views.__alloyId3054);
    $.__views.__alloyId3055 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3055"
    });
    $.__views.__alloyId3054.add($.__views.__alloyId3055);
    $.__views.__alloyId3056 = Ti.UI.createView({
        id: "__alloyId3056"
    });
    $.__views.__alloyId3056 && $.addTopLevelView($.__views.__alloyId3056);
    $.__views.__alloyId3057 = Ti.UI.createView({
        id: "__alloyId3057"
    });
    $.__views.__alloyId3056.add($.__views.__alloyId3057);
    $.__views.__alloyId3058 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3058"
    });
    $.__views.__alloyId3057.add($.__views.__alloyId3058);
    $.__views.__alloyId3059 = Ti.UI.createView({
        id: "__alloyId3059"
    });
    $.__views.__alloyId3059 && $.addTopLevelView($.__views.__alloyId3059);
    $.__views.__alloyId3060 = Ti.UI.createView({
        id: "__alloyId3060"
    });
    $.__views.__alloyId3059.add($.__views.__alloyId3060);
    $.__views.__alloyId3061 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3061"
    });
    $.__views.__alloyId3060.add($.__views.__alloyId3061);
    $.__views.__alloyId3062 = Ti.UI.createView({
        id: "__alloyId3062"
    });
    $.__views.__alloyId3062 && $.addTopLevelView($.__views.__alloyId3062);
    $.__views.__alloyId3063 = Ti.UI.createView({
        id: "__alloyId3063"
    });
    $.__views.__alloyId3062.add($.__views.__alloyId3063);
    $.__views.__alloyId3064 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3064"
    });
    $.__views.__alloyId3063.add($.__views.__alloyId3064);
    $.__views.__alloyId3065 = Ti.UI.createView({
        id: "__alloyId3065"
    });
    $.__views.__alloyId3065 && $.addTopLevelView($.__views.__alloyId3065);
    $.__views.__alloyId3066 = Ti.UI.createView({
        id: "__alloyId3066"
    });
    $.__views.__alloyId3065.add($.__views.__alloyId3066);
    $.__views.__alloyId3067 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3067"
    });
    $.__views.__alloyId3066.add($.__views.__alloyId3067);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;