function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_345";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_345 = Ti.UI.createView({
        id: "widget_345"
    });
    $.__views.widget_345 && $.addTopLevelView($.__views.widget_345);
    $.__views.__alloyId7150 = Ti.UI.createView({
        id: "__alloyId7150"
    });
    $.__views.widget_345.add($.__views.__alloyId7150);
    $.__views.__alloyId7151 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7151"
    });
    $.__views.__alloyId7150.add($.__views.__alloyId7151);
    $.__views.__alloyId7152 = Ti.UI.createView({
        id: "__alloyId7152"
    });
    $.__views.__alloyId7152 && $.addTopLevelView($.__views.__alloyId7152);
    $.__views.__alloyId7153 = Ti.UI.createView({
        id: "__alloyId7153"
    });
    $.__views.__alloyId7152.add($.__views.__alloyId7153);
    $.__views.__alloyId7154 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7154"
    });
    $.__views.__alloyId7153.add($.__views.__alloyId7154);
    $.__views.__alloyId7155 = Ti.UI.createView({
        id: "__alloyId7155"
    });
    $.__views.__alloyId7155 && $.addTopLevelView($.__views.__alloyId7155);
    $.__views.__alloyId7156 = Ti.UI.createView({
        id: "__alloyId7156"
    });
    $.__views.__alloyId7155.add($.__views.__alloyId7156);
    $.__views.__alloyId7157 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7157"
    });
    $.__views.__alloyId7156.add($.__views.__alloyId7157);
    $.__views.__alloyId7158 = Ti.UI.createView({
        id: "__alloyId7158"
    });
    $.__views.__alloyId7158 && $.addTopLevelView($.__views.__alloyId7158);
    $.__views.__alloyId7159 = Ti.UI.createView({
        id: "__alloyId7159"
    });
    $.__views.__alloyId7158.add($.__views.__alloyId7159);
    $.__views.__alloyId7160 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7160"
    });
    $.__views.__alloyId7159.add($.__views.__alloyId7160);
    $.__views.__alloyId7161 = Ti.UI.createView({
        id: "__alloyId7161"
    });
    $.__views.__alloyId7161 && $.addTopLevelView($.__views.__alloyId7161);
    $.__views.__alloyId7162 = Ti.UI.createView({
        id: "__alloyId7162"
    });
    $.__views.__alloyId7161.add($.__views.__alloyId7162);
    $.__views.__alloyId7163 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7163"
    });
    $.__views.__alloyId7162.add($.__views.__alloyId7163);
    $.__views.__alloyId7164 = Ti.UI.createView({
        id: "__alloyId7164"
    });
    $.__views.__alloyId7164 && $.addTopLevelView($.__views.__alloyId7164);
    $.__views.__alloyId7165 = Ti.UI.createView({
        id: "__alloyId7165"
    });
    $.__views.__alloyId7164.add($.__views.__alloyId7165);
    $.__views.__alloyId7166 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7166"
    });
    $.__views.__alloyId7165.add($.__views.__alloyId7166);
    $.__views.__alloyId7167 = Ti.UI.createView({
        id: "__alloyId7167"
    });
    $.__views.__alloyId7167 && $.addTopLevelView($.__views.__alloyId7167);
    $.__views.__alloyId7168 = Ti.UI.createView({
        id: "__alloyId7168"
    });
    $.__views.__alloyId7167.add($.__views.__alloyId7168);
    $.__views.__alloyId7169 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7169"
    });
    $.__views.__alloyId7168.add($.__views.__alloyId7169);
    $.__views.__alloyId7170 = Ti.UI.createView({
        id: "__alloyId7170"
    });
    $.__views.__alloyId7170 && $.addTopLevelView($.__views.__alloyId7170);
    $.__views.__alloyId7171 = Ti.UI.createView({
        id: "__alloyId7171"
    });
    $.__views.__alloyId7170.add($.__views.__alloyId7171);
    $.__views.__alloyId7172 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7172"
    });
    $.__views.__alloyId7171.add($.__views.__alloyId7172);
    $.__views.__alloyId7173 = Ti.UI.createView({
        id: "__alloyId7173"
    });
    $.__views.__alloyId7173 && $.addTopLevelView($.__views.__alloyId7173);
    $.__views.__alloyId7174 = Ti.UI.createView({
        id: "__alloyId7174"
    });
    $.__views.__alloyId7173.add($.__views.__alloyId7174);
    $.__views.__alloyId7175 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7175"
    });
    $.__views.__alloyId7174.add($.__views.__alloyId7175);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;