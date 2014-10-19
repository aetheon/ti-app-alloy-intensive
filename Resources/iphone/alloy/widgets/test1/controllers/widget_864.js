function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_864";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_864 = Ti.UI.createView({
        id: "widget_864"
    });
    $.__views.widget_864 && $.addTopLevelView($.__views.widget_864);
    $.__views.__alloyId22126 = Ti.UI.createView({
        id: "__alloyId22126"
    });
    $.__views.widget_864.add($.__views.__alloyId22126);
    $.__views.__alloyId22127 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22127"
    });
    $.__views.__alloyId22126.add($.__views.__alloyId22127);
    $.__views.__alloyId22128 = Ti.UI.createView({
        id: "__alloyId22128"
    });
    $.__views.__alloyId22128 && $.addTopLevelView($.__views.__alloyId22128);
    $.__views.__alloyId22129 = Ti.UI.createView({
        id: "__alloyId22129"
    });
    $.__views.__alloyId22128.add($.__views.__alloyId22129);
    $.__views.__alloyId22130 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22130"
    });
    $.__views.__alloyId22129.add($.__views.__alloyId22130);
    $.__views.__alloyId22131 = Ti.UI.createView({
        id: "__alloyId22131"
    });
    $.__views.__alloyId22131 && $.addTopLevelView($.__views.__alloyId22131);
    $.__views.__alloyId22132 = Ti.UI.createView({
        id: "__alloyId22132"
    });
    $.__views.__alloyId22131.add($.__views.__alloyId22132);
    $.__views.__alloyId22133 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22133"
    });
    $.__views.__alloyId22132.add($.__views.__alloyId22133);
    $.__views.__alloyId22134 = Ti.UI.createView({
        id: "__alloyId22134"
    });
    $.__views.__alloyId22134 && $.addTopLevelView($.__views.__alloyId22134);
    $.__views.__alloyId22135 = Ti.UI.createView({
        id: "__alloyId22135"
    });
    $.__views.__alloyId22134.add($.__views.__alloyId22135);
    $.__views.__alloyId22136 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22136"
    });
    $.__views.__alloyId22135.add($.__views.__alloyId22136);
    $.__views.__alloyId22137 = Ti.UI.createView({
        id: "__alloyId22137"
    });
    $.__views.__alloyId22137 && $.addTopLevelView($.__views.__alloyId22137);
    $.__views.__alloyId22138 = Ti.UI.createView({
        id: "__alloyId22138"
    });
    $.__views.__alloyId22137.add($.__views.__alloyId22138);
    $.__views.__alloyId22139 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22139"
    });
    $.__views.__alloyId22138.add($.__views.__alloyId22139);
    $.__views.__alloyId22140 = Ti.UI.createView({
        id: "__alloyId22140"
    });
    $.__views.__alloyId22140 && $.addTopLevelView($.__views.__alloyId22140);
    $.__views.__alloyId22141 = Ti.UI.createView({
        id: "__alloyId22141"
    });
    $.__views.__alloyId22140.add($.__views.__alloyId22141);
    $.__views.__alloyId22142 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22142"
    });
    $.__views.__alloyId22141.add($.__views.__alloyId22142);
    $.__views.__alloyId22143 = Ti.UI.createView({
        id: "__alloyId22143"
    });
    $.__views.__alloyId22143 && $.addTopLevelView($.__views.__alloyId22143);
    $.__views.__alloyId22144 = Ti.UI.createView({
        id: "__alloyId22144"
    });
    $.__views.__alloyId22143.add($.__views.__alloyId22144);
    $.__views.__alloyId22145 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22145"
    });
    $.__views.__alloyId22144.add($.__views.__alloyId22145);
    $.__views.__alloyId22146 = Ti.UI.createView({
        id: "__alloyId22146"
    });
    $.__views.__alloyId22146 && $.addTopLevelView($.__views.__alloyId22146);
    $.__views.__alloyId22147 = Ti.UI.createView({
        id: "__alloyId22147"
    });
    $.__views.__alloyId22146.add($.__views.__alloyId22147);
    $.__views.__alloyId22148 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22148"
    });
    $.__views.__alloyId22147.add($.__views.__alloyId22148);
    $.__views.__alloyId22149 = Ti.UI.createView({
        id: "__alloyId22149"
    });
    $.__views.__alloyId22149 && $.addTopLevelView($.__views.__alloyId22149);
    $.__views.__alloyId22150 = Ti.UI.createView({
        id: "__alloyId22150"
    });
    $.__views.__alloyId22149.add($.__views.__alloyId22150);
    $.__views.__alloyId22151 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22151"
    });
    $.__views.__alloyId22150.add($.__views.__alloyId22151);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;