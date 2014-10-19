function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_945";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_945 = Ti.UI.createView({
        id: "widget_945"
    });
    $.__views.widget_945 && $.addTopLevelView($.__views.widget_945);
    $.__views.__alloyId24466 = Ti.UI.createView({
        id: "__alloyId24466"
    });
    $.__views.widget_945.add($.__views.__alloyId24466);
    $.__views.__alloyId24467 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24467"
    });
    $.__views.__alloyId24466.add($.__views.__alloyId24467);
    $.__views.__alloyId24468 = Ti.UI.createView({
        id: "__alloyId24468"
    });
    $.__views.__alloyId24468 && $.addTopLevelView($.__views.__alloyId24468);
    $.__views.__alloyId24469 = Ti.UI.createView({
        id: "__alloyId24469"
    });
    $.__views.__alloyId24468.add($.__views.__alloyId24469);
    $.__views.__alloyId24470 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24470"
    });
    $.__views.__alloyId24469.add($.__views.__alloyId24470);
    $.__views.__alloyId24471 = Ti.UI.createView({
        id: "__alloyId24471"
    });
    $.__views.__alloyId24471 && $.addTopLevelView($.__views.__alloyId24471);
    $.__views.__alloyId24472 = Ti.UI.createView({
        id: "__alloyId24472"
    });
    $.__views.__alloyId24471.add($.__views.__alloyId24472);
    $.__views.__alloyId24473 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24473"
    });
    $.__views.__alloyId24472.add($.__views.__alloyId24473);
    $.__views.__alloyId24474 = Ti.UI.createView({
        id: "__alloyId24474"
    });
    $.__views.__alloyId24474 && $.addTopLevelView($.__views.__alloyId24474);
    $.__views.__alloyId24475 = Ti.UI.createView({
        id: "__alloyId24475"
    });
    $.__views.__alloyId24474.add($.__views.__alloyId24475);
    $.__views.__alloyId24476 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24476"
    });
    $.__views.__alloyId24475.add($.__views.__alloyId24476);
    $.__views.__alloyId24477 = Ti.UI.createView({
        id: "__alloyId24477"
    });
    $.__views.__alloyId24477 && $.addTopLevelView($.__views.__alloyId24477);
    $.__views.__alloyId24478 = Ti.UI.createView({
        id: "__alloyId24478"
    });
    $.__views.__alloyId24477.add($.__views.__alloyId24478);
    $.__views.__alloyId24479 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24479"
    });
    $.__views.__alloyId24478.add($.__views.__alloyId24479);
    $.__views.__alloyId24480 = Ti.UI.createView({
        id: "__alloyId24480"
    });
    $.__views.__alloyId24480 && $.addTopLevelView($.__views.__alloyId24480);
    $.__views.__alloyId24481 = Ti.UI.createView({
        id: "__alloyId24481"
    });
    $.__views.__alloyId24480.add($.__views.__alloyId24481);
    $.__views.__alloyId24482 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24482"
    });
    $.__views.__alloyId24481.add($.__views.__alloyId24482);
    $.__views.__alloyId24483 = Ti.UI.createView({
        id: "__alloyId24483"
    });
    $.__views.__alloyId24483 && $.addTopLevelView($.__views.__alloyId24483);
    $.__views.__alloyId24484 = Ti.UI.createView({
        id: "__alloyId24484"
    });
    $.__views.__alloyId24483.add($.__views.__alloyId24484);
    $.__views.__alloyId24485 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24485"
    });
    $.__views.__alloyId24484.add($.__views.__alloyId24485);
    $.__views.__alloyId24486 = Ti.UI.createView({
        id: "__alloyId24486"
    });
    $.__views.__alloyId24486 && $.addTopLevelView($.__views.__alloyId24486);
    $.__views.__alloyId24487 = Ti.UI.createView({
        id: "__alloyId24487"
    });
    $.__views.__alloyId24486.add($.__views.__alloyId24487);
    $.__views.__alloyId24488 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24488"
    });
    $.__views.__alloyId24487.add($.__views.__alloyId24488);
    $.__views.__alloyId24489 = Ti.UI.createView({
        id: "__alloyId24489"
    });
    $.__views.__alloyId24489 && $.addTopLevelView($.__views.__alloyId24489);
    $.__views.__alloyId24490 = Ti.UI.createView({
        id: "__alloyId24490"
    });
    $.__views.__alloyId24489.add($.__views.__alloyId24490);
    $.__views.__alloyId24491 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24491"
    });
    $.__views.__alloyId24490.add($.__views.__alloyId24491);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;