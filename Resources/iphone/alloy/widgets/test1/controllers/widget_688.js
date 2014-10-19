function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_688";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_688 = Ti.UI.createView({
        id: "widget_688"
    });
    $.__views.widget_688 && $.addTopLevelView($.__views.widget_688);
    $.__views.__alloyId17030 = Ti.UI.createView({
        id: "__alloyId17030"
    });
    $.__views.widget_688.add($.__views.__alloyId17030);
    $.__views.__alloyId17031 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17031"
    });
    $.__views.__alloyId17030.add($.__views.__alloyId17031);
    $.__views.__alloyId17032 = Ti.UI.createView({
        id: "__alloyId17032"
    });
    $.__views.__alloyId17032 && $.addTopLevelView($.__views.__alloyId17032);
    $.__views.__alloyId17033 = Ti.UI.createView({
        id: "__alloyId17033"
    });
    $.__views.__alloyId17032.add($.__views.__alloyId17033);
    $.__views.__alloyId17034 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17034"
    });
    $.__views.__alloyId17033.add($.__views.__alloyId17034);
    $.__views.__alloyId17035 = Ti.UI.createView({
        id: "__alloyId17035"
    });
    $.__views.__alloyId17035 && $.addTopLevelView($.__views.__alloyId17035);
    $.__views.__alloyId17036 = Ti.UI.createView({
        id: "__alloyId17036"
    });
    $.__views.__alloyId17035.add($.__views.__alloyId17036);
    $.__views.__alloyId17037 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17037"
    });
    $.__views.__alloyId17036.add($.__views.__alloyId17037);
    $.__views.__alloyId17038 = Ti.UI.createView({
        id: "__alloyId17038"
    });
    $.__views.__alloyId17038 && $.addTopLevelView($.__views.__alloyId17038);
    $.__views.__alloyId17039 = Ti.UI.createView({
        id: "__alloyId17039"
    });
    $.__views.__alloyId17038.add($.__views.__alloyId17039);
    $.__views.__alloyId17040 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17040"
    });
    $.__views.__alloyId17039.add($.__views.__alloyId17040);
    $.__views.__alloyId17041 = Ti.UI.createView({
        id: "__alloyId17041"
    });
    $.__views.__alloyId17041 && $.addTopLevelView($.__views.__alloyId17041);
    $.__views.__alloyId17042 = Ti.UI.createView({
        id: "__alloyId17042"
    });
    $.__views.__alloyId17041.add($.__views.__alloyId17042);
    $.__views.__alloyId17043 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17043"
    });
    $.__views.__alloyId17042.add($.__views.__alloyId17043);
    $.__views.__alloyId17044 = Ti.UI.createView({
        id: "__alloyId17044"
    });
    $.__views.__alloyId17044 && $.addTopLevelView($.__views.__alloyId17044);
    $.__views.__alloyId17045 = Ti.UI.createView({
        id: "__alloyId17045"
    });
    $.__views.__alloyId17044.add($.__views.__alloyId17045);
    $.__views.__alloyId17046 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17046"
    });
    $.__views.__alloyId17045.add($.__views.__alloyId17046);
    $.__views.__alloyId17047 = Ti.UI.createView({
        id: "__alloyId17047"
    });
    $.__views.__alloyId17047 && $.addTopLevelView($.__views.__alloyId17047);
    $.__views.__alloyId17048 = Ti.UI.createView({
        id: "__alloyId17048"
    });
    $.__views.__alloyId17047.add($.__views.__alloyId17048);
    $.__views.__alloyId17049 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17049"
    });
    $.__views.__alloyId17048.add($.__views.__alloyId17049);
    $.__views.__alloyId17050 = Ti.UI.createView({
        id: "__alloyId17050"
    });
    $.__views.__alloyId17050 && $.addTopLevelView($.__views.__alloyId17050);
    $.__views.__alloyId17051 = Ti.UI.createView({
        id: "__alloyId17051"
    });
    $.__views.__alloyId17050.add($.__views.__alloyId17051);
    $.__views.__alloyId17052 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17052"
    });
    $.__views.__alloyId17051.add($.__views.__alloyId17052);
    $.__views.__alloyId17053 = Ti.UI.createView({
        id: "__alloyId17053"
    });
    $.__views.__alloyId17053 && $.addTopLevelView($.__views.__alloyId17053);
    $.__views.__alloyId17054 = Ti.UI.createView({
        id: "__alloyId17054"
    });
    $.__views.__alloyId17053.add($.__views.__alloyId17054);
    $.__views.__alloyId17055 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17055"
    });
    $.__views.__alloyId17054.add($.__views.__alloyId17055);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;