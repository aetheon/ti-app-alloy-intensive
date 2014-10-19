function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_133";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_133 = Ti.UI.createView({
        id: "widget_133"
    });
    $.__views.widget_133 && $.addTopLevelView($.__views.widget_133);
    $.__views.__alloyId1040 = Ti.UI.createView({
        id: "__alloyId1040"
    });
    $.__views.widget_133.add($.__views.__alloyId1040);
    $.__views.__alloyId1041 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1041"
    });
    $.__views.__alloyId1040.add($.__views.__alloyId1041);
    $.__views.__alloyId1042 = Ti.UI.createView({
        id: "__alloyId1042"
    });
    $.__views.__alloyId1042 && $.addTopLevelView($.__views.__alloyId1042);
    $.__views.__alloyId1043 = Ti.UI.createView({
        id: "__alloyId1043"
    });
    $.__views.__alloyId1042.add($.__views.__alloyId1043);
    $.__views.__alloyId1044 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1044"
    });
    $.__views.__alloyId1043.add($.__views.__alloyId1044);
    $.__views.__alloyId1045 = Ti.UI.createView({
        id: "__alloyId1045"
    });
    $.__views.__alloyId1045 && $.addTopLevelView($.__views.__alloyId1045);
    $.__views.__alloyId1046 = Ti.UI.createView({
        id: "__alloyId1046"
    });
    $.__views.__alloyId1045.add($.__views.__alloyId1046);
    $.__views.__alloyId1047 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1047"
    });
    $.__views.__alloyId1046.add($.__views.__alloyId1047);
    $.__views.__alloyId1048 = Ti.UI.createView({
        id: "__alloyId1048"
    });
    $.__views.__alloyId1048 && $.addTopLevelView($.__views.__alloyId1048);
    $.__views.__alloyId1049 = Ti.UI.createView({
        id: "__alloyId1049"
    });
    $.__views.__alloyId1048.add($.__views.__alloyId1049);
    $.__views.__alloyId1050 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1050"
    });
    $.__views.__alloyId1049.add($.__views.__alloyId1050);
    $.__views.__alloyId1051 = Ti.UI.createView({
        id: "__alloyId1051"
    });
    $.__views.__alloyId1051 && $.addTopLevelView($.__views.__alloyId1051);
    $.__views.__alloyId1052 = Ti.UI.createView({
        id: "__alloyId1052"
    });
    $.__views.__alloyId1051.add($.__views.__alloyId1052);
    $.__views.__alloyId1053 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1053"
    });
    $.__views.__alloyId1052.add($.__views.__alloyId1053);
    $.__views.__alloyId1054 = Ti.UI.createView({
        id: "__alloyId1054"
    });
    $.__views.__alloyId1054 && $.addTopLevelView($.__views.__alloyId1054);
    $.__views.__alloyId1055 = Ti.UI.createView({
        id: "__alloyId1055"
    });
    $.__views.__alloyId1054.add($.__views.__alloyId1055);
    $.__views.__alloyId1056 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1056"
    });
    $.__views.__alloyId1055.add($.__views.__alloyId1056);
    $.__views.__alloyId1057 = Ti.UI.createView({
        id: "__alloyId1057"
    });
    $.__views.__alloyId1057 && $.addTopLevelView($.__views.__alloyId1057);
    $.__views.__alloyId1058 = Ti.UI.createView({
        id: "__alloyId1058"
    });
    $.__views.__alloyId1057.add($.__views.__alloyId1058);
    $.__views.__alloyId1059 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1059"
    });
    $.__views.__alloyId1058.add($.__views.__alloyId1059);
    $.__views.__alloyId1060 = Ti.UI.createView({
        id: "__alloyId1060"
    });
    $.__views.__alloyId1060 && $.addTopLevelView($.__views.__alloyId1060);
    $.__views.__alloyId1061 = Ti.UI.createView({
        id: "__alloyId1061"
    });
    $.__views.__alloyId1060.add($.__views.__alloyId1061);
    $.__views.__alloyId1062 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1062"
    });
    $.__views.__alloyId1061.add($.__views.__alloyId1062);
    $.__views.__alloyId1063 = Ti.UI.createView({
        id: "__alloyId1063"
    });
    $.__views.__alloyId1063 && $.addTopLevelView($.__views.__alloyId1063);
    $.__views.__alloyId1064 = Ti.UI.createView({
        id: "__alloyId1064"
    });
    $.__views.__alloyId1063.add($.__views.__alloyId1064);
    $.__views.__alloyId1065 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1065"
    });
    $.__views.__alloyId1064.add($.__views.__alloyId1065);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;