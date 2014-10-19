function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_472";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_472 = Ti.UI.createView({
        id: "widget_472"
    });
    $.__views.widget_472 && $.addTopLevelView($.__views.widget_472);
    $.__views.__alloyId10816 = Ti.UI.createView({
        id: "__alloyId10816"
    });
    $.__views.widget_472.add($.__views.__alloyId10816);
    $.__views.__alloyId10817 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10817"
    });
    $.__views.__alloyId10816.add($.__views.__alloyId10817);
    $.__views.__alloyId10818 = Ti.UI.createView({
        id: "__alloyId10818"
    });
    $.__views.__alloyId10818 && $.addTopLevelView($.__views.__alloyId10818);
    $.__views.__alloyId10819 = Ti.UI.createView({
        id: "__alloyId10819"
    });
    $.__views.__alloyId10818.add($.__views.__alloyId10819);
    $.__views.__alloyId10820 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10820"
    });
    $.__views.__alloyId10819.add($.__views.__alloyId10820);
    $.__views.__alloyId10821 = Ti.UI.createView({
        id: "__alloyId10821"
    });
    $.__views.__alloyId10821 && $.addTopLevelView($.__views.__alloyId10821);
    $.__views.__alloyId10822 = Ti.UI.createView({
        id: "__alloyId10822"
    });
    $.__views.__alloyId10821.add($.__views.__alloyId10822);
    $.__views.__alloyId10823 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10823"
    });
    $.__views.__alloyId10822.add($.__views.__alloyId10823);
    $.__views.__alloyId10824 = Ti.UI.createView({
        id: "__alloyId10824"
    });
    $.__views.__alloyId10824 && $.addTopLevelView($.__views.__alloyId10824);
    $.__views.__alloyId10825 = Ti.UI.createView({
        id: "__alloyId10825"
    });
    $.__views.__alloyId10824.add($.__views.__alloyId10825);
    $.__views.__alloyId10826 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10826"
    });
    $.__views.__alloyId10825.add($.__views.__alloyId10826);
    $.__views.__alloyId10827 = Ti.UI.createView({
        id: "__alloyId10827"
    });
    $.__views.__alloyId10827 && $.addTopLevelView($.__views.__alloyId10827);
    $.__views.__alloyId10828 = Ti.UI.createView({
        id: "__alloyId10828"
    });
    $.__views.__alloyId10827.add($.__views.__alloyId10828);
    $.__views.__alloyId10829 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10829"
    });
    $.__views.__alloyId10828.add($.__views.__alloyId10829);
    $.__views.__alloyId10830 = Ti.UI.createView({
        id: "__alloyId10830"
    });
    $.__views.__alloyId10830 && $.addTopLevelView($.__views.__alloyId10830);
    $.__views.__alloyId10831 = Ti.UI.createView({
        id: "__alloyId10831"
    });
    $.__views.__alloyId10830.add($.__views.__alloyId10831);
    $.__views.__alloyId10832 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10832"
    });
    $.__views.__alloyId10831.add($.__views.__alloyId10832);
    $.__views.__alloyId10833 = Ti.UI.createView({
        id: "__alloyId10833"
    });
    $.__views.__alloyId10833 && $.addTopLevelView($.__views.__alloyId10833);
    $.__views.__alloyId10834 = Ti.UI.createView({
        id: "__alloyId10834"
    });
    $.__views.__alloyId10833.add($.__views.__alloyId10834);
    $.__views.__alloyId10835 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10835"
    });
    $.__views.__alloyId10834.add($.__views.__alloyId10835);
    $.__views.__alloyId10836 = Ti.UI.createView({
        id: "__alloyId10836"
    });
    $.__views.__alloyId10836 && $.addTopLevelView($.__views.__alloyId10836);
    $.__views.__alloyId10837 = Ti.UI.createView({
        id: "__alloyId10837"
    });
    $.__views.__alloyId10836.add($.__views.__alloyId10837);
    $.__views.__alloyId10838 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10838"
    });
    $.__views.__alloyId10837.add($.__views.__alloyId10838);
    $.__views.__alloyId10839 = Ti.UI.createView({
        id: "__alloyId10839"
    });
    $.__views.__alloyId10839 && $.addTopLevelView($.__views.__alloyId10839);
    $.__views.__alloyId10840 = Ti.UI.createView({
        id: "__alloyId10840"
    });
    $.__views.__alloyId10839.add($.__views.__alloyId10840);
    $.__views.__alloyId10841 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId10841"
    });
    $.__views.__alloyId10840.add($.__views.__alloyId10841);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;