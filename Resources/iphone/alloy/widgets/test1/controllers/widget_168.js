function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_168";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_168 = Ti.UI.createView({
        id: "widget_168"
    });
    $.__views.widget_168 && $.addTopLevelView($.__views.widget_168);
    $.__views.__alloyId2028 = Ti.UI.createView({
        id: "__alloyId2028"
    });
    $.__views.widget_168.add($.__views.__alloyId2028);
    $.__views.__alloyId2029 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2029"
    });
    $.__views.__alloyId2028.add($.__views.__alloyId2029);
    $.__views.__alloyId2030 = Ti.UI.createView({
        id: "__alloyId2030"
    });
    $.__views.__alloyId2030 && $.addTopLevelView($.__views.__alloyId2030);
    $.__views.__alloyId2031 = Ti.UI.createView({
        id: "__alloyId2031"
    });
    $.__views.__alloyId2030.add($.__views.__alloyId2031);
    $.__views.__alloyId2032 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2032"
    });
    $.__views.__alloyId2031.add($.__views.__alloyId2032);
    $.__views.__alloyId2033 = Ti.UI.createView({
        id: "__alloyId2033"
    });
    $.__views.__alloyId2033 && $.addTopLevelView($.__views.__alloyId2033);
    $.__views.__alloyId2034 = Ti.UI.createView({
        id: "__alloyId2034"
    });
    $.__views.__alloyId2033.add($.__views.__alloyId2034);
    $.__views.__alloyId2035 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2035"
    });
    $.__views.__alloyId2034.add($.__views.__alloyId2035);
    $.__views.__alloyId2036 = Ti.UI.createView({
        id: "__alloyId2036"
    });
    $.__views.__alloyId2036 && $.addTopLevelView($.__views.__alloyId2036);
    $.__views.__alloyId2037 = Ti.UI.createView({
        id: "__alloyId2037"
    });
    $.__views.__alloyId2036.add($.__views.__alloyId2037);
    $.__views.__alloyId2038 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2038"
    });
    $.__views.__alloyId2037.add($.__views.__alloyId2038);
    $.__views.__alloyId2039 = Ti.UI.createView({
        id: "__alloyId2039"
    });
    $.__views.__alloyId2039 && $.addTopLevelView($.__views.__alloyId2039);
    $.__views.__alloyId2040 = Ti.UI.createView({
        id: "__alloyId2040"
    });
    $.__views.__alloyId2039.add($.__views.__alloyId2040);
    $.__views.__alloyId2041 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2041"
    });
    $.__views.__alloyId2040.add($.__views.__alloyId2041);
    $.__views.__alloyId2042 = Ti.UI.createView({
        id: "__alloyId2042"
    });
    $.__views.__alloyId2042 && $.addTopLevelView($.__views.__alloyId2042);
    $.__views.__alloyId2043 = Ti.UI.createView({
        id: "__alloyId2043"
    });
    $.__views.__alloyId2042.add($.__views.__alloyId2043);
    $.__views.__alloyId2044 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2044"
    });
    $.__views.__alloyId2043.add($.__views.__alloyId2044);
    $.__views.__alloyId2045 = Ti.UI.createView({
        id: "__alloyId2045"
    });
    $.__views.__alloyId2045 && $.addTopLevelView($.__views.__alloyId2045);
    $.__views.__alloyId2046 = Ti.UI.createView({
        id: "__alloyId2046"
    });
    $.__views.__alloyId2045.add($.__views.__alloyId2046);
    $.__views.__alloyId2047 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2047"
    });
    $.__views.__alloyId2046.add($.__views.__alloyId2047);
    $.__views.__alloyId2048 = Ti.UI.createView({
        id: "__alloyId2048"
    });
    $.__views.__alloyId2048 && $.addTopLevelView($.__views.__alloyId2048);
    $.__views.__alloyId2049 = Ti.UI.createView({
        id: "__alloyId2049"
    });
    $.__views.__alloyId2048.add($.__views.__alloyId2049);
    $.__views.__alloyId2050 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2050"
    });
    $.__views.__alloyId2049.add($.__views.__alloyId2050);
    $.__views.__alloyId2051 = Ti.UI.createView({
        id: "__alloyId2051"
    });
    $.__views.__alloyId2051 && $.addTopLevelView($.__views.__alloyId2051);
    $.__views.__alloyId2052 = Ti.UI.createView({
        id: "__alloyId2052"
    });
    $.__views.__alloyId2051.add($.__views.__alloyId2052);
    $.__views.__alloyId2053 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2053"
    });
    $.__views.__alloyId2052.add($.__views.__alloyId2053);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;