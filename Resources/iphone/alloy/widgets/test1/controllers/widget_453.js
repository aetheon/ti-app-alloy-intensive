function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_453";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_453 = Ti.UI.createView({
        id: "widget_453"
    });
    $.__views.widget_453 && $.addTopLevelView($.__views.widget_453);
    $.__views.__alloyId10270 = Ti.UI.createView({
        id: "__alloyId10270"
    });
    $.__views.widget_453.add($.__views.__alloyId10270);
    $.__views.__alloyId10271 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10271"
    });
    $.__views.__alloyId10270.add($.__views.__alloyId10271);
    $.__views.__alloyId10272 = Ti.UI.createView({
        id: "__alloyId10272"
    });
    $.__views.__alloyId10272 && $.addTopLevelView($.__views.__alloyId10272);
    $.__views.__alloyId10273 = Ti.UI.createView({
        id: "__alloyId10273"
    });
    $.__views.__alloyId10272.add($.__views.__alloyId10273);
    $.__views.__alloyId10274 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10274"
    });
    $.__views.__alloyId10273.add($.__views.__alloyId10274);
    $.__views.__alloyId10275 = Ti.UI.createView({
        id: "__alloyId10275"
    });
    $.__views.__alloyId10275 && $.addTopLevelView($.__views.__alloyId10275);
    $.__views.__alloyId10276 = Ti.UI.createView({
        id: "__alloyId10276"
    });
    $.__views.__alloyId10275.add($.__views.__alloyId10276);
    $.__views.__alloyId10277 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10277"
    });
    $.__views.__alloyId10276.add($.__views.__alloyId10277);
    $.__views.__alloyId10278 = Ti.UI.createView({
        id: "__alloyId10278"
    });
    $.__views.__alloyId10278 && $.addTopLevelView($.__views.__alloyId10278);
    $.__views.__alloyId10279 = Ti.UI.createView({
        id: "__alloyId10279"
    });
    $.__views.__alloyId10278.add($.__views.__alloyId10279);
    $.__views.__alloyId10280 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10280"
    });
    $.__views.__alloyId10279.add($.__views.__alloyId10280);
    $.__views.__alloyId10281 = Ti.UI.createView({
        id: "__alloyId10281"
    });
    $.__views.__alloyId10281 && $.addTopLevelView($.__views.__alloyId10281);
    $.__views.__alloyId10282 = Ti.UI.createView({
        id: "__alloyId10282"
    });
    $.__views.__alloyId10281.add($.__views.__alloyId10282);
    $.__views.__alloyId10283 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10283"
    });
    $.__views.__alloyId10282.add($.__views.__alloyId10283);
    $.__views.__alloyId10284 = Ti.UI.createView({
        id: "__alloyId10284"
    });
    $.__views.__alloyId10284 && $.addTopLevelView($.__views.__alloyId10284);
    $.__views.__alloyId10285 = Ti.UI.createView({
        id: "__alloyId10285"
    });
    $.__views.__alloyId10284.add($.__views.__alloyId10285);
    $.__views.__alloyId10286 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10286"
    });
    $.__views.__alloyId10285.add($.__views.__alloyId10286);
    $.__views.__alloyId10287 = Ti.UI.createView({
        id: "__alloyId10287"
    });
    $.__views.__alloyId10287 && $.addTopLevelView($.__views.__alloyId10287);
    $.__views.__alloyId10288 = Ti.UI.createView({
        id: "__alloyId10288"
    });
    $.__views.__alloyId10287.add($.__views.__alloyId10288);
    $.__views.__alloyId10289 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10289"
    });
    $.__views.__alloyId10288.add($.__views.__alloyId10289);
    $.__views.__alloyId10290 = Ti.UI.createView({
        id: "__alloyId10290"
    });
    $.__views.__alloyId10290 && $.addTopLevelView($.__views.__alloyId10290);
    $.__views.__alloyId10291 = Ti.UI.createView({
        id: "__alloyId10291"
    });
    $.__views.__alloyId10290.add($.__views.__alloyId10291);
    $.__views.__alloyId10292 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10292"
    });
    $.__views.__alloyId10291.add($.__views.__alloyId10292);
    $.__views.__alloyId10293 = Ti.UI.createView({
        id: "__alloyId10293"
    });
    $.__views.__alloyId10293 && $.addTopLevelView($.__views.__alloyId10293);
    $.__views.__alloyId10294 = Ti.UI.createView({
        id: "__alloyId10294"
    });
    $.__views.__alloyId10293.add($.__views.__alloyId10294);
    $.__views.__alloyId10295 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10295"
    });
    $.__views.__alloyId10294.add($.__views.__alloyId10295);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;