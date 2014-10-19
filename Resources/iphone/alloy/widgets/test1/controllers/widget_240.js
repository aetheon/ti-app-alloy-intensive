function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_240";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_240 = Ti.UI.createView({
        id: "widget_240"
    });
    $.__views.widget_240 && $.addTopLevelView($.__views.widget_240);
    $.__views.__alloyId4134 = Ti.UI.createView({
        id: "__alloyId4134"
    });
    $.__views.widget_240.add($.__views.__alloyId4134);
    $.__views.__alloyId4135 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4135"
    });
    $.__views.__alloyId4134.add($.__views.__alloyId4135);
    $.__views.__alloyId4136 = Ti.UI.createView({
        id: "__alloyId4136"
    });
    $.__views.__alloyId4136 && $.addTopLevelView($.__views.__alloyId4136);
    $.__views.__alloyId4137 = Ti.UI.createView({
        id: "__alloyId4137"
    });
    $.__views.__alloyId4136.add($.__views.__alloyId4137);
    $.__views.__alloyId4138 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4138"
    });
    $.__views.__alloyId4137.add($.__views.__alloyId4138);
    $.__views.__alloyId4139 = Ti.UI.createView({
        id: "__alloyId4139"
    });
    $.__views.__alloyId4139 && $.addTopLevelView($.__views.__alloyId4139);
    $.__views.__alloyId4140 = Ti.UI.createView({
        id: "__alloyId4140"
    });
    $.__views.__alloyId4139.add($.__views.__alloyId4140);
    $.__views.__alloyId4141 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4141"
    });
    $.__views.__alloyId4140.add($.__views.__alloyId4141);
    $.__views.__alloyId4142 = Ti.UI.createView({
        id: "__alloyId4142"
    });
    $.__views.__alloyId4142 && $.addTopLevelView($.__views.__alloyId4142);
    $.__views.__alloyId4143 = Ti.UI.createView({
        id: "__alloyId4143"
    });
    $.__views.__alloyId4142.add($.__views.__alloyId4143);
    $.__views.__alloyId4144 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4144"
    });
    $.__views.__alloyId4143.add($.__views.__alloyId4144);
    $.__views.__alloyId4145 = Ti.UI.createView({
        id: "__alloyId4145"
    });
    $.__views.__alloyId4145 && $.addTopLevelView($.__views.__alloyId4145);
    $.__views.__alloyId4146 = Ti.UI.createView({
        id: "__alloyId4146"
    });
    $.__views.__alloyId4145.add($.__views.__alloyId4146);
    $.__views.__alloyId4147 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4147"
    });
    $.__views.__alloyId4146.add($.__views.__alloyId4147);
    $.__views.__alloyId4148 = Ti.UI.createView({
        id: "__alloyId4148"
    });
    $.__views.__alloyId4148 && $.addTopLevelView($.__views.__alloyId4148);
    $.__views.__alloyId4149 = Ti.UI.createView({
        id: "__alloyId4149"
    });
    $.__views.__alloyId4148.add($.__views.__alloyId4149);
    $.__views.__alloyId4150 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4150"
    });
    $.__views.__alloyId4149.add($.__views.__alloyId4150);
    $.__views.__alloyId4151 = Ti.UI.createView({
        id: "__alloyId4151"
    });
    $.__views.__alloyId4151 && $.addTopLevelView($.__views.__alloyId4151);
    $.__views.__alloyId4152 = Ti.UI.createView({
        id: "__alloyId4152"
    });
    $.__views.__alloyId4151.add($.__views.__alloyId4152);
    $.__views.__alloyId4153 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4153"
    });
    $.__views.__alloyId4152.add($.__views.__alloyId4153);
    $.__views.__alloyId4154 = Ti.UI.createView({
        id: "__alloyId4154"
    });
    $.__views.__alloyId4154 && $.addTopLevelView($.__views.__alloyId4154);
    $.__views.__alloyId4155 = Ti.UI.createView({
        id: "__alloyId4155"
    });
    $.__views.__alloyId4154.add($.__views.__alloyId4155);
    $.__views.__alloyId4156 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4156"
    });
    $.__views.__alloyId4155.add($.__views.__alloyId4156);
    $.__views.__alloyId4157 = Ti.UI.createView({
        id: "__alloyId4157"
    });
    $.__views.__alloyId4157 && $.addTopLevelView($.__views.__alloyId4157);
    $.__views.__alloyId4158 = Ti.UI.createView({
        id: "__alloyId4158"
    });
    $.__views.__alloyId4157.add($.__views.__alloyId4158);
    $.__views.__alloyId4159 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4159"
    });
    $.__views.__alloyId4158.add($.__views.__alloyId4159);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;