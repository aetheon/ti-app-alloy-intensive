function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_795";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_795 = Ti.UI.createView({
        id: "widget_795"
    });
    $.__views.widget_795 && $.addTopLevelView($.__views.widget_795);
    $.__views.__alloyId20124 = Ti.UI.createView({
        id: "__alloyId20124"
    });
    $.__views.widget_795.add($.__views.__alloyId20124);
    $.__views.__alloyId20125 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20125"
    });
    $.__views.__alloyId20124.add($.__views.__alloyId20125);
    $.__views.__alloyId20126 = Ti.UI.createView({
        id: "__alloyId20126"
    });
    $.__views.__alloyId20126 && $.addTopLevelView($.__views.__alloyId20126);
    $.__views.__alloyId20127 = Ti.UI.createView({
        id: "__alloyId20127"
    });
    $.__views.__alloyId20126.add($.__views.__alloyId20127);
    $.__views.__alloyId20128 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20128"
    });
    $.__views.__alloyId20127.add($.__views.__alloyId20128);
    $.__views.__alloyId20129 = Ti.UI.createView({
        id: "__alloyId20129"
    });
    $.__views.__alloyId20129 && $.addTopLevelView($.__views.__alloyId20129);
    $.__views.__alloyId20130 = Ti.UI.createView({
        id: "__alloyId20130"
    });
    $.__views.__alloyId20129.add($.__views.__alloyId20130);
    $.__views.__alloyId20131 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20131"
    });
    $.__views.__alloyId20130.add($.__views.__alloyId20131);
    $.__views.__alloyId20132 = Ti.UI.createView({
        id: "__alloyId20132"
    });
    $.__views.__alloyId20132 && $.addTopLevelView($.__views.__alloyId20132);
    $.__views.__alloyId20133 = Ti.UI.createView({
        id: "__alloyId20133"
    });
    $.__views.__alloyId20132.add($.__views.__alloyId20133);
    $.__views.__alloyId20134 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20134"
    });
    $.__views.__alloyId20133.add($.__views.__alloyId20134);
    $.__views.__alloyId20135 = Ti.UI.createView({
        id: "__alloyId20135"
    });
    $.__views.__alloyId20135 && $.addTopLevelView($.__views.__alloyId20135);
    $.__views.__alloyId20136 = Ti.UI.createView({
        id: "__alloyId20136"
    });
    $.__views.__alloyId20135.add($.__views.__alloyId20136);
    $.__views.__alloyId20137 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20137"
    });
    $.__views.__alloyId20136.add($.__views.__alloyId20137);
    $.__views.__alloyId20138 = Ti.UI.createView({
        id: "__alloyId20138"
    });
    $.__views.__alloyId20138 && $.addTopLevelView($.__views.__alloyId20138);
    $.__views.__alloyId20139 = Ti.UI.createView({
        id: "__alloyId20139"
    });
    $.__views.__alloyId20138.add($.__views.__alloyId20139);
    $.__views.__alloyId20140 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20140"
    });
    $.__views.__alloyId20139.add($.__views.__alloyId20140);
    $.__views.__alloyId20141 = Ti.UI.createView({
        id: "__alloyId20141"
    });
    $.__views.__alloyId20141 && $.addTopLevelView($.__views.__alloyId20141);
    $.__views.__alloyId20142 = Ti.UI.createView({
        id: "__alloyId20142"
    });
    $.__views.__alloyId20141.add($.__views.__alloyId20142);
    $.__views.__alloyId20143 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20143"
    });
    $.__views.__alloyId20142.add($.__views.__alloyId20143);
    $.__views.__alloyId20144 = Ti.UI.createView({
        id: "__alloyId20144"
    });
    $.__views.__alloyId20144 && $.addTopLevelView($.__views.__alloyId20144);
    $.__views.__alloyId20145 = Ti.UI.createView({
        id: "__alloyId20145"
    });
    $.__views.__alloyId20144.add($.__views.__alloyId20145);
    $.__views.__alloyId20146 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20146"
    });
    $.__views.__alloyId20145.add($.__views.__alloyId20146);
    $.__views.__alloyId20147 = Ti.UI.createView({
        id: "__alloyId20147"
    });
    $.__views.__alloyId20147 && $.addTopLevelView($.__views.__alloyId20147);
    $.__views.__alloyId20148 = Ti.UI.createView({
        id: "__alloyId20148"
    });
    $.__views.__alloyId20147.add($.__views.__alloyId20148);
    $.__views.__alloyId20149 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20149"
    });
    $.__views.__alloyId20148.add($.__views.__alloyId20149);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;