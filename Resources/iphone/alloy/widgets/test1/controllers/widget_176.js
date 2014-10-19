function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_176";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_176 = Ti.UI.createView({
        id: "widget_176"
    });
    $.__views.widget_176 && $.addTopLevelView($.__views.widget_176);
    $.__views.__alloyId2262 = Ti.UI.createView({
        id: "__alloyId2262"
    });
    $.__views.widget_176.add($.__views.__alloyId2262);
    $.__views.__alloyId2263 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2263"
    });
    $.__views.__alloyId2262.add($.__views.__alloyId2263);
    $.__views.__alloyId2264 = Ti.UI.createView({
        id: "__alloyId2264"
    });
    $.__views.__alloyId2264 && $.addTopLevelView($.__views.__alloyId2264);
    $.__views.__alloyId2265 = Ti.UI.createView({
        id: "__alloyId2265"
    });
    $.__views.__alloyId2264.add($.__views.__alloyId2265);
    $.__views.__alloyId2266 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2266"
    });
    $.__views.__alloyId2265.add($.__views.__alloyId2266);
    $.__views.__alloyId2267 = Ti.UI.createView({
        id: "__alloyId2267"
    });
    $.__views.__alloyId2267 && $.addTopLevelView($.__views.__alloyId2267);
    $.__views.__alloyId2268 = Ti.UI.createView({
        id: "__alloyId2268"
    });
    $.__views.__alloyId2267.add($.__views.__alloyId2268);
    $.__views.__alloyId2269 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2269"
    });
    $.__views.__alloyId2268.add($.__views.__alloyId2269);
    $.__views.__alloyId2270 = Ti.UI.createView({
        id: "__alloyId2270"
    });
    $.__views.__alloyId2270 && $.addTopLevelView($.__views.__alloyId2270);
    $.__views.__alloyId2271 = Ti.UI.createView({
        id: "__alloyId2271"
    });
    $.__views.__alloyId2270.add($.__views.__alloyId2271);
    $.__views.__alloyId2272 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2272"
    });
    $.__views.__alloyId2271.add($.__views.__alloyId2272);
    $.__views.__alloyId2273 = Ti.UI.createView({
        id: "__alloyId2273"
    });
    $.__views.__alloyId2273 && $.addTopLevelView($.__views.__alloyId2273);
    $.__views.__alloyId2274 = Ti.UI.createView({
        id: "__alloyId2274"
    });
    $.__views.__alloyId2273.add($.__views.__alloyId2274);
    $.__views.__alloyId2275 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2275"
    });
    $.__views.__alloyId2274.add($.__views.__alloyId2275);
    $.__views.__alloyId2276 = Ti.UI.createView({
        id: "__alloyId2276"
    });
    $.__views.__alloyId2276 && $.addTopLevelView($.__views.__alloyId2276);
    $.__views.__alloyId2277 = Ti.UI.createView({
        id: "__alloyId2277"
    });
    $.__views.__alloyId2276.add($.__views.__alloyId2277);
    $.__views.__alloyId2278 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2278"
    });
    $.__views.__alloyId2277.add($.__views.__alloyId2278);
    $.__views.__alloyId2279 = Ti.UI.createView({
        id: "__alloyId2279"
    });
    $.__views.__alloyId2279 && $.addTopLevelView($.__views.__alloyId2279);
    $.__views.__alloyId2280 = Ti.UI.createView({
        id: "__alloyId2280"
    });
    $.__views.__alloyId2279.add($.__views.__alloyId2280);
    $.__views.__alloyId2281 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2281"
    });
    $.__views.__alloyId2280.add($.__views.__alloyId2281);
    $.__views.__alloyId2282 = Ti.UI.createView({
        id: "__alloyId2282"
    });
    $.__views.__alloyId2282 && $.addTopLevelView($.__views.__alloyId2282);
    $.__views.__alloyId2283 = Ti.UI.createView({
        id: "__alloyId2283"
    });
    $.__views.__alloyId2282.add($.__views.__alloyId2283);
    $.__views.__alloyId2284 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2284"
    });
    $.__views.__alloyId2283.add($.__views.__alloyId2284);
    $.__views.__alloyId2285 = Ti.UI.createView({
        id: "__alloyId2285"
    });
    $.__views.__alloyId2285 && $.addTopLevelView($.__views.__alloyId2285);
    $.__views.__alloyId2286 = Ti.UI.createView({
        id: "__alloyId2286"
    });
    $.__views.__alloyId2285.add($.__views.__alloyId2286);
    $.__views.__alloyId2287 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2287"
    });
    $.__views.__alloyId2286.add($.__views.__alloyId2287);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;