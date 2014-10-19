function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_253";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_253 = Ti.UI.createView({
        id: "widget_253"
    });
    $.__views.widget_253 && $.addTopLevelView($.__views.widget_253);
    $.__views.__alloyId4498 = Ti.UI.createView({
        id: "__alloyId4498"
    });
    $.__views.widget_253.add($.__views.__alloyId4498);
    $.__views.__alloyId4499 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4499"
    });
    $.__views.__alloyId4498.add($.__views.__alloyId4499);
    $.__views.__alloyId4500 = Ti.UI.createView({
        id: "__alloyId4500"
    });
    $.__views.__alloyId4500 && $.addTopLevelView($.__views.__alloyId4500);
    $.__views.__alloyId4501 = Ti.UI.createView({
        id: "__alloyId4501"
    });
    $.__views.__alloyId4500.add($.__views.__alloyId4501);
    $.__views.__alloyId4502 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4502"
    });
    $.__views.__alloyId4501.add($.__views.__alloyId4502);
    $.__views.__alloyId4503 = Ti.UI.createView({
        id: "__alloyId4503"
    });
    $.__views.__alloyId4503 && $.addTopLevelView($.__views.__alloyId4503);
    $.__views.__alloyId4504 = Ti.UI.createView({
        id: "__alloyId4504"
    });
    $.__views.__alloyId4503.add($.__views.__alloyId4504);
    $.__views.__alloyId4505 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4505"
    });
    $.__views.__alloyId4504.add($.__views.__alloyId4505);
    $.__views.__alloyId4506 = Ti.UI.createView({
        id: "__alloyId4506"
    });
    $.__views.__alloyId4506 && $.addTopLevelView($.__views.__alloyId4506);
    $.__views.__alloyId4507 = Ti.UI.createView({
        id: "__alloyId4507"
    });
    $.__views.__alloyId4506.add($.__views.__alloyId4507);
    $.__views.__alloyId4508 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4508"
    });
    $.__views.__alloyId4507.add($.__views.__alloyId4508);
    $.__views.__alloyId4509 = Ti.UI.createView({
        id: "__alloyId4509"
    });
    $.__views.__alloyId4509 && $.addTopLevelView($.__views.__alloyId4509);
    $.__views.__alloyId4510 = Ti.UI.createView({
        id: "__alloyId4510"
    });
    $.__views.__alloyId4509.add($.__views.__alloyId4510);
    $.__views.__alloyId4511 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4511"
    });
    $.__views.__alloyId4510.add($.__views.__alloyId4511);
    $.__views.__alloyId4512 = Ti.UI.createView({
        id: "__alloyId4512"
    });
    $.__views.__alloyId4512 && $.addTopLevelView($.__views.__alloyId4512);
    $.__views.__alloyId4513 = Ti.UI.createView({
        id: "__alloyId4513"
    });
    $.__views.__alloyId4512.add($.__views.__alloyId4513);
    $.__views.__alloyId4514 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4514"
    });
    $.__views.__alloyId4513.add($.__views.__alloyId4514);
    $.__views.__alloyId4515 = Ti.UI.createView({
        id: "__alloyId4515"
    });
    $.__views.__alloyId4515 && $.addTopLevelView($.__views.__alloyId4515);
    $.__views.__alloyId4516 = Ti.UI.createView({
        id: "__alloyId4516"
    });
    $.__views.__alloyId4515.add($.__views.__alloyId4516);
    $.__views.__alloyId4517 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4517"
    });
    $.__views.__alloyId4516.add($.__views.__alloyId4517);
    $.__views.__alloyId4518 = Ti.UI.createView({
        id: "__alloyId4518"
    });
    $.__views.__alloyId4518 && $.addTopLevelView($.__views.__alloyId4518);
    $.__views.__alloyId4519 = Ti.UI.createView({
        id: "__alloyId4519"
    });
    $.__views.__alloyId4518.add($.__views.__alloyId4519);
    $.__views.__alloyId4520 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4520"
    });
    $.__views.__alloyId4519.add($.__views.__alloyId4520);
    $.__views.__alloyId4521 = Ti.UI.createView({
        id: "__alloyId4521"
    });
    $.__views.__alloyId4521 && $.addTopLevelView($.__views.__alloyId4521);
    $.__views.__alloyId4522 = Ti.UI.createView({
        id: "__alloyId4522"
    });
    $.__views.__alloyId4521.add($.__views.__alloyId4522);
    $.__views.__alloyId4523 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4523"
    });
    $.__views.__alloyId4522.add($.__views.__alloyId4523);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;