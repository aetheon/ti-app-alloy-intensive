function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_757";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_757 = Ti.UI.createView({
        id: "widget_757"
    });
    $.__views.widget_757 && $.addTopLevelView($.__views.widget_757);
    $.__views.__alloyId19032 = Ti.UI.createView({
        id: "__alloyId19032"
    });
    $.__views.widget_757.add($.__views.__alloyId19032);
    $.__views.__alloyId19033 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19033"
    });
    $.__views.__alloyId19032.add($.__views.__alloyId19033);
    $.__views.__alloyId19034 = Ti.UI.createView({
        id: "__alloyId19034"
    });
    $.__views.__alloyId19034 && $.addTopLevelView($.__views.__alloyId19034);
    $.__views.__alloyId19035 = Ti.UI.createView({
        id: "__alloyId19035"
    });
    $.__views.__alloyId19034.add($.__views.__alloyId19035);
    $.__views.__alloyId19036 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19036"
    });
    $.__views.__alloyId19035.add($.__views.__alloyId19036);
    $.__views.__alloyId19037 = Ti.UI.createView({
        id: "__alloyId19037"
    });
    $.__views.__alloyId19037 && $.addTopLevelView($.__views.__alloyId19037);
    $.__views.__alloyId19038 = Ti.UI.createView({
        id: "__alloyId19038"
    });
    $.__views.__alloyId19037.add($.__views.__alloyId19038);
    $.__views.__alloyId19039 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19039"
    });
    $.__views.__alloyId19038.add($.__views.__alloyId19039);
    $.__views.__alloyId19040 = Ti.UI.createView({
        id: "__alloyId19040"
    });
    $.__views.__alloyId19040 && $.addTopLevelView($.__views.__alloyId19040);
    $.__views.__alloyId19041 = Ti.UI.createView({
        id: "__alloyId19041"
    });
    $.__views.__alloyId19040.add($.__views.__alloyId19041);
    $.__views.__alloyId19042 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19042"
    });
    $.__views.__alloyId19041.add($.__views.__alloyId19042);
    $.__views.__alloyId19043 = Ti.UI.createView({
        id: "__alloyId19043"
    });
    $.__views.__alloyId19043 && $.addTopLevelView($.__views.__alloyId19043);
    $.__views.__alloyId19044 = Ti.UI.createView({
        id: "__alloyId19044"
    });
    $.__views.__alloyId19043.add($.__views.__alloyId19044);
    $.__views.__alloyId19045 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19045"
    });
    $.__views.__alloyId19044.add($.__views.__alloyId19045);
    $.__views.__alloyId19046 = Ti.UI.createView({
        id: "__alloyId19046"
    });
    $.__views.__alloyId19046 && $.addTopLevelView($.__views.__alloyId19046);
    $.__views.__alloyId19047 = Ti.UI.createView({
        id: "__alloyId19047"
    });
    $.__views.__alloyId19046.add($.__views.__alloyId19047);
    $.__views.__alloyId19048 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19048"
    });
    $.__views.__alloyId19047.add($.__views.__alloyId19048);
    $.__views.__alloyId19049 = Ti.UI.createView({
        id: "__alloyId19049"
    });
    $.__views.__alloyId19049 && $.addTopLevelView($.__views.__alloyId19049);
    $.__views.__alloyId19050 = Ti.UI.createView({
        id: "__alloyId19050"
    });
    $.__views.__alloyId19049.add($.__views.__alloyId19050);
    $.__views.__alloyId19051 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19051"
    });
    $.__views.__alloyId19050.add($.__views.__alloyId19051);
    $.__views.__alloyId19052 = Ti.UI.createView({
        id: "__alloyId19052"
    });
    $.__views.__alloyId19052 && $.addTopLevelView($.__views.__alloyId19052);
    $.__views.__alloyId19053 = Ti.UI.createView({
        id: "__alloyId19053"
    });
    $.__views.__alloyId19052.add($.__views.__alloyId19053);
    $.__views.__alloyId19054 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19054"
    });
    $.__views.__alloyId19053.add($.__views.__alloyId19054);
    $.__views.__alloyId19055 = Ti.UI.createView({
        id: "__alloyId19055"
    });
    $.__views.__alloyId19055 && $.addTopLevelView($.__views.__alloyId19055);
    $.__views.__alloyId19056 = Ti.UI.createView({
        id: "__alloyId19056"
    });
    $.__views.__alloyId19055.add($.__views.__alloyId19056);
    $.__views.__alloyId19057 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19057"
    });
    $.__views.__alloyId19056.add($.__views.__alloyId19057);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;