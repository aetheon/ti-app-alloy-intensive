function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_865";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_865 = Ti.UI.createView({
        id: "widget_865"
    });
    $.__views.widget_865 && $.addTopLevelView($.__views.widget_865);
    $.__views.__alloyId22152 = Ti.UI.createView({
        id: "__alloyId22152"
    });
    $.__views.widget_865.add($.__views.__alloyId22152);
    $.__views.__alloyId22153 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22153"
    });
    $.__views.__alloyId22152.add($.__views.__alloyId22153);
    $.__views.__alloyId22154 = Ti.UI.createView({
        id: "__alloyId22154"
    });
    $.__views.__alloyId22154 && $.addTopLevelView($.__views.__alloyId22154);
    $.__views.__alloyId22155 = Ti.UI.createView({
        id: "__alloyId22155"
    });
    $.__views.__alloyId22154.add($.__views.__alloyId22155);
    $.__views.__alloyId22156 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22156"
    });
    $.__views.__alloyId22155.add($.__views.__alloyId22156);
    $.__views.__alloyId22157 = Ti.UI.createView({
        id: "__alloyId22157"
    });
    $.__views.__alloyId22157 && $.addTopLevelView($.__views.__alloyId22157);
    $.__views.__alloyId22158 = Ti.UI.createView({
        id: "__alloyId22158"
    });
    $.__views.__alloyId22157.add($.__views.__alloyId22158);
    $.__views.__alloyId22159 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22159"
    });
    $.__views.__alloyId22158.add($.__views.__alloyId22159);
    $.__views.__alloyId22160 = Ti.UI.createView({
        id: "__alloyId22160"
    });
    $.__views.__alloyId22160 && $.addTopLevelView($.__views.__alloyId22160);
    $.__views.__alloyId22161 = Ti.UI.createView({
        id: "__alloyId22161"
    });
    $.__views.__alloyId22160.add($.__views.__alloyId22161);
    $.__views.__alloyId22162 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22162"
    });
    $.__views.__alloyId22161.add($.__views.__alloyId22162);
    $.__views.__alloyId22163 = Ti.UI.createView({
        id: "__alloyId22163"
    });
    $.__views.__alloyId22163 && $.addTopLevelView($.__views.__alloyId22163);
    $.__views.__alloyId22164 = Ti.UI.createView({
        id: "__alloyId22164"
    });
    $.__views.__alloyId22163.add($.__views.__alloyId22164);
    $.__views.__alloyId22165 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22165"
    });
    $.__views.__alloyId22164.add($.__views.__alloyId22165);
    $.__views.__alloyId22166 = Ti.UI.createView({
        id: "__alloyId22166"
    });
    $.__views.__alloyId22166 && $.addTopLevelView($.__views.__alloyId22166);
    $.__views.__alloyId22167 = Ti.UI.createView({
        id: "__alloyId22167"
    });
    $.__views.__alloyId22166.add($.__views.__alloyId22167);
    $.__views.__alloyId22168 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22168"
    });
    $.__views.__alloyId22167.add($.__views.__alloyId22168);
    $.__views.__alloyId22169 = Ti.UI.createView({
        id: "__alloyId22169"
    });
    $.__views.__alloyId22169 && $.addTopLevelView($.__views.__alloyId22169);
    $.__views.__alloyId22170 = Ti.UI.createView({
        id: "__alloyId22170"
    });
    $.__views.__alloyId22169.add($.__views.__alloyId22170);
    $.__views.__alloyId22171 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22171"
    });
    $.__views.__alloyId22170.add($.__views.__alloyId22171);
    $.__views.__alloyId22172 = Ti.UI.createView({
        id: "__alloyId22172"
    });
    $.__views.__alloyId22172 && $.addTopLevelView($.__views.__alloyId22172);
    $.__views.__alloyId22173 = Ti.UI.createView({
        id: "__alloyId22173"
    });
    $.__views.__alloyId22172.add($.__views.__alloyId22173);
    $.__views.__alloyId22174 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22174"
    });
    $.__views.__alloyId22173.add($.__views.__alloyId22174);
    $.__views.__alloyId22175 = Ti.UI.createView({
        id: "__alloyId22175"
    });
    $.__views.__alloyId22175 && $.addTopLevelView($.__views.__alloyId22175);
    $.__views.__alloyId22176 = Ti.UI.createView({
        id: "__alloyId22176"
    });
    $.__views.__alloyId22175.add($.__views.__alloyId22176);
    $.__views.__alloyId22177 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22177"
    });
    $.__views.__alloyId22176.add($.__views.__alloyId22177);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;