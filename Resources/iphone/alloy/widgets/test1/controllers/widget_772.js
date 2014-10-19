function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_772";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_772 = Ti.UI.createView({
        id: "widget_772"
    });
    $.__views.widget_772 && $.addTopLevelView($.__views.widget_772);
    $.__views.__alloyId19474 = Ti.UI.createView({
        id: "__alloyId19474"
    });
    $.__views.widget_772.add($.__views.__alloyId19474);
    $.__views.__alloyId19475 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19475"
    });
    $.__views.__alloyId19474.add($.__views.__alloyId19475);
    $.__views.__alloyId19476 = Ti.UI.createView({
        id: "__alloyId19476"
    });
    $.__views.__alloyId19476 && $.addTopLevelView($.__views.__alloyId19476);
    $.__views.__alloyId19477 = Ti.UI.createView({
        id: "__alloyId19477"
    });
    $.__views.__alloyId19476.add($.__views.__alloyId19477);
    $.__views.__alloyId19478 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19478"
    });
    $.__views.__alloyId19477.add($.__views.__alloyId19478);
    $.__views.__alloyId19479 = Ti.UI.createView({
        id: "__alloyId19479"
    });
    $.__views.__alloyId19479 && $.addTopLevelView($.__views.__alloyId19479);
    $.__views.__alloyId19480 = Ti.UI.createView({
        id: "__alloyId19480"
    });
    $.__views.__alloyId19479.add($.__views.__alloyId19480);
    $.__views.__alloyId19481 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19481"
    });
    $.__views.__alloyId19480.add($.__views.__alloyId19481);
    $.__views.__alloyId19482 = Ti.UI.createView({
        id: "__alloyId19482"
    });
    $.__views.__alloyId19482 && $.addTopLevelView($.__views.__alloyId19482);
    $.__views.__alloyId19483 = Ti.UI.createView({
        id: "__alloyId19483"
    });
    $.__views.__alloyId19482.add($.__views.__alloyId19483);
    $.__views.__alloyId19484 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19484"
    });
    $.__views.__alloyId19483.add($.__views.__alloyId19484);
    $.__views.__alloyId19485 = Ti.UI.createView({
        id: "__alloyId19485"
    });
    $.__views.__alloyId19485 && $.addTopLevelView($.__views.__alloyId19485);
    $.__views.__alloyId19486 = Ti.UI.createView({
        id: "__alloyId19486"
    });
    $.__views.__alloyId19485.add($.__views.__alloyId19486);
    $.__views.__alloyId19487 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19487"
    });
    $.__views.__alloyId19486.add($.__views.__alloyId19487);
    $.__views.__alloyId19488 = Ti.UI.createView({
        id: "__alloyId19488"
    });
    $.__views.__alloyId19488 && $.addTopLevelView($.__views.__alloyId19488);
    $.__views.__alloyId19489 = Ti.UI.createView({
        id: "__alloyId19489"
    });
    $.__views.__alloyId19488.add($.__views.__alloyId19489);
    $.__views.__alloyId19490 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19490"
    });
    $.__views.__alloyId19489.add($.__views.__alloyId19490);
    $.__views.__alloyId19491 = Ti.UI.createView({
        id: "__alloyId19491"
    });
    $.__views.__alloyId19491 && $.addTopLevelView($.__views.__alloyId19491);
    $.__views.__alloyId19492 = Ti.UI.createView({
        id: "__alloyId19492"
    });
    $.__views.__alloyId19491.add($.__views.__alloyId19492);
    $.__views.__alloyId19493 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19493"
    });
    $.__views.__alloyId19492.add($.__views.__alloyId19493);
    $.__views.__alloyId19494 = Ti.UI.createView({
        id: "__alloyId19494"
    });
    $.__views.__alloyId19494 && $.addTopLevelView($.__views.__alloyId19494);
    $.__views.__alloyId19495 = Ti.UI.createView({
        id: "__alloyId19495"
    });
    $.__views.__alloyId19494.add($.__views.__alloyId19495);
    $.__views.__alloyId19496 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19496"
    });
    $.__views.__alloyId19495.add($.__views.__alloyId19496);
    $.__views.__alloyId19497 = Ti.UI.createView({
        id: "__alloyId19497"
    });
    $.__views.__alloyId19497 && $.addTopLevelView($.__views.__alloyId19497);
    $.__views.__alloyId19498 = Ti.UI.createView({
        id: "__alloyId19498"
    });
    $.__views.__alloyId19497.add($.__views.__alloyId19498);
    $.__views.__alloyId19499 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19499"
    });
    $.__views.__alloyId19498.add($.__views.__alloyId19499);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;