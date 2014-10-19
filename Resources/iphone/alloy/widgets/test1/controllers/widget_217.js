function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_217";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_217 = Ti.UI.createView({
        id: "widget_217"
    });
    $.__views.widget_217 && $.addTopLevelView($.__views.widget_217);
    $.__views.__alloyId3458 = Ti.UI.createView({
        id: "__alloyId3458"
    });
    $.__views.widget_217.add($.__views.__alloyId3458);
    $.__views.__alloyId3459 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3459"
    });
    $.__views.__alloyId3458.add($.__views.__alloyId3459);
    $.__views.__alloyId3460 = Ti.UI.createView({
        id: "__alloyId3460"
    });
    $.__views.__alloyId3460 && $.addTopLevelView($.__views.__alloyId3460);
    $.__views.__alloyId3461 = Ti.UI.createView({
        id: "__alloyId3461"
    });
    $.__views.__alloyId3460.add($.__views.__alloyId3461);
    $.__views.__alloyId3462 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3462"
    });
    $.__views.__alloyId3461.add($.__views.__alloyId3462);
    $.__views.__alloyId3463 = Ti.UI.createView({
        id: "__alloyId3463"
    });
    $.__views.__alloyId3463 && $.addTopLevelView($.__views.__alloyId3463);
    $.__views.__alloyId3464 = Ti.UI.createView({
        id: "__alloyId3464"
    });
    $.__views.__alloyId3463.add($.__views.__alloyId3464);
    $.__views.__alloyId3465 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3465"
    });
    $.__views.__alloyId3464.add($.__views.__alloyId3465);
    $.__views.__alloyId3466 = Ti.UI.createView({
        id: "__alloyId3466"
    });
    $.__views.__alloyId3466 && $.addTopLevelView($.__views.__alloyId3466);
    $.__views.__alloyId3467 = Ti.UI.createView({
        id: "__alloyId3467"
    });
    $.__views.__alloyId3466.add($.__views.__alloyId3467);
    $.__views.__alloyId3468 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3468"
    });
    $.__views.__alloyId3467.add($.__views.__alloyId3468);
    $.__views.__alloyId3469 = Ti.UI.createView({
        id: "__alloyId3469"
    });
    $.__views.__alloyId3469 && $.addTopLevelView($.__views.__alloyId3469);
    $.__views.__alloyId3470 = Ti.UI.createView({
        id: "__alloyId3470"
    });
    $.__views.__alloyId3469.add($.__views.__alloyId3470);
    $.__views.__alloyId3471 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3471"
    });
    $.__views.__alloyId3470.add($.__views.__alloyId3471);
    $.__views.__alloyId3472 = Ti.UI.createView({
        id: "__alloyId3472"
    });
    $.__views.__alloyId3472 && $.addTopLevelView($.__views.__alloyId3472);
    $.__views.__alloyId3473 = Ti.UI.createView({
        id: "__alloyId3473"
    });
    $.__views.__alloyId3472.add($.__views.__alloyId3473);
    $.__views.__alloyId3474 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3474"
    });
    $.__views.__alloyId3473.add($.__views.__alloyId3474);
    $.__views.__alloyId3475 = Ti.UI.createView({
        id: "__alloyId3475"
    });
    $.__views.__alloyId3475 && $.addTopLevelView($.__views.__alloyId3475);
    $.__views.__alloyId3476 = Ti.UI.createView({
        id: "__alloyId3476"
    });
    $.__views.__alloyId3475.add($.__views.__alloyId3476);
    $.__views.__alloyId3477 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3477"
    });
    $.__views.__alloyId3476.add($.__views.__alloyId3477);
    $.__views.__alloyId3478 = Ti.UI.createView({
        id: "__alloyId3478"
    });
    $.__views.__alloyId3478 && $.addTopLevelView($.__views.__alloyId3478);
    $.__views.__alloyId3479 = Ti.UI.createView({
        id: "__alloyId3479"
    });
    $.__views.__alloyId3478.add($.__views.__alloyId3479);
    $.__views.__alloyId3480 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3480"
    });
    $.__views.__alloyId3479.add($.__views.__alloyId3480);
    $.__views.__alloyId3481 = Ti.UI.createView({
        id: "__alloyId3481"
    });
    $.__views.__alloyId3481 && $.addTopLevelView($.__views.__alloyId3481);
    $.__views.__alloyId3482 = Ti.UI.createView({
        id: "__alloyId3482"
    });
    $.__views.__alloyId3481.add($.__views.__alloyId3482);
    $.__views.__alloyId3483 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3483"
    });
    $.__views.__alloyId3482.add($.__views.__alloyId3483);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;