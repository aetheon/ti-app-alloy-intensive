function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_489";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_489 = Ti.UI.createView({
        id: "widget_489"
    });
    $.__views.widget_489 && $.addTopLevelView($.__views.widget_489);
    $.__views.__alloyId11284 = Ti.UI.createView({
        id: "__alloyId11284"
    });
    $.__views.widget_489.add($.__views.__alloyId11284);
    $.__views.__alloyId11285 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11285"
    });
    $.__views.__alloyId11284.add($.__views.__alloyId11285);
    $.__views.__alloyId11286 = Ti.UI.createView({
        id: "__alloyId11286"
    });
    $.__views.__alloyId11286 && $.addTopLevelView($.__views.__alloyId11286);
    $.__views.__alloyId11287 = Ti.UI.createView({
        id: "__alloyId11287"
    });
    $.__views.__alloyId11286.add($.__views.__alloyId11287);
    $.__views.__alloyId11288 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11288"
    });
    $.__views.__alloyId11287.add($.__views.__alloyId11288);
    $.__views.__alloyId11289 = Ti.UI.createView({
        id: "__alloyId11289"
    });
    $.__views.__alloyId11289 && $.addTopLevelView($.__views.__alloyId11289);
    $.__views.__alloyId11290 = Ti.UI.createView({
        id: "__alloyId11290"
    });
    $.__views.__alloyId11289.add($.__views.__alloyId11290);
    $.__views.__alloyId11291 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11291"
    });
    $.__views.__alloyId11290.add($.__views.__alloyId11291);
    $.__views.__alloyId11292 = Ti.UI.createView({
        id: "__alloyId11292"
    });
    $.__views.__alloyId11292 && $.addTopLevelView($.__views.__alloyId11292);
    $.__views.__alloyId11293 = Ti.UI.createView({
        id: "__alloyId11293"
    });
    $.__views.__alloyId11292.add($.__views.__alloyId11293);
    $.__views.__alloyId11294 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11294"
    });
    $.__views.__alloyId11293.add($.__views.__alloyId11294);
    $.__views.__alloyId11295 = Ti.UI.createView({
        id: "__alloyId11295"
    });
    $.__views.__alloyId11295 && $.addTopLevelView($.__views.__alloyId11295);
    $.__views.__alloyId11296 = Ti.UI.createView({
        id: "__alloyId11296"
    });
    $.__views.__alloyId11295.add($.__views.__alloyId11296);
    $.__views.__alloyId11297 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11297"
    });
    $.__views.__alloyId11296.add($.__views.__alloyId11297);
    $.__views.__alloyId11298 = Ti.UI.createView({
        id: "__alloyId11298"
    });
    $.__views.__alloyId11298 && $.addTopLevelView($.__views.__alloyId11298);
    $.__views.__alloyId11299 = Ti.UI.createView({
        id: "__alloyId11299"
    });
    $.__views.__alloyId11298.add($.__views.__alloyId11299);
    $.__views.__alloyId11300 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11300"
    });
    $.__views.__alloyId11299.add($.__views.__alloyId11300);
    $.__views.__alloyId11301 = Ti.UI.createView({
        id: "__alloyId11301"
    });
    $.__views.__alloyId11301 && $.addTopLevelView($.__views.__alloyId11301);
    $.__views.__alloyId11302 = Ti.UI.createView({
        id: "__alloyId11302"
    });
    $.__views.__alloyId11301.add($.__views.__alloyId11302);
    $.__views.__alloyId11303 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11303"
    });
    $.__views.__alloyId11302.add($.__views.__alloyId11303);
    $.__views.__alloyId11304 = Ti.UI.createView({
        id: "__alloyId11304"
    });
    $.__views.__alloyId11304 && $.addTopLevelView($.__views.__alloyId11304);
    $.__views.__alloyId11305 = Ti.UI.createView({
        id: "__alloyId11305"
    });
    $.__views.__alloyId11304.add($.__views.__alloyId11305);
    $.__views.__alloyId11306 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11306"
    });
    $.__views.__alloyId11305.add($.__views.__alloyId11306);
    $.__views.__alloyId11307 = Ti.UI.createView({
        id: "__alloyId11307"
    });
    $.__views.__alloyId11307 && $.addTopLevelView($.__views.__alloyId11307);
    $.__views.__alloyId11308 = Ti.UI.createView({
        id: "__alloyId11308"
    });
    $.__views.__alloyId11307.add($.__views.__alloyId11308);
    $.__views.__alloyId11309 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11309"
    });
    $.__views.__alloyId11308.add($.__views.__alloyId11309);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;