function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_157";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_157 = Ti.UI.createView({
        id: "widget_157"
    });
    $.__views.widget_157 && $.addTopLevelView($.__views.widget_157);
    $.__views.__alloyId1716 = Ti.UI.createView({
        id: "__alloyId1716"
    });
    $.__views.widget_157.add($.__views.__alloyId1716);
    $.__views.__alloyId1717 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1717"
    });
    $.__views.__alloyId1716.add($.__views.__alloyId1717);
    $.__views.__alloyId1718 = Ti.UI.createView({
        id: "__alloyId1718"
    });
    $.__views.__alloyId1718 && $.addTopLevelView($.__views.__alloyId1718);
    $.__views.__alloyId1719 = Ti.UI.createView({
        id: "__alloyId1719"
    });
    $.__views.__alloyId1718.add($.__views.__alloyId1719);
    $.__views.__alloyId1720 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1720"
    });
    $.__views.__alloyId1719.add($.__views.__alloyId1720);
    $.__views.__alloyId1721 = Ti.UI.createView({
        id: "__alloyId1721"
    });
    $.__views.__alloyId1721 && $.addTopLevelView($.__views.__alloyId1721);
    $.__views.__alloyId1722 = Ti.UI.createView({
        id: "__alloyId1722"
    });
    $.__views.__alloyId1721.add($.__views.__alloyId1722);
    $.__views.__alloyId1723 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1723"
    });
    $.__views.__alloyId1722.add($.__views.__alloyId1723);
    $.__views.__alloyId1724 = Ti.UI.createView({
        id: "__alloyId1724"
    });
    $.__views.__alloyId1724 && $.addTopLevelView($.__views.__alloyId1724);
    $.__views.__alloyId1725 = Ti.UI.createView({
        id: "__alloyId1725"
    });
    $.__views.__alloyId1724.add($.__views.__alloyId1725);
    $.__views.__alloyId1726 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1726"
    });
    $.__views.__alloyId1725.add($.__views.__alloyId1726);
    $.__views.__alloyId1727 = Ti.UI.createView({
        id: "__alloyId1727"
    });
    $.__views.__alloyId1727 && $.addTopLevelView($.__views.__alloyId1727);
    $.__views.__alloyId1728 = Ti.UI.createView({
        id: "__alloyId1728"
    });
    $.__views.__alloyId1727.add($.__views.__alloyId1728);
    $.__views.__alloyId1729 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1729"
    });
    $.__views.__alloyId1728.add($.__views.__alloyId1729);
    $.__views.__alloyId1730 = Ti.UI.createView({
        id: "__alloyId1730"
    });
    $.__views.__alloyId1730 && $.addTopLevelView($.__views.__alloyId1730);
    $.__views.__alloyId1731 = Ti.UI.createView({
        id: "__alloyId1731"
    });
    $.__views.__alloyId1730.add($.__views.__alloyId1731);
    $.__views.__alloyId1732 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1732"
    });
    $.__views.__alloyId1731.add($.__views.__alloyId1732);
    $.__views.__alloyId1733 = Ti.UI.createView({
        id: "__alloyId1733"
    });
    $.__views.__alloyId1733 && $.addTopLevelView($.__views.__alloyId1733);
    $.__views.__alloyId1734 = Ti.UI.createView({
        id: "__alloyId1734"
    });
    $.__views.__alloyId1733.add($.__views.__alloyId1734);
    $.__views.__alloyId1735 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1735"
    });
    $.__views.__alloyId1734.add($.__views.__alloyId1735);
    $.__views.__alloyId1736 = Ti.UI.createView({
        id: "__alloyId1736"
    });
    $.__views.__alloyId1736 && $.addTopLevelView($.__views.__alloyId1736);
    $.__views.__alloyId1737 = Ti.UI.createView({
        id: "__alloyId1737"
    });
    $.__views.__alloyId1736.add($.__views.__alloyId1737);
    $.__views.__alloyId1738 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1738"
    });
    $.__views.__alloyId1737.add($.__views.__alloyId1738);
    $.__views.__alloyId1739 = Ti.UI.createView({
        id: "__alloyId1739"
    });
    $.__views.__alloyId1739 && $.addTopLevelView($.__views.__alloyId1739);
    $.__views.__alloyId1740 = Ti.UI.createView({
        id: "__alloyId1740"
    });
    $.__views.__alloyId1739.add($.__views.__alloyId1740);
    $.__views.__alloyId1741 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1741"
    });
    $.__views.__alloyId1740.add($.__views.__alloyId1741);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;