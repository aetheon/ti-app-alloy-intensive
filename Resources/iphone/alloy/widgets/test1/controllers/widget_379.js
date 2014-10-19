function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_379";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_379 = Ti.UI.createView({
        id: "widget_379"
    });
    $.__views.widget_379 && $.addTopLevelView($.__views.widget_379);
    $.__views.__alloyId8112 = Ti.UI.createView({
        id: "__alloyId8112"
    });
    $.__views.widget_379.add($.__views.__alloyId8112);
    $.__views.__alloyId8113 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8113"
    });
    $.__views.__alloyId8112.add($.__views.__alloyId8113);
    $.__views.__alloyId8114 = Ti.UI.createView({
        id: "__alloyId8114"
    });
    $.__views.__alloyId8114 && $.addTopLevelView($.__views.__alloyId8114);
    $.__views.__alloyId8115 = Ti.UI.createView({
        id: "__alloyId8115"
    });
    $.__views.__alloyId8114.add($.__views.__alloyId8115);
    $.__views.__alloyId8116 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8116"
    });
    $.__views.__alloyId8115.add($.__views.__alloyId8116);
    $.__views.__alloyId8117 = Ti.UI.createView({
        id: "__alloyId8117"
    });
    $.__views.__alloyId8117 && $.addTopLevelView($.__views.__alloyId8117);
    $.__views.__alloyId8118 = Ti.UI.createView({
        id: "__alloyId8118"
    });
    $.__views.__alloyId8117.add($.__views.__alloyId8118);
    $.__views.__alloyId8119 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8119"
    });
    $.__views.__alloyId8118.add($.__views.__alloyId8119);
    $.__views.__alloyId8120 = Ti.UI.createView({
        id: "__alloyId8120"
    });
    $.__views.__alloyId8120 && $.addTopLevelView($.__views.__alloyId8120);
    $.__views.__alloyId8121 = Ti.UI.createView({
        id: "__alloyId8121"
    });
    $.__views.__alloyId8120.add($.__views.__alloyId8121);
    $.__views.__alloyId8122 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8122"
    });
    $.__views.__alloyId8121.add($.__views.__alloyId8122);
    $.__views.__alloyId8123 = Ti.UI.createView({
        id: "__alloyId8123"
    });
    $.__views.__alloyId8123 && $.addTopLevelView($.__views.__alloyId8123);
    $.__views.__alloyId8124 = Ti.UI.createView({
        id: "__alloyId8124"
    });
    $.__views.__alloyId8123.add($.__views.__alloyId8124);
    $.__views.__alloyId8125 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8125"
    });
    $.__views.__alloyId8124.add($.__views.__alloyId8125);
    $.__views.__alloyId8126 = Ti.UI.createView({
        id: "__alloyId8126"
    });
    $.__views.__alloyId8126 && $.addTopLevelView($.__views.__alloyId8126);
    $.__views.__alloyId8127 = Ti.UI.createView({
        id: "__alloyId8127"
    });
    $.__views.__alloyId8126.add($.__views.__alloyId8127);
    $.__views.__alloyId8128 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8128"
    });
    $.__views.__alloyId8127.add($.__views.__alloyId8128);
    $.__views.__alloyId8129 = Ti.UI.createView({
        id: "__alloyId8129"
    });
    $.__views.__alloyId8129 && $.addTopLevelView($.__views.__alloyId8129);
    $.__views.__alloyId8130 = Ti.UI.createView({
        id: "__alloyId8130"
    });
    $.__views.__alloyId8129.add($.__views.__alloyId8130);
    $.__views.__alloyId8131 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8131"
    });
    $.__views.__alloyId8130.add($.__views.__alloyId8131);
    $.__views.__alloyId8132 = Ti.UI.createView({
        id: "__alloyId8132"
    });
    $.__views.__alloyId8132 && $.addTopLevelView($.__views.__alloyId8132);
    $.__views.__alloyId8133 = Ti.UI.createView({
        id: "__alloyId8133"
    });
    $.__views.__alloyId8132.add($.__views.__alloyId8133);
    $.__views.__alloyId8134 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8134"
    });
    $.__views.__alloyId8133.add($.__views.__alloyId8134);
    $.__views.__alloyId8135 = Ti.UI.createView({
        id: "__alloyId8135"
    });
    $.__views.__alloyId8135 && $.addTopLevelView($.__views.__alloyId8135);
    $.__views.__alloyId8136 = Ti.UI.createView({
        id: "__alloyId8136"
    });
    $.__views.__alloyId8135.add($.__views.__alloyId8136);
    $.__views.__alloyId8137 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8137"
    });
    $.__views.__alloyId8136.add($.__views.__alloyId8137);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;