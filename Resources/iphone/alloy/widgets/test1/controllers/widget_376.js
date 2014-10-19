function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_376";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_376 = Ti.UI.createView({
        id: "widget_376"
    });
    $.__views.widget_376 && $.addTopLevelView($.__views.widget_376);
    $.__views.__alloyId8034 = Ti.UI.createView({
        id: "__alloyId8034"
    });
    $.__views.widget_376.add($.__views.__alloyId8034);
    $.__views.__alloyId8035 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8035"
    });
    $.__views.__alloyId8034.add($.__views.__alloyId8035);
    $.__views.__alloyId8036 = Ti.UI.createView({
        id: "__alloyId8036"
    });
    $.__views.__alloyId8036 && $.addTopLevelView($.__views.__alloyId8036);
    $.__views.__alloyId8037 = Ti.UI.createView({
        id: "__alloyId8037"
    });
    $.__views.__alloyId8036.add($.__views.__alloyId8037);
    $.__views.__alloyId8038 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8038"
    });
    $.__views.__alloyId8037.add($.__views.__alloyId8038);
    $.__views.__alloyId8039 = Ti.UI.createView({
        id: "__alloyId8039"
    });
    $.__views.__alloyId8039 && $.addTopLevelView($.__views.__alloyId8039);
    $.__views.__alloyId8040 = Ti.UI.createView({
        id: "__alloyId8040"
    });
    $.__views.__alloyId8039.add($.__views.__alloyId8040);
    $.__views.__alloyId8041 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8041"
    });
    $.__views.__alloyId8040.add($.__views.__alloyId8041);
    $.__views.__alloyId8042 = Ti.UI.createView({
        id: "__alloyId8042"
    });
    $.__views.__alloyId8042 && $.addTopLevelView($.__views.__alloyId8042);
    $.__views.__alloyId8043 = Ti.UI.createView({
        id: "__alloyId8043"
    });
    $.__views.__alloyId8042.add($.__views.__alloyId8043);
    $.__views.__alloyId8044 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8044"
    });
    $.__views.__alloyId8043.add($.__views.__alloyId8044);
    $.__views.__alloyId8045 = Ti.UI.createView({
        id: "__alloyId8045"
    });
    $.__views.__alloyId8045 && $.addTopLevelView($.__views.__alloyId8045);
    $.__views.__alloyId8046 = Ti.UI.createView({
        id: "__alloyId8046"
    });
    $.__views.__alloyId8045.add($.__views.__alloyId8046);
    $.__views.__alloyId8047 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8047"
    });
    $.__views.__alloyId8046.add($.__views.__alloyId8047);
    $.__views.__alloyId8048 = Ti.UI.createView({
        id: "__alloyId8048"
    });
    $.__views.__alloyId8048 && $.addTopLevelView($.__views.__alloyId8048);
    $.__views.__alloyId8049 = Ti.UI.createView({
        id: "__alloyId8049"
    });
    $.__views.__alloyId8048.add($.__views.__alloyId8049);
    $.__views.__alloyId8050 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8050"
    });
    $.__views.__alloyId8049.add($.__views.__alloyId8050);
    $.__views.__alloyId8051 = Ti.UI.createView({
        id: "__alloyId8051"
    });
    $.__views.__alloyId8051 && $.addTopLevelView($.__views.__alloyId8051);
    $.__views.__alloyId8052 = Ti.UI.createView({
        id: "__alloyId8052"
    });
    $.__views.__alloyId8051.add($.__views.__alloyId8052);
    $.__views.__alloyId8053 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8053"
    });
    $.__views.__alloyId8052.add($.__views.__alloyId8053);
    $.__views.__alloyId8054 = Ti.UI.createView({
        id: "__alloyId8054"
    });
    $.__views.__alloyId8054 && $.addTopLevelView($.__views.__alloyId8054);
    $.__views.__alloyId8055 = Ti.UI.createView({
        id: "__alloyId8055"
    });
    $.__views.__alloyId8054.add($.__views.__alloyId8055);
    $.__views.__alloyId8056 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8056"
    });
    $.__views.__alloyId8055.add($.__views.__alloyId8056);
    $.__views.__alloyId8057 = Ti.UI.createView({
        id: "__alloyId8057"
    });
    $.__views.__alloyId8057 && $.addTopLevelView($.__views.__alloyId8057);
    $.__views.__alloyId8058 = Ti.UI.createView({
        id: "__alloyId8058"
    });
    $.__views.__alloyId8057.add($.__views.__alloyId8058);
    $.__views.__alloyId8059 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8059"
    });
    $.__views.__alloyId8058.add($.__views.__alloyId8059);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;