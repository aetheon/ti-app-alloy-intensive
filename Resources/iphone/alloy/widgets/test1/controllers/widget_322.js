function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_322";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_322 = Ti.UI.createView({
        id: "widget_322"
    });
    $.__views.widget_322 && $.addTopLevelView($.__views.widget_322);
    $.__views.__alloyId6500 = Ti.UI.createView({
        id: "__alloyId6500"
    });
    $.__views.widget_322.add($.__views.__alloyId6500);
    $.__views.__alloyId6501 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6501"
    });
    $.__views.__alloyId6500.add($.__views.__alloyId6501);
    $.__views.__alloyId6502 = Ti.UI.createView({
        id: "__alloyId6502"
    });
    $.__views.__alloyId6502 && $.addTopLevelView($.__views.__alloyId6502);
    $.__views.__alloyId6503 = Ti.UI.createView({
        id: "__alloyId6503"
    });
    $.__views.__alloyId6502.add($.__views.__alloyId6503);
    $.__views.__alloyId6504 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6504"
    });
    $.__views.__alloyId6503.add($.__views.__alloyId6504);
    $.__views.__alloyId6505 = Ti.UI.createView({
        id: "__alloyId6505"
    });
    $.__views.__alloyId6505 && $.addTopLevelView($.__views.__alloyId6505);
    $.__views.__alloyId6506 = Ti.UI.createView({
        id: "__alloyId6506"
    });
    $.__views.__alloyId6505.add($.__views.__alloyId6506);
    $.__views.__alloyId6507 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6507"
    });
    $.__views.__alloyId6506.add($.__views.__alloyId6507);
    $.__views.__alloyId6508 = Ti.UI.createView({
        id: "__alloyId6508"
    });
    $.__views.__alloyId6508 && $.addTopLevelView($.__views.__alloyId6508);
    $.__views.__alloyId6509 = Ti.UI.createView({
        id: "__alloyId6509"
    });
    $.__views.__alloyId6508.add($.__views.__alloyId6509);
    $.__views.__alloyId6510 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6510"
    });
    $.__views.__alloyId6509.add($.__views.__alloyId6510);
    $.__views.__alloyId6511 = Ti.UI.createView({
        id: "__alloyId6511"
    });
    $.__views.__alloyId6511 && $.addTopLevelView($.__views.__alloyId6511);
    $.__views.__alloyId6512 = Ti.UI.createView({
        id: "__alloyId6512"
    });
    $.__views.__alloyId6511.add($.__views.__alloyId6512);
    $.__views.__alloyId6513 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6513"
    });
    $.__views.__alloyId6512.add($.__views.__alloyId6513);
    $.__views.__alloyId6514 = Ti.UI.createView({
        id: "__alloyId6514"
    });
    $.__views.__alloyId6514 && $.addTopLevelView($.__views.__alloyId6514);
    $.__views.__alloyId6515 = Ti.UI.createView({
        id: "__alloyId6515"
    });
    $.__views.__alloyId6514.add($.__views.__alloyId6515);
    $.__views.__alloyId6516 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6516"
    });
    $.__views.__alloyId6515.add($.__views.__alloyId6516);
    $.__views.__alloyId6517 = Ti.UI.createView({
        id: "__alloyId6517"
    });
    $.__views.__alloyId6517 && $.addTopLevelView($.__views.__alloyId6517);
    $.__views.__alloyId6518 = Ti.UI.createView({
        id: "__alloyId6518"
    });
    $.__views.__alloyId6517.add($.__views.__alloyId6518);
    $.__views.__alloyId6519 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6519"
    });
    $.__views.__alloyId6518.add($.__views.__alloyId6519);
    $.__views.__alloyId6520 = Ti.UI.createView({
        id: "__alloyId6520"
    });
    $.__views.__alloyId6520 && $.addTopLevelView($.__views.__alloyId6520);
    $.__views.__alloyId6521 = Ti.UI.createView({
        id: "__alloyId6521"
    });
    $.__views.__alloyId6520.add($.__views.__alloyId6521);
    $.__views.__alloyId6522 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6522"
    });
    $.__views.__alloyId6521.add($.__views.__alloyId6522);
    $.__views.__alloyId6523 = Ti.UI.createView({
        id: "__alloyId6523"
    });
    $.__views.__alloyId6523 && $.addTopLevelView($.__views.__alloyId6523);
    $.__views.__alloyId6524 = Ti.UI.createView({
        id: "__alloyId6524"
    });
    $.__views.__alloyId6523.add($.__views.__alloyId6524);
    $.__views.__alloyId6525 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6525"
    });
    $.__views.__alloyId6524.add($.__views.__alloyId6525);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;