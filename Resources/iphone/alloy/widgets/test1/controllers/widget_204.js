function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_204";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_204 = Ti.UI.createView({
        id: "widget_204"
    });
    $.__views.widget_204 && $.addTopLevelView($.__views.widget_204);
    $.__views.__alloyId3094 = Ti.UI.createView({
        id: "__alloyId3094"
    });
    $.__views.widget_204.add($.__views.__alloyId3094);
    $.__views.__alloyId3095 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3095"
    });
    $.__views.__alloyId3094.add($.__views.__alloyId3095);
    $.__views.__alloyId3096 = Ti.UI.createView({
        id: "__alloyId3096"
    });
    $.__views.__alloyId3096 && $.addTopLevelView($.__views.__alloyId3096);
    $.__views.__alloyId3097 = Ti.UI.createView({
        id: "__alloyId3097"
    });
    $.__views.__alloyId3096.add($.__views.__alloyId3097);
    $.__views.__alloyId3098 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3098"
    });
    $.__views.__alloyId3097.add($.__views.__alloyId3098);
    $.__views.__alloyId3099 = Ti.UI.createView({
        id: "__alloyId3099"
    });
    $.__views.__alloyId3099 && $.addTopLevelView($.__views.__alloyId3099);
    $.__views.__alloyId3100 = Ti.UI.createView({
        id: "__alloyId3100"
    });
    $.__views.__alloyId3099.add($.__views.__alloyId3100);
    $.__views.__alloyId3101 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3101"
    });
    $.__views.__alloyId3100.add($.__views.__alloyId3101);
    $.__views.__alloyId3102 = Ti.UI.createView({
        id: "__alloyId3102"
    });
    $.__views.__alloyId3102 && $.addTopLevelView($.__views.__alloyId3102);
    $.__views.__alloyId3103 = Ti.UI.createView({
        id: "__alloyId3103"
    });
    $.__views.__alloyId3102.add($.__views.__alloyId3103);
    $.__views.__alloyId3104 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3104"
    });
    $.__views.__alloyId3103.add($.__views.__alloyId3104);
    $.__views.__alloyId3105 = Ti.UI.createView({
        id: "__alloyId3105"
    });
    $.__views.__alloyId3105 && $.addTopLevelView($.__views.__alloyId3105);
    $.__views.__alloyId3106 = Ti.UI.createView({
        id: "__alloyId3106"
    });
    $.__views.__alloyId3105.add($.__views.__alloyId3106);
    $.__views.__alloyId3107 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3107"
    });
    $.__views.__alloyId3106.add($.__views.__alloyId3107);
    $.__views.__alloyId3108 = Ti.UI.createView({
        id: "__alloyId3108"
    });
    $.__views.__alloyId3108 && $.addTopLevelView($.__views.__alloyId3108);
    $.__views.__alloyId3109 = Ti.UI.createView({
        id: "__alloyId3109"
    });
    $.__views.__alloyId3108.add($.__views.__alloyId3109);
    $.__views.__alloyId3110 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3110"
    });
    $.__views.__alloyId3109.add($.__views.__alloyId3110);
    $.__views.__alloyId3111 = Ti.UI.createView({
        id: "__alloyId3111"
    });
    $.__views.__alloyId3111 && $.addTopLevelView($.__views.__alloyId3111);
    $.__views.__alloyId3112 = Ti.UI.createView({
        id: "__alloyId3112"
    });
    $.__views.__alloyId3111.add($.__views.__alloyId3112);
    $.__views.__alloyId3113 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3113"
    });
    $.__views.__alloyId3112.add($.__views.__alloyId3113);
    $.__views.__alloyId3114 = Ti.UI.createView({
        id: "__alloyId3114"
    });
    $.__views.__alloyId3114 && $.addTopLevelView($.__views.__alloyId3114);
    $.__views.__alloyId3115 = Ti.UI.createView({
        id: "__alloyId3115"
    });
    $.__views.__alloyId3114.add($.__views.__alloyId3115);
    $.__views.__alloyId3116 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3116"
    });
    $.__views.__alloyId3115.add($.__views.__alloyId3116);
    $.__views.__alloyId3117 = Ti.UI.createView({
        id: "__alloyId3117"
    });
    $.__views.__alloyId3117 && $.addTopLevelView($.__views.__alloyId3117);
    $.__views.__alloyId3118 = Ti.UI.createView({
        id: "__alloyId3118"
    });
    $.__views.__alloyId3117.add($.__views.__alloyId3118);
    $.__views.__alloyId3119 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3119"
    });
    $.__views.__alloyId3118.add($.__views.__alloyId3119);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;