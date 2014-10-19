function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_219";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_219 = Ti.UI.createView({
        id: "widget_219"
    });
    $.__views.widget_219 && $.addTopLevelView($.__views.widget_219);
    $.__views.__alloyId3510 = Ti.UI.createView({
        id: "__alloyId3510"
    });
    $.__views.widget_219.add($.__views.__alloyId3510);
    $.__views.__alloyId3511 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3511"
    });
    $.__views.__alloyId3510.add($.__views.__alloyId3511);
    $.__views.__alloyId3512 = Ti.UI.createView({
        id: "__alloyId3512"
    });
    $.__views.__alloyId3512 && $.addTopLevelView($.__views.__alloyId3512);
    $.__views.__alloyId3513 = Ti.UI.createView({
        id: "__alloyId3513"
    });
    $.__views.__alloyId3512.add($.__views.__alloyId3513);
    $.__views.__alloyId3514 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3514"
    });
    $.__views.__alloyId3513.add($.__views.__alloyId3514);
    $.__views.__alloyId3515 = Ti.UI.createView({
        id: "__alloyId3515"
    });
    $.__views.__alloyId3515 && $.addTopLevelView($.__views.__alloyId3515);
    $.__views.__alloyId3516 = Ti.UI.createView({
        id: "__alloyId3516"
    });
    $.__views.__alloyId3515.add($.__views.__alloyId3516);
    $.__views.__alloyId3517 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3517"
    });
    $.__views.__alloyId3516.add($.__views.__alloyId3517);
    $.__views.__alloyId3518 = Ti.UI.createView({
        id: "__alloyId3518"
    });
    $.__views.__alloyId3518 && $.addTopLevelView($.__views.__alloyId3518);
    $.__views.__alloyId3519 = Ti.UI.createView({
        id: "__alloyId3519"
    });
    $.__views.__alloyId3518.add($.__views.__alloyId3519);
    $.__views.__alloyId3520 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3520"
    });
    $.__views.__alloyId3519.add($.__views.__alloyId3520);
    $.__views.__alloyId3521 = Ti.UI.createView({
        id: "__alloyId3521"
    });
    $.__views.__alloyId3521 && $.addTopLevelView($.__views.__alloyId3521);
    $.__views.__alloyId3522 = Ti.UI.createView({
        id: "__alloyId3522"
    });
    $.__views.__alloyId3521.add($.__views.__alloyId3522);
    $.__views.__alloyId3523 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3523"
    });
    $.__views.__alloyId3522.add($.__views.__alloyId3523);
    $.__views.__alloyId3524 = Ti.UI.createView({
        id: "__alloyId3524"
    });
    $.__views.__alloyId3524 && $.addTopLevelView($.__views.__alloyId3524);
    $.__views.__alloyId3525 = Ti.UI.createView({
        id: "__alloyId3525"
    });
    $.__views.__alloyId3524.add($.__views.__alloyId3525);
    $.__views.__alloyId3526 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3526"
    });
    $.__views.__alloyId3525.add($.__views.__alloyId3526);
    $.__views.__alloyId3527 = Ti.UI.createView({
        id: "__alloyId3527"
    });
    $.__views.__alloyId3527 && $.addTopLevelView($.__views.__alloyId3527);
    $.__views.__alloyId3528 = Ti.UI.createView({
        id: "__alloyId3528"
    });
    $.__views.__alloyId3527.add($.__views.__alloyId3528);
    $.__views.__alloyId3529 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3529"
    });
    $.__views.__alloyId3528.add($.__views.__alloyId3529);
    $.__views.__alloyId3530 = Ti.UI.createView({
        id: "__alloyId3530"
    });
    $.__views.__alloyId3530 && $.addTopLevelView($.__views.__alloyId3530);
    $.__views.__alloyId3531 = Ti.UI.createView({
        id: "__alloyId3531"
    });
    $.__views.__alloyId3530.add($.__views.__alloyId3531);
    $.__views.__alloyId3532 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3532"
    });
    $.__views.__alloyId3531.add($.__views.__alloyId3532);
    $.__views.__alloyId3533 = Ti.UI.createView({
        id: "__alloyId3533"
    });
    $.__views.__alloyId3533 && $.addTopLevelView($.__views.__alloyId3533);
    $.__views.__alloyId3534 = Ti.UI.createView({
        id: "__alloyId3534"
    });
    $.__views.__alloyId3533.add($.__views.__alloyId3534);
    $.__views.__alloyId3535 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3535"
    });
    $.__views.__alloyId3534.add($.__views.__alloyId3535);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;