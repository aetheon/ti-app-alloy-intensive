function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_211";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_211 = Ti.UI.createView({
        id: "widget_211"
    });
    $.__views.widget_211 && $.addTopLevelView($.__views.widget_211);
    $.__views.__alloyId3302 = Ti.UI.createView({
        id: "__alloyId3302"
    });
    $.__views.widget_211.add($.__views.__alloyId3302);
    $.__views.__alloyId3303 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3303"
    });
    $.__views.__alloyId3302.add($.__views.__alloyId3303);
    $.__views.__alloyId3304 = Ti.UI.createView({
        id: "__alloyId3304"
    });
    $.__views.__alloyId3304 && $.addTopLevelView($.__views.__alloyId3304);
    $.__views.__alloyId3305 = Ti.UI.createView({
        id: "__alloyId3305"
    });
    $.__views.__alloyId3304.add($.__views.__alloyId3305);
    $.__views.__alloyId3306 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3306"
    });
    $.__views.__alloyId3305.add($.__views.__alloyId3306);
    $.__views.__alloyId3307 = Ti.UI.createView({
        id: "__alloyId3307"
    });
    $.__views.__alloyId3307 && $.addTopLevelView($.__views.__alloyId3307);
    $.__views.__alloyId3308 = Ti.UI.createView({
        id: "__alloyId3308"
    });
    $.__views.__alloyId3307.add($.__views.__alloyId3308);
    $.__views.__alloyId3309 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3309"
    });
    $.__views.__alloyId3308.add($.__views.__alloyId3309);
    $.__views.__alloyId3310 = Ti.UI.createView({
        id: "__alloyId3310"
    });
    $.__views.__alloyId3310 && $.addTopLevelView($.__views.__alloyId3310);
    $.__views.__alloyId3311 = Ti.UI.createView({
        id: "__alloyId3311"
    });
    $.__views.__alloyId3310.add($.__views.__alloyId3311);
    $.__views.__alloyId3312 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3312"
    });
    $.__views.__alloyId3311.add($.__views.__alloyId3312);
    $.__views.__alloyId3313 = Ti.UI.createView({
        id: "__alloyId3313"
    });
    $.__views.__alloyId3313 && $.addTopLevelView($.__views.__alloyId3313);
    $.__views.__alloyId3314 = Ti.UI.createView({
        id: "__alloyId3314"
    });
    $.__views.__alloyId3313.add($.__views.__alloyId3314);
    $.__views.__alloyId3315 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3315"
    });
    $.__views.__alloyId3314.add($.__views.__alloyId3315);
    $.__views.__alloyId3316 = Ti.UI.createView({
        id: "__alloyId3316"
    });
    $.__views.__alloyId3316 && $.addTopLevelView($.__views.__alloyId3316);
    $.__views.__alloyId3317 = Ti.UI.createView({
        id: "__alloyId3317"
    });
    $.__views.__alloyId3316.add($.__views.__alloyId3317);
    $.__views.__alloyId3318 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3318"
    });
    $.__views.__alloyId3317.add($.__views.__alloyId3318);
    $.__views.__alloyId3319 = Ti.UI.createView({
        id: "__alloyId3319"
    });
    $.__views.__alloyId3319 && $.addTopLevelView($.__views.__alloyId3319);
    $.__views.__alloyId3320 = Ti.UI.createView({
        id: "__alloyId3320"
    });
    $.__views.__alloyId3319.add($.__views.__alloyId3320);
    $.__views.__alloyId3321 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3321"
    });
    $.__views.__alloyId3320.add($.__views.__alloyId3321);
    $.__views.__alloyId3322 = Ti.UI.createView({
        id: "__alloyId3322"
    });
    $.__views.__alloyId3322 && $.addTopLevelView($.__views.__alloyId3322);
    $.__views.__alloyId3323 = Ti.UI.createView({
        id: "__alloyId3323"
    });
    $.__views.__alloyId3322.add($.__views.__alloyId3323);
    $.__views.__alloyId3324 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3324"
    });
    $.__views.__alloyId3323.add($.__views.__alloyId3324);
    $.__views.__alloyId3325 = Ti.UI.createView({
        id: "__alloyId3325"
    });
    $.__views.__alloyId3325 && $.addTopLevelView($.__views.__alloyId3325);
    $.__views.__alloyId3326 = Ti.UI.createView({
        id: "__alloyId3326"
    });
    $.__views.__alloyId3325.add($.__views.__alloyId3326);
    $.__views.__alloyId3327 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3327"
    });
    $.__views.__alloyId3326.add($.__views.__alloyId3327);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;