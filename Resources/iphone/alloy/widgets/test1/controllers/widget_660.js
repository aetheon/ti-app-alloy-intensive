function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_660";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_660 = Ti.UI.createView({
        id: "widget_660"
    });
    $.__views.widget_660 && $.addTopLevelView($.__views.widget_660);
    $.__views.__alloyId16250 = Ti.UI.createView({
        id: "__alloyId16250"
    });
    $.__views.widget_660.add($.__views.__alloyId16250);
    $.__views.__alloyId16251 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16251"
    });
    $.__views.__alloyId16250.add($.__views.__alloyId16251);
    $.__views.__alloyId16252 = Ti.UI.createView({
        id: "__alloyId16252"
    });
    $.__views.__alloyId16252 && $.addTopLevelView($.__views.__alloyId16252);
    $.__views.__alloyId16253 = Ti.UI.createView({
        id: "__alloyId16253"
    });
    $.__views.__alloyId16252.add($.__views.__alloyId16253);
    $.__views.__alloyId16254 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16254"
    });
    $.__views.__alloyId16253.add($.__views.__alloyId16254);
    $.__views.__alloyId16255 = Ti.UI.createView({
        id: "__alloyId16255"
    });
    $.__views.__alloyId16255 && $.addTopLevelView($.__views.__alloyId16255);
    $.__views.__alloyId16256 = Ti.UI.createView({
        id: "__alloyId16256"
    });
    $.__views.__alloyId16255.add($.__views.__alloyId16256);
    $.__views.__alloyId16257 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16257"
    });
    $.__views.__alloyId16256.add($.__views.__alloyId16257);
    $.__views.__alloyId16258 = Ti.UI.createView({
        id: "__alloyId16258"
    });
    $.__views.__alloyId16258 && $.addTopLevelView($.__views.__alloyId16258);
    $.__views.__alloyId16259 = Ti.UI.createView({
        id: "__alloyId16259"
    });
    $.__views.__alloyId16258.add($.__views.__alloyId16259);
    $.__views.__alloyId16260 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16260"
    });
    $.__views.__alloyId16259.add($.__views.__alloyId16260);
    $.__views.__alloyId16261 = Ti.UI.createView({
        id: "__alloyId16261"
    });
    $.__views.__alloyId16261 && $.addTopLevelView($.__views.__alloyId16261);
    $.__views.__alloyId16262 = Ti.UI.createView({
        id: "__alloyId16262"
    });
    $.__views.__alloyId16261.add($.__views.__alloyId16262);
    $.__views.__alloyId16263 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16263"
    });
    $.__views.__alloyId16262.add($.__views.__alloyId16263);
    $.__views.__alloyId16264 = Ti.UI.createView({
        id: "__alloyId16264"
    });
    $.__views.__alloyId16264 && $.addTopLevelView($.__views.__alloyId16264);
    $.__views.__alloyId16265 = Ti.UI.createView({
        id: "__alloyId16265"
    });
    $.__views.__alloyId16264.add($.__views.__alloyId16265);
    $.__views.__alloyId16266 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16266"
    });
    $.__views.__alloyId16265.add($.__views.__alloyId16266);
    $.__views.__alloyId16267 = Ti.UI.createView({
        id: "__alloyId16267"
    });
    $.__views.__alloyId16267 && $.addTopLevelView($.__views.__alloyId16267);
    $.__views.__alloyId16268 = Ti.UI.createView({
        id: "__alloyId16268"
    });
    $.__views.__alloyId16267.add($.__views.__alloyId16268);
    $.__views.__alloyId16269 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16269"
    });
    $.__views.__alloyId16268.add($.__views.__alloyId16269);
    $.__views.__alloyId16270 = Ti.UI.createView({
        id: "__alloyId16270"
    });
    $.__views.__alloyId16270 && $.addTopLevelView($.__views.__alloyId16270);
    $.__views.__alloyId16271 = Ti.UI.createView({
        id: "__alloyId16271"
    });
    $.__views.__alloyId16270.add($.__views.__alloyId16271);
    $.__views.__alloyId16272 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16272"
    });
    $.__views.__alloyId16271.add($.__views.__alloyId16272);
    $.__views.__alloyId16273 = Ti.UI.createView({
        id: "__alloyId16273"
    });
    $.__views.__alloyId16273 && $.addTopLevelView($.__views.__alloyId16273);
    $.__views.__alloyId16274 = Ti.UI.createView({
        id: "__alloyId16274"
    });
    $.__views.__alloyId16273.add($.__views.__alloyId16274);
    $.__views.__alloyId16275 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16275"
    });
    $.__views.__alloyId16274.add($.__views.__alloyId16275);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;