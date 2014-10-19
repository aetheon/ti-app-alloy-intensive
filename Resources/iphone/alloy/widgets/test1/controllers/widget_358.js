function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_358";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_358 = Ti.UI.createView({
        id: "widget_358"
    });
    $.__views.widget_358 && $.addTopLevelView($.__views.widget_358);
    $.__views.__alloyId7514 = Ti.UI.createView({
        id: "__alloyId7514"
    });
    $.__views.widget_358.add($.__views.__alloyId7514);
    $.__views.__alloyId7515 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7515"
    });
    $.__views.__alloyId7514.add($.__views.__alloyId7515);
    $.__views.__alloyId7516 = Ti.UI.createView({
        id: "__alloyId7516"
    });
    $.__views.__alloyId7516 && $.addTopLevelView($.__views.__alloyId7516);
    $.__views.__alloyId7517 = Ti.UI.createView({
        id: "__alloyId7517"
    });
    $.__views.__alloyId7516.add($.__views.__alloyId7517);
    $.__views.__alloyId7518 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7518"
    });
    $.__views.__alloyId7517.add($.__views.__alloyId7518);
    $.__views.__alloyId7519 = Ti.UI.createView({
        id: "__alloyId7519"
    });
    $.__views.__alloyId7519 && $.addTopLevelView($.__views.__alloyId7519);
    $.__views.__alloyId7520 = Ti.UI.createView({
        id: "__alloyId7520"
    });
    $.__views.__alloyId7519.add($.__views.__alloyId7520);
    $.__views.__alloyId7521 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7521"
    });
    $.__views.__alloyId7520.add($.__views.__alloyId7521);
    $.__views.__alloyId7522 = Ti.UI.createView({
        id: "__alloyId7522"
    });
    $.__views.__alloyId7522 && $.addTopLevelView($.__views.__alloyId7522);
    $.__views.__alloyId7523 = Ti.UI.createView({
        id: "__alloyId7523"
    });
    $.__views.__alloyId7522.add($.__views.__alloyId7523);
    $.__views.__alloyId7524 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7524"
    });
    $.__views.__alloyId7523.add($.__views.__alloyId7524);
    $.__views.__alloyId7525 = Ti.UI.createView({
        id: "__alloyId7525"
    });
    $.__views.__alloyId7525 && $.addTopLevelView($.__views.__alloyId7525);
    $.__views.__alloyId7526 = Ti.UI.createView({
        id: "__alloyId7526"
    });
    $.__views.__alloyId7525.add($.__views.__alloyId7526);
    $.__views.__alloyId7527 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7527"
    });
    $.__views.__alloyId7526.add($.__views.__alloyId7527);
    $.__views.__alloyId7528 = Ti.UI.createView({
        id: "__alloyId7528"
    });
    $.__views.__alloyId7528 && $.addTopLevelView($.__views.__alloyId7528);
    $.__views.__alloyId7529 = Ti.UI.createView({
        id: "__alloyId7529"
    });
    $.__views.__alloyId7528.add($.__views.__alloyId7529);
    $.__views.__alloyId7530 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7530"
    });
    $.__views.__alloyId7529.add($.__views.__alloyId7530);
    $.__views.__alloyId7531 = Ti.UI.createView({
        id: "__alloyId7531"
    });
    $.__views.__alloyId7531 && $.addTopLevelView($.__views.__alloyId7531);
    $.__views.__alloyId7532 = Ti.UI.createView({
        id: "__alloyId7532"
    });
    $.__views.__alloyId7531.add($.__views.__alloyId7532);
    $.__views.__alloyId7533 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7533"
    });
    $.__views.__alloyId7532.add($.__views.__alloyId7533);
    $.__views.__alloyId7534 = Ti.UI.createView({
        id: "__alloyId7534"
    });
    $.__views.__alloyId7534 && $.addTopLevelView($.__views.__alloyId7534);
    $.__views.__alloyId7535 = Ti.UI.createView({
        id: "__alloyId7535"
    });
    $.__views.__alloyId7534.add($.__views.__alloyId7535);
    $.__views.__alloyId7536 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7536"
    });
    $.__views.__alloyId7535.add($.__views.__alloyId7536);
    $.__views.__alloyId7537 = Ti.UI.createView({
        id: "__alloyId7537"
    });
    $.__views.__alloyId7537 && $.addTopLevelView($.__views.__alloyId7537);
    $.__views.__alloyId7538 = Ti.UI.createView({
        id: "__alloyId7538"
    });
    $.__views.__alloyId7537.add($.__views.__alloyId7538);
    $.__views.__alloyId7539 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7539"
    });
    $.__views.__alloyId7538.add($.__views.__alloyId7539);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;