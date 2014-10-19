function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_183";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_183 = Ti.UI.createView({
        id: "widget_183"
    });
    $.__views.widget_183 && $.addTopLevelView($.__views.widget_183);
    $.__views.__alloyId2470 = Ti.UI.createView({
        id: "__alloyId2470"
    });
    $.__views.widget_183.add($.__views.__alloyId2470);
    $.__views.__alloyId2471 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2471"
    });
    $.__views.__alloyId2470.add($.__views.__alloyId2471);
    $.__views.__alloyId2472 = Ti.UI.createView({
        id: "__alloyId2472"
    });
    $.__views.__alloyId2472 && $.addTopLevelView($.__views.__alloyId2472);
    $.__views.__alloyId2473 = Ti.UI.createView({
        id: "__alloyId2473"
    });
    $.__views.__alloyId2472.add($.__views.__alloyId2473);
    $.__views.__alloyId2474 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2474"
    });
    $.__views.__alloyId2473.add($.__views.__alloyId2474);
    $.__views.__alloyId2475 = Ti.UI.createView({
        id: "__alloyId2475"
    });
    $.__views.__alloyId2475 && $.addTopLevelView($.__views.__alloyId2475);
    $.__views.__alloyId2476 = Ti.UI.createView({
        id: "__alloyId2476"
    });
    $.__views.__alloyId2475.add($.__views.__alloyId2476);
    $.__views.__alloyId2477 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2477"
    });
    $.__views.__alloyId2476.add($.__views.__alloyId2477);
    $.__views.__alloyId2478 = Ti.UI.createView({
        id: "__alloyId2478"
    });
    $.__views.__alloyId2478 && $.addTopLevelView($.__views.__alloyId2478);
    $.__views.__alloyId2479 = Ti.UI.createView({
        id: "__alloyId2479"
    });
    $.__views.__alloyId2478.add($.__views.__alloyId2479);
    $.__views.__alloyId2480 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2480"
    });
    $.__views.__alloyId2479.add($.__views.__alloyId2480);
    $.__views.__alloyId2481 = Ti.UI.createView({
        id: "__alloyId2481"
    });
    $.__views.__alloyId2481 && $.addTopLevelView($.__views.__alloyId2481);
    $.__views.__alloyId2482 = Ti.UI.createView({
        id: "__alloyId2482"
    });
    $.__views.__alloyId2481.add($.__views.__alloyId2482);
    $.__views.__alloyId2483 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2483"
    });
    $.__views.__alloyId2482.add($.__views.__alloyId2483);
    $.__views.__alloyId2484 = Ti.UI.createView({
        id: "__alloyId2484"
    });
    $.__views.__alloyId2484 && $.addTopLevelView($.__views.__alloyId2484);
    $.__views.__alloyId2485 = Ti.UI.createView({
        id: "__alloyId2485"
    });
    $.__views.__alloyId2484.add($.__views.__alloyId2485);
    $.__views.__alloyId2486 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2486"
    });
    $.__views.__alloyId2485.add($.__views.__alloyId2486);
    $.__views.__alloyId2487 = Ti.UI.createView({
        id: "__alloyId2487"
    });
    $.__views.__alloyId2487 && $.addTopLevelView($.__views.__alloyId2487);
    $.__views.__alloyId2488 = Ti.UI.createView({
        id: "__alloyId2488"
    });
    $.__views.__alloyId2487.add($.__views.__alloyId2488);
    $.__views.__alloyId2489 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2489"
    });
    $.__views.__alloyId2488.add($.__views.__alloyId2489);
    $.__views.__alloyId2490 = Ti.UI.createView({
        id: "__alloyId2490"
    });
    $.__views.__alloyId2490 && $.addTopLevelView($.__views.__alloyId2490);
    $.__views.__alloyId2491 = Ti.UI.createView({
        id: "__alloyId2491"
    });
    $.__views.__alloyId2490.add($.__views.__alloyId2491);
    $.__views.__alloyId2492 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2492"
    });
    $.__views.__alloyId2491.add($.__views.__alloyId2492);
    $.__views.__alloyId2493 = Ti.UI.createView({
        id: "__alloyId2493"
    });
    $.__views.__alloyId2493 && $.addTopLevelView($.__views.__alloyId2493);
    $.__views.__alloyId2494 = Ti.UI.createView({
        id: "__alloyId2494"
    });
    $.__views.__alloyId2493.add($.__views.__alloyId2494);
    $.__views.__alloyId2495 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2495"
    });
    $.__views.__alloyId2494.add($.__views.__alloyId2495);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;