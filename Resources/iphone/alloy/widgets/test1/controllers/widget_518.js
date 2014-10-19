function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_518";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_518 = Ti.UI.createView({
        id: "widget_518"
    });
    $.__views.widget_518 && $.addTopLevelView($.__views.widget_518);
    $.__views.__alloyId12142 = Ti.UI.createView({
        id: "__alloyId12142"
    });
    $.__views.widget_518.add($.__views.__alloyId12142);
    $.__views.__alloyId12143 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12143"
    });
    $.__views.__alloyId12142.add($.__views.__alloyId12143);
    $.__views.__alloyId12144 = Ti.UI.createView({
        id: "__alloyId12144"
    });
    $.__views.__alloyId12144 && $.addTopLevelView($.__views.__alloyId12144);
    $.__views.__alloyId12145 = Ti.UI.createView({
        id: "__alloyId12145"
    });
    $.__views.__alloyId12144.add($.__views.__alloyId12145);
    $.__views.__alloyId12146 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12146"
    });
    $.__views.__alloyId12145.add($.__views.__alloyId12146);
    $.__views.__alloyId12147 = Ti.UI.createView({
        id: "__alloyId12147"
    });
    $.__views.__alloyId12147 && $.addTopLevelView($.__views.__alloyId12147);
    $.__views.__alloyId12148 = Ti.UI.createView({
        id: "__alloyId12148"
    });
    $.__views.__alloyId12147.add($.__views.__alloyId12148);
    $.__views.__alloyId12149 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12149"
    });
    $.__views.__alloyId12148.add($.__views.__alloyId12149);
    $.__views.__alloyId12150 = Ti.UI.createView({
        id: "__alloyId12150"
    });
    $.__views.__alloyId12150 && $.addTopLevelView($.__views.__alloyId12150);
    $.__views.__alloyId12151 = Ti.UI.createView({
        id: "__alloyId12151"
    });
    $.__views.__alloyId12150.add($.__views.__alloyId12151);
    $.__views.__alloyId12152 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12152"
    });
    $.__views.__alloyId12151.add($.__views.__alloyId12152);
    $.__views.__alloyId12153 = Ti.UI.createView({
        id: "__alloyId12153"
    });
    $.__views.__alloyId12153 && $.addTopLevelView($.__views.__alloyId12153);
    $.__views.__alloyId12154 = Ti.UI.createView({
        id: "__alloyId12154"
    });
    $.__views.__alloyId12153.add($.__views.__alloyId12154);
    $.__views.__alloyId12155 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12155"
    });
    $.__views.__alloyId12154.add($.__views.__alloyId12155);
    $.__views.__alloyId12156 = Ti.UI.createView({
        id: "__alloyId12156"
    });
    $.__views.__alloyId12156 && $.addTopLevelView($.__views.__alloyId12156);
    $.__views.__alloyId12157 = Ti.UI.createView({
        id: "__alloyId12157"
    });
    $.__views.__alloyId12156.add($.__views.__alloyId12157);
    $.__views.__alloyId12158 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12158"
    });
    $.__views.__alloyId12157.add($.__views.__alloyId12158);
    $.__views.__alloyId12159 = Ti.UI.createView({
        id: "__alloyId12159"
    });
    $.__views.__alloyId12159 && $.addTopLevelView($.__views.__alloyId12159);
    $.__views.__alloyId12160 = Ti.UI.createView({
        id: "__alloyId12160"
    });
    $.__views.__alloyId12159.add($.__views.__alloyId12160);
    $.__views.__alloyId12161 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12161"
    });
    $.__views.__alloyId12160.add($.__views.__alloyId12161);
    $.__views.__alloyId12162 = Ti.UI.createView({
        id: "__alloyId12162"
    });
    $.__views.__alloyId12162 && $.addTopLevelView($.__views.__alloyId12162);
    $.__views.__alloyId12163 = Ti.UI.createView({
        id: "__alloyId12163"
    });
    $.__views.__alloyId12162.add($.__views.__alloyId12163);
    $.__views.__alloyId12164 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12164"
    });
    $.__views.__alloyId12163.add($.__views.__alloyId12164);
    $.__views.__alloyId12165 = Ti.UI.createView({
        id: "__alloyId12165"
    });
    $.__views.__alloyId12165 && $.addTopLevelView($.__views.__alloyId12165);
    $.__views.__alloyId12166 = Ti.UI.createView({
        id: "__alloyId12166"
    });
    $.__views.__alloyId12165.add($.__views.__alloyId12166);
    $.__views.__alloyId12167 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12167"
    });
    $.__views.__alloyId12166.add($.__views.__alloyId12167);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;