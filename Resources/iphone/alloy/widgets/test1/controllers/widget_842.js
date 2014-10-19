function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_842";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_842 = Ti.UI.createView({
        id: "widget_842"
    });
    $.__views.widget_842 && $.addTopLevelView($.__views.widget_842);
    $.__views.__alloyId21502 = Ti.UI.createView({
        id: "__alloyId21502"
    });
    $.__views.widget_842.add($.__views.__alloyId21502);
    $.__views.__alloyId21503 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21503"
    });
    $.__views.__alloyId21502.add($.__views.__alloyId21503);
    $.__views.__alloyId21504 = Ti.UI.createView({
        id: "__alloyId21504"
    });
    $.__views.__alloyId21504 && $.addTopLevelView($.__views.__alloyId21504);
    $.__views.__alloyId21505 = Ti.UI.createView({
        id: "__alloyId21505"
    });
    $.__views.__alloyId21504.add($.__views.__alloyId21505);
    $.__views.__alloyId21506 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21506"
    });
    $.__views.__alloyId21505.add($.__views.__alloyId21506);
    $.__views.__alloyId21507 = Ti.UI.createView({
        id: "__alloyId21507"
    });
    $.__views.__alloyId21507 && $.addTopLevelView($.__views.__alloyId21507);
    $.__views.__alloyId21508 = Ti.UI.createView({
        id: "__alloyId21508"
    });
    $.__views.__alloyId21507.add($.__views.__alloyId21508);
    $.__views.__alloyId21509 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21509"
    });
    $.__views.__alloyId21508.add($.__views.__alloyId21509);
    $.__views.__alloyId21510 = Ti.UI.createView({
        id: "__alloyId21510"
    });
    $.__views.__alloyId21510 && $.addTopLevelView($.__views.__alloyId21510);
    $.__views.__alloyId21511 = Ti.UI.createView({
        id: "__alloyId21511"
    });
    $.__views.__alloyId21510.add($.__views.__alloyId21511);
    $.__views.__alloyId21512 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21512"
    });
    $.__views.__alloyId21511.add($.__views.__alloyId21512);
    $.__views.__alloyId21513 = Ti.UI.createView({
        id: "__alloyId21513"
    });
    $.__views.__alloyId21513 && $.addTopLevelView($.__views.__alloyId21513);
    $.__views.__alloyId21514 = Ti.UI.createView({
        id: "__alloyId21514"
    });
    $.__views.__alloyId21513.add($.__views.__alloyId21514);
    $.__views.__alloyId21515 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21515"
    });
    $.__views.__alloyId21514.add($.__views.__alloyId21515);
    $.__views.__alloyId21516 = Ti.UI.createView({
        id: "__alloyId21516"
    });
    $.__views.__alloyId21516 && $.addTopLevelView($.__views.__alloyId21516);
    $.__views.__alloyId21517 = Ti.UI.createView({
        id: "__alloyId21517"
    });
    $.__views.__alloyId21516.add($.__views.__alloyId21517);
    $.__views.__alloyId21518 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21518"
    });
    $.__views.__alloyId21517.add($.__views.__alloyId21518);
    $.__views.__alloyId21519 = Ti.UI.createView({
        id: "__alloyId21519"
    });
    $.__views.__alloyId21519 && $.addTopLevelView($.__views.__alloyId21519);
    $.__views.__alloyId21520 = Ti.UI.createView({
        id: "__alloyId21520"
    });
    $.__views.__alloyId21519.add($.__views.__alloyId21520);
    $.__views.__alloyId21521 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21521"
    });
    $.__views.__alloyId21520.add($.__views.__alloyId21521);
    $.__views.__alloyId21522 = Ti.UI.createView({
        id: "__alloyId21522"
    });
    $.__views.__alloyId21522 && $.addTopLevelView($.__views.__alloyId21522);
    $.__views.__alloyId21523 = Ti.UI.createView({
        id: "__alloyId21523"
    });
    $.__views.__alloyId21522.add($.__views.__alloyId21523);
    $.__views.__alloyId21524 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21524"
    });
    $.__views.__alloyId21523.add($.__views.__alloyId21524);
    $.__views.__alloyId21525 = Ti.UI.createView({
        id: "__alloyId21525"
    });
    $.__views.__alloyId21525 && $.addTopLevelView($.__views.__alloyId21525);
    $.__views.__alloyId21526 = Ti.UI.createView({
        id: "__alloyId21526"
    });
    $.__views.__alloyId21525.add($.__views.__alloyId21526);
    $.__views.__alloyId21527 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21527"
    });
    $.__views.__alloyId21526.add($.__views.__alloyId21527);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;