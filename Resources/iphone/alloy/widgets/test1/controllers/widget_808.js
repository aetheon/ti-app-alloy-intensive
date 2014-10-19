function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_808";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_808 = Ti.UI.createView({
        id: "widget_808"
    });
    $.__views.widget_808 && $.addTopLevelView($.__views.widget_808);
    $.__views.__alloyId20514 = Ti.UI.createView({
        id: "__alloyId20514"
    });
    $.__views.widget_808.add($.__views.__alloyId20514);
    $.__views.__alloyId20515 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20515"
    });
    $.__views.__alloyId20514.add($.__views.__alloyId20515);
    $.__views.__alloyId20516 = Ti.UI.createView({
        id: "__alloyId20516"
    });
    $.__views.__alloyId20516 && $.addTopLevelView($.__views.__alloyId20516);
    $.__views.__alloyId20517 = Ti.UI.createView({
        id: "__alloyId20517"
    });
    $.__views.__alloyId20516.add($.__views.__alloyId20517);
    $.__views.__alloyId20518 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20518"
    });
    $.__views.__alloyId20517.add($.__views.__alloyId20518);
    $.__views.__alloyId20519 = Ti.UI.createView({
        id: "__alloyId20519"
    });
    $.__views.__alloyId20519 && $.addTopLevelView($.__views.__alloyId20519);
    $.__views.__alloyId20520 = Ti.UI.createView({
        id: "__alloyId20520"
    });
    $.__views.__alloyId20519.add($.__views.__alloyId20520);
    $.__views.__alloyId20521 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20521"
    });
    $.__views.__alloyId20520.add($.__views.__alloyId20521);
    $.__views.__alloyId20522 = Ti.UI.createView({
        id: "__alloyId20522"
    });
    $.__views.__alloyId20522 && $.addTopLevelView($.__views.__alloyId20522);
    $.__views.__alloyId20523 = Ti.UI.createView({
        id: "__alloyId20523"
    });
    $.__views.__alloyId20522.add($.__views.__alloyId20523);
    $.__views.__alloyId20524 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20524"
    });
    $.__views.__alloyId20523.add($.__views.__alloyId20524);
    $.__views.__alloyId20525 = Ti.UI.createView({
        id: "__alloyId20525"
    });
    $.__views.__alloyId20525 && $.addTopLevelView($.__views.__alloyId20525);
    $.__views.__alloyId20526 = Ti.UI.createView({
        id: "__alloyId20526"
    });
    $.__views.__alloyId20525.add($.__views.__alloyId20526);
    $.__views.__alloyId20527 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20527"
    });
    $.__views.__alloyId20526.add($.__views.__alloyId20527);
    $.__views.__alloyId20528 = Ti.UI.createView({
        id: "__alloyId20528"
    });
    $.__views.__alloyId20528 && $.addTopLevelView($.__views.__alloyId20528);
    $.__views.__alloyId20529 = Ti.UI.createView({
        id: "__alloyId20529"
    });
    $.__views.__alloyId20528.add($.__views.__alloyId20529);
    $.__views.__alloyId20530 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20530"
    });
    $.__views.__alloyId20529.add($.__views.__alloyId20530);
    $.__views.__alloyId20531 = Ti.UI.createView({
        id: "__alloyId20531"
    });
    $.__views.__alloyId20531 && $.addTopLevelView($.__views.__alloyId20531);
    $.__views.__alloyId20532 = Ti.UI.createView({
        id: "__alloyId20532"
    });
    $.__views.__alloyId20531.add($.__views.__alloyId20532);
    $.__views.__alloyId20533 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20533"
    });
    $.__views.__alloyId20532.add($.__views.__alloyId20533);
    $.__views.__alloyId20534 = Ti.UI.createView({
        id: "__alloyId20534"
    });
    $.__views.__alloyId20534 && $.addTopLevelView($.__views.__alloyId20534);
    $.__views.__alloyId20535 = Ti.UI.createView({
        id: "__alloyId20535"
    });
    $.__views.__alloyId20534.add($.__views.__alloyId20535);
    $.__views.__alloyId20536 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20536"
    });
    $.__views.__alloyId20535.add($.__views.__alloyId20536);
    $.__views.__alloyId20537 = Ti.UI.createView({
        id: "__alloyId20537"
    });
    $.__views.__alloyId20537 && $.addTopLevelView($.__views.__alloyId20537);
    $.__views.__alloyId20538 = Ti.UI.createView({
        id: "__alloyId20538"
    });
    $.__views.__alloyId20537.add($.__views.__alloyId20538);
    $.__views.__alloyId20539 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20539"
    });
    $.__views.__alloyId20538.add($.__views.__alloyId20539);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;