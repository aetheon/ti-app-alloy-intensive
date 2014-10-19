function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_860";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_860 = Ti.UI.createView({
        id: "widget_860"
    });
    $.__views.widget_860 && $.addTopLevelView($.__views.widget_860);
    $.__views.__alloyId22022 = Ti.UI.createView({
        id: "__alloyId22022"
    });
    $.__views.widget_860.add($.__views.__alloyId22022);
    $.__views.__alloyId22023 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22023"
    });
    $.__views.__alloyId22022.add($.__views.__alloyId22023);
    $.__views.__alloyId22024 = Ti.UI.createView({
        id: "__alloyId22024"
    });
    $.__views.__alloyId22024 && $.addTopLevelView($.__views.__alloyId22024);
    $.__views.__alloyId22025 = Ti.UI.createView({
        id: "__alloyId22025"
    });
    $.__views.__alloyId22024.add($.__views.__alloyId22025);
    $.__views.__alloyId22026 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22026"
    });
    $.__views.__alloyId22025.add($.__views.__alloyId22026);
    $.__views.__alloyId22027 = Ti.UI.createView({
        id: "__alloyId22027"
    });
    $.__views.__alloyId22027 && $.addTopLevelView($.__views.__alloyId22027);
    $.__views.__alloyId22028 = Ti.UI.createView({
        id: "__alloyId22028"
    });
    $.__views.__alloyId22027.add($.__views.__alloyId22028);
    $.__views.__alloyId22029 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22029"
    });
    $.__views.__alloyId22028.add($.__views.__alloyId22029);
    $.__views.__alloyId22030 = Ti.UI.createView({
        id: "__alloyId22030"
    });
    $.__views.__alloyId22030 && $.addTopLevelView($.__views.__alloyId22030);
    $.__views.__alloyId22031 = Ti.UI.createView({
        id: "__alloyId22031"
    });
    $.__views.__alloyId22030.add($.__views.__alloyId22031);
    $.__views.__alloyId22032 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22032"
    });
    $.__views.__alloyId22031.add($.__views.__alloyId22032);
    $.__views.__alloyId22033 = Ti.UI.createView({
        id: "__alloyId22033"
    });
    $.__views.__alloyId22033 && $.addTopLevelView($.__views.__alloyId22033);
    $.__views.__alloyId22034 = Ti.UI.createView({
        id: "__alloyId22034"
    });
    $.__views.__alloyId22033.add($.__views.__alloyId22034);
    $.__views.__alloyId22035 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22035"
    });
    $.__views.__alloyId22034.add($.__views.__alloyId22035);
    $.__views.__alloyId22036 = Ti.UI.createView({
        id: "__alloyId22036"
    });
    $.__views.__alloyId22036 && $.addTopLevelView($.__views.__alloyId22036);
    $.__views.__alloyId22037 = Ti.UI.createView({
        id: "__alloyId22037"
    });
    $.__views.__alloyId22036.add($.__views.__alloyId22037);
    $.__views.__alloyId22038 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22038"
    });
    $.__views.__alloyId22037.add($.__views.__alloyId22038);
    $.__views.__alloyId22039 = Ti.UI.createView({
        id: "__alloyId22039"
    });
    $.__views.__alloyId22039 && $.addTopLevelView($.__views.__alloyId22039);
    $.__views.__alloyId22040 = Ti.UI.createView({
        id: "__alloyId22040"
    });
    $.__views.__alloyId22039.add($.__views.__alloyId22040);
    $.__views.__alloyId22041 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22041"
    });
    $.__views.__alloyId22040.add($.__views.__alloyId22041);
    $.__views.__alloyId22042 = Ti.UI.createView({
        id: "__alloyId22042"
    });
    $.__views.__alloyId22042 && $.addTopLevelView($.__views.__alloyId22042);
    $.__views.__alloyId22043 = Ti.UI.createView({
        id: "__alloyId22043"
    });
    $.__views.__alloyId22042.add($.__views.__alloyId22043);
    $.__views.__alloyId22044 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22044"
    });
    $.__views.__alloyId22043.add($.__views.__alloyId22044);
    $.__views.__alloyId22045 = Ti.UI.createView({
        id: "__alloyId22045"
    });
    $.__views.__alloyId22045 && $.addTopLevelView($.__views.__alloyId22045);
    $.__views.__alloyId22046 = Ti.UI.createView({
        id: "__alloyId22046"
    });
    $.__views.__alloyId22045.add($.__views.__alloyId22046);
    $.__views.__alloyId22047 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22047"
    });
    $.__views.__alloyId22046.add($.__views.__alloyId22047);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;