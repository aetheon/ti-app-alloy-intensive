function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_587";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_587 = Ti.UI.createView({
        id: "widget_587"
    });
    $.__views.widget_587 && $.addTopLevelView($.__views.widget_587);
    $.__views.__alloyId14118 = Ti.UI.createView({
        id: "__alloyId14118"
    });
    $.__views.widget_587.add($.__views.__alloyId14118);
    $.__views.__alloyId14119 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14119"
    });
    $.__views.__alloyId14118.add($.__views.__alloyId14119);
    $.__views.__alloyId14120 = Ti.UI.createView({
        id: "__alloyId14120"
    });
    $.__views.__alloyId14120 && $.addTopLevelView($.__views.__alloyId14120);
    $.__views.__alloyId14121 = Ti.UI.createView({
        id: "__alloyId14121"
    });
    $.__views.__alloyId14120.add($.__views.__alloyId14121);
    $.__views.__alloyId14122 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14122"
    });
    $.__views.__alloyId14121.add($.__views.__alloyId14122);
    $.__views.__alloyId14123 = Ti.UI.createView({
        id: "__alloyId14123"
    });
    $.__views.__alloyId14123 && $.addTopLevelView($.__views.__alloyId14123);
    $.__views.__alloyId14124 = Ti.UI.createView({
        id: "__alloyId14124"
    });
    $.__views.__alloyId14123.add($.__views.__alloyId14124);
    $.__views.__alloyId14125 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14125"
    });
    $.__views.__alloyId14124.add($.__views.__alloyId14125);
    $.__views.__alloyId14126 = Ti.UI.createView({
        id: "__alloyId14126"
    });
    $.__views.__alloyId14126 && $.addTopLevelView($.__views.__alloyId14126);
    $.__views.__alloyId14127 = Ti.UI.createView({
        id: "__alloyId14127"
    });
    $.__views.__alloyId14126.add($.__views.__alloyId14127);
    $.__views.__alloyId14128 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14128"
    });
    $.__views.__alloyId14127.add($.__views.__alloyId14128);
    $.__views.__alloyId14129 = Ti.UI.createView({
        id: "__alloyId14129"
    });
    $.__views.__alloyId14129 && $.addTopLevelView($.__views.__alloyId14129);
    $.__views.__alloyId14130 = Ti.UI.createView({
        id: "__alloyId14130"
    });
    $.__views.__alloyId14129.add($.__views.__alloyId14130);
    $.__views.__alloyId14131 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14131"
    });
    $.__views.__alloyId14130.add($.__views.__alloyId14131);
    $.__views.__alloyId14132 = Ti.UI.createView({
        id: "__alloyId14132"
    });
    $.__views.__alloyId14132 && $.addTopLevelView($.__views.__alloyId14132);
    $.__views.__alloyId14133 = Ti.UI.createView({
        id: "__alloyId14133"
    });
    $.__views.__alloyId14132.add($.__views.__alloyId14133);
    $.__views.__alloyId14134 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14134"
    });
    $.__views.__alloyId14133.add($.__views.__alloyId14134);
    $.__views.__alloyId14135 = Ti.UI.createView({
        id: "__alloyId14135"
    });
    $.__views.__alloyId14135 && $.addTopLevelView($.__views.__alloyId14135);
    $.__views.__alloyId14136 = Ti.UI.createView({
        id: "__alloyId14136"
    });
    $.__views.__alloyId14135.add($.__views.__alloyId14136);
    $.__views.__alloyId14137 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14137"
    });
    $.__views.__alloyId14136.add($.__views.__alloyId14137);
    $.__views.__alloyId14138 = Ti.UI.createView({
        id: "__alloyId14138"
    });
    $.__views.__alloyId14138 && $.addTopLevelView($.__views.__alloyId14138);
    $.__views.__alloyId14139 = Ti.UI.createView({
        id: "__alloyId14139"
    });
    $.__views.__alloyId14138.add($.__views.__alloyId14139);
    $.__views.__alloyId14140 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14140"
    });
    $.__views.__alloyId14139.add($.__views.__alloyId14140);
    $.__views.__alloyId14141 = Ti.UI.createView({
        id: "__alloyId14141"
    });
    $.__views.__alloyId14141 && $.addTopLevelView($.__views.__alloyId14141);
    $.__views.__alloyId14142 = Ti.UI.createView({
        id: "__alloyId14142"
    });
    $.__views.__alloyId14141.add($.__views.__alloyId14142);
    $.__views.__alloyId14143 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14143"
    });
    $.__views.__alloyId14142.add($.__views.__alloyId14143);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;