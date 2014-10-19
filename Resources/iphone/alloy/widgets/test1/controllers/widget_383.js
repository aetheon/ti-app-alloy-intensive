function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_383";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_383 = Ti.UI.createView({
        id: "widget_383"
    });
    $.__views.widget_383 && $.addTopLevelView($.__views.widget_383);
    $.__views.__alloyId8242 = Ti.UI.createView({
        id: "__alloyId8242"
    });
    $.__views.widget_383.add($.__views.__alloyId8242);
    $.__views.__alloyId8243 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8243"
    });
    $.__views.__alloyId8242.add($.__views.__alloyId8243);
    $.__views.__alloyId8244 = Ti.UI.createView({
        id: "__alloyId8244"
    });
    $.__views.__alloyId8244 && $.addTopLevelView($.__views.__alloyId8244);
    $.__views.__alloyId8245 = Ti.UI.createView({
        id: "__alloyId8245"
    });
    $.__views.__alloyId8244.add($.__views.__alloyId8245);
    $.__views.__alloyId8246 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8246"
    });
    $.__views.__alloyId8245.add($.__views.__alloyId8246);
    $.__views.__alloyId8247 = Ti.UI.createView({
        id: "__alloyId8247"
    });
    $.__views.__alloyId8247 && $.addTopLevelView($.__views.__alloyId8247);
    $.__views.__alloyId8248 = Ti.UI.createView({
        id: "__alloyId8248"
    });
    $.__views.__alloyId8247.add($.__views.__alloyId8248);
    $.__views.__alloyId8249 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8249"
    });
    $.__views.__alloyId8248.add($.__views.__alloyId8249);
    $.__views.__alloyId8250 = Ti.UI.createView({
        id: "__alloyId8250"
    });
    $.__views.__alloyId8250 && $.addTopLevelView($.__views.__alloyId8250);
    $.__views.__alloyId8251 = Ti.UI.createView({
        id: "__alloyId8251"
    });
    $.__views.__alloyId8250.add($.__views.__alloyId8251);
    $.__views.__alloyId8252 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8252"
    });
    $.__views.__alloyId8251.add($.__views.__alloyId8252);
    $.__views.__alloyId8253 = Ti.UI.createView({
        id: "__alloyId8253"
    });
    $.__views.__alloyId8253 && $.addTopLevelView($.__views.__alloyId8253);
    $.__views.__alloyId8254 = Ti.UI.createView({
        id: "__alloyId8254"
    });
    $.__views.__alloyId8253.add($.__views.__alloyId8254);
    $.__views.__alloyId8255 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8255"
    });
    $.__views.__alloyId8254.add($.__views.__alloyId8255);
    $.__views.__alloyId8256 = Ti.UI.createView({
        id: "__alloyId8256"
    });
    $.__views.__alloyId8256 && $.addTopLevelView($.__views.__alloyId8256);
    $.__views.__alloyId8257 = Ti.UI.createView({
        id: "__alloyId8257"
    });
    $.__views.__alloyId8256.add($.__views.__alloyId8257);
    $.__views.__alloyId8258 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8258"
    });
    $.__views.__alloyId8257.add($.__views.__alloyId8258);
    $.__views.__alloyId8259 = Ti.UI.createView({
        id: "__alloyId8259"
    });
    $.__views.__alloyId8259 && $.addTopLevelView($.__views.__alloyId8259);
    $.__views.__alloyId8260 = Ti.UI.createView({
        id: "__alloyId8260"
    });
    $.__views.__alloyId8259.add($.__views.__alloyId8260);
    $.__views.__alloyId8261 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8261"
    });
    $.__views.__alloyId8260.add($.__views.__alloyId8261);
    $.__views.__alloyId8262 = Ti.UI.createView({
        id: "__alloyId8262"
    });
    $.__views.__alloyId8262 && $.addTopLevelView($.__views.__alloyId8262);
    $.__views.__alloyId8263 = Ti.UI.createView({
        id: "__alloyId8263"
    });
    $.__views.__alloyId8262.add($.__views.__alloyId8263);
    $.__views.__alloyId8264 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8264"
    });
    $.__views.__alloyId8263.add($.__views.__alloyId8264);
    $.__views.__alloyId8265 = Ti.UI.createView({
        id: "__alloyId8265"
    });
    $.__views.__alloyId8265 && $.addTopLevelView($.__views.__alloyId8265);
    $.__views.__alloyId8266 = Ti.UI.createView({
        id: "__alloyId8266"
    });
    $.__views.__alloyId8265.add($.__views.__alloyId8266);
    $.__views.__alloyId8267 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8267"
    });
    $.__views.__alloyId8266.add($.__views.__alloyId8267);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;