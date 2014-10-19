function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_882";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_882 = Ti.UI.createView({
        id: "widget_882"
    });
    $.__views.widget_882 && $.addTopLevelView($.__views.widget_882);
    $.__views.__alloyId22646 = Ti.UI.createView({
        id: "__alloyId22646"
    });
    $.__views.widget_882.add($.__views.__alloyId22646);
    $.__views.__alloyId22647 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22647"
    });
    $.__views.__alloyId22646.add($.__views.__alloyId22647);
    $.__views.__alloyId22648 = Ti.UI.createView({
        id: "__alloyId22648"
    });
    $.__views.__alloyId22648 && $.addTopLevelView($.__views.__alloyId22648);
    $.__views.__alloyId22649 = Ti.UI.createView({
        id: "__alloyId22649"
    });
    $.__views.__alloyId22648.add($.__views.__alloyId22649);
    $.__views.__alloyId22650 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22650"
    });
    $.__views.__alloyId22649.add($.__views.__alloyId22650);
    $.__views.__alloyId22651 = Ti.UI.createView({
        id: "__alloyId22651"
    });
    $.__views.__alloyId22651 && $.addTopLevelView($.__views.__alloyId22651);
    $.__views.__alloyId22652 = Ti.UI.createView({
        id: "__alloyId22652"
    });
    $.__views.__alloyId22651.add($.__views.__alloyId22652);
    $.__views.__alloyId22653 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22653"
    });
    $.__views.__alloyId22652.add($.__views.__alloyId22653);
    $.__views.__alloyId22654 = Ti.UI.createView({
        id: "__alloyId22654"
    });
    $.__views.__alloyId22654 && $.addTopLevelView($.__views.__alloyId22654);
    $.__views.__alloyId22655 = Ti.UI.createView({
        id: "__alloyId22655"
    });
    $.__views.__alloyId22654.add($.__views.__alloyId22655);
    $.__views.__alloyId22656 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22656"
    });
    $.__views.__alloyId22655.add($.__views.__alloyId22656);
    $.__views.__alloyId22657 = Ti.UI.createView({
        id: "__alloyId22657"
    });
    $.__views.__alloyId22657 && $.addTopLevelView($.__views.__alloyId22657);
    $.__views.__alloyId22658 = Ti.UI.createView({
        id: "__alloyId22658"
    });
    $.__views.__alloyId22657.add($.__views.__alloyId22658);
    $.__views.__alloyId22659 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22659"
    });
    $.__views.__alloyId22658.add($.__views.__alloyId22659);
    $.__views.__alloyId22660 = Ti.UI.createView({
        id: "__alloyId22660"
    });
    $.__views.__alloyId22660 && $.addTopLevelView($.__views.__alloyId22660);
    $.__views.__alloyId22661 = Ti.UI.createView({
        id: "__alloyId22661"
    });
    $.__views.__alloyId22660.add($.__views.__alloyId22661);
    $.__views.__alloyId22662 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22662"
    });
    $.__views.__alloyId22661.add($.__views.__alloyId22662);
    $.__views.__alloyId22663 = Ti.UI.createView({
        id: "__alloyId22663"
    });
    $.__views.__alloyId22663 && $.addTopLevelView($.__views.__alloyId22663);
    $.__views.__alloyId22664 = Ti.UI.createView({
        id: "__alloyId22664"
    });
    $.__views.__alloyId22663.add($.__views.__alloyId22664);
    $.__views.__alloyId22665 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22665"
    });
    $.__views.__alloyId22664.add($.__views.__alloyId22665);
    $.__views.__alloyId22666 = Ti.UI.createView({
        id: "__alloyId22666"
    });
    $.__views.__alloyId22666 && $.addTopLevelView($.__views.__alloyId22666);
    $.__views.__alloyId22667 = Ti.UI.createView({
        id: "__alloyId22667"
    });
    $.__views.__alloyId22666.add($.__views.__alloyId22667);
    $.__views.__alloyId22668 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22668"
    });
    $.__views.__alloyId22667.add($.__views.__alloyId22668);
    $.__views.__alloyId22669 = Ti.UI.createView({
        id: "__alloyId22669"
    });
    $.__views.__alloyId22669 && $.addTopLevelView($.__views.__alloyId22669);
    $.__views.__alloyId22670 = Ti.UI.createView({
        id: "__alloyId22670"
    });
    $.__views.__alloyId22669.add($.__views.__alloyId22670);
    $.__views.__alloyId22671 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22671"
    });
    $.__views.__alloyId22670.add($.__views.__alloyId22671);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;