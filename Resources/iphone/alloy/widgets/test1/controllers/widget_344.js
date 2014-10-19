function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_344";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_344 = Ti.UI.createView({
        id: "widget_344"
    });
    $.__views.widget_344 && $.addTopLevelView($.__views.widget_344);
    $.__views.__alloyId7124 = Ti.UI.createView({
        id: "__alloyId7124"
    });
    $.__views.widget_344.add($.__views.__alloyId7124);
    $.__views.__alloyId7125 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7125"
    });
    $.__views.__alloyId7124.add($.__views.__alloyId7125);
    $.__views.__alloyId7126 = Ti.UI.createView({
        id: "__alloyId7126"
    });
    $.__views.__alloyId7126 && $.addTopLevelView($.__views.__alloyId7126);
    $.__views.__alloyId7127 = Ti.UI.createView({
        id: "__alloyId7127"
    });
    $.__views.__alloyId7126.add($.__views.__alloyId7127);
    $.__views.__alloyId7128 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7128"
    });
    $.__views.__alloyId7127.add($.__views.__alloyId7128);
    $.__views.__alloyId7129 = Ti.UI.createView({
        id: "__alloyId7129"
    });
    $.__views.__alloyId7129 && $.addTopLevelView($.__views.__alloyId7129);
    $.__views.__alloyId7130 = Ti.UI.createView({
        id: "__alloyId7130"
    });
    $.__views.__alloyId7129.add($.__views.__alloyId7130);
    $.__views.__alloyId7131 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7131"
    });
    $.__views.__alloyId7130.add($.__views.__alloyId7131);
    $.__views.__alloyId7132 = Ti.UI.createView({
        id: "__alloyId7132"
    });
    $.__views.__alloyId7132 && $.addTopLevelView($.__views.__alloyId7132);
    $.__views.__alloyId7133 = Ti.UI.createView({
        id: "__alloyId7133"
    });
    $.__views.__alloyId7132.add($.__views.__alloyId7133);
    $.__views.__alloyId7134 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7134"
    });
    $.__views.__alloyId7133.add($.__views.__alloyId7134);
    $.__views.__alloyId7135 = Ti.UI.createView({
        id: "__alloyId7135"
    });
    $.__views.__alloyId7135 && $.addTopLevelView($.__views.__alloyId7135);
    $.__views.__alloyId7136 = Ti.UI.createView({
        id: "__alloyId7136"
    });
    $.__views.__alloyId7135.add($.__views.__alloyId7136);
    $.__views.__alloyId7137 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7137"
    });
    $.__views.__alloyId7136.add($.__views.__alloyId7137);
    $.__views.__alloyId7138 = Ti.UI.createView({
        id: "__alloyId7138"
    });
    $.__views.__alloyId7138 && $.addTopLevelView($.__views.__alloyId7138);
    $.__views.__alloyId7139 = Ti.UI.createView({
        id: "__alloyId7139"
    });
    $.__views.__alloyId7138.add($.__views.__alloyId7139);
    $.__views.__alloyId7140 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7140"
    });
    $.__views.__alloyId7139.add($.__views.__alloyId7140);
    $.__views.__alloyId7141 = Ti.UI.createView({
        id: "__alloyId7141"
    });
    $.__views.__alloyId7141 && $.addTopLevelView($.__views.__alloyId7141);
    $.__views.__alloyId7142 = Ti.UI.createView({
        id: "__alloyId7142"
    });
    $.__views.__alloyId7141.add($.__views.__alloyId7142);
    $.__views.__alloyId7143 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7143"
    });
    $.__views.__alloyId7142.add($.__views.__alloyId7143);
    $.__views.__alloyId7144 = Ti.UI.createView({
        id: "__alloyId7144"
    });
    $.__views.__alloyId7144 && $.addTopLevelView($.__views.__alloyId7144);
    $.__views.__alloyId7145 = Ti.UI.createView({
        id: "__alloyId7145"
    });
    $.__views.__alloyId7144.add($.__views.__alloyId7145);
    $.__views.__alloyId7146 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7146"
    });
    $.__views.__alloyId7145.add($.__views.__alloyId7146);
    $.__views.__alloyId7147 = Ti.UI.createView({
        id: "__alloyId7147"
    });
    $.__views.__alloyId7147 && $.addTopLevelView($.__views.__alloyId7147);
    $.__views.__alloyId7148 = Ti.UI.createView({
        id: "__alloyId7148"
    });
    $.__views.__alloyId7147.add($.__views.__alloyId7148);
    $.__views.__alloyId7149 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7149"
    });
    $.__views.__alloyId7148.add($.__views.__alloyId7149);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;