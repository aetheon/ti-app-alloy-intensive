function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_402";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_402 = Ti.UI.createView({
        id: "widget_402"
    });
    $.__views.widget_402 && $.addTopLevelView($.__views.widget_402);
    $.__views.__alloyId8814 = Ti.UI.createView({
        id: "__alloyId8814"
    });
    $.__views.widget_402.add($.__views.__alloyId8814);
    $.__views.__alloyId8815 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8815"
    });
    $.__views.__alloyId8814.add($.__views.__alloyId8815);
    $.__views.__alloyId8816 = Ti.UI.createView({
        id: "__alloyId8816"
    });
    $.__views.__alloyId8816 && $.addTopLevelView($.__views.__alloyId8816);
    $.__views.__alloyId8817 = Ti.UI.createView({
        id: "__alloyId8817"
    });
    $.__views.__alloyId8816.add($.__views.__alloyId8817);
    $.__views.__alloyId8818 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8818"
    });
    $.__views.__alloyId8817.add($.__views.__alloyId8818);
    $.__views.__alloyId8819 = Ti.UI.createView({
        id: "__alloyId8819"
    });
    $.__views.__alloyId8819 && $.addTopLevelView($.__views.__alloyId8819);
    $.__views.__alloyId8820 = Ti.UI.createView({
        id: "__alloyId8820"
    });
    $.__views.__alloyId8819.add($.__views.__alloyId8820);
    $.__views.__alloyId8821 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8821"
    });
    $.__views.__alloyId8820.add($.__views.__alloyId8821);
    $.__views.__alloyId8822 = Ti.UI.createView({
        id: "__alloyId8822"
    });
    $.__views.__alloyId8822 && $.addTopLevelView($.__views.__alloyId8822);
    $.__views.__alloyId8823 = Ti.UI.createView({
        id: "__alloyId8823"
    });
    $.__views.__alloyId8822.add($.__views.__alloyId8823);
    $.__views.__alloyId8824 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8824"
    });
    $.__views.__alloyId8823.add($.__views.__alloyId8824);
    $.__views.__alloyId8825 = Ti.UI.createView({
        id: "__alloyId8825"
    });
    $.__views.__alloyId8825 && $.addTopLevelView($.__views.__alloyId8825);
    $.__views.__alloyId8826 = Ti.UI.createView({
        id: "__alloyId8826"
    });
    $.__views.__alloyId8825.add($.__views.__alloyId8826);
    $.__views.__alloyId8827 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8827"
    });
    $.__views.__alloyId8826.add($.__views.__alloyId8827);
    $.__views.__alloyId8828 = Ti.UI.createView({
        id: "__alloyId8828"
    });
    $.__views.__alloyId8828 && $.addTopLevelView($.__views.__alloyId8828);
    $.__views.__alloyId8829 = Ti.UI.createView({
        id: "__alloyId8829"
    });
    $.__views.__alloyId8828.add($.__views.__alloyId8829);
    $.__views.__alloyId8830 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8830"
    });
    $.__views.__alloyId8829.add($.__views.__alloyId8830);
    $.__views.__alloyId8831 = Ti.UI.createView({
        id: "__alloyId8831"
    });
    $.__views.__alloyId8831 && $.addTopLevelView($.__views.__alloyId8831);
    $.__views.__alloyId8832 = Ti.UI.createView({
        id: "__alloyId8832"
    });
    $.__views.__alloyId8831.add($.__views.__alloyId8832);
    $.__views.__alloyId8833 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8833"
    });
    $.__views.__alloyId8832.add($.__views.__alloyId8833);
    $.__views.__alloyId8834 = Ti.UI.createView({
        id: "__alloyId8834"
    });
    $.__views.__alloyId8834 && $.addTopLevelView($.__views.__alloyId8834);
    $.__views.__alloyId8835 = Ti.UI.createView({
        id: "__alloyId8835"
    });
    $.__views.__alloyId8834.add($.__views.__alloyId8835);
    $.__views.__alloyId8836 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8836"
    });
    $.__views.__alloyId8835.add($.__views.__alloyId8836);
    $.__views.__alloyId8837 = Ti.UI.createView({
        id: "__alloyId8837"
    });
    $.__views.__alloyId8837 && $.addTopLevelView($.__views.__alloyId8837);
    $.__views.__alloyId8838 = Ti.UI.createView({
        id: "__alloyId8838"
    });
    $.__views.__alloyId8837.add($.__views.__alloyId8838);
    $.__views.__alloyId8839 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8839"
    });
    $.__views.__alloyId8838.add($.__views.__alloyId8839);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;