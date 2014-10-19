function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_620";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_620 = Ti.UI.createView({
        id: "widget_620"
    });
    $.__views.widget_620 && $.addTopLevelView($.__views.widget_620);
    $.__views.__alloyId15106 = Ti.UI.createView({
        id: "__alloyId15106"
    });
    $.__views.widget_620.add($.__views.__alloyId15106);
    $.__views.__alloyId15107 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15107"
    });
    $.__views.__alloyId15106.add($.__views.__alloyId15107);
    $.__views.__alloyId15108 = Ti.UI.createView({
        id: "__alloyId15108"
    });
    $.__views.__alloyId15108 && $.addTopLevelView($.__views.__alloyId15108);
    $.__views.__alloyId15109 = Ti.UI.createView({
        id: "__alloyId15109"
    });
    $.__views.__alloyId15108.add($.__views.__alloyId15109);
    $.__views.__alloyId15110 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15110"
    });
    $.__views.__alloyId15109.add($.__views.__alloyId15110);
    $.__views.__alloyId15111 = Ti.UI.createView({
        id: "__alloyId15111"
    });
    $.__views.__alloyId15111 && $.addTopLevelView($.__views.__alloyId15111);
    $.__views.__alloyId15112 = Ti.UI.createView({
        id: "__alloyId15112"
    });
    $.__views.__alloyId15111.add($.__views.__alloyId15112);
    $.__views.__alloyId15113 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15113"
    });
    $.__views.__alloyId15112.add($.__views.__alloyId15113);
    $.__views.__alloyId15114 = Ti.UI.createView({
        id: "__alloyId15114"
    });
    $.__views.__alloyId15114 && $.addTopLevelView($.__views.__alloyId15114);
    $.__views.__alloyId15115 = Ti.UI.createView({
        id: "__alloyId15115"
    });
    $.__views.__alloyId15114.add($.__views.__alloyId15115);
    $.__views.__alloyId15116 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15116"
    });
    $.__views.__alloyId15115.add($.__views.__alloyId15116);
    $.__views.__alloyId15117 = Ti.UI.createView({
        id: "__alloyId15117"
    });
    $.__views.__alloyId15117 && $.addTopLevelView($.__views.__alloyId15117);
    $.__views.__alloyId15118 = Ti.UI.createView({
        id: "__alloyId15118"
    });
    $.__views.__alloyId15117.add($.__views.__alloyId15118);
    $.__views.__alloyId15119 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15119"
    });
    $.__views.__alloyId15118.add($.__views.__alloyId15119);
    $.__views.__alloyId15120 = Ti.UI.createView({
        id: "__alloyId15120"
    });
    $.__views.__alloyId15120 && $.addTopLevelView($.__views.__alloyId15120);
    $.__views.__alloyId15121 = Ti.UI.createView({
        id: "__alloyId15121"
    });
    $.__views.__alloyId15120.add($.__views.__alloyId15121);
    $.__views.__alloyId15122 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15122"
    });
    $.__views.__alloyId15121.add($.__views.__alloyId15122);
    $.__views.__alloyId15123 = Ti.UI.createView({
        id: "__alloyId15123"
    });
    $.__views.__alloyId15123 && $.addTopLevelView($.__views.__alloyId15123);
    $.__views.__alloyId15124 = Ti.UI.createView({
        id: "__alloyId15124"
    });
    $.__views.__alloyId15123.add($.__views.__alloyId15124);
    $.__views.__alloyId15125 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15125"
    });
    $.__views.__alloyId15124.add($.__views.__alloyId15125);
    $.__views.__alloyId15126 = Ti.UI.createView({
        id: "__alloyId15126"
    });
    $.__views.__alloyId15126 && $.addTopLevelView($.__views.__alloyId15126);
    $.__views.__alloyId15127 = Ti.UI.createView({
        id: "__alloyId15127"
    });
    $.__views.__alloyId15126.add($.__views.__alloyId15127);
    $.__views.__alloyId15128 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15128"
    });
    $.__views.__alloyId15127.add($.__views.__alloyId15128);
    $.__views.__alloyId15129 = Ti.UI.createView({
        id: "__alloyId15129"
    });
    $.__views.__alloyId15129 && $.addTopLevelView($.__views.__alloyId15129);
    $.__views.__alloyId15130 = Ti.UI.createView({
        id: "__alloyId15130"
    });
    $.__views.__alloyId15129.add($.__views.__alloyId15130);
    $.__views.__alloyId15131 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15131"
    });
    $.__views.__alloyId15130.add($.__views.__alloyId15131);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;