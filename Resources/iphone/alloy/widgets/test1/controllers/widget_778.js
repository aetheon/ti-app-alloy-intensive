function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_778";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_778 = Ti.UI.createView({
        id: "widget_778"
    });
    $.__views.widget_778 && $.addTopLevelView($.__views.widget_778);
    $.__views.__alloyId19630 = Ti.UI.createView({
        id: "__alloyId19630"
    });
    $.__views.widget_778.add($.__views.__alloyId19630);
    $.__views.__alloyId19631 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19631"
    });
    $.__views.__alloyId19630.add($.__views.__alloyId19631);
    $.__views.__alloyId19632 = Ti.UI.createView({
        id: "__alloyId19632"
    });
    $.__views.__alloyId19632 && $.addTopLevelView($.__views.__alloyId19632);
    $.__views.__alloyId19633 = Ti.UI.createView({
        id: "__alloyId19633"
    });
    $.__views.__alloyId19632.add($.__views.__alloyId19633);
    $.__views.__alloyId19634 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19634"
    });
    $.__views.__alloyId19633.add($.__views.__alloyId19634);
    $.__views.__alloyId19635 = Ti.UI.createView({
        id: "__alloyId19635"
    });
    $.__views.__alloyId19635 && $.addTopLevelView($.__views.__alloyId19635);
    $.__views.__alloyId19636 = Ti.UI.createView({
        id: "__alloyId19636"
    });
    $.__views.__alloyId19635.add($.__views.__alloyId19636);
    $.__views.__alloyId19637 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19637"
    });
    $.__views.__alloyId19636.add($.__views.__alloyId19637);
    $.__views.__alloyId19638 = Ti.UI.createView({
        id: "__alloyId19638"
    });
    $.__views.__alloyId19638 && $.addTopLevelView($.__views.__alloyId19638);
    $.__views.__alloyId19639 = Ti.UI.createView({
        id: "__alloyId19639"
    });
    $.__views.__alloyId19638.add($.__views.__alloyId19639);
    $.__views.__alloyId19640 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19640"
    });
    $.__views.__alloyId19639.add($.__views.__alloyId19640);
    $.__views.__alloyId19641 = Ti.UI.createView({
        id: "__alloyId19641"
    });
    $.__views.__alloyId19641 && $.addTopLevelView($.__views.__alloyId19641);
    $.__views.__alloyId19642 = Ti.UI.createView({
        id: "__alloyId19642"
    });
    $.__views.__alloyId19641.add($.__views.__alloyId19642);
    $.__views.__alloyId19643 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19643"
    });
    $.__views.__alloyId19642.add($.__views.__alloyId19643);
    $.__views.__alloyId19644 = Ti.UI.createView({
        id: "__alloyId19644"
    });
    $.__views.__alloyId19644 && $.addTopLevelView($.__views.__alloyId19644);
    $.__views.__alloyId19645 = Ti.UI.createView({
        id: "__alloyId19645"
    });
    $.__views.__alloyId19644.add($.__views.__alloyId19645);
    $.__views.__alloyId19646 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19646"
    });
    $.__views.__alloyId19645.add($.__views.__alloyId19646);
    $.__views.__alloyId19647 = Ti.UI.createView({
        id: "__alloyId19647"
    });
    $.__views.__alloyId19647 && $.addTopLevelView($.__views.__alloyId19647);
    $.__views.__alloyId19648 = Ti.UI.createView({
        id: "__alloyId19648"
    });
    $.__views.__alloyId19647.add($.__views.__alloyId19648);
    $.__views.__alloyId19649 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19649"
    });
    $.__views.__alloyId19648.add($.__views.__alloyId19649);
    $.__views.__alloyId19650 = Ti.UI.createView({
        id: "__alloyId19650"
    });
    $.__views.__alloyId19650 && $.addTopLevelView($.__views.__alloyId19650);
    $.__views.__alloyId19651 = Ti.UI.createView({
        id: "__alloyId19651"
    });
    $.__views.__alloyId19650.add($.__views.__alloyId19651);
    $.__views.__alloyId19652 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19652"
    });
    $.__views.__alloyId19651.add($.__views.__alloyId19652);
    $.__views.__alloyId19653 = Ti.UI.createView({
        id: "__alloyId19653"
    });
    $.__views.__alloyId19653 && $.addTopLevelView($.__views.__alloyId19653);
    $.__views.__alloyId19654 = Ti.UI.createView({
        id: "__alloyId19654"
    });
    $.__views.__alloyId19653.add($.__views.__alloyId19654);
    $.__views.__alloyId19655 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19655"
    });
    $.__views.__alloyId19654.add($.__views.__alloyId19655);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;