function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_175";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_175 = Ti.UI.createView({
        id: "widget_175"
    });
    $.__views.widget_175 && $.addTopLevelView($.__views.widget_175);
    $.__views.__alloyId2236 = Ti.UI.createView({
        id: "__alloyId2236"
    });
    $.__views.widget_175.add($.__views.__alloyId2236);
    $.__views.__alloyId2237 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2237"
    });
    $.__views.__alloyId2236.add($.__views.__alloyId2237);
    $.__views.__alloyId2238 = Ti.UI.createView({
        id: "__alloyId2238"
    });
    $.__views.__alloyId2238 && $.addTopLevelView($.__views.__alloyId2238);
    $.__views.__alloyId2239 = Ti.UI.createView({
        id: "__alloyId2239"
    });
    $.__views.__alloyId2238.add($.__views.__alloyId2239);
    $.__views.__alloyId2240 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2240"
    });
    $.__views.__alloyId2239.add($.__views.__alloyId2240);
    $.__views.__alloyId2241 = Ti.UI.createView({
        id: "__alloyId2241"
    });
    $.__views.__alloyId2241 && $.addTopLevelView($.__views.__alloyId2241);
    $.__views.__alloyId2242 = Ti.UI.createView({
        id: "__alloyId2242"
    });
    $.__views.__alloyId2241.add($.__views.__alloyId2242);
    $.__views.__alloyId2243 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2243"
    });
    $.__views.__alloyId2242.add($.__views.__alloyId2243);
    $.__views.__alloyId2244 = Ti.UI.createView({
        id: "__alloyId2244"
    });
    $.__views.__alloyId2244 && $.addTopLevelView($.__views.__alloyId2244);
    $.__views.__alloyId2245 = Ti.UI.createView({
        id: "__alloyId2245"
    });
    $.__views.__alloyId2244.add($.__views.__alloyId2245);
    $.__views.__alloyId2246 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2246"
    });
    $.__views.__alloyId2245.add($.__views.__alloyId2246);
    $.__views.__alloyId2247 = Ti.UI.createView({
        id: "__alloyId2247"
    });
    $.__views.__alloyId2247 && $.addTopLevelView($.__views.__alloyId2247);
    $.__views.__alloyId2248 = Ti.UI.createView({
        id: "__alloyId2248"
    });
    $.__views.__alloyId2247.add($.__views.__alloyId2248);
    $.__views.__alloyId2249 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2249"
    });
    $.__views.__alloyId2248.add($.__views.__alloyId2249);
    $.__views.__alloyId2250 = Ti.UI.createView({
        id: "__alloyId2250"
    });
    $.__views.__alloyId2250 && $.addTopLevelView($.__views.__alloyId2250);
    $.__views.__alloyId2251 = Ti.UI.createView({
        id: "__alloyId2251"
    });
    $.__views.__alloyId2250.add($.__views.__alloyId2251);
    $.__views.__alloyId2252 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2252"
    });
    $.__views.__alloyId2251.add($.__views.__alloyId2252);
    $.__views.__alloyId2253 = Ti.UI.createView({
        id: "__alloyId2253"
    });
    $.__views.__alloyId2253 && $.addTopLevelView($.__views.__alloyId2253);
    $.__views.__alloyId2254 = Ti.UI.createView({
        id: "__alloyId2254"
    });
    $.__views.__alloyId2253.add($.__views.__alloyId2254);
    $.__views.__alloyId2255 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2255"
    });
    $.__views.__alloyId2254.add($.__views.__alloyId2255);
    $.__views.__alloyId2256 = Ti.UI.createView({
        id: "__alloyId2256"
    });
    $.__views.__alloyId2256 && $.addTopLevelView($.__views.__alloyId2256);
    $.__views.__alloyId2257 = Ti.UI.createView({
        id: "__alloyId2257"
    });
    $.__views.__alloyId2256.add($.__views.__alloyId2257);
    $.__views.__alloyId2258 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2258"
    });
    $.__views.__alloyId2257.add($.__views.__alloyId2258);
    $.__views.__alloyId2259 = Ti.UI.createView({
        id: "__alloyId2259"
    });
    $.__views.__alloyId2259 && $.addTopLevelView($.__views.__alloyId2259);
    $.__views.__alloyId2260 = Ti.UI.createView({
        id: "__alloyId2260"
    });
    $.__views.__alloyId2259.add($.__views.__alloyId2260);
    $.__views.__alloyId2261 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2261"
    });
    $.__views.__alloyId2260.add($.__views.__alloyId2261);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;