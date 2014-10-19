function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_743";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_743 = Ti.UI.createView({
        id: "widget_743"
    });
    $.__views.widget_743 && $.addTopLevelView($.__views.widget_743);
    $.__views.__alloyId18642 = Ti.UI.createView({
        id: "__alloyId18642"
    });
    $.__views.widget_743.add($.__views.__alloyId18642);
    $.__views.__alloyId18643 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18643"
    });
    $.__views.__alloyId18642.add($.__views.__alloyId18643);
    $.__views.__alloyId18644 = Ti.UI.createView({
        id: "__alloyId18644"
    });
    $.__views.__alloyId18644 && $.addTopLevelView($.__views.__alloyId18644);
    $.__views.__alloyId18645 = Ti.UI.createView({
        id: "__alloyId18645"
    });
    $.__views.__alloyId18644.add($.__views.__alloyId18645);
    $.__views.__alloyId18646 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18646"
    });
    $.__views.__alloyId18645.add($.__views.__alloyId18646);
    $.__views.__alloyId18647 = Ti.UI.createView({
        id: "__alloyId18647"
    });
    $.__views.__alloyId18647 && $.addTopLevelView($.__views.__alloyId18647);
    $.__views.__alloyId18648 = Ti.UI.createView({
        id: "__alloyId18648"
    });
    $.__views.__alloyId18647.add($.__views.__alloyId18648);
    $.__views.__alloyId18649 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18649"
    });
    $.__views.__alloyId18648.add($.__views.__alloyId18649);
    $.__views.__alloyId18650 = Ti.UI.createView({
        id: "__alloyId18650"
    });
    $.__views.__alloyId18650 && $.addTopLevelView($.__views.__alloyId18650);
    $.__views.__alloyId18651 = Ti.UI.createView({
        id: "__alloyId18651"
    });
    $.__views.__alloyId18650.add($.__views.__alloyId18651);
    $.__views.__alloyId18652 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18652"
    });
    $.__views.__alloyId18651.add($.__views.__alloyId18652);
    $.__views.__alloyId18653 = Ti.UI.createView({
        id: "__alloyId18653"
    });
    $.__views.__alloyId18653 && $.addTopLevelView($.__views.__alloyId18653);
    $.__views.__alloyId18654 = Ti.UI.createView({
        id: "__alloyId18654"
    });
    $.__views.__alloyId18653.add($.__views.__alloyId18654);
    $.__views.__alloyId18655 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18655"
    });
    $.__views.__alloyId18654.add($.__views.__alloyId18655);
    $.__views.__alloyId18656 = Ti.UI.createView({
        id: "__alloyId18656"
    });
    $.__views.__alloyId18656 && $.addTopLevelView($.__views.__alloyId18656);
    $.__views.__alloyId18657 = Ti.UI.createView({
        id: "__alloyId18657"
    });
    $.__views.__alloyId18656.add($.__views.__alloyId18657);
    $.__views.__alloyId18658 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18658"
    });
    $.__views.__alloyId18657.add($.__views.__alloyId18658);
    $.__views.__alloyId18659 = Ti.UI.createView({
        id: "__alloyId18659"
    });
    $.__views.__alloyId18659 && $.addTopLevelView($.__views.__alloyId18659);
    $.__views.__alloyId18660 = Ti.UI.createView({
        id: "__alloyId18660"
    });
    $.__views.__alloyId18659.add($.__views.__alloyId18660);
    $.__views.__alloyId18661 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18661"
    });
    $.__views.__alloyId18660.add($.__views.__alloyId18661);
    $.__views.__alloyId18662 = Ti.UI.createView({
        id: "__alloyId18662"
    });
    $.__views.__alloyId18662 && $.addTopLevelView($.__views.__alloyId18662);
    $.__views.__alloyId18663 = Ti.UI.createView({
        id: "__alloyId18663"
    });
    $.__views.__alloyId18662.add($.__views.__alloyId18663);
    $.__views.__alloyId18664 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18664"
    });
    $.__views.__alloyId18663.add($.__views.__alloyId18664);
    $.__views.__alloyId18665 = Ti.UI.createView({
        id: "__alloyId18665"
    });
    $.__views.__alloyId18665 && $.addTopLevelView($.__views.__alloyId18665);
    $.__views.__alloyId18666 = Ti.UI.createView({
        id: "__alloyId18666"
    });
    $.__views.__alloyId18665.add($.__views.__alloyId18666);
    $.__views.__alloyId18667 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18667"
    });
    $.__views.__alloyId18666.add($.__views.__alloyId18667);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;