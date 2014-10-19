function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_812";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_812 = Ti.UI.createView({
        id: "widget_812"
    });
    $.__views.widget_812 && $.addTopLevelView($.__views.widget_812);
    $.__views.__alloyId20644 = Ti.UI.createView({
        id: "__alloyId20644"
    });
    $.__views.widget_812.add($.__views.__alloyId20644);
    $.__views.__alloyId20645 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20645"
    });
    $.__views.__alloyId20644.add($.__views.__alloyId20645);
    $.__views.__alloyId20646 = Ti.UI.createView({
        id: "__alloyId20646"
    });
    $.__views.__alloyId20646 && $.addTopLevelView($.__views.__alloyId20646);
    $.__views.__alloyId20647 = Ti.UI.createView({
        id: "__alloyId20647"
    });
    $.__views.__alloyId20646.add($.__views.__alloyId20647);
    $.__views.__alloyId20648 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20648"
    });
    $.__views.__alloyId20647.add($.__views.__alloyId20648);
    $.__views.__alloyId20649 = Ti.UI.createView({
        id: "__alloyId20649"
    });
    $.__views.__alloyId20649 && $.addTopLevelView($.__views.__alloyId20649);
    $.__views.__alloyId20650 = Ti.UI.createView({
        id: "__alloyId20650"
    });
    $.__views.__alloyId20649.add($.__views.__alloyId20650);
    $.__views.__alloyId20651 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20651"
    });
    $.__views.__alloyId20650.add($.__views.__alloyId20651);
    $.__views.__alloyId20652 = Ti.UI.createView({
        id: "__alloyId20652"
    });
    $.__views.__alloyId20652 && $.addTopLevelView($.__views.__alloyId20652);
    $.__views.__alloyId20653 = Ti.UI.createView({
        id: "__alloyId20653"
    });
    $.__views.__alloyId20652.add($.__views.__alloyId20653);
    $.__views.__alloyId20654 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20654"
    });
    $.__views.__alloyId20653.add($.__views.__alloyId20654);
    $.__views.__alloyId20655 = Ti.UI.createView({
        id: "__alloyId20655"
    });
    $.__views.__alloyId20655 && $.addTopLevelView($.__views.__alloyId20655);
    $.__views.__alloyId20656 = Ti.UI.createView({
        id: "__alloyId20656"
    });
    $.__views.__alloyId20655.add($.__views.__alloyId20656);
    $.__views.__alloyId20657 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20657"
    });
    $.__views.__alloyId20656.add($.__views.__alloyId20657);
    $.__views.__alloyId20658 = Ti.UI.createView({
        id: "__alloyId20658"
    });
    $.__views.__alloyId20658 && $.addTopLevelView($.__views.__alloyId20658);
    $.__views.__alloyId20659 = Ti.UI.createView({
        id: "__alloyId20659"
    });
    $.__views.__alloyId20658.add($.__views.__alloyId20659);
    $.__views.__alloyId20660 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20660"
    });
    $.__views.__alloyId20659.add($.__views.__alloyId20660);
    $.__views.__alloyId20661 = Ti.UI.createView({
        id: "__alloyId20661"
    });
    $.__views.__alloyId20661 && $.addTopLevelView($.__views.__alloyId20661);
    $.__views.__alloyId20662 = Ti.UI.createView({
        id: "__alloyId20662"
    });
    $.__views.__alloyId20661.add($.__views.__alloyId20662);
    $.__views.__alloyId20663 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20663"
    });
    $.__views.__alloyId20662.add($.__views.__alloyId20663);
    $.__views.__alloyId20664 = Ti.UI.createView({
        id: "__alloyId20664"
    });
    $.__views.__alloyId20664 && $.addTopLevelView($.__views.__alloyId20664);
    $.__views.__alloyId20665 = Ti.UI.createView({
        id: "__alloyId20665"
    });
    $.__views.__alloyId20664.add($.__views.__alloyId20665);
    $.__views.__alloyId20666 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20666"
    });
    $.__views.__alloyId20665.add($.__views.__alloyId20666);
    $.__views.__alloyId20667 = Ti.UI.createView({
        id: "__alloyId20667"
    });
    $.__views.__alloyId20667 && $.addTopLevelView($.__views.__alloyId20667);
    $.__views.__alloyId20668 = Ti.UI.createView({
        id: "__alloyId20668"
    });
    $.__views.__alloyId20667.add($.__views.__alloyId20668);
    $.__views.__alloyId20669 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20669"
    });
    $.__views.__alloyId20668.add($.__views.__alloyId20669);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;