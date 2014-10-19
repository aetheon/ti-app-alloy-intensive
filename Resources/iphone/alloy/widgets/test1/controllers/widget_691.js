function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_691";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_691 = Ti.UI.createView({
        id: "widget_691"
    });
    $.__views.widget_691 && $.addTopLevelView($.__views.widget_691);
    $.__views.__alloyId17134 = Ti.UI.createView({
        id: "__alloyId17134"
    });
    $.__views.widget_691.add($.__views.__alloyId17134);
    $.__views.__alloyId17135 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17135"
    });
    $.__views.__alloyId17134.add($.__views.__alloyId17135);
    $.__views.__alloyId17136 = Ti.UI.createView({
        id: "__alloyId17136"
    });
    $.__views.__alloyId17136 && $.addTopLevelView($.__views.__alloyId17136);
    $.__views.__alloyId17137 = Ti.UI.createView({
        id: "__alloyId17137"
    });
    $.__views.__alloyId17136.add($.__views.__alloyId17137);
    $.__views.__alloyId17138 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17138"
    });
    $.__views.__alloyId17137.add($.__views.__alloyId17138);
    $.__views.__alloyId17139 = Ti.UI.createView({
        id: "__alloyId17139"
    });
    $.__views.__alloyId17139 && $.addTopLevelView($.__views.__alloyId17139);
    $.__views.__alloyId17140 = Ti.UI.createView({
        id: "__alloyId17140"
    });
    $.__views.__alloyId17139.add($.__views.__alloyId17140);
    $.__views.__alloyId17141 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17141"
    });
    $.__views.__alloyId17140.add($.__views.__alloyId17141);
    $.__views.__alloyId17142 = Ti.UI.createView({
        id: "__alloyId17142"
    });
    $.__views.__alloyId17142 && $.addTopLevelView($.__views.__alloyId17142);
    $.__views.__alloyId17143 = Ti.UI.createView({
        id: "__alloyId17143"
    });
    $.__views.__alloyId17142.add($.__views.__alloyId17143);
    $.__views.__alloyId17144 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17144"
    });
    $.__views.__alloyId17143.add($.__views.__alloyId17144);
    $.__views.__alloyId17145 = Ti.UI.createView({
        id: "__alloyId17145"
    });
    $.__views.__alloyId17145 && $.addTopLevelView($.__views.__alloyId17145);
    $.__views.__alloyId17146 = Ti.UI.createView({
        id: "__alloyId17146"
    });
    $.__views.__alloyId17145.add($.__views.__alloyId17146);
    $.__views.__alloyId17147 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17147"
    });
    $.__views.__alloyId17146.add($.__views.__alloyId17147);
    $.__views.__alloyId17148 = Ti.UI.createView({
        id: "__alloyId17148"
    });
    $.__views.__alloyId17148 && $.addTopLevelView($.__views.__alloyId17148);
    $.__views.__alloyId17149 = Ti.UI.createView({
        id: "__alloyId17149"
    });
    $.__views.__alloyId17148.add($.__views.__alloyId17149);
    $.__views.__alloyId17150 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17150"
    });
    $.__views.__alloyId17149.add($.__views.__alloyId17150);
    $.__views.__alloyId17151 = Ti.UI.createView({
        id: "__alloyId17151"
    });
    $.__views.__alloyId17151 && $.addTopLevelView($.__views.__alloyId17151);
    $.__views.__alloyId17152 = Ti.UI.createView({
        id: "__alloyId17152"
    });
    $.__views.__alloyId17151.add($.__views.__alloyId17152);
    $.__views.__alloyId17153 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17153"
    });
    $.__views.__alloyId17152.add($.__views.__alloyId17153);
    $.__views.__alloyId17154 = Ti.UI.createView({
        id: "__alloyId17154"
    });
    $.__views.__alloyId17154 && $.addTopLevelView($.__views.__alloyId17154);
    $.__views.__alloyId17155 = Ti.UI.createView({
        id: "__alloyId17155"
    });
    $.__views.__alloyId17154.add($.__views.__alloyId17155);
    $.__views.__alloyId17156 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17156"
    });
    $.__views.__alloyId17155.add($.__views.__alloyId17156);
    $.__views.__alloyId17157 = Ti.UI.createView({
        id: "__alloyId17157"
    });
    $.__views.__alloyId17157 && $.addTopLevelView($.__views.__alloyId17157);
    $.__views.__alloyId17158 = Ti.UI.createView({
        id: "__alloyId17158"
    });
    $.__views.__alloyId17157.add($.__views.__alloyId17158);
    $.__views.__alloyId17159 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17159"
    });
    $.__views.__alloyId17158.add($.__views.__alloyId17159);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;