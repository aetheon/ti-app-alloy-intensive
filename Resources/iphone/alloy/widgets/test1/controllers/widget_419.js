function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_419";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_419 = Ti.UI.createView({
        id: "widget_419"
    });
    $.__views.widget_419 && $.addTopLevelView($.__views.widget_419);
    $.__views.__alloyId9282 = Ti.UI.createView({
        id: "__alloyId9282"
    });
    $.__views.widget_419.add($.__views.__alloyId9282);
    $.__views.__alloyId9283 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9283"
    });
    $.__views.__alloyId9282.add($.__views.__alloyId9283);
    $.__views.__alloyId9284 = Ti.UI.createView({
        id: "__alloyId9284"
    });
    $.__views.__alloyId9284 && $.addTopLevelView($.__views.__alloyId9284);
    $.__views.__alloyId9285 = Ti.UI.createView({
        id: "__alloyId9285"
    });
    $.__views.__alloyId9284.add($.__views.__alloyId9285);
    $.__views.__alloyId9286 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9286"
    });
    $.__views.__alloyId9285.add($.__views.__alloyId9286);
    $.__views.__alloyId9287 = Ti.UI.createView({
        id: "__alloyId9287"
    });
    $.__views.__alloyId9287 && $.addTopLevelView($.__views.__alloyId9287);
    $.__views.__alloyId9288 = Ti.UI.createView({
        id: "__alloyId9288"
    });
    $.__views.__alloyId9287.add($.__views.__alloyId9288);
    $.__views.__alloyId9289 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9289"
    });
    $.__views.__alloyId9288.add($.__views.__alloyId9289);
    $.__views.__alloyId9290 = Ti.UI.createView({
        id: "__alloyId9290"
    });
    $.__views.__alloyId9290 && $.addTopLevelView($.__views.__alloyId9290);
    $.__views.__alloyId9291 = Ti.UI.createView({
        id: "__alloyId9291"
    });
    $.__views.__alloyId9290.add($.__views.__alloyId9291);
    $.__views.__alloyId9292 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9292"
    });
    $.__views.__alloyId9291.add($.__views.__alloyId9292);
    $.__views.__alloyId9293 = Ti.UI.createView({
        id: "__alloyId9293"
    });
    $.__views.__alloyId9293 && $.addTopLevelView($.__views.__alloyId9293);
    $.__views.__alloyId9294 = Ti.UI.createView({
        id: "__alloyId9294"
    });
    $.__views.__alloyId9293.add($.__views.__alloyId9294);
    $.__views.__alloyId9295 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9295"
    });
    $.__views.__alloyId9294.add($.__views.__alloyId9295);
    $.__views.__alloyId9296 = Ti.UI.createView({
        id: "__alloyId9296"
    });
    $.__views.__alloyId9296 && $.addTopLevelView($.__views.__alloyId9296);
    $.__views.__alloyId9297 = Ti.UI.createView({
        id: "__alloyId9297"
    });
    $.__views.__alloyId9296.add($.__views.__alloyId9297);
    $.__views.__alloyId9298 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9298"
    });
    $.__views.__alloyId9297.add($.__views.__alloyId9298);
    $.__views.__alloyId9299 = Ti.UI.createView({
        id: "__alloyId9299"
    });
    $.__views.__alloyId9299 && $.addTopLevelView($.__views.__alloyId9299);
    $.__views.__alloyId9300 = Ti.UI.createView({
        id: "__alloyId9300"
    });
    $.__views.__alloyId9299.add($.__views.__alloyId9300);
    $.__views.__alloyId9301 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9301"
    });
    $.__views.__alloyId9300.add($.__views.__alloyId9301);
    $.__views.__alloyId9302 = Ti.UI.createView({
        id: "__alloyId9302"
    });
    $.__views.__alloyId9302 && $.addTopLevelView($.__views.__alloyId9302);
    $.__views.__alloyId9303 = Ti.UI.createView({
        id: "__alloyId9303"
    });
    $.__views.__alloyId9302.add($.__views.__alloyId9303);
    $.__views.__alloyId9304 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9304"
    });
    $.__views.__alloyId9303.add($.__views.__alloyId9304);
    $.__views.__alloyId9305 = Ti.UI.createView({
        id: "__alloyId9305"
    });
    $.__views.__alloyId9305 && $.addTopLevelView($.__views.__alloyId9305);
    $.__views.__alloyId9306 = Ti.UI.createView({
        id: "__alloyId9306"
    });
    $.__views.__alloyId9305.add($.__views.__alloyId9306);
    $.__views.__alloyId9307 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9307"
    });
    $.__views.__alloyId9306.add($.__views.__alloyId9307);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;