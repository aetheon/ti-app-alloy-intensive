function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_392";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_392 = Ti.UI.createView({
        id: "widget_392"
    });
    $.__views.widget_392 && $.addTopLevelView($.__views.widget_392);
    $.__views.__alloyId8502 = Ti.UI.createView({
        id: "__alloyId8502"
    });
    $.__views.widget_392.add($.__views.__alloyId8502);
    $.__views.__alloyId8503 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8503"
    });
    $.__views.__alloyId8502.add($.__views.__alloyId8503);
    $.__views.__alloyId8504 = Ti.UI.createView({
        id: "__alloyId8504"
    });
    $.__views.__alloyId8504 && $.addTopLevelView($.__views.__alloyId8504);
    $.__views.__alloyId8505 = Ti.UI.createView({
        id: "__alloyId8505"
    });
    $.__views.__alloyId8504.add($.__views.__alloyId8505);
    $.__views.__alloyId8506 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8506"
    });
    $.__views.__alloyId8505.add($.__views.__alloyId8506);
    $.__views.__alloyId8507 = Ti.UI.createView({
        id: "__alloyId8507"
    });
    $.__views.__alloyId8507 && $.addTopLevelView($.__views.__alloyId8507);
    $.__views.__alloyId8508 = Ti.UI.createView({
        id: "__alloyId8508"
    });
    $.__views.__alloyId8507.add($.__views.__alloyId8508);
    $.__views.__alloyId8509 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8509"
    });
    $.__views.__alloyId8508.add($.__views.__alloyId8509);
    $.__views.__alloyId8510 = Ti.UI.createView({
        id: "__alloyId8510"
    });
    $.__views.__alloyId8510 && $.addTopLevelView($.__views.__alloyId8510);
    $.__views.__alloyId8511 = Ti.UI.createView({
        id: "__alloyId8511"
    });
    $.__views.__alloyId8510.add($.__views.__alloyId8511);
    $.__views.__alloyId8512 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8512"
    });
    $.__views.__alloyId8511.add($.__views.__alloyId8512);
    $.__views.__alloyId8513 = Ti.UI.createView({
        id: "__alloyId8513"
    });
    $.__views.__alloyId8513 && $.addTopLevelView($.__views.__alloyId8513);
    $.__views.__alloyId8514 = Ti.UI.createView({
        id: "__alloyId8514"
    });
    $.__views.__alloyId8513.add($.__views.__alloyId8514);
    $.__views.__alloyId8515 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8515"
    });
    $.__views.__alloyId8514.add($.__views.__alloyId8515);
    $.__views.__alloyId8516 = Ti.UI.createView({
        id: "__alloyId8516"
    });
    $.__views.__alloyId8516 && $.addTopLevelView($.__views.__alloyId8516);
    $.__views.__alloyId8517 = Ti.UI.createView({
        id: "__alloyId8517"
    });
    $.__views.__alloyId8516.add($.__views.__alloyId8517);
    $.__views.__alloyId8518 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8518"
    });
    $.__views.__alloyId8517.add($.__views.__alloyId8518);
    $.__views.__alloyId8519 = Ti.UI.createView({
        id: "__alloyId8519"
    });
    $.__views.__alloyId8519 && $.addTopLevelView($.__views.__alloyId8519);
    $.__views.__alloyId8520 = Ti.UI.createView({
        id: "__alloyId8520"
    });
    $.__views.__alloyId8519.add($.__views.__alloyId8520);
    $.__views.__alloyId8521 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8521"
    });
    $.__views.__alloyId8520.add($.__views.__alloyId8521);
    $.__views.__alloyId8522 = Ti.UI.createView({
        id: "__alloyId8522"
    });
    $.__views.__alloyId8522 && $.addTopLevelView($.__views.__alloyId8522);
    $.__views.__alloyId8523 = Ti.UI.createView({
        id: "__alloyId8523"
    });
    $.__views.__alloyId8522.add($.__views.__alloyId8523);
    $.__views.__alloyId8524 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8524"
    });
    $.__views.__alloyId8523.add($.__views.__alloyId8524);
    $.__views.__alloyId8525 = Ti.UI.createView({
        id: "__alloyId8525"
    });
    $.__views.__alloyId8525 && $.addTopLevelView($.__views.__alloyId8525);
    $.__views.__alloyId8526 = Ti.UI.createView({
        id: "__alloyId8526"
    });
    $.__views.__alloyId8525.add($.__views.__alloyId8526);
    $.__views.__alloyId8527 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8527"
    });
    $.__views.__alloyId8526.add($.__views.__alloyId8527);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;