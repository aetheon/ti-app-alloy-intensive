function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_156";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_156 = Ti.UI.createView({
        id: "widget_156"
    });
    $.__views.widget_156 && $.addTopLevelView($.__views.widget_156);
    $.__views.__alloyId1690 = Ti.UI.createView({
        id: "__alloyId1690"
    });
    $.__views.widget_156.add($.__views.__alloyId1690);
    $.__views.__alloyId1691 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1691"
    });
    $.__views.__alloyId1690.add($.__views.__alloyId1691);
    $.__views.__alloyId1692 = Ti.UI.createView({
        id: "__alloyId1692"
    });
    $.__views.__alloyId1692 && $.addTopLevelView($.__views.__alloyId1692);
    $.__views.__alloyId1693 = Ti.UI.createView({
        id: "__alloyId1693"
    });
    $.__views.__alloyId1692.add($.__views.__alloyId1693);
    $.__views.__alloyId1694 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1694"
    });
    $.__views.__alloyId1693.add($.__views.__alloyId1694);
    $.__views.__alloyId1695 = Ti.UI.createView({
        id: "__alloyId1695"
    });
    $.__views.__alloyId1695 && $.addTopLevelView($.__views.__alloyId1695);
    $.__views.__alloyId1696 = Ti.UI.createView({
        id: "__alloyId1696"
    });
    $.__views.__alloyId1695.add($.__views.__alloyId1696);
    $.__views.__alloyId1697 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1697"
    });
    $.__views.__alloyId1696.add($.__views.__alloyId1697);
    $.__views.__alloyId1698 = Ti.UI.createView({
        id: "__alloyId1698"
    });
    $.__views.__alloyId1698 && $.addTopLevelView($.__views.__alloyId1698);
    $.__views.__alloyId1699 = Ti.UI.createView({
        id: "__alloyId1699"
    });
    $.__views.__alloyId1698.add($.__views.__alloyId1699);
    $.__views.__alloyId1700 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1700"
    });
    $.__views.__alloyId1699.add($.__views.__alloyId1700);
    $.__views.__alloyId1701 = Ti.UI.createView({
        id: "__alloyId1701"
    });
    $.__views.__alloyId1701 && $.addTopLevelView($.__views.__alloyId1701);
    $.__views.__alloyId1702 = Ti.UI.createView({
        id: "__alloyId1702"
    });
    $.__views.__alloyId1701.add($.__views.__alloyId1702);
    $.__views.__alloyId1703 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1703"
    });
    $.__views.__alloyId1702.add($.__views.__alloyId1703);
    $.__views.__alloyId1704 = Ti.UI.createView({
        id: "__alloyId1704"
    });
    $.__views.__alloyId1704 && $.addTopLevelView($.__views.__alloyId1704);
    $.__views.__alloyId1705 = Ti.UI.createView({
        id: "__alloyId1705"
    });
    $.__views.__alloyId1704.add($.__views.__alloyId1705);
    $.__views.__alloyId1706 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1706"
    });
    $.__views.__alloyId1705.add($.__views.__alloyId1706);
    $.__views.__alloyId1707 = Ti.UI.createView({
        id: "__alloyId1707"
    });
    $.__views.__alloyId1707 && $.addTopLevelView($.__views.__alloyId1707);
    $.__views.__alloyId1708 = Ti.UI.createView({
        id: "__alloyId1708"
    });
    $.__views.__alloyId1707.add($.__views.__alloyId1708);
    $.__views.__alloyId1709 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1709"
    });
    $.__views.__alloyId1708.add($.__views.__alloyId1709);
    $.__views.__alloyId1710 = Ti.UI.createView({
        id: "__alloyId1710"
    });
    $.__views.__alloyId1710 && $.addTopLevelView($.__views.__alloyId1710);
    $.__views.__alloyId1711 = Ti.UI.createView({
        id: "__alloyId1711"
    });
    $.__views.__alloyId1710.add($.__views.__alloyId1711);
    $.__views.__alloyId1712 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1712"
    });
    $.__views.__alloyId1711.add($.__views.__alloyId1712);
    $.__views.__alloyId1713 = Ti.UI.createView({
        id: "__alloyId1713"
    });
    $.__views.__alloyId1713 && $.addTopLevelView($.__views.__alloyId1713);
    $.__views.__alloyId1714 = Ti.UI.createView({
        id: "__alloyId1714"
    });
    $.__views.__alloyId1713.add($.__views.__alloyId1714);
    $.__views.__alloyId1715 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1715"
    });
    $.__views.__alloyId1714.add($.__views.__alloyId1715);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;