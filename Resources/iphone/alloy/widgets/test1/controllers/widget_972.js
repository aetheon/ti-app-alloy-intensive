function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_972";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_972 = Ti.UI.createView({
        id: "widget_972"
    });
    $.__views.widget_972 && $.addTopLevelView($.__views.widget_972);
    $.__views.__alloyId25246 = Ti.UI.createView({
        id: "__alloyId25246"
    });
    $.__views.widget_972.add($.__views.__alloyId25246);
    $.__views.__alloyId25247 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25247"
    });
    $.__views.__alloyId25246.add($.__views.__alloyId25247);
    $.__views.__alloyId25248 = Ti.UI.createView({
        id: "__alloyId25248"
    });
    $.__views.__alloyId25248 && $.addTopLevelView($.__views.__alloyId25248);
    $.__views.__alloyId25249 = Ti.UI.createView({
        id: "__alloyId25249"
    });
    $.__views.__alloyId25248.add($.__views.__alloyId25249);
    $.__views.__alloyId25250 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25250"
    });
    $.__views.__alloyId25249.add($.__views.__alloyId25250);
    $.__views.__alloyId25251 = Ti.UI.createView({
        id: "__alloyId25251"
    });
    $.__views.__alloyId25251 && $.addTopLevelView($.__views.__alloyId25251);
    $.__views.__alloyId25252 = Ti.UI.createView({
        id: "__alloyId25252"
    });
    $.__views.__alloyId25251.add($.__views.__alloyId25252);
    $.__views.__alloyId25253 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25253"
    });
    $.__views.__alloyId25252.add($.__views.__alloyId25253);
    $.__views.__alloyId25254 = Ti.UI.createView({
        id: "__alloyId25254"
    });
    $.__views.__alloyId25254 && $.addTopLevelView($.__views.__alloyId25254);
    $.__views.__alloyId25255 = Ti.UI.createView({
        id: "__alloyId25255"
    });
    $.__views.__alloyId25254.add($.__views.__alloyId25255);
    $.__views.__alloyId25256 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25256"
    });
    $.__views.__alloyId25255.add($.__views.__alloyId25256);
    $.__views.__alloyId25257 = Ti.UI.createView({
        id: "__alloyId25257"
    });
    $.__views.__alloyId25257 && $.addTopLevelView($.__views.__alloyId25257);
    $.__views.__alloyId25258 = Ti.UI.createView({
        id: "__alloyId25258"
    });
    $.__views.__alloyId25257.add($.__views.__alloyId25258);
    $.__views.__alloyId25259 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25259"
    });
    $.__views.__alloyId25258.add($.__views.__alloyId25259);
    $.__views.__alloyId25260 = Ti.UI.createView({
        id: "__alloyId25260"
    });
    $.__views.__alloyId25260 && $.addTopLevelView($.__views.__alloyId25260);
    $.__views.__alloyId25261 = Ti.UI.createView({
        id: "__alloyId25261"
    });
    $.__views.__alloyId25260.add($.__views.__alloyId25261);
    $.__views.__alloyId25262 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25262"
    });
    $.__views.__alloyId25261.add($.__views.__alloyId25262);
    $.__views.__alloyId25263 = Ti.UI.createView({
        id: "__alloyId25263"
    });
    $.__views.__alloyId25263 && $.addTopLevelView($.__views.__alloyId25263);
    $.__views.__alloyId25264 = Ti.UI.createView({
        id: "__alloyId25264"
    });
    $.__views.__alloyId25263.add($.__views.__alloyId25264);
    $.__views.__alloyId25265 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25265"
    });
    $.__views.__alloyId25264.add($.__views.__alloyId25265);
    $.__views.__alloyId25266 = Ti.UI.createView({
        id: "__alloyId25266"
    });
    $.__views.__alloyId25266 && $.addTopLevelView($.__views.__alloyId25266);
    $.__views.__alloyId25267 = Ti.UI.createView({
        id: "__alloyId25267"
    });
    $.__views.__alloyId25266.add($.__views.__alloyId25267);
    $.__views.__alloyId25268 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25268"
    });
    $.__views.__alloyId25267.add($.__views.__alloyId25268);
    $.__views.__alloyId25269 = Ti.UI.createView({
        id: "__alloyId25269"
    });
    $.__views.__alloyId25269 && $.addTopLevelView($.__views.__alloyId25269);
    $.__views.__alloyId25270 = Ti.UI.createView({
        id: "__alloyId25270"
    });
    $.__views.__alloyId25269.add($.__views.__alloyId25270);
    $.__views.__alloyId25271 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25271"
    });
    $.__views.__alloyId25270.add($.__views.__alloyId25271);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;