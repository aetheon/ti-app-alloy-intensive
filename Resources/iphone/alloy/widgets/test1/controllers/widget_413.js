function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_413";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_413 = Ti.UI.createView({
        id: "widget_413"
    });
    $.__views.widget_413 && $.addTopLevelView($.__views.widget_413);
    $.__views.__alloyId9126 = Ti.UI.createView({
        id: "__alloyId9126"
    });
    $.__views.widget_413.add($.__views.__alloyId9126);
    $.__views.__alloyId9127 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9127"
    });
    $.__views.__alloyId9126.add($.__views.__alloyId9127);
    $.__views.__alloyId9128 = Ti.UI.createView({
        id: "__alloyId9128"
    });
    $.__views.__alloyId9128 && $.addTopLevelView($.__views.__alloyId9128);
    $.__views.__alloyId9129 = Ti.UI.createView({
        id: "__alloyId9129"
    });
    $.__views.__alloyId9128.add($.__views.__alloyId9129);
    $.__views.__alloyId9130 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9130"
    });
    $.__views.__alloyId9129.add($.__views.__alloyId9130);
    $.__views.__alloyId9131 = Ti.UI.createView({
        id: "__alloyId9131"
    });
    $.__views.__alloyId9131 && $.addTopLevelView($.__views.__alloyId9131);
    $.__views.__alloyId9132 = Ti.UI.createView({
        id: "__alloyId9132"
    });
    $.__views.__alloyId9131.add($.__views.__alloyId9132);
    $.__views.__alloyId9133 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9133"
    });
    $.__views.__alloyId9132.add($.__views.__alloyId9133);
    $.__views.__alloyId9134 = Ti.UI.createView({
        id: "__alloyId9134"
    });
    $.__views.__alloyId9134 && $.addTopLevelView($.__views.__alloyId9134);
    $.__views.__alloyId9135 = Ti.UI.createView({
        id: "__alloyId9135"
    });
    $.__views.__alloyId9134.add($.__views.__alloyId9135);
    $.__views.__alloyId9136 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9136"
    });
    $.__views.__alloyId9135.add($.__views.__alloyId9136);
    $.__views.__alloyId9137 = Ti.UI.createView({
        id: "__alloyId9137"
    });
    $.__views.__alloyId9137 && $.addTopLevelView($.__views.__alloyId9137);
    $.__views.__alloyId9138 = Ti.UI.createView({
        id: "__alloyId9138"
    });
    $.__views.__alloyId9137.add($.__views.__alloyId9138);
    $.__views.__alloyId9139 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9139"
    });
    $.__views.__alloyId9138.add($.__views.__alloyId9139);
    $.__views.__alloyId9140 = Ti.UI.createView({
        id: "__alloyId9140"
    });
    $.__views.__alloyId9140 && $.addTopLevelView($.__views.__alloyId9140);
    $.__views.__alloyId9141 = Ti.UI.createView({
        id: "__alloyId9141"
    });
    $.__views.__alloyId9140.add($.__views.__alloyId9141);
    $.__views.__alloyId9142 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9142"
    });
    $.__views.__alloyId9141.add($.__views.__alloyId9142);
    $.__views.__alloyId9143 = Ti.UI.createView({
        id: "__alloyId9143"
    });
    $.__views.__alloyId9143 && $.addTopLevelView($.__views.__alloyId9143);
    $.__views.__alloyId9144 = Ti.UI.createView({
        id: "__alloyId9144"
    });
    $.__views.__alloyId9143.add($.__views.__alloyId9144);
    $.__views.__alloyId9145 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9145"
    });
    $.__views.__alloyId9144.add($.__views.__alloyId9145);
    $.__views.__alloyId9146 = Ti.UI.createView({
        id: "__alloyId9146"
    });
    $.__views.__alloyId9146 && $.addTopLevelView($.__views.__alloyId9146);
    $.__views.__alloyId9147 = Ti.UI.createView({
        id: "__alloyId9147"
    });
    $.__views.__alloyId9146.add($.__views.__alloyId9147);
    $.__views.__alloyId9148 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9148"
    });
    $.__views.__alloyId9147.add($.__views.__alloyId9148);
    $.__views.__alloyId9149 = Ti.UI.createView({
        id: "__alloyId9149"
    });
    $.__views.__alloyId9149 && $.addTopLevelView($.__views.__alloyId9149);
    $.__views.__alloyId9150 = Ti.UI.createView({
        id: "__alloyId9150"
    });
    $.__views.__alloyId9149.add($.__views.__alloyId9150);
    $.__views.__alloyId9151 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9151"
    });
    $.__views.__alloyId9150.add($.__views.__alloyId9151);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;