function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_385";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_385 = Ti.UI.createView({
        id: "widget_385"
    });
    $.__views.widget_385 && $.addTopLevelView($.__views.widget_385);
    $.__views.__alloyId8294 = Ti.UI.createView({
        id: "__alloyId8294"
    });
    $.__views.widget_385.add($.__views.__alloyId8294);
    $.__views.__alloyId8295 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8295"
    });
    $.__views.__alloyId8294.add($.__views.__alloyId8295);
    $.__views.__alloyId8296 = Ti.UI.createView({
        id: "__alloyId8296"
    });
    $.__views.__alloyId8296 && $.addTopLevelView($.__views.__alloyId8296);
    $.__views.__alloyId8297 = Ti.UI.createView({
        id: "__alloyId8297"
    });
    $.__views.__alloyId8296.add($.__views.__alloyId8297);
    $.__views.__alloyId8298 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8298"
    });
    $.__views.__alloyId8297.add($.__views.__alloyId8298);
    $.__views.__alloyId8299 = Ti.UI.createView({
        id: "__alloyId8299"
    });
    $.__views.__alloyId8299 && $.addTopLevelView($.__views.__alloyId8299);
    $.__views.__alloyId8300 = Ti.UI.createView({
        id: "__alloyId8300"
    });
    $.__views.__alloyId8299.add($.__views.__alloyId8300);
    $.__views.__alloyId8301 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8301"
    });
    $.__views.__alloyId8300.add($.__views.__alloyId8301);
    $.__views.__alloyId8302 = Ti.UI.createView({
        id: "__alloyId8302"
    });
    $.__views.__alloyId8302 && $.addTopLevelView($.__views.__alloyId8302);
    $.__views.__alloyId8303 = Ti.UI.createView({
        id: "__alloyId8303"
    });
    $.__views.__alloyId8302.add($.__views.__alloyId8303);
    $.__views.__alloyId8304 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8304"
    });
    $.__views.__alloyId8303.add($.__views.__alloyId8304);
    $.__views.__alloyId8305 = Ti.UI.createView({
        id: "__alloyId8305"
    });
    $.__views.__alloyId8305 && $.addTopLevelView($.__views.__alloyId8305);
    $.__views.__alloyId8306 = Ti.UI.createView({
        id: "__alloyId8306"
    });
    $.__views.__alloyId8305.add($.__views.__alloyId8306);
    $.__views.__alloyId8307 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8307"
    });
    $.__views.__alloyId8306.add($.__views.__alloyId8307);
    $.__views.__alloyId8308 = Ti.UI.createView({
        id: "__alloyId8308"
    });
    $.__views.__alloyId8308 && $.addTopLevelView($.__views.__alloyId8308);
    $.__views.__alloyId8309 = Ti.UI.createView({
        id: "__alloyId8309"
    });
    $.__views.__alloyId8308.add($.__views.__alloyId8309);
    $.__views.__alloyId8310 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8310"
    });
    $.__views.__alloyId8309.add($.__views.__alloyId8310);
    $.__views.__alloyId8311 = Ti.UI.createView({
        id: "__alloyId8311"
    });
    $.__views.__alloyId8311 && $.addTopLevelView($.__views.__alloyId8311);
    $.__views.__alloyId8312 = Ti.UI.createView({
        id: "__alloyId8312"
    });
    $.__views.__alloyId8311.add($.__views.__alloyId8312);
    $.__views.__alloyId8313 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8313"
    });
    $.__views.__alloyId8312.add($.__views.__alloyId8313);
    $.__views.__alloyId8314 = Ti.UI.createView({
        id: "__alloyId8314"
    });
    $.__views.__alloyId8314 && $.addTopLevelView($.__views.__alloyId8314);
    $.__views.__alloyId8315 = Ti.UI.createView({
        id: "__alloyId8315"
    });
    $.__views.__alloyId8314.add($.__views.__alloyId8315);
    $.__views.__alloyId8316 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8316"
    });
    $.__views.__alloyId8315.add($.__views.__alloyId8316);
    $.__views.__alloyId8317 = Ti.UI.createView({
        id: "__alloyId8317"
    });
    $.__views.__alloyId8317 && $.addTopLevelView($.__views.__alloyId8317);
    $.__views.__alloyId8318 = Ti.UI.createView({
        id: "__alloyId8318"
    });
    $.__views.__alloyId8317.add($.__views.__alloyId8318);
    $.__views.__alloyId8319 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8319"
    });
    $.__views.__alloyId8318.add($.__views.__alloyId8319);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;