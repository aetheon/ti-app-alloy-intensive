function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_668";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_668 = Ti.UI.createView({
        id: "widget_668"
    });
    $.__views.widget_668 && $.addTopLevelView($.__views.widget_668);
    $.__views.__alloyId16458 = Ti.UI.createView({
        id: "__alloyId16458"
    });
    $.__views.widget_668.add($.__views.__alloyId16458);
    $.__views.__alloyId16459 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16459"
    });
    $.__views.__alloyId16458.add($.__views.__alloyId16459);
    $.__views.__alloyId16460 = Ti.UI.createView({
        id: "__alloyId16460"
    });
    $.__views.__alloyId16460 && $.addTopLevelView($.__views.__alloyId16460);
    $.__views.__alloyId16461 = Ti.UI.createView({
        id: "__alloyId16461"
    });
    $.__views.__alloyId16460.add($.__views.__alloyId16461);
    $.__views.__alloyId16462 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16462"
    });
    $.__views.__alloyId16461.add($.__views.__alloyId16462);
    $.__views.__alloyId16463 = Ti.UI.createView({
        id: "__alloyId16463"
    });
    $.__views.__alloyId16463 && $.addTopLevelView($.__views.__alloyId16463);
    $.__views.__alloyId16464 = Ti.UI.createView({
        id: "__alloyId16464"
    });
    $.__views.__alloyId16463.add($.__views.__alloyId16464);
    $.__views.__alloyId16465 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16465"
    });
    $.__views.__alloyId16464.add($.__views.__alloyId16465);
    $.__views.__alloyId16466 = Ti.UI.createView({
        id: "__alloyId16466"
    });
    $.__views.__alloyId16466 && $.addTopLevelView($.__views.__alloyId16466);
    $.__views.__alloyId16467 = Ti.UI.createView({
        id: "__alloyId16467"
    });
    $.__views.__alloyId16466.add($.__views.__alloyId16467);
    $.__views.__alloyId16468 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16468"
    });
    $.__views.__alloyId16467.add($.__views.__alloyId16468);
    $.__views.__alloyId16469 = Ti.UI.createView({
        id: "__alloyId16469"
    });
    $.__views.__alloyId16469 && $.addTopLevelView($.__views.__alloyId16469);
    $.__views.__alloyId16470 = Ti.UI.createView({
        id: "__alloyId16470"
    });
    $.__views.__alloyId16469.add($.__views.__alloyId16470);
    $.__views.__alloyId16471 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16471"
    });
    $.__views.__alloyId16470.add($.__views.__alloyId16471);
    $.__views.__alloyId16472 = Ti.UI.createView({
        id: "__alloyId16472"
    });
    $.__views.__alloyId16472 && $.addTopLevelView($.__views.__alloyId16472);
    $.__views.__alloyId16473 = Ti.UI.createView({
        id: "__alloyId16473"
    });
    $.__views.__alloyId16472.add($.__views.__alloyId16473);
    $.__views.__alloyId16474 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16474"
    });
    $.__views.__alloyId16473.add($.__views.__alloyId16474);
    $.__views.__alloyId16475 = Ti.UI.createView({
        id: "__alloyId16475"
    });
    $.__views.__alloyId16475 && $.addTopLevelView($.__views.__alloyId16475);
    $.__views.__alloyId16476 = Ti.UI.createView({
        id: "__alloyId16476"
    });
    $.__views.__alloyId16475.add($.__views.__alloyId16476);
    $.__views.__alloyId16477 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16477"
    });
    $.__views.__alloyId16476.add($.__views.__alloyId16477);
    $.__views.__alloyId16478 = Ti.UI.createView({
        id: "__alloyId16478"
    });
    $.__views.__alloyId16478 && $.addTopLevelView($.__views.__alloyId16478);
    $.__views.__alloyId16479 = Ti.UI.createView({
        id: "__alloyId16479"
    });
    $.__views.__alloyId16478.add($.__views.__alloyId16479);
    $.__views.__alloyId16480 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16480"
    });
    $.__views.__alloyId16479.add($.__views.__alloyId16480);
    $.__views.__alloyId16481 = Ti.UI.createView({
        id: "__alloyId16481"
    });
    $.__views.__alloyId16481 && $.addTopLevelView($.__views.__alloyId16481);
    $.__views.__alloyId16482 = Ti.UI.createView({
        id: "__alloyId16482"
    });
    $.__views.__alloyId16481.add($.__views.__alloyId16482);
    $.__views.__alloyId16483 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16483"
    });
    $.__views.__alloyId16482.add($.__views.__alloyId16483);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;