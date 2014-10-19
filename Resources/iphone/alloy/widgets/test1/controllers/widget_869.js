function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_869";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_869 = Ti.UI.createView({
        id: "widget_869"
    });
    $.__views.widget_869 && $.addTopLevelView($.__views.widget_869);
    $.__views.__alloyId22256 = Ti.UI.createView({
        id: "__alloyId22256"
    });
    $.__views.widget_869.add($.__views.__alloyId22256);
    $.__views.__alloyId22257 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22257"
    });
    $.__views.__alloyId22256.add($.__views.__alloyId22257);
    $.__views.__alloyId22258 = Ti.UI.createView({
        id: "__alloyId22258"
    });
    $.__views.__alloyId22258 && $.addTopLevelView($.__views.__alloyId22258);
    $.__views.__alloyId22259 = Ti.UI.createView({
        id: "__alloyId22259"
    });
    $.__views.__alloyId22258.add($.__views.__alloyId22259);
    $.__views.__alloyId22260 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22260"
    });
    $.__views.__alloyId22259.add($.__views.__alloyId22260);
    $.__views.__alloyId22261 = Ti.UI.createView({
        id: "__alloyId22261"
    });
    $.__views.__alloyId22261 && $.addTopLevelView($.__views.__alloyId22261);
    $.__views.__alloyId22262 = Ti.UI.createView({
        id: "__alloyId22262"
    });
    $.__views.__alloyId22261.add($.__views.__alloyId22262);
    $.__views.__alloyId22263 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22263"
    });
    $.__views.__alloyId22262.add($.__views.__alloyId22263);
    $.__views.__alloyId22264 = Ti.UI.createView({
        id: "__alloyId22264"
    });
    $.__views.__alloyId22264 && $.addTopLevelView($.__views.__alloyId22264);
    $.__views.__alloyId22265 = Ti.UI.createView({
        id: "__alloyId22265"
    });
    $.__views.__alloyId22264.add($.__views.__alloyId22265);
    $.__views.__alloyId22266 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22266"
    });
    $.__views.__alloyId22265.add($.__views.__alloyId22266);
    $.__views.__alloyId22267 = Ti.UI.createView({
        id: "__alloyId22267"
    });
    $.__views.__alloyId22267 && $.addTopLevelView($.__views.__alloyId22267);
    $.__views.__alloyId22268 = Ti.UI.createView({
        id: "__alloyId22268"
    });
    $.__views.__alloyId22267.add($.__views.__alloyId22268);
    $.__views.__alloyId22269 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22269"
    });
    $.__views.__alloyId22268.add($.__views.__alloyId22269);
    $.__views.__alloyId22270 = Ti.UI.createView({
        id: "__alloyId22270"
    });
    $.__views.__alloyId22270 && $.addTopLevelView($.__views.__alloyId22270);
    $.__views.__alloyId22271 = Ti.UI.createView({
        id: "__alloyId22271"
    });
    $.__views.__alloyId22270.add($.__views.__alloyId22271);
    $.__views.__alloyId22272 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22272"
    });
    $.__views.__alloyId22271.add($.__views.__alloyId22272);
    $.__views.__alloyId22273 = Ti.UI.createView({
        id: "__alloyId22273"
    });
    $.__views.__alloyId22273 && $.addTopLevelView($.__views.__alloyId22273);
    $.__views.__alloyId22274 = Ti.UI.createView({
        id: "__alloyId22274"
    });
    $.__views.__alloyId22273.add($.__views.__alloyId22274);
    $.__views.__alloyId22275 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22275"
    });
    $.__views.__alloyId22274.add($.__views.__alloyId22275);
    $.__views.__alloyId22276 = Ti.UI.createView({
        id: "__alloyId22276"
    });
    $.__views.__alloyId22276 && $.addTopLevelView($.__views.__alloyId22276);
    $.__views.__alloyId22277 = Ti.UI.createView({
        id: "__alloyId22277"
    });
    $.__views.__alloyId22276.add($.__views.__alloyId22277);
    $.__views.__alloyId22278 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22278"
    });
    $.__views.__alloyId22277.add($.__views.__alloyId22278);
    $.__views.__alloyId22279 = Ti.UI.createView({
        id: "__alloyId22279"
    });
    $.__views.__alloyId22279 && $.addTopLevelView($.__views.__alloyId22279);
    $.__views.__alloyId22280 = Ti.UI.createView({
        id: "__alloyId22280"
    });
    $.__views.__alloyId22279.add($.__views.__alloyId22280);
    $.__views.__alloyId22281 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22281"
    });
    $.__views.__alloyId22280.add($.__views.__alloyId22281);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;