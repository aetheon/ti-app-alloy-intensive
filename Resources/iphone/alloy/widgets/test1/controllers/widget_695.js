function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_695";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_695 = Ti.UI.createView({
        id: "widget_695"
    });
    $.__views.widget_695 && $.addTopLevelView($.__views.widget_695);
    $.__views.__alloyId17238 = Ti.UI.createView({
        id: "__alloyId17238"
    });
    $.__views.widget_695.add($.__views.__alloyId17238);
    $.__views.__alloyId17239 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17239"
    });
    $.__views.__alloyId17238.add($.__views.__alloyId17239);
    $.__views.__alloyId17240 = Ti.UI.createView({
        id: "__alloyId17240"
    });
    $.__views.__alloyId17240 && $.addTopLevelView($.__views.__alloyId17240);
    $.__views.__alloyId17241 = Ti.UI.createView({
        id: "__alloyId17241"
    });
    $.__views.__alloyId17240.add($.__views.__alloyId17241);
    $.__views.__alloyId17242 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17242"
    });
    $.__views.__alloyId17241.add($.__views.__alloyId17242);
    $.__views.__alloyId17243 = Ti.UI.createView({
        id: "__alloyId17243"
    });
    $.__views.__alloyId17243 && $.addTopLevelView($.__views.__alloyId17243);
    $.__views.__alloyId17244 = Ti.UI.createView({
        id: "__alloyId17244"
    });
    $.__views.__alloyId17243.add($.__views.__alloyId17244);
    $.__views.__alloyId17245 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17245"
    });
    $.__views.__alloyId17244.add($.__views.__alloyId17245);
    $.__views.__alloyId17246 = Ti.UI.createView({
        id: "__alloyId17246"
    });
    $.__views.__alloyId17246 && $.addTopLevelView($.__views.__alloyId17246);
    $.__views.__alloyId17247 = Ti.UI.createView({
        id: "__alloyId17247"
    });
    $.__views.__alloyId17246.add($.__views.__alloyId17247);
    $.__views.__alloyId17248 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17248"
    });
    $.__views.__alloyId17247.add($.__views.__alloyId17248);
    $.__views.__alloyId17249 = Ti.UI.createView({
        id: "__alloyId17249"
    });
    $.__views.__alloyId17249 && $.addTopLevelView($.__views.__alloyId17249);
    $.__views.__alloyId17250 = Ti.UI.createView({
        id: "__alloyId17250"
    });
    $.__views.__alloyId17249.add($.__views.__alloyId17250);
    $.__views.__alloyId17251 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17251"
    });
    $.__views.__alloyId17250.add($.__views.__alloyId17251);
    $.__views.__alloyId17252 = Ti.UI.createView({
        id: "__alloyId17252"
    });
    $.__views.__alloyId17252 && $.addTopLevelView($.__views.__alloyId17252);
    $.__views.__alloyId17253 = Ti.UI.createView({
        id: "__alloyId17253"
    });
    $.__views.__alloyId17252.add($.__views.__alloyId17253);
    $.__views.__alloyId17254 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17254"
    });
    $.__views.__alloyId17253.add($.__views.__alloyId17254);
    $.__views.__alloyId17255 = Ti.UI.createView({
        id: "__alloyId17255"
    });
    $.__views.__alloyId17255 && $.addTopLevelView($.__views.__alloyId17255);
    $.__views.__alloyId17256 = Ti.UI.createView({
        id: "__alloyId17256"
    });
    $.__views.__alloyId17255.add($.__views.__alloyId17256);
    $.__views.__alloyId17257 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17257"
    });
    $.__views.__alloyId17256.add($.__views.__alloyId17257);
    $.__views.__alloyId17258 = Ti.UI.createView({
        id: "__alloyId17258"
    });
    $.__views.__alloyId17258 && $.addTopLevelView($.__views.__alloyId17258);
    $.__views.__alloyId17259 = Ti.UI.createView({
        id: "__alloyId17259"
    });
    $.__views.__alloyId17258.add($.__views.__alloyId17259);
    $.__views.__alloyId17260 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17260"
    });
    $.__views.__alloyId17259.add($.__views.__alloyId17260);
    $.__views.__alloyId17261 = Ti.UI.createView({
        id: "__alloyId17261"
    });
    $.__views.__alloyId17261 && $.addTopLevelView($.__views.__alloyId17261);
    $.__views.__alloyId17262 = Ti.UI.createView({
        id: "__alloyId17262"
    });
    $.__views.__alloyId17261.add($.__views.__alloyId17262);
    $.__views.__alloyId17263 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17263"
    });
    $.__views.__alloyId17262.add($.__views.__alloyId17263);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;