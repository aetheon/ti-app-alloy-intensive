function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_730";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_730 = Ti.UI.createView({
        id: "widget_730"
    });
    $.__views.widget_730 && $.addTopLevelView($.__views.widget_730);
    $.__views.__alloyId18278 = Ti.UI.createView({
        id: "__alloyId18278"
    });
    $.__views.widget_730.add($.__views.__alloyId18278);
    $.__views.__alloyId18279 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18279"
    });
    $.__views.__alloyId18278.add($.__views.__alloyId18279);
    $.__views.__alloyId18280 = Ti.UI.createView({
        id: "__alloyId18280"
    });
    $.__views.__alloyId18280 && $.addTopLevelView($.__views.__alloyId18280);
    $.__views.__alloyId18281 = Ti.UI.createView({
        id: "__alloyId18281"
    });
    $.__views.__alloyId18280.add($.__views.__alloyId18281);
    $.__views.__alloyId18282 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18282"
    });
    $.__views.__alloyId18281.add($.__views.__alloyId18282);
    $.__views.__alloyId18283 = Ti.UI.createView({
        id: "__alloyId18283"
    });
    $.__views.__alloyId18283 && $.addTopLevelView($.__views.__alloyId18283);
    $.__views.__alloyId18284 = Ti.UI.createView({
        id: "__alloyId18284"
    });
    $.__views.__alloyId18283.add($.__views.__alloyId18284);
    $.__views.__alloyId18285 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18285"
    });
    $.__views.__alloyId18284.add($.__views.__alloyId18285);
    $.__views.__alloyId18286 = Ti.UI.createView({
        id: "__alloyId18286"
    });
    $.__views.__alloyId18286 && $.addTopLevelView($.__views.__alloyId18286);
    $.__views.__alloyId18287 = Ti.UI.createView({
        id: "__alloyId18287"
    });
    $.__views.__alloyId18286.add($.__views.__alloyId18287);
    $.__views.__alloyId18288 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18288"
    });
    $.__views.__alloyId18287.add($.__views.__alloyId18288);
    $.__views.__alloyId18289 = Ti.UI.createView({
        id: "__alloyId18289"
    });
    $.__views.__alloyId18289 && $.addTopLevelView($.__views.__alloyId18289);
    $.__views.__alloyId18290 = Ti.UI.createView({
        id: "__alloyId18290"
    });
    $.__views.__alloyId18289.add($.__views.__alloyId18290);
    $.__views.__alloyId18291 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18291"
    });
    $.__views.__alloyId18290.add($.__views.__alloyId18291);
    $.__views.__alloyId18292 = Ti.UI.createView({
        id: "__alloyId18292"
    });
    $.__views.__alloyId18292 && $.addTopLevelView($.__views.__alloyId18292);
    $.__views.__alloyId18293 = Ti.UI.createView({
        id: "__alloyId18293"
    });
    $.__views.__alloyId18292.add($.__views.__alloyId18293);
    $.__views.__alloyId18294 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18294"
    });
    $.__views.__alloyId18293.add($.__views.__alloyId18294);
    $.__views.__alloyId18295 = Ti.UI.createView({
        id: "__alloyId18295"
    });
    $.__views.__alloyId18295 && $.addTopLevelView($.__views.__alloyId18295);
    $.__views.__alloyId18296 = Ti.UI.createView({
        id: "__alloyId18296"
    });
    $.__views.__alloyId18295.add($.__views.__alloyId18296);
    $.__views.__alloyId18297 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18297"
    });
    $.__views.__alloyId18296.add($.__views.__alloyId18297);
    $.__views.__alloyId18298 = Ti.UI.createView({
        id: "__alloyId18298"
    });
    $.__views.__alloyId18298 && $.addTopLevelView($.__views.__alloyId18298);
    $.__views.__alloyId18299 = Ti.UI.createView({
        id: "__alloyId18299"
    });
    $.__views.__alloyId18298.add($.__views.__alloyId18299);
    $.__views.__alloyId18300 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18300"
    });
    $.__views.__alloyId18299.add($.__views.__alloyId18300);
    $.__views.__alloyId18301 = Ti.UI.createView({
        id: "__alloyId18301"
    });
    $.__views.__alloyId18301 && $.addTopLevelView($.__views.__alloyId18301);
    $.__views.__alloyId18302 = Ti.UI.createView({
        id: "__alloyId18302"
    });
    $.__views.__alloyId18301.add($.__views.__alloyId18302);
    $.__views.__alloyId18303 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18303"
    });
    $.__views.__alloyId18302.add($.__views.__alloyId18303);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;