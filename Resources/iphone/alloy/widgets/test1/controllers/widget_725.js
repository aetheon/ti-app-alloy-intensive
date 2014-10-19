function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_725";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_725 = Ti.UI.createView({
        id: "widget_725"
    });
    $.__views.widget_725 && $.addTopLevelView($.__views.widget_725);
    $.__views.__alloyId18122 = Ti.UI.createView({
        id: "__alloyId18122"
    });
    $.__views.widget_725.add($.__views.__alloyId18122);
    $.__views.__alloyId18123 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18123"
    });
    $.__views.__alloyId18122.add($.__views.__alloyId18123);
    $.__views.__alloyId18124 = Ti.UI.createView({
        id: "__alloyId18124"
    });
    $.__views.__alloyId18124 && $.addTopLevelView($.__views.__alloyId18124);
    $.__views.__alloyId18125 = Ti.UI.createView({
        id: "__alloyId18125"
    });
    $.__views.__alloyId18124.add($.__views.__alloyId18125);
    $.__views.__alloyId18126 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18126"
    });
    $.__views.__alloyId18125.add($.__views.__alloyId18126);
    $.__views.__alloyId18127 = Ti.UI.createView({
        id: "__alloyId18127"
    });
    $.__views.__alloyId18127 && $.addTopLevelView($.__views.__alloyId18127);
    $.__views.__alloyId18128 = Ti.UI.createView({
        id: "__alloyId18128"
    });
    $.__views.__alloyId18127.add($.__views.__alloyId18128);
    $.__views.__alloyId18129 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18129"
    });
    $.__views.__alloyId18128.add($.__views.__alloyId18129);
    $.__views.__alloyId18130 = Ti.UI.createView({
        id: "__alloyId18130"
    });
    $.__views.__alloyId18130 && $.addTopLevelView($.__views.__alloyId18130);
    $.__views.__alloyId18131 = Ti.UI.createView({
        id: "__alloyId18131"
    });
    $.__views.__alloyId18130.add($.__views.__alloyId18131);
    $.__views.__alloyId18132 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18132"
    });
    $.__views.__alloyId18131.add($.__views.__alloyId18132);
    $.__views.__alloyId18133 = Ti.UI.createView({
        id: "__alloyId18133"
    });
    $.__views.__alloyId18133 && $.addTopLevelView($.__views.__alloyId18133);
    $.__views.__alloyId18134 = Ti.UI.createView({
        id: "__alloyId18134"
    });
    $.__views.__alloyId18133.add($.__views.__alloyId18134);
    $.__views.__alloyId18135 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18135"
    });
    $.__views.__alloyId18134.add($.__views.__alloyId18135);
    $.__views.__alloyId18136 = Ti.UI.createView({
        id: "__alloyId18136"
    });
    $.__views.__alloyId18136 && $.addTopLevelView($.__views.__alloyId18136);
    $.__views.__alloyId18137 = Ti.UI.createView({
        id: "__alloyId18137"
    });
    $.__views.__alloyId18136.add($.__views.__alloyId18137);
    $.__views.__alloyId18138 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18138"
    });
    $.__views.__alloyId18137.add($.__views.__alloyId18138);
    $.__views.__alloyId18139 = Ti.UI.createView({
        id: "__alloyId18139"
    });
    $.__views.__alloyId18139 && $.addTopLevelView($.__views.__alloyId18139);
    $.__views.__alloyId18140 = Ti.UI.createView({
        id: "__alloyId18140"
    });
    $.__views.__alloyId18139.add($.__views.__alloyId18140);
    $.__views.__alloyId18141 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18141"
    });
    $.__views.__alloyId18140.add($.__views.__alloyId18141);
    $.__views.__alloyId18142 = Ti.UI.createView({
        id: "__alloyId18142"
    });
    $.__views.__alloyId18142 && $.addTopLevelView($.__views.__alloyId18142);
    $.__views.__alloyId18143 = Ti.UI.createView({
        id: "__alloyId18143"
    });
    $.__views.__alloyId18142.add($.__views.__alloyId18143);
    $.__views.__alloyId18144 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18144"
    });
    $.__views.__alloyId18143.add($.__views.__alloyId18144);
    $.__views.__alloyId18145 = Ti.UI.createView({
        id: "__alloyId18145"
    });
    $.__views.__alloyId18145 && $.addTopLevelView($.__views.__alloyId18145);
    $.__views.__alloyId18146 = Ti.UI.createView({
        id: "__alloyId18146"
    });
    $.__views.__alloyId18145.add($.__views.__alloyId18146);
    $.__views.__alloyId18147 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18147"
    });
    $.__views.__alloyId18146.add($.__views.__alloyId18147);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;