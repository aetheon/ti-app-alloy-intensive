function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_674";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_674 = Ti.UI.createView({
        id: "widget_674"
    });
    $.__views.widget_674 && $.addTopLevelView($.__views.widget_674);
    $.__views.__alloyId16640 = Ti.UI.createView({
        id: "__alloyId16640"
    });
    $.__views.widget_674.add($.__views.__alloyId16640);
    $.__views.__alloyId16641 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16641"
    });
    $.__views.__alloyId16640.add($.__views.__alloyId16641);
    $.__views.__alloyId16642 = Ti.UI.createView({
        id: "__alloyId16642"
    });
    $.__views.__alloyId16642 && $.addTopLevelView($.__views.__alloyId16642);
    $.__views.__alloyId16643 = Ti.UI.createView({
        id: "__alloyId16643"
    });
    $.__views.__alloyId16642.add($.__views.__alloyId16643);
    $.__views.__alloyId16644 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16644"
    });
    $.__views.__alloyId16643.add($.__views.__alloyId16644);
    $.__views.__alloyId16645 = Ti.UI.createView({
        id: "__alloyId16645"
    });
    $.__views.__alloyId16645 && $.addTopLevelView($.__views.__alloyId16645);
    $.__views.__alloyId16646 = Ti.UI.createView({
        id: "__alloyId16646"
    });
    $.__views.__alloyId16645.add($.__views.__alloyId16646);
    $.__views.__alloyId16647 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16647"
    });
    $.__views.__alloyId16646.add($.__views.__alloyId16647);
    $.__views.__alloyId16648 = Ti.UI.createView({
        id: "__alloyId16648"
    });
    $.__views.__alloyId16648 && $.addTopLevelView($.__views.__alloyId16648);
    $.__views.__alloyId16649 = Ti.UI.createView({
        id: "__alloyId16649"
    });
    $.__views.__alloyId16648.add($.__views.__alloyId16649);
    $.__views.__alloyId16650 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16650"
    });
    $.__views.__alloyId16649.add($.__views.__alloyId16650);
    $.__views.__alloyId16651 = Ti.UI.createView({
        id: "__alloyId16651"
    });
    $.__views.__alloyId16651 && $.addTopLevelView($.__views.__alloyId16651);
    $.__views.__alloyId16652 = Ti.UI.createView({
        id: "__alloyId16652"
    });
    $.__views.__alloyId16651.add($.__views.__alloyId16652);
    $.__views.__alloyId16653 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16653"
    });
    $.__views.__alloyId16652.add($.__views.__alloyId16653);
    $.__views.__alloyId16654 = Ti.UI.createView({
        id: "__alloyId16654"
    });
    $.__views.__alloyId16654 && $.addTopLevelView($.__views.__alloyId16654);
    $.__views.__alloyId16655 = Ti.UI.createView({
        id: "__alloyId16655"
    });
    $.__views.__alloyId16654.add($.__views.__alloyId16655);
    $.__views.__alloyId16656 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16656"
    });
    $.__views.__alloyId16655.add($.__views.__alloyId16656);
    $.__views.__alloyId16657 = Ti.UI.createView({
        id: "__alloyId16657"
    });
    $.__views.__alloyId16657 && $.addTopLevelView($.__views.__alloyId16657);
    $.__views.__alloyId16658 = Ti.UI.createView({
        id: "__alloyId16658"
    });
    $.__views.__alloyId16657.add($.__views.__alloyId16658);
    $.__views.__alloyId16659 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16659"
    });
    $.__views.__alloyId16658.add($.__views.__alloyId16659);
    $.__views.__alloyId16660 = Ti.UI.createView({
        id: "__alloyId16660"
    });
    $.__views.__alloyId16660 && $.addTopLevelView($.__views.__alloyId16660);
    $.__views.__alloyId16661 = Ti.UI.createView({
        id: "__alloyId16661"
    });
    $.__views.__alloyId16660.add($.__views.__alloyId16661);
    $.__views.__alloyId16662 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16662"
    });
    $.__views.__alloyId16661.add($.__views.__alloyId16662);
    $.__views.__alloyId16663 = Ti.UI.createView({
        id: "__alloyId16663"
    });
    $.__views.__alloyId16663 && $.addTopLevelView($.__views.__alloyId16663);
    $.__views.__alloyId16664 = Ti.UI.createView({
        id: "__alloyId16664"
    });
    $.__views.__alloyId16663.add($.__views.__alloyId16664);
    $.__views.__alloyId16665 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16665"
    });
    $.__views.__alloyId16664.add($.__views.__alloyId16665);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;