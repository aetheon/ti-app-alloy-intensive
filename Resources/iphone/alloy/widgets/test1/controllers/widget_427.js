function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_427";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_427 = Ti.UI.createView({
        id: "widget_427"
    });
    $.__views.widget_427 && $.addTopLevelView($.__views.widget_427);
    $.__views.__alloyId9516 = Ti.UI.createView({
        id: "__alloyId9516"
    });
    $.__views.widget_427.add($.__views.__alloyId9516);
    $.__views.__alloyId9517 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9517"
    });
    $.__views.__alloyId9516.add($.__views.__alloyId9517);
    $.__views.__alloyId9518 = Ti.UI.createView({
        id: "__alloyId9518"
    });
    $.__views.__alloyId9518 && $.addTopLevelView($.__views.__alloyId9518);
    $.__views.__alloyId9519 = Ti.UI.createView({
        id: "__alloyId9519"
    });
    $.__views.__alloyId9518.add($.__views.__alloyId9519);
    $.__views.__alloyId9520 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9520"
    });
    $.__views.__alloyId9519.add($.__views.__alloyId9520);
    $.__views.__alloyId9521 = Ti.UI.createView({
        id: "__alloyId9521"
    });
    $.__views.__alloyId9521 && $.addTopLevelView($.__views.__alloyId9521);
    $.__views.__alloyId9522 = Ti.UI.createView({
        id: "__alloyId9522"
    });
    $.__views.__alloyId9521.add($.__views.__alloyId9522);
    $.__views.__alloyId9523 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9523"
    });
    $.__views.__alloyId9522.add($.__views.__alloyId9523);
    $.__views.__alloyId9524 = Ti.UI.createView({
        id: "__alloyId9524"
    });
    $.__views.__alloyId9524 && $.addTopLevelView($.__views.__alloyId9524);
    $.__views.__alloyId9525 = Ti.UI.createView({
        id: "__alloyId9525"
    });
    $.__views.__alloyId9524.add($.__views.__alloyId9525);
    $.__views.__alloyId9526 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9526"
    });
    $.__views.__alloyId9525.add($.__views.__alloyId9526);
    $.__views.__alloyId9527 = Ti.UI.createView({
        id: "__alloyId9527"
    });
    $.__views.__alloyId9527 && $.addTopLevelView($.__views.__alloyId9527);
    $.__views.__alloyId9528 = Ti.UI.createView({
        id: "__alloyId9528"
    });
    $.__views.__alloyId9527.add($.__views.__alloyId9528);
    $.__views.__alloyId9529 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9529"
    });
    $.__views.__alloyId9528.add($.__views.__alloyId9529);
    $.__views.__alloyId9530 = Ti.UI.createView({
        id: "__alloyId9530"
    });
    $.__views.__alloyId9530 && $.addTopLevelView($.__views.__alloyId9530);
    $.__views.__alloyId9531 = Ti.UI.createView({
        id: "__alloyId9531"
    });
    $.__views.__alloyId9530.add($.__views.__alloyId9531);
    $.__views.__alloyId9532 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9532"
    });
    $.__views.__alloyId9531.add($.__views.__alloyId9532);
    $.__views.__alloyId9533 = Ti.UI.createView({
        id: "__alloyId9533"
    });
    $.__views.__alloyId9533 && $.addTopLevelView($.__views.__alloyId9533);
    $.__views.__alloyId9534 = Ti.UI.createView({
        id: "__alloyId9534"
    });
    $.__views.__alloyId9533.add($.__views.__alloyId9534);
    $.__views.__alloyId9535 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9535"
    });
    $.__views.__alloyId9534.add($.__views.__alloyId9535);
    $.__views.__alloyId9536 = Ti.UI.createView({
        id: "__alloyId9536"
    });
    $.__views.__alloyId9536 && $.addTopLevelView($.__views.__alloyId9536);
    $.__views.__alloyId9537 = Ti.UI.createView({
        id: "__alloyId9537"
    });
    $.__views.__alloyId9536.add($.__views.__alloyId9537);
    $.__views.__alloyId9538 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9538"
    });
    $.__views.__alloyId9537.add($.__views.__alloyId9538);
    $.__views.__alloyId9539 = Ti.UI.createView({
        id: "__alloyId9539"
    });
    $.__views.__alloyId9539 && $.addTopLevelView($.__views.__alloyId9539);
    $.__views.__alloyId9540 = Ti.UI.createView({
        id: "__alloyId9540"
    });
    $.__views.__alloyId9539.add($.__views.__alloyId9540);
    $.__views.__alloyId9541 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9541"
    });
    $.__views.__alloyId9540.add($.__views.__alloyId9541);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;