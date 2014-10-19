function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_618";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_618 = Ti.UI.createView({
        id: "widget_618"
    });
    $.__views.widget_618 && $.addTopLevelView($.__views.widget_618);
    $.__views.__alloyId15028 = Ti.UI.createView({
        id: "__alloyId15028"
    });
    $.__views.widget_618.add($.__views.__alloyId15028);
    $.__views.__alloyId15029 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15029"
    });
    $.__views.__alloyId15028.add($.__views.__alloyId15029);
    $.__views.__alloyId15030 = Ti.UI.createView({
        id: "__alloyId15030"
    });
    $.__views.__alloyId15030 && $.addTopLevelView($.__views.__alloyId15030);
    $.__views.__alloyId15031 = Ti.UI.createView({
        id: "__alloyId15031"
    });
    $.__views.__alloyId15030.add($.__views.__alloyId15031);
    $.__views.__alloyId15032 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15032"
    });
    $.__views.__alloyId15031.add($.__views.__alloyId15032);
    $.__views.__alloyId15033 = Ti.UI.createView({
        id: "__alloyId15033"
    });
    $.__views.__alloyId15033 && $.addTopLevelView($.__views.__alloyId15033);
    $.__views.__alloyId15034 = Ti.UI.createView({
        id: "__alloyId15034"
    });
    $.__views.__alloyId15033.add($.__views.__alloyId15034);
    $.__views.__alloyId15035 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15035"
    });
    $.__views.__alloyId15034.add($.__views.__alloyId15035);
    $.__views.__alloyId15036 = Ti.UI.createView({
        id: "__alloyId15036"
    });
    $.__views.__alloyId15036 && $.addTopLevelView($.__views.__alloyId15036);
    $.__views.__alloyId15037 = Ti.UI.createView({
        id: "__alloyId15037"
    });
    $.__views.__alloyId15036.add($.__views.__alloyId15037);
    $.__views.__alloyId15038 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15038"
    });
    $.__views.__alloyId15037.add($.__views.__alloyId15038);
    $.__views.__alloyId15039 = Ti.UI.createView({
        id: "__alloyId15039"
    });
    $.__views.__alloyId15039 && $.addTopLevelView($.__views.__alloyId15039);
    $.__views.__alloyId15040 = Ti.UI.createView({
        id: "__alloyId15040"
    });
    $.__views.__alloyId15039.add($.__views.__alloyId15040);
    $.__views.__alloyId15041 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15041"
    });
    $.__views.__alloyId15040.add($.__views.__alloyId15041);
    $.__views.__alloyId15042 = Ti.UI.createView({
        id: "__alloyId15042"
    });
    $.__views.__alloyId15042 && $.addTopLevelView($.__views.__alloyId15042);
    $.__views.__alloyId15043 = Ti.UI.createView({
        id: "__alloyId15043"
    });
    $.__views.__alloyId15042.add($.__views.__alloyId15043);
    $.__views.__alloyId15044 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15044"
    });
    $.__views.__alloyId15043.add($.__views.__alloyId15044);
    $.__views.__alloyId15045 = Ti.UI.createView({
        id: "__alloyId15045"
    });
    $.__views.__alloyId15045 && $.addTopLevelView($.__views.__alloyId15045);
    $.__views.__alloyId15046 = Ti.UI.createView({
        id: "__alloyId15046"
    });
    $.__views.__alloyId15045.add($.__views.__alloyId15046);
    $.__views.__alloyId15047 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15047"
    });
    $.__views.__alloyId15046.add($.__views.__alloyId15047);
    $.__views.__alloyId15048 = Ti.UI.createView({
        id: "__alloyId15048"
    });
    $.__views.__alloyId15048 && $.addTopLevelView($.__views.__alloyId15048);
    $.__views.__alloyId15049 = Ti.UI.createView({
        id: "__alloyId15049"
    });
    $.__views.__alloyId15048.add($.__views.__alloyId15049);
    $.__views.__alloyId15050 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15050"
    });
    $.__views.__alloyId15049.add($.__views.__alloyId15050);
    $.__views.__alloyId15051 = Ti.UI.createView({
        id: "__alloyId15051"
    });
    $.__views.__alloyId15051 && $.addTopLevelView($.__views.__alloyId15051);
    $.__views.__alloyId15052 = Ti.UI.createView({
        id: "__alloyId15052"
    });
    $.__views.__alloyId15051.add($.__views.__alloyId15052);
    $.__views.__alloyId15053 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15053"
    });
    $.__views.__alloyId15052.add($.__views.__alloyId15053);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;