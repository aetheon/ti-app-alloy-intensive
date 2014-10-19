function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_680";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_680 = Ti.UI.createView({
        id: "widget_680"
    });
    $.__views.widget_680 && $.addTopLevelView($.__views.widget_680);
    $.__views.__alloyId16822 = Ti.UI.createView({
        id: "__alloyId16822"
    });
    $.__views.widget_680.add($.__views.__alloyId16822);
    $.__views.__alloyId16823 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16823"
    });
    $.__views.__alloyId16822.add($.__views.__alloyId16823);
    $.__views.__alloyId16824 = Ti.UI.createView({
        id: "__alloyId16824"
    });
    $.__views.__alloyId16824 && $.addTopLevelView($.__views.__alloyId16824);
    $.__views.__alloyId16825 = Ti.UI.createView({
        id: "__alloyId16825"
    });
    $.__views.__alloyId16824.add($.__views.__alloyId16825);
    $.__views.__alloyId16826 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16826"
    });
    $.__views.__alloyId16825.add($.__views.__alloyId16826);
    $.__views.__alloyId16827 = Ti.UI.createView({
        id: "__alloyId16827"
    });
    $.__views.__alloyId16827 && $.addTopLevelView($.__views.__alloyId16827);
    $.__views.__alloyId16828 = Ti.UI.createView({
        id: "__alloyId16828"
    });
    $.__views.__alloyId16827.add($.__views.__alloyId16828);
    $.__views.__alloyId16829 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16829"
    });
    $.__views.__alloyId16828.add($.__views.__alloyId16829);
    $.__views.__alloyId16830 = Ti.UI.createView({
        id: "__alloyId16830"
    });
    $.__views.__alloyId16830 && $.addTopLevelView($.__views.__alloyId16830);
    $.__views.__alloyId16831 = Ti.UI.createView({
        id: "__alloyId16831"
    });
    $.__views.__alloyId16830.add($.__views.__alloyId16831);
    $.__views.__alloyId16832 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16832"
    });
    $.__views.__alloyId16831.add($.__views.__alloyId16832);
    $.__views.__alloyId16833 = Ti.UI.createView({
        id: "__alloyId16833"
    });
    $.__views.__alloyId16833 && $.addTopLevelView($.__views.__alloyId16833);
    $.__views.__alloyId16834 = Ti.UI.createView({
        id: "__alloyId16834"
    });
    $.__views.__alloyId16833.add($.__views.__alloyId16834);
    $.__views.__alloyId16835 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16835"
    });
    $.__views.__alloyId16834.add($.__views.__alloyId16835);
    $.__views.__alloyId16836 = Ti.UI.createView({
        id: "__alloyId16836"
    });
    $.__views.__alloyId16836 && $.addTopLevelView($.__views.__alloyId16836);
    $.__views.__alloyId16837 = Ti.UI.createView({
        id: "__alloyId16837"
    });
    $.__views.__alloyId16836.add($.__views.__alloyId16837);
    $.__views.__alloyId16838 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16838"
    });
    $.__views.__alloyId16837.add($.__views.__alloyId16838);
    $.__views.__alloyId16839 = Ti.UI.createView({
        id: "__alloyId16839"
    });
    $.__views.__alloyId16839 && $.addTopLevelView($.__views.__alloyId16839);
    $.__views.__alloyId16840 = Ti.UI.createView({
        id: "__alloyId16840"
    });
    $.__views.__alloyId16839.add($.__views.__alloyId16840);
    $.__views.__alloyId16841 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16841"
    });
    $.__views.__alloyId16840.add($.__views.__alloyId16841);
    $.__views.__alloyId16842 = Ti.UI.createView({
        id: "__alloyId16842"
    });
    $.__views.__alloyId16842 && $.addTopLevelView($.__views.__alloyId16842);
    $.__views.__alloyId16843 = Ti.UI.createView({
        id: "__alloyId16843"
    });
    $.__views.__alloyId16842.add($.__views.__alloyId16843);
    $.__views.__alloyId16844 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16844"
    });
    $.__views.__alloyId16843.add($.__views.__alloyId16844);
    $.__views.__alloyId16845 = Ti.UI.createView({
        id: "__alloyId16845"
    });
    $.__views.__alloyId16845 && $.addTopLevelView($.__views.__alloyId16845);
    $.__views.__alloyId16846 = Ti.UI.createView({
        id: "__alloyId16846"
    });
    $.__views.__alloyId16845.add($.__views.__alloyId16846);
    $.__views.__alloyId16847 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16847"
    });
    $.__views.__alloyId16846.add($.__views.__alloyId16847);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;