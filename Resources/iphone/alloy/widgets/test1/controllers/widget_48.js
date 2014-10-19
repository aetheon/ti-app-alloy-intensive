function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_48";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_48 = Ti.UI.createView({
        id: "widget_48"
    });
    $.__views.widget_48 && $.addTopLevelView($.__views.widget_48);
    $.__views.__alloyId11024 = Ti.UI.createView({
        id: "__alloyId11024"
    });
    $.__views.widget_48.add($.__views.__alloyId11024);
    $.__views.__alloyId11025 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11025"
    });
    $.__views.__alloyId11024.add($.__views.__alloyId11025);
    $.__views.__alloyId11026 = Ti.UI.createView({
        id: "__alloyId11026"
    });
    $.__views.__alloyId11026 && $.addTopLevelView($.__views.__alloyId11026);
    $.__views.__alloyId11027 = Ti.UI.createView({
        id: "__alloyId11027"
    });
    $.__views.__alloyId11026.add($.__views.__alloyId11027);
    $.__views.__alloyId11028 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11028"
    });
    $.__views.__alloyId11027.add($.__views.__alloyId11028);
    $.__views.__alloyId11029 = Ti.UI.createView({
        id: "__alloyId11029"
    });
    $.__views.__alloyId11029 && $.addTopLevelView($.__views.__alloyId11029);
    $.__views.__alloyId11030 = Ti.UI.createView({
        id: "__alloyId11030"
    });
    $.__views.__alloyId11029.add($.__views.__alloyId11030);
    $.__views.__alloyId11031 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11031"
    });
    $.__views.__alloyId11030.add($.__views.__alloyId11031);
    $.__views.__alloyId11032 = Ti.UI.createView({
        id: "__alloyId11032"
    });
    $.__views.__alloyId11032 && $.addTopLevelView($.__views.__alloyId11032);
    $.__views.__alloyId11033 = Ti.UI.createView({
        id: "__alloyId11033"
    });
    $.__views.__alloyId11032.add($.__views.__alloyId11033);
    $.__views.__alloyId11034 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11034"
    });
    $.__views.__alloyId11033.add($.__views.__alloyId11034);
    $.__views.__alloyId11035 = Ti.UI.createView({
        id: "__alloyId11035"
    });
    $.__views.__alloyId11035 && $.addTopLevelView($.__views.__alloyId11035);
    $.__views.__alloyId11036 = Ti.UI.createView({
        id: "__alloyId11036"
    });
    $.__views.__alloyId11035.add($.__views.__alloyId11036);
    $.__views.__alloyId11037 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11037"
    });
    $.__views.__alloyId11036.add($.__views.__alloyId11037);
    $.__views.__alloyId11038 = Ti.UI.createView({
        id: "__alloyId11038"
    });
    $.__views.__alloyId11038 && $.addTopLevelView($.__views.__alloyId11038);
    $.__views.__alloyId11039 = Ti.UI.createView({
        id: "__alloyId11039"
    });
    $.__views.__alloyId11038.add($.__views.__alloyId11039);
    $.__views.__alloyId11040 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11040"
    });
    $.__views.__alloyId11039.add($.__views.__alloyId11040);
    $.__views.__alloyId11041 = Ti.UI.createView({
        id: "__alloyId11041"
    });
    $.__views.__alloyId11041 && $.addTopLevelView($.__views.__alloyId11041);
    $.__views.__alloyId11042 = Ti.UI.createView({
        id: "__alloyId11042"
    });
    $.__views.__alloyId11041.add($.__views.__alloyId11042);
    $.__views.__alloyId11043 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11043"
    });
    $.__views.__alloyId11042.add($.__views.__alloyId11043);
    $.__views.__alloyId11044 = Ti.UI.createView({
        id: "__alloyId11044"
    });
    $.__views.__alloyId11044 && $.addTopLevelView($.__views.__alloyId11044);
    $.__views.__alloyId11045 = Ti.UI.createView({
        id: "__alloyId11045"
    });
    $.__views.__alloyId11044.add($.__views.__alloyId11045);
    $.__views.__alloyId11046 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11046"
    });
    $.__views.__alloyId11045.add($.__views.__alloyId11046);
    $.__views.__alloyId11047 = Ti.UI.createView({
        id: "__alloyId11047"
    });
    $.__views.__alloyId11047 && $.addTopLevelView($.__views.__alloyId11047);
    $.__views.__alloyId11048 = Ti.UI.createView({
        id: "__alloyId11048"
    });
    $.__views.__alloyId11047.add($.__views.__alloyId11048);
    $.__views.__alloyId11049 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11049"
    });
    $.__views.__alloyId11048.add($.__views.__alloyId11049);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;