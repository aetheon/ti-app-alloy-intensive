function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_80";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_80 = Ti.UI.createView({
        id: "widget_80"
    });
    $.__views.widget_80 && $.addTopLevelView($.__views.widget_80);
    $.__views.__alloyId20280 = Ti.UI.createView({
        id: "__alloyId20280"
    });
    $.__views.widget_80.add($.__views.__alloyId20280);
    $.__views.__alloyId20281 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20281"
    });
    $.__views.__alloyId20280.add($.__views.__alloyId20281);
    $.__views.__alloyId20282 = Ti.UI.createView({
        id: "__alloyId20282"
    });
    $.__views.__alloyId20282 && $.addTopLevelView($.__views.__alloyId20282);
    $.__views.__alloyId20283 = Ti.UI.createView({
        id: "__alloyId20283"
    });
    $.__views.__alloyId20282.add($.__views.__alloyId20283);
    $.__views.__alloyId20284 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20284"
    });
    $.__views.__alloyId20283.add($.__views.__alloyId20284);
    $.__views.__alloyId20285 = Ti.UI.createView({
        id: "__alloyId20285"
    });
    $.__views.__alloyId20285 && $.addTopLevelView($.__views.__alloyId20285);
    $.__views.__alloyId20286 = Ti.UI.createView({
        id: "__alloyId20286"
    });
    $.__views.__alloyId20285.add($.__views.__alloyId20286);
    $.__views.__alloyId20287 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20287"
    });
    $.__views.__alloyId20286.add($.__views.__alloyId20287);
    $.__views.__alloyId20288 = Ti.UI.createView({
        id: "__alloyId20288"
    });
    $.__views.__alloyId20288 && $.addTopLevelView($.__views.__alloyId20288);
    $.__views.__alloyId20289 = Ti.UI.createView({
        id: "__alloyId20289"
    });
    $.__views.__alloyId20288.add($.__views.__alloyId20289);
    $.__views.__alloyId20290 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20290"
    });
    $.__views.__alloyId20289.add($.__views.__alloyId20290);
    $.__views.__alloyId20291 = Ti.UI.createView({
        id: "__alloyId20291"
    });
    $.__views.__alloyId20291 && $.addTopLevelView($.__views.__alloyId20291);
    $.__views.__alloyId20292 = Ti.UI.createView({
        id: "__alloyId20292"
    });
    $.__views.__alloyId20291.add($.__views.__alloyId20292);
    $.__views.__alloyId20293 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20293"
    });
    $.__views.__alloyId20292.add($.__views.__alloyId20293);
    $.__views.__alloyId20294 = Ti.UI.createView({
        id: "__alloyId20294"
    });
    $.__views.__alloyId20294 && $.addTopLevelView($.__views.__alloyId20294);
    $.__views.__alloyId20295 = Ti.UI.createView({
        id: "__alloyId20295"
    });
    $.__views.__alloyId20294.add($.__views.__alloyId20295);
    $.__views.__alloyId20296 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20296"
    });
    $.__views.__alloyId20295.add($.__views.__alloyId20296);
    $.__views.__alloyId20297 = Ti.UI.createView({
        id: "__alloyId20297"
    });
    $.__views.__alloyId20297 && $.addTopLevelView($.__views.__alloyId20297);
    $.__views.__alloyId20298 = Ti.UI.createView({
        id: "__alloyId20298"
    });
    $.__views.__alloyId20297.add($.__views.__alloyId20298);
    $.__views.__alloyId20299 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20299"
    });
    $.__views.__alloyId20298.add($.__views.__alloyId20299);
    $.__views.__alloyId20300 = Ti.UI.createView({
        id: "__alloyId20300"
    });
    $.__views.__alloyId20300 && $.addTopLevelView($.__views.__alloyId20300);
    $.__views.__alloyId20301 = Ti.UI.createView({
        id: "__alloyId20301"
    });
    $.__views.__alloyId20300.add($.__views.__alloyId20301);
    $.__views.__alloyId20302 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20302"
    });
    $.__views.__alloyId20301.add($.__views.__alloyId20302);
    $.__views.__alloyId20303 = Ti.UI.createView({
        id: "__alloyId20303"
    });
    $.__views.__alloyId20303 && $.addTopLevelView($.__views.__alloyId20303);
    $.__views.__alloyId20304 = Ti.UI.createView({
        id: "__alloyId20304"
    });
    $.__views.__alloyId20303.add($.__views.__alloyId20304);
    $.__views.__alloyId20305 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20305"
    });
    $.__views.__alloyId20304.add($.__views.__alloyId20305);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;