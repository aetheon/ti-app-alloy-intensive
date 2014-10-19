function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_591";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_591 = Ti.UI.createView({
        id: "widget_591"
    });
    $.__views.widget_591 && $.addTopLevelView($.__views.widget_591);
    $.__views.__alloyId14248 = Ti.UI.createView({
        id: "__alloyId14248"
    });
    $.__views.widget_591.add($.__views.__alloyId14248);
    $.__views.__alloyId14249 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14249"
    });
    $.__views.__alloyId14248.add($.__views.__alloyId14249);
    $.__views.__alloyId14250 = Ti.UI.createView({
        id: "__alloyId14250"
    });
    $.__views.__alloyId14250 && $.addTopLevelView($.__views.__alloyId14250);
    $.__views.__alloyId14251 = Ti.UI.createView({
        id: "__alloyId14251"
    });
    $.__views.__alloyId14250.add($.__views.__alloyId14251);
    $.__views.__alloyId14252 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14252"
    });
    $.__views.__alloyId14251.add($.__views.__alloyId14252);
    $.__views.__alloyId14253 = Ti.UI.createView({
        id: "__alloyId14253"
    });
    $.__views.__alloyId14253 && $.addTopLevelView($.__views.__alloyId14253);
    $.__views.__alloyId14254 = Ti.UI.createView({
        id: "__alloyId14254"
    });
    $.__views.__alloyId14253.add($.__views.__alloyId14254);
    $.__views.__alloyId14255 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14255"
    });
    $.__views.__alloyId14254.add($.__views.__alloyId14255);
    $.__views.__alloyId14256 = Ti.UI.createView({
        id: "__alloyId14256"
    });
    $.__views.__alloyId14256 && $.addTopLevelView($.__views.__alloyId14256);
    $.__views.__alloyId14257 = Ti.UI.createView({
        id: "__alloyId14257"
    });
    $.__views.__alloyId14256.add($.__views.__alloyId14257);
    $.__views.__alloyId14258 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14258"
    });
    $.__views.__alloyId14257.add($.__views.__alloyId14258);
    $.__views.__alloyId14259 = Ti.UI.createView({
        id: "__alloyId14259"
    });
    $.__views.__alloyId14259 && $.addTopLevelView($.__views.__alloyId14259);
    $.__views.__alloyId14260 = Ti.UI.createView({
        id: "__alloyId14260"
    });
    $.__views.__alloyId14259.add($.__views.__alloyId14260);
    $.__views.__alloyId14261 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14261"
    });
    $.__views.__alloyId14260.add($.__views.__alloyId14261);
    $.__views.__alloyId14262 = Ti.UI.createView({
        id: "__alloyId14262"
    });
    $.__views.__alloyId14262 && $.addTopLevelView($.__views.__alloyId14262);
    $.__views.__alloyId14263 = Ti.UI.createView({
        id: "__alloyId14263"
    });
    $.__views.__alloyId14262.add($.__views.__alloyId14263);
    $.__views.__alloyId14264 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14264"
    });
    $.__views.__alloyId14263.add($.__views.__alloyId14264);
    $.__views.__alloyId14265 = Ti.UI.createView({
        id: "__alloyId14265"
    });
    $.__views.__alloyId14265 && $.addTopLevelView($.__views.__alloyId14265);
    $.__views.__alloyId14266 = Ti.UI.createView({
        id: "__alloyId14266"
    });
    $.__views.__alloyId14265.add($.__views.__alloyId14266);
    $.__views.__alloyId14267 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14267"
    });
    $.__views.__alloyId14266.add($.__views.__alloyId14267);
    $.__views.__alloyId14268 = Ti.UI.createView({
        id: "__alloyId14268"
    });
    $.__views.__alloyId14268 && $.addTopLevelView($.__views.__alloyId14268);
    $.__views.__alloyId14269 = Ti.UI.createView({
        id: "__alloyId14269"
    });
    $.__views.__alloyId14268.add($.__views.__alloyId14269);
    $.__views.__alloyId14270 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14270"
    });
    $.__views.__alloyId14269.add($.__views.__alloyId14270);
    $.__views.__alloyId14271 = Ti.UI.createView({
        id: "__alloyId14271"
    });
    $.__views.__alloyId14271 && $.addTopLevelView($.__views.__alloyId14271);
    $.__views.__alloyId14272 = Ti.UI.createView({
        id: "__alloyId14272"
    });
    $.__views.__alloyId14271.add($.__views.__alloyId14272);
    $.__views.__alloyId14273 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14273"
    });
    $.__views.__alloyId14272.add($.__views.__alloyId14273);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;