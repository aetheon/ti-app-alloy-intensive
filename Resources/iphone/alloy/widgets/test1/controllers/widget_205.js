function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_205";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_205 = Ti.UI.createView({
        id: "widget_205"
    });
    $.__views.widget_205 && $.addTopLevelView($.__views.widget_205);
    $.__views.__alloyId3120 = Ti.UI.createView({
        id: "__alloyId3120"
    });
    $.__views.widget_205.add($.__views.__alloyId3120);
    $.__views.__alloyId3121 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3121"
    });
    $.__views.__alloyId3120.add($.__views.__alloyId3121);
    $.__views.__alloyId3122 = Ti.UI.createView({
        id: "__alloyId3122"
    });
    $.__views.__alloyId3122 && $.addTopLevelView($.__views.__alloyId3122);
    $.__views.__alloyId3123 = Ti.UI.createView({
        id: "__alloyId3123"
    });
    $.__views.__alloyId3122.add($.__views.__alloyId3123);
    $.__views.__alloyId3124 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3124"
    });
    $.__views.__alloyId3123.add($.__views.__alloyId3124);
    $.__views.__alloyId3125 = Ti.UI.createView({
        id: "__alloyId3125"
    });
    $.__views.__alloyId3125 && $.addTopLevelView($.__views.__alloyId3125);
    $.__views.__alloyId3126 = Ti.UI.createView({
        id: "__alloyId3126"
    });
    $.__views.__alloyId3125.add($.__views.__alloyId3126);
    $.__views.__alloyId3127 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3127"
    });
    $.__views.__alloyId3126.add($.__views.__alloyId3127);
    $.__views.__alloyId3128 = Ti.UI.createView({
        id: "__alloyId3128"
    });
    $.__views.__alloyId3128 && $.addTopLevelView($.__views.__alloyId3128);
    $.__views.__alloyId3129 = Ti.UI.createView({
        id: "__alloyId3129"
    });
    $.__views.__alloyId3128.add($.__views.__alloyId3129);
    $.__views.__alloyId3130 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3130"
    });
    $.__views.__alloyId3129.add($.__views.__alloyId3130);
    $.__views.__alloyId3131 = Ti.UI.createView({
        id: "__alloyId3131"
    });
    $.__views.__alloyId3131 && $.addTopLevelView($.__views.__alloyId3131);
    $.__views.__alloyId3132 = Ti.UI.createView({
        id: "__alloyId3132"
    });
    $.__views.__alloyId3131.add($.__views.__alloyId3132);
    $.__views.__alloyId3133 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3133"
    });
    $.__views.__alloyId3132.add($.__views.__alloyId3133);
    $.__views.__alloyId3134 = Ti.UI.createView({
        id: "__alloyId3134"
    });
    $.__views.__alloyId3134 && $.addTopLevelView($.__views.__alloyId3134);
    $.__views.__alloyId3135 = Ti.UI.createView({
        id: "__alloyId3135"
    });
    $.__views.__alloyId3134.add($.__views.__alloyId3135);
    $.__views.__alloyId3136 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3136"
    });
    $.__views.__alloyId3135.add($.__views.__alloyId3136);
    $.__views.__alloyId3137 = Ti.UI.createView({
        id: "__alloyId3137"
    });
    $.__views.__alloyId3137 && $.addTopLevelView($.__views.__alloyId3137);
    $.__views.__alloyId3138 = Ti.UI.createView({
        id: "__alloyId3138"
    });
    $.__views.__alloyId3137.add($.__views.__alloyId3138);
    $.__views.__alloyId3139 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3139"
    });
    $.__views.__alloyId3138.add($.__views.__alloyId3139);
    $.__views.__alloyId3140 = Ti.UI.createView({
        id: "__alloyId3140"
    });
    $.__views.__alloyId3140 && $.addTopLevelView($.__views.__alloyId3140);
    $.__views.__alloyId3141 = Ti.UI.createView({
        id: "__alloyId3141"
    });
    $.__views.__alloyId3140.add($.__views.__alloyId3141);
    $.__views.__alloyId3142 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3142"
    });
    $.__views.__alloyId3141.add($.__views.__alloyId3142);
    $.__views.__alloyId3143 = Ti.UI.createView({
        id: "__alloyId3143"
    });
    $.__views.__alloyId3143 && $.addTopLevelView($.__views.__alloyId3143);
    $.__views.__alloyId3144 = Ti.UI.createView({
        id: "__alloyId3144"
    });
    $.__views.__alloyId3143.add($.__views.__alloyId3144);
    $.__views.__alloyId3145 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3145"
    });
    $.__views.__alloyId3144.add($.__views.__alloyId3145);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;