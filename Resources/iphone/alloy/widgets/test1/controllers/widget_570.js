function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_570";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_570 = Ti.UI.createView({
        id: "widget_570"
    });
    $.__views.widget_570 && $.addTopLevelView($.__views.widget_570);
    $.__views.__alloyId13650 = Ti.UI.createView({
        id: "__alloyId13650"
    });
    $.__views.widget_570.add($.__views.__alloyId13650);
    $.__views.__alloyId13651 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13651"
    });
    $.__views.__alloyId13650.add($.__views.__alloyId13651);
    $.__views.__alloyId13652 = Ti.UI.createView({
        id: "__alloyId13652"
    });
    $.__views.__alloyId13652 && $.addTopLevelView($.__views.__alloyId13652);
    $.__views.__alloyId13653 = Ti.UI.createView({
        id: "__alloyId13653"
    });
    $.__views.__alloyId13652.add($.__views.__alloyId13653);
    $.__views.__alloyId13654 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13654"
    });
    $.__views.__alloyId13653.add($.__views.__alloyId13654);
    $.__views.__alloyId13655 = Ti.UI.createView({
        id: "__alloyId13655"
    });
    $.__views.__alloyId13655 && $.addTopLevelView($.__views.__alloyId13655);
    $.__views.__alloyId13656 = Ti.UI.createView({
        id: "__alloyId13656"
    });
    $.__views.__alloyId13655.add($.__views.__alloyId13656);
    $.__views.__alloyId13657 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13657"
    });
    $.__views.__alloyId13656.add($.__views.__alloyId13657);
    $.__views.__alloyId13658 = Ti.UI.createView({
        id: "__alloyId13658"
    });
    $.__views.__alloyId13658 && $.addTopLevelView($.__views.__alloyId13658);
    $.__views.__alloyId13659 = Ti.UI.createView({
        id: "__alloyId13659"
    });
    $.__views.__alloyId13658.add($.__views.__alloyId13659);
    $.__views.__alloyId13660 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13660"
    });
    $.__views.__alloyId13659.add($.__views.__alloyId13660);
    $.__views.__alloyId13661 = Ti.UI.createView({
        id: "__alloyId13661"
    });
    $.__views.__alloyId13661 && $.addTopLevelView($.__views.__alloyId13661);
    $.__views.__alloyId13662 = Ti.UI.createView({
        id: "__alloyId13662"
    });
    $.__views.__alloyId13661.add($.__views.__alloyId13662);
    $.__views.__alloyId13663 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13663"
    });
    $.__views.__alloyId13662.add($.__views.__alloyId13663);
    $.__views.__alloyId13664 = Ti.UI.createView({
        id: "__alloyId13664"
    });
    $.__views.__alloyId13664 && $.addTopLevelView($.__views.__alloyId13664);
    $.__views.__alloyId13665 = Ti.UI.createView({
        id: "__alloyId13665"
    });
    $.__views.__alloyId13664.add($.__views.__alloyId13665);
    $.__views.__alloyId13666 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13666"
    });
    $.__views.__alloyId13665.add($.__views.__alloyId13666);
    $.__views.__alloyId13667 = Ti.UI.createView({
        id: "__alloyId13667"
    });
    $.__views.__alloyId13667 && $.addTopLevelView($.__views.__alloyId13667);
    $.__views.__alloyId13668 = Ti.UI.createView({
        id: "__alloyId13668"
    });
    $.__views.__alloyId13667.add($.__views.__alloyId13668);
    $.__views.__alloyId13669 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13669"
    });
    $.__views.__alloyId13668.add($.__views.__alloyId13669);
    $.__views.__alloyId13670 = Ti.UI.createView({
        id: "__alloyId13670"
    });
    $.__views.__alloyId13670 && $.addTopLevelView($.__views.__alloyId13670);
    $.__views.__alloyId13671 = Ti.UI.createView({
        id: "__alloyId13671"
    });
    $.__views.__alloyId13670.add($.__views.__alloyId13671);
    $.__views.__alloyId13672 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13672"
    });
    $.__views.__alloyId13671.add($.__views.__alloyId13672);
    $.__views.__alloyId13673 = Ti.UI.createView({
        id: "__alloyId13673"
    });
    $.__views.__alloyId13673 && $.addTopLevelView($.__views.__alloyId13673);
    $.__views.__alloyId13674 = Ti.UI.createView({
        id: "__alloyId13674"
    });
    $.__views.__alloyId13673.add($.__views.__alloyId13674);
    $.__views.__alloyId13675 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13675"
    });
    $.__views.__alloyId13674.add($.__views.__alloyId13675);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;