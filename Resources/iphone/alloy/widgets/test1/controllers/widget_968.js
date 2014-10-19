function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_968";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_968 = Ti.UI.createView({
        id: "widget_968"
    });
    $.__views.widget_968 && $.addTopLevelView($.__views.widget_968);
    $.__views.__alloyId25116 = Ti.UI.createView({
        id: "__alloyId25116"
    });
    $.__views.widget_968.add($.__views.__alloyId25116);
    $.__views.__alloyId25117 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25117"
    });
    $.__views.__alloyId25116.add($.__views.__alloyId25117);
    $.__views.__alloyId25118 = Ti.UI.createView({
        id: "__alloyId25118"
    });
    $.__views.__alloyId25118 && $.addTopLevelView($.__views.__alloyId25118);
    $.__views.__alloyId25119 = Ti.UI.createView({
        id: "__alloyId25119"
    });
    $.__views.__alloyId25118.add($.__views.__alloyId25119);
    $.__views.__alloyId25120 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25120"
    });
    $.__views.__alloyId25119.add($.__views.__alloyId25120);
    $.__views.__alloyId25121 = Ti.UI.createView({
        id: "__alloyId25121"
    });
    $.__views.__alloyId25121 && $.addTopLevelView($.__views.__alloyId25121);
    $.__views.__alloyId25122 = Ti.UI.createView({
        id: "__alloyId25122"
    });
    $.__views.__alloyId25121.add($.__views.__alloyId25122);
    $.__views.__alloyId25123 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25123"
    });
    $.__views.__alloyId25122.add($.__views.__alloyId25123);
    $.__views.__alloyId25124 = Ti.UI.createView({
        id: "__alloyId25124"
    });
    $.__views.__alloyId25124 && $.addTopLevelView($.__views.__alloyId25124);
    $.__views.__alloyId25125 = Ti.UI.createView({
        id: "__alloyId25125"
    });
    $.__views.__alloyId25124.add($.__views.__alloyId25125);
    $.__views.__alloyId25126 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25126"
    });
    $.__views.__alloyId25125.add($.__views.__alloyId25126);
    $.__views.__alloyId25127 = Ti.UI.createView({
        id: "__alloyId25127"
    });
    $.__views.__alloyId25127 && $.addTopLevelView($.__views.__alloyId25127);
    $.__views.__alloyId25128 = Ti.UI.createView({
        id: "__alloyId25128"
    });
    $.__views.__alloyId25127.add($.__views.__alloyId25128);
    $.__views.__alloyId25129 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25129"
    });
    $.__views.__alloyId25128.add($.__views.__alloyId25129);
    $.__views.__alloyId25130 = Ti.UI.createView({
        id: "__alloyId25130"
    });
    $.__views.__alloyId25130 && $.addTopLevelView($.__views.__alloyId25130);
    $.__views.__alloyId25131 = Ti.UI.createView({
        id: "__alloyId25131"
    });
    $.__views.__alloyId25130.add($.__views.__alloyId25131);
    $.__views.__alloyId25132 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25132"
    });
    $.__views.__alloyId25131.add($.__views.__alloyId25132);
    $.__views.__alloyId25133 = Ti.UI.createView({
        id: "__alloyId25133"
    });
    $.__views.__alloyId25133 && $.addTopLevelView($.__views.__alloyId25133);
    $.__views.__alloyId25134 = Ti.UI.createView({
        id: "__alloyId25134"
    });
    $.__views.__alloyId25133.add($.__views.__alloyId25134);
    $.__views.__alloyId25135 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25135"
    });
    $.__views.__alloyId25134.add($.__views.__alloyId25135);
    $.__views.__alloyId25136 = Ti.UI.createView({
        id: "__alloyId25136"
    });
    $.__views.__alloyId25136 && $.addTopLevelView($.__views.__alloyId25136);
    $.__views.__alloyId25137 = Ti.UI.createView({
        id: "__alloyId25137"
    });
    $.__views.__alloyId25136.add($.__views.__alloyId25137);
    $.__views.__alloyId25138 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25138"
    });
    $.__views.__alloyId25137.add($.__views.__alloyId25138);
    $.__views.__alloyId25139 = Ti.UI.createView({
        id: "__alloyId25139"
    });
    $.__views.__alloyId25139 && $.addTopLevelView($.__views.__alloyId25139);
    $.__views.__alloyId25140 = Ti.UI.createView({
        id: "__alloyId25140"
    });
    $.__views.__alloyId25139.add($.__views.__alloyId25140);
    $.__views.__alloyId25141 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25141"
    });
    $.__views.__alloyId25140.add($.__views.__alloyId25141);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;