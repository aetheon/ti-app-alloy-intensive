function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_517";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_517 = Ti.UI.createView({
        id: "widget_517"
    });
    $.__views.widget_517 && $.addTopLevelView($.__views.widget_517);
    $.__views.__alloyId12116 = Ti.UI.createView({
        id: "__alloyId12116"
    });
    $.__views.widget_517.add($.__views.__alloyId12116);
    $.__views.__alloyId12117 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12117"
    });
    $.__views.__alloyId12116.add($.__views.__alloyId12117);
    $.__views.__alloyId12118 = Ti.UI.createView({
        id: "__alloyId12118"
    });
    $.__views.__alloyId12118 && $.addTopLevelView($.__views.__alloyId12118);
    $.__views.__alloyId12119 = Ti.UI.createView({
        id: "__alloyId12119"
    });
    $.__views.__alloyId12118.add($.__views.__alloyId12119);
    $.__views.__alloyId12120 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12120"
    });
    $.__views.__alloyId12119.add($.__views.__alloyId12120);
    $.__views.__alloyId12121 = Ti.UI.createView({
        id: "__alloyId12121"
    });
    $.__views.__alloyId12121 && $.addTopLevelView($.__views.__alloyId12121);
    $.__views.__alloyId12122 = Ti.UI.createView({
        id: "__alloyId12122"
    });
    $.__views.__alloyId12121.add($.__views.__alloyId12122);
    $.__views.__alloyId12123 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12123"
    });
    $.__views.__alloyId12122.add($.__views.__alloyId12123);
    $.__views.__alloyId12124 = Ti.UI.createView({
        id: "__alloyId12124"
    });
    $.__views.__alloyId12124 && $.addTopLevelView($.__views.__alloyId12124);
    $.__views.__alloyId12125 = Ti.UI.createView({
        id: "__alloyId12125"
    });
    $.__views.__alloyId12124.add($.__views.__alloyId12125);
    $.__views.__alloyId12126 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12126"
    });
    $.__views.__alloyId12125.add($.__views.__alloyId12126);
    $.__views.__alloyId12127 = Ti.UI.createView({
        id: "__alloyId12127"
    });
    $.__views.__alloyId12127 && $.addTopLevelView($.__views.__alloyId12127);
    $.__views.__alloyId12128 = Ti.UI.createView({
        id: "__alloyId12128"
    });
    $.__views.__alloyId12127.add($.__views.__alloyId12128);
    $.__views.__alloyId12129 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12129"
    });
    $.__views.__alloyId12128.add($.__views.__alloyId12129);
    $.__views.__alloyId12130 = Ti.UI.createView({
        id: "__alloyId12130"
    });
    $.__views.__alloyId12130 && $.addTopLevelView($.__views.__alloyId12130);
    $.__views.__alloyId12131 = Ti.UI.createView({
        id: "__alloyId12131"
    });
    $.__views.__alloyId12130.add($.__views.__alloyId12131);
    $.__views.__alloyId12132 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12132"
    });
    $.__views.__alloyId12131.add($.__views.__alloyId12132);
    $.__views.__alloyId12133 = Ti.UI.createView({
        id: "__alloyId12133"
    });
    $.__views.__alloyId12133 && $.addTopLevelView($.__views.__alloyId12133);
    $.__views.__alloyId12134 = Ti.UI.createView({
        id: "__alloyId12134"
    });
    $.__views.__alloyId12133.add($.__views.__alloyId12134);
    $.__views.__alloyId12135 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12135"
    });
    $.__views.__alloyId12134.add($.__views.__alloyId12135);
    $.__views.__alloyId12136 = Ti.UI.createView({
        id: "__alloyId12136"
    });
    $.__views.__alloyId12136 && $.addTopLevelView($.__views.__alloyId12136);
    $.__views.__alloyId12137 = Ti.UI.createView({
        id: "__alloyId12137"
    });
    $.__views.__alloyId12136.add($.__views.__alloyId12137);
    $.__views.__alloyId12138 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12138"
    });
    $.__views.__alloyId12137.add($.__views.__alloyId12138);
    $.__views.__alloyId12139 = Ti.UI.createView({
        id: "__alloyId12139"
    });
    $.__views.__alloyId12139 && $.addTopLevelView($.__views.__alloyId12139);
    $.__views.__alloyId12140 = Ti.UI.createView({
        id: "__alloyId12140"
    });
    $.__views.__alloyId12139.add($.__views.__alloyId12140);
    $.__views.__alloyId12141 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12141"
    });
    $.__views.__alloyId12140.add($.__views.__alloyId12141);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;