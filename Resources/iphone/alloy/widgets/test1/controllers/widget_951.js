function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_951";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_951 = Ti.UI.createView({
        id: "widget_951"
    });
    $.__views.widget_951 && $.addTopLevelView($.__views.widget_951);
    $.__views.__alloyId24648 = Ti.UI.createView({
        id: "__alloyId24648"
    });
    $.__views.widget_951.add($.__views.__alloyId24648);
    $.__views.__alloyId24649 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24649"
    });
    $.__views.__alloyId24648.add($.__views.__alloyId24649);
    $.__views.__alloyId24650 = Ti.UI.createView({
        id: "__alloyId24650"
    });
    $.__views.__alloyId24650 && $.addTopLevelView($.__views.__alloyId24650);
    $.__views.__alloyId24651 = Ti.UI.createView({
        id: "__alloyId24651"
    });
    $.__views.__alloyId24650.add($.__views.__alloyId24651);
    $.__views.__alloyId24652 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24652"
    });
    $.__views.__alloyId24651.add($.__views.__alloyId24652);
    $.__views.__alloyId24653 = Ti.UI.createView({
        id: "__alloyId24653"
    });
    $.__views.__alloyId24653 && $.addTopLevelView($.__views.__alloyId24653);
    $.__views.__alloyId24654 = Ti.UI.createView({
        id: "__alloyId24654"
    });
    $.__views.__alloyId24653.add($.__views.__alloyId24654);
    $.__views.__alloyId24655 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24655"
    });
    $.__views.__alloyId24654.add($.__views.__alloyId24655);
    $.__views.__alloyId24656 = Ti.UI.createView({
        id: "__alloyId24656"
    });
    $.__views.__alloyId24656 && $.addTopLevelView($.__views.__alloyId24656);
    $.__views.__alloyId24657 = Ti.UI.createView({
        id: "__alloyId24657"
    });
    $.__views.__alloyId24656.add($.__views.__alloyId24657);
    $.__views.__alloyId24658 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24658"
    });
    $.__views.__alloyId24657.add($.__views.__alloyId24658);
    $.__views.__alloyId24659 = Ti.UI.createView({
        id: "__alloyId24659"
    });
    $.__views.__alloyId24659 && $.addTopLevelView($.__views.__alloyId24659);
    $.__views.__alloyId24660 = Ti.UI.createView({
        id: "__alloyId24660"
    });
    $.__views.__alloyId24659.add($.__views.__alloyId24660);
    $.__views.__alloyId24661 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24661"
    });
    $.__views.__alloyId24660.add($.__views.__alloyId24661);
    $.__views.__alloyId24662 = Ti.UI.createView({
        id: "__alloyId24662"
    });
    $.__views.__alloyId24662 && $.addTopLevelView($.__views.__alloyId24662);
    $.__views.__alloyId24663 = Ti.UI.createView({
        id: "__alloyId24663"
    });
    $.__views.__alloyId24662.add($.__views.__alloyId24663);
    $.__views.__alloyId24664 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24664"
    });
    $.__views.__alloyId24663.add($.__views.__alloyId24664);
    $.__views.__alloyId24665 = Ti.UI.createView({
        id: "__alloyId24665"
    });
    $.__views.__alloyId24665 && $.addTopLevelView($.__views.__alloyId24665);
    $.__views.__alloyId24666 = Ti.UI.createView({
        id: "__alloyId24666"
    });
    $.__views.__alloyId24665.add($.__views.__alloyId24666);
    $.__views.__alloyId24667 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24667"
    });
    $.__views.__alloyId24666.add($.__views.__alloyId24667);
    $.__views.__alloyId24668 = Ti.UI.createView({
        id: "__alloyId24668"
    });
    $.__views.__alloyId24668 && $.addTopLevelView($.__views.__alloyId24668);
    $.__views.__alloyId24669 = Ti.UI.createView({
        id: "__alloyId24669"
    });
    $.__views.__alloyId24668.add($.__views.__alloyId24669);
    $.__views.__alloyId24670 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24670"
    });
    $.__views.__alloyId24669.add($.__views.__alloyId24670);
    $.__views.__alloyId24671 = Ti.UI.createView({
        id: "__alloyId24671"
    });
    $.__views.__alloyId24671 && $.addTopLevelView($.__views.__alloyId24671);
    $.__views.__alloyId24672 = Ti.UI.createView({
        id: "__alloyId24672"
    });
    $.__views.__alloyId24671.add($.__views.__alloyId24672);
    $.__views.__alloyId24673 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24673"
    });
    $.__views.__alloyId24672.add($.__views.__alloyId24673);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;