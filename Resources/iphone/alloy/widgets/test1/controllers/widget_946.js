function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_946";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_946 = Ti.UI.createView({
        id: "widget_946"
    });
    $.__views.widget_946 && $.addTopLevelView($.__views.widget_946);
    $.__views.__alloyId24492 = Ti.UI.createView({
        id: "__alloyId24492"
    });
    $.__views.widget_946.add($.__views.__alloyId24492);
    $.__views.__alloyId24493 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24493"
    });
    $.__views.__alloyId24492.add($.__views.__alloyId24493);
    $.__views.__alloyId24494 = Ti.UI.createView({
        id: "__alloyId24494"
    });
    $.__views.__alloyId24494 && $.addTopLevelView($.__views.__alloyId24494);
    $.__views.__alloyId24495 = Ti.UI.createView({
        id: "__alloyId24495"
    });
    $.__views.__alloyId24494.add($.__views.__alloyId24495);
    $.__views.__alloyId24496 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24496"
    });
    $.__views.__alloyId24495.add($.__views.__alloyId24496);
    $.__views.__alloyId24497 = Ti.UI.createView({
        id: "__alloyId24497"
    });
    $.__views.__alloyId24497 && $.addTopLevelView($.__views.__alloyId24497);
    $.__views.__alloyId24498 = Ti.UI.createView({
        id: "__alloyId24498"
    });
    $.__views.__alloyId24497.add($.__views.__alloyId24498);
    $.__views.__alloyId24499 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24499"
    });
    $.__views.__alloyId24498.add($.__views.__alloyId24499);
    $.__views.__alloyId24500 = Ti.UI.createView({
        id: "__alloyId24500"
    });
    $.__views.__alloyId24500 && $.addTopLevelView($.__views.__alloyId24500);
    $.__views.__alloyId24501 = Ti.UI.createView({
        id: "__alloyId24501"
    });
    $.__views.__alloyId24500.add($.__views.__alloyId24501);
    $.__views.__alloyId24502 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24502"
    });
    $.__views.__alloyId24501.add($.__views.__alloyId24502);
    $.__views.__alloyId24503 = Ti.UI.createView({
        id: "__alloyId24503"
    });
    $.__views.__alloyId24503 && $.addTopLevelView($.__views.__alloyId24503);
    $.__views.__alloyId24504 = Ti.UI.createView({
        id: "__alloyId24504"
    });
    $.__views.__alloyId24503.add($.__views.__alloyId24504);
    $.__views.__alloyId24505 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24505"
    });
    $.__views.__alloyId24504.add($.__views.__alloyId24505);
    $.__views.__alloyId24506 = Ti.UI.createView({
        id: "__alloyId24506"
    });
    $.__views.__alloyId24506 && $.addTopLevelView($.__views.__alloyId24506);
    $.__views.__alloyId24507 = Ti.UI.createView({
        id: "__alloyId24507"
    });
    $.__views.__alloyId24506.add($.__views.__alloyId24507);
    $.__views.__alloyId24508 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24508"
    });
    $.__views.__alloyId24507.add($.__views.__alloyId24508);
    $.__views.__alloyId24509 = Ti.UI.createView({
        id: "__alloyId24509"
    });
    $.__views.__alloyId24509 && $.addTopLevelView($.__views.__alloyId24509);
    $.__views.__alloyId24510 = Ti.UI.createView({
        id: "__alloyId24510"
    });
    $.__views.__alloyId24509.add($.__views.__alloyId24510);
    $.__views.__alloyId24511 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24511"
    });
    $.__views.__alloyId24510.add($.__views.__alloyId24511);
    $.__views.__alloyId24512 = Ti.UI.createView({
        id: "__alloyId24512"
    });
    $.__views.__alloyId24512 && $.addTopLevelView($.__views.__alloyId24512);
    $.__views.__alloyId24513 = Ti.UI.createView({
        id: "__alloyId24513"
    });
    $.__views.__alloyId24512.add($.__views.__alloyId24513);
    $.__views.__alloyId24514 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24514"
    });
    $.__views.__alloyId24513.add($.__views.__alloyId24514);
    $.__views.__alloyId24515 = Ti.UI.createView({
        id: "__alloyId24515"
    });
    $.__views.__alloyId24515 && $.addTopLevelView($.__views.__alloyId24515);
    $.__views.__alloyId24516 = Ti.UI.createView({
        id: "__alloyId24516"
    });
    $.__views.__alloyId24515.add($.__views.__alloyId24516);
    $.__views.__alloyId24517 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24517"
    });
    $.__views.__alloyId24516.add($.__views.__alloyId24517);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;