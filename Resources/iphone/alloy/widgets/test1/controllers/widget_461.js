function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_461";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_461 = Ti.UI.createView({
        id: "widget_461"
    });
    $.__views.widget_461 && $.addTopLevelView($.__views.widget_461);
    $.__views.__alloyId10504 = Ti.UI.createView({
        id: "__alloyId10504"
    });
    $.__views.widget_461.add($.__views.__alloyId10504);
    $.__views.__alloyId10505 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10505"
    });
    $.__views.__alloyId10504.add($.__views.__alloyId10505);
    $.__views.__alloyId10506 = Ti.UI.createView({
        id: "__alloyId10506"
    });
    $.__views.__alloyId10506 && $.addTopLevelView($.__views.__alloyId10506);
    $.__views.__alloyId10507 = Ti.UI.createView({
        id: "__alloyId10507"
    });
    $.__views.__alloyId10506.add($.__views.__alloyId10507);
    $.__views.__alloyId10508 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10508"
    });
    $.__views.__alloyId10507.add($.__views.__alloyId10508);
    $.__views.__alloyId10509 = Ti.UI.createView({
        id: "__alloyId10509"
    });
    $.__views.__alloyId10509 && $.addTopLevelView($.__views.__alloyId10509);
    $.__views.__alloyId10510 = Ti.UI.createView({
        id: "__alloyId10510"
    });
    $.__views.__alloyId10509.add($.__views.__alloyId10510);
    $.__views.__alloyId10511 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10511"
    });
    $.__views.__alloyId10510.add($.__views.__alloyId10511);
    $.__views.__alloyId10512 = Ti.UI.createView({
        id: "__alloyId10512"
    });
    $.__views.__alloyId10512 && $.addTopLevelView($.__views.__alloyId10512);
    $.__views.__alloyId10513 = Ti.UI.createView({
        id: "__alloyId10513"
    });
    $.__views.__alloyId10512.add($.__views.__alloyId10513);
    $.__views.__alloyId10514 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10514"
    });
    $.__views.__alloyId10513.add($.__views.__alloyId10514);
    $.__views.__alloyId10515 = Ti.UI.createView({
        id: "__alloyId10515"
    });
    $.__views.__alloyId10515 && $.addTopLevelView($.__views.__alloyId10515);
    $.__views.__alloyId10516 = Ti.UI.createView({
        id: "__alloyId10516"
    });
    $.__views.__alloyId10515.add($.__views.__alloyId10516);
    $.__views.__alloyId10517 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10517"
    });
    $.__views.__alloyId10516.add($.__views.__alloyId10517);
    $.__views.__alloyId10518 = Ti.UI.createView({
        id: "__alloyId10518"
    });
    $.__views.__alloyId10518 && $.addTopLevelView($.__views.__alloyId10518);
    $.__views.__alloyId10519 = Ti.UI.createView({
        id: "__alloyId10519"
    });
    $.__views.__alloyId10518.add($.__views.__alloyId10519);
    $.__views.__alloyId10520 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10520"
    });
    $.__views.__alloyId10519.add($.__views.__alloyId10520);
    $.__views.__alloyId10521 = Ti.UI.createView({
        id: "__alloyId10521"
    });
    $.__views.__alloyId10521 && $.addTopLevelView($.__views.__alloyId10521);
    $.__views.__alloyId10522 = Ti.UI.createView({
        id: "__alloyId10522"
    });
    $.__views.__alloyId10521.add($.__views.__alloyId10522);
    $.__views.__alloyId10523 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10523"
    });
    $.__views.__alloyId10522.add($.__views.__alloyId10523);
    $.__views.__alloyId10524 = Ti.UI.createView({
        id: "__alloyId10524"
    });
    $.__views.__alloyId10524 && $.addTopLevelView($.__views.__alloyId10524);
    $.__views.__alloyId10525 = Ti.UI.createView({
        id: "__alloyId10525"
    });
    $.__views.__alloyId10524.add($.__views.__alloyId10525);
    $.__views.__alloyId10526 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10526"
    });
    $.__views.__alloyId10525.add($.__views.__alloyId10526);
    $.__views.__alloyId10527 = Ti.UI.createView({
        id: "__alloyId10527"
    });
    $.__views.__alloyId10527 && $.addTopLevelView($.__views.__alloyId10527);
    $.__views.__alloyId10528 = Ti.UI.createView({
        id: "__alloyId10528"
    });
    $.__views.__alloyId10527.add($.__views.__alloyId10528);
    $.__views.__alloyId10529 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10529"
    });
    $.__views.__alloyId10528.add($.__views.__alloyId10529);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;