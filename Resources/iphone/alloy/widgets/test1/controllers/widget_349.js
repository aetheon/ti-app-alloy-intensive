function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_349";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_349 = Ti.UI.createView({
        id: "widget_349"
    });
    $.__views.widget_349 && $.addTopLevelView($.__views.widget_349);
    $.__views.__alloyId7254 = Ti.UI.createView({
        id: "__alloyId7254"
    });
    $.__views.widget_349.add($.__views.__alloyId7254);
    $.__views.__alloyId7255 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7255"
    });
    $.__views.__alloyId7254.add($.__views.__alloyId7255);
    $.__views.__alloyId7256 = Ti.UI.createView({
        id: "__alloyId7256"
    });
    $.__views.__alloyId7256 && $.addTopLevelView($.__views.__alloyId7256);
    $.__views.__alloyId7257 = Ti.UI.createView({
        id: "__alloyId7257"
    });
    $.__views.__alloyId7256.add($.__views.__alloyId7257);
    $.__views.__alloyId7258 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7258"
    });
    $.__views.__alloyId7257.add($.__views.__alloyId7258);
    $.__views.__alloyId7259 = Ti.UI.createView({
        id: "__alloyId7259"
    });
    $.__views.__alloyId7259 && $.addTopLevelView($.__views.__alloyId7259);
    $.__views.__alloyId7260 = Ti.UI.createView({
        id: "__alloyId7260"
    });
    $.__views.__alloyId7259.add($.__views.__alloyId7260);
    $.__views.__alloyId7261 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7261"
    });
    $.__views.__alloyId7260.add($.__views.__alloyId7261);
    $.__views.__alloyId7262 = Ti.UI.createView({
        id: "__alloyId7262"
    });
    $.__views.__alloyId7262 && $.addTopLevelView($.__views.__alloyId7262);
    $.__views.__alloyId7263 = Ti.UI.createView({
        id: "__alloyId7263"
    });
    $.__views.__alloyId7262.add($.__views.__alloyId7263);
    $.__views.__alloyId7264 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7264"
    });
    $.__views.__alloyId7263.add($.__views.__alloyId7264);
    $.__views.__alloyId7265 = Ti.UI.createView({
        id: "__alloyId7265"
    });
    $.__views.__alloyId7265 && $.addTopLevelView($.__views.__alloyId7265);
    $.__views.__alloyId7266 = Ti.UI.createView({
        id: "__alloyId7266"
    });
    $.__views.__alloyId7265.add($.__views.__alloyId7266);
    $.__views.__alloyId7267 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7267"
    });
    $.__views.__alloyId7266.add($.__views.__alloyId7267);
    $.__views.__alloyId7268 = Ti.UI.createView({
        id: "__alloyId7268"
    });
    $.__views.__alloyId7268 && $.addTopLevelView($.__views.__alloyId7268);
    $.__views.__alloyId7269 = Ti.UI.createView({
        id: "__alloyId7269"
    });
    $.__views.__alloyId7268.add($.__views.__alloyId7269);
    $.__views.__alloyId7270 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7270"
    });
    $.__views.__alloyId7269.add($.__views.__alloyId7270);
    $.__views.__alloyId7271 = Ti.UI.createView({
        id: "__alloyId7271"
    });
    $.__views.__alloyId7271 && $.addTopLevelView($.__views.__alloyId7271);
    $.__views.__alloyId7272 = Ti.UI.createView({
        id: "__alloyId7272"
    });
    $.__views.__alloyId7271.add($.__views.__alloyId7272);
    $.__views.__alloyId7273 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7273"
    });
    $.__views.__alloyId7272.add($.__views.__alloyId7273);
    $.__views.__alloyId7274 = Ti.UI.createView({
        id: "__alloyId7274"
    });
    $.__views.__alloyId7274 && $.addTopLevelView($.__views.__alloyId7274);
    $.__views.__alloyId7275 = Ti.UI.createView({
        id: "__alloyId7275"
    });
    $.__views.__alloyId7274.add($.__views.__alloyId7275);
    $.__views.__alloyId7276 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7276"
    });
    $.__views.__alloyId7275.add($.__views.__alloyId7276);
    $.__views.__alloyId7277 = Ti.UI.createView({
        id: "__alloyId7277"
    });
    $.__views.__alloyId7277 && $.addTopLevelView($.__views.__alloyId7277);
    $.__views.__alloyId7278 = Ti.UI.createView({
        id: "__alloyId7278"
    });
    $.__views.__alloyId7277.add($.__views.__alloyId7278);
    $.__views.__alloyId7279 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7279"
    });
    $.__views.__alloyId7278.add($.__views.__alloyId7279);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;