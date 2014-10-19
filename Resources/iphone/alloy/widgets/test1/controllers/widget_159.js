function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_159";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_159 = Ti.UI.createView({
        id: "widget_159"
    });
    $.__views.widget_159 && $.addTopLevelView($.__views.widget_159);
    $.__views.__alloyId1768 = Ti.UI.createView({
        id: "__alloyId1768"
    });
    $.__views.widget_159.add($.__views.__alloyId1768);
    $.__views.__alloyId1769 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1769"
    });
    $.__views.__alloyId1768.add($.__views.__alloyId1769);
    $.__views.__alloyId1770 = Ti.UI.createView({
        id: "__alloyId1770"
    });
    $.__views.__alloyId1770 && $.addTopLevelView($.__views.__alloyId1770);
    $.__views.__alloyId1771 = Ti.UI.createView({
        id: "__alloyId1771"
    });
    $.__views.__alloyId1770.add($.__views.__alloyId1771);
    $.__views.__alloyId1772 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1772"
    });
    $.__views.__alloyId1771.add($.__views.__alloyId1772);
    $.__views.__alloyId1773 = Ti.UI.createView({
        id: "__alloyId1773"
    });
    $.__views.__alloyId1773 && $.addTopLevelView($.__views.__alloyId1773);
    $.__views.__alloyId1774 = Ti.UI.createView({
        id: "__alloyId1774"
    });
    $.__views.__alloyId1773.add($.__views.__alloyId1774);
    $.__views.__alloyId1775 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1775"
    });
    $.__views.__alloyId1774.add($.__views.__alloyId1775);
    $.__views.__alloyId1776 = Ti.UI.createView({
        id: "__alloyId1776"
    });
    $.__views.__alloyId1776 && $.addTopLevelView($.__views.__alloyId1776);
    $.__views.__alloyId1777 = Ti.UI.createView({
        id: "__alloyId1777"
    });
    $.__views.__alloyId1776.add($.__views.__alloyId1777);
    $.__views.__alloyId1778 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1778"
    });
    $.__views.__alloyId1777.add($.__views.__alloyId1778);
    $.__views.__alloyId1779 = Ti.UI.createView({
        id: "__alloyId1779"
    });
    $.__views.__alloyId1779 && $.addTopLevelView($.__views.__alloyId1779);
    $.__views.__alloyId1780 = Ti.UI.createView({
        id: "__alloyId1780"
    });
    $.__views.__alloyId1779.add($.__views.__alloyId1780);
    $.__views.__alloyId1781 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1781"
    });
    $.__views.__alloyId1780.add($.__views.__alloyId1781);
    $.__views.__alloyId1782 = Ti.UI.createView({
        id: "__alloyId1782"
    });
    $.__views.__alloyId1782 && $.addTopLevelView($.__views.__alloyId1782);
    $.__views.__alloyId1783 = Ti.UI.createView({
        id: "__alloyId1783"
    });
    $.__views.__alloyId1782.add($.__views.__alloyId1783);
    $.__views.__alloyId1784 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1784"
    });
    $.__views.__alloyId1783.add($.__views.__alloyId1784);
    $.__views.__alloyId1785 = Ti.UI.createView({
        id: "__alloyId1785"
    });
    $.__views.__alloyId1785 && $.addTopLevelView($.__views.__alloyId1785);
    $.__views.__alloyId1786 = Ti.UI.createView({
        id: "__alloyId1786"
    });
    $.__views.__alloyId1785.add($.__views.__alloyId1786);
    $.__views.__alloyId1787 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1787"
    });
    $.__views.__alloyId1786.add($.__views.__alloyId1787);
    $.__views.__alloyId1788 = Ti.UI.createView({
        id: "__alloyId1788"
    });
    $.__views.__alloyId1788 && $.addTopLevelView($.__views.__alloyId1788);
    $.__views.__alloyId1789 = Ti.UI.createView({
        id: "__alloyId1789"
    });
    $.__views.__alloyId1788.add($.__views.__alloyId1789);
    $.__views.__alloyId1790 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1790"
    });
    $.__views.__alloyId1789.add($.__views.__alloyId1790);
    $.__views.__alloyId1791 = Ti.UI.createView({
        id: "__alloyId1791"
    });
    $.__views.__alloyId1791 && $.addTopLevelView($.__views.__alloyId1791);
    $.__views.__alloyId1792 = Ti.UI.createView({
        id: "__alloyId1792"
    });
    $.__views.__alloyId1791.add($.__views.__alloyId1792);
    $.__views.__alloyId1793 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1793"
    });
    $.__views.__alloyId1792.add($.__views.__alloyId1793);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;