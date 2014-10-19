function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_46";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_46 = Ti.UI.createView({
        id: "widget_46"
    });
    $.__views.widget_46 && $.addTopLevelView($.__views.widget_46);
    $.__views.__alloyId10452 = Ti.UI.createView({
        id: "__alloyId10452"
    });
    $.__views.widget_46.add($.__views.__alloyId10452);
    $.__views.__alloyId10453 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10453"
    });
    $.__views.__alloyId10452.add($.__views.__alloyId10453);
    $.__views.__alloyId10454 = Ti.UI.createView({
        id: "__alloyId10454"
    });
    $.__views.__alloyId10454 && $.addTopLevelView($.__views.__alloyId10454);
    $.__views.__alloyId10455 = Ti.UI.createView({
        id: "__alloyId10455"
    });
    $.__views.__alloyId10454.add($.__views.__alloyId10455);
    $.__views.__alloyId10456 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10456"
    });
    $.__views.__alloyId10455.add($.__views.__alloyId10456);
    $.__views.__alloyId10457 = Ti.UI.createView({
        id: "__alloyId10457"
    });
    $.__views.__alloyId10457 && $.addTopLevelView($.__views.__alloyId10457);
    $.__views.__alloyId10458 = Ti.UI.createView({
        id: "__alloyId10458"
    });
    $.__views.__alloyId10457.add($.__views.__alloyId10458);
    $.__views.__alloyId10459 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10459"
    });
    $.__views.__alloyId10458.add($.__views.__alloyId10459);
    $.__views.__alloyId10460 = Ti.UI.createView({
        id: "__alloyId10460"
    });
    $.__views.__alloyId10460 && $.addTopLevelView($.__views.__alloyId10460);
    $.__views.__alloyId10461 = Ti.UI.createView({
        id: "__alloyId10461"
    });
    $.__views.__alloyId10460.add($.__views.__alloyId10461);
    $.__views.__alloyId10462 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10462"
    });
    $.__views.__alloyId10461.add($.__views.__alloyId10462);
    $.__views.__alloyId10463 = Ti.UI.createView({
        id: "__alloyId10463"
    });
    $.__views.__alloyId10463 && $.addTopLevelView($.__views.__alloyId10463);
    $.__views.__alloyId10464 = Ti.UI.createView({
        id: "__alloyId10464"
    });
    $.__views.__alloyId10463.add($.__views.__alloyId10464);
    $.__views.__alloyId10465 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10465"
    });
    $.__views.__alloyId10464.add($.__views.__alloyId10465);
    $.__views.__alloyId10466 = Ti.UI.createView({
        id: "__alloyId10466"
    });
    $.__views.__alloyId10466 && $.addTopLevelView($.__views.__alloyId10466);
    $.__views.__alloyId10467 = Ti.UI.createView({
        id: "__alloyId10467"
    });
    $.__views.__alloyId10466.add($.__views.__alloyId10467);
    $.__views.__alloyId10468 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10468"
    });
    $.__views.__alloyId10467.add($.__views.__alloyId10468);
    $.__views.__alloyId10469 = Ti.UI.createView({
        id: "__alloyId10469"
    });
    $.__views.__alloyId10469 && $.addTopLevelView($.__views.__alloyId10469);
    $.__views.__alloyId10470 = Ti.UI.createView({
        id: "__alloyId10470"
    });
    $.__views.__alloyId10469.add($.__views.__alloyId10470);
    $.__views.__alloyId10471 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10471"
    });
    $.__views.__alloyId10470.add($.__views.__alloyId10471);
    $.__views.__alloyId10472 = Ti.UI.createView({
        id: "__alloyId10472"
    });
    $.__views.__alloyId10472 && $.addTopLevelView($.__views.__alloyId10472);
    $.__views.__alloyId10473 = Ti.UI.createView({
        id: "__alloyId10473"
    });
    $.__views.__alloyId10472.add($.__views.__alloyId10473);
    $.__views.__alloyId10474 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10474"
    });
    $.__views.__alloyId10473.add($.__views.__alloyId10474);
    $.__views.__alloyId10475 = Ti.UI.createView({
        id: "__alloyId10475"
    });
    $.__views.__alloyId10475 && $.addTopLevelView($.__views.__alloyId10475);
    $.__views.__alloyId10476 = Ti.UI.createView({
        id: "__alloyId10476"
    });
    $.__views.__alloyId10475.add($.__views.__alloyId10476);
    $.__views.__alloyId10477 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10477"
    });
    $.__views.__alloyId10476.add($.__views.__alloyId10477);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;