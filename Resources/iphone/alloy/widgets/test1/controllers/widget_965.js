function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_965";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_965 = Ti.UI.createView({
        id: "widget_965"
    });
    $.__views.widget_965 && $.addTopLevelView($.__views.widget_965);
    $.__views.__alloyId25038 = Ti.UI.createView({
        id: "__alloyId25038"
    });
    $.__views.widget_965.add($.__views.__alloyId25038);
    $.__views.__alloyId25039 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25039"
    });
    $.__views.__alloyId25038.add($.__views.__alloyId25039);
    $.__views.__alloyId25040 = Ti.UI.createView({
        id: "__alloyId25040"
    });
    $.__views.__alloyId25040 && $.addTopLevelView($.__views.__alloyId25040);
    $.__views.__alloyId25041 = Ti.UI.createView({
        id: "__alloyId25041"
    });
    $.__views.__alloyId25040.add($.__views.__alloyId25041);
    $.__views.__alloyId25042 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25042"
    });
    $.__views.__alloyId25041.add($.__views.__alloyId25042);
    $.__views.__alloyId25043 = Ti.UI.createView({
        id: "__alloyId25043"
    });
    $.__views.__alloyId25043 && $.addTopLevelView($.__views.__alloyId25043);
    $.__views.__alloyId25044 = Ti.UI.createView({
        id: "__alloyId25044"
    });
    $.__views.__alloyId25043.add($.__views.__alloyId25044);
    $.__views.__alloyId25045 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25045"
    });
    $.__views.__alloyId25044.add($.__views.__alloyId25045);
    $.__views.__alloyId25046 = Ti.UI.createView({
        id: "__alloyId25046"
    });
    $.__views.__alloyId25046 && $.addTopLevelView($.__views.__alloyId25046);
    $.__views.__alloyId25047 = Ti.UI.createView({
        id: "__alloyId25047"
    });
    $.__views.__alloyId25046.add($.__views.__alloyId25047);
    $.__views.__alloyId25048 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25048"
    });
    $.__views.__alloyId25047.add($.__views.__alloyId25048);
    $.__views.__alloyId25049 = Ti.UI.createView({
        id: "__alloyId25049"
    });
    $.__views.__alloyId25049 && $.addTopLevelView($.__views.__alloyId25049);
    $.__views.__alloyId25050 = Ti.UI.createView({
        id: "__alloyId25050"
    });
    $.__views.__alloyId25049.add($.__views.__alloyId25050);
    $.__views.__alloyId25051 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25051"
    });
    $.__views.__alloyId25050.add($.__views.__alloyId25051);
    $.__views.__alloyId25052 = Ti.UI.createView({
        id: "__alloyId25052"
    });
    $.__views.__alloyId25052 && $.addTopLevelView($.__views.__alloyId25052);
    $.__views.__alloyId25053 = Ti.UI.createView({
        id: "__alloyId25053"
    });
    $.__views.__alloyId25052.add($.__views.__alloyId25053);
    $.__views.__alloyId25054 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25054"
    });
    $.__views.__alloyId25053.add($.__views.__alloyId25054);
    $.__views.__alloyId25055 = Ti.UI.createView({
        id: "__alloyId25055"
    });
    $.__views.__alloyId25055 && $.addTopLevelView($.__views.__alloyId25055);
    $.__views.__alloyId25056 = Ti.UI.createView({
        id: "__alloyId25056"
    });
    $.__views.__alloyId25055.add($.__views.__alloyId25056);
    $.__views.__alloyId25057 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25057"
    });
    $.__views.__alloyId25056.add($.__views.__alloyId25057);
    $.__views.__alloyId25058 = Ti.UI.createView({
        id: "__alloyId25058"
    });
    $.__views.__alloyId25058 && $.addTopLevelView($.__views.__alloyId25058);
    $.__views.__alloyId25059 = Ti.UI.createView({
        id: "__alloyId25059"
    });
    $.__views.__alloyId25058.add($.__views.__alloyId25059);
    $.__views.__alloyId25060 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25060"
    });
    $.__views.__alloyId25059.add($.__views.__alloyId25060);
    $.__views.__alloyId25061 = Ti.UI.createView({
        id: "__alloyId25061"
    });
    $.__views.__alloyId25061 && $.addTopLevelView($.__views.__alloyId25061);
    $.__views.__alloyId25062 = Ti.UI.createView({
        id: "__alloyId25062"
    });
    $.__views.__alloyId25061.add($.__views.__alloyId25062);
    $.__views.__alloyId25063 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25063"
    });
    $.__views.__alloyId25062.add($.__views.__alloyId25063);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;