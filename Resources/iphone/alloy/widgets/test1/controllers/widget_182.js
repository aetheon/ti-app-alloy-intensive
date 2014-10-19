function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_182";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_182 = Ti.UI.createView({
        id: "widget_182"
    });
    $.__views.widget_182 && $.addTopLevelView($.__views.widget_182);
    $.__views.__alloyId2444 = Ti.UI.createView({
        id: "__alloyId2444"
    });
    $.__views.widget_182.add($.__views.__alloyId2444);
    $.__views.__alloyId2445 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2445"
    });
    $.__views.__alloyId2444.add($.__views.__alloyId2445);
    $.__views.__alloyId2446 = Ti.UI.createView({
        id: "__alloyId2446"
    });
    $.__views.__alloyId2446 && $.addTopLevelView($.__views.__alloyId2446);
    $.__views.__alloyId2447 = Ti.UI.createView({
        id: "__alloyId2447"
    });
    $.__views.__alloyId2446.add($.__views.__alloyId2447);
    $.__views.__alloyId2448 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2448"
    });
    $.__views.__alloyId2447.add($.__views.__alloyId2448);
    $.__views.__alloyId2449 = Ti.UI.createView({
        id: "__alloyId2449"
    });
    $.__views.__alloyId2449 && $.addTopLevelView($.__views.__alloyId2449);
    $.__views.__alloyId2450 = Ti.UI.createView({
        id: "__alloyId2450"
    });
    $.__views.__alloyId2449.add($.__views.__alloyId2450);
    $.__views.__alloyId2451 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2451"
    });
    $.__views.__alloyId2450.add($.__views.__alloyId2451);
    $.__views.__alloyId2452 = Ti.UI.createView({
        id: "__alloyId2452"
    });
    $.__views.__alloyId2452 && $.addTopLevelView($.__views.__alloyId2452);
    $.__views.__alloyId2453 = Ti.UI.createView({
        id: "__alloyId2453"
    });
    $.__views.__alloyId2452.add($.__views.__alloyId2453);
    $.__views.__alloyId2454 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2454"
    });
    $.__views.__alloyId2453.add($.__views.__alloyId2454);
    $.__views.__alloyId2455 = Ti.UI.createView({
        id: "__alloyId2455"
    });
    $.__views.__alloyId2455 && $.addTopLevelView($.__views.__alloyId2455);
    $.__views.__alloyId2456 = Ti.UI.createView({
        id: "__alloyId2456"
    });
    $.__views.__alloyId2455.add($.__views.__alloyId2456);
    $.__views.__alloyId2457 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2457"
    });
    $.__views.__alloyId2456.add($.__views.__alloyId2457);
    $.__views.__alloyId2458 = Ti.UI.createView({
        id: "__alloyId2458"
    });
    $.__views.__alloyId2458 && $.addTopLevelView($.__views.__alloyId2458);
    $.__views.__alloyId2459 = Ti.UI.createView({
        id: "__alloyId2459"
    });
    $.__views.__alloyId2458.add($.__views.__alloyId2459);
    $.__views.__alloyId2460 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2460"
    });
    $.__views.__alloyId2459.add($.__views.__alloyId2460);
    $.__views.__alloyId2461 = Ti.UI.createView({
        id: "__alloyId2461"
    });
    $.__views.__alloyId2461 && $.addTopLevelView($.__views.__alloyId2461);
    $.__views.__alloyId2462 = Ti.UI.createView({
        id: "__alloyId2462"
    });
    $.__views.__alloyId2461.add($.__views.__alloyId2462);
    $.__views.__alloyId2463 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2463"
    });
    $.__views.__alloyId2462.add($.__views.__alloyId2463);
    $.__views.__alloyId2464 = Ti.UI.createView({
        id: "__alloyId2464"
    });
    $.__views.__alloyId2464 && $.addTopLevelView($.__views.__alloyId2464);
    $.__views.__alloyId2465 = Ti.UI.createView({
        id: "__alloyId2465"
    });
    $.__views.__alloyId2464.add($.__views.__alloyId2465);
    $.__views.__alloyId2466 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2466"
    });
    $.__views.__alloyId2465.add($.__views.__alloyId2466);
    $.__views.__alloyId2467 = Ti.UI.createView({
        id: "__alloyId2467"
    });
    $.__views.__alloyId2467 && $.addTopLevelView($.__views.__alloyId2467);
    $.__views.__alloyId2468 = Ti.UI.createView({
        id: "__alloyId2468"
    });
    $.__views.__alloyId2467.add($.__views.__alloyId2468);
    $.__views.__alloyId2469 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2469"
    });
    $.__views.__alloyId2468.add($.__views.__alloyId2469);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;