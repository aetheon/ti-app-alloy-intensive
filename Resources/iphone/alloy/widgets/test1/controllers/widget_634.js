function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_634";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_634 = Ti.UI.createView({
        id: "widget_634"
    });
    $.__views.widget_634 && $.addTopLevelView($.__views.widget_634);
    $.__views.__alloyId15496 = Ti.UI.createView({
        id: "__alloyId15496"
    });
    $.__views.widget_634.add($.__views.__alloyId15496);
    $.__views.__alloyId15497 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15497"
    });
    $.__views.__alloyId15496.add($.__views.__alloyId15497);
    $.__views.__alloyId15498 = Ti.UI.createView({
        id: "__alloyId15498"
    });
    $.__views.__alloyId15498 && $.addTopLevelView($.__views.__alloyId15498);
    $.__views.__alloyId15499 = Ti.UI.createView({
        id: "__alloyId15499"
    });
    $.__views.__alloyId15498.add($.__views.__alloyId15499);
    $.__views.__alloyId15500 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15500"
    });
    $.__views.__alloyId15499.add($.__views.__alloyId15500);
    $.__views.__alloyId15501 = Ti.UI.createView({
        id: "__alloyId15501"
    });
    $.__views.__alloyId15501 && $.addTopLevelView($.__views.__alloyId15501);
    $.__views.__alloyId15502 = Ti.UI.createView({
        id: "__alloyId15502"
    });
    $.__views.__alloyId15501.add($.__views.__alloyId15502);
    $.__views.__alloyId15503 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15503"
    });
    $.__views.__alloyId15502.add($.__views.__alloyId15503);
    $.__views.__alloyId15504 = Ti.UI.createView({
        id: "__alloyId15504"
    });
    $.__views.__alloyId15504 && $.addTopLevelView($.__views.__alloyId15504);
    $.__views.__alloyId15505 = Ti.UI.createView({
        id: "__alloyId15505"
    });
    $.__views.__alloyId15504.add($.__views.__alloyId15505);
    $.__views.__alloyId15506 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15506"
    });
    $.__views.__alloyId15505.add($.__views.__alloyId15506);
    $.__views.__alloyId15507 = Ti.UI.createView({
        id: "__alloyId15507"
    });
    $.__views.__alloyId15507 && $.addTopLevelView($.__views.__alloyId15507);
    $.__views.__alloyId15508 = Ti.UI.createView({
        id: "__alloyId15508"
    });
    $.__views.__alloyId15507.add($.__views.__alloyId15508);
    $.__views.__alloyId15509 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15509"
    });
    $.__views.__alloyId15508.add($.__views.__alloyId15509);
    $.__views.__alloyId15510 = Ti.UI.createView({
        id: "__alloyId15510"
    });
    $.__views.__alloyId15510 && $.addTopLevelView($.__views.__alloyId15510);
    $.__views.__alloyId15511 = Ti.UI.createView({
        id: "__alloyId15511"
    });
    $.__views.__alloyId15510.add($.__views.__alloyId15511);
    $.__views.__alloyId15512 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15512"
    });
    $.__views.__alloyId15511.add($.__views.__alloyId15512);
    $.__views.__alloyId15513 = Ti.UI.createView({
        id: "__alloyId15513"
    });
    $.__views.__alloyId15513 && $.addTopLevelView($.__views.__alloyId15513);
    $.__views.__alloyId15514 = Ti.UI.createView({
        id: "__alloyId15514"
    });
    $.__views.__alloyId15513.add($.__views.__alloyId15514);
    $.__views.__alloyId15515 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15515"
    });
    $.__views.__alloyId15514.add($.__views.__alloyId15515);
    $.__views.__alloyId15516 = Ti.UI.createView({
        id: "__alloyId15516"
    });
    $.__views.__alloyId15516 && $.addTopLevelView($.__views.__alloyId15516);
    $.__views.__alloyId15517 = Ti.UI.createView({
        id: "__alloyId15517"
    });
    $.__views.__alloyId15516.add($.__views.__alloyId15517);
    $.__views.__alloyId15518 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15518"
    });
    $.__views.__alloyId15517.add($.__views.__alloyId15518);
    $.__views.__alloyId15519 = Ti.UI.createView({
        id: "__alloyId15519"
    });
    $.__views.__alloyId15519 && $.addTopLevelView($.__views.__alloyId15519);
    $.__views.__alloyId15520 = Ti.UI.createView({
        id: "__alloyId15520"
    });
    $.__views.__alloyId15519.add($.__views.__alloyId15520);
    $.__views.__alloyId15521 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15521"
    });
    $.__views.__alloyId15520.add($.__views.__alloyId15521);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;