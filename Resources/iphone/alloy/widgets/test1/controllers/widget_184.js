function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_184";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_184 = Ti.UI.createView({
        id: "widget_184"
    });
    $.__views.widget_184 && $.addTopLevelView($.__views.widget_184);
    $.__views.__alloyId2496 = Ti.UI.createView({
        id: "__alloyId2496"
    });
    $.__views.widget_184.add($.__views.__alloyId2496);
    $.__views.__alloyId2497 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2497"
    });
    $.__views.__alloyId2496.add($.__views.__alloyId2497);
    $.__views.__alloyId2498 = Ti.UI.createView({
        id: "__alloyId2498"
    });
    $.__views.__alloyId2498 && $.addTopLevelView($.__views.__alloyId2498);
    $.__views.__alloyId2499 = Ti.UI.createView({
        id: "__alloyId2499"
    });
    $.__views.__alloyId2498.add($.__views.__alloyId2499);
    $.__views.__alloyId2500 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2500"
    });
    $.__views.__alloyId2499.add($.__views.__alloyId2500);
    $.__views.__alloyId2501 = Ti.UI.createView({
        id: "__alloyId2501"
    });
    $.__views.__alloyId2501 && $.addTopLevelView($.__views.__alloyId2501);
    $.__views.__alloyId2502 = Ti.UI.createView({
        id: "__alloyId2502"
    });
    $.__views.__alloyId2501.add($.__views.__alloyId2502);
    $.__views.__alloyId2503 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2503"
    });
    $.__views.__alloyId2502.add($.__views.__alloyId2503);
    $.__views.__alloyId2504 = Ti.UI.createView({
        id: "__alloyId2504"
    });
    $.__views.__alloyId2504 && $.addTopLevelView($.__views.__alloyId2504);
    $.__views.__alloyId2505 = Ti.UI.createView({
        id: "__alloyId2505"
    });
    $.__views.__alloyId2504.add($.__views.__alloyId2505);
    $.__views.__alloyId2506 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2506"
    });
    $.__views.__alloyId2505.add($.__views.__alloyId2506);
    $.__views.__alloyId2507 = Ti.UI.createView({
        id: "__alloyId2507"
    });
    $.__views.__alloyId2507 && $.addTopLevelView($.__views.__alloyId2507);
    $.__views.__alloyId2508 = Ti.UI.createView({
        id: "__alloyId2508"
    });
    $.__views.__alloyId2507.add($.__views.__alloyId2508);
    $.__views.__alloyId2509 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2509"
    });
    $.__views.__alloyId2508.add($.__views.__alloyId2509);
    $.__views.__alloyId2510 = Ti.UI.createView({
        id: "__alloyId2510"
    });
    $.__views.__alloyId2510 && $.addTopLevelView($.__views.__alloyId2510);
    $.__views.__alloyId2511 = Ti.UI.createView({
        id: "__alloyId2511"
    });
    $.__views.__alloyId2510.add($.__views.__alloyId2511);
    $.__views.__alloyId2512 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2512"
    });
    $.__views.__alloyId2511.add($.__views.__alloyId2512);
    $.__views.__alloyId2513 = Ti.UI.createView({
        id: "__alloyId2513"
    });
    $.__views.__alloyId2513 && $.addTopLevelView($.__views.__alloyId2513);
    $.__views.__alloyId2514 = Ti.UI.createView({
        id: "__alloyId2514"
    });
    $.__views.__alloyId2513.add($.__views.__alloyId2514);
    $.__views.__alloyId2515 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2515"
    });
    $.__views.__alloyId2514.add($.__views.__alloyId2515);
    $.__views.__alloyId2516 = Ti.UI.createView({
        id: "__alloyId2516"
    });
    $.__views.__alloyId2516 && $.addTopLevelView($.__views.__alloyId2516);
    $.__views.__alloyId2517 = Ti.UI.createView({
        id: "__alloyId2517"
    });
    $.__views.__alloyId2516.add($.__views.__alloyId2517);
    $.__views.__alloyId2518 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2518"
    });
    $.__views.__alloyId2517.add($.__views.__alloyId2518);
    $.__views.__alloyId2519 = Ti.UI.createView({
        id: "__alloyId2519"
    });
    $.__views.__alloyId2519 && $.addTopLevelView($.__views.__alloyId2519);
    $.__views.__alloyId2520 = Ti.UI.createView({
        id: "__alloyId2520"
    });
    $.__views.__alloyId2519.add($.__views.__alloyId2520);
    $.__views.__alloyId2521 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2521"
    });
    $.__views.__alloyId2520.add($.__views.__alloyId2521);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;