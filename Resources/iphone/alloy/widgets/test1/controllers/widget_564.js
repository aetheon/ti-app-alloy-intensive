function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_564";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_564 = Ti.UI.createView({
        id: "widget_564"
    });
    $.__views.widget_564 && $.addTopLevelView($.__views.widget_564);
    $.__views.__alloyId13468 = Ti.UI.createView({
        id: "__alloyId13468"
    });
    $.__views.widget_564.add($.__views.__alloyId13468);
    $.__views.__alloyId13469 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13469"
    });
    $.__views.__alloyId13468.add($.__views.__alloyId13469);
    $.__views.__alloyId13470 = Ti.UI.createView({
        id: "__alloyId13470"
    });
    $.__views.__alloyId13470 && $.addTopLevelView($.__views.__alloyId13470);
    $.__views.__alloyId13471 = Ti.UI.createView({
        id: "__alloyId13471"
    });
    $.__views.__alloyId13470.add($.__views.__alloyId13471);
    $.__views.__alloyId13472 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13472"
    });
    $.__views.__alloyId13471.add($.__views.__alloyId13472);
    $.__views.__alloyId13473 = Ti.UI.createView({
        id: "__alloyId13473"
    });
    $.__views.__alloyId13473 && $.addTopLevelView($.__views.__alloyId13473);
    $.__views.__alloyId13474 = Ti.UI.createView({
        id: "__alloyId13474"
    });
    $.__views.__alloyId13473.add($.__views.__alloyId13474);
    $.__views.__alloyId13475 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13475"
    });
    $.__views.__alloyId13474.add($.__views.__alloyId13475);
    $.__views.__alloyId13476 = Ti.UI.createView({
        id: "__alloyId13476"
    });
    $.__views.__alloyId13476 && $.addTopLevelView($.__views.__alloyId13476);
    $.__views.__alloyId13477 = Ti.UI.createView({
        id: "__alloyId13477"
    });
    $.__views.__alloyId13476.add($.__views.__alloyId13477);
    $.__views.__alloyId13478 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13478"
    });
    $.__views.__alloyId13477.add($.__views.__alloyId13478);
    $.__views.__alloyId13479 = Ti.UI.createView({
        id: "__alloyId13479"
    });
    $.__views.__alloyId13479 && $.addTopLevelView($.__views.__alloyId13479);
    $.__views.__alloyId13480 = Ti.UI.createView({
        id: "__alloyId13480"
    });
    $.__views.__alloyId13479.add($.__views.__alloyId13480);
    $.__views.__alloyId13481 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13481"
    });
    $.__views.__alloyId13480.add($.__views.__alloyId13481);
    $.__views.__alloyId13482 = Ti.UI.createView({
        id: "__alloyId13482"
    });
    $.__views.__alloyId13482 && $.addTopLevelView($.__views.__alloyId13482);
    $.__views.__alloyId13483 = Ti.UI.createView({
        id: "__alloyId13483"
    });
    $.__views.__alloyId13482.add($.__views.__alloyId13483);
    $.__views.__alloyId13484 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13484"
    });
    $.__views.__alloyId13483.add($.__views.__alloyId13484);
    $.__views.__alloyId13485 = Ti.UI.createView({
        id: "__alloyId13485"
    });
    $.__views.__alloyId13485 && $.addTopLevelView($.__views.__alloyId13485);
    $.__views.__alloyId13486 = Ti.UI.createView({
        id: "__alloyId13486"
    });
    $.__views.__alloyId13485.add($.__views.__alloyId13486);
    $.__views.__alloyId13487 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13487"
    });
    $.__views.__alloyId13486.add($.__views.__alloyId13487);
    $.__views.__alloyId13488 = Ti.UI.createView({
        id: "__alloyId13488"
    });
    $.__views.__alloyId13488 && $.addTopLevelView($.__views.__alloyId13488);
    $.__views.__alloyId13489 = Ti.UI.createView({
        id: "__alloyId13489"
    });
    $.__views.__alloyId13488.add($.__views.__alloyId13489);
    $.__views.__alloyId13490 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13490"
    });
    $.__views.__alloyId13489.add($.__views.__alloyId13490);
    $.__views.__alloyId13491 = Ti.UI.createView({
        id: "__alloyId13491"
    });
    $.__views.__alloyId13491 && $.addTopLevelView($.__views.__alloyId13491);
    $.__views.__alloyId13492 = Ti.UI.createView({
        id: "__alloyId13492"
    });
    $.__views.__alloyId13491.add($.__views.__alloyId13492);
    $.__views.__alloyId13493 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13493"
    });
    $.__views.__alloyId13492.add($.__views.__alloyId13493);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;