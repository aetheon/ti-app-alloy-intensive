function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_621";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_621 = Ti.UI.createView({
        id: "widget_621"
    });
    $.__views.widget_621 && $.addTopLevelView($.__views.widget_621);
    $.__views.__alloyId15132 = Ti.UI.createView({
        id: "__alloyId15132"
    });
    $.__views.widget_621.add($.__views.__alloyId15132);
    $.__views.__alloyId15133 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15133"
    });
    $.__views.__alloyId15132.add($.__views.__alloyId15133);
    $.__views.__alloyId15134 = Ti.UI.createView({
        id: "__alloyId15134"
    });
    $.__views.__alloyId15134 && $.addTopLevelView($.__views.__alloyId15134);
    $.__views.__alloyId15135 = Ti.UI.createView({
        id: "__alloyId15135"
    });
    $.__views.__alloyId15134.add($.__views.__alloyId15135);
    $.__views.__alloyId15136 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15136"
    });
    $.__views.__alloyId15135.add($.__views.__alloyId15136);
    $.__views.__alloyId15137 = Ti.UI.createView({
        id: "__alloyId15137"
    });
    $.__views.__alloyId15137 && $.addTopLevelView($.__views.__alloyId15137);
    $.__views.__alloyId15138 = Ti.UI.createView({
        id: "__alloyId15138"
    });
    $.__views.__alloyId15137.add($.__views.__alloyId15138);
    $.__views.__alloyId15139 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15139"
    });
    $.__views.__alloyId15138.add($.__views.__alloyId15139);
    $.__views.__alloyId15140 = Ti.UI.createView({
        id: "__alloyId15140"
    });
    $.__views.__alloyId15140 && $.addTopLevelView($.__views.__alloyId15140);
    $.__views.__alloyId15141 = Ti.UI.createView({
        id: "__alloyId15141"
    });
    $.__views.__alloyId15140.add($.__views.__alloyId15141);
    $.__views.__alloyId15142 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15142"
    });
    $.__views.__alloyId15141.add($.__views.__alloyId15142);
    $.__views.__alloyId15143 = Ti.UI.createView({
        id: "__alloyId15143"
    });
    $.__views.__alloyId15143 && $.addTopLevelView($.__views.__alloyId15143);
    $.__views.__alloyId15144 = Ti.UI.createView({
        id: "__alloyId15144"
    });
    $.__views.__alloyId15143.add($.__views.__alloyId15144);
    $.__views.__alloyId15145 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15145"
    });
    $.__views.__alloyId15144.add($.__views.__alloyId15145);
    $.__views.__alloyId15146 = Ti.UI.createView({
        id: "__alloyId15146"
    });
    $.__views.__alloyId15146 && $.addTopLevelView($.__views.__alloyId15146);
    $.__views.__alloyId15147 = Ti.UI.createView({
        id: "__alloyId15147"
    });
    $.__views.__alloyId15146.add($.__views.__alloyId15147);
    $.__views.__alloyId15148 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15148"
    });
    $.__views.__alloyId15147.add($.__views.__alloyId15148);
    $.__views.__alloyId15149 = Ti.UI.createView({
        id: "__alloyId15149"
    });
    $.__views.__alloyId15149 && $.addTopLevelView($.__views.__alloyId15149);
    $.__views.__alloyId15150 = Ti.UI.createView({
        id: "__alloyId15150"
    });
    $.__views.__alloyId15149.add($.__views.__alloyId15150);
    $.__views.__alloyId15151 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15151"
    });
    $.__views.__alloyId15150.add($.__views.__alloyId15151);
    $.__views.__alloyId15152 = Ti.UI.createView({
        id: "__alloyId15152"
    });
    $.__views.__alloyId15152 && $.addTopLevelView($.__views.__alloyId15152);
    $.__views.__alloyId15153 = Ti.UI.createView({
        id: "__alloyId15153"
    });
    $.__views.__alloyId15152.add($.__views.__alloyId15153);
    $.__views.__alloyId15154 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15154"
    });
    $.__views.__alloyId15153.add($.__views.__alloyId15154);
    $.__views.__alloyId15155 = Ti.UI.createView({
        id: "__alloyId15155"
    });
    $.__views.__alloyId15155 && $.addTopLevelView($.__views.__alloyId15155);
    $.__views.__alloyId15156 = Ti.UI.createView({
        id: "__alloyId15156"
    });
    $.__views.__alloyId15155.add($.__views.__alloyId15156);
    $.__views.__alloyId15157 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15157"
    });
    $.__views.__alloyId15156.add($.__views.__alloyId15157);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;