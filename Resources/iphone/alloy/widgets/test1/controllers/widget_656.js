function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_656";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_656 = Ti.UI.createView({
        id: "widget_656"
    });
    $.__views.widget_656 && $.addTopLevelView($.__views.widget_656);
    $.__views.__alloyId16120 = Ti.UI.createView({
        id: "__alloyId16120"
    });
    $.__views.widget_656.add($.__views.__alloyId16120);
    $.__views.__alloyId16121 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16121"
    });
    $.__views.__alloyId16120.add($.__views.__alloyId16121);
    $.__views.__alloyId16122 = Ti.UI.createView({
        id: "__alloyId16122"
    });
    $.__views.__alloyId16122 && $.addTopLevelView($.__views.__alloyId16122);
    $.__views.__alloyId16123 = Ti.UI.createView({
        id: "__alloyId16123"
    });
    $.__views.__alloyId16122.add($.__views.__alloyId16123);
    $.__views.__alloyId16124 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16124"
    });
    $.__views.__alloyId16123.add($.__views.__alloyId16124);
    $.__views.__alloyId16125 = Ti.UI.createView({
        id: "__alloyId16125"
    });
    $.__views.__alloyId16125 && $.addTopLevelView($.__views.__alloyId16125);
    $.__views.__alloyId16126 = Ti.UI.createView({
        id: "__alloyId16126"
    });
    $.__views.__alloyId16125.add($.__views.__alloyId16126);
    $.__views.__alloyId16127 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16127"
    });
    $.__views.__alloyId16126.add($.__views.__alloyId16127);
    $.__views.__alloyId16128 = Ti.UI.createView({
        id: "__alloyId16128"
    });
    $.__views.__alloyId16128 && $.addTopLevelView($.__views.__alloyId16128);
    $.__views.__alloyId16129 = Ti.UI.createView({
        id: "__alloyId16129"
    });
    $.__views.__alloyId16128.add($.__views.__alloyId16129);
    $.__views.__alloyId16130 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16130"
    });
    $.__views.__alloyId16129.add($.__views.__alloyId16130);
    $.__views.__alloyId16131 = Ti.UI.createView({
        id: "__alloyId16131"
    });
    $.__views.__alloyId16131 && $.addTopLevelView($.__views.__alloyId16131);
    $.__views.__alloyId16132 = Ti.UI.createView({
        id: "__alloyId16132"
    });
    $.__views.__alloyId16131.add($.__views.__alloyId16132);
    $.__views.__alloyId16133 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16133"
    });
    $.__views.__alloyId16132.add($.__views.__alloyId16133);
    $.__views.__alloyId16134 = Ti.UI.createView({
        id: "__alloyId16134"
    });
    $.__views.__alloyId16134 && $.addTopLevelView($.__views.__alloyId16134);
    $.__views.__alloyId16135 = Ti.UI.createView({
        id: "__alloyId16135"
    });
    $.__views.__alloyId16134.add($.__views.__alloyId16135);
    $.__views.__alloyId16136 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16136"
    });
    $.__views.__alloyId16135.add($.__views.__alloyId16136);
    $.__views.__alloyId16137 = Ti.UI.createView({
        id: "__alloyId16137"
    });
    $.__views.__alloyId16137 && $.addTopLevelView($.__views.__alloyId16137);
    $.__views.__alloyId16138 = Ti.UI.createView({
        id: "__alloyId16138"
    });
    $.__views.__alloyId16137.add($.__views.__alloyId16138);
    $.__views.__alloyId16139 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16139"
    });
    $.__views.__alloyId16138.add($.__views.__alloyId16139);
    $.__views.__alloyId16140 = Ti.UI.createView({
        id: "__alloyId16140"
    });
    $.__views.__alloyId16140 && $.addTopLevelView($.__views.__alloyId16140);
    $.__views.__alloyId16141 = Ti.UI.createView({
        id: "__alloyId16141"
    });
    $.__views.__alloyId16140.add($.__views.__alloyId16141);
    $.__views.__alloyId16142 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16142"
    });
    $.__views.__alloyId16141.add($.__views.__alloyId16142);
    $.__views.__alloyId16143 = Ti.UI.createView({
        id: "__alloyId16143"
    });
    $.__views.__alloyId16143 && $.addTopLevelView($.__views.__alloyId16143);
    $.__views.__alloyId16144 = Ti.UI.createView({
        id: "__alloyId16144"
    });
    $.__views.__alloyId16143.add($.__views.__alloyId16144);
    $.__views.__alloyId16145 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16145"
    });
    $.__views.__alloyId16144.add($.__views.__alloyId16145);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;