function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_425";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_425 = Ti.UI.createView({
        id: "widget_425"
    });
    $.__views.widget_425 && $.addTopLevelView($.__views.widget_425);
    $.__views.__alloyId9464 = Ti.UI.createView({
        id: "__alloyId9464"
    });
    $.__views.widget_425.add($.__views.__alloyId9464);
    $.__views.__alloyId9465 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9465"
    });
    $.__views.__alloyId9464.add($.__views.__alloyId9465);
    $.__views.__alloyId9466 = Ti.UI.createView({
        id: "__alloyId9466"
    });
    $.__views.__alloyId9466 && $.addTopLevelView($.__views.__alloyId9466);
    $.__views.__alloyId9467 = Ti.UI.createView({
        id: "__alloyId9467"
    });
    $.__views.__alloyId9466.add($.__views.__alloyId9467);
    $.__views.__alloyId9468 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9468"
    });
    $.__views.__alloyId9467.add($.__views.__alloyId9468);
    $.__views.__alloyId9469 = Ti.UI.createView({
        id: "__alloyId9469"
    });
    $.__views.__alloyId9469 && $.addTopLevelView($.__views.__alloyId9469);
    $.__views.__alloyId9470 = Ti.UI.createView({
        id: "__alloyId9470"
    });
    $.__views.__alloyId9469.add($.__views.__alloyId9470);
    $.__views.__alloyId9471 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9471"
    });
    $.__views.__alloyId9470.add($.__views.__alloyId9471);
    $.__views.__alloyId9472 = Ti.UI.createView({
        id: "__alloyId9472"
    });
    $.__views.__alloyId9472 && $.addTopLevelView($.__views.__alloyId9472);
    $.__views.__alloyId9473 = Ti.UI.createView({
        id: "__alloyId9473"
    });
    $.__views.__alloyId9472.add($.__views.__alloyId9473);
    $.__views.__alloyId9474 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9474"
    });
    $.__views.__alloyId9473.add($.__views.__alloyId9474);
    $.__views.__alloyId9475 = Ti.UI.createView({
        id: "__alloyId9475"
    });
    $.__views.__alloyId9475 && $.addTopLevelView($.__views.__alloyId9475);
    $.__views.__alloyId9476 = Ti.UI.createView({
        id: "__alloyId9476"
    });
    $.__views.__alloyId9475.add($.__views.__alloyId9476);
    $.__views.__alloyId9477 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9477"
    });
    $.__views.__alloyId9476.add($.__views.__alloyId9477);
    $.__views.__alloyId9478 = Ti.UI.createView({
        id: "__alloyId9478"
    });
    $.__views.__alloyId9478 && $.addTopLevelView($.__views.__alloyId9478);
    $.__views.__alloyId9479 = Ti.UI.createView({
        id: "__alloyId9479"
    });
    $.__views.__alloyId9478.add($.__views.__alloyId9479);
    $.__views.__alloyId9480 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9480"
    });
    $.__views.__alloyId9479.add($.__views.__alloyId9480);
    $.__views.__alloyId9481 = Ti.UI.createView({
        id: "__alloyId9481"
    });
    $.__views.__alloyId9481 && $.addTopLevelView($.__views.__alloyId9481);
    $.__views.__alloyId9482 = Ti.UI.createView({
        id: "__alloyId9482"
    });
    $.__views.__alloyId9481.add($.__views.__alloyId9482);
    $.__views.__alloyId9483 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9483"
    });
    $.__views.__alloyId9482.add($.__views.__alloyId9483);
    $.__views.__alloyId9484 = Ti.UI.createView({
        id: "__alloyId9484"
    });
    $.__views.__alloyId9484 && $.addTopLevelView($.__views.__alloyId9484);
    $.__views.__alloyId9485 = Ti.UI.createView({
        id: "__alloyId9485"
    });
    $.__views.__alloyId9484.add($.__views.__alloyId9485);
    $.__views.__alloyId9486 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9486"
    });
    $.__views.__alloyId9485.add($.__views.__alloyId9486);
    $.__views.__alloyId9487 = Ti.UI.createView({
        id: "__alloyId9487"
    });
    $.__views.__alloyId9487 && $.addTopLevelView($.__views.__alloyId9487);
    $.__views.__alloyId9488 = Ti.UI.createView({
        id: "__alloyId9488"
    });
    $.__views.__alloyId9487.add($.__views.__alloyId9488);
    $.__views.__alloyId9489 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9489"
    });
    $.__views.__alloyId9488.add($.__views.__alloyId9489);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;