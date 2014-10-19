function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_218";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_218 = Ti.UI.createView({
        id: "widget_218"
    });
    $.__views.widget_218 && $.addTopLevelView($.__views.widget_218);
    $.__views.__alloyId3484 = Ti.UI.createView({
        id: "__alloyId3484"
    });
    $.__views.widget_218.add($.__views.__alloyId3484);
    $.__views.__alloyId3485 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3485"
    });
    $.__views.__alloyId3484.add($.__views.__alloyId3485);
    $.__views.__alloyId3486 = Ti.UI.createView({
        id: "__alloyId3486"
    });
    $.__views.__alloyId3486 && $.addTopLevelView($.__views.__alloyId3486);
    $.__views.__alloyId3487 = Ti.UI.createView({
        id: "__alloyId3487"
    });
    $.__views.__alloyId3486.add($.__views.__alloyId3487);
    $.__views.__alloyId3488 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3488"
    });
    $.__views.__alloyId3487.add($.__views.__alloyId3488);
    $.__views.__alloyId3489 = Ti.UI.createView({
        id: "__alloyId3489"
    });
    $.__views.__alloyId3489 && $.addTopLevelView($.__views.__alloyId3489);
    $.__views.__alloyId3490 = Ti.UI.createView({
        id: "__alloyId3490"
    });
    $.__views.__alloyId3489.add($.__views.__alloyId3490);
    $.__views.__alloyId3491 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3491"
    });
    $.__views.__alloyId3490.add($.__views.__alloyId3491);
    $.__views.__alloyId3492 = Ti.UI.createView({
        id: "__alloyId3492"
    });
    $.__views.__alloyId3492 && $.addTopLevelView($.__views.__alloyId3492);
    $.__views.__alloyId3493 = Ti.UI.createView({
        id: "__alloyId3493"
    });
    $.__views.__alloyId3492.add($.__views.__alloyId3493);
    $.__views.__alloyId3494 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3494"
    });
    $.__views.__alloyId3493.add($.__views.__alloyId3494);
    $.__views.__alloyId3495 = Ti.UI.createView({
        id: "__alloyId3495"
    });
    $.__views.__alloyId3495 && $.addTopLevelView($.__views.__alloyId3495);
    $.__views.__alloyId3496 = Ti.UI.createView({
        id: "__alloyId3496"
    });
    $.__views.__alloyId3495.add($.__views.__alloyId3496);
    $.__views.__alloyId3497 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3497"
    });
    $.__views.__alloyId3496.add($.__views.__alloyId3497);
    $.__views.__alloyId3498 = Ti.UI.createView({
        id: "__alloyId3498"
    });
    $.__views.__alloyId3498 && $.addTopLevelView($.__views.__alloyId3498);
    $.__views.__alloyId3499 = Ti.UI.createView({
        id: "__alloyId3499"
    });
    $.__views.__alloyId3498.add($.__views.__alloyId3499);
    $.__views.__alloyId3500 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3500"
    });
    $.__views.__alloyId3499.add($.__views.__alloyId3500);
    $.__views.__alloyId3501 = Ti.UI.createView({
        id: "__alloyId3501"
    });
    $.__views.__alloyId3501 && $.addTopLevelView($.__views.__alloyId3501);
    $.__views.__alloyId3502 = Ti.UI.createView({
        id: "__alloyId3502"
    });
    $.__views.__alloyId3501.add($.__views.__alloyId3502);
    $.__views.__alloyId3503 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3503"
    });
    $.__views.__alloyId3502.add($.__views.__alloyId3503);
    $.__views.__alloyId3504 = Ti.UI.createView({
        id: "__alloyId3504"
    });
    $.__views.__alloyId3504 && $.addTopLevelView($.__views.__alloyId3504);
    $.__views.__alloyId3505 = Ti.UI.createView({
        id: "__alloyId3505"
    });
    $.__views.__alloyId3504.add($.__views.__alloyId3505);
    $.__views.__alloyId3506 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3506"
    });
    $.__views.__alloyId3505.add($.__views.__alloyId3506);
    $.__views.__alloyId3507 = Ti.UI.createView({
        id: "__alloyId3507"
    });
    $.__views.__alloyId3507 && $.addTopLevelView($.__views.__alloyId3507);
    $.__views.__alloyId3508 = Ti.UI.createView({
        id: "__alloyId3508"
    });
    $.__views.__alloyId3507.add($.__views.__alloyId3508);
    $.__views.__alloyId3509 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3509"
    });
    $.__views.__alloyId3508.add($.__views.__alloyId3509);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;