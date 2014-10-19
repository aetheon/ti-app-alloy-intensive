function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_980";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_980 = Ti.UI.createView({
        id: "widget_980"
    });
    $.__views.widget_980 && $.addTopLevelView($.__views.widget_980);
    $.__views.__alloyId25480 = Ti.UI.createView({
        id: "__alloyId25480"
    });
    $.__views.widget_980.add($.__views.__alloyId25480);
    $.__views.__alloyId25481 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25481"
    });
    $.__views.__alloyId25480.add($.__views.__alloyId25481);
    $.__views.__alloyId25482 = Ti.UI.createView({
        id: "__alloyId25482"
    });
    $.__views.__alloyId25482 && $.addTopLevelView($.__views.__alloyId25482);
    $.__views.__alloyId25483 = Ti.UI.createView({
        id: "__alloyId25483"
    });
    $.__views.__alloyId25482.add($.__views.__alloyId25483);
    $.__views.__alloyId25484 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25484"
    });
    $.__views.__alloyId25483.add($.__views.__alloyId25484);
    $.__views.__alloyId25485 = Ti.UI.createView({
        id: "__alloyId25485"
    });
    $.__views.__alloyId25485 && $.addTopLevelView($.__views.__alloyId25485);
    $.__views.__alloyId25486 = Ti.UI.createView({
        id: "__alloyId25486"
    });
    $.__views.__alloyId25485.add($.__views.__alloyId25486);
    $.__views.__alloyId25487 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25487"
    });
    $.__views.__alloyId25486.add($.__views.__alloyId25487);
    $.__views.__alloyId25488 = Ti.UI.createView({
        id: "__alloyId25488"
    });
    $.__views.__alloyId25488 && $.addTopLevelView($.__views.__alloyId25488);
    $.__views.__alloyId25489 = Ti.UI.createView({
        id: "__alloyId25489"
    });
    $.__views.__alloyId25488.add($.__views.__alloyId25489);
    $.__views.__alloyId25490 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25490"
    });
    $.__views.__alloyId25489.add($.__views.__alloyId25490);
    $.__views.__alloyId25491 = Ti.UI.createView({
        id: "__alloyId25491"
    });
    $.__views.__alloyId25491 && $.addTopLevelView($.__views.__alloyId25491);
    $.__views.__alloyId25492 = Ti.UI.createView({
        id: "__alloyId25492"
    });
    $.__views.__alloyId25491.add($.__views.__alloyId25492);
    $.__views.__alloyId25493 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25493"
    });
    $.__views.__alloyId25492.add($.__views.__alloyId25493);
    $.__views.__alloyId25494 = Ti.UI.createView({
        id: "__alloyId25494"
    });
    $.__views.__alloyId25494 && $.addTopLevelView($.__views.__alloyId25494);
    $.__views.__alloyId25495 = Ti.UI.createView({
        id: "__alloyId25495"
    });
    $.__views.__alloyId25494.add($.__views.__alloyId25495);
    $.__views.__alloyId25496 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25496"
    });
    $.__views.__alloyId25495.add($.__views.__alloyId25496);
    $.__views.__alloyId25497 = Ti.UI.createView({
        id: "__alloyId25497"
    });
    $.__views.__alloyId25497 && $.addTopLevelView($.__views.__alloyId25497);
    $.__views.__alloyId25498 = Ti.UI.createView({
        id: "__alloyId25498"
    });
    $.__views.__alloyId25497.add($.__views.__alloyId25498);
    $.__views.__alloyId25499 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25499"
    });
    $.__views.__alloyId25498.add($.__views.__alloyId25499);
    $.__views.__alloyId25500 = Ti.UI.createView({
        id: "__alloyId25500"
    });
    $.__views.__alloyId25500 && $.addTopLevelView($.__views.__alloyId25500);
    $.__views.__alloyId25501 = Ti.UI.createView({
        id: "__alloyId25501"
    });
    $.__views.__alloyId25500.add($.__views.__alloyId25501);
    $.__views.__alloyId25502 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25502"
    });
    $.__views.__alloyId25501.add($.__views.__alloyId25502);
    $.__views.__alloyId25503 = Ti.UI.createView({
        id: "__alloyId25503"
    });
    $.__views.__alloyId25503 && $.addTopLevelView($.__views.__alloyId25503);
    $.__views.__alloyId25504 = Ti.UI.createView({
        id: "__alloyId25504"
    });
    $.__views.__alloyId25503.add($.__views.__alloyId25504);
    $.__views.__alloyId25505 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25505"
    });
    $.__views.__alloyId25504.add($.__views.__alloyId25505);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;