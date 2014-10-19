function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_8";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_8 = Ti.UI.createView({
        id: "widget_8"
    });
    $.__views.widget_8 && $.addTopLevelView($.__views.widget_8);
    $.__views.__alloyId20254 = Ti.UI.createView({
        id: "__alloyId20254"
    });
    $.__views.widget_8.add($.__views.__alloyId20254);
    $.__views.__alloyId20255 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20255"
    });
    $.__views.__alloyId20254.add($.__views.__alloyId20255);
    $.__views.__alloyId20256 = Ti.UI.createView({
        id: "__alloyId20256"
    });
    $.__views.__alloyId20256 && $.addTopLevelView($.__views.__alloyId20256);
    $.__views.__alloyId20257 = Ti.UI.createView({
        id: "__alloyId20257"
    });
    $.__views.__alloyId20256.add($.__views.__alloyId20257);
    $.__views.__alloyId20258 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20258"
    });
    $.__views.__alloyId20257.add($.__views.__alloyId20258);
    $.__views.__alloyId20259 = Ti.UI.createView({
        id: "__alloyId20259"
    });
    $.__views.__alloyId20259 && $.addTopLevelView($.__views.__alloyId20259);
    $.__views.__alloyId20260 = Ti.UI.createView({
        id: "__alloyId20260"
    });
    $.__views.__alloyId20259.add($.__views.__alloyId20260);
    $.__views.__alloyId20261 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20261"
    });
    $.__views.__alloyId20260.add($.__views.__alloyId20261);
    $.__views.__alloyId20262 = Ti.UI.createView({
        id: "__alloyId20262"
    });
    $.__views.__alloyId20262 && $.addTopLevelView($.__views.__alloyId20262);
    $.__views.__alloyId20263 = Ti.UI.createView({
        id: "__alloyId20263"
    });
    $.__views.__alloyId20262.add($.__views.__alloyId20263);
    $.__views.__alloyId20264 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20264"
    });
    $.__views.__alloyId20263.add($.__views.__alloyId20264);
    $.__views.__alloyId20265 = Ti.UI.createView({
        id: "__alloyId20265"
    });
    $.__views.__alloyId20265 && $.addTopLevelView($.__views.__alloyId20265);
    $.__views.__alloyId20266 = Ti.UI.createView({
        id: "__alloyId20266"
    });
    $.__views.__alloyId20265.add($.__views.__alloyId20266);
    $.__views.__alloyId20267 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20267"
    });
    $.__views.__alloyId20266.add($.__views.__alloyId20267);
    $.__views.__alloyId20268 = Ti.UI.createView({
        id: "__alloyId20268"
    });
    $.__views.__alloyId20268 && $.addTopLevelView($.__views.__alloyId20268);
    $.__views.__alloyId20269 = Ti.UI.createView({
        id: "__alloyId20269"
    });
    $.__views.__alloyId20268.add($.__views.__alloyId20269);
    $.__views.__alloyId20270 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20270"
    });
    $.__views.__alloyId20269.add($.__views.__alloyId20270);
    $.__views.__alloyId20271 = Ti.UI.createView({
        id: "__alloyId20271"
    });
    $.__views.__alloyId20271 && $.addTopLevelView($.__views.__alloyId20271);
    $.__views.__alloyId20272 = Ti.UI.createView({
        id: "__alloyId20272"
    });
    $.__views.__alloyId20271.add($.__views.__alloyId20272);
    $.__views.__alloyId20273 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20273"
    });
    $.__views.__alloyId20272.add($.__views.__alloyId20273);
    $.__views.__alloyId20274 = Ti.UI.createView({
        id: "__alloyId20274"
    });
    $.__views.__alloyId20274 && $.addTopLevelView($.__views.__alloyId20274);
    $.__views.__alloyId20275 = Ti.UI.createView({
        id: "__alloyId20275"
    });
    $.__views.__alloyId20274.add($.__views.__alloyId20275);
    $.__views.__alloyId20276 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20276"
    });
    $.__views.__alloyId20275.add($.__views.__alloyId20276);
    $.__views.__alloyId20277 = Ti.UI.createView({
        id: "__alloyId20277"
    });
    $.__views.__alloyId20277 && $.addTopLevelView($.__views.__alloyId20277);
    $.__views.__alloyId20278 = Ti.UI.createView({
        id: "__alloyId20278"
    });
    $.__views.__alloyId20277.add($.__views.__alloyId20278);
    $.__views.__alloyId20279 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20279"
    });
    $.__views.__alloyId20278.add($.__views.__alloyId20279);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;