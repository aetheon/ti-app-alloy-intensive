function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_24";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_24 = Ti.UI.createView({
        id: "widget_24"
    });
    $.__views.widget_24 && $.addTopLevelView($.__views.widget_24);
    $.__views.__alloyId4108 = Ti.UI.createView({
        id: "__alloyId4108"
    });
    $.__views.widget_24.add($.__views.__alloyId4108);
    $.__views.__alloyId4109 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4109"
    });
    $.__views.__alloyId4108.add($.__views.__alloyId4109);
    $.__views.__alloyId4110 = Ti.UI.createView({
        id: "__alloyId4110"
    });
    $.__views.__alloyId4110 && $.addTopLevelView($.__views.__alloyId4110);
    $.__views.__alloyId4111 = Ti.UI.createView({
        id: "__alloyId4111"
    });
    $.__views.__alloyId4110.add($.__views.__alloyId4111);
    $.__views.__alloyId4112 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4112"
    });
    $.__views.__alloyId4111.add($.__views.__alloyId4112);
    $.__views.__alloyId4113 = Ti.UI.createView({
        id: "__alloyId4113"
    });
    $.__views.__alloyId4113 && $.addTopLevelView($.__views.__alloyId4113);
    $.__views.__alloyId4114 = Ti.UI.createView({
        id: "__alloyId4114"
    });
    $.__views.__alloyId4113.add($.__views.__alloyId4114);
    $.__views.__alloyId4115 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4115"
    });
    $.__views.__alloyId4114.add($.__views.__alloyId4115);
    $.__views.__alloyId4116 = Ti.UI.createView({
        id: "__alloyId4116"
    });
    $.__views.__alloyId4116 && $.addTopLevelView($.__views.__alloyId4116);
    $.__views.__alloyId4117 = Ti.UI.createView({
        id: "__alloyId4117"
    });
    $.__views.__alloyId4116.add($.__views.__alloyId4117);
    $.__views.__alloyId4118 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4118"
    });
    $.__views.__alloyId4117.add($.__views.__alloyId4118);
    $.__views.__alloyId4119 = Ti.UI.createView({
        id: "__alloyId4119"
    });
    $.__views.__alloyId4119 && $.addTopLevelView($.__views.__alloyId4119);
    $.__views.__alloyId4120 = Ti.UI.createView({
        id: "__alloyId4120"
    });
    $.__views.__alloyId4119.add($.__views.__alloyId4120);
    $.__views.__alloyId4121 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4121"
    });
    $.__views.__alloyId4120.add($.__views.__alloyId4121);
    $.__views.__alloyId4122 = Ti.UI.createView({
        id: "__alloyId4122"
    });
    $.__views.__alloyId4122 && $.addTopLevelView($.__views.__alloyId4122);
    $.__views.__alloyId4123 = Ti.UI.createView({
        id: "__alloyId4123"
    });
    $.__views.__alloyId4122.add($.__views.__alloyId4123);
    $.__views.__alloyId4124 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4124"
    });
    $.__views.__alloyId4123.add($.__views.__alloyId4124);
    $.__views.__alloyId4125 = Ti.UI.createView({
        id: "__alloyId4125"
    });
    $.__views.__alloyId4125 && $.addTopLevelView($.__views.__alloyId4125);
    $.__views.__alloyId4126 = Ti.UI.createView({
        id: "__alloyId4126"
    });
    $.__views.__alloyId4125.add($.__views.__alloyId4126);
    $.__views.__alloyId4127 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4127"
    });
    $.__views.__alloyId4126.add($.__views.__alloyId4127);
    $.__views.__alloyId4128 = Ti.UI.createView({
        id: "__alloyId4128"
    });
    $.__views.__alloyId4128 && $.addTopLevelView($.__views.__alloyId4128);
    $.__views.__alloyId4129 = Ti.UI.createView({
        id: "__alloyId4129"
    });
    $.__views.__alloyId4128.add($.__views.__alloyId4129);
    $.__views.__alloyId4130 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4130"
    });
    $.__views.__alloyId4129.add($.__views.__alloyId4130);
    $.__views.__alloyId4131 = Ti.UI.createView({
        id: "__alloyId4131"
    });
    $.__views.__alloyId4131 && $.addTopLevelView($.__views.__alloyId4131);
    $.__views.__alloyId4132 = Ti.UI.createView({
        id: "__alloyId4132"
    });
    $.__views.__alloyId4131.add($.__views.__alloyId4132);
    $.__views.__alloyId4133 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4133"
    });
    $.__views.__alloyId4132.add($.__views.__alloyId4133);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;