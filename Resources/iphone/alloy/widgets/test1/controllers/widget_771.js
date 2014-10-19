function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_771";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_771 = Ti.UI.createView({
        id: "widget_771"
    });
    $.__views.widget_771 && $.addTopLevelView($.__views.widget_771);
    $.__views.__alloyId19448 = Ti.UI.createView({
        id: "__alloyId19448"
    });
    $.__views.widget_771.add($.__views.__alloyId19448);
    $.__views.__alloyId19449 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19449"
    });
    $.__views.__alloyId19448.add($.__views.__alloyId19449);
    $.__views.__alloyId19450 = Ti.UI.createView({
        id: "__alloyId19450"
    });
    $.__views.__alloyId19450 && $.addTopLevelView($.__views.__alloyId19450);
    $.__views.__alloyId19451 = Ti.UI.createView({
        id: "__alloyId19451"
    });
    $.__views.__alloyId19450.add($.__views.__alloyId19451);
    $.__views.__alloyId19452 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19452"
    });
    $.__views.__alloyId19451.add($.__views.__alloyId19452);
    $.__views.__alloyId19453 = Ti.UI.createView({
        id: "__alloyId19453"
    });
    $.__views.__alloyId19453 && $.addTopLevelView($.__views.__alloyId19453);
    $.__views.__alloyId19454 = Ti.UI.createView({
        id: "__alloyId19454"
    });
    $.__views.__alloyId19453.add($.__views.__alloyId19454);
    $.__views.__alloyId19455 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19455"
    });
    $.__views.__alloyId19454.add($.__views.__alloyId19455);
    $.__views.__alloyId19456 = Ti.UI.createView({
        id: "__alloyId19456"
    });
    $.__views.__alloyId19456 && $.addTopLevelView($.__views.__alloyId19456);
    $.__views.__alloyId19457 = Ti.UI.createView({
        id: "__alloyId19457"
    });
    $.__views.__alloyId19456.add($.__views.__alloyId19457);
    $.__views.__alloyId19458 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19458"
    });
    $.__views.__alloyId19457.add($.__views.__alloyId19458);
    $.__views.__alloyId19459 = Ti.UI.createView({
        id: "__alloyId19459"
    });
    $.__views.__alloyId19459 && $.addTopLevelView($.__views.__alloyId19459);
    $.__views.__alloyId19460 = Ti.UI.createView({
        id: "__alloyId19460"
    });
    $.__views.__alloyId19459.add($.__views.__alloyId19460);
    $.__views.__alloyId19461 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19461"
    });
    $.__views.__alloyId19460.add($.__views.__alloyId19461);
    $.__views.__alloyId19462 = Ti.UI.createView({
        id: "__alloyId19462"
    });
    $.__views.__alloyId19462 && $.addTopLevelView($.__views.__alloyId19462);
    $.__views.__alloyId19463 = Ti.UI.createView({
        id: "__alloyId19463"
    });
    $.__views.__alloyId19462.add($.__views.__alloyId19463);
    $.__views.__alloyId19464 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19464"
    });
    $.__views.__alloyId19463.add($.__views.__alloyId19464);
    $.__views.__alloyId19465 = Ti.UI.createView({
        id: "__alloyId19465"
    });
    $.__views.__alloyId19465 && $.addTopLevelView($.__views.__alloyId19465);
    $.__views.__alloyId19466 = Ti.UI.createView({
        id: "__alloyId19466"
    });
    $.__views.__alloyId19465.add($.__views.__alloyId19466);
    $.__views.__alloyId19467 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19467"
    });
    $.__views.__alloyId19466.add($.__views.__alloyId19467);
    $.__views.__alloyId19468 = Ti.UI.createView({
        id: "__alloyId19468"
    });
    $.__views.__alloyId19468 && $.addTopLevelView($.__views.__alloyId19468);
    $.__views.__alloyId19469 = Ti.UI.createView({
        id: "__alloyId19469"
    });
    $.__views.__alloyId19468.add($.__views.__alloyId19469);
    $.__views.__alloyId19470 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19470"
    });
    $.__views.__alloyId19469.add($.__views.__alloyId19470);
    $.__views.__alloyId19471 = Ti.UI.createView({
        id: "__alloyId19471"
    });
    $.__views.__alloyId19471 && $.addTopLevelView($.__views.__alloyId19471);
    $.__views.__alloyId19472 = Ti.UI.createView({
        id: "__alloyId19472"
    });
    $.__views.__alloyId19471.add($.__views.__alloyId19472);
    $.__views.__alloyId19473 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19473"
    });
    $.__views.__alloyId19472.add($.__views.__alloyId19473);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;