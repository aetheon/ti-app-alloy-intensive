function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_938";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_938 = Ti.UI.createView({
        id: "widget_938"
    });
    $.__views.widget_938 && $.addTopLevelView($.__views.widget_938);
    $.__views.__alloyId24258 = Ti.UI.createView({
        id: "__alloyId24258"
    });
    $.__views.widget_938.add($.__views.__alloyId24258);
    $.__views.__alloyId24259 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24259"
    });
    $.__views.__alloyId24258.add($.__views.__alloyId24259);
    $.__views.__alloyId24260 = Ti.UI.createView({
        id: "__alloyId24260"
    });
    $.__views.__alloyId24260 && $.addTopLevelView($.__views.__alloyId24260);
    $.__views.__alloyId24261 = Ti.UI.createView({
        id: "__alloyId24261"
    });
    $.__views.__alloyId24260.add($.__views.__alloyId24261);
    $.__views.__alloyId24262 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24262"
    });
    $.__views.__alloyId24261.add($.__views.__alloyId24262);
    $.__views.__alloyId24263 = Ti.UI.createView({
        id: "__alloyId24263"
    });
    $.__views.__alloyId24263 && $.addTopLevelView($.__views.__alloyId24263);
    $.__views.__alloyId24264 = Ti.UI.createView({
        id: "__alloyId24264"
    });
    $.__views.__alloyId24263.add($.__views.__alloyId24264);
    $.__views.__alloyId24265 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24265"
    });
    $.__views.__alloyId24264.add($.__views.__alloyId24265);
    $.__views.__alloyId24266 = Ti.UI.createView({
        id: "__alloyId24266"
    });
    $.__views.__alloyId24266 && $.addTopLevelView($.__views.__alloyId24266);
    $.__views.__alloyId24267 = Ti.UI.createView({
        id: "__alloyId24267"
    });
    $.__views.__alloyId24266.add($.__views.__alloyId24267);
    $.__views.__alloyId24268 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24268"
    });
    $.__views.__alloyId24267.add($.__views.__alloyId24268);
    $.__views.__alloyId24269 = Ti.UI.createView({
        id: "__alloyId24269"
    });
    $.__views.__alloyId24269 && $.addTopLevelView($.__views.__alloyId24269);
    $.__views.__alloyId24270 = Ti.UI.createView({
        id: "__alloyId24270"
    });
    $.__views.__alloyId24269.add($.__views.__alloyId24270);
    $.__views.__alloyId24271 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24271"
    });
    $.__views.__alloyId24270.add($.__views.__alloyId24271);
    $.__views.__alloyId24272 = Ti.UI.createView({
        id: "__alloyId24272"
    });
    $.__views.__alloyId24272 && $.addTopLevelView($.__views.__alloyId24272);
    $.__views.__alloyId24273 = Ti.UI.createView({
        id: "__alloyId24273"
    });
    $.__views.__alloyId24272.add($.__views.__alloyId24273);
    $.__views.__alloyId24274 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24274"
    });
    $.__views.__alloyId24273.add($.__views.__alloyId24274);
    $.__views.__alloyId24275 = Ti.UI.createView({
        id: "__alloyId24275"
    });
    $.__views.__alloyId24275 && $.addTopLevelView($.__views.__alloyId24275);
    $.__views.__alloyId24276 = Ti.UI.createView({
        id: "__alloyId24276"
    });
    $.__views.__alloyId24275.add($.__views.__alloyId24276);
    $.__views.__alloyId24277 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24277"
    });
    $.__views.__alloyId24276.add($.__views.__alloyId24277);
    $.__views.__alloyId24278 = Ti.UI.createView({
        id: "__alloyId24278"
    });
    $.__views.__alloyId24278 && $.addTopLevelView($.__views.__alloyId24278);
    $.__views.__alloyId24279 = Ti.UI.createView({
        id: "__alloyId24279"
    });
    $.__views.__alloyId24278.add($.__views.__alloyId24279);
    $.__views.__alloyId24280 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24280"
    });
    $.__views.__alloyId24279.add($.__views.__alloyId24280);
    $.__views.__alloyId24281 = Ti.UI.createView({
        id: "__alloyId24281"
    });
    $.__views.__alloyId24281 && $.addTopLevelView($.__views.__alloyId24281);
    $.__views.__alloyId24282 = Ti.UI.createView({
        id: "__alloyId24282"
    });
    $.__views.__alloyId24281.add($.__views.__alloyId24282);
    $.__views.__alloyId24283 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24283"
    });
    $.__views.__alloyId24282.add($.__views.__alloyId24283);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;