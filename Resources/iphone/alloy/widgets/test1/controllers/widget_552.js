function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_552";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_552 = Ti.UI.createView({
        id: "widget_552"
    });
    $.__views.widget_552 && $.addTopLevelView($.__views.widget_552);
    $.__views.__alloyId13130 = Ti.UI.createView({
        id: "__alloyId13130"
    });
    $.__views.widget_552.add($.__views.__alloyId13130);
    $.__views.__alloyId13131 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13131"
    });
    $.__views.__alloyId13130.add($.__views.__alloyId13131);
    $.__views.__alloyId13132 = Ti.UI.createView({
        id: "__alloyId13132"
    });
    $.__views.__alloyId13132 && $.addTopLevelView($.__views.__alloyId13132);
    $.__views.__alloyId13133 = Ti.UI.createView({
        id: "__alloyId13133"
    });
    $.__views.__alloyId13132.add($.__views.__alloyId13133);
    $.__views.__alloyId13134 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13134"
    });
    $.__views.__alloyId13133.add($.__views.__alloyId13134);
    $.__views.__alloyId13135 = Ti.UI.createView({
        id: "__alloyId13135"
    });
    $.__views.__alloyId13135 && $.addTopLevelView($.__views.__alloyId13135);
    $.__views.__alloyId13136 = Ti.UI.createView({
        id: "__alloyId13136"
    });
    $.__views.__alloyId13135.add($.__views.__alloyId13136);
    $.__views.__alloyId13137 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13137"
    });
    $.__views.__alloyId13136.add($.__views.__alloyId13137);
    $.__views.__alloyId13138 = Ti.UI.createView({
        id: "__alloyId13138"
    });
    $.__views.__alloyId13138 && $.addTopLevelView($.__views.__alloyId13138);
    $.__views.__alloyId13139 = Ti.UI.createView({
        id: "__alloyId13139"
    });
    $.__views.__alloyId13138.add($.__views.__alloyId13139);
    $.__views.__alloyId13140 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13140"
    });
    $.__views.__alloyId13139.add($.__views.__alloyId13140);
    $.__views.__alloyId13141 = Ti.UI.createView({
        id: "__alloyId13141"
    });
    $.__views.__alloyId13141 && $.addTopLevelView($.__views.__alloyId13141);
    $.__views.__alloyId13142 = Ti.UI.createView({
        id: "__alloyId13142"
    });
    $.__views.__alloyId13141.add($.__views.__alloyId13142);
    $.__views.__alloyId13143 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13143"
    });
    $.__views.__alloyId13142.add($.__views.__alloyId13143);
    $.__views.__alloyId13144 = Ti.UI.createView({
        id: "__alloyId13144"
    });
    $.__views.__alloyId13144 && $.addTopLevelView($.__views.__alloyId13144);
    $.__views.__alloyId13145 = Ti.UI.createView({
        id: "__alloyId13145"
    });
    $.__views.__alloyId13144.add($.__views.__alloyId13145);
    $.__views.__alloyId13146 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13146"
    });
    $.__views.__alloyId13145.add($.__views.__alloyId13146);
    $.__views.__alloyId13147 = Ti.UI.createView({
        id: "__alloyId13147"
    });
    $.__views.__alloyId13147 && $.addTopLevelView($.__views.__alloyId13147);
    $.__views.__alloyId13148 = Ti.UI.createView({
        id: "__alloyId13148"
    });
    $.__views.__alloyId13147.add($.__views.__alloyId13148);
    $.__views.__alloyId13149 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13149"
    });
    $.__views.__alloyId13148.add($.__views.__alloyId13149);
    $.__views.__alloyId13150 = Ti.UI.createView({
        id: "__alloyId13150"
    });
    $.__views.__alloyId13150 && $.addTopLevelView($.__views.__alloyId13150);
    $.__views.__alloyId13151 = Ti.UI.createView({
        id: "__alloyId13151"
    });
    $.__views.__alloyId13150.add($.__views.__alloyId13151);
    $.__views.__alloyId13152 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13152"
    });
    $.__views.__alloyId13151.add($.__views.__alloyId13152);
    $.__views.__alloyId13153 = Ti.UI.createView({
        id: "__alloyId13153"
    });
    $.__views.__alloyId13153 && $.addTopLevelView($.__views.__alloyId13153);
    $.__views.__alloyId13154 = Ti.UI.createView({
        id: "__alloyId13154"
    });
    $.__views.__alloyId13153.add($.__views.__alloyId13154);
    $.__views.__alloyId13155 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13155"
    });
    $.__views.__alloyId13154.add($.__views.__alloyId13155);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;