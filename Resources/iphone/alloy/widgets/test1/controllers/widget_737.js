function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_737";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_737 = Ti.UI.createView({
        id: "widget_737"
    });
    $.__views.widget_737 && $.addTopLevelView($.__views.widget_737);
    $.__views.__alloyId18460 = Ti.UI.createView({
        id: "__alloyId18460"
    });
    $.__views.widget_737.add($.__views.__alloyId18460);
    $.__views.__alloyId18461 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18461"
    });
    $.__views.__alloyId18460.add($.__views.__alloyId18461);
    $.__views.__alloyId18462 = Ti.UI.createView({
        id: "__alloyId18462"
    });
    $.__views.__alloyId18462 && $.addTopLevelView($.__views.__alloyId18462);
    $.__views.__alloyId18463 = Ti.UI.createView({
        id: "__alloyId18463"
    });
    $.__views.__alloyId18462.add($.__views.__alloyId18463);
    $.__views.__alloyId18464 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18464"
    });
    $.__views.__alloyId18463.add($.__views.__alloyId18464);
    $.__views.__alloyId18465 = Ti.UI.createView({
        id: "__alloyId18465"
    });
    $.__views.__alloyId18465 && $.addTopLevelView($.__views.__alloyId18465);
    $.__views.__alloyId18466 = Ti.UI.createView({
        id: "__alloyId18466"
    });
    $.__views.__alloyId18465.add($.__views.__alloyId18466);
    $.__views.__alloyId18467 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18467"
    });
    $.__views.__alloyId18466.add($.__views.__alloyId18467);
    $.__views.__alloyId18468 = Ti.UI.createView({
        id: "__alloyId18468"
    });
    $.__views.__alloyId18468 && $.addTopLevelView($.__views.__alloyId18468);
    $.__views.__alloyId18469 = Ti.UI.createView({
        id: "__alloyId18469"
    });
    $.__views.__alloyId18468.add($.__views.__alloyId18469);
    $.__views.__alloyId18470 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18470"
    });
    $.__views.__alloyId18469.add($.__views.__alloyId18470);
    $.__views.__alloyId18471 = Ti.UI.createView({
        id: "__alloyId18471"
    });
    $.__views.__alloyId18471 && $.addTopLevelView($.__views.__alloyId18471);
    $.__views.__alloyId18472 = Ti.UI.createView({
        id: "__alloyId18472"
    });
    $.__views.__alloyId18471.add($.__views.__alloyId18472);
    $.__views.__alloyId18473 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18473"
    });
    $.__views.__alloyId18472.add($.__views.__alloyId18473);
    $.__views.__alloyId18474 = Ti.UI.createView({
        id: "__alloyId18474"
    });
    $.__views.__alloyId18474 && $.addTopLevelView($.__views.__alloyId18474);
    $.__views.__alloyId18475 = Ti.UI.createView({
        id: "__alloyId18475"
    });
    $.__views.__alloyId18474.add($.__views.__alloyId18475);
    $.__views.__alloyId18476 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18476"
    });
    $.__views.__alloyId18475.add($.__views.__alloyId18476);
    $.__views.__alloyId18477 = Ti.UI.createView({
        id: "__alloyId18477"
    });
    $.__views.__alloyId18477 && $.addTopLevelView($.__views.__alloyId18477);
    $.__views.__alloyId18478 = Ti.UI.createView({
        id: "__alloyId18478"
    });
    $.__views.__alloyId18477.add($.__views.__alloyId18478);
    $.__views.__alloyId18479 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18479"
    });
    $.__views.__alloyId18478.add($.__views.__alloyId18479);
    $.__views.__alloyId18480 = Ti.UI.createView({
        id: "__alloyId18480"
    });
    $.__views.__alloyId18480 && $.addTopLevelView($.__views.__alloyId18480);
    $.__views.__alloyId18481 = Ti.UI.createView({
        id: "__alloyId18481"
    });
    $.__views.__alloyId18480.add($.__views.__alloyId18481);
    $.__views.__alloyId18482 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18482"
    });
    $.__views.__alloyId18481.add($.__views.__alloyId18482);
    $.__views.__alloyId18483 = Ti.UI.createView({
        id: "__alloyId18483"
    });
    $.__views.__alloyId18483 && $.addTopLevelView($.__views.__alloyId18483);
    $.__views.__alloyId18484 = Ti.UI.createView({
        id: "__alloyId18484"
    });
    $.__views.__alloyId18483.add($.__views.__alloyId18484);
    $.__views.__alloyId18485 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18485"
    });
    $.__views.__alloyId18484.add($.__views.__alloyId18485);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;