function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_162";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_162 = Ti.UI.createView({
        id: "widget_162"
    });
    $.__views.widget_162 && $.addTopLevelView($.__views.widget_162);
    $.__views.__alloyId1872 = Ti.UI.createView({
        id: "__alloyId1872"
    });
    $.__views.widget_162.add($.__views.__alloyId1872);
    $.__views.__alloyId1873 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1873"
    });
    $.__views.__alloyId1872.add($.__views.__alloyId1873);
    $.__views.__alloyId1874 = Ti.UI.createView({
        id: "__alloyId1874"
    });
    $.__views.__alloyId1874 && $.addTopLevelView($.__views.__alloyId1874);
    $.__views.__alloyId1875 = Ti.UI.createView({
        id: "__alloyId1875"
    });
    $.__views.__alloyId1874.add($.__views.__alloyId1875);
    $.__views.__alloyId1876 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1876"
    });
    $.__views.__alloyId1875.add($.__views.__alloyId1876);
    $.__views.__alloyId1877 = Ti.UI.createView({
        id: "__alloyId1877"
    });
    $.__views.__alloyId1877 && $.addTopLevelView($.__views.__alloyId1877);
    $.__views.__alloyId1878 = Ti.UI.createView({
        id: "__alloyId1878"
    });
    $.__views.__alloyId1877.add($.__views.__alloyId1878);
    $.__views.__alloyId1879 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1879"
    });
    $.__views.__alloyId1878.add($.__views.__alloyId1879);
    $.__views.__alloyId1880 = Ti.UI.createView({
        id: "__alloyId1880"
    });
    $.__views.__alloyId1880 && $.addTopLevelView($.__views.__alloyId1880);
    $.__views.__alloyId1881 = Ti.UI.createView({
        id: "__alloyId1881"
    });
    $.__views.__alloyId1880.add($.__views.__alloyId1881);
    $.__views.__alloyId1882 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1882"
    });
    $.__views.__alloyId1881.add($.__views.__alloyId1882);
    $.__views.__alloyId1883 = Ti.UI.createView({
        id: "__alloyId1883"
    });
    $.__views.__alloyId1883 && $.addTopLevelView($.__views.__alloyId1883);
    $.__views.__alloyId1884 = Ti.UI.createView({
        id: "__alloyId1884"
    });
    $.__views.__alloyId1883.add($.__views.__alloyId1884);
    $.__views.__alloyId1885 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1885"
    });
    $.__views.__alloyId1884.add($.__views.__alloyId1885);
    $.__views.__alloyId1886 = Ti.UI.createView({
        id: "__alloyId1886"
    });
    $.__views.__alloyId1886 && $.addTopLevelView($.__views.__alloyId1886);
    $.__views.__alloyId1887 = Ti.UI.createView({
        id: "__alloyId1887"
    });
    $.__views.__alloyId1886.add($.__views.__alloyId1887);
    $.__views.__alloyId1888 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1888"
    });
    $.__views.__alloyId1887.add($.__views.__alloyId1888);
    $.__views.__alloyId1889 = Ti.UI.createView({
        id: "__alloyId1889"
    });
    $.__views.__alloyId1889 && $.addTopLevelView($.__views.__alloyId1889);
    $.__views.__alloyId1890 = Ti.UI.createView({
        id: "__alloyId1890"
    });
    $.__views.__alloyId1889.add($.__views.__alloyId1890);
    $.__views.__alloyId1891 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1891"
    });
    $.__views.__alloyId1890.add($.__views.__alloyId1891);
    $.__views.__alloyId1892 = Ti.UI.createView({
        id: "__alloyId1892"
    });
    $.__views.__alloyId1892 && $.addTopLevelView($.__views.__alloyId1892);
    $.__views.__alloyId1893 = Ti.UI.createView({
        id: "__alloyId1893"
    });
    $.__views.__alloyId1892.add($.__views.__alloyId1893);
    $.__views.__alloyId1894 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1894"
    });
    $.__views.__alloyId1893.add($.__views.__alloyId1894);
    $.__views.__alloyId1895 = Ti.UI.createView({
        id: "__alloyId1895"
    });
    $.__views.__alloyId1895 && $.addTopLevelView($.__views.__alloyId1895);
    $.__views.__alloyId1896 = Ti.UI.createView({
        id: "__alloyId1896"
    });
    $.__views.__alloyId1895.add($.__views.__alloyId1896);
    $.__views.__alloyId1897 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId1897"
    });
    $.__views.__alloyId1896.add($.__views.__alloyId1897);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;