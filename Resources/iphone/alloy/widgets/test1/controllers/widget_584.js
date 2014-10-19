function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_584";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_584 = Ti.UI.createView({
        id: "widget_584"
    });
    $.__views.widget_584 && $.addTopLevelView($.__views.widget_584);
    $.__views.__alloyId14040 = Ti.UI.createView({
        id: "__alloyId14040"
    });
    $.__views.widget_584.add($.__views.__alloyId14040);
    $.__views.__alloyId14041 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14041"
    });
    $.__views.__alloyId14040.add($.__views.__alloyId14041);
    $.__views.__alloyId14042 = Ti.UI.createView({
        id: "__alloyId14042"
    });
    $.__views.__alloyId14042 && $.addTopLevelView($.__views.__alloyId14042);
    $.__views.__alloyId14043 = Ti.UI.createView({
        id: "__alloyId14043"
    });
    $.__views.__alloyId14042.add($.__views.__alloyId14043);
    $.__views.__alloyId14044 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14044"
    });
    $.__views.__alloyId14043.add($.__views.__alloyId14044);
    $.__views.__alloyId14045 = Ti.UI.createView({
        id: "__alloyId14045"
    });
    $.__views.__alloyId14045 && $.addTopLevelView($.__views.__alloyId14045);
    $.__views.__alloyId14046 = Ti.UI.createView({
        id: "__alloyId14046"
    });
    $.__views.__alloyId14045.add($.__views.__alloyId14046);
    $.__views.__alloyId14047 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14047"
    });
    $.__views.__alloyId14046.add($.__views.__alloyId14047);
    $.__views.__alloyId14048 = Ti.UI.createView({
        id: "__alloyId14048"
    });
    $.__views.__alloyId14048 && $.addTopLevelView($.__views.__alloyId14048);
    $.__views.__alloyId14049 = Ti.UI.createView({
        id: "__alloyId14049"
    });
    $.__views.__alloyId14048.add($.__views.__alloyId14049);
    $.__views.__alloyId14050 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14050"
    });
    $.__views.__alloyId14049.add($.__views.__alloyId14050);
    $.__views.__alloyId14051 = Ti.UI.createView({
        id: "__alloyId14051"
    });
    $.__views.__alloyId14051 && $.addTopLevelView($.__views.__alloyId14051);
    $.__views.__alloyId14052 = Ti.UI.createView({
        id: "__alloyId14052"
    });
    $.__views.__alloyId14051.add($.__views.__alloyId14052);
    $.__views.__alloyId14053 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14053"
    });
    $.__views.__alloyId14052.add($.__views.__alloyId14053);
    $.__views.__alloyId14054 = Ti.UI.createView({
        id: "__alloyId14054"
    });
    $.__views.__alloyId14054 && $.addTopLevelView($.__views.__alloyId14054);
    $.__views.__alloyId14055 = Ti.UI.createView({
        id: "__alloyId14055"
    });
    $.__views.__alloyId14054.add($.__views.__alloyId14055);
    $.__views.__alloyId14056 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14056"
    });
    $.__views.__alloyId14055.add($.__views.__alloyId14056);
    $.__views.__alloyId14057 = Ti.UI.createView({
        id: "__alloyId14057"
    });
    $.__views.__alloyId14057 && $.addTopLevelView($.__views.__alloyId14057);
    $.__views.__alloyId14058 = Ti.UI.createView({
        id: "__alloyId14058"
    });
    $.__views.__alloyId14057.add($.__views.__alloyId14058);
    $.__views.__alloyId14059 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14059"
    });
    $.__views.__alloyId14058.add($.__views.__alloyId14059);
    $.__views.__alloyId14060 = Ti.UI.createView({
        id: "__alloyId14060"
    });
    $.__views.__alloyId14060 && $.addTopLevelView($.__views.__alloyId14060);
    $.__views.__alloyId14061 = Ti.UI.createView({
        id: "__alloyId14061"
    });
    $.__views.__alloyId14060.add($.__views.__alloyId14061);
    $.__views.__alloyId14062 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14062"
    });
    $.__views.__alloyId14061.add($.__views.__alloyId14062);
    $.__views.__alloyId14063 = Ti.UI.createView({
        id: "__alloyId14063"
    });
    $.__views.__alloyId14063 && $.addTopLevelView($.__views.__alloyId14063);
    $.__views.__alloyId14064 = Ti.UI.createView({
        id: "__alloyId14064"
    });
    $.__views.__alloyId14063.add($.__views.__alloyId14064);
    $.__views.__alloyId14065 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14065"
    });
    $.__views.__alloyId14064.add($.__views.__alloyId14065);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;