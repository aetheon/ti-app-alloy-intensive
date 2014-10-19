function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_321";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_321 = Ti.UI.createView({
        id: "widget_321"
    });
    $.__views.widget_321 && $.addTopLevelView($.__views.widget_321);
    $.__views.__alloyId6474 = Ti.UI.createView({
        id: "__alloyId6474"
    });
    $.__views.widget_321.add($.__views.__alloyId6474);
    $.__views.__alloyId6475 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6475"
    });
    $.__views.__alloyId6474.add($.__views.__alloyId6475);
    $.__views.__alloyId6476 = Ti.UI.createView({
        id: "__alloyId6476"
    });
    $.__views.__alloyId6476 && $.addTopLevelView($.__views.__alloyId6476);
    $.__views.__alloyId6477 = Ti.UI.createView({
        id: "__alloyId6477"
    });
    $.__views.__alloyId6476.add($.__views.__alloyId6477);
    $.__views.__alloyId6478 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6478"
    });
    $.__views.__alloyId6477.add($.__views.__alloyId6478);
    $.__views.__alloyId6479 = Ti.UI.createView({
        id: "__alloyId6479"
    });
    $.__views.__alloyId6479 && $.addTopLevelView($.__views.__alloyId6479);
    $.__views.__alloyId6480 = Ti.UI.createView({
        id: "__alloyId6480"
    });
    $.__views.__alloyId6479.add($.__views.__alloyId6480);
    $.__views.__alloyId6481 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6481"
    });
    $.__views.__alloyId6480.add($.__views.__alloyId6481);
    $.__views.__alloyId6482 = Ti.UI.createView({
        id: "__alloyId6482"
    });
    $.__views.__alloyId6482 && $.addTopLevelView($.__views.__alloyId6482);
    $.__views.__alloyId6483 = Ti.UI.createView({
        id: "__alloyId6483"
    });
    $.__views.__alloyId6482.add($.__views.__alloyId6483);
    $.__views.__alloyId6484 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6484"
    });
    $.__views.__alloyId6483.add($.__views.__alloyId6484);
    $.__views.__alloyId6485 = Ti.UI.createView({
        id: "__alloyId6485"
    });
    $.__views.__alloyId6485 && $.addTopLevelView($.__views.__alloyId6485);
    $.__views.__alloyId6486 = Ti.UI.createView({
        id: "__alloyId6486"
    });
    $.__views.__alloyId6485.add($.__views.__alloyId6486);
    $.__views.__alloyId6487 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6487"
    });
    $.__views.__alloyId6486.add($.__views.__alloyId6487);
    $.__views.__alloyId6488 = Ti.UI.createView({
        id: "__alloyId6488"
    });
    $.__views.__alloyId6488 && $.addTopLevelView($.__views.__alloyId6488);
    $.__views.__alloyId6489 = Ti.UI.createView({
        id: "__alloyId6489"
    });
    $.__views.__alloyId6488.add($.__views.__alloyId6489);
    $.__views.__alloyId6490 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6490"
    });
    $.__views.__alloyId6489.add($.__views.__alloyId6490);
    $.__views.__alloyId6491 = Ti.UI.createView({
        id: "__alloyId6491"
    });
    $.__views.__alloyId6491 && $.addTopLevelView($.__views.__alloyId6491);
    $.__views.__alloyId6492 = Ti.UI.createView({
        id: "__alloyId6492"
    });
    $.__views.__alloyId6491.add($.__views.__alloyId6492);
    $.__views.__alloyId6493 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6493"
    });
    $.__views.__alloyId6492.add($.__views.__alloyId6493);
    $.__views.__alloyId6494 = Ti.UI.createView({
        id: "__alloyId6494"
    });
    $.__views.__alloyId6494 && $.addTopLevelView($.__views.__alloyId6494);
    $.__views.__alloyId6495 = Ti.UI.createView({
        id: "__alloyId6495"
    });
    $.__views.__alloyId6494.add($.__views.__alloyId6495);
    $.__views.__alloyId6496 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6496"
    });
    $.__views.__alloyId6495.add($.__views.__alloyId6496);
    $.__views.__alloyId6497 = Ti.UI.createView({
        id: "__alloyId6497"
    });
    $.__views.__alloyId6497 && $.addTopLevelView($.__views.__alloyId6497);
    $.__views.__alloyId6498 = Ti.UI.createView({
        id: "__alloyId6498"
    });
    $.__views.__alloyId6497.add($.__views.__alloyId6498);
    $.__views.__alloyId6499 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6499"
    });
    $.__views.__alloyId6498.add($.__views.__alloyId6499);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;