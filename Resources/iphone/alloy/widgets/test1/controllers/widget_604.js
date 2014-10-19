function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_604";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_604 = Ti.UI.createView({
        id: "widget_604"
    });
    $.__views.widget_604 && $.addTopLevelView($.__views.widget_604);
    $.__views.__alloyId14638 = Ti.UI.createView({
        id: "__alloyId14638"
    });
    $.__views.widget_604.add($.__views.__alloyId14638);
    $.__views.__alloyId14639 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14639"
    });
    $.__views.__alloyId14638.add($.__views.__alloyId14639);
    $.__views.__alloyId14640 = Ti.UI.createView({
        id: "__alloyId14640"
    });
    $.__views.__alloyId14640 && $.addTopLevelView($.__views.__alloyId14640);
    $.__views.__alloyId14641 = Ti.UI.createView({
        id: "__alloyId14641"
    });
    $.__views.__alloyId14640.add($.__views.__alloyId14641);
    $.__views.__alloyId14642 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14642"
    });
    $.__views.__alloyId14641.add($.__views.__alloyId14642);
    $.__views.__alloyId14643 = Ti.UI.createView({
        id: "__alloyId14643"
    });
    $.__views.__alloyId14643 && $.addTopLevelView($.__views.__alloyId14643);
    $.__views.__alloyId14644 = Ti.UI.createView({
        id: "__alloyId14644"
    });
    $.__views.__alloyId14643.add($.__views.__alloyId14644);
    $.__views.__alloyId14645 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14645"
    });
    $.__views.__alloyId14644.add($.__views.__alloyId14645);
    $.__views.__alloyId14646 = Ti.UI.createView({
        id: "__alloyId14646"
    });
    $.__views.__alloyId14646 && $.addTopLevelView($.__views.__alloyId14646);
    $.__views.__alloyId14647 = Ti.UI.createView({
        id: "__alloyId14647"
    });
    $.__views.__alloyId14646.add($.__views.__alloyId14647);
    $.__views.__alloyId14648 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14648"
    });
    $.__views.__alloyId14647.add($.__views.__alloyId14648);
    $.__views.__alloyId14649 = Ti.UI.createView({
        id: "__alloyId14649"
    });
    $.__views.__alloyId14649 && $.addTopLevelView($.__views.__alloyId14649);
    $.__views.__alloyId14650 = Ti.UI.createView({
        id: "__alloyId14650"
    });
    $.__views.__alloyId14649.add($.__views.__alloyId14650);
    $.__views.__alloyId14651 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14651"
    });
    $.__views.__alloyId14650.add($.__views.__alloyId14651);
    $.__views.__alloyId14652 = Ti.UI.createView({
        id: "__alloyId14652"
    });
    $.__views.__alloyId14652 && $.addTopLevelView($.__views.__alloyId14652);
    $.__views.__alloyId14653 = Ti.UI.createView({
        id: "__alloyId14653"
    });
    $.__views.__alloyId14652.add($.__views.__alloyId14653);
    $.__views.__alloyId14654 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14654"
    });
    $.__views.__alloyId14653.add($.__views.__alloyId14654);
    $.__views.__alloyId14655 = Ti.UI.createView({
        id: "__alloyId14655"
    });
    $.__views.__alloyId14655 && $.addTopLevelView($.__views.__alloyId14655);
    $.__views.__alloyId14656 = Ti.UI.createView({
        id: "__alloyId14656"
    });
    $.__views.__alloyId14655.add($.__views.__alloyId14656);
    $.__views.__alloyId14657 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14657"
    });
    $.__views.__alloyId14656.add($.__views.__alloyId14657);
    $.__views.__alloyId14658 = Ti.UI.createView({
        id: "__alloyId14658"
    });
    $.__views.__alloyId14658 && $.addTopLevelView($.__views.__alloyId14658);
    $.__views.__alloyId14659 = Ti.UI.createView({
        id: "__alloyId14659"
    });
    $.__views.__alloyId14658.add($.__views.__alloyId14659);
    $.__views.__alloyId14660 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14660"
    });
    $.__views.__alloyId14659.add($.__views.__alloyId14660);
    $.__views.__alloyId14661 = Ti.UI.createView({
        id: "__alloyId14661"
    });
    $.__views.__alloyId14661 && $.addTopLevelView($.__views.__alloyId14661);
    $.__views.__alloyId14662 = Ti.UI.createView({
        id: "__alloyId14662"
    });
    $.__views.__alloyId14661.add($.__views.__alloyId14662);
    $.__views.__alloyId14663 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14663"
    });
    $.__views.__alloyId14662.add($.__views.__alloyId14663);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;