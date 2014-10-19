function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_306";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_306 = Ti.UI.createView({
        id: "widget_306"
    });
    $.__views.widget_306 && $.addTopLevelView($.__views.widget_306);
    $.__views.__alloyId6032 = Ti.UI.createView({
        id: "__alloyId6032"
    });
    $.__views.widget_306.add($.__views.__alloyId6032);
    $.__views.__alloyId6033 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6033"
    });
    $.__views.__alloyId6032.add($.__views.__alloyId6033);
    $.__views.__alloyId6034 = Ti.UI.createView({
        id: "__alloyId6034"
    });
    $.__views.__alloyId6034 && $.addTopLevelView($.__views.__alloyId6034);
    $.__views.__alloyId6035 = Ti.UI.createView({
        id: "__alloyId6035"
    });
    $.__views.__alloyId6034.add($.__views.__alloyId6035);
    $.__views.__alloyId6036 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6036"
    });
    $.__views.__alloyId6035.add($.__views.__alloyId6036);
    $.__views.__alloyId6037 = Ti.UI.createView({
        id: "__alloyId6037"
    });
    $.__views.__alloyId6037 && $.addTopLevelView($.__views.__alloyId6037);
    $.__views.__alloyId6038 = Ti.UI.createView({
        id: "__alloyId6038"
    });
    $.__views.__alloyId6037.add($.__views.__alloyId6038);
    $.__views.__alloyId6039 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6039"
    });
    $.__views.__alloyId6038.add($.__views.__alloyId6039);
    $.__views.__alloyId6040 = Ti.UI.createView({
        id: "__alloyId6040"
    });
    $.__views.__alloyId6040 && $.addTopLevelView($.__views.__alloyId6040);
    $.__views.__alloyId6041 = Ti.UI.createView({
        id: "__alloyId6041"
    });
    $.__views.__alloyId6040.add($.__views.__alloyId6041);
    $.__views.__alloyId6042 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6042"
    });
    $.__views.__alloyId6041.add($.__views.__alloyId6042);
    $.__views.__alloyId6043 = Ti.UI.createView({
        id: "__alloyId6043"
    });
    $.__views.__alloyId6043 && $.addTopLevelView($.__views.__alloyId6043);
    $.__views.__alloyId6044 = Ti.UI.createView({
        id: "__alloyId6044"
    });
    $.__views.__alloyId6043.add($.__views.__alloyId6044);
    $.__views.__alloyId6045 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6045"
    });
    $.__views.__alloyId6044.add($.__views.__alloyId6045);
    $.__views.__alloyId6046 = Ti.UI.createView({
        id: "__alloyId6046"
    });
    $.__views.__alloyId6046 && $.addTopLevelView($.__views.__alloyId6046);
    $.__views.__alloyId6047 = Ti.UI.createView({
        id: "__alloyId6047"
    });
    $.__views.__alloyId6046.add($.__views.__alloyId6047);
    $.__views.__alloyId6048 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6048"
    });
    $.__views.__alloyId6047.add($.__views.__alloyId6048);
    $.__views.__alloyId6049 = Ti.UI.createView({
        id: "__alloyId6049"
    });
    $.__views.__alloyId6049 && $.addTopLevelView($.__views.__alloyId6049);
    $.__views.__alloyId6050 = Ti.UI.createView({
        id: "__alloyId6050"
    });
    $.__views.__alloyId6049.add($.__views.__alloyId6050);
    $.__views.__alloyId6051 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6051"
    });
    $.__views.__alloyId6050.add($.__views.__alloyId6051);
    $.__views.__alloyId6052 = Ti.UI.createView({
        id: "__alloyId6052"
    });
    $.__views.__alloyId6052 && $.addTopLevelView($.__views.__alloyId6052);
    $.__views.__alloyId6053 = Ti.UI.createView({
        id: "__alloyId6053"
    });
    $.__views.__alloyId6052.add($.__views.__alloyId6053);
    $.__views.__alloyId6054 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6054"
    });
    $.__views.__alloyId6053.add($.__views.__alloyId6054);
    $.__views.__alloyId6055 = Ti.UI.createView({
        id: "__alloyId6055"
    });
    $.__views.__alloyId6055 && $.addTopLevelView($.__views.__alloyId6055);
    $.__views.__alloyId6056 = Ti.UI.createView({
        id: "__alloyId6056"
    });
    $.__views.__alloyId6055.add($.__views.__alloyId6056);
    $.__views.__alloyId6057 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6057"
    });
    $.__views.__alloyId6056.add($.__views.__alloyId6057);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;