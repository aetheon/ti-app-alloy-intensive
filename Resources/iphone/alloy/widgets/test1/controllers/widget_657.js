function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_657";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_657 = Ti.UI.createView({
        id: "widget_657"
    });
    $.__views.widget_657 && $.addTopLevelView($.__views.widget_657);
    $.__views.__alloyId16146 = Ti.UI.createView({
        id: "__alloyId16146"
    });
    $.__views.widget_657.add($.__views.__alloyId16146);
    $.__views.__alloyId16147 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16147"
    });
    $.__views.__alloyId16146.add($.__views.__alloyId16147);
    $.__views.__alloyId16148 = Ti.UI.createView({
        id: "__alloyId16148"
    });
    $.__views.__alloyId16148 && $.addTopLevelView($.__views.__alloyId16148);
    $.__views.__alloyId16149 = Ti.UI.createView({
        id: "__alloyId16149"
    });
    $.__views.__alloyId16148.add($.__views.__alloyId16149);
    $.__views.__alloyId16150 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16150"
    });
    $.__views.__alloyId16149.add($.__views.__alloyId16150);
    $.__views.__alloyId16151 = Ti.UI.createView({
        id: "__alloyId16151"
    });
    $.__views.__alloyId16151 && $.addTopLevelView($.__views.__alloyId16151);
    $.__views.__alloyId16152 = Ti.UI.createView({
        id: "__alloyId16152"
    });
    $.__views.__alloyId16151.add($.__views.__alloyId16152);
    $.__views.__alloyId16153 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16153"
    });
    $.__views.__alloyId16152.add($.__views.__alloyId16153);
    $.__views.__alloyId16154 = Ti.UI.createView({
        id: "__alloyId16154"
    });
    $.__views.__alloyId16154 && $.addTopLevelView($.__views.__alloyId16154);
    $.__views.__alloyId16155 = Ti.UI.createView({
        id: "__alloyId16155"
    });
    $.__views.__alloyId16154.add($.__views.__alloyId16155);
    $.__views.__alloyId16156 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16156"
    });
    $.__views.__alloyId16155.add($.__views.__alloyId16156);
    $.__views.__alloyId16157 = Ti.UI.createView({
        id: "__alloyId16157"
    });
    $.__views.__alloyId16157 && $.addTopLevelView($.__views.__alloyId16157);
    $.__views.__alloyId16158 = Ti.UI.createView({
        id: "__alloyId16158"
    });
    $.__views.__alloyId16157.add($.__views.__alloyId16158);
    $.__views.__alloyId16159 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16159"
    });
    $.__views.__alloyId16158.add($.__views.__alloyId16159);
    $.__views.__alloyId16160 = Ti.UI.createView({
        id: "__alloyId16160"
    });
    $.__views.__alloyId16160 && $.addTopLevelView($.__views.__alloyId16160);
    $.__views.__alloyId16161 = Ti.UI.createView({
        id: "__alloyId16161"
    });
    $.__views.__alloyId16160.add($.__views.__alloyId16161);
    $.__views.__alloyId16162 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16162"
    });
    $.__views.__alloyId16161.add($.__views.__alloyId16162);
    $.__views.__alloyId16163 = Ti.UI.createView({
        id: "__alloyId16163"
    });
    $.__views.__alloyId16163 && $.addTopLevelView($.__views.__alloyId16163);
    $.__views.__alloyId16164 = Ti.UI.createView({
        id: "__alloyId16164"
    });
    $.__views.__alloyId16163.add($.__views.__alloyId16164);
    $.__views.__alloyId16165 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16165"
    });
    $.__views.__alloyId16164.add($.__views.__alloyId16165);
    $.__views.__alloyId16166 = Ti.UI.createView({
        id: "__alloyId16166"
    });
    $.__views.__alloyId16166 && $.addTopLevelView($.__views.__alloyId16166);
    $.__views.__alloyId16167 = Ti.UI.createView({
        id: "__alloyId16167"
    });
    $.__views.__alloyId16166.add($.__views.__alloyId16167);
    $.__views.__alloyId16168 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16168"
    });
    $.__views.__alloyId16167.add($.__views.__alloyId16168);
    $.__views.__alloyId16169 = Ti.UI.createView({
        id: "__alloyId16169"
    });
    $.__views.__alloyId16169 && $.addTopLevelView($.__views.__alloyId16169);
    $.__views.__alloyId16170 = Ti.UI.createView({
        id: "__alloyId16170"
    });
    $.__views.__alloyId16169.add($.__views.__alloyId16170);
    $.__views.__alloyId16171 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16171"
    });
    $.__views.__alloyId16170.add($.__views.__alloyId16171);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;