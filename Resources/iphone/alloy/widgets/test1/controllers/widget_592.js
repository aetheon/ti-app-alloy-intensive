function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_592";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_592 = Ti.UI.createView({
        id: "widget_592"
    });
    $.__views.widget_592 && $.addTopLevelView($.__views.widget_592);
    $.__views.__alloyId14274 = Ti.UI.createView({
        id: "__alloyId14274"
    });
    $.__views.widget_592.add($.__views.__alloyId14274);
    $.__views.__alloyId14275 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14275"
    });
    $.__views.__alloyId14274.add($.__views.__alloyId14275);
    $.__views.__alloyId14276 = Ti.UI.createView({
        id: "__alloyId14276"
    });
    $.__views.__alloyId14276 && $.addTopLevelView($.__views.__alloyId14276);
    $.__views.__alloyId14277 = Ti.UI.createView({
        id: "__alloyId14277"
    });
    $.__views.__alloyId14276.add($.__views.__alloyId14277);
    $.__views.__alloyId14278 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14278"
    });
    $.__views.__alloyId14277.add($.__views.__alloyId14278);
    $.__views.__alloyId14279 = Ti.UI.createView({
        id: "__alloyId14279"
    });
    $.__views.__alloyId14279 && $.addTopLevelView($.__views.__alloyId14279);
    $.__views.__alloyId14280 = Ti.UI.createView({
        id: "__alloyId14280"
    });
    $.__views.__alloyId14279.add($.__views.__alloyId14280);
    $.__views.__alloyId14281 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14281"
    });
    $.__views.__alloyId14280.add($.__views.__alloyId14281);
    $.__views.__alloyId14282 = Ti.UI.createView({
        id: "__alloyId14282"
    });
    $.__views.__alloyId14282 && $.addTopLevelView($.__views.__alloyId14282);
    $.__views.__alloyId14283 = Ti.UI.createView({
        id: "__alloyId14283"
    });
    $.__views.__alloyId14282.add($.__views.__alloyId14283);
    $.__views.__alloyId14284 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14284"
    });
    $.__views.__alloyId14283.add($.__views.__alloyId14284);
    $.__views.__alloyId14285 = Ti.UI.createView({
        id: "__alloyId14285"
    });
    $.__views.__alloyId14285 && $.addTopLevelView($.__views.__alloyId14285);
    $.__views.__alloyId14286 = Ti.UI.createView({
        id: "__alloyId14286"
    });
    $.__views.__alloyId14285.add($.__views.__alloyId14286);
    $.__views.__alloyId14287 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14287"
    });
    $.__views.__alloyId14286.add($.__views.__alloyId14287);
    $.__views.__alloyId14288 = Ti.UI.createView({
        id: "__alloyId14288"
    });
    $.__views.__alloyId14288 && $.addTopLevelView($.__views.__alloyId14288);
    $.__views.__alloyId14289 = Ti.UI.createView({
        id: "__alloyId14289"
    });
    $.__views.__alloyId14288.add($.__views.__alloyId14289);
    $.__views.__alloyId14290 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14290"
    });
    $.__views.__alloyId14289.add($.__views.__alloyId14290);
    $.__views.__alloyId14291 = Ti.UI.createView({
        id: "__alloyId14291"
    });
    $.__views.__alloyId14291 && $.addTopLevelView($.__views.__alloyId14291);
    $.__views.__alloyId14292 = Ti.UI.createView({
        id: "__alloyId14292"
    });
    $.__views.__alloyId14291.add($.__views.__alloyId14292);
    $.__views.__alloyId14293 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14293"
    });
    $.__views.__alloyId14292.add($.__views.__alloyId14293);
    $.__views.__alloyId14294 = Ti.UI.createView({
        id: "__alloyId14294"
    });
    $.__views.__alloyId14294 && $.addTopLevelView($.__views.__alloyId14294);
    $.__views.__alloyId14295 = Ti.UI.createView({
        id: "__alloyId14295"
    });
    $.__views.__alloyId14294.add($.__views.__alloyId14295);
    $.__views.__alloyId14296 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14296"
    });
    $.__views.__alloyId14295.add($.__views.__alloyId14296);
    $.__views.__alloyId14297 = Ti.UI.createView({
        id: "__alloyId14297"
    });
    $.__views.__alloyId14297 && $.addTopLevelView($.__views.__alloyId14297);
    $.__views.__alloyId14298 = Ti.UI.createView({
        id: "__alloyId14298"
    });
    $.__views.__alloyId14297.add($.__views.__alloyId14298);
    $.__views.__alloyId14299 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14299"
    });
    $.__views.__alloyId14298.add($.__views.__alloyId14299);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;