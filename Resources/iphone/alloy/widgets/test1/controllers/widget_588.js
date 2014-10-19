function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_588";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_588 = Ti.UI.createView({
        id: "widget_588"
    });
    $.__views.widget_588 && $.addTopLevelView($.__views.widget_588);
    $.__views.__alloyId14144 = Ti.UI.createView({
        id: "__alloyId14144"
    });
    $.__views.widget_588.add($.__views.__alloyId14144);
    $.__views.__alloyId14145 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14145"
    });
    $.__views.__alloyId14144.add($.__views.__alloyId14145);
    $.__views.__alloyId14146 = Ti.UI.createView({
        id: "__alloyId14146"
    });
    $.__views.__alloyId14146 && $.addTopLevelView($.__views.__alloyId14146);
    $.__views.__alloyId14147 = Ti.UI.createView({
        id: "__alloyId14147"
    });
    $.__views.__alloyId14146.add($.__views.__alloyId14147);
    $.__views.__alloyId14148 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14148"
    });
    $.__views.__alloyId14147.add($.__views.__alloyId14148);
    $.__views.__alloyId14149 = Ti.UI.createView({
        id: "__alloyId14149"
    });
    $.__views.__alloyId14149 && $.addTopLevelView($.__views.__alloyId14149);
    $.__views.__alloyId14150 = Ti.UI.createView({
        id: "__alloyId14150"
    });
    $.__views.__alloyId14149.add($.__views.__alloyId14150);
    $.__views.__alloyId14151 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14151"
    });
    $.__views.__alloyId14150.add($.__views.__alloyId14151);
    $.__views.__alloyId14152 = Ti.UI.createView({
        id: "__alloyId14152"
    });
    $.__views.__alloyId14152 && $.addTopLevelView($.__views.__alloyId14152);
    $.__views.__alloyId14153 = Ti.UI.createView({
        id: "__alloyId14153"
    });
    $.__views.__alloyId14152.add($.__views.__alloyId14153);
    $.__views.__alloyId14154 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14154"
    });
    $.__views.__alloyId14153.add($.__views.__alloyId14154);
    $.__views.__alloyId14155 = Ti.UI.createView({
        id: "__alloyId14155"
    });
    $.__views.__alloyId14155 && $.addTopLevelView($.__views.__alloyId14155);
    $.__views.__alloyId14156 = Ti.UI.createView({
        id: "__alloyId14156"
    });
    $.__views.__alloyId14155.add($.__views.__alloyId14156);
    $.__views.__alloyId14157 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14157"
    });
    $.__views.__alloyId14156.add($.__views.__alloyId14157);
    $.__views.__alloyId14158 = Ti.UI.createView({
        id: "__alloyId14158"
    });
    $.__views.__alloyId14158 && $.addTopLevelView($.__views.__alloyId14158);
    $.__views.__alloyId14159 = Ti.UI.createView({
        id: "__alloyId14159"
    });
    $.__views.__alloyId14158.add($.__views.__alloyId14159);
    $.__views.__alloyId14160 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14160"
    });
    $.__views.__alloyId14159.add($.__views.__alloyId14160);
    $.__views.__alloyId14161 = Ti.UI.createView({
        id: "__alloyId14161"
    });
    $.__views.__alloyId14161 && $.addTopLevelView($.__views.__alloyId14161);
    $.__views.__alloyId14162 = Ti.UI.createView({
        id: "__alloyId14162"
    });
    $.__views.__alloyId14161.add($.__views.__alloyId14162);
    $.__views.__alloyId14163 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14163"
    });
    $.__views.__alloyId14162.add($.__views.__alloyId14163);
    $.__views.__alloyId14164 = Ti.UI.createView({
        id: "__alloyId14164"
    });
    $.__views.__alloyId14164 && $.addTopLevelView($.__views.__alloyId14164);
    $.__views.__alloyId14165 = Ti.UI.createView({
        id: "__alloyId14165"
    });
    $.__views.__alloyId14164.add($.__views.__alloyId14165);
    $.__views.__alloyId14166 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14166"
    });
    $.__views.__alloyId14165.add($.__views.__alloyId14166);
    $.__views.__alloyId14167 = Ti.UI.createView({
        id: "__alloyId14167"
    });
    $.__views.__alloyId14167 && $.addTopLevelView($.__views.__alloyId14167);
    $.__views.__alloyId14168 = Ti.UI.createView({
        id: "__alloyId14168"
    });
    $.__views.__alloyId14167.add($.__views.__alloyId14168);
    $.__views.__alloyId14169 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14169"
    });
    $.__views.__alloyId14168.add($.__views.__alloyId14169);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;