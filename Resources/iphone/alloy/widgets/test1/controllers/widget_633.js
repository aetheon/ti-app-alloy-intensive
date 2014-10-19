function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_633";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_633 = Ti.UI.createView({
        id: "widget_633"
    });
    $.__views.widget_633 && $.addTopLevelView($.__views.widget_633);
    $.__views.__alloyId15470 = Ti.UI.createView({
        id: "__alloyId15470"
    });
    $.__views.widget_633.add($.__views.__alloyId15470);
    $.__views.__alloyId15471 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15471"
    });
    $.__views.__alloyId15470.add($.__views.__alloyId15471);
    $.__views.__alloyId15472 = Ti.UI.createView({
        id: "__alloyId15472"
    });
    $.__views.__alloyId15472 && $.addTopLevelView($.__views.__alloyId15472);
    $.__views.__alloyId15473 = Ti.UI.createView({
        id: "__alloyId15473"
    });
    $.__views.__alloyId15472.add($.__views.__alloyId15473);
    $.__views.__alloyId15474 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15474"
    });
    $.__views.__alloyId15473.add($.__views.__alloyId15474);
    $.__views.__alloyId15475 = Ti.UI.createView({
        id: "__alloyId15475"
    });
    $.__views.__alloyId15475 && $.addTopLevelView($.__views.__alloyId15475);
    $.__views.__alloyId15476 = Ti.UI.createView({
        id: "__alloyId15476"
    });
    $.__views.__alloyId15475.add($.__views.__alloyId15476);
    $.__views.__alloyId15477 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15477"
    });
    $.__views.__alloyId15476.add($.__views.__alloyId15477);
    $.__views.__alloyId15478 = Ti.UI.createView({
        id: "__alloyId15478"
    });
    $.__views.__alloyId15478 && $.addTopLevelView($.__views.__alloyId15478);
    $.__views.__alloyId15479 = Ti.UI.createView({
        id: "__alloyId15479"
    });
    $.__views.__alloyId15478.add($.__views.__alloyId15479);
    $.__views.__alloyId15480 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15480"
    });
    $.__views.__alloyId15479.add($.__views.__alloyId15480);
    $.__views.__alloyId15481 = Ti.UI.createView({
        id: "__alloyId15481"
    });
    $.__views.__alloyId15481 && $.addTopLevelView($.__views.__alloyId15481);
    $.__views.__alloyId15482 = Ti.UI.createView({
        id: "__alloyId15482"
    });
    $.__views.__alloyId15481.add($.__views.__alloyId15482);
    $.__views.__alloyId15483 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15483"
    });
    $.__views.__alloyId15482.add($.__views.__alloyId15483);
    $.__views.__alloyId15484 = Ti.UI.createView({
        id: "__alloyId15484"
    });
    $.__views.__alloyId15484 && $.addTopLevelView($.__views.__alloyId15484);
    $.__views.__alloyId15485 = Ti.UI.createView({
        id: "__alloyId15485"
    });
    $.__views.__alloyId15484.add($.__views.__alloyId15485);
    $.__views.__alloyId15486 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15486"
    });
    $.__views.__alloyId15485.add($.__views.__alloyId15486);
    $.__views.__alloyId15487 = Ti.UI.createView({
        id: "__alloyId15487"
    });
    $.__views.__alloyId15487 && $.addTopLevelView($.__views.__alloyId15487);
    $.__views.__alloyId15488 = Ti.UI.createView({
        id: "__alloyId15488"
    });
    $.__views.__alloyId15487.add($.__views.__alloyId15488);
    $.__views.__alloyId15489 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15489"
    });
    $.__views.__alloyId15488.add($.__views.__alloyId15489);
    $.__views.__alloyId15490 = Ti.UI.createView({
        id: "__alloyId15490"
    });
    $.__views.__alloyId15490 && $.addTopLevelView($.__views.__alloyId15490);
    $.__views.__alloyId15491 = Ti.UI.createView({
        id: "__alloyId15491"
    });
    $.__views.__alloyId15490.add($.__views.__alloyId15491);
    $.__views.__alloyId15492 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15492"
    });
    $.__views.__alloyId15491.add($.__views.__alloyId15492);
    $.__views.__alloyId15493 = Ti.UI.createView({
        id: "__alloyId15493"
    });
    $.__views.__alloyId15493 && $.addTopLevelView($.__views.__alloyId15493);
    $.__views.__alloyId15494 = Ti.UI.createView({
        id: "__alloyId15494"
    });
    $.__views.__alloyId15493.add($.__views.__alloyId15494);
    $.__views.__alloyId15495 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15495"
    });
    $.__views.__alloyId15494.add($.__views.__alloyId15495);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;