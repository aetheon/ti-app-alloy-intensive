function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_258";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_258 = Ti.UI.createView({
        id: "widget_258"
    });
    $.__views.widget_258 && $.addTopLevelView($.__views.widget_258);
    $.__views.__alloyId4628 = Ti.UI.createView({
        id: "__alloyId4628"
    });
    $.__views.widget_258.add($.__views.__alloyId4628);
    $.__views.__alloyId4629 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4629"
    });
    $.__views.__alloyId4628.add($.__views.__alloyId4629);
    $.__views.__alloyId4630 = Ti.UI.createView({
        id: "__alloyId4630"
    });
    $.__views.__alloyId4630 && $.addTopLevelView($.__views.__alloyId4630);
    $.__views.__alloyId4631 = Ti.UI.createView({
        id: "__alloyId4631"
    });
    $.__views.__alloyId4630.add($.__views.__alloyId4631);
    $.__views.__alloyId4632 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4632"
    });
    $.__views.__alloyId4631.add($.__views.__alloyId4632);
    $.__views.__alloyId4633 = Ti.UI.createView({
        id: "__alloyId4633"
    });
    $.__views.__alloyId4633 && $.addTopLevelView($.__views.__alloyId4633);
    $.__views.__alloyId4634 = Ti.UI.createView({
        id: "__alloyId4634"
    });
    $.__views.__alloyId4633.add($.__views.__alloyId4634);
    $.__views.__alloyId4635 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4635"
    });
    $.__views.__alloyId4634.add($.__views.__alloyId4635);
    $.__views.__alloyId4636 = Ti.UI.createView({
        id: "__alloyId4636"
    });
    $.__views.__alloyId4636 && $.addTopLevelView($.__views.__alloyId4636);
    $.__views.__alloyId4637 = Ti.UI.createView({
        id: "__alloyId4637"
    });
    $.__views.__alloyId4636.add($.__views.__alloyId4637);
    $.__views.__alloyId4638 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4638"
    });
    $.__views.__alloyId4637.add($.__views.__alloyId4638);
    $.__views.__alloyId4639 = Ti.UI.createView({
        id: "__alloyId4639"
    });
    $.__views.__alloyId4639 && $.addTopLevelView($.__views.__alloyId4639);
    $.__views.__alloyId4640 = Ti.UI.createView({
        id: "__alloyId4640"
    });
    $.__views.__alloyId4639.add($.__views.__alloyId4640);
    $.__views.__alloyId4641 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4641"
    });
    $.__views.__alloyId4640.add($.__views.__alloyId4641);
    $.__views.__alloyId4642 = Ti.UI.createView({
        id: "__alloyId4642"
    });
    $.__views.__alloyId4642 && $.addTopLevelView($.__views.__alloyId4642);
    $.__views.__alloyId4643 = Ti.UI.createView({
        id: "__alloyId4643"
    });
    $.__views.__alloyId4642.add($.__views.__alloyId4643);
    $.__views.__alloyId4644 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4644"
    });
    $.__views.__alloyId4643.add($.__views.__alloyId4644);
    $.__views.__alloyId4645 = Ti.UI.createView({
        id: "__alloyId4645"
    });
    $.__views.__alloyId4645 && $.addTopLevelView($.__views.__alloyId4645);
    $.__views.__alloyId4646 = Ti.UI.createView({
        id: "__alloyId4646"
    });
    $.__views.__alloyId4645.add($.__views.__alloyId4646);
    $.__views.__alloyId4647 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4647"
    });
    $.__views.__alloyId4646.add($.__views.__alloyId4647);
    $.__views.__alloyId4648 = Ti.UI.createView({
        id: "__alloyId4648"
    });
    $.__views.__alloyId4648 && $.addTopLevelView($.__views.__alloyId4648);
    $.__views.__alloyId4649 = Ti.UI.createView({
        id: "__alloyId4649"
    });
    $.__views.__alloyId4648.add($.__views.__alloyId4649);
    $.__views.__alloyId4650 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4650"
    });
    $.__views.__alloyId4649.add($.__views.__alloyId4650);
    $.__views.__alloyId4651 = Ti.UI.createView({
        id: "__alloyId4651"
    });
    $.__views.__alloyId4651 && $.addTopLevelView($.__views.__alloyId4651);
    $.__views.__alloyId4652 = Ti.UI.createView({
        id: "__alloyId4652"
    });
    $.__views.__alloyId4651.add($.__views.__alloyId4652);
    $.__views.__alloyId4653 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4653"
    });
    $.__views.__alloyId4652.add($.__views.__alloyId4653);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;