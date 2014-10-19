function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_599";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_599 = Ti.UI.createView({
        id: "widget_599"
    });
    $.__views.widget_599 && $.addTopLevelView($.__views.widget_599);
    $.__views.__alloyId14456 = Ti.UI.createView({
        id: "__alloyId14456"
    });
    $.__views.widget_599.add($.__views.__alloyId14456);
    $.__views.__alloyId14457 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14457"
    });
    $.__views.__alloyId14456.add($.__views.__alloyId14457);
    $.__views.__alloyId14458 = Ti.UI.createView({
        id: "__alloyId14458"
    });
    $.__views.__alloyId14458 && $.addTopLevelView($.__views.__alloyId14458);
    $.__views.__alloyId14459 = Ti.UI.createView({
        id: "__alloyId14459"
    });
    $.__views.__alloyId14458.add($.__views.__alloyId14459);
    $.__views.__alloyId14460 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14460"
    });
    $.__views.__alloyId14459.add($.__views.__alloyId14460);
    $.__views.__alloyId14461 = Ti.UI.createView({
        id: "__alloyId14461"
    });
    $.__views.__alloyId14461 && $.addTopLevelView($.__views.__alloyId14461);
    $.__views.__alloyId14462 = Ti.UI.createView({
        id: "__alloyId14462"
    });
    $.__views.__alloyId14461.add($.__views.__alloyId14462);
    $.__views.__alloyId14463 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14463"
    });
    $.__views.__alloyId14462.add($.__views.__alloyId14463);
    $.__views.__alloyId14464 = Ti.UI.createView({
        id: "__alloyId14464"
    });
    $.__views.__alloyId14464 && $.addTopLevelView($.__views.__alloyId14464);
    $.__views.__alloyId14465 = Ti.UI.createView({
        id: "__alloyId14465"
    });
    $.__views.__alloyId14464.add($.__views.__alloyId14465);
    $.__views.__alloyId14466 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14466"
    });
    $.__views.__alloyId14465.add($.__views.__alloyId14466);
    $.__views.__alloyId14467 = Ti.UI.createView({
        id: "__alloyId14467"
    });
    $.__views.__alloyId14467 && $.addTopLevelView($.__views.__alloyId14467);
    $.__views.__alloyId14468 = Ti.UI.createView({
        id: "__alloyId14468"
    });
    $.__views.__alloyId14467.add($.__views.__alloyId14468);
    $.__views.__alloyId14469 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14469"
    });
    $.__views.__alloyId14468.add($.__views.__alloyId14469);
    $.__views.__alloyId14470 = Ti.UI.createView({
        id: "__alloyId14470"
    });
    $.__views.__alloyId14470 && $.addTopLevelView($.__views.__alloyId14470);
    $.__views.__alloyId14471 = Ti.UI.createView({
        id: "__alloyId14471"
    });
    $.__views.__alloyId14470.add($.__views.__alloyId14471);
    $.__views.__alloyId14472 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14472"
    });
    $.__views.__alloyId14471.add($.__views.__alloyId14472);
    $.__views.__alloyId14473 = Ti.UI.createView({
        id: "__alloyId14473"
    });
    $.__views.__alloyId14473 && $.addTopLevelView($.__views.__alloyId14473);
    $.__views.__alloyId14474 = Ti.UI.createView({
        id: "__alloyId14474"
    });
    $.__views.__alloyId14473.add($.__views.__alloyId14474);
    $.__views.__alloyId14475 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14475"
    });
    $.__views.__alloyId14474.add($.__views.__alloyId14475);
    $.__views.__alloyId14476 = Ti.UI.createView({
        id: "__alloyId14476"
    });
    $.__views.__alloyId14476 && $.addTopLevelView($.__views.__alloyId14476);
    $.__views.__alloyId14477 = Ti.UI.createView({
        id: "__alloyId14477"
    });
    $.__views.__alloyId14476.add($.__views.__alloyId14477);
    $.__views.__alloyId14478 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14478"
    });
    $.__views.__alloyId14477.add($.__views.__alloyId14478);
    $.__views.__alloyId14479 = Ti.UI.createView({
        id: "__alloyId14479"
    });
    $.__views.__alloyId14479 && $.addTopLevelView($.__views.__alloyId14479);
    $.__views.__alloyId14480 = Ti.UI.createView({
        id: "__alloyId14480"
    });
    $.__views.__alloyId14479.add($.__views.__alloyId14480);
    $.__views.__alloyId14481 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14481"
    });
    $.__views.__alloyId14480.add($.__views.__alloyId14481);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;