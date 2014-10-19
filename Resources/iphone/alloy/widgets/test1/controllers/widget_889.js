function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_889";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_889 = Ti.UI.createView({
        id: "widget_889"
    });
    $.__views.widget_889 && $.addTopLevelView($.__views.widget_889);
    $.__views.__alloyId22828 = Ti.UI.createView({
        id: "__alloyId22828"
    });
    $.__views.widget_889.add($.__views.__alloyId22828);
    $.__views.__alloyId22829 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22829"
    });
    $.__views.__alloyId22828.add($.__views.__alloyId22829);
    $.__views.__alloyId22830 = Ti.UI.createView({
        id: "__alloyId22830"
    });
    $.__views.__alloyId22830 && $.addTopLevelView($.__views.__alloyId22830);
    $.__views.__alloyId22831 = Ti.UI.createView({
        id: "__alloyId22831"
    });
    $.__views.__alloyId22830.add($.__views.__alloyId22831);
    $.__views.__alloyId22832 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22832"
    });
    $.__views.__alloyId22831.add($.__views.__alloyId22832);
    $.__views.__alloyId22833 = Ti.UI.createView({
        id: "__alloyId22833"
    });
    $.__views.__alloyId22833 && $.addTopLevelView($.__views.__alloyId22833);
    $.__views.__alloyId22834 = Ti.UI.createView({
        id: "__alloyId22834"
    });
    $.__views.__alloyId22833.add($.__views.__alloyId22834);
    $.__views.__alloyId22835 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22835"
    });
    $.__views.__alloyId22834.add($.__views.__alloyId22835);
    $.__views.__alloyId22836 = Ti.UI.createView({
        id: "__alloyId22836"
    });
    $.__views.__alloyId22836 && $.addTopLevelView($.__views.__alloyId22836);
    $.__views.__alloyId22837 = Ti.UI.createView({
        id: "__alloyId22837"
    });
    $.__views.__alloyId22836.add($.__views.__alloyId22837);
    $.__views.__alloyId22838 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22838"
    });
    $.__views.__alloyId22837.add($.__views.__alloyId22838);
    $.__views.__alloyId22839 = Ti.UI.createView({
        id: "__alloyId22839"
    });
    $.__views.__alloyId22839 && $.addTopLevelView($.__views.__alloyId22839);
    $.__views.__alloyId22840 = Ti.UI.createView({
        id: "__alloyId22840"
    });
    $.__views.__alloyId22839.add($.__views.__alloyId22840);
    $.__views.__alloyId22841 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22841"
    });
    $.__views.__alloyId22840.add($.__views.__alloyId22841);
    $.__views.__alloyId22842 = Ti.UI.createView({
        id: "__alloyId22842"
    });
    $.__views.__alloyId22842 && $.addTopLevelView($.__views.__alloyId22842);
    $.__views.__alloyId22843 = Ti.UI.createView({
        id: "__alloyId22843"
    });
    $.__views.__alloyId22842.add($.__views.__alloyId22843);
    $.__views.__alloyId22844 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22844"
    });
    $.__views.__alloyId22843.add($.__views.__alloyId22844);
    $.__views.__alloyId22845 = Ti.UI.createView({
        id: "__alloyId22845"
    });
    $.__views.__alloyId22845 && $.addTopLevelView($.__views.__alloyId22845);
    $.__views.__alloyId22846 = Ti.UI.createView({
        id: "__alloyId22846"
    });
    $.__views.__alloyId22845.add($.__views.__alloyId22846);
    $.__views.__alloyId22847 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22847"
    });
    $.__views.__alloyId22846.add($.__views.__alloyId22847);
    $.__views.__alloyId22848 = Ti.UI.createView({
        id: "__alloyId22848"
    });
    $.__views.__alloyId22848 && $.addTopLevelView($.__views.__alloyId22848);
    $.__views.__alloyId22849 = Ti.UI.createView({
        id: "__alloyId22849"
    });
    $.__views.__alloyId22848.add($.__views.__alloyId22849);
    $.__views.__alloyId22850 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22850"
    });
    $.__views.__alloyId22849.add($.__views.__alloyId22850);
    $.__views.__alloyId22851 = Ti.UI.createView({
        id: "__alloyId22851"
    });
    $.__views.__alloyId22851 && $.addTopLevelView($.__views.__alloyId22851);
    $.__views.__alloyId22852 = Ti.UI.createView({
        id: "__alloyId22852"
    });
    $.__views.__alloyId22851.add($.__views.__alloyId22852);
    $.__views.__alloyId22853 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22853"
    });
    $.__views.__alloyId22852.add($.__views.__alloyId22853);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;