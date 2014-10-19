function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_861";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_861 = Ti.UI.createView({
        id: "widget_861"
    });
    $.__views.widget_861 && $.addTopLevelView($.__views.widget_861);
    $.__views.__alloyId22048 = Ti.UI.createView({
        id: "__alloyId22048"
    });
    $.__views.widget_861.add($.__views.__alloyId22048);
    $.__views.__alloyId22049 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22049"
    });
    $.__views.__alloyId22048.add($.__views.__alloyId22049);
    $.__views.__alloyId22050 = Ti.UI.createView({
        id: "__alloyId22050"
    });
    $.__views.__alloyId22050 && $.addTopLevelView($.__views.__alloyId22050);
    $.__views.__alloyId22051 = Ti.UI.createView({
        id: "__alloyId22051"
    });
    $.__views.__alloyId22050.add($.__views.__alloyId22051);
    $.__views.__alloyId22052 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22052"
    });
    $.__views.__alloyId22051.add($.__views.__alloyId22052);
    $.__views.__alloyId22053 = Ti.UI.createView({
        id: "__alloyId22053"
    });
    $.__views.__alloyId22053 && $.addTopLevelView($.__views.__alloyId22053);
    $.__views.__alloyId22054 = Ti.UI.createView({
        id: "__alloyId22054"
    });
    $.__views.__alloyId22053.add($.__views.__alloyId22054);
    $.__views.__alloyId22055 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22055"
    });
    $.__views.__alloyId22054.add($.__views.__alloyId22055);
    $.__views.__alloyId22056 = Ti.UI.createView({
        id: "__alloyId22056"
    });
    $.__views.__alloyId22056 && $.addTopLevelView($.__views.__alloyId22056);
    $.__views.__alloyId22057 = Ti.UI.createView({
        id: "__alloyId22057"
    });
    $.__views.__alloyId22056.add($.__views.__alloyId22057);
    $.__views.__alloyId22058 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22058"
    });
    $.__views.__alloyId22057.add($.__views.__alloyId22058);
    $.__views.__alloyId22059 = Ti.UI.createView({
        id: "__alloyId22059"
    });
    $.__views.__alloyId22059 && $.addTopLevelView($.__views.__alloyId22059);
    $.__views.__alloyId22060 = Ti.UI.createView({
        id: "__alloyId22060"
    });
    $.__views.__alloyId22059.add($.__views.__alloyId22060);
    $.__views.__alloyId22061 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22061"
    });
    $.__views.__alloyId22060.add($.__views.__alloyId22061);
    $.__views.__alloyId22062 = Ti.UI.createView({
        id: "__alloyId22062"
    });
    $.__views.__alloyId22062 && $.addTopLevelView($.__views.__alloyId22062);
    $.__views.__alloyId22063 = Ti.UI.createView({
        id: "__alloyId22063"
    });
    $.__views.__alloyId22062.add($.__views.__alloyId22063);
    $.__views.__alloyId22064 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22064"
    });
    $.__views.__alloyId22063.add($.__views.__alloyId22064);
    $.__views.__alloyId22065 = Ti.UI.createView({
        id: "__alloyId22065"
    });
    $.__views.__alloyId22065 && $.addTopLevelView($.__views.__alloyId22065);
    $.__views.__alloyId22066 = Ti.UI.createView({
        id: "__alloyId22066"
    });
    $.__views.__alloyId22065.add($.__views.__alloyId22066);
    $.__views.__alloyId22067 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22067"
    });
    $.__views.__alloyId22066.add($.__views.__alloyId22067);
    $.__views.__alloyId22068 = Ti.UI.createView({
        id: "__alloyId22068"
    });
    $.__views.__alloyId22068 && $.addTopLevelView($.__views.__alloyId22068);
    $.__views.__alloyId22069 = Ti.UI.createView({
        id: "__alloyId22069"
    });
    $.__views.__alloyId22068.add($.__views.__alloyId22069);
    $.__views.__alloyId22070 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22070"
    });
    $.__views.__alloyId22069.add($.__views.__alloyId22070);
    $.__views.__alloyId22071 = Ti.UI.createView({
        id: "__alloyId22071"
    });
    $.__views.__alloyId22071 && $.addTopLevelView($.__views.__alloyId22071);
    $.__views.__alloyId22072 = Ti.UI.createView({
        id: "__alloyId22072"
    });
    $.__views.__alloyId22071.add($.__views.__alloyId22072);
    $.__views.__alloyId22073 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22073"
    });
    $.__views.__alloyId22072.add($.__views.__alloyId22073);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;