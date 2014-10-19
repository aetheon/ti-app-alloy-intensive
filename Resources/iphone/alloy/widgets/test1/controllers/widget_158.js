function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_158";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_158 = Ti.UI.createView({
        id: "widget_158"
    });
    $.__views.widget_158 && $.addTopLevelView($.__views.widget_158);
    $.__views.__alloyId1742 = Ti.UI.createView({
        id: "__alloyId1742"
    });
    $.__views.widget_158.add($.__views.__alloyId1742);
    $.__views.__alloyId1743 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1743"
    });
    $.__views.__alloyId1742.add($.__views.__alloyId1743);
    $.__views.__alloyId1744 = Ti.UI.createView({
        id: "__alloyId1744"
    });
    $.__views.__alloyId1744 && $.addTopLevelView($.__views.__alloyId1744);
    $.__views.__alloyId1745 = Ti.UI.createView({
        id: "__alloyId1745"
    });
    $.__views.__alloyId1744.add($.__views.__alloyId1745);
    $.__views.__alloyId1746 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1746"
    });
    $.__views.__alloyId1745.add($.__views.__alloyId1746);
    $.__views.__alloyId1747 = Ti.UI.createView({
        id: "__alloyId1747"
    });
    $.__views.__alloyId1747 && $.addTopLevelView($.__views.__alloyId1747);
    $.__views.__alloyId1748 = Ti.UI.createView({
        id: "__alloyId1748"
    });
    $.__views.__alloyId1747.add($.__views.__alloyId1748);
    $.__views.__alloyId1749 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1749"
    });
    $.__views.__alloyId1748.add($.__views.__alloyId1749);
    $.__views.__alloyId1750 = Ti.UI.createView({
        id: "__alloyId1750"
    });
    $.__views.__alloyId1750 && $.addTopLevelView($.__views.__alloyId1750);
    $.__views.__alloyId1751 = Ti.UI.createView({
        id: "__alloyId1751"
    });
    $.__views.__alloyId1750.add($.__views.__alloyId1751);
    $.__views.__alloyId1752 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1752"
    });
    $.__views.__alloyId1751.add($.__views.__alloyId1752);
    $.__views.__alloyId1753 = Ti.UI.createView({
        id: "__alloyId1753"
    });
    $.__views.__alloyId1753 && $.addTopLevelView($.__views.__alloyId1753);
    $.__views.__alloyId1754 = Ti.UI.createView({
        id: "__alloyId1754"
    });
    $.__views.__alloyId1753.add($.__views.__alloyId1754);
    $.__views.__alloyId1755 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1755"
    });
    $.__views.__alloyId1754.add($.__views.__alloyId1755);
    $.__views.__alloyId1756 = Ti.UI.createView({
        id: "__alloyId1756"
    });
    $.__views.__alloyId1756 && $.addTopLevelView($.__views.__alloyId1756);
    $.__views.__alloyId1757 = Ti.UI.createView({
        id: "__alloyId1757"
    });
    $.__views.__alloyId1756.add($.__views.__alloyId1757);
    $.__views.__alloyId1758 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1758"
    });
    $.__views.__alloyId1757.add($.__views.__alloyId1758);
    $.__views.__alloyId1759 = Ti.UI.createView({
        id: "__alloyId1759"
    });
    $.__views.__alloyId1759 && $.addTopLevelView($.__views.__alloyId1759);
    $.__views.__alloyId1760 = Ti.UI.createView({
        id: "__alloyId1760"
    });
    $.__views.__alloyId1759.add($.__views.__alloyId1760);
    $.__views.__alloyId1761 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1761"
    });
    $.__views.__alloyId1760.add($.__views.__alloyId1761);
    $.__views.__alloyId1762 = Ti.UI.createView({
        id: "__alloyId1762"
    });
    $.__views.__alloyId1762 && $.addTopLevelView($.__views.__alloyId1762);
    $.__views.__alloyId1763 = Ti.UI.createView({
        id: "__alloyId1763"
    });
    $.__views.__alloyId1762.add($.__views.__alloyId1763);
    $.__views.__alloyId1764 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1764"
    });
    $.__views.__alloyId1763.add($.__views.__alloyId1764);
    $.__views.__alloyId1765 = Ti.UI.createView({
        id: "__alloyId1765"
    });
    $.__views.__alloyId1765 && $.addTopLevelView($.__views.__alloyId1765);
    $.__views.__alloyId1766 = Ti.UI.createView({
        id: "__alloyId1766"
    });
    $.__views.__alloyId1765.add($.__views.__alloyId1766);
    $.__views.__alloyId1767 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1767"
    });
    $.__views.__alloyId1766.add($.__views.__alloyId1767);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;