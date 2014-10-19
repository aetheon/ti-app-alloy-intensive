function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_161";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_161 = Ti.UI.createView({
        id: "widget_161"
    });
    $.__views.widget_161 && $.addTopLevelView($.__views.widget_161);
    $.__views.__alloyId1846 = Ti.UI.createView({
        id: "__alloyId1846"
    });
    $.__views.widget_161.add($.__views.__alloyId1846);
    $.__views.__alloyId1847 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1847"
    });
    $.__views.__alloyId1846.add($.__views.__alloyId1847);
    $.__views.__alloyId1848 = Ti.UI.createView({
        id: "__alloyId1848"
    });
    $.__views.__alloyId1848 && $.addTopLevelView($.__views.__alloyId1848);
    $.__views.__alloyId1849 = Ti.UI.createView({
        id: "__alloyId1849"
    });
    $.__views.__alloyId1848.add($.__views.__alloyId1849);
    $.__views.__alloyId1850 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1850"
    });
    $.__views.__alloyId1849.add($.__views.__alloyId1850);
    $.__views.__alloyId1851 = Ti.UI.createView({
        id: "__alloyId1851"
    });
    $.__views.__alloyId1851 && $.addTopLevelView($.__views.__alloyId1851);
    $.__views.__alloyId1852 = Ti.UI.createView({
        id: "__alloyId1852"
    });
    $.__views.__alloyId1851.add($.__views.__alloyId1852);
    $.__views.__alloyId1853 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1853"
    });
    $.__views.__alloyId1852.add($.__views.__alloyId1853);
    $.__views.__alloyId1854 = Ti.UI.createView({
        id: "__alloyId1854"
    });
    $.__views.__alloyId1854 && $.addTopLevelView($.__views.__alloyId1854);
    $.__views.__alloyId1855 = Ti.UI.createView({
        id: "__alloyId1855"
    });
    $.__views.__alloyId1854.add($.__views.__alloyId1855);
    $.__views.__alloyId1856 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1856"
    });
    $.__views.__alloyId1855.add($.__views.__alloyId1856);
    $.__views.__alloyId1857 = Ti.UI.createView({
        id: "__alloyId1857"
    });
    $.__views.__alloyId1857 && $.addTopLevelView($.__views.__alloyId1857);
    $.__views.__alloyId1858 = Ti.UI.createView({
        id: "__alloyId1858"
    });
    $.__views.__alloyId1857.add($.__views.__alloyId1858);
    $.__views.__alloyId1859 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1859"
    });
    $.__views.__alloyId1858.add($.__views.__alloyId1859);
    $.__views.__alloyId1860 = Ti.UI.createView({
        id: "__alloyId1860"
    });
    $.__views.__alloyId1860 && $.addTopLevelView($.__views.__alloyId1860);
    $.__views.__alloyId1861 = Ti.UI.createView({
        id: "__alloyId1861"
    });
    $.__views.__alloyId1860.add($.__views.__alloyId1861);
    $.__views.__alloyId1862 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1862"
    });
    $.__views.__alloyId1861.add($.__views.__alloyId1862);
    $.__views.__alloyId1863 = Ti.UI.createView({
        id: "__alloyId1863"
    });
    $.__views.__alloyId1863 && $.addTopLevelView($.__views.__alloyId1863);
    $.__views.__alloyId1864 = Ti.UI.createView({
        id: "__alloyId1864"
    });
    $.__views.__alloyId1863.add($.__views.__alloyId1864);
    $.__views.__alloyId1865 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1865"
    });
    $.__views.__alloyId1864.add($.__views.__alloyId1865);
    $.__views.__alloyId1866 = Ti.UI.createView({
        id: "__alloyId1866"
    });
    $.__views.__alloyId1866 && $.addTopLevelView($.__views.__alloyId1866);
    $.__views.__alloyId1867 = Ti.UI.createView({
        id: "__alloyId1867"
    });
    $.__views.__alloyId1866.add($.__views.__alloyId1867);
    $.__views.__alloyId1868 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1868"
    });
    $.__views.__alloyId1867.add($.__views.__alloyId1868);
    $.__views.__alloyId1869 = Ti.UI.createView({
        id: "__alloyId1869"
    });
    $.__views.__alloyId1869 && $.addTopLevelView($.__views.__alloyId1869);
    $.__views.__alloyId1870 = Ti.UI.createView({
        id: "__alloyId1870"
    });
    $.__views.__alloyId1869.add($.__views.__alloyId1870);
    $.__views.__alloyId1871 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1871"
    });
    $.__views.__alloyId1870.add($.__views.__alloyId1871);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;