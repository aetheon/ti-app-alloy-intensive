function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_126";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_126 = Ti.UI.createView({
        id: "widget_126"
    });
    $.__views.widget_126 && $.addTopLevelView($.__views.widget_126);
    $.__views.__alloyId832 = Ti.UI.createView({
        id: "__alloyId832"
    });
    $.__views.widget_126.add($.__views.__alloyId832);
    $.__views.__alloyId833 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId833"
    });
    $.__views.__alloyId832.add($.__views.__alloyId833);
    $.__views.__alloyId834 = Ti.UI.createView({
        id: "__alloyId834"
    });
    $.__views.__alloyId834 && $.addTopLevelView($.__views.__alloyId834);
    $.__views.__alloyId835 = Ti.UI.createView({
        id: "__alloyId835"
    });
    $.__views.__alloyId834.add($.__views.__alloyId835);
    $.__views.__alloyId836 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId836"
    });
    $.__views.__alloyId835.add($.__views.__alloyId836);
    $.__views.__alloyId837 = Ti.UI.createView({
        id: "__alloyId837"
    });
    $.__views.__alloyId837 && $.addTopLevelView($.__views.__alloyId837);
    $.__views.__alloyId838 = Ti.UI.createView({
        id: "__alloyId838"
    });
    $.__views.__alloyId837.add($.__views.__alloyId838);
    $.__views.__alloyId839 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId839"
    });
    $.__views.__alloyId838.add($.__views.__alloyId839);
    $.__views.__alloyId840 = Ti.UI.createView({
        id: "__alloyId840"
    });
    $.__views.__alloyId840 && $.addTopLevelView($.__views.__alloyId840);
    $.__views.__alloyId841 = Ti.UI.createView({
        id: "__alloyId841"
    });
    $.__views.__alloyId840.add($.__views.__alloyId841);
    $.__views.__alloyId842 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId842"
    });
    $.__views.__alloyId841.add($.__views.__alloyId842);
    $.__views.__alloyId843 = Ti.UI.createView({
        id: "__alloyId843"
    });
    $.__views.__alloyId843 && $.addTopLevelView($.__views.__alloyId843);
    $.__views.__alloyId844 = Ti.UI.createView({
        id: "__alloyId844"
    });
    $.__views.__alloyId843.add($.__views.__alloyId844);
    $.__views.__alloyId845 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId845"
    });
    $.__views.__alloyId844.add($.__views.__alloyId845);
    $.__views.__alloyId846 = Ti.UI.createView({
        id: "__alloyId846"
    });
    $.__views.__alloyId846 && $.addTopLevelView($.__views.__alloyId846);
    $.__views.__alloyId847 = Ti.UI.createView({
        id: "__alloyId847"
    });
    $.__views.__alloyId846.add($.__views.__alloyId847);
    $.__views.__alloyId848 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId848"
    });
    $.__views.__alloyId847.add($.__views.__alloyId848);
    $.__views.__alloyId849 = Ti.UI.createView({
        id: "__alloyId849"
    });
    $.__views.__alloyId849 && $.addTopLevelView($.__views.__alloyId849);
    $.__views.__alloyId850 = Ti.UI.createView({
        id: "__alloyId850"
    });
    $.__views.__alloyId849.add($.__views.__alloyId850);
    $.__views.__alloyId851 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId851"
    });
    $.__views.__alloyId850.add($.__views.__alloyId851);
    $.__views.__alloyId852 = Ti.UI.createView({
        id: "__alloyId852"
    });
    $.__views.__alloyId852 && $.addTopLevelView($.__views.__alloyId852);
    $.__views.__alloyId853 = Ti.UI.createView({
        id: "__alloyId853"
    });
    $.__views.__alloyId852.add($.__views.__alloyId853);
    $.__views.__alloyId854 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId854"
    });
    $.__views.__alloyId853.add($.__views.__alloyId854);
    $.__views.__alloyId855 = Ti.UI.createView({
        id: "__alloyId855"
    });
    $.__views.__alloyId855 && $.addTopLevelView($.__views.__alloyId855);
    $.__views.__alloyId856 = Ti.UI.createView({
        id: "__alloyId856"
    });
    $.__views.__alloyId855.add($.__views.__alloyId856);
    $.__views.__alloyId857 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId857"
    });
    $.__views.__alloyId856.add($.__views.__alloyId857);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;