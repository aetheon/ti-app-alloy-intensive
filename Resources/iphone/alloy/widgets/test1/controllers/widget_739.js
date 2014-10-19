function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_739";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_739 = Ti.UI.createView({
        id: "widget_739"
    });
    $.__views.widget_739 && $.addTopLevelView($.__views.widget_739);
    $.__views.__alloyId18512 = Ti.UI.createView({
        id: "__alloyId18512"
    });
    $.__views.widget_739.add($.__views.__alloyId18512);
    $.__views.__alloyId18513 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18513"
    });
    $.__views.__alloyId18512.add($.__views.__alloyId18513);
    $.__views.__alloyId18514 = Ti.UI.createView({
        id: "__alloyId18514"
    });
    $.__views.__alloyId18514 && $.addTopLevelView($.__views.__alloyId18514);
    $.__views.__alloyId18515 = Ti.UI.createView({
        id: "__alloyId18515"
    });
    $.__views.__alloyId18514.add($.__views.__alloyId18515);
    $.__views.__alloyId18516 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18516"
    });
    $.__views.__alloyId18515.add($.__views.__alloyId18516);
    $.__views.__alloyId18517 = Ti.UI.createView({
        id: "__alloyId18517"
    });
    $.__views.__alloyId18517 && $.addTopLevelView($.__views.__alloyId18517);
    $.__views.__alloyId18518 = Ti.UI.createView({
        id: "__alloyId18518"
    });
    $.__views.__alloyId18517.add($.__views.__alloyId18518);
    $.__views.__alloyId18519 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18519"
    });
    $.__views.__alloyId18518.add($.__views.__alloyId18519);
    $.__views.__alloyId18520 = Ti.UI.createView({
        id: "__alloyId18520"
    });
    $.__views.__alloyId18520 && $.addTopLevelView($.__views.__alloyId18520);
    $.__views.__alloyId18521 = Ti.UI.createView({
        id: "__alloyId18521"
    });
    $.__views.__alloyId18520.add($.__views.__alloyId18521);
    $.__views.__alloyId18522 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18522"
    });
    $.__views.__alloyId18521.add($.__views.__alloyId18522);
    $.__views.__alloyId18523 = Ti.UI.createView({
        id: "__alloyId18523"
    });
    $.__views.__alloyId18523 && $.addTopLevelView($.__views.__alloyId18523);
    $.__views.__alloyId18524 = Ti.UI.createView({
        id: "__alloyId18524"
    });
    $.__views.__alloyId18523.add($.__views.__alloyId18524);
    $.__views.__alloyId18525 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18525"
    });
    $.__views.__alloyId18524.add($.__views.__alloyId18525);
    $.__views.__alloyId18526 = Ti.UI.createView({
        id: "__alloyId18526"
    });
    $.__views.__alloyId18526 && $.addTopLevelView($.__views.__alloyId18526);
    $.__views.__alloyId18527 = Ti.UI.createView({
        id: "__alloyId18527"
    });
    $.__views.__alloyId18526.add($.__views.__alloyId18527);
    $.__views.__alloyId18528 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18528"
    });
    $.__views.__alloyId18527.add($.__views.__alloyId18528);
    $.__views.__alloyId18529 = Ti.UI.createView({
        id: "__alloyId18529"
    });
    $.__views.__alloyId18529 && $.addTopLevelView($.__views.__alloyId18529);
    $.__views.__alloyId18530 = Ti.UI.createView({
        id: "__alloyId18530"
    });
    $.__views.__alloyId18529.add($.__views.__alloyId18530);
    $.__views.__alloyId18531 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18531"
    });
    $.__views.__alloyId18530.add($.__views.__alloyId18531);
    $.__views.__alloyId18532 = Ti.UI.createView({
        id: "__alloyId18532"
    });
    $.__views.__alloyId18532 && $.addTopLevelView($.__views.__alloyId18532);
    $.__views.__alloyId18533 = Ti.UI.createView({
        id: "__alloyId18533"
    });
    $.__views.__alloyId18532.add($.__views.__alloyId18533);
    $.__views.__alloyId18534 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18534"
    });
    $.__views.__alloyId18533.add($.__views.__alloyId18534);
    $.__views.__alloyId18535 = Ti.UI.createView({
        id: "__alloyId18535"
    });
    $.__views.__alloyId18535 && $.addTopLevelView($.__views.__alloyId18535);
    $.__views.__alloyId18536 = Ti.UI.createView({
        id: "__alloyId18536"
    });
    $.__views.__alloyId18535.add($.__views.__alloyId18536);
    $.__views.__alloyId18537 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18537"
    });
    $.__views.__alloyId18536.add($.__views.__alloyId18537);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;