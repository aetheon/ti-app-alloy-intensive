function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_237";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_237 = Ti.UI.createView({
        id: "widget_237"
    });
    $.__views.widget_237 && $.addTopLevelView($.__views.widget_237);
    $.__views.__alloyId4030 = Ti.UI.createView({
        id: "__alloyId4030"
    });
    $.__views.widget_237.add($.__views.__alloyId4030);
    $.__views.__alloyId4031 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4031"
    });
    $.__views.__alloyId4030.add($.__views.__alloyId4031);
    $.__views.__alloyId4032 = Ti.UI.createView({
        id: "__alloyId4032"
    });
    $.__views.__alloyId4032 && $.addTopLevelView($.__views.__alloyId4032);
    $.__views.__alloyId4033 = Ti.UI.createView({
        id: "__alloyId4033"
    });
    $.__views.__alloyId4032.add($.__views.__alloyId4033);
    $.__views.__alloyId4034 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4034"
    });
    $.__views.__alloyId4033.add($.__views.__alloyId4034);
    $.__views.__alloyId4035 = Ti.UI.createView({
        id: "__alloyId4035"
    });
    $.__views.__alloyId4035 && $.addTopLevelView($.__views.__alloyId4035);
    $.__views.__alloyId4036 = Ti.UI.createView({
        id: "__alloyId4036"
    });
    $.__views.__alloyId4035.add($.__views.__alloyId4036);
    $.__views.__alloyId4037 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4037"
    });
    $.__views.__alloyId4036.add($.__views.__alloyId4037);
    $.__views.__alloyId4038 = Ti.UI.createView({
        id: "__alloyId4038"
    });
    $.__views.__alloyId4038 && $.addTopLevelView($.__views.__alloyId4038);
    $.__views.__alloyId4039 = Ti.UI.createView({
        id: "__alloyId4039"
    });
    $.__views.__alloyId4038.add($.__views.__alloyId4039);
    $.__views.__alloyId4040 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4040"
    });
    $.__views.__alloyId4039.add($.__views.__alloyId4040);
    $.__views.__alloyId4041 = Ti.UI.createView({
        id: "__alloyId4041"
    });
    $.__views.__alloyId4041 && $.addTopLevelView($.__views.__alloyId4041);
    $.__views.__alloyId4042 = Ti.UI.createView({
        id: "__alloyId4042"
    });
    $.__views.__alloyId4041.add($.__views.__alloyId4042);
    $.__views.__alloyId4043 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4043"
    });
    $.__views.__alloyId4042.add($.__views.__alloyId4043);
    $.__views.__alloyId4044 = Ti.UI.createView({
        id: "__alloyId4044"
    });
    $.__views.__alloyId4044 && $.addTopLevelView($.__views.__alloyId4044);
    $.__views.__alloyId4045 = Ti.UI.createView({
        id: "__alloyId4045"
    });
    $.__views.__alloyId4044.add($.__views.__alloyId4045);
    $.__views.__alloyId4046 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4046"
    });
    $.__views.__alloyId4045.add($.__views.__alloyId4046);
    $.__views.__alloyId4047 = Ti.UI.createView({
        id: "__alloyId4047"
    });
    $.__views.__alloyId4047 && $.addTopLevelView($.__views.__alloyId4047);
    $.__views.__alloyId4048 = Ti.UI.createView({
        id: "__alloyId4048"
    });
    $.__views.__alloyId4047.add($.__views.__alloyId4048);
    $.__views.__alloyId4049 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4049"
    });
    $.__views.__alloyId4048.add($.__views.__alloyId4049);
    $.__views.__alloyId4050 = Ti.UI.createView({
        id: "__alloyId4050"
    });
    $.__views.__alloyId4050 && $.addTopLevelView($.__views.__alloyId4050);
    $.__views.__alloyId4051 = Ti.UI.createView({
        id: "__alloyId4051"
    });
    $.__views.__alloyId4050.add($.__views.__alloyId4051);
    $.__views.__alloyId4052 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4052"
    });
    $.__views.__alloyId4051.add($.__views.__alloyId4052);
    $.__views.__alloyId4053 = Ti.UI.createView({
        id: "__alloyId4053"
    });
    $.__views.__alloyId4053 && $.addTopLevelView($.__views.__alloyId4053);
    $.__views.__alloyId4054 = Ti.UI.createView({
        id: "__alloyId4054"
    });
    $.__views.__alloyId4053.add($.__views.__alloyId4054);
    $.__views.__alloyId4055 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4055"
    });
    $.__views.__alloyId4054.add($.__views.__alloyId4055);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;