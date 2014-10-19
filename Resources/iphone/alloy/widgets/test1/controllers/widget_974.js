function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_974";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_974 = Ti.UI.createView({
        id: "widget_974"
    });
    $.__views.widget_974 && $.addTopLevelView($.__views.widget_974);
    $.__views.__alloyId25298 = Ti.UI.createView({
        id: "__alloyId25298"
    });
    $.__views.widget_974.add($.__views.__alloyId25298);
    $.__views.__alloyId25299 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25299"
    });
    $.__views.__alloyId25298.add($.__views.__alloyId25299);
    $.__views.__alloyId25300 = Ti.UI.createView({
        id: "__alloyId25300"
    });
    $.__views.__alloyId25300 && $.addTopLevelView($.__views.__alloyId25300);
    $.__views.__alloyId25301 = Ti.UI.createView({
        id: "__alloyId25301"
    });
    $.__views.__alloyId25300.add($.__views.__alloyId25301);
    $.__views.__alloyId25302 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25302"
    });
    $.__views.__alloyId25301.add($.__views.__alloyId25302);
    $.__views.__alloyId25303 = Ti.UI.createView({
        id: "__alloyId25303"
    });
    $.__views.__alloyId25303 && $.addTopLevelView($.__views.__alloyId25303);
    $.__views.__alloyId25304 = Ti.UI.createView({
        id: "__alloyId25304"
    });
    $.__views.__alloyId25303.add($.__views.__alloyId25304);
    $.__views.__alloyId25305 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25305"
    });
    $.__views.__alloyId25304.add($.__views.__alloyId25305);
    $.__views.__alloyId25306 = Ti.UI.createView({
        id: "__alloyId25306"
    });
    $.__views.__alloyId25306 && $.addTopLevelView($.__views.__alloyId25306);
    $.__views.__alloyId25307 = Ti.UI.createView({
        id: "__alloyId25307"
    });
    $.__views.__alloyId25306.add($.__views.__alloyId25307);
    $.__views.__alloyId25308 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25308"
    });
    $.__views.__alloyId25307.add($.__views.__alloyId25308);
    $.__views.__alloyId25309 = Ti.UI.createView({
        id: "__alloyId25309"
    });
    $.__views.__alloyId25309 && $.addTopLevelView($.__views.__alloyId25309);
    $.__views.__alloyId25310 = Ti.UI.createView({
        id: "__alloyId25310"
    });
    $.__views.__alloyId25309.add($.__views.__alloyId25310);
    $.__views.__alloyId25311 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25311"
    });
    $.__views.__alloyId25310.add($.__views.__alloyId25311);
    $.__views.__alloyId25312 = Ti.UI.createView({
        id: "__alloyId25312"
    });
    $.__views.__alloyId25312 && $.addTopLevelView($.__views.__alloyId25312);
    $.__views.__alloyId25313 = Ti.UI.createView({
        id: "__alloyId25313"
    });
    $.__views.__alloyId25312.add($.__views.__alloyId25313);
    $.__views.__alloyId25314 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25314"
    });
    $.__views.__alloyId25313.add($.__views.__alloyId25314);
    $.__views.__alloyId25315 = Ti.UI.createView({
        id: "__alloyId25315"
    });
    $.__views.__alloyId25315 && $.addTopLevelView($.__views.__alloyId25315);
    $.__views.__alloyId25316 = Ti.UI.createView({
        id: "__alloyId25316"
    });
    $.__views.__alloyId25315.add($.__views.__alloyId25316);
    $.__views.__alloyId25317 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25317"
    });
    $.__views.__alloyId25316.add($.__views.__alloyId25317);
    $.__views.__alloyId25318 = Ti.UI.createView({
        id: "__alloyId25318"
    });
    $.__views.__alloyId25318 && $.addTopLevelView($.__views.__alloyId25318);
    $.__views.__alloyId25319 = Ti.UI.createView({
        id: "__alloyId25319"
    });
    $.__views.__alloyId25318.add($.__views.__alloyId25319);
    $.__views.__alloyId25320 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25320"
    });
    $.__views.__alloyId25319.add($.__views.__alloyId25320);
    $.__views.__alloyId25321 = Ti.UI.createView({
        id: "__alloyId25321"
    });
    $.__views.__alloyId25321 && $.addTopLevelView($.__views.__alloyId25321);
    $.__views.__alloyId25322 = Ti.UI.createView({
        id: "__alloyId25322"
    });
    $.__views.__alloyId25321.add($.__views.__alloyId25322);
    $.__views.__alloyId25323 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25323"
    });
    $.__views.__alloyId25322.add($.__views.__alloyId25323);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;