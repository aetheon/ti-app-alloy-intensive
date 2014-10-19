function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_23";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_23 = Ti.UI.createView({
        id: "widget_23"
    });
    $.__views.widget_23 && $.addTopLevelView($.__views.widget_23);
    $.__views.__alloyId3822 = Ti.UI.createView({
        id: "__alloyId3822"
    });
    $.__views.widget_23.add($.__views.__alloyId3822);
    $.__views.__alloyId3823 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3823"
    });
    $.__views.__alloyId3822.add($.__views.__alloyId3823);
    $.__views.__alloyId3824 = Ti.UI.createView({
        id: "__alloyId3824"
    });
    $.__views.__alloyId3824 && $.addTopLevelView($.__views.__alloyId3824);
    $.__views.__alloyId3825 = Ti.UI.createView({
        id: "__alloyId3825"
    });
    $.__views.__alloyId3824.add($.__views.__alloyId3825);
    $.__views.__alloyId3826 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3826"
    });
    $.__views.__alloyId3825.add($.__views.__alloyId3826);
    $.__views.__alloyId3827 = Ti.UI.createView({
        id: "__alloyId3827"
    });
    $.__views.__alloyId3827 && $.addTopLevelView($.__views.__alloyId3827);
    $.__views.__alloyId3828 = Ti.UI.createView({
        id: "__alloyId3828"
    });
    $.__views.__alloyId3827.add($.__views.__alloyId3828);
    $.__views.__alloyId3829 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3829"
    });
    $.__views.__alloyId3828.add($.__views.__alloyId3829);
    $.__views.__alloyId3830 = Ti.UI.createView({
        id: "__alloyId3830"
    });
    $.__views.__alloyId3830 && $.addTopLevelView($.__views.__alloyId3830);
    $.__views.__alloyId3831 = Ti.UI.createView({
        id: "__alloyId3831"
    });
    $.__views.__alloyId3830.add($.__views.__alloyId3831);
    $.__views.__alloyId3832 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3832"
    });
    $.__views.__alloyId3831.add($.__views.__alloyId3832);
    $.__views.__alloyId3833 = Ti.UI.createView({
        id: "__alloyId3833"
    });
    $.__views.__alloyId3833 && $.addTopLevelView($.__views.__alloyId3833);
    $.__views.__alloyId3834 = Ti.UI.createView({
        id: "__alloyId3834"
    });
    $.__views.__alloyId3833.add($.__views.__alloyId3834);
    $.__views.__alloyId3835 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3835"
    });
    $.__views.__alloyId3834.add($.__views.__alloyId3835);
    $.__views.__alloyId3836 = Ti.UI.createView({
        id: "__alloyId3836"
    });
    $.__views.__alloyId3836 && $.addTopLevelView($.__views.__alloyId3836);
    $.__views.__alloyId3837 = Ti.UI.createView({
        id: "__alloyId3837"
    });
    $.__views.__alloyId3836.add($.__views.__alloyId3837);
    $.__views.__alloyId3838 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3838"
    });
    $.__views.__alloyId3837.add($.__views.__alloyId3838);
    $.__views.__alloyId3839 = Ti.UI.createView({
        id: "__alloyId3839"
    });
    $.__views.__alloyId3839 && $.addTopLevelView($.__views.__alloyId3839);
    $.__views.__alloyId3840 = Ti.UI.createView({
        id: "__alloyId3840"
    });
    $.__views.__alloyId3839.add($.__views.__alloyId3840);
    $.__views.__alloyId3841 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3841"
    });
    $.__views.__alloyId3840.add($.__views.__alloyId3841);
    $.__views.__alloyId3842 = Ti.UI.createView({
        id: "__alloyId3842"
    });
    $.__views.__alloyId3842 && $.addTopLevelView($.__views.__alloyId3842);
    $.__views.__alloyId3843 = Ti.UI.createView({
        id: "__alloyId3843"
    });
    $.__views.__alloyId3842.add($.__views.__alloyId3843);
    $.__views.__alloyId3844 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3844"
    });
    $.__views.__alloyId3843.add($.__views.__alloyId3844);
    $.__views.__alloyId3845 = Ti.UI.createView({
        id: "__alloyId3845"
    });
    $.__views.__alloyId3845 && $.addTopLevelView($.__views.__alloyId3845);
    $.__views.__alloyId3846 = Ti.UI.createView({
        id: "__alloyId3846"
    });
    $.__views.__alloyId3845.add($.__views.__alloyId3846);
    $.__views.__alloyId3847 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3847"
    });
    $.__views.__alloyId3846.add($.__views.__alloyId3847);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;