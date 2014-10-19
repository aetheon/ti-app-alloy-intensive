function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_21";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_21 = Ti.UI.createView({
        id: "widget_21"
    });
    $.__views.widget_21 && $.addTopLevelView($.__views.widget_21);
    $.__views.__alloyId3250 = Ti.UI.createView({
        id: "__alloyId3250"
    });
    $.__views.widget_21.add($.__views.__alloyId3250);
    $.__views.__alloyId3251 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3251"
    });
    $.__views.__alloyId3250.add($.__views.__alloyId3251);
    $.__views.__alloyId3252 = Ti.UI.createView({
        id: "__alloyId3252"
    });
    $.__views.__alloyId3252 && $.addTopLevelView($.__views.__alloyId3252);
    $.__views.__alloyId3253 = Ti.UI.createView({
        id: "__alloyId3253"
    });
    $.__views.__alloyId3252.add($.__views.__alloyId3253);
    $.__views.__alloyId3254 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3254"
    });
    $.__views.__alloyId3253.add($.__views.__alloyId3254);
    $.__views.__alloyId3255 = Ti.UI.createView({
        id: "__alloyId3255"
    });
    $.__views.__alloyId3255 && $.addTopLevelView($.__views.__alloyId3255);
    $.__views.__alloyId3256 = Ti.UI.createView({
        id: "__alloyId3256"
    });
    $.__views.__alloyId3255.add($.__views.__alloyId3256);
    $.__views.__alloyId3257 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3257"
    });
    $.__views.__alloyId3256.add($.__views.__alloyId3257);
    $.__views.__alloyId3258 = Ti.UI.createView({
        id: "__alloyId3258"
    });
    $.__views.__alloyId3258 && $.addTopLevelView($.__views.__alloyId3258);
    $.__views.__alloyId3259 = Ti.UI.createView({
        id: "__alloyId3259"
    });
    $.__views.__alloyId3258.add($.__views.__alloyId3259);
    $.__views.__alloyId3260 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3260"
    });
    $.__views.__alloyId3259.add($.__views.__alloyId3260);
    $.__views.__alloyId3261 = Ti.UI.createView({
        id: "__alloyId3261"
    });
    $.__views.__alloyId3261 && $.addTopLevelView($.__views.__alloyId3261);
    $.__views.__alloyId3262 = Ti.UI.createView({
        id: "__alloyId3262"
    });
    $.__views.__alloyId3261.add($.__views.__alloyId3262);
    $.__views.__alloyId3263 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3263"
    });
    $.__views.__alloyId3262.add($.__views.__alloyId3263);
    $.__views.__alloyId3264 = Ti.UI.createView({
        id: "__alloyId3264"
    });
    $.__views.__alloyId3264 && $.addTopLevelView($.__views.__alloyId3264);
    $.__views.__alloyId3265 = Ti.UI.createView({
        id: "__alloyId3265"
    });
    $.__views.__alloyId3264.add($.__views.__alloyId3265);
    $.__views.__alloyId3266 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3266"
    });
    $.__views.__alloyId3265.add($.__views.__alloyId3266);
    $.__views.__alloyId3267 = Ti.UI.createView({
        id: "__alloyId3267"
    });
    $.__views.__alloyId3267 && $.addTopLevelView($.__views.__alloyId3267);
    $.__views.__alloyId3268 = Ti.UI.createView({
        id: "__alloyId3268"
    });
    $.__views.__alloyId3267.add($.__views.__alloyId3268);
    $.__views.__alloyId3269 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3269"
    });
    $.__views.__alloyId3268.add($.__views.__alloyId3269);
    $.__views.__alloyId3270 = Ti.UI.createView({
        id: "__alloyId3270"
    });
    $.__views.__alloyId3270 && $.addTopLevelView($.__views.__alloyId3270);
    $.__views.__alloyId3271 = Ti.UI.createView({
        id: "__alloyId3271"
    });
    $.__views.__alloyId3270.add($.__views.__alloyId3271);
    $.__views.__alloyId3272 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3272"
    });
    $.__views.__alloyId3271.add($.__views.__alloyId3272);
    $.__views.__alloyId3273 = Ti.UI.createView({
        id: "__alloyId3273"
    });
    $.__views.__alloyId3273 && $.addTopLevelView($.__views.__alloyId3273);
    $.__views.__alloyId3274 = Ti.UI.createView({
        id: "__alloyId3274"
    });
    $.__views.__alloyId3273.add($.__views.__alloyId3274);
    $.__views.__alloyId3275 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3275"
    });
    $.__views.__alloyId3274.add($.__views.__alloyId3275);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;