function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_275";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_275 = Ti.UI.createView({
        id: "widget_275"
    });
    $.__views.widget_275 && $.addTopLevelView($.__views.widget_275);
    $.__views.__alloyId5122 = Ti.UI.createView({
        id: "__alloyId5122"
    });
    $.__views.widget_275.add($.__views.__alloyId5122);
    $.__views.__alloyId5123 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5123"
    });
    $.__views.__alloyId5122.add($.__views.__alloyId5123);
    $.__views.__alloyId5124 = Ti.UI.createView({
        id: "__alloyId5124"
    });
    $.__views.__alloyId5124 && $.addTopLevelView($.__views.__alloyId5124);
    $.__views.__alloyId5125 = Ti.UI.createView({
        id: "__alloyId5125"
    });
    $.__views.__alloyId5124.add($.__views.__alloyId5125);
    $.__views.__alloyId5126 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5126"
    });
    $.__views.__alloyId5125.add($.__views.__alloyId5126);
    $.__views.__alloyId5127 = Ti.UI.createView({
        id: "__alloyId5127"
    });
    $.__views.__alloyId5127 && $.addTopLevelView($.__views.__alloyId5127);
    $.__views.__alloyId5128 = Ti.UI.createView({
        id: "__alloyId5128"
    });
    $.__views.__alloyId5127.add($.__views.__alloyId5128);
    $.__views.__alloyId5129 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5129"
    });
    $.__views.__alloyId5128.add($.__views.__alloyId5129);
    $.__views.__alloyId5130 = Ti.UI.createView({
        id: "__alloyId5130"
    });
    $.__views.__alloyId5130 && $.addTopLevelView($.__views.__alloyId5130);
    $.__views.__alloyId5131 = Ti.UI.createView({
        id: "__alloyId5131"
    });
    $.__views.__alloyId5130.add($.__views.__alloyId5131);
    $.__views.__alloyId5132 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5132"
    });
    $.__views.__alloyId5131.add($.__views.__alloyId5132);
    $.__views.__alloyId5133 = Ti.UI.createView({
        id: "__alloyId5133"
    });
    $.__views.__alloyId5133 && $.addTopLevelView($.__views.__alloyId5133);
    $.__views.__alloyId5134 = Ti.UI.createView({
        id: "__alloyId5134"
    });
    $.__views.__alloyId5133.add($.__views.__alloyId5134);
    $.__views.__alloyId5135 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5135"
    });
    $.__views.__alloyId5134.add($.__views.__alloyId5135);
    $.__views.__alloyId5136 = Ti.UI.createView({
        id: "__alloyId5136"
    });
    $.__views.__alloyId5136 && $.addTopLevelView($.__views.__alloyId5136);
    $.__views.__alloyId5137 = Ti.UI.createView({
        id: "__alloyId5137"
    });
    $.__views.__alloyId5136.add($.__views.__alloyId5137);
    $.__views.__alloyId5138 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5138"
    });
    $.__views.__alloyId5137.add($.__views.__alloyId5138);
    $.__views.__alloyId5139 = Ti.UI.createView({
        id: "__alloyId5139"
    });
    $.__views.__alloyId5139 && $.addTopLevelView($.__views.__alloyId5139);
    $.__views.__alloyId5140 = Ti.UI.createView({
        id: "__alloyId5140"
    });
    $.__views.__alloyId5139.add($.__views.__alloyId5140);
    $.__views.__alloyId5141 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5141"
    });
    $.__views.__alloyId5140.add($.__views.__alloyId5141);
    $.__views.__alloyId5142 = Ti.UI.createView({
        id: "__alloyId5142"
    });
    $.__views.__alloyId5142 && $.addTopLevelView($.__views.__alloyId5142);
    $.__views.__alloyId5143 = Ti.UI.createView({
        id: "__alloyId5143"
    });
    $.__views.__alloyId5142.add($.__views.__alloyId5143);
    $.__views.__alloyId5144 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5144"
    });
    $.__views.__alloyId5143.add($.__views.__alloyId5144);
    $.__views.__alloyId5145 = Ti.UI.createView({
        id: "__alloyId5145"
    });
    $.__views.__alloyId5145 && $.addTopLevelView($.__views.__alloyId5145);
    $.__views.__alloyId5146 = Ti.UI.createView({
        id: "__alloyId5146"
    });
    $.__views.__alloyId5145.add($.__views.__alloyId5146);
    $.__views.__alloyId5147 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5147"
    });
    $.__views.__alloyId5146.add($.__views.__alloyId5147);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;