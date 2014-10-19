function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_521";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_521 = Ti.UI.createView({
        id: "widget_521"
    });
    $.__views.widget_521 && $.addTopLevelView($.__views.widget_521);
    $.__views.__alloyId12246 = Ti.UI.createView({
        id: "__alloyId12246"
    });
    $.__views.widget_521.add($.__views.__alloyId12246);
    $.__views.__alloyId12247 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12247"
    });
    $.__views.__alloyId12246.add($.__views.__alloyId12247);
    $.__views.__alloyId12248 = Ti.UI.createView({
        id: "__alloyId12248"
    });
    $.__views.__alloyId12248 && $.addTopLevelView($.__views.__alloyId12248);
    $.__views.__alloyId12249 = Ti.UI.createView({
        id: "__alloyId12249"
    });
    $.__views.__alloyId12248.add($.__views.__alloyId12249);
    $.__views.__alloyId12250 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12250"
    });
    $.__views.__alloyId12249.add($.__views.__alloyId12250);
    $.__views.__alloyId12251 = Ti.UI.createView({
        id: "__alloyId12251"
    });
    $.__views.__alloyId12251 && $.addTopLevelView($.__views.__alloyId12251);
    $.__views.__alloyId12252 = Ti.UI.createView({
        id: "__alloyId12252"
    });
    $.__views.__alloyId12251.add($.__views.__alloyId12252);
    $.__views.__alloyId12253 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12253"
    });
    $.__views.__alloyId12252.add($.__views.__alloyId12253);
    $.__views.__alloyId12254 = Ti.UI.createView({
        id: "__alloyId12254"
    });
    $.__views.__alloyId12254 && $.addTopLevelView($.__views.__alloyId12254);
    $.__views.__alloyId12255 = Ti.UI.createView({
        id: "__alloyId12255"
    });
    $.__views.__alloyId12254.add($.__views.__alloyId12255);
    $.__views.__alloyId12256 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12256"
    });
    $.__views.__alloyId12255.add($.__views.__alloyId12256);
    $.__views.__alloyId12257 = Ti.UI.createView({
        id: "__alloyId12257"
    });
    $.__views.__alloyId12257 && $.addTopLevelView($.__views.__alloyId12257);
    $.__views.__alloyId12258 = Ti.UI.createView({
        id: "__alloyId12258"
    });
    $.__views.__alloyId12257.add($.__views.__alloyId12258);
    $.__views.__alloyId12259 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12259"
    });
    $.__views.__alloyId12258.add($.__views.__alloyId12259);
    $.__views.__alloyId12260 = Ti.UI.createView({
        id: "__alloyId12260"
    });
    $.__views.__alloyId12260 && $.addTopLevelView($.__views.__alloyId12260);
    $.__views.__alloyId12261 = Ti.UI.createView({
        id: "__alloyId12261"
    });
    $.__views.__alloyId12260.add($.__views.__alloyId12261);
    $.__views.__alloyId12262 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12262"
    });
    $.__views.__alloyId12261.add($.__views.__alloyId12262);
    $.__views.__alloyId12263 = Ti.UI.createView({
        id: "__alloyId12263"
    });
    $.__views.__alloyId12263 && $.addTopLevelView($.__views.__alloyId12263);
    $.__views.__alloyId12264 = Ti.UI.createView({
        id: "__alloyId12264"
    });
    $.__views.__alloyId12263.add($.__views.__alloyId12264);
    $.__views.__alloyId12265 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12265"
    });
    $.__views.__alloyId12264.add($.__views.__alloyId12265);
    $.__views.__alloyId12266 = Ti.UI.createView({
        id: "__alloyId12266"
    });
    $.__views.__alloyId12266 && $.addTopLevelView($.__views.__alloyId12266);
    $.__views.__alloyId12267 = Ti.UI.createView({
        id: "__alloyId12267"
    });
    $.__views.__alloyId12266.add($.__views.__alloyId12267);
    $.__views.__alloyId12268 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12268"
    });
    $.__views.__alloyId12267.add($.__views.__alloyId12268);
    $.__views.__alloyId12269 = Ti.UI.createView({
        id: "__alloyId12269"
    });
    $.__views.__alloyId12269 && $.addTopLevelView($.__views.__alloyId12269);
    $.__views.__alloyId12270 = Ti.UI.createView({
        id: "__alloyId12270"
    });
    $.__views.__alloyId12269.add($.__views.__alloyId12270);
    $.__views.__alloyId12271 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12271"
    });
    $.__views.__alloyId12270.add($.__views.__alloyId12271);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;