function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_309";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_309 = Ti.UI.createView({
        id: "widget_309"
    });
    $.__views.widget_309 && $.addTopLevelView($.__views.widget_309);
    $.__views.__alloyId6110 = Ti.UI.createView({
        id: "__alloyId6110"
    });
    $.__views.widget_309.add($.__views.__alloyId6110);
    $.__views.__alloyId6111 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6111"
    });
    $.__views.__alloyId6110.add($.__views.__alloyId6111);
    $.__views.__alloyId6112 = Ti.UI.createView({
        id: "__alloyId6112"
    });
    $.__views.__alloyId6112 && $.addTopLevelView($.__views.__alloyId6112);
    $.__views.__alloyId6113 = Ti.UI.createView({
        id: "__alloyId6113"
    });
    $.__views.__alloyId6112.add($.__views.__alloyId6113);
    $.__views.__alloyId6114 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6114"
    });
    $.__views.__alloyId6113.add($.__views.__alloyId6114);
    $.__views.__alloyId6115 = Ti.UI.createView({
        id: "__alloyId6115"
    });
    $.__views.__alloyId6115 && $.addTopLevelView($.__views.__alloyId6115);
    $.__views.__alloyId6116 = Ti.UI.createView({
        id: "__alloyId6116"
    });
    $.__views.__alloyId6115.add($.__views.__alloyId6116);
    $.__views.__alloyId6117 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6117"
    });
    $.__views.__alloyId6116.add($.__views.__alloyId6117);
    $.__views.__alloyId6118 = Ti.UI.createView({
        id: "__alloyId6118"
    });
    $.__views.__alloyId6118 && $.addTopLevelView($.__views.__alloyId6118);
    $.__views.__alloyId6119 = Ti.UI.createView({
        id: "__alloyId6119"
    });
    $.__views.__alloyId6118.add($.__views.__alloyId6119);
    $.__views.__alloyId6120 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6120"
    });
    $.__views.__alloyId6119.add($.__views.__alloyId6120);
    $.__views.__alloyId6121 = Ti.UI.createView({
        id: "__alloyId6121"
    });
    $.__views.__alloyId6121 && $.addTopLevelView($.__views.__alloyId6121);
    $.__views.__alloyId6122 = Ti.UI.createView({
        id: "__alloyId6122"
    });
    $.__views.__alloyId6121.add($.__views.__alloyId6122);
    $.__views.__alloyId6123 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6123"
    });
    $.__views.__alloyId6122.add($.__views.__alloyId6123);
    $.__views.__alloyId6124 = Ti.UI.createView({
        id: "__alloyId6124"
    });
    $.__views.__alloyId6124 && $.addTopLevelView($.__views.__alloyId6124);
    $.__views.__alloyId6125 = Ti.UI.createView({
        id: "__alloyId6125"
    });
    $.__views.__alloyId6124.add($.__views.__alloyId6125);
    $.__views.__alloyId6126 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6126"
    });
    $.__views.__alloyId6125.add($.__views.__alloyId6126);
    $.__views.__alloyId6127 = Ti.UI.createView({
        id: "__alloyId6127"
    });
    $.__views.__alloyId6127 && $.addTopLevelView($.__views.__alloyId6127);
    $.__views.__alloyId6128 = Ti.UI.createView({
        id: "__alloyId6128"
    });
    $.__views.__alloyId6127.add($.__views.__alloyId6128);
    $.__views.__alloyId6129 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6129"
    });
    $.__views.__alloyId6128.add($.__views.__alloyId6129);
    $.__views.__alloyId6130 = Ti.UI.createView({
        id: "__alloyId6130"
    });
    $.__views.__alloyId6130 && $.addTopLevelView($.__views.__alloyId6130);
    $.__views.__alloyId6131 = Ti.UI.createView({
        id: "__alloyId6131"
    });
    $.__views.__alloyId6130.add($.__views.__alloyId6131);
    $.__views.__alloyId6132 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6132"
    });
    $.__views.__alloyId6131.add($.__views.__alloyId6132);
    $.__views.__alloyId6133 = Ti.UI.createView({
        id: "__alloyId6133"
    });
    $.__views.__alloyId6133 && $.addTopLevelView($.__views.__alloyId6133);
    $.__views.__alloyId6134 = Ti.UI.createView({
        id: "__alloyId6134"
    });
    $.__views.__alloyId6133.add($.__views.__alloyId6134);
    $.__views.__alloyId6135 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6135"
    });
    $.__views.__alloyId6134.add($.__views.__alloyId6135);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;