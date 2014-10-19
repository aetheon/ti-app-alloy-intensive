function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_466";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_466 = Ti.UI.createView({
        id: "widget_466"
    });
    $.__views.widget_466 && $.addTopLevelView($.__views.widget_466);
    $.__views.__alloyId10634 = Ti.UI.createView({
        id: "__alloyId10634"
    });
    $.__views.widget_466.add($.__views.__alloyId10634);
    $.__views.__alloyId10635 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10635"
    });
    $.__views.__alloyId10634.add($.__views.__alloyId10635);
    $.__views.__alloyId10636 = Ti.UI.createView({
        id: "__alloyId10636"
    });
    $.__views.__alloyId10636 && $.addTopLevelView($.__views.__alloyId10636);
    $.__views.__alloyId10637 = Ti.UI.createView({
        id: "__alloyId10637"
    });
    $.__views.__alloyId10636.add($.__views.__alloyId10637);
    $.__views.__alloyId10638 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10638"
    });
    $.__views.__alloyId10637.add($.__views.__alloyId10638);
    $.__views.__alloyId10639 = Ti.UI.createView({
        id: "__alloyId10639"
    });
    $.__views.__alloyId10639 && $.addTopLevelView($.__views.__alloyId10639);
    $.__views.__alloyId10640 = Ti.UI.createView({
        id: "__alloyId10640"
    });
    $.__views.__alloyId10639.add($.__views.__alloyId10640);
    $.__views.__alloyId10641 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10641"
    });
    $.__views.__alloyId10640.add($.__views.__alloyId10641);
    $.__views.__alloyId10642 = Ti.UI.createView({
        id: "__alloyId10642"
    });
    $.__views.__alloyId10642 && $.addTopLevelView($.__views.__alloyId10642);
    $.__views.__alloyId10643 = Ti.UI.createView({
        id: "__alloyId10643"
    });
    $.__views.__alloyId10642.add($.__views.__alloyId10643);
    $.__views.__alloyId10644 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10644"
    });
    $.__views.__alloyId10643.add($.__views.__alloyId10644);
    $.__views.__alloyId10645 = Ti.UI.createView({
        id: "__alloyId10645"
    });
    $.__views.__alloyId10645 && $.addTopLevelView($.__views.__alloyId10645);
    $.__views.__alloyId10646 = Ti.UI.createView({
        id: "__alloyId10646"
    });
    $.__views.__alloyId10645.add($.__views.__alloyId10646);
    $.__views.__alloyId10647 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10647"
    });
    $.__views.__alloyId10646.add($.__views.__alloyId10647);
    $.__views.__alloyId10648 = Ti.UI.createView({
        id: "__alloyId10648"
    });
    $.__views.__alloyId10648 && $.addTopLevelView($.__views.__alloyId10648);
    $.__views.__alloyId10649 = Ti.UI.createView({
        id: "__alloyId10649"
    });
    $.__views.__alloyId10648.add($.__views.__alloyId10649);
    $.__views.__alloyId10650 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10650"
    });
    $.__views.__alloyId10649.add($.__views.__alloyId10650);
    $.__views.__alloyId10651 = Ti.UI.createView({
        id: "__alloyId10651"
    });
    $.__views.__alloyId10651 && $.addTopLevelView($.__views.__alloyId10651);
    $.__views.__alloyId10652 = Ti.UI.createView({
        id: "__alloyId10652"
    });
    $.__views.__alloyId10651.add($.__views.__alloyId10652);
    $.__views.__alloyId10653 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10653"
    });
    $.__views.__alloyId10652.add($.__views.__alloyId10653);
    $.__views.__alloyId10654 = Ti.UI.createView({
        id: "__alloyId10654"
    });
    $.__views.__alloyId10654 && $.addTopLevelView($.__views.__alloyId10654);
    $.__views.__alloyId10655 = Ti.UI.createView({
        id: "__alloyId10655"
    });
    $.__views.__alloyId10654.add($.__views.__alloyId10655);
    $.__views.__alloyId10656 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10656"
    });
    $.__views.__alloyId10655.add($.__views.__alloyId10656);
    $.__views.__alloyId10657 = Ti.UI.createView({
        id: "__alloyId10657"
    });
    $.__views.__alloyId10657 && $.addTopLevelView($.__views.__alloyId10657);
    $.__views.__alloyId10658 = Ti.UI.createView({
        id: "__alloyId10658"
    });
    $.__views.__alloyId10657.add($.__views.__alloyId10658);
    $.__views.__alloyId10659 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10659"
    });
    $.__views.__alloyId10658.add($.__views.__alloyId10659);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;