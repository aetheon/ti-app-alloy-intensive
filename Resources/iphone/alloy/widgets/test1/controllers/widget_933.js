function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_933";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_933 = Ti.UI.createView({
        id: "widget_933"
    });
    $.__views.widget_933 && $.addTopLevelView($.__views.widget_933);
    $.__views.__alloyId24128 = Ti.UI.createView({
        id: "__alloyId24128"
    });
    $.__views.widget_933.add($.__views.__alloyId24128);
    $.__views.__alloyId24129 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24129"
    });
    $.__views.__alloyId24128.add($.__views.__alloyId24129);
    $.__views.__alloyId24130 = Ti.UI.createView({
        id: "__alloyId24130"
    });
    $.__views.__alloyId24130 && $.addTopLevelView($.__views.__alloyId24130);
    $.__views.__alloyId24131 = Ti.UI.createView({
        id: "__alloyId24131"
    });
    $.__views.__alloyId24130.add($.__views.__alloyId24131);
    $.__views.__alloyId24132 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24132"
    });
    $.__views.__alloyId24131.add($.__views.__alloyId24132);
    $.__views.__alloyId24133 = Ti.UI.createView({
        id: "__alloyId24133"
    });
    $.__views.__alloyId24133 && $.addTopLevelView($.__views.__alloyId24133);
    $.__views.__alloyId24134 = Ti.UI.createView({
        id: "__alloyId24134"
    });
    $.__views.__alloyId24133.add($.__views.__alloyId24134);
    $.__views.__alloyId24135 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24135"
    });
    $.__views.__alloyId24134.add($.__views.__alloyId24135);
    $.__views.__alloyId24136 = Ti.UI.createView({
        id: "__alloyId24136"
    });
    $.__views.__alloyId24136 && $.addTopLevelView($.__views.__alloyId24136);
    $.__views.__alloyId24137 = Ti.UI.createView({
        id: "__alloyId24137"
    });
    $.__views.__alloyId24136.add($.__views.__alloyId24137);
    $.__views.__alloyId24138 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24138"
    });
    $.__views.__alloyId24137.add($.__views.__alloyId24138);
    $.__views.__alloyId24139 = Ti.UI.createView({
        id: "__alloyId24139"
    });
    $.__views.__alloyId24139 && $.addTopLevelView($.__views.__alloyId24139);
    $.__views.__alloyId24140 = Ti.UI.createView({
        id: "__alloyId24140"
    });
    $.__views.__alloyId24139.add($.__views.__alloyId24140);
    $.__views.__alloyId24141 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24141"
    });
    $.__views.__alloyId24140.add($.__views.__alloyId24141);
    $.__views.__alloyId24142 = Ti.UI.createView({
        id: "__alloyId24142"
    });
    $.__views.__alloyId24142 && $.addTopLevelView($.__views.__alloyId24142);
    $.__views.__alloyId24143 = Ti.UI.createView({
        id: "__alloyId24143"
    });
    $.__views.__alloyId24142.add($.__views.__alloyId24143);
    $.__views.__alloyId24144 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24144"
    });
    $.__views.__alloyId24143.add($.__views.__alloyId24144);
    $.__views.__alloyId24145 = Ti.UI.createView({
        id: "__alloyId24145"
    });
    $.__views.__alloyId24145 && $.addTopLevelView($.__views.__alloyId24145);
    $.__views.__alloyId24146 = Ti.UI.createView({
        id: "__alloyId24146"
    });
    $.__views.__alloyId24145.add($.__views.__alloyId24146);
    $.__views.__alloyId24147 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24147"
    });
    $.__views.__alloyId24146.add($.__views.__alloyId24147);
    $.__views.__alloyId24148 = Ti.UI.createView({
        id: "__alloyId24148"
    });
    $.__views.__alloyId24148 && $.addTopLevelView($.__views.__alloyId24148);
    $.__views.__alloyId24149 = Ti.UI.createView({
        id: "__alloyId24149"
    });
    $.__views.__alloyId24148.add($.__views.__alloyId24149);
    $.__views.__alloyId24150 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24150"
    });
    $.__views.__alloyId24149.add($.__views.__alloyId24150);
    $.__views.__alloyId24151 = Ti.UI.createView({
        id: "__alloyId24151"
    });
    $.__views.__alloyId24151 && $.addTopLevelView($.__views.__alloyId24151);
    $.__views.__alloyId24152 = Ti.UI.createView({
        id: "__alloyId24152"
    });
    $.__views.__alloyId24151.add($.__views.__alloyId24152);
    $.__views.__alloyId24153 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24153"
    });
    $.__views.__alloyId24152.add($.__views.__alloyId24153);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;