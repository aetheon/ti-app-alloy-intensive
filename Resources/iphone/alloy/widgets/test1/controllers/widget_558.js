function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_558";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_558 = Ti.UI.createView({
        id: "widget_558"
    });
    $.__views.widget_558 && $.addTopLevelView($.__views.widget_558);
    $.__views.__alloyId13286 = Ti.UI.createView({
        id: "__alloyId13286"
    });
    $.__views.widget_558.add($.__views.__alloyId13286);
    $.__views.__alloyId13287 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13287"
    });
    $.__views.__alloyId13286.add($.__views.__alloyId13287);
    $.__views.__alloyId13288 = Ti.UI.createView({
        id: "__alloyId13288"
    });
    $.__views.__alloyId13288 && $.addTopLevelView($.__views.__alloyId13288);
    $.__views.__alloyId13289 = Ti.UI.createView({
        id: "__alloyId13289"
    });
    $.__views.__alloyId13288.add($.__views.__alloyId13289);
    $.__views.__alloyId13290 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13290"
    });
    $.__views.__alloyId13289.add($.__views.__alloyId13290);
    $.__views.__alloyId13291 = Ti.UI.createView({
        id: "__alloyId13291"
    });
    $.__views.__alloyId13291 && $.addTopLevelView($.__views.__alloyId13291);
    $.__views.__alloyId13292 = Ti.UI.createView({
        id: "__alloyId13292"
    });
    $.__views.__alloyId13291.add($.__views.__alloyId13292);
    $.__views.__alloyId13293 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13293"
    });
    $.__views.__alloyId13292.add($.__views.__alloyId13293);
    $.__views.__alloyId13294 = Ti.UI.createView({
        id: "__alloyId13294"
    });
    $.__views.__alloyId13294 && $.addTopLevelView($.__views.__alloyId13294);
    $.__views.__alloyId13295 = Ti.UI.createView({
        id: "__alloyId13295"
    });
    $.__views.__alloyId13294.add($.__views.__alloyId13295);
    $.__views.__alloyId13296 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13296"
    });
    $.__views.__alloyId13295.add($.__views.__alloyId13296);
    $.__views.__alloyId13297 = Ti.UI.createView({
        id: "__alloyId13297"
    });
    $.__views.__alloyId13297 && $.addTopLevelView($.__views.__alloyId13297);
    $.__views.__alloyId13298 = Ti.UI.createView({
        id: "__alloyId13298"
    });
    $.__views.__alloyId13297.add($.__views.__alloyId13298);
    $.__views.__alloyId13299 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13299"
    });
    $.__views.__alloyId13298.add($.__views.__alloyId13299);
    $.__views.__alloyId13300 = Ti.UI.createView({
        id: "__alloyId13300"
    });
    $.__views.__alloyId13300 && $.addTopLevelView($.__views.__alloyId13300);
    $.__views.__alloyId13301 = Ti.UI.createView({
        id: "__alloyId13301"
    });
    $.__views.__alloyId13300.add($.__views.__alloyId13301);
    $.__views.__alloyId13302 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13302"
    });
    $.__views.__alloyId13301.add($.__views.__alloyId13302);
    $.__views.__alloyId13303 = Ti.UI.createView({
        id: "__alloyId13303"
    });
    $.__views.__alloyId13303 && $.addTopLevelView($.__views.__alloyId13303);
    $.__views.__alloyId13304 = Ti.UI.createView({
        id: "__alloyId13304"
    });
    $.__views.__alloyId13303.add($.__views.__alloyId13304);
    $.__views.__alloyId13305 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13305"
    });
    $.__views.__alloyId13304.add($.__views.__alloyId13305);
    $.__views.__alloyId13306 = Ti.UI.createView({
        id: "__alloyId13306"
    });
    $.__views.__alloyId13306 && $.addTopLevelView($.__views.__alloyId13306);
    $.__views.__alloyId13307 = Ti.UI.createView({
        id: "__alloyId13307"
    });
    $.__views.__alloyId13306.add($.__views.__alloyId13307);
    $.__views.__alloyId13308 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13308"
    });
    $.__views.__alloyId13307.add($.__views.__alloyId13308);
    $.__views.__alloyId13309 = Ti.UI.createView({
        id: "__alloyId13309"
    });
    $.__views.__alloyId13309 && $.addTopLevelView($.__views.__alloyId13309);
    $.__views.__alloyId13310 = Ti.UI.createView({
        id: "__alloyId13310"
    });
    $.__views.__alloyId13309.add($.__views.__alloyId13310);
    $.__views.__alloyId13311 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13311"
    });
    $.__views.__alloyId13310.add($.__views.__alloyId13311);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;