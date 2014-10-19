function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_16";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_16 = Ti.UI.createView({
        id: "widget_16"
    });
    $.__views.widget_16 && $.addTopLevelView($.__views.widget_16);
    $.__views.__alloyId1794 = Ti.UI.createView({
        id: "__alloyId1794"
    });
    $.__views.widget_16.add($.__views.__alloyId1794);
    $.__views.__alloyId1795 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1795"
    });
    $.__views.__alloyId1794.add($.__views.__alloyId1795);
    $.__views.__alloyId1796 = Ti.UI.createView({
        id: "__alloyId1796"
    });
    $.__views.__alloyId1796 && $.addTopLevelView($.__views.__alloyId1796);
    $.__views.__alloyId1797 = Ti.UI.createView({
        id: "__alloyId1797"
    });
    $.__views.__alloyId1796.add($.__views.__alloyId1797);
    $.__views.__alloyId1798 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1798"
    });
    $.__views.__alloyId1797.add($.__views.__alloyId1798);
    $.__views.__alloyId1799 = Ti.UI.createView({
        id: "__alloyId1799"
    });
    $.__views.__alloyId1799 && $.addTopLevelView($.__views.__alloyId1799);
    $.__views.__alloyId1800 = Ti.UI.createView({
        id: "__alloyId1800"
    });
    $.__views.__alloyId1799.add($.__views.__alloyId1800);
    $.__views.__alloyId1801 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1801"
    });
    $.__views.__alloyId1800.add($.__views.__alloyId1801);
    $.__views.__alloyId1802 = Ti.UI.createView({
        id: "__alloyId1802"
    });
    $.__views.__alloyId1802 && $.addTopLevelView($.__views.__alloyId1802);
    $.__views.__alloyId1803 = Ti.UI.createView({
        id: "__alloyId1803"
    });
    $.__views.__alloyId1802.add($.__views.__alloyId1803);
    $.__views.__alloyId1804 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1804"
    });
    $.__views.__alloyId1803.add($.__views.__alloyId1804);
    $.__views.__alloyId1805 = Ti.UI.createView({
        id: "__alloyId1805"
    });
    $.__views.__alloyId1805 && $.addTopLevelView($.__views.__alloyId1805);
    $.__views.__alloyId1806 = Ti.UI.createView({
        id: "__alloyId1806"
    });
    $.__views.__alloyId1805.add($.__views.__alloyId1806);
    $.__views.__alloyId1807 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1807"
    });
    $.__views.__alloyId1806.add($.__views.__alloyId1807);
    $.__views.__alloyId1808 = Ti.UI.createView({
        id: "__alloyId1808"
    });
    $.__views.__alloyId1808 && $.addTopLevelView($.__views.__alloyId1808);
    $.__views.__alloyId1809 = Ti.UI.createView({
        id: "__alloyId1809"
    });
    $.__views.__alloyId1808.add($.__views.__alloyId1809);
    $.__views.__alloyId1810 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1810"
    });
    $.__views.__alloyId1809.add($.__views.__alloyId1810);
    $.__views.__alloyId1811 = Ti.UI.createView({
        id: "__alloyId1811"
    });
    $.__views.__alloyId1811 && $.addTopLevelView($.__views.__alloyId1811);
    $.__views.__alloyId1812 = Ti.UI.createView({
        id: "__alloyId1812"
    });
    $.__views.__alloyId1811.add($.__views.__alloyId1812);
    $.__views.__alloyId1813 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1813"
    });
    $.__views.__alloyId1812.add($.__views.__alloyId1813);
    $.__views.__alloyId1814 = Ti.UI.createView({
        id: "__alloyId1814"
    });
    $.__views.__alloyId1814 && $.addTopLevelView($.__views.__alloyId1814);
    $.__views.__alloyId1815 = Ti.UI.createView({
        id: "__alloyId1815"
    });
    $.__views.__alloyId1814.add($.__views.__alloyId1815);
    $.__views.__alloyId1816 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1816"
    });
    $.__views.__alloyId1815.add($.__views.__alloyId1816);
    $.__views.__alloyId1817 = Ti.UI.createView({
        id: "__alloyId1817"
    });
    $.__views.__alloyId1817 && $.addTopLevelView($.__views.__alloyId1817);
    $.__views.__alloyId1818 = Ti.UI.createView({
        id: "__alloyId1818"
    });
    $.__views.__alloyId1817.add($.__views.__alloyId1818);
    $.__views.__alloyId1819 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1819"
    });
    $.__views.__alloyId1818.add($.__views.__alloyId1819);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;