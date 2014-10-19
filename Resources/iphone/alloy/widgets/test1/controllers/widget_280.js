function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_280";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_280 = Ti.UI.createView({
        id: "widget_280"
    });
    $.__views.widget_280 && $.addTopLevelView($.__views.widget_280);
    $.__views.__alloyId5278 = Ti.UI.createView({
        id: "__alloyId5278"
    });
    $.__views.widget_280.add($.__views.__alloyId5278);
    $.__views.__alloyId5279 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5279"
    });
    $.__views.__alloyId5278.add($.__views.__alloyId5279);
    $.__views.__alloyId5280 = Ti.UI.createView({
        id: "__alloyId5280"
    });
    $.__views.__alloyId5280 && $.addTopLevelView($.__views.__alloyId5280);
    $.__views.__alloyId5281 = Ti.UI.createView({
        id: "__alloyId5281"
    });
    $.__views.__alloyId5280.add($.__views.__alloyId5281);
    $.__views.__alloyId5282 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5282"
    });
    $.__views.__alloyId5281.add($.__views.__alloyId5282);
    $.__views.__alloyId5283 = Ti.UI.createView({
        id: "__alloyId5283"
    });
    $.__views.__alloyId5283 && $.addTopLevelView($.__views.__alloyId5283);
    $.__views.__alloyId5284 = Ti.UI.createView({
        id: "__alloyId5284"
    });
    $.__views.__alloyId5283.add($.__views.__alloyId5284);
    $.__views.__alloyId5285 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5285"
    });
    $.__views.__alloyId5284.add($.__views.__alloyId5285);
    $.__views.__alloyId5286 = Ti.UI.createView({
        id: "__alloyId5286"
    });
    $.__views.__alloyId5286 && $.addTopLevelView($.__views.__alloyId5286);
    $.__views.__alloyId5287 = Ti.UI.createView({
        id: "__alloyId5287"
    });
    $.__views.__alloyId5286.add($.__views.__alloyId5287);
    $.__views.__alloyId5288 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5288"
    });
    $.__views.__alloyId5287.add($.__views.__alloyId5288);
    $.__views.__alloyId5289 = Ti.UI.createView({
        id: "__alloyId5289"
    });
    $.__views.__alloyId5289 && $.addTopLevelView($.__views.__alloyId5289);
    $.__views.__alloyId5290 = Ti.UI.createView({
        id: "__alloyId5290"
    });
    $.__views.__alloyId5289.add($.__views.__alloyId5290);
    $.__views.__alloyId5291 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5291"
    });
    $.__views.__alloyId5290.add($.__views.__alloyId5291);
    $.__views.__alloyId5292 = Ti.UI.createView({
        id: "__alloyId5292"
    });
    $.__views.__alloyId5292 && $.addTopLevelView($.__views.__alloyId5292);
    $.__views.__alloyId5293 = Ti.UI.createView({
        id: "__alloyId5293"
    });
    $.__views.__alloyId5292.add($.__views.__alloyId5293);
    $.__views.__alloyId5294 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5294"
    });
    $.__views.__alloyId5293.add($.__views.__alloyId5294);
    $.__views.__alloyId5295 = Ti.UI.createView({
        id: "__alloyId5295"
    });
    $.__views.__alloyId5295 && $.addTopLevelView($.__views.__alloyId5295);
    $.__views.__alloyId5296 = Ti.UI.createView({
        id: "__alloyId5296"
    });
    $.__views.__alloyId5295.add($.__views.__alloyId5296);
    $.__views.__alloyId5297 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5297"
    });
    $.__views.__alloyId5296.add($.__views.__alloyId5297);
    $.__views.__alloyId5298 = Ti.UI.createView({
        id: "__alloyId5298"
    });
    $.__views.__alloyId5298 && $.addTopLevelView($.__views.__alloyId5298);
    $.__views.__alloyId5299 = Ti.UI.createView({
        id: "__alloyId5299"
    });
    $.__views.__alloyId5298.add($.__views.__alloyId5299);
    $.__views.__alloyId5300 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5300"
    });
    $.__views.__alloyId5299.add($.__views.__alloyId5300);
    $.__views.__alloyId5301 = Ti.UI.createView({
        id: "__alloyId5301"
    });
    $.__views.__alloyId5301 && $.addTopLevelView($.__views.__alloyId5301);
    $.__views.__alloyId5302 = Ti.UI.createView({
        id: "__alloyId5302"
    });
    $.__views.__alloyId5301.add($.__views.__alloyId5302);
    $.__views.__alloyId5303 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5303"
    });
    $.__views.__alloyId5302.add($.__views.__alloyId5303);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;