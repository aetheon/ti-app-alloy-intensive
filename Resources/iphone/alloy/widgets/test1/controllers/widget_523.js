function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_523";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_523 = Ti.UI.createView({
        id: "widget_523"
    });
    $.__views.widget_523 && $.addTopLevelView($.__views.widget_523);
    $.__views.__alloyId12298 = Ti.UI.createView({
        id: "__alloyId12298"
    });
    $.__views.widget_523.add($.__views.__alloyId12298);
    $.__views.__alloyId12299 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12299"
    });
    $.__views.__alloyId12298.add($.__views.__alloyId12299);
    $.__views.__alloyId12300 = Ti.UI.createView({
        id: "__alloyId12300"
    });
    $.__views.__alloyId12300 && $.addTopLevelView($.__views.__alloyId12300);
    $.__views.__alloyId12301 = Ti.UI.createView({
        id: "__alloyId12301"
    });
    $.__views.__alloyId12300.add($.__views.__alloyId12301);
    $.__views.__alloyId12302 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12302"
    });
    $.__views.__alloyId12301.add($.__views.__alloyId12302);
    $.__views.__alloyId12303 = Ti.UI.createView({
        id: "__alloyId12303"
    });
    $.__views.__alloyId12303 && $.addTopLevelView($.__views.__alloyId12303);
    $.__views.__alloyId12304 = Ti.UI.createView({
        id: "__alloyId12304"
    });
    $.__views.__alloyId12303.add($.__views.__alloyId12304);
    $.__views.__alloyId12305 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12305"
    });
    $.__views.__alloyId12304.add($.__views.__alloyId12305);
    $.__views.__alloyId12306 = Ti.UI.createView({
        id: "__alloyId12306"
    });
    $.__views.__alloyId12306 && $.addTopLevelView($.__views.__alloyId12306);
    $.__views.__alloyId12307 = Ti.UI.createView({
        id: "__alloyId12307"
    });
    $.__views.__alloyId12306.add($.__views.__alloyId12307);
    $.__views.__alloyId12308 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12308"
    });
    $.__views.__alloyId12307.add($.__views.__alloyId12308);
    $.__views.__alloyId12309 = Ti.UI.createView({
        id: "__alloyId12309"
    });
    $.__views.__alloyId12309 && $.addTopLevelView($.__views.__alloyId12309);
    $.__views.__alloyId12310 = Ti.UI.createView({
        id: "__alloyId12310"
    });
    $.__views.__alloyId12309.add($.__views.__alloyId12310);
    $.__views.__alloyId12311 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12311"
    });
    $.__views.__alloyId12310.add($.__views.__alloyId12311);
    $.__views.__alloyId12312 = Ti.UI.createView({
        id: "__alloyId12312"
    });
    $.__views.__alloyId12312 && $.addTopLevelView($.__views.__alloyId12312);
    $.__views.__alloyId12313 = Ti.UI.createView({
        id: "__alloyId12313"
    });
    $.__views.__alloyId12312.add($.__views.__alloyId12313);
    $.__views.__alloyId12314 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12314"
    });
    $.__views.__alloyId12313.add($.__views.__alloyId12314);
    $.__views.__alloyId12315 = Ti.UI.createView({
        id: "__alloyId12315"
    });
    $.__views.__alloyId12315 && $.addTopLevelView($.__views.__alloyId12315);
    $.__views.__alloyId12316 = Ti.UI.createView({
        id: "__alloyId12316"
    });
    $.__views.__alloyId12315.add($.__views.__alloyId12316);
    $.__views.__alloyId12317 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12317"
    });
    $.__views.__alloyId12316.add($.__views.__alloyId12317);
    $.__views.__alloyId12318 = Ti.UI.createView({
        id: "__alloyId12318"
    });
    $.__views.__alloyId12318 && $.addTopLevelView($.__views.__alloyId12318);
    $.__views.__alloyId12319 = Ti.UI.createView({
        id: "__alloyId12319"
    });
    $.__views.__alloyId12318.add($.__views.__alloyId12319);
    $.__views.__alloyId12320 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12320"
    });
    $.__views.__alloyId12319.add($.__views.__alloyId12320);
    $.__views.__alloyId12321 = Ti.UI.createView({
        id: "__alloyId12321"
    });
    $.__views.__alloyId12321 && $.addTopLevelView($.__views.__alloyId12321);
    $.__views.__alloyId12322 = Ti.UI.createView({
        id: "__alloyId12322"
    });
    $.__views.__alloyId12321.add($.__views.__alloyId12322);
    $.__views.__alloyId12323 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12323"
    });
    $.__views.__alloyId12322.add($.__views.__alloyId12323);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;