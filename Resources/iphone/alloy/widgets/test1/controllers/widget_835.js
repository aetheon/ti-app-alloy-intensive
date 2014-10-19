function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_835";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_835 = Ti.UI.createView({
        id: "widget_835"
    });
    $.__views.widget_835 && $.addTopLevelView($.__views.widget_835);
    $.__views.__alloyId21294 = Ti.UI.createView({
        id: "__alloyId21294"
    });
    $.__views.widget_835.add($.__views.__alloyId21294);
    $.__views.__alloyId21295 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21295"
    });
    $.__views.__alloyId21294.add($.__views.__alloyId21295);
    $.__views.__alloyId21296 = Ti.UI.createView({
        id: "__alloyId21296"
    });
    $.__views.__alloyId21296 && $.addTopLevelView($.__views.__alloyId21296);
    $.__views.__alloyId21297 = Ti.UI.createView({
        id: "__alloyId21297"
    });
    $.__views.__alloyId21296.add($.__views.__alloyId21297);
    $.__views.__alloyId21298 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21298"
    });
    $.__views.__alloyId21297.add($.__views.__alloyId21298);
    $.__views.__alloyId21299 = Ti.UI.createView({
        id: "__alloyId21299"
    });
    $.__views.__alloyId21299 && $.addTopLevelView($.__views.__alloyId21299);
    $.__views.__alloyId21300 = Ti.UI.createView({
        id: "__alloyId21300"
    });
    $.__views.__alloyId21299.add($.__views.__alloyId21300);
    $.__views.__alloyId21301 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21301"
    });
    $.__views.__alloyId21300.add($.__views.__alloyId21301);
    $.__views.__alloyId21302 = Ti.UI.createView({
        id: "__alloyId21302"
    });
    $.__views.__alloyId21302 && $.addTopLevelView($.__views.__alloyId21302);
    $.__views.__alloyId21303 = Ti.UI.createView({
        id: "__alloyId21303"
    });
    $.__views.__alloyId21302.add($.__views.__alloyId21303);
    $.__views.__alloyId21304 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21304"
    });
    $.__views.__alloyId21303.add($.__views.__alloyId21304);
    $.__views.__alloyId21305 = Ti.UI.createView({
        id: "__alloyId21305"
    });
    $.__views.__alloyId21305 && $.addTopLevelView($.__views.__alloyId21305);
    $.__views.__alloyId21306 = Ti.UI.createView({
        id: "__alloyId21306"
    });
    $.__views.__alloyId21305.add($.__views.__alloyId21306);
    $.__views.__alloyId21307 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21307"
    });
    $.__views.__alloyId21306.add($.__views.__alloyId21307);
    $.__views.__alloyId21308 = Ti.UI.createView({
        id: "__alloyId21308"
    });
    $.__views.__alloyId21308 && $.addTopLevelView($.__views.__alloyId21308);
    $.__views.__alloyId21309 = Ti.UI.createView({
        id: "__alloyId21309"
    });
    $.__views.__alloyId21308.add($.__views.__alloyId21309);
    $.__views.__alloyId21310 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21310"
    });
    $.__views.__alloyId21309.add($.__views.__alloyId21310);
    $.__views.__alloyId21311 = Ti.UI.createView({
        id: "__alloyId21311"
    });
    $.__views.__alloyId21311 && $.addTopLevelView($.__views.__alloyId21311);
    $.__views.__alloyId21312 = Ti.UI.createView({
        id: "__alloyId21312"
    });
    $.__views.__alloyId21311.add($.__views.__alloyId21312);
    $.__views.__alloyId21313 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21313"
    });
    $.__views.__alloyId21312.add($.__views.__alloyId21313);
    $.__views.__alloyId21314 = Ti.UI.createView({
        id: "__alloyId21314"
    });
    $.__views.__alloyId21314 && $.addTopLevelView($.__views.__alloyId21314);
    $.__views.__alloyId21315 = Ti.UI.createView({
        id: "__alloyId21315"
    });
    $.__views.__alloyId21314.add($.__views.__alloyId21315);
    $.__views.__alloyId21316 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21316"
    });
    $.__views.__alloyId21315.add($.__views.__alloyId21316);
    $.__views.__alloyId21317 = Ti.UI.createView({
        id: "__alloyId21317"
    });
    $.__views.__alloyId21317 && $.addTopLevelView($.__views.__alloyId21317);
    $.__views.__alloyId21318 = Ti.UI.createView({
        id: "__alloyId21318"
    });
    $.__views.__alloyId21317.add($.__views.__alloyId21318);
    $.__views.__alloyId21319 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21319"
    });
    $.__views.__alloyId21318.add($.__views.__alloyId21319);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;