function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_829";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_829 = Ti.UI.createView({
        id: "widget_829"
    });
    $.__views.widget_829 && $.addTopLevelView($.__views.widget_829);
    $.__views.__alloyId21112 = Ti.UI.createView({
        id: "__alloyId21112"
    });
    $.__views.widget_829.add($.__views.__alloyId21112);
    $.__views.__alloyId21113 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21113"
    });
    $.__views.__alloyId21112.add($.__views.__alloyId21113);
    $.__views.__alloyId21114 = Ti.UI.createView({
        id: "__alloyId21114"
    });
    $.__views.__alloyId21114 && $.addTopLevelView($.__views.__alloyId21114);
    $.__views.__alloyId21115 = Ti.UI.createView({
        id: "__alloyId21115"
    });
    $.__views.__alloyId21114.add($.__views.__alloyId21115);
    $.__views.__alloyId21116 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21116"
    });
    $.__views.__alloyId21115.add($.__views.__alloyId21116);
    $.__views.__alloyId21117 = Ti.UI.createView({
        id: "__alloyId21117"
    });
    $.__views.__alloyId21117 && $.addTopLevelView($.__views.__alloyId21117);
    $.__views.__alloyId21118 = Ti.UI.createView({
        id: "__alloyId21118"
    });
    $.__views.__alloyId21117.add($.__views.__alloyId21118);
    $.__views.__alloyId21119 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21119"
    });
    $.__views.__alloyId21118.add($.__views.__alloyId21119);
    $.__views.__alloyId21120 = Ti.UI.createView({
        id: "__alloyId21120"
    });
    $.__views.__alloyId21120 && $.addTopLevelView($.__views.__alloyId21120);
    $.__views.__alloyId21121 = Ti.UI.createView({
        id: "__alloyId21121"
    });
    $.__views.__alloyId21120.add($.__views.__alloyId21121);
    $.__views.__alloyId21122 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21122"
    });
    $.__views.__alloyId21121.add($.__views.__alloyId21122);
    $.__views.__alloyId21123 = Ti.UI.createView({
        id: "__alloyId21123"
    });
    $.__views.__alloyId21123 && $.addTopLevelView($.__views.__alloyId21123);
    $.__views.__alloyId21124 = Ti.UI.createView({
        id: "__alloyId21124"
    });
    $.__views.__alloyId21123.add($.__views.__alloyId21124);
    $.__views.__alloyId21125 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21125"
    });
    $.__views.__alloyId21124.add($.__views.__alloyId21125);
    $.__views.__alloyId21126 = Ti.UI.createView({
        id: "__alloyId21126"
    });
    $.__views.__alloyId21126 && $.addTopLevelView($.__views.__alloyId21126);
    $.__views.__alloyId21127 = Ti.UI.createView({
        id: "__alloyId21127"
    });
    $.__views.__alloyId21126.add($.__views.__alloyId21127);
    $.__views.__alloyId21128 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21128"
    });
    $.__views.__alloyId21127.add($.__views.__alloyId21128);
    $.__views.__alloyId21129 = Ti.UI.createView({
        id: "__alloyId21129"
    });
    $.__views.__alloyId21129 && $.addTopLevelView($.__views.__alloyId21129);
    $.__views.__alloyId21130 = Ti.UI.createView({
        id: "__alloyId21130"
    });
    $.__views.__alloyId21129.add($.__views.__alloyId21130);
    $.__views.__alloyId21131 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21131"
    });
    $.__views.__alloyId21130.add($.__views.__alloyId21131);
    $.__views.__alloyId21132 = Ti.UI.createView({
        id: "__alloyId21132"
    });
    $.__views.__alloyId21132 && $.addTopLevelView($.__views.__alloyId21132);
    $.__views.__alloyId21133 = Ti.UI.createView({
        id: "__alloyId21133"
    });
    $.__views.__alloyId21132.add($.__views.__alloyId21133);
    $.__views.__alloyId21134 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21134"
    });
    $.__views.__alloyId21133.add($.__views.__alloyId21134);
    $.__views.__alloyId21135 = Ti.UI.createView({
        id: "__alloyId21135"
    });
    $.__views.__alloyId21135 && $.addTopLevelView($.__views.__alloyId21135);
    $.__views.__alloyId21136 = Ti.UI.createView({
        id: "__alloyId21136"
    });
    $.__views.__alloyId21135.add($.__views.__alloyId21136);
    $.__views.__alloyId21137 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21137"
    });
    $.__views.__alloyId21136.add($.__views.__alloyId21137);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;