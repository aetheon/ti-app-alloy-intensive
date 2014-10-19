function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_334";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_334 = Ti.UI.createView({
        id: "widget_334"
    });
    $.__views.widget_334 && $.addTopLevelView($.__views.widget_334);
    $.__views.__alloyId6838 = Ti.UI.createView({
        id: "__alloyId6838"
    });
    $.__views.widget_334.add($.__views.__alloyId6838);
    $.__views.__alloyId6839 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6839"
    });
    $.__views.__alloyId6838.add($.__views.__alloyId6839);
    $.__views.__alloyId6840 = Ti.UI.createView({
        id: "__alloyId6840"
    });
    $.__views.__alloyId6840 && $.addTopLevelView($.__views.__alloyId6840);
    $.__views.__alloyId6841 = Ti.UI.createView({
        id: "__alloyId6841"
    });
    $.__views.__alloyId6840.add($.__views.__alloyId6841);
    $.__views.__alloyId6842 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6842"
    });
    $.__views.__alloyId6841.add($.__views.__alloyId6842);
    $.__views.__alloyId6843 = Ti.UI.createView({
        id: "__alloyId6843"
    });
    $.__views.__alloyId6843 && $.addTopLevelView($.__views.__alloyId6843);
    $.__views.__alloyId6844 = Ti.UI.createView({
        id: "__alloyId6844"
    });
    $.__views.__alloyId6843.add($.__views.__alloyId6844);
    $.__views.__alloyId6845 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6845"
    });
    $.__views.__alloyId6844.add($.__views.__alloyId6845);
    $.__views.__alloyId6846 = Ti.UI.createView({
        id: "__alloyId6846"
    });
    $.__views.__alloyId6846 && $.addTopLevelView($.__views.__alloyId6846);
    $.__views.__alloyId6847 = Ti.UI.createView({
        id: "__alloyId6847"
    });
    $.__views.__alloyId6846.add($.__views.__alloyId6847);
    $.__views.__alloyId6848 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6848"
    });
    $.__views.__alloyId6847.add($.__views.__alloyId6848);
    $.__views.__alloyId6849 = Ti.UI.createView({
        id: "__alloyId6849"
    });
    $.__views.__alloyId6849 && $.addTopLevelView($.__views.__alloyId6849);
    $.__views.__alloyId6850 = Ti.UI.createView({
        id: "__alloyId6850"
    });
    $.__views.__alloyId6849.add($.__views.__alloyId6850);
    $.__views.__alloyId6851 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6851"
    });
    $.__views.__alloyId6850.add($.__views.__alloyId6851);
    $.__views.__alloyId6852 = Ti.UI.createView({
        id: "__alloyId6852"
    });
    $.__views.__alloyId6852 && $.addTopLevelView($.__views.__alloyId6852);
    $.__views.__alloyId6853 = Ti.UI.createView({
        id: "__alloyId6853"
    });
    $.__views.__alloyId6852.add($.__views.__alloyId6853);
    $.__views.__alloyId6854 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6854"
    });
    $.__views.__alloyId6853.add($.__views.__alloyId6854);
    $.__views.__alloyId6855 = Ti.UI.createView({
        id: "__alloyId6855"
    });
    $.__views.__alloyId6855 && $.addTopLevelView($.__views.__alloyId6855);
    $.__views.__alloyId6856 = Ti.UI.createView({
        id: "__alloyId6856"
    });
    $.__views.__alloyId6855.add($.__views.__alloyId6856);
    $.__views.__alloyId6857 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6857"
    });
    $.__views.__alloyId6856.add($.__views.__alloyId6857);
    $.__views.__alloyId6858 = Ti.UI.createView({
        id: "__alloyId6858"
    });
    $.__views.__alloyId6858 && $.addTopLevelView($.__views.__alloyId6858);
    $.__views.__alloyId6859 = Ti.UI.createView({
        id: "__alloyId6859"
    });
    $.__views.__alloyId6858.add($.__views.__alloyId6859);
    $.__views.__alloyId6860 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6860"
    });
    $.__views.__alloyId6859.add($.__views.__alloyId6860);
    $.__views.__alloyId6861 = Ti.UI.createView({
        id: "__alloyId6861"
    });
    $.__views.__alloyId6861 && $.addTopLevelView($.__views.__alloyId6861);
    $.__views.__alloyId6862 = Ti.UI.createView({
        id: "__alloyId6862"
    });
    $.__views.__alloyId6861.add($.__views.__alloyId6862);
    $.__views.__alloyId6863 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6863"
    });
    $.__views.__alloyId6862.add($.__views.__alloyId6863);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;