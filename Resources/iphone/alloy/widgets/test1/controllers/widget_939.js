function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_939";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_939 = Ti.UI.createView({
        id: "widget_939"
    });
    $.__views.widget_939 && $.addTopLevelView($.__views.widget_939);
    $.__views.__alloyId24284 = Ti.UI.createView({
        id: "__alloyId24284"
    });
    $.__views.widget_939.add($.__views.__alloyId24284);
    $.__views.__alloyId24285 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24285"
    });
    $.__views.__alloyId24284.add($.__views.__alloyId24285);
    $.__views.__alloyId24286 = Ti.UI.createView({
        id: "__alloyId24286"
    });
    $.__views.__alloyId24286 && $.addTopLevelView($.__views.__alloyId24286);
    $.__views.__alloyId24287 = Ti.UI.createView({
        id: "__alloyId24287"
    });
    $.__views.__alloyId24286.add($.__views.__alloyId24287);
    $.__views.__alloyId24288 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24288"
    });
    $.__views.__alloyId24287.add($.__views.__alloyId24288);
    $.__views.__alloyId24289 = Ti.UI.createView({
        id: "__alloyId24289"
    });
    $.__views.__alloyId24289 && $.addTopLevelView($.__views.__alloyId24289);
    $.__views.__alloyId24290 = Ti.UI.createView({
        id: "__alloyId24290"
    });
    $.__views.__alloyId24289.add($.__views.__alloyId24290);
    $.__views.__alloyId24291 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24291"
    });
    $.__views.__alloyId24290.add($.__views.__alloyId24291);
    $.__views.__alloyId24292 = Ti.UI.createView({
        id: "__alloyId24292"
    });
    $.__views.__alloyId24292 && $.addTopLevelView($.__views.__alloyId24292);
    $.__views.__alloyId24293 = Ti.UI.createView({
        id: "__alloyId24293"
    });
    $.__views.__alloyId24292.add($.__views.__alloyId24293);
    $.__views.__alloyId24294 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24294"
    });
    $.__views.__alloyId24293.add($.__views.__alloyId24294);
    $.__views.__alloyId24295 = Ti.UI.createView({
        id: "__alloyId24295"
    });
    $.__views.__alloyId24295 && $.addTopLevelView($.__views.__alloyId24295);
    $.__views.__alloyId24296 = Ti.UI.createView({
        id: "__alloyId24296"
    });
    $.__views.__alloyId24295.add($.__views.__alloyId24296);
    $.__views.__alloyId24297 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24297"
    });
    $.__views.__alloyId24296.add($.__views.__alloyId24297);
    $.__views.__alloyId24298 = Ti.UI.createView({
        id: "__alloyId24298"
    });
    $.__views.__alloyId24298 && $.addTopLevelView($.__views.__alloyId24298);
    $.__views.__alloyId24299 = Ti.UI.createView({
        id: "__alloyId24299"
    });
    $.__views.__alloyId24298.add($.__views.__alloyId24299);
    $.__views.__alloyId24300 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24300"
    });
    $.__views.__alloyId24299.add($.__views.__alloyId24300);
    $.__views.__alloyId24301 = Ti.UI.createView({
        id: "__alloyId24301"
    });
    $.__views.__alloyId24301 && $.addTopLevelView($.__views.__alloyId24301);
    $.__views.__alloyId24302 = Ti.UI.createView({
        id: "__alloyId24302"
    });
    $.__views.__alloyId24301.add($.__views.__alloyId24302);
    $.__views.__alloyId24303 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24303"
    });
    $.__views.__alloyId24302.add($.__views.__alloyId24303);
    $.__views.__alloyId24304 = Ti.UI.createView({
        id: "__alloyId24304"
    });
    $.__views.__alloyId24304 && $.addTopLevelView($.__views.__alloyId24304);
    $.__views.__alloyId24305 = Ti.UI.createView({
        id: "__alloyId24305"
    });
    $.__views.__alloyId24304.add($.__views.__alloyId24305);
    $.__views.__alloyId24306 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24306"
    });
    $.__views.__alloyId24305.add($.__views.__alloyId24306);
    $.__views.__alloyId24307 = Ti.UI.createView({
        id: "__alloyId24307"
    });
    $.__views.__alloyId24307 && $.addTopLevelView($.__views.__alloyId24307);
    $.__views.__alloyId24308 = Ti.UI.createView({
        id: "__alloyId24308"
    });
    $.__views.__alloyId24307.add($.__views.__alloyId24308);
    $.__views.__alloyId24309 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24309"
    });
    $.__views.__alloyId24308.add($.__views.__alloyId24309);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;