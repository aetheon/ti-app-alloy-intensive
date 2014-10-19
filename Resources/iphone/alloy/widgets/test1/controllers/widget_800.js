function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_800";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_800 = Ti.UI.createView({
        id: "widget_800"
    });
    $.__views.widget_800 && $.addTopLevelView($.__views.widget_800);
    $.__views.__alloyId20306 = Ti.UI.createView({
        id: "__alloyId20306"
    });
    $.__views.widget_800.add($.__views.__alloyId20306);
    $.__views.__alloyId20307 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20307"
    });
    $.__views.__alloyId20306.add($.__views.__alloyId20307);
    $.__views.__alloyId20308 = Ti.UI.createView({
        id: "__alloyId20308"
    });
    $.__views.__alloyId20308 && $.addTopLevelView($.__views.__alloyId20308);
    $.__views.__alloyId20309 = Ti.UI.createView({
        id: "__alloyId20309"
    });
    $.__views.__alloyId20308.add($.__views.__alloyId20309);
    $.__views.__alloyId20310 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20310"
    });
    $.__views.__alloyId20309.add($.__views.__alloyId20310);
    $.__views.__alloyId20311 = Ti.UI.createView({
        id: "__alloyId20311"
    });
    $.__views.__alloyId20311 && $.addTopLevelView($.__views.__alloyId20311);
    $.__views.__alloyId20312 = Ti.UI.createView({
        id: "__alloyId20312"
    });
    $.__views.__alloyId20311.add($.__views.__alloyId20312);
    $.__views.__alloyId20313 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20313"
    });
    $.__views.__alloyId20312.add($.__views.__alloyId20313);
    $.__views.__alloyId20314 = Ti.UI.createView({
        id: "__alloyId20314"
    });
    $.__views.__alloyId20314 && $.addTopLevelView($.__views.__alloyId20314);
    $.__views.__alloyId20315 = Ti.UI.createView({
        id: "__alloyId20315"
    });
    $.__views.__alloyId20314.add($.__views.__alloyId20315);
    $.__views.__alloyId20316 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20316"
    });
    $.__views.__alloyId20315.add($.__views.__alloyId20316);
    $.__views.__alloyId20317 = Ti.UI.createView({
        id: "__alloyId20317"
    });
    $.__views.__alloyId20317 && $.addTopLevelView($.__views.__alloyId20317);
    $.__views.__alloyId20318 = Ti.UI.createView({
        id: "__alloyId20318"
    });
    $.__views.__alloyId20317.add($.__views.__alloyId20318);
    $.__views.__alloyId20319 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20319"
    });
    $.__views.__alloyId20318.add($.__views.__alloyId20319);
    $.__views.__alloyId20320 = Ti.UI.createView({
        id: "__alloyId20320"
    });
    $.__views.__alloyId20320 && $.addTopLevelView($.__views.__alloyId20320);
    $.__views.__alloyId20321 = Ti.UI.createView({
        id: "__alloyId20321"
    });
    $.__views.__alloyId20320.add($.__views.__alloyId20321);
    $.__views.__alloyId20322 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20322"
    });
    $.__views.__alloyId20321.add($.__views.__alloyId20322);
    $.__views.__alloyId20323 = Ti.UI.createView({
        id: "__alloyId20323"
    });
    $.__views.__alloyId20323 && $.addTopLevelView($.__views.__alloyId20323);
    $.__views.__alloyId20324 = Ti.UI.createView({
        id: "__alloyId20324"
    });
    $.__views.__alloyId20323.add($.__views.__alloyId20324);
    $.__views.__alloyId20325 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20325"
    });
    $.__views.__alloyId20324.add($.__views.__alloyId20325);
    $.__views.__alloyId20326 = Ti.UI.createView({
        id: "__alloyId20326"
    });
    $.__views.__alloyId20326 && $.addTopLevelView($.__views.__alloyId20326);
    $.__views.__alloyId20327 = Ti.UI.createView({
        id: "__alloyId20327"
    });
    $.__views.__alloyId20326.add($.__views.__alloyId20327);
    $.__views.__alloyId20328 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20328"
    });
    $.__views.__alloyId20327.add($.__views.__alloyId20328);
    $.__views.__alloyId20329 = Ti.UI.createView({
        id: "__alloyId20329"
    });
    $.__views.__alloyId20329 && $.addTopLevelView($.__views.__alloyId20329);
    $.__views.__alloyId20330 = Ti.UI.createView({
        id: "__alloyId20330"
    });
    $.__views.__alloyId20329.add($.__views.__alloyId20330);
    $.__views.__alloyId20331 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20331"
    });
    $.__views.__alloyId20330.add($.__views.__alloyId20331);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;