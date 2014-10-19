function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_42";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_42 = Ti.UI.createView({
        id: "widget_42"
    });
    $.__views.widget_42 && $.addTopLevelView($.__views.widget_42);
    $.__views.__alloyId9308 = Ti.UI.createView({
        id: "__alloyId9308"
    });
    $.__views.widget_42.add($.__views.__alloyId9308);
    $.__views.__alloyId9309 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9309"
    });
    $.__views.__alloyId9308.add($.__views.__alloyId9309);
    $.__views.__alloyId9310 = Ti.UI.createView({
        id: "__alloyId9310"
    });
    $.__views.__alloyId9310 && $.addTopLevelView($.__views.__alloyId9310);
    $.__views.__alloyId9311 = Ti.UI.createView({
        id: "__alloyId9311"
    });
    $.__views.__alloyId9310.add($.__views.__alloyId9311);
    $.__views.__alloyId9312 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9312"
    });
    $.__views.__alloyId9311.add($.__views.__alloyId9312);
    $.__views.__alloyId9313 = Ti.UI.createView({
        id: "__alloyId9313"
    });
    $.__views.__alloyId9313 && $.addTopLevelView($.__views.__alloyId9313);
    $.__views.__alloyId9314 = Ti.UI.createView({
        id: "__alloyId9314"
    });
    $.__views.__alloyId9313.add($.__views.__alloyId9314);
    $.__views.__alloyId9315 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9315"
    });
    $.__views.__alloyId9314.add($.__views.__alloyId9315);
    $.__views.__alloyId9316 = Ti.UI.createView({
        id: "__alloyId9316"
    });
    $.__views.__alloyId9316 && $.addTopLevelView($.__views.__alloyId9316);
    $.__views.__alloyId9317 = Ti.UI.createView({
        id: "__alloyId9317"
    });
    $.__views.__alloyId9316.add($.__views.__alloyId9317);
    $.__views.__alloyId9318 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9318"
    });
    $.__views.__alloyId9317.add($.__views.__alloyId9318);
    $.__views.__alloyId9319 = Ti.UI.createView({
        id: "__alloyId9319"
    });
    $.__views.__alloyId9319 && $.addTopLevelView($.__views.__alloyId9319);
    $.__views.__alloyId9320 = Ti.UI.createView({
        id: "__alloyId9320"
    });
    $.__views.__alloyId9319.add($.__views.__alloyId9320);
    $.__views.__alloyId9321 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9321"
    });
    $.__views.__alloyId9320.add($.__views.__alloyId9321);
    $.__views.__alloyId9322 = Ti.UI.createView({
        id: "__alloyId9322"
    });
    $.__views.__alloyId9322 && $.addTopLevelView($.__views.__alloyId9322);
    $.__views.__alloyId9323 = Ti.UI.createView({
        id: "__alloyId9323"
    });
    $.__views.__alloyId9322.add($.__views.__alloyId9323);
    $.__views.__alloyId9324 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9324"
    });
    $.__views.__alloyId9323.add($.__views.__alloyId9324);
    $.__views.__alloyId9325 = Ti.UI.createView({
        id: "__alloyId9325"
    });
    $.__views.__alloyId9325 && $.addTopLevelView($.__views.__alloyId9325);
    $.__views.__alloyId9326 = Ti.UI.createView({
        id: "__alloyId9326"
    });
    $.__views.__alloyId9325.add($.__views.__alloyId9326);
    $.__views.__alloyId9327 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9327"
    });
    $.__views.__alloyId9326.add($.__views.__alloyId9327);
    $.__views.__alloyId9328 = Ti.UI.createView({
        id: "__alloyId9328"
    });
    $.__views.__alloyId9328 && $.addTopLevelView($.__views.__alloyId9328);
    $.__views.__alloyId9329 = Ti.UI.createView({
        id: "__alloyId9329"
    });
    $.__views.__alloyId9328.add($.__views.__alloyId9329);
    $.__views.__alloyId9330 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9330"
    });
    $.__views.__alloyId9329.add($.__views.__alloyId9330);
    $.__views.__alloyId9331 = Ti.UI.createView({
        id: "__alloyId9331"
    });
    $.__views.__alloyId9331 && $.addTopLevelView($.__views.__alloyId9331);
    $.__views.__alloyId9332 = Ti.UI.createView({
        id: "__alloyId9332"
    });
    $.__views.__alloyId9331.add($.__views.__alloyId9332);
    $.__views.__alloyId9333 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9333"
    });
    $.__views.__alloyId9332.add($.__views.__alloyId9333);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;