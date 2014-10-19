function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_792";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_792 = Ti.UI.createView({
        id: "widget_792"
    });
    $.__views.widget_792 && $.addTopLevelView($.__views.widget_792);
    $.__views.__alloyId20046 = Ti.UI.createView({
        id: "__alloyId20046"
    });
    $.__views.widget_792.add($.__views.__alloyId20046);
    $.__views.__alloyId20047 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20047"
    });
    $.__views.__alloyId20046.add($.__views.__alloyId20047);
    $.__views.__alloyId20048 = Ti.UI.createView({
        id: "__alloyId20048"
    });
    $.__views.__alloyId20048 && $.addTopLevelView($.__views.__alloyId20048);
    $.__views.__alloyId20049 = Ti.UI.createView({
        id: "__alloyId20049"
    });
    $.__views.__alloyId20048.add($.__views.__alloyId20049);
    $.__views.__alloyId20050 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20050"
    });
    $.__views.__alloyId20049.add($.__views.__alloyId20050);
    $.__views.__alloyId20051 = Ti.UI.createView({
        id: "__alloyId20051"
    });
    $.__views.__alloyId20051 && $.addTopLevelView($.__views.__alloyId20051);
    $.__views.__alloyId20052 = Ti.UI.createView({
        id: "__alloyId20052"
    });
    $.__views.__alloyId20051.add($.__views.__alloyId20052);
    $.__views.__alloyId20053 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20053"
    });
    $.__views.__alloyId20052.add($.__views.__alloyId20053);
    $.__views.__alloyId20054 = Ti.UI.createView({
        id: "__alloyId20054"
    });
    $.__views.__alloyId20054 && $.addTopLevelView($.__views.__alloyId20054);
    $.__views.__alloyId20055 = Ti.UI.createView({
        id: "__alloyId20055"
    });
    $.__views.__alloyId20054.add($.__views.__alloyId20055);
    $.__views.__alloyId20056 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20056"
    });
    $.__views.__alloyId20055.add($.__views.__alloyId20056);
    $.__views.__alloyId20057 = Ti.UI.createView({
        id: "__alloyId20057"
    });
    $.__views.__alloyId20057 && $.addTopLevelView($.__views.__alloyId20057);
    $.__views.__alloyId20058 = Ti.UI.createView({
        id: "__alloyId20058"
    });
    $.__views.__alloyId20057.add($.__views.__alloyId20058);
    $.__views.__alloyId20059 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20059"
    });
    $.__views.__alloyId20058.add($.__views.__alloyId20059);
    $.__views.__alloyId20060 = Ti.UI.createView({
        id: "__alloyId20060"
    });
    $.__views.__alloyId20060 && $.addTopLevelView($.__views.__alloyId20060);
    $.__views.__alloyId20061 = Ti.UI.createView({
        id: "__alloyId20061"
    });
    $.__views.__alloyId20060.add($.__views.__alloyId20061);
    $.__views.__alloyId20062 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20062"
    });
    $.__views.__alloyId20061.add($.__views.__alloyId20062);
    $.__views.__alloyId20063 = Ti.UI.createView({
        id: "__alloyId20063"
    });
    $.__views.__alloyId20063 && $.addTopLevelView($.__views.__alloyId20063);
    $.__views.__alloyId20064 = Ti.UI.createView({
        id: "__alloyId20064"
    });
    $.__views.__alloyId20063.add($.__views.__alloyId20064);
    $.__views.__alloyId20065 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20065"
    });
    $.__views.__alloyId20064.add($.__views.__alloyId20065);
    $.__views.__alloyId20066 = Ti.UI.createView({
        id: "__alloyId20066"
    });
    $.__views.__alloyId20066 && $.addTopLevelView($.__views.__alloyId20066);
    $.__views.__alloyId20067 = Ti.UI.createView({
        id: "__alloyId20067"
    });
    $.__views.__alloyId20066.add($.__views.__alloyId20067);
    $.__views.__alloyId20068 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20068"
    });
    $.__views.__alloyId20067.add($.__views.__alloyId20068);
    $.__views.__alloyId20069 = Ti.UI.createView({
        id: "__alloyId20069"
    });
    $.__views.__alloyId20069 && $.addTopLevelView($.__views.__alloyId20069);
    $.__views.__alloyId20070 = Ti.UI.createView({
        id: "__alloyId20070"
    });
    $.__views.__alloyId20069.add($.__views.__alloyId20070);
    $.__views.__alloyId20071 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20071"
    });
    $.__views.__alloyId20070.add($.__views.__alloyId20071);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;