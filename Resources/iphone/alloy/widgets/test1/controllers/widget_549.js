function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_549";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_549 = Ti.UI.createView({
        id: "widget_549"
    });
    $.__views.widget_549 && $.addTopLevelView($.__views.widget_549);
    $.__views.__alloyId13026 = Ti.UI.createView({
        id: "__alloyId13026"
    });
    $.__views.widget_549.add($.__views.__alloyId13026);
    $.__views.__alloyId13027 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13027"
    });
    $.__views.__alloyId13026.add($.__views.__alloyId13027);
    $.__views.__alloyId13028 = Ti.UI.createView({
        id: "__alloyId13028"
    });
    $.__views.__alloyId13028 && $.addTopLevelView($.__views.__alloyId13028);
    $.__views.__alloyId13029 = Ti.UI.createView({
        id: "__alloyId13029"
    });
    $.__views.__alloyId13028.add($.__views.__alloyId13029);
    $.__views.__alloyId13030 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13030"
    });
    $.__views.__alloyId13029.add($.__views.__alloyId13030);
    $.__views.__alloyId13031 = Ti.UI.createView({
        id: "__alloyId13031"
    });
    $.__views.__alloyId13031 && $.addTopLevelView($.__views.__alloyId13031);
    $.__views.__alloyId13032 = Ti.UI.createView({
        id: "__alloyId13032"
    });
    $.__views.__alloyId13031.add($.__views.__alloyId13032);
    $.__views.__alloyId13033 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13033"
    });
    $.__views.__alloyId13032.add($.__views.__alloyId13033);
    $.__views.__alloyId13034 = Ti.UI.createView({
        id: "__alloyId13034"
    });
    $.__views.__alloyId13034 && $.addTopLevelView($.__views.__alloyId13034);
    $.__views.__alloyId13035 = Ti.UI.createView({
        id: "__alloyId13035"
    });
    $.__views.__alloyId13034.add($.__views.__alloyId13035);
    $.__views.__alloyId13036 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13036"
    });
    $.__views.__alloyId13035.add($.__views.__alloyId13036);
    $.__views.__alloyId13037 = Ti.UI.createView({
        id: "__alloyId13037"
    });
    $.__views.__alloyId13037 && $.addTopLevelView($.__views.__alloyId13037);
    $.__views.__alloyId13038 = Ti.UI.createView({
        id: "__alloyId13038"
    });
    $.__views.__alloyId13037.add($.__views.__alloyId13038);
    $.__views.__alloyId13039 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13039"
    });
    $.__views.__alloyId13038.add($.__views.__alloyId13039);
    $.__views.__alloyId13040 = Ti.UI.createView({
        id: "__alloyId13040"
    });
    $.__views.__alloyId13040 && $.addTopLevelView($.__views.__alloyId13040);
    $.__views.__alloyId13041 = Ti.UI.createView({
        id: "__alloyId13041"
    });
    $.__views.__alloyId13040.add($.__views.__alloyId13041);
    $.__views.__alloyId13042 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13042"
    });
    $.__views.__alloyId13041.add($.__views.__alloyId13042);
    $.__views.__alloyId13043 = Ti.UI.createView({
        id: "__alloyId13043"
    });
    $.__views.__alloyId13043 && $.addTopLevelView($.__views.__alloyId13043);
    $.__views.__alloyId13044 = Ti.UI.createView({
        id: "__alloyId13044"
    });
    $.__views.__alloyId13043.add($.__views.__alloyId13044);
    $.__views.__alloyId13045 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13045"
    });
    $.__views.__alloyId13044.add($.__views.__alloyId13045);
    $.__views.__alloyId13046 = Ti.UI.createView({
        id: "__alloyId13046"
    });
    $.__views.__alloyId13046 && $.addTopLevelView($.__views.__alloyId13046);
    $.__views.__alloyId13047 = Ti.UI.createView({
        id: "__alloyId13047"
    });
    $.__views.__alloyId13046.add($.__views.__alloyId13047);
    $.__views.__alloyId13048 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13048"
    });
    $.__views.__alloyId13047.add($.__views.__alloyId13048);
    $.__views.__alloyId13049 = Ti.UI.createView({
        id: "__alloyId13049"
    });
    $.__views.__alloyId13049 && $.addTopLevelView($.__views.__alloyId13049);
    $.__views.__alloyId13050 = Ti.UI.createView({
        id: "__alloyId13050"
    });
    $.__views.__alloyId13049.add($.__views.__alloyId13050);
    $.__views.__alloyId13051 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13051"
    });
    $.__views.__alloyId13050.add($.__views.__alloyId13051);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;