function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_38";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_38 = Ti.UI.createView({
        id: "widget_38"
    });
    $.__views.widget_38 && $.addTopLevelView($.__views.widget_38);
    $.__views.__alloyId8138 = Ti.UI.createView({
        id: "__alloyId8138"
    });
    $.__views.widget_38.add($.__views.__alloyId8138);
    $.__views.__alloyId8139 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8139"
    });
    $.__views.__alloyId8138.add($.__views.__alloyId8139);
    $.__views.__alloyId8140 = Ti.UI.createView({
        id: "__alloyId8140"
    });
    $.__views.__alloyId8140 && $.addTopLevelView($.__views.__alloyId8140);
    $.__views.__alloyId8141 = Ti.UI.createView({
        id: "__alloyId8141"
    });
    $.__views.__alloyId8140.add($.__views.__alloyId8141);
    $.__views.__alloyId8142 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8142"
    });
    $.__views.__alloyId8141.add($.__views.__alloyId8142);
    $.__views.__alloyId8143 = Ti.UI.createView({
        id: "__alloyId8143"
    });
    $.__views.__alloyId8143 && $.addTopLevelView($.__views.__alloyId8143);
    $.__views.__alloyId8144 = Ti.UI.createView({
        id: "__alloyId8144"
    });
    $.__views.__alloyId8143.add($.__views.__alloyId8144);
    $.__views.__alloyId8145 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8145"
    });
    $.__views.__alloyId8144.add($.__views.__alloyId8145);
    $.__views.__alloyId8146 = Ti.UI.createView({
        id: "__alloyId8146"
    });
    $.__views.__alloyId8146 && $.addTopLevelView($.__views.__alloyId8146);
    $.__views.__alloyId8147 = Ti.UI.createView({
        id: "__alloyId8147"
    });
    $.__views.__alloyId8146.add($.__views.__alloyId8147);
    $.__views.__alloyId8148 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8148"
    });
    $.__views.__alloyId8147.add($.__views.__alloyId8148);
    $.__views.__alloyId8149 = Ti.UI.createView({
        id: "__alloyId8149"
    });
    $.__views.__alloyId8149 && $.addTopLevelView($.__views.__alloyId8149);
    $.__views.__alloyId8150 = Ti.UI.createView({
        id: "__alloyId8150"
    });
    $.__views.__alloyId8149.add($.__views.__alloyId8150);
    $.__views.__alloyId8151 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8151"
    });
    $.__views.__alloyId8150.add($.__views.__alloyId8151);
    $.__views.__alloyId8152 = Ti.UI.createView({
        id: "__alloyId8152"
    });
    $.__views.__alloyId8152 && $.addTopLevelView($.__views.__alloyId8152);
    $.__views.__alloyId8153 = Ti.UI.createView({
        id: "__alloyId8153"
    });
    $.__views.__alloyId8152.add($.__views.__alloyId8153);
    $.__views.__alloyId8154 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8154"
    });
    $.__views.__alloyId8153.add($.__views.__alloyId8154);
    $.__views.__alloyId8155 = Ti.UI.createView({
        id: "__alloyId8155"
    });
    $.__views.__alloyId8155 && $.addTopLevelView($.__views.__alloyId8155);
    $.__views.__alloyId8156 = Ti.UI.createView({
        id: "__alloyId8156"
    });
    $.__views.__alloyId8155.add($.__views.__alloyId8156);
    $.__views.__alloyId8157 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8157"
    });
    $.__views.__alloyId8156.add($.__views.__alloyId8157);
    $.__views.__alloyId8158 = Ti.UI.createView({
        id: "__alloyId8158"
    });
    $.__views.__alloyId8158 && $.addTopLevelView($.__views.__alloyId8158);
    $.__views.__alloyId8159 = Ti.UI.createView({
        id: "__alloyId8159"
    });
    $.__views.__alloyId8158.add($.__views.__alloyId8159);
    $.__views.__alloyId8160 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8160"
    });
    $.__views.__alloyId8159.add($.__views.__alloyId8160);
    $.__views.__alloyId8161 = Ti.UI.createView({
        id: "__alloyId8161"
    });
    $.__views.__alloyId8161 && $.addTopLevelView($.__views.__alloyId8161);
    $.__views.__alloyId8162 = Ti.UI.createView({
        id: "__alloyId8162"
    });
    $.__views.__alloyId8161.add($.__views.__alloyId8162);
    $.__views.__alloyId8163 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8163"
    });
    $.__views.__alloyId8162.add($.__views.__alloyId8163);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;