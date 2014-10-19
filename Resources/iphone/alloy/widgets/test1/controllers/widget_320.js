function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_320";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_320 = Ti.UI.createView({
        id: "widget_320"
    });
    $.__views.widget_320 && $.addTopLevelView($.__views.widget_320);
    $.__views.__alloyId6448 = Ti.UI.createView({
        id: "__alloyId6448"
    });
    $.__views.widget_320.add($.__views.__alloyId6448);
    $.__views.__alloyId6449 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6449"
    });
    $.__views.__alloyId6448.add($.__views.__alloyId6449);
    $.__views.__alloyId6450 = Ti.UI.createView({
        id: "__alloyId6450"
    });
    $.__views.__alloyId6450 && $.addTopLevelView($.__views.__alloyId6450);
    $.__views.__alloyId6451 = Ti.UI.createView({
        id: "__alloyId6451"
    });
    $.__views.__alloyId6450.add($.__views.__alloyId6451);
    $.__views.__alloyId6452 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6452"
    });
    $.__views.__alloyId6451.add($.__views.__alloyId6452);
    $.__views.__alloyId6453 = Ti.UI.createView({
        id: "__alloyId6453"
    });
    $.__views.__alloyId6453 && $.addTopLevelView($.__views.__alloyId6453);
    $.__views.__alloyId6454 = Ti.UI.createView({
        id: "__alloyId6454"
    });
    $.__views.__alloyId6453.add($.__views.__alloyId6454);
    $.__views.__alloyId6455 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6455"
    });
    $.__views.__alloyId6454.add($.__views.__alloyId6455);
    $.__views.__alloyId6456 = Ti.UI.createView({
        id: "__alloyId6456"
    });
    $.__views.__alloyId6456 && $.addTopLevelView($.__views.__alloyId6456);
    $.__views.__alloyId6457 = Ti.UI.createView({
        id: "__alloyId6457"
    });
    $.__views.__alloyId6456.add($.__views.__alloyId6457);
    $.__views.__alloyId6458 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6458"
    });
    $.__views.__alloyId6457.add($.__views.__alloyId6458);
    $.__views.__alloyId6459 = Ti.UI.createView({
        id: "__alloyId6459"
    });
    $.__views.__alloyId6459 && $.addTopLevelView($.__views.__alloyId6459);
    $.__views.__alloyId6460 = Ti.UI.createView({
        id: "__alloyId6460"
    });
    $.__views.__alloyId6459.add($.__views.__alloyId6460);
    $.__views.__alloyId6461 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6461"
    });
    $.__views.__alloyId6460.add($.__views.__alloyId6461);
    $.__views.__alloyId6462 = Ti.UI.createView({
        id: "__alloyId6462"
    });
    $.__views.__alloyId6462 && $.addTopLevelView($.__views.__alloyId6462);
    $.__views.__alloyId6463 = Ti.UI.createView({
        id: "__alloyId6463"
    });
    $.__views.__alloyId6462.add($.__views.__alloyId6463);
    $.__views.__alloyId6464 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6464"
    });
    $.__views.__alloyId6463.add($.__views.__alloyId6464);
    $.__views.__alloyId6465 = Ti.UI.createView({
        id: "__alloyId6465"
    });
    $.__views.__alloyId6465 && $.addTopLevelView($.__views.__alloyId6465);
    $.__views.__alloyId6466 = Ti.UI.createView({
        id: "__alloyId6466"
    });
    $.__views.__alloyId6465.add($.__views.__alloyId6466);
    $.__views.__alloyId6467 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6467"
    });
    $.__views.__alloyId6466.add($.__views.__alloyId6467);
    $.__views.__alloyId6468 = Ti.UI.createView({
        id: "__alloyId6468"
    });
    $.__views.__alloyId6468 && $.addTopLevelView($.__views.__alloyId6468);
    $.__views.__alloyId6469 = Ti.UI.createView({
        id: "__alloyId6469"
    });
    $.__views.__alloyId6468.add($.__views.__alloyId6469);
    $.__views.__alloyId6470 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6470"
    });
    $.__views.__alloyId6469.add($.__views.__alloyId6470);
    $.__views.__alloyId6471 = Ti.UI.createView({
        id: "__alloyId6471"
    });
    $.__views.__alloyId6471 && $.addTopLevelView($.__views.__alloyId6471);
    $.__views.__alloyId6472 = Ti.UI.createView({
        id: "__alloyId6472"
    });
    $.__views.__alloyId6471.add($.__views.__alloyId6472);
    $.__views.__alloyId6473 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6473"
    });
    $.__views.__alloyId6472.add($.__views.__alloyId6473);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;