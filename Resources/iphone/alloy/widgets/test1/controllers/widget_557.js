function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_557";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_557 = Ti.UI.createView({
        id: "widget_557"
    });
    $.__views.widget_557 && $.addTopLevelView($.__views.widget_557);
    $.__views.__alloyId13260 = Ti.UI.createView({
        id: "__alloyId13260"
    });
    $.__views.widget_557.add($.__views.__alloyId13260);
    $.__views.__alloyId13261 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13261"
    });
    $.__views.__alloyId13260.add($.__views.__alloyId13261);
    $.__views.__alloyId13262 = Ti.UI.createView({
        id: "__alloyId13262"
    });
    $.__views.__alloyId13262 && $.addTopLevelView($.__views.__alloyId13262);
    $.__views.__alloyId13263 = Ti.UI.createView({
        id: "__alloyId13263"
    });
    $.__views.__alloyId13262.add($.__views.__alloyId13263);
    $.__views.__alloyId13264 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13264"
    });
    $.__views.__alloyId13263.add($.__views.__alloyId13264);
    $.__views.__alloyId13265 = Ti.UI.createView({
        id: "__alloyId13265"
    });
    $.__views.__alloyId13265 && $.addTopLevelView($.__views.__alloyId13265);
    $.__views.__alloyId13266 = Ti.UI.createView({
        id: "__alloyId13266"
    });
    $.__views.__alloyId13265.add($.__views.__alloyId13266);
    $.__views.__alloyId13267 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13267"
    });
    $.__views.__alloyId13266.add($.__views.__alloyId13267);
    $.__views.__alloyId13268 = Ti.UI.createView({
        id: "__alloyId13268"
    });
    $.__views.__alloyId13268 && $.addTopLevelView($.__views.__alloyId13268);
    $.__views.__alloyId13269 = Ti.UI.createView({
        id: "__alloyId13269"
    });
    $.__views.__alloyId13268.add($.__views.__alloyId13269);
    $.__views.__alloyId13270 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13270"
    });
    $.__views.__alloyId13269.add($.__views.__alloyId13270);
    $.__views.__alloyId13271 = Ti.UI.createView({
        id: "__alloyId13271"
    });
    $.__views.__alloyId13271 && $.addTopLevelView($.__views.__alloyId13271);
    $.__views.__alloyId13272 = Ti.UI.createView({
        id: "__alloyId13272"
    });
    $.__views.__alloyId13271.add($.__views.__alloyId13272);
    $.__views.__alloyId13273 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13273"
    });
    $.__views.__alloyId13272.add($.__views.__alloyId13273);
    $.__views.__alloyId13274 = Ti.UI.createView({
        id: "__alloyId13274"
    });
    $.__views.__alloyId13274 && $.addTopLevelView($.__views.__alloyId13274);
    $.__views.__alloyId13275 = Ti.UI.createView({
        id: "__alloyId13275"
    });
    $.__views.__alloyId13274.add($.__views.__alloyId13275);
    $.__views.__alloyId13276 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13276"
    });
    $.__views.__alloyId13275.add($.__views.__alloyId13276);
    $.__views.__alloyId13277 = Ti.UI.createView({
        id: "__alloyId13277"
    });
    $.__views.__alloyId13277 && $.addTopLevelView($.__views.__alloyId13277);
    $.__views.__alloyId13278 = Ti.UI.createView({
        id: "__alloyId13278"
    });
    $.__views.__alloyId13277.add($.__views.__alloyId13278);
    $.__views.__alloyId13279 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13279"
    });
    $.__views.__alloyId13278.add($.__views.__alloyId13279);
    $.__views.__alloyId13280 = Ti.UI.createView({
        id: "__alloyId13280"
    });
    $.__views.__alloyId13280 && $.addTopLevelView($.__views.__alloyId13280);
    $.__views.__alloyId13281 = Ti.UI.createView({
        id: "__alloyId13281"
    });
    $.__views.__alloyId13280.add($.__views.__alloyId13281);
    $.__views.__alloyId13282 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13282"
    });
    $.__views.__alloyId13281.add($.__views.__alloyId13282);
    $.__views.__alloyId13283 = Ti.UI.createView({
        id: "__alloyId13283"
    });
    $.__views.__alloyId13283 && $.addTopLevelView($.__views.__alloyId13283);
    $.__views.__alloyId13284 = Ti.UI.createView({
        id: "__alloyId13284"
    });
    $.__views.__alloyId13283.add($.__views.__alloyId13284);
    $.__views.__alloyId13285 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13285"
    });
    $.__views.__alloyId13284.add($.__views.__alloyId13285);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;