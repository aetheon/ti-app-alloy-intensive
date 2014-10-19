function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_210";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_210 = Ti.UI.createView({
        id: "widget_210"
    });
    $.__views.widget_210 && $.addTopLevelView($.__views.widget_210);
    $.__views.__alloyId3276 = Ti.UI.createView({
        id: "__alloyId3276"
    });
    $.__views.widget_210.add($.__views.__alloyId3276);
    $.__views.__alloyId3277 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3277"
    });
    $.__views.__alloyId3276.add($.__views.__alloyId3277);
    $.__views.__alloyId3278 = Ti.UI.createView({
        id: "__alloyId3278"
    });
    $.__views.__alloyId3278 && $.addTopLevelView($.__views.__alloyId3278);
    $.__views.__alloyId3279 = Ti.UI.createView({
        id: "__alloyId3279"
    });
    $.__views.__alloyId3278.add($.__views.__alloyId3279);
    $.__views.__alloyId3280 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3280"
    });
    $.__views.__alloyId3279.add($.__views.__alloyId3280);
    $.__views.__alloyId3281 = Ti.UI.createView({
        id: "__alloyId3281"
    });
    $.__views.__alloyId3281 && $.addTopLevelView($.__views.__alloyId3281);
    $.__views.__alloyId3282 = Ti.UI.createView({
        id: "__alloyId3282"
    });
    $.__views.__alloyId3281.add($.__views.__alloyId3282);
    $.__views.__alloyId3283 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3283"
    });
    $.__views.__alloyId3282.add($.__views.__alloyId3283);
    $.__views.__alloyId3284 = Ti.UI.createView({
        id: "__alloyId3284"
    });
    $.__views.__alloyId3284 && $.addTopLevelView($.__views.__alloyId3284);
    $.__views.__alloyId3285 = Ti.UI.createView({
        id: "__alloyId3285"
    });
    $.__views.__alloyId3284.add($.__views.__alloyId3285);
    $.__views.__alloyId3286 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3286"
    });
    $.__views.__alloyId3285.add($.__views.__alloyId3286);
    $.__views.__alloyId3287 = Ti.UI.createView({
        id: "__alloyId3287"
    });
    $.__views.__alloyId3287 && $.addTopLevelView($.__views.__alloyId3287);
    $.__views.__alloyId3288 = Ti.UI.createView({
        id: "__alloyId3288"
    });
    $.__views.__alloyId3287.add($.__views.__alloyId3288);
    $.__views.__alloyId3289 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3289"
    });
    $.__views.__alloyId3288.add($.__views.__alloyId3289);
    $.__views.__alloyId3290 = Ti.UI.createView({
        id: "__alloyId3290"
    });
    $.__views.__alloyId3290 && $.addTopLevelView($.__views.__alloyId3290);
    $.__views.__alloyId3291 = Ti.UI.createView({
        id: "__alloyId3291"
    });
    $.__views.__alloyId3290.add($.__views.__alloyId3291);
    $.__views.__alloyId3292 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3292"
    });
    $.__views.__alloyId3291.add($.__views.__alloyId3292);
    $.__views.__alloyId3293 = Ti.UI.createView({
        id: "__alloyId3293"
    });
    $.__views.__alloyId3293 && $.addTopLevelView($.__views.__alloyId3293);
    $.__views.__alloyId3294 = Ti.UI.createView({
        id: "__alloyId3294"
    });
    $.__views.__alloyId3293.add($.__views.__alloyId3294);
    $.__views.__alloyId3295 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3295"
    });
    $.__views.__alloyId3294.add($.__views.__alloyId3295);
    $.__views.__alloyId3296 = Ti.UI.createView({
        id: "__alloyId3296"
    });
    $.__views.__alloyId3296 && $.addTopLevelView($.__views.__alloyId3296);
    $.__views.__alloyId3297 = Ti.UI.createView({
        id: "__alloyId3297"
    });
    $.__views.__alloyId3296.add($.__views.__alloyId3297);
    $.__views.__alloyId3298 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3298"
    });
    $.__views.__alloyId3297.add($.__views.__alloyId3298);
    $.__views.__alloyId3299 = Ti.UI.createView({
        id: "__alloyId3299"
    });
    $.__views.__alloyId3299 && $.addTopLevelView($.__views.__alloyId3299);
    $.__views.__alloyId3300 = Ti.UI.createView({
        id: "__alloyId3300"
    });
    $.__views.__alloyId3299.add($.__views.__alloyId3300);
    $.__views.__alloyId3301 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3301"
    });
    $.__views.__alloyId3300.add($.__views.__alloyId3301);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;