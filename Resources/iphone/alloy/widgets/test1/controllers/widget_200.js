function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_200";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_200 = Ti.UI.createView({
        id: "widget_200"
    });
    $.__views.widget_200 && $.addTopLevelView($.__views.widget_200);
    $.__views.__alloyId2990 = Ti.UI.createView({
        id: "__alloyId2990"
    });
    $.__views.widget_200.add($.__views.__alloyId2990);
    $.__views.__alloyId2991 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2991"
    });
    $.__views.__alloyId2990.add($.__views.__alloyId2991);
    $.__views.__alloyId2992 = Ti.UI.createView({
        id: "__alloyId2992"
    });
    $.__views.__alloyId2992 && $.addTopLevelView($.__views.__alloyId2992);
    $.__views.__alloyId2993 = Ti.UI.createView({
        id: "__alloyId2993"
    });
    $.__views.__alloyId2992.add($.__views.__alloyId2993);
    $.__views.__alloyId2994 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2994"
    });
    $.__views.__alloyId2993.add($.__views.__alloyId2994);
    $.__views.__alloyId2995 = Ti.UI.createView({
        id: "__alloyId2995"
    });
    $.__views.__alloyId2995 && $.addTopLevelView($.__views.__alloyId2995);
    $.__views.__alloyId2996 = Ti.UI.createView({
        id: "__alloyId2996"
    });
    $.__views.__alloyId2995.add($.__views.__alloyId2996);
    $.__views.__alloyId2997 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2997"
    });
    $.__views.__alloyId2996.add($.__views.__alloyId2997);
    $.__views.__alloyId2998 = Ti.UI.createView({
        id: "__alloyId2998"
    });
    $.__views.__alloyId2998 && $.addTopLevelView($.__views.__alloyId2998);
    $.__views.__alloyId2999 = Ti.UI.createView({
        id: "__alloyId2999"
    });
    $.__views.__alloyId2998.add($.__views.__alloyId2999);
    $.__views.__alloyId3000 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3000"
    });
    $.__views.__alloyId2999.add($.__views.__alloyId3000);
    $.__views.__alloyId3001 = Ti.UI.createView({
        id: "__alloyId3001"
    });
    $.__views.__alloyId3001 && $.addTopLevelView($.__views.__alloyId3001);
    $.__views.__alloyId3002 = Ti.UI.createView({
        id: "__alloyId3002"
    });
    $.__views.__alloyId3001.add($.__views.__alloyId3002);
    $.__views.__alloyId3003 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3003"
    });
    $.__views.__alloyId3002.add($.__views.__alloyId3003);
    $.__views.__alloyId3004 = Ti.UI.createView({
        id: "__alloyId3004"
    });
    $.__views.__alloyId3004 && $.addTopLevelView($.__views.__alloyId3004);
    $.__views.__alloyId3005 = Ti.UI.createView({
        id: "__alloyId3005"
    });
    $.__views.__alloyId3004.add($.__views.__alloyId3005);
    $.__views.__alloyId3006 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3006"
    });
    $.__views.__alloyId3005.add($.__views.__alloyId3006);
    $.__views.__alloyId3007 = Ti.UI.createView({
        id: "__alloyId3007"
    });
    $.__views.__alloyId3007 && $.addTopLevelView($.__views.__alloyId3007);
    $.__views.__alloyId3008 = Ti.UI.createView({
        id: "__alloyId3008"
    });
    $.__views.__alloyId3007.add($.__views.__alloyId3008);
    $.__views.__alloyId3009 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3009"
    });
    $.__views.__alloyId3008.add($.__views.__alloyId3009);
    $.__views.__alloyId3010 = Ti.UI.createView({
        id: "__alloyId3010"
    });
    $.__views.__alloyId3010 && $.addTopLevelView($.__views.__alloyId3010);
    $.__views.__alloyId3011 = Ti.UI.createView({
        id: "__alloyId3011"
    });
    $.__views.__alloyId3010.add($.__views.__alloyId3011);
    $.__views.__alloyId3012 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3012"
    });
    $.__views.__alloyId3011.add($.__views.__alloyId3012);
    $.__views.__alloyId3013 = Ti.UI.createView({
        id: "__alloyId3013"
    });
    $.__views.__alloyId3013 && $.addTopLevelView($.__views.__alloyId3013);
    $.__views.__alloyId3014 = Ti.UI.createView({
        id: "__alloyId3014"
    });
    $.__views.__alloyId3013.add($.__views.__alloyId3014);
    $.__views.__alloyId3015 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3015"
    });
    $.__views.__alloyId3014.add($.__views.__alloyId3015);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;