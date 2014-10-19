function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_196";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_196 = Ti.UI.createView({
        id: "widget_196"
    });
    $.__views.widget_196 && $.addTopLevelView($.__views.widget_196);
    $.__views.__alloyId2834 = Ti.UI.createView({
        id: "__alloyId2834"
    });
    $.__views.widget_196.add($.__views.__alloyId2834);
    $.__views.__alloyId2835 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2835"
    });
    $.__views.__alloyId2834.add($.__views.__alloyId2835);
    $.__views.__alloyId2836 = Ti.UI.createView({
        id: "__alloyId2836"
    });
    $.__views.__alloyId2836 && $.addTopLevelView($.__views.__alloyId2836);
    $.__views.__alloyId2837 = Ti.UI.createView({
        id: "__alloyId2837"
    });
    $.__views.__alloyId2836.add($.__views.__alloyId2837);
    $.__views.__alloyId2838 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2838"
    });
    $.__views.__alloyId2837.add($.__views.__alloyId2838);
    $.__views.__alloyId2839 = Ti.UI.createView({
        id: "__alloyId2839"
    });
    $.__views.__alloyId2839 && $.addTopLevelView($.__views.__alloyId2839);
    $.__views.__alloyId2840 = Ti.UI.createView({
        id: "__alloyId2840"
    });
    $.__views.__alloyId2839.add($.__views.__alloyId2840);
    $.__views.__alloyId2841 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2841"
    });
    $.__views.__alloyId2840.add($.__views.__alloyId2841);
    $.__views.__alloyId2842 = Ti.UI.createView({
        id: "__alloyId2842"
    });
    $.__views.__alloyId2842 && $.addTopLevelView($.__views.__alloyId2842);
    $.__views.__alloyId2843 = Ti.UI.createView({
        id: "__alloyId2843"
    });
    $.__views.__alloyId2842.add($.__views.__alloyId2843);
    $.__views.__alloyId2844 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2844"
    });
    $.__views.__alloyId2843.add($.__views.__alloyId2844);
    $.__views.__alloyId2845 = Ti.UI.createView({
        id: "__alloyId2845"
    });
    $.__views.__alloyId2845 && $.addTopLevelView($.__views.__alloyId2845);
    $.__views.__alloyId2846 = Ti.UI.createView({
        id: "__alloyId2846"
    });
    $.__views.__alloyId2845.add($.__views.__alloyId2846);
    $.__views.__alloyId2847 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2847"
    });
    $.__views.__alloyId2846.add($.__views.__alloyId2847);
    $.__views.__alloyId2848 = Ti.UI.createView({
        id: "__alloyId2848"
    });
    $.__views.__alloyId2848 && $.addTopLevelView($.__views.__alloyId2848);
    $.__views.__alloyId2849 = Ti.UI.createView({
        id: "__alloyId2849"
    });
    $.__views.__alloyId2848.add($.__views.__alloyId2849);
    $.__views.__alloyId2850 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2850"
    });
    $.__views.__alloyId2849.add($.__views.__alloyId2850);
    $.__views.__alloyId2851 = Ti.UI.createView({
        id: "__alloyId2851"
    });
    $.__views.__alloyId2851 && $.addTopLevelView($.__views.__alloyId2851);
    $.__views.__alloyId2852 = Ti.UI.createView({
        id: "__alloyId2852"
    });
    $.__views.__alloyId2851.add($.__views.__alloyId2852);
    $.__views.__alloyId2853 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2853"
    });
    $.__views.__alloyId2852.add($.__views.__alloyId2853);
    $.__views.__alloyId2854 = Ti.UI.createView({
        id: "__alloyId2854"
    });
    $.__views.__alloyId2854 && $.addTopLevelView($.__views.__alloyId2854);
    $.__views.__alloyId2855 = Ti.UI.createView({
        id: "__alloyId2855"
    });
    $.__views.__alloyId2854.add($.__views.__alloyId2855);
    $.__views.__alloyId2856 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2856"
    });
    $.__views.__alloyId2855.add($.__views.__alloyId2856);
    $.__views.__alloyId2857 = Ti.UI.createView({
        id: "__alloyId2857"
    });
    $.__views.__alloyId2857 && $.addTopLevelView($.__views.__alloyId2857);
    $.__views.__alloyId2858 = Ti.UI.createView({
        id: "__alloyId2858"
    });
    $.__views.__alloyId2857.add($.__views.__alloyId2858);
    $.__views.__alloyId2859 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2859"
    });
    $.__views.__alloyId2858.add($.__views.__alloyId2859);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;