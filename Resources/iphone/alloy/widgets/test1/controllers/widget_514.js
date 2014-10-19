function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_514";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_514 = Ti.UI.createView({
        id: "widget_514"
    });
    $.__views.widget_514 && $.addTopLevelView($.__views.widget_514);
    $.__views.__alloyId12038 = Ti.UI.createView({
        id: "__alloyId12038"
    });
    $.__views.widget_514.add($.__views.__alloyId12038);
    $.__views.__alloyId12039 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12039"
    });
    $.__views.__alloyId12038.add($.__views.__alloyId12039);
    $.__views.__alloyId12040 = Ti.UI.createView({
        id: "__alloyId12040"
    });
    $.__views.__alloyId12040 && $.addTopLevelView($.__views.__alloyId12040);
    $.__views.__alloyId12041 = Ti.UI.createView({
        id: "__alloyId12041"
    });
    $.__views.__alloyId12040.add($.__views.__alloyId12041);
    $.__views.__alloyId12042 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12042"
    });
    $.__views.__alloyId12041.add($.__views.__alloyId12042);
    $.__views.__alloyId12043 = Ti.UI.createView({
        id: "__alloyId12043"
    });
    $.__views.__alloyId12043 && $.addTopLevelView($.__views.__alloyId12043);
    $.__views.__alloyId12044 = Ti.UI.createView({
        id: "__alloyId12044"
    });
    $.__views.__alloyId12043.add($.__views.__alloyId12044);
    $.__views.__alloyId12045 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12045"
    });
    $.__views.__alloyId12044.add($.__views.__alloyId12045);
    $.__views.__alloyId12046 = Ti.UI.createView({
        id: "__alloyId12046"
    });
    $.__views.__alloyId12046 && $.addTopLevelView($.__views.__alloyId12046);
    $.__views.__alloyId12047 = Ti.UI.createView({
        id: "__alloyId12047"
    });
    $.__views.__alloyId12046.add($.__views.__alloyId12047);
    $.__views.__alloyId12048 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12048"
    });
    $.__views.__alloyId12047.add($.__views.__alloyId12048);
    $.__views.__alloyId12049 = Ti.UI.createView({
        id: "__alloyId12049"
    });
    $.__views.__alloyId12049 && $.addTopLevelView($.__views.__alloyId12049);
    $.__views.__alloyId12050 = Ti.UI.createView({
        id: "__alloyId12050"
    });
    $.__views.__alloyId12049.add($.__views.__alloyId12050);
    $.__views.__alloyId12051 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12051"
    });
    $.__views.__alloyId12050.add($.__views.__alloyId12051);
    $.__views.__alloyId12052 = Ti.UI.createView({
        id: "__alloyId12052"
    });
    $.__views.__alloyId12052 && $.addTopLevelView($.__views.__alloyId12052);
    $.__views.__alloyId12053 = Ti.UI.createView({
        id: "__alloyId12053"
    });
    $.__views.__alloyId12052.add($.__views.__alloyId12053);
    $.__views.__alloyId12054 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12054"
    });
    $.__views.__alloyId12053.add($.__views.__alloyId12054);
    $.__views.__alloyId12055 = Ti.UI.createView({
        id: "__alloyId12055"
    });
    $.__views.__alloyId12055 && $.addTopLevelView($.__views.__alloyId12055);
    $.__views.__alloyId12056 = Ti.UI.createView({
        id: "__alloyId12056"
    });
    $.__views.__alloyId12055.add($.__views.__alloyId12056);
    $.__views.__alloyId12057 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12057"
    });
    $.__views.__alloyId12056.add($.__views.__alloyId12057);
    $.__views.__alloyId12058 = Ti.UI.createView({
        id: "__alloyId12058"
    });
    $.__views.__alloyId12058 && $.addTopLevelView($.__views.__alloyId12058);
    $.__views.__alloyId12059 = Ti.UI.createView({
        id: "__alloyId12059"
    });
    $.__views.__alloyId12058.add($.__views.__alloyId12059);
    $.__views.__alloyId12060 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12060"
    });
    $.__views.__alloyId12059.add($.__views.__alloyId12060);
    $.__views.__alloyId12061 = Ti.UI.createView({
        id: "__alloyId12061"
    });
    $.__views.__alloyId12061 && $.addTopLevelView($.__views.__alloyId12061);
    $.__views.__alloyId12062 = Ti.UI.createView({
        id: "__alloyId12062"
    });
    $.__views.__alloyId12061.add($.__views.__alloyId12062);
    $.__views.__alloyId12063 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12063"
    });
    $.__views.__alloyId12062.add($.__views.__alloyId12063);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;