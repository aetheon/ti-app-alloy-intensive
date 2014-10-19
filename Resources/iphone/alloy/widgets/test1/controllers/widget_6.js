function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_6";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_6 = Ti.UI.createView({
        id: "widget_6"
    });
    $.__views.widget_6 && $.addTopLevelView($.__views.widget_6);
    $.__views.__alloyId14482 = Ti.UI.createView({
        id: "__alloyId14482"
    });
    $.__views.widget_6.add($.__views.__alloyId14482);
    $.__views.__alloyId14483 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14483"
    });
    $.__views.__alloyId14482.add($.__views.__alloyId14483);
    $.__views.__alloyId14484 = Ti.UI.createView({
        id: "__alloyId14484"
    });
    $.__views.__alloyId14484 && $.addTopLevelView($.__views.__alloyId14484);
    $.__views.__alloyId14485 = Ti.UI.createView({
        id: "__alloyId14485"
    });
    $.__views.__alloyId14484.add($.__views.__alloyId14485);
    $.__views.__alloyId14486 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14486"
    });
    $.__views.__alloyId14485.add($.__views.__alloyId14486);
    $.__views.__alloyId14487 = Ti.UI.createView({
        id: "__alloyId14487"
    });
    $.__views.__alloyId14487 && $.addTopLevelView($.__views.__alloyId14487);
    $.__views.__alloyId14488 = Ti.UI.createView({
        id: "__alloyId14488"
    });
    $.__views.__alloyId14487.add($.__views.__alloyId14488);
    $.__views.__alloyId14489 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14489"
    });
    $.__views.__alloyId14488.add($.__views.__alloyId14489);
    $.__views.__alloyId14490 = Ti.UI.createView({
        id: "__alloyId14490"
    });
    $.__views.__alloyId14490 && $.addTopLevelView($.__views.__alloyId14490);
    $.__views.__alloyId14491 = Ti.UI.createView({
        id: "__alloyId14491"
    });
    $.__views.__alloyId14490.add($.__views.__alloyId14491);
    $.__views.__alloyId14492 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14492"
    });
    $.__views.__alloyId14491.add($.__views.__alloyId14492);
    $.__views.__alloyId14493 = Ti.UI.createView({
        id: "__alloyId14493"
    });
    $.__views.__alloyId14493 && $.addTopLevelView($.__views.__alloyId14493);
    $.__views.__alloyId14494 = Ti.UI.createView({
        id: "__alloyId14494"
    });
    $.__views.__alloyId14493.add($.__views.__alloyId14494);
    $.__views.__alloyId14495 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14495"
    });
    $.__views.__alloyId14494.add($.__views.__alloyId14495);
    $.__views.__alloyId14496 = Ti.UI.createView({
        id: "__alloyId14496"
    });
    $.__views.__alloyId14496 && $.addTopLevelView($.__views.__alloyId14496);
    $.__views.__alloyId14497 = Ti.UI.createView({
        id: "__alloyId14497"
    });
    $.__views.__alloyId14496.add($.__views.__alloyId14497);
    $.__views.__alloyId14498 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14498"
    });
    $.__views.__alloyId14497.add($.__views.__alloyId14498);
    $.__views.__alloyId14499 = Ti.UI.createView({
        id: "__alloyId14499"
    });
    $.__views.__alloyId14499 && $.addTopLevelView($.__views.__alloyId14499);
    $.__views.__alloyId14500 = Ti.UI.createView({
        id: "__alloyId14500"
    });
    $.__views.__alloyId14499.add($.__views.__alloyId14500);
    $.__views.__alloyId14501 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14501"
    });
    $.__views.__alloyId14500.add($.__views.__alloyId14501);
    $.__views.__alloyId14502 = Ti.UI.createView({
        id: "__alloyId14502"
    });
    $.__views.__alloyId14502 && $.addTopLevelView($.__views.__alloyId14502);
    $.__views.__alloyId14503 = Ti.UI.createView({
        id: "__alloyId14503"
    });
    $.__views.__alloyId14502.add($.__views.__alloyId14503);
    $.__views.__alloyId14504 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14504"
    });
    $.__views.__alloyId14503.add($.__views.__alloyId14504);
    $.__views.__alloyId14505 = Ti.UI.createView({
        id: "__alloyId14505"
    });
    $.__views.__alloyId14505 && $.addTopLevelView($.__views.__alloyId14505);
    $.__views.__alloyId14506 = Ti.UI.createView({
        id: "__alloyId14506"
    });
    $.__views.__alloyId14505.add($.__views.__alloyId14506);
    $.__views.__alloyId14507 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14507"
    });
    $.__views.__alloyId14506.add($.__views.__alloyId14507);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;