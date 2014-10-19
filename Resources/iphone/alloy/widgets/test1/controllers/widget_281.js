function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_281";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_281 = Ti.UI.createView({
        id: "widget_281"
    });
    $.__views.widget_281 && $.addTopLevelView($.__views.widget_281);
    $.__views.__alloyId5304 = Ti.UI.createView({
        id: "__alloyId5304"
    });
    $.__views.widget_281.add($.__views.__alloyId5304);
    $.__views.__alloyId5305 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5305"
    });
    $.__views.__alloyId5304.add($.__views.__alloyId5305);
    $.__views.__alloyId5306 = Ti.UI.createView({
        id: "__alloyId5306"
    });
    $.__views.__alloyId5306 && $.addTopLevelView($.__views.__alloyId5306);
    $.__views.__alloyId5307 = Ti.UI.createView({
        id: "__alloyId5307"
    });
    $.__views.__alloyId5306.add($.__views.__alloyId5307);
    $.__views.__alloyId5308 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5308"
    });
    $.__views.__alloyId5307.add($.__views.__alloyId5308);
    $.__views.__alloyId5309 = Ti.UI.createView({
        id: "__alloyId5309"
    });
    $.__views.__alloyId5309 && $.addTopLevelView($.__views.__alloyId5309);
    $.__views.__alloyId5310 = Ti.UI.createView({
        id: "__alloyId5310"
    });
    $.__views.__alloyId5309.add($.__views.__alloyId5310);
    $.__views.__alloyId5311 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5311"
    });
    $.__views.__alloyId5310.add($.__views.__alloyId5311);
    $.__views.__alloyId5312 = Ti.UI.createView({
        id: "__alloyId5312"
    });
    $.__views.__alloyId5312 && $.addTopLevelView($.__views.__alloyId5312);
    $.__views.__alloyId5313 = Ti.UI.createView({
        id: "__alloyId5313"
    });
    $.__views.__alloyId5312.add($.__views.__alloyId5313);
    $.__views.__alloyId5314 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5314"
    });
    $.__views.__alloyId5313.add($.__views.__alloyId5314);
    $.__views.__alloyId5315 = Ti.UI.createView({
        id: "__alloyId5315"
    });
    $.__views.__alloyId5315 && $.addTopLevelView($.__views.__alloyId5315);
    $.__views.__alloyId5316 = Ti.UI.createView({
        id: "__alloyId5316"
    });
    $.__views.__alloyId5315.add($.__views.__alloyId5316);
    $.__views.__alloyId5317 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5317"
    });
    $.__views.__alloyId5316.add($.__views.__alloyId5317);
    $.__views.__alloyId5318 = Ti.UI.createView({
        id: "__alloyId5318"
    });
    $.__views.__alloyId5318 && $.addTopLevelView($.__views.__alloyId5318);
    $.__views.__alloyId5319 = Ti.UI.createView({
        id: "__alloyId5319"
    });
    $.__views.__alloyId5318.add($.__views.__alloyId5319);
    $.__views.__alloyId5320 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5320"
    });
    $.__views.__alloyId5319.add($.__views.__alloyId5320);
    $.__views.__alloyId5321 = Ti.UI.createView({
        id: "__alloyId5321"
    });
    $.__views.__alloyId5321 && $.addTopLevelView($.__views.__alloyId5321);
    $.__views.__alloyId5322 = Ti.UI.createView({
        id: "__alloyId5322"
    });
    $.__views.__alloyId5321.add($.__views.__alloyId5322);
    $.__views.__alloyId5323 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5323"
    });
    $.__views.__alloyId5322.add($.__views.__alloyId5323);
    $.__views.__alloyId5324 = Ti.UI.createView({
        id: "__alloyId5324"
    });
    $.__views.__alloyId5324 && $.addTopLevelView($.__views.__alloyId5324);
    $.__views.__alloyId5325 = Ti.UI.createView({
        id: "__alloyId5325"
    });
    $.__views.__alloyId5324.add($.__views.__alloyId5325);
    $.__views.__alloyId5326 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5326"
    });
    $.__views.__alloyId5325.add($.__views.__alloyId5326);
    $.__views.__alloyId5327 = Ti.UI.createView({
        id: "__alloyId5327"
    });
    $.__views.__alloyId5327 && $.addTopLevelView($.__views.__alloyId5327);
    $.__views.__alloyId5328 = Ti.UI.createView({
        id: "__alloyId5328"
    });
    $.__views.__alloyId5327.add($.__views.__alloyId5328);
    $.__views.__alloyId5329 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5329"
    });
    $.__views.__alloyId5328.add($.__views.__alloyId5329);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;