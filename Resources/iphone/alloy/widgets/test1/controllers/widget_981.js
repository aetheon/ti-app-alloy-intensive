function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_981";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_981 = Ti.UI.createView({
        id: "widget_981"
    });
    $.__views.widget_981 && $.addTopLevelView($.__views.widget_981);
    $.__views.__alloyId25506 = Ti.UI.createView({
        id: "__alloyId25506"
    });
    $.__views.widget_981.add($.__views.__alloyId25506);
    $.__views.__alloyId25507 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25507"
    });
    $.__views.__alloyId25506.add($.__views.__alloyId25507);
    $.__views.__alloyId25508 = Ti.UI.createView({
        id: "__alloyId25508"
    });
    $.__views.__alloyId25508 && $.addTopLevelView($.__views.__alloyId25508);
    $.__views.__alloyId25509 = Ti.UI.createView({
        id: "__alloyId25509"
    });
    $.__views.__alloyId25508.add($.__views.__alloyId25509);
    $.__views.__alloyId25510 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25510"
    });
    $.__views.__alloyId25509.add($.__views.__alloyId25510);
    $.__views.__alloyId25511 = Ti.UI.createView({
        id: "__alloyId25511"
    });
    $.__views.__alloyId25511 && $.addTopLevelView($.__views.__alloyId25511);
    $.__views.__alloyId25512 = Ti.UI.createView({
        id: "__alloyId25512"
    });
    $.__views.__alloyId25511.add($.__views.__alloyId25512);
    $.__views.__alloyId25513 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25513"
    });
    $.__views.__alloyId25512.add($.__views.__alloyId25513);
    $.__views.__alloyId25514 = Ti.UI.createView({
        id: "__alloyId25514"
    });
    $.__views.__alloyId25514 && $.addTopLevelView($.__views.__alloyId25514);
    $.__views.__alloyId25515 = Ti.UI.createView({
        id: "__alloyId25515"
    });
    $.__views.__alloyId25514.add($.__views.__alloyId25515);
    $.__views.__alloyId25516 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25516"
    });
    $.__views.__alloyId25515.add($.__views.__alloyId25516);
    $.__views.__alloyId25517 = Ti.UI.createView({
        id: "__alloyId25517"
    });
    $.__views.__alloyId25517 && $.addTopLevelView($.__views.__alloyId25517);
    $.__views.__alloyId25518 = Ti.UI.createView({
        id: "__alloyId25518"
    });
    $.__views.__alloyId25517.add($.__views.__alloyId25518);
    $.__views.__alloyId25519 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25519"
    });
    $.__views.__alloyId25518.add($.__views.__alloyId25519);
    $.__views.__alloyId25520 = Ti.UI.createView({
        id: "__alloyId25520"
    });
    $.__views.__alloyId25520 && $.addTopLevelView($.__views.__alloyId25520);
    $.__views.__alloyId25521 = Ti.UI.createView({
        id: "__alloyId25521"
    });
    $.__views.__alloyId25520.add($.__views.__alloyId25521);
    $.__views.__alloyId25522 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25522"
    });
    $.__views.__alloyId25521.add($.__views.__alloyId25522);
    $.__views.__alloyId25523 = Ti.UI.createView({
        id: "__alloyId25523"
    });
    $.__views.__alloyId25523 && $.addTopLevelView($.__views.__alloyId25523);
    $.__views.__alloyId25524 = Ti.UI.createView({
        id: "__alloyId25524"
    });
    $.__views.__alloyId25523.add($.__views.__alloyId25524);
    $.__views.__alloyId25525 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25525"
    });
    $.__views.__alloyId25524.add($.__views.__alloyId25525);
    $.__views.__alloyId25526 = Ti.UI.createView({
        id: "__alloyId25526"
    });
    $.__views.__alloyId25526 && $.addTopLevelView($.__views.__alloyId25526);
    $.__views.__alloyId25527 = Ti.UI.createView({
        id: "__alloyId25527"
    });
    $.__views.__alloyId25526.add($.__views.__alloyId25527);
    $.__views.__alloyId25528 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25528"
    });
    $.__views.__alloyId25527.add($.__views.__alloyId25528);
    $.__views.__alloyId25529 = Ti.UI.createView({
        id: "__alloyId25529"
    });
    $.__views.__alloyId25529 && $.addTopLevelView($.__views.__alloyId25529);
    $.__views.__alloyId25530 = Ti.UI.createView({
        id: "__alloyId25530"
    });
    $.__views.__alloyId25529.add($.__views.__alloyId25530);
    $.__views.__alloyId25531 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25531"
    });
    $.__views.__alloyId25530.add($.__views.__alloyId25531);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;