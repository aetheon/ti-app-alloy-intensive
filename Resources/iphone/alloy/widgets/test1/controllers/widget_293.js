function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_293";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_293 = Ti.UI.createView({
        id: "widget_293"
    });
    $.__views.widget_293 && $.addTopLevelView($.__views.widget_293);
    $.__views.__alloyId5642 = Ti.UI.createView({
        id: "__alloyId5642"
    });
    $.__views.widget_293.add($.__views.__alloyId5642);
    $.__views.__alloyId5643 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5643"
    });
    $.__views.__alloyId5642.add($.__views.__alloyId5643);
    $.__views.__alloyId5644 = Ti.UI.createView({
        id: "__alloyId5644"
    });
    $.__views.__alloyId5644 && $.addTopLevelView($.__views.__alloyId5644);
    $.__views.__alloyId5645 = Ti.UI.createView({
        id: "__alloyId5645"
    });
    $.__views.__alloyId5644.add($.__views.__alloyId5645);
    $.__views.__alloyId5646 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5646"
    });
    $.__views.__alloyId5645.add($.__views.__alloyId5646);
    $.__views.__alloyId5647 = Ti.UI.createView({
        id: "__alloyId5647"
    });
    $.__views.__alloyId5647 && $.addTopLevelView($.__views.__alloyId5647);
    $.__views.__alloyId5648 = Ti.UI.createView({
        id: "__alloyId5648"
    });
    $.__views.__alloyId5647.add($.__views.__alloyId5648);
    $.__views.__alloyId5649 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5649"
    });
    $.__views.__alloyId5648.add($.__views.__alloyId5649);
    $.__views.__alloyId5650 = Ti.UI.createView({
        id: "__alloyId5650"
    });
    $.__views.__alloyId5650 && $.addTopLevelView($.__views.__alloyId5650);
    $.__views.__alloyId5651 = Ti.UI.createView({
        id: "__alloyId5651"
    });
    $.__views.__alloyId5650.add($.__views.__alloyId5651);
    $.__views.__alloyId5652 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5652"
    });
    $.__views.__alloyId5651.add($.__views.__alloyId5652);
    $.__views.__alloyId5653 = Ti.UI.createView({
        id: "__alloyId5653"
    });
    $.__views.__alloyId5653 && $.addTopLevelView($.__views.__alloyId5653);
    $.__views.__alloyId5654 = Ti.UI.createView({
        id: "__alloyId5654"
    });
    $.__views.__alloyId5653.add($.__views.__alloyId5654);
    $.__views.__alloyId5655 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5655"
    });
    $.__views.__alloyId5654.add($.__views.__alloyId5655);
    $.__views.__alloyId5656 = Ti.UI.createView({
        id: "__alloyId5656"
    });
    $.__views.__alloyId5656 && $.addTopLevelView($.__views.__alloyId5656);
    $.__views.__alloyId5657 = Ti.UI.createView({
        id: "__alloyId5657"
    });
    $.__views.__alloyId5656.add($.__views.__alloyId5657);
    $.__views.__alloyId5658 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5658"
    });
    $.__views.__alloyId5657.add($.__views.__alloyId5658);
    $.__views.__alloyId5659 = Ti.UI.createView({
        id: "__alloyId5659"
    });
    $.__views.__alloyId5659 && $.addTopLevelView($.__views.__alloyId5659);
    $.__views.__alloyId5660 = Ti.UI.createView({
        id: "__alloyId5660"
    });
    $.__views.__alloyId5659.add($.__views.__alloyId5660);
    $.__views.__alloyId5661 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5661"
    });
    $.__views.__alloyId5660.add($.__views.__alloyId5661);
    $.__views.__alloyId5662 = Ti.UI.createView({
        id: "__alloyId5662"
    });
    $.__views.__alloyId5662 && $.addTopLevelView($.__views.__alloyId5662);
    $.__views.__alloyId5663 = Ti.UI.createView({
        id: "__alloyId5663"
    });
    $.__views.__alloyId5662.add($.__views.__alloyId5663);
    $.__views.__alloyId5664 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5664"
    });
    $.__views.__alloyId5663.add($.__views.__alloyId5664);
    $.__views.__alloyId5665 = Ti.UI.createView({
        id: "__alloyId5665"
    });
    $.__views.__alloyId5665 && $.addTopLevelView($.__views.__alloyId5665);
    $.__views.__alloyId5666 = Ti.UI.createView({
        id: "__alloyId5666"
    });
    $.__views.__alloyId5665.add($.__views.__alloyId5666);
    $.__views.__alloyId5667 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5667"
    });
    $.__views.__alloyId5666.add($.__views.__alloyId5667);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;