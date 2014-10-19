function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_315";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_315 = Ti.UI.createView({
        id: "widget_315"
    });
    $.__views.widget_315 && $.addTopLevelView($.__views.widget_315);
    $.__views.__alloyId6292 = Ti.UI.createView({
        id: "__alloyId6292"
    });
    $.__views.widget_315.add($.__views.__alloyId6292);
    $.__views.__alloyId6293 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6293"
    });
    $.__views.__alloyId6292.add($.__views.__alloyId6293);
    $.__views.__alloyId6294 = Ti.UI.createView({
        id: "__alloyId6294"
    });
    $.__views.__alloyId6294 && $.addTopLevelView($.__views.__alloyId6294);
    $.__views.__alloyId6295 = Ti.UI.createView({
        id: "__alloyId6295"
    });
    $.__views.__alloyId6294.add($.__views.__alloyId6295);
    $.__views.__alloyId6296 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6296"
    });
    $.__views.__alloyId6295.add($.__views.__alloyId6296);
    $.__views.__alloyId6297 = Ti.UI.createView({
        id: "__alloyId6297"
    });
    $.__views.__alloyId6297 && $.addTopLevelView($.__views.__alloyId6297);
    $.__views.__alloyId6298 = Ti.UI.createView({
        id: "__alloyId6298"
    });
    $.__views.__alloyId6297.add($.__views.__alloyId6298);
    $.__views.__alloyId6299 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6299"
    });
    $.__views.__alloyId6298.add($.__views.__alloyId6299);
    $.__views.__alloyId6300 = Ti.UI.createView({
        id: "__alloyId6300"
    });
    $.__views.__alloyId6300 && $.addTopLevelView($.__views.__alloyId6300);
    $.__views.__alloyId6301 = Ti.UI.createView({
        id: "__alloyId6301"
    });
    $.__views.__alloyId6300.add($.__views.__alloyId6301);
    $.__views.__alloyId6302 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6302"
    });
    $.__views.__alloyId6301.add($.__views.__alloyId6302);
    $.__views.__alloyId6303 = Ti.UI.createView({
        id: "__alloyId6303"
    });
    $.__views.__alloyId6303 && $.addTopLevelView($.__views.__alloyId6303);
    $.__views.__alloyId6304 = Ti.UI.createView({
        id: "__alloyId6304"
    });
    $.__views.__alloyId6303.add($.__views.__alloyId6304);
    $.__views.__alloyId6305 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6305"
    });
    $.__views.__alloyId6304.add($.__views.__alloyId6305);
    $.__views.__alloyId6306 = Ti.UI.createView({
        id: "__alloyId6306"
    });
    $.__views.__alloyId6306 && $.addTopLevelView($.__views.__alloyId6306);
    $.__views.__alloyId6307 = Ti.UI.createView({
        id: "__alloyId6307"
    });
    $.__views.__alloyId6306.add($.__views.__alloyId6307);
    $.__views.__alloyId6308 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6308"
    });
    $.__views.__alloyId6307.add($.__views.__alloyId6308);
    $.__views.__alloyId6309 = Ti.UI.createView({
        id: "__alloyId6309"
    });
    $.__views.__alloyId6309 && $.addTopLevelView($.__views.__alloyId6309);
    $.__views.__alloyId6310 = Ti.UI.createView({
        id: "__alloyId6310"
    });
    $.__views.__alloyId6309.add($.__views.__alloyId6310);
    $.__views.__alloyId6311 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6311"
    });
    $.__views.__alloyId6310.add($.__views.__alloyId6311);
    $.__views.__alloyId6312 = Ti.UI.createView({
        id: "__alloyId6312"
    });
    $.__views.__alloyId6312 && $.addTopLevelView($.__views.__alloyId6312);
    $.__views.__alloyId6313 = Ti.UI.createView({
        id: "__alloyId6313"
    });
    $.__views.__alloyId6312.add($.__views.__alloyId6313);
    $.__views.__alloyId6314 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6314"
    });
    $.__views.__alloyId6313.add($.__views.__alloyId6314);
    $.__views.__alloyId6315 = Ti.UI.createView({
        id: "__alloyId6315"
    });
    $.__views.__alloyId6315 && $.addTopLevelView($.__views.__alloyId6315);
    $.__views.__alloyId6316 = Ti.UI.createView({
        id: "__alloyId6316"
    });
    $.__views.__alloyId6315.add($.__views.__alloyId6316);
    $.__views.__alloyId6317 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6317"
    });
    $.__views.__alloyId6316.add($.__views.__alloyId6317);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;