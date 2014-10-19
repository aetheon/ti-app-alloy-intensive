function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_500";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_500 = Ti.UI.createView({
        id: "widget_500"
    });
    $.__views.widget_500 && $.addTopLevelView($.__views.widget_500);
    $.__views.__alloyId11648 = Ti.UI.createView({
        id: "__alloyId11648"
    });
    $.__views.widget_500.add($.__views.__alloyId11648);
    $.__views.__alloyId11649 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11649"
    });
    $.__views.__alloyId11648.add($.__views.__alloyId11649);
    $.__views.__alloyId11650 = Ti.UI.createView({
        id: "__alloyId11650"
    });
    $.__views.__alloyId11650 && $.addTopLevelView($.__views.__alloyId11650);
    $.__views.__alloyId11651 = Ti.UI.createView({
        id: "__alloyId11651"
    });
    $.__views.__alloyId11650.add($.__views.__alloyId11651);
    $.__views.__alloyId11652 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11652"
    });
    $.__views.__alloyId11651.add($.__views.__alloyId11652);
    $.__views.__alloyId11653 = Ti.UI.createView({
        id: "__alloyId11653"
    });
    $.__views.__alloyId11653 && $.addTopLevelView($.__views.__alloyId11653);
    $.__views.__alloyId11654 = Ti.UI.createView({
        id: "__alloyId11654"
    });
    $.__views.__alloyId11653.add($.__views.__alloyId11654);
    $.__views.__alloyId11655 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11655"
    });
    $.__views.__alloyId11654.add($.__views.__alloyId11655);
    $.__views.__alloyId11656 = Ti.UI.createView({
        id: "__alloyId11656"
    });
    $.__views.__alloyId11656 && $.addTopLevelView($.__views.__alloyId11656);
    $.__views.__alloyId11657 = Ti.UI.createView({
        id: "__alloyId11657"
    });
    $.__views.__alloyId11656.add($.__views.__alloyId11657);
    $.__views.__alloyId11658 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11658"
    });
    $.__views.__alloyId11657.add($.__views.__alloyId11658);
    $.__views.__alloyId11659 = Ti.UI.createView({
        id: "__alloyId11659"
    });
    $.__views.__alloyId11659 && $.addTopLevelView($.__views.__alloyId11659);
    $.__views.__alloyId11660 = Ti.UI.createView({
        id: "__alloyId11660"
    });
    $.__views.__alloyId11659.add($.__views.__alloyId11660);
    $.__views.__alloyId11661 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11661"
    });
    $.__views.__alloyId11660.add($.__views.__alloyId11661);
    $.__views.__alloyId11662 = Ti.UI.createView({
        id: "__alloyId11662"
    });
    $.__views.__alloyId11662 && $.addTopLevelView($.__views.__alloyId11662);
    $.__views.__alloyId11663 = Ti.UI.createView({
        id: "__alloyId11663"
    });
    $.__views.__alloyId11662.add($.__views.__alloyId11663);
    $.__views.__alloyId11664 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11664"
    });
    $.__views.__alloyId11663.add($.__views.__alloyId11664);
    $.__views.__alloyId11665 = Ti.UI.createView({
        id: "__alloyId11665"
    });
    $.__views.__alloyId11665 && $.addTopLevelView($.__views.__alloyId11665);
    $.__views.__alloyId11666 = Ti.UI.createView({
        id: "__alloyId11666"
    });
    $.__views.__alloyId11665.add($.__views.__alloyId11666);
    $.__views.__alloyId11667 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11667"
    });
    $.__views.__alloyId11666.add($.__views.__alloyId11667);
    $.__views.__alloyId11668 = Ti.UI.createView({
        id: "__alloyId11668"
    });
    $.__views.__alloyId11668 && $.addTopLevelView($.__views.__alloyId11668);
    $.__views.__alloyId11669 = Ti.UI.createView({
        id: "__alloyId11669"
    });
    $.__views.__alloyId11668.add($.__views.__alloyId11669);
    $.__views.__alloyId11670 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11670"
    });
    $.__views.__alloyId11669.add($.__views.__alloyId11670);
    $.__views.__alloyId11671 = Ti.UI.createView({
        id: "__alloyId11671"
    });
    $.__views.__alloyId11671 && $.addTopLevelView($.__views.__alloyId11671);
    $.__views.__alloyId11672 = Ti.UI.createView({
        id: "__alloyId11672"
    });
    $.__views.__alloyId11671.add($.__views.__alloyId11672);
    $.__views.__alloyId11673 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11673"
    });
    $.__views.__alloyId11672.add($.__views.__alloyId11673);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;