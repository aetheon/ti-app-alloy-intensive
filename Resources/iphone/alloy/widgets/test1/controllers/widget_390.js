function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_390";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_390 = Ti.UI.createView({
        id: "widget_390"
    });
    $.__views.widget_390 && $.addTopLevelView($.__views.widget_390);
    $.__views.__alloyId8450 = Ti.UI.createView({
        id: "__alloyId8450"
    });
    $.__views.widget_390.add($.__views.__alloyId8450);
    $.__views.__alloyId8451 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8451"
    });
    $.__views.__alloyId8450.add($.__views.__alloyId8451);
    $.__views.__alloyId8452 = Ti.UI.createView({
        id: "__alloyId8452"
    });
    $.__views.__alloyId8452 && $.addTopLevelView($.__views.__alloyId8452);
    $.__views.__alloyId8453 = Ti.UI.createView({
        id: "__alloyId8453"
    });
    $.__views.__alloyId8452.add($.__views.__alloyId8453);
    $.__views.__alloyId8454 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8454"
    });
    $.__views.__alloyId8453.add($.__views.__alloyId8454);
    $.__views.__alloyId8455 = Ti.UI.createView({
        id: "__alloyId8455"
    });
    $.__views.__alloyId8455 && $.addTopLevelView($.__views.__alloyId8455);
    $.__views.__alloyId8456 = Ti.UI.createView({
        id: "__alloyId8456"
    });
    $.__views.__alloyId8455.add($.__views.__alloyId8456);
    $.__views.__alloyId8457 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8457"
    });
    $.__views.__alloyId8456.add($.__views.__alloyId8457);
    $.__views.__alloyId8458 = Ti.UI.createView({
        id: "__alloyId8458"
    });
    $.__views.__alloyId8458 && $.addTopLevelView($.__views.__alloyId8458);
    $.__views.__alloyId8459 = Ti.UI.createView({
        id: "__alloyId8459"
    });
    $.__views.__alloyId8458.add($.__views.__alloyId8459);
    $.__views.__alloyId8460 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8460"
    });
    $.__views.__alloyId8459.add($.__views.__alloyId8460);
    $.__views.__alloyId8461 = Ti.UI.createView({
        id: "__alloyId8461"
    });
    $.__views.__alloyId8461 && $.addTopLevelView($.__views.__alloyId8461);
    $.__views.__alloyId8462 = Ti.UI.createView({
        id: "__alloyId8462"
    });
    $.__views.__alloyId8461.add($.__views.__alloyId8462);
    $.__views.__alloyId8463 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8463"
    });
    $.__views.__alloyId8462.add($.__views.__alloyId8463);
    $.__views.__alloyId8464 = Ti.UI.createView({
        id: "__alloyId8464"
    });
    $.__views.__alloyId8464 && $.addTopLevelView($.__views.__alloyId8464);
    $.__views.__alloyId8465 = Ti.UI.createView({
        id: "__alloyId8465"
    });
    $.__views.__alloyId8464.add($.__views.__alloyId8465);
    $.__views.__alloyId8466 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8466"
    });
    $.__views.__alloyId8465.add($.__views.__alloyId8466);
    $.__views.__alloyId8467 = Ti.UI.createView({
        id: "__alloyId8467"
    });
    $.__views.__alloyId8467 && $.addTopLevelView($.__views.__alloyId8467);
    $.__views.__alloyId8468 = Ti.UI.createView({
        id: "__alloyId8468"
    });
    $.__views.__alloyId8467.add($.__views.__alloyId8468);
    $.__views.__alloyId8469 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8469"
    });
    $.__views.__alloyId8468.add($.__views.__alloyId8469);
    $.__views.__alloyId8470 = Ti.UI.createView({
        id: "__alloyId8470"
    });
    $.__views.__alloyId8470 && $.addTopLevelView($.__views.__alloyId8470);
    $.__views.__alloyId8471 = Ti.UI.createView({
        id: "__alloyId8471"
    });
    $.__views.__alloyId8470.add($.__views.__alloyId8471);
    $.__views.__alloyId8472 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8472"
    });
    $.__views.__alloyId8471.add($.__views.__alloyId8472);
    $.__views.__alloyId8473 = Ti.UI.createView({
        id: "__alloyId8473"
    });
    $.__views.__alloyId8473 && $.addTopLevelView($.__views.__alloyId8473);
    $.__views.__alloyId8474 = Ti.UI.createView({
        id: "__alloyId8474"
    });
    $.__views.__alloyId8473.add($.__views.__alloyId8474);
    $.__views.__alloyId8475 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8475"
    });
    $.__views.__alloyId8474.add($.__views.__alloyId8475);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;