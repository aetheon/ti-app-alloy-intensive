function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_357";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_357 = Ti.UI.createView({
        id: "widget_357"
    });
    $.__views.widget_357 && $.addTopLevelView($.__views.widget_357);
    $.__views.__alloyId7488 = Ti.UI.createView({
        id: "__alloyId7488"
    });
    $.__views.widget_357.add($.__views.__alloyId7488);
    $.__views.__alloyId7489 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7489"
    });
    $.__views.__alloyId7488.add($.__views.__alloyId7489);
    $.__views.__alloyId7490 = Ti.UI.createView({
        id: "__alloyId7490"
    });
    $.__views.__alloyId7490 && $.addTopLevelView($.__views.__alloyId7490);
    $.__views.__alloyId7491 = Ti.UI.createView({
        id: "__alloyId7491"
    });
    $.__views.__alloyId7490.add($.__views.__alloyId7491);
    $.__views.__alloyId7492 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7492"
    });
    $.__views.__alloyId7491.add($.__views.__alloyId7492);
    $.__views.__alloyId7493 = Ti.UI.createView({
        id: "__alloyId7493"
    });
    $.__views.__alloyId7493 && $.addTopLevelView($.__views.__alloyId7493);
    $.__views.__alloyId7494 = Ti.UI.createView({
        id: "__alloyId7494"
    });
    $.__views.__alloyId7493.add($.__views.__alloyId7494);
    $.__views.__alloyId7495 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7495"
    });
    $.__views.__alloyId7494.add($.__views.__alloyId7495);
    $.__views.__alloyId7496 = Ti.UI.createView({
        id: "__alloyId7496"
    });
    $.__views.__alloyId7496 && $.addTopLevelView($.__views.__alloyId7496);
    $.__views.__alloyId7497 = Ti.UI.createView({
        id: "__alloyId7497"
    });
    $.__views.__alloyId7496.add($.__views.__alloyId7497);
    $.__views.__alloyId7498 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7498"
    });
    $.__views.__alloyId7497.add($.__views.__alloyId7498);
    $.__views.__alloyId7499 = Ti.UI.createView({
        id: "__alloyId7499"
    });
    $.__views.__alloyId7499 && $.addTopLevelView($.__views.__alloyId7499);
    $.__views.__alloyId7500 = Ti.UI.createView({
        id: "__alloyId7500"
    });
    $.__views.__alloyId7499.add($.__views.__alloyId7500);
    $.__views.__alloyId7501 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7501"
    });
    $.__views.__alloyId7500.add($.__views.__alloyId7501);
    $.__views.__alloyId7502 = Ti.UI.createView({
        id: "__alloyId7502"
    });
    $.__views.__alloyId7502 && $.addTopLevelView($.__views.__alloyId7502);
    $.__views.__alloyId7503 = Ti.UI.createView({
        id: "__alloyId7503"
    });
    $.__views.__alloyId7502.add($.__views.__alloyId7503);
    $.__views.__alloyId7504 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7504"
    });
    $.__views.__alloyId7503.add($.__views.__alloyId7504);
    $.__views.__alloyId7505 = Ti.UI.createView({
        id: "__alloyId7505"
    });
    $.__views.__alloyId7505 && $.addTopLevelView($.__views.__alloyId7505);
    $.__views.__alloyId7506 = Ti.UI.createView({
        id: "__alloyId7506"
    });
    $.__views.__alloyId7505.add($.__views.__alloyId7506);
    $.__views.__alloyId7507 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7507"
    });
    $.__views.__alloyId7506.add($.__views.__alloyId7507);
    $.__views.__alloyId7508 = Ti.UI.createView({
        id: "__alloyId7508"
    });
    $.__views.__alloyId7508 && $.addTopLevelView($.__views.__alloyId7508);
    $.__views.__alloyId7509 = Ti.UI.createView({
        id: "__alloyId7509"
    });
    $.__views.__alloyId7508.add($.__views.__alloyId7509);
    $.__views.__alloyId7510 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7510"
    });
    $.__views.__alloyId7509.add($.__views.__alloyId7510);
    $.__views.__alloyId7511 = Ti.UI.createView({
        id: "__alloyId7511"
    });
    $.__views.__alloyId7511 && $.addTopLevelView($.__views.__alloyId7511);
    $.__views.__alloyId7512 = Ti.UI.createView({
        id: "__alloyId7512"
    });
    $.__views.__alloyId7511.add($.__views.__alloyId7512);
    $.__views.__alloyId7513 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7513"
    });
    $.__views.__alloyId7512.add($.__views.__alloyId7513);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;