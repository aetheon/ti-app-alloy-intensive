function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_870";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_870 = Ti.UI.createView({
        id: "widget_870"
    });
    $.__views.widget_870 && $.addTopLevelView($.__views.widget_870);
    $.__views.__alloyId22308 = Ti.UI.createView({
        id: "__alloyId22308"
    });
    $.__views.widget_870.add($.__views.__alloyId22308);
    $.__views.__alloyId22309 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22309"
    });
    $.__views.__alloyId22308.add($.__views.__alloyId22309);
    $.__views.__alloyId22310 = Ti.UI.createView({
        id: "__alloyId22310"
    });
    $.__views.__alloyId22310 && $.addTopLevelView($.__views.__alloyId22310);
    $.__views.__alloyId22311 = Ti.UI.createView({
        id: "__alloyId22311"
    });
    $.__views.__alloyId22310.add($.__views.__alloyId22311);
    $.__views.__alloyId22312 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22312"
    });
    $.__views.__alloyId22311.add($.__views.__alloyId22312);
    $.__views.__alloyId22313 = Ti.UI.createView({
        id: "__alloyId22313"
    });
    $.__views.__alloyId22313 && $.addTopLevelView($.__views.__alloyId22313);
    $.__views.__alloyId22314 = Ti.UI.createView({
        id: "__alloyId22314"
    });
    $.__views.__alloyId22313.add($.__views.__alloyId22314);
    $.__views.__alloyId22315 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22315"
    });
    $.__views.__alloyId22314.add($.__views.__alloyId22315);
    $.__views.__alloyId22316 = Ti.UI.createView({
        id: "__alloyId22316"
    });
    $.__views.__alloyId22316 && $.addTopLevelView($.__views.__alloyId22316);
    $.__views.__alloyId22317 = Ti.UI.createView({
        id: "__alloyId22317"
    });
    $.__views.__alloyId22316.add($.__views.__alloyId22317);
    $.__views.__alloyId22318 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22318"
    });
    $.__views.__alloyId22317.add($.__views.__alloyId22318);
    $.__views.__alloyId22319 = Ti.UI.createView({
        id: "__alloyId22319"
    });
    $.__views.__alloyId22319 && $.addTopLevelView($.__views.__alloyId22319);
    $.__views.__alloyId22320 = Ti.UI.createView({
        id: "__alloyId22320"
    });
    $.__views.__alloyId22319.add($.__views.__alloyId22320);
    $.__views.__alloyId22321 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22321"
    });
    $.__views.__alloyId22320.add($.__views.__alloyId22321);
    $.__views.__alloyId22322 = Ti.UI.createView({
        id: "__alloyId22322"
    });
    $.__views.__alloyId22322 && $.addTopLevelView($.__views.__alloyId22322);
    $.__views.__alloyId22323 = Ti.UI.createView({
        id: "__alloyId22323"
    });
    $.__views.__alloyId22322.add($.__views.__alloyId22323);
    $.__views.__alloyId22324 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22324"
    });
    $.__views.__alloyId22323.add($.__views.__alloyId22324);
    $.__views.__alloyId22325 = Ti.UI.createView({
        id: "__alloyId22325"
    });
    $.__views.__alloyId22325 && $.addTopLevelView($.__views.__alloyId22325);
    $.__views.__alloyId22326 = Ti.UI.createView({
        id: "__alloyId22326"
    });
    $.__views.__alloyId22325.add($.__views.__alloyId22326);
    $.__views.__alloyId22327 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22327"
    });
    $.__views.__alloyId22326.add($.__views.__alloyId22327);
    $.__views.__alloyId22328 = Ti.UI.createView({
        id: "__alloyId22328"
    });
    $.__views.__alloyId22328 && $.addTopLevelView($.__views.__alloyId22328);
    $.__views.__alloyId22329 = Ti.UI.createView({
        id: "__alloyId22329"
    });
    $.__views.__alloyId22328.add($.__views.__alloyId22329);
    $.__views.__alloyId22330 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22330"
    });
    $.__views.__alloyId22329.add($.__views.__alloyId22330);
    $.__views.__alloyId22331 = Ti.UI.createView({
        id: "__alloyId22331"
    });
    $.__views.__alloyId22331 && $.addTopLevelView($.__views.__alloyId22331);
    $.__views.__alloyId22332 = Ti.UI.createView({
        id: "__alloyId22332"
    });
    $.__views.__alloyId22331.add($.__views.__alloyId22332);
    $.__views.__alloyId22333 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22333"
    });
    $.__views.__alloyId22332.add($.__views.__alloyId22333);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;