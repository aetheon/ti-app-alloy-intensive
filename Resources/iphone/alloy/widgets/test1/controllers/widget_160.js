function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_160";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_160 = Ti.UI.createView({
        id: "widget_160"
    });
    $.__views.widget_160 && $.addTopLevelView($.__views.widget_160);
    $.__views.__alloyId1820 = Ti.UI.createView({
        id: "__alloyId1820"
    });
    $.__views.widget_160.add($.__views.__alloyId1820);
    $.__views.__alloyId1821 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1821"
    });
    $.__views.__alloyId1820.add($.__views.__alloyId1821);
    $.__views.__alloyId1822 = Ti.UI.createView({
        id: "__alloyId1822"
    });
    $.__views.__alloyId1822 && $.addTopLevelView($.__views.__alloyId1822);
    $.__views.__alloyId1823 = Ti.UI.createView({
        id: "__alloyId1823"
    });
    $.__views.__alloyId1822.add($.__views.__alloyId1823);
    $.__views.__alloyId1824 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1824"
    });
    $.__views.__alloyId1823.add($.__views.__alloyId1824);
    $.__views.__alloyId1825 = Ti.UI.createView({
        id: "__alloyId1825"
    });
    $.__views.__alloyId1825 && $.addTopLevelView($.__views.__alloyId1825);
    $.__views.__alloyId1826 = Ti.UI.createView({
        id: "__alloyId1826"
    });
    $.__views.__alloyId1825.add($.__views.__alloyId1826);
    $.__views.__alloyId1827 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1827"
    });
    $.__views.__alloyId1826.add($.__views.__alloyId1827);
    $.__views.__alloyId1828 = Ti.UI.createView({
        id: "__alloyId1828"
    });
    $.__views.__alloyId1828 && $.addTopLevelView($.__views.__alloyId1828);
    $.__views.__alloyId1829 = Ti.UI.createView({
        id: "__alloyId1829"
    });
    $.__views.__alloyId1828.add($.__views.__alloyId1829);
    $.__views.__alloyId1830 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1830"
    });
    $.__views.__alloyId1829.add($.__views.__alloyId1830);
    $.__views.__alloyId1831 = Ti.UI.createView({
        id: "__alloyId1831"
    });
    $.__views.__alloyId1831 && $.addTopLevelView($.__views.__alloyId1831);
    $.__views.__alloyId1832 = Ti.UI.createView({
        id: "__alloyId1832"
    });
    $.__views.__alloyId1831.add($.__views.__alloyId1832);
    $.__views.__alloyId1833 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1833"
    });
    $.__views.__alloyId1832.add($.__views.__alloyId1833);
    $.__views.__alloyId1834 = Ti.UI.createView({
        id: "__alloyId1834"
    });
    $.__views.__alloyId1834 && $.addTopLevelView($.__views.__alloyId1834);
    $.__views.__alloyId1835 = Ti.UI.createView({
        id: "__alloyId1835"
    });
    $.__views.__alloyId1834.add($.__views.__alloyId1835);
    $.__views.__alloyId1836 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1836"
    });
    $.__views.__alloyId1835.add($.__views.__alloyId1836);
    $.__views.__alloyId1837 = Ti.UI.createView({
        id: "__alloyId1837"
    });
    $.__views.__alloyId1837 && $.addTopLevelView($.__views.__alloyId1837);
    $.__views.__alloyId1838 = Ti.UI.createView({
        id: "__alloyId1838"
    });
    $.__views.__alloyId1837.add($.__views.__alloyId1838);
    $.__views.__alloyId1839 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1839"
    });
    $.__views.__alloyId1838.add($.__views.__alloyId1839);
    $.__views.__alloyId1840 = Ti.UI.createView({
        id: "__alloyId1840"
    });
    $.__views.__alloyId1840 && $.addTopLevelView($.__views.__alloyId1840);
    $.__views.__alloyId1841 = Ti.UI.createView({
        id: "__alloyId1841"
    });
    $.__views.__alloyId1840.add($.__views.__alloyId1841);
    $.__views.__alloyId1842 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1842"
    });
    $.__views.__alloyId1841.add($.__views.__alloyId1842);
    $.__views.__alloyId1843 = Ti.UI.createView({
        id: "__alloyId1843"
    });
    $.__views.__alloyId1843 && $.addTopLevelView($.__views.__alloyId1843);
    $.__views.__alloyId1844 = Ti.UI.createView({
        id: "__alloyId1844"
    });
    $.__views.__alloyId1843.add($.__views.__alloyId1844);
    $.__views.__alloyId1845 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1845"
    });
    $.__views.__alloyId1844.add($.__views.__alloyId1845);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;