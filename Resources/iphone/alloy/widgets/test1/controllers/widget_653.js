function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_653";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_653 = Ti.UI.createView({
        id: "widget_653"
    });
    $.__views.widget_653 && $.addTopLevelView($.__views.widget_653);
    $.__views.__alloyId16042 = Ti.UI.createView({
        id: "__alloyId16042"
    });
    $.__views.widget_653.add($.__views.__alloyId16042);
    $.__views.__alloyId16043 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16043"
    });
    $.__views.__alloyId16042.add($.__views.__alloyId16043);
    $.__views.__alloyId16044 = Ti.UI.createView({
        id: "__alloyId16044"
    });
    $.__views.__alloyId16044 && $.addTopLevelView($.__views.__alloyId16044);
    $.__views.__alloyId16045 = Ti.UI.createView({
        id: "__alloyId16045"
    });
    $.__views.__alloyId16044.add($.__views.__alloyId16045);
    $.__views.__alloyId16046 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16046"
    });
    $.__views.__alloyId16045.add($.__views.__alloyId16046);
    $.__views.__alloyId16047 = Ti.UI.createView({
        id: "__alloyId16047"
    });
    $.__views.__alloyId16047 && $.addTopLevelView($.__views.__alloyId16047);
    $.__views.__alloyId16048 = Ti.UI.createView({
        id: "__alloyId16048"
    });
    $.__views.__alloyId16047.add($.__views.__alloyId16048);
    $.__views.__alloyId16049 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16049"
    });
    $.__views.__alloyId16048.add($.__views.__alloyId16049);
    $.__views.__alloyId16050 = Ti.UI.createView({
        id: "__alloyId16050"
    });
    $.__views.__alloyId16050 && $.addTopLevelView($.__views.__alloyId16050);
    $.__views.__alloyId16051 = Ti.UI.createView({
        id: "__alloyId16051"
    });
    $.__views.__alloyId16050.add($.__views.__alloyId16051);
    $.__views.__alloyId16052 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16052"
    });
    $.__views.__alloyId16051.add($.__views.__alloyId16052);
    $.__views.__alloyId16053 = Ti.UI.createView({
        id: "__alloyId16053"
    });
    $.__views.__alloyId16053 && $.addTopLevelView($.__views.__alloyId16053);
    $.__views.__alloyId16054 = Ti.UI.createView({
        id: "__alloyId16054"
    });
    $.__views.__alloyId16053.add($.__views.__alloyId16054);
    $.__views.__alloyId16055 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16055"
    });
    $.__views.__alloyId16054.add($.__views.__alloyId16055);
    $.__views.__alloyId16056 = Ti.UI.createView({
        id: "__alloyId16056"
    });
    $.__views.__alloyId16056 && $.addTopLevelView($.__views.__alloyId16056);
    $.__views.__alloyId16057 = Ti.UI.createView({
        id: "__alloyId16057"
    });
    $.__views.__alloyId16056.add($.__views.__alloyId16057);
    $.__views.__alloyId16058 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16058"
    });
    $.__views.__alloyId16057.add($.__views.__alloyId16058);
    $.__views.__alloyId16059 = Ti.UI.createView({
        id: "__alloyId16059"
    });
    $.__views.__alloyId16059 && $.addTopLevelView($.__views.__alloyId16059);
    $.__views.__alloyId16060 = Ti.UI.createView({
        id: "__alloyId16060"
    });
    $.__views.__alloyId16059.add($.__views.__alloyId16060);
    $.__views.__alloyId16061 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16061"
    });
    $.__views.__alloyId16060.add($.__views.__alloyId16061);
    $.__views.__alloyId16062 = Ti.UI.createView({
        id: "__alloyId16062"
    });
    $.__views.__alloyId16062 && $.addTopLevelView($.__views.__alloyId16062);
    $.__views.__alloyId16063 = Ti.UI.createView({
        id: "__alloyId16063"
    });
    $.__views.__alloyId16062.add($.__views.__alloyId16063);
    $.__views.__alloyId16064 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16064"
    });
    $.__views.__alloyId16063.add($.__views.__alloyId16064);
    $.__views.__alloyId16065 = Ti.UI.createView({
        id: "__alloyId16065"
    });
    $.__views.__alloyId16065 && $.addTopLevelView($.__views.__alloyId16065);
    $.__views.__alloyId16066 = Ti.UI.createView({
        id: "__alloyId16066"
    });
    $.__views.__alloyId16065.add($.__views.__alloyId16066);
    $.__views.__alloyId16067 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16067"
    });
    $.__views.__alloyId16066.add($.__views.__alloyId16067);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;