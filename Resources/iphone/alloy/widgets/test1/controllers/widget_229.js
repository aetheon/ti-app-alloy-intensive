function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_229";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_229 = Ti.UI.createView({
        id: "widget_229"
    });
    $.__views.widget_229 && $.addTopLevelView($.__views.widget_229);
    $.__views.__alloyId3796 = Ti.UI.createView({
        id: "__alloyId3796"
    });
    $.__views.widget_229.add($.__views.__alloyId3796);
    $.__views.__alloyId3797 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3797"
    });
    $.__views.__alloyId3796.add($.__views.__alloyId3797);
    $.__views.__alloyId3798 = Ti.UI.createView({
        id: "__alloyId3798"
    });
    $.__views.__alloyId3798 && $.addTopLevelView($.__views.__alloyId3798);
    $.__views.__alloyId3799 = Ti.UI.createView({
        id: "__alloyId3799"
    });
    $.__views.__alloyId3798.add($.__views.__alloyId3799);
    $.__views.__alloyId3800 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3800"
    });
    $.__views.__alloyId3799.add($.__views.__alloyId3800);
    $.__views.__alloyId3801 = Ti.UI.createView({
        id: "__alloyId3801"
    });
    $.__views.__alloyId3801 && $.addTopLevelView($.__views.__alloyId3801);
    $.__views.__alloyId3802 = Ti.UI.createView({
        id: "__alloyId3802"
    });
    $.__views.__alloyId3801.add($.__views.__alloyId3802);
    $.__views.__alloyId3803 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3803"
    });
    $.__views.__alloyId3802.add($.__views.__alloyId3803);
    $.__views.__alloyId3804 = Ti.UI.createView({
        id: "__alloyId3804"
    });
    $.__views.__alloyId3804 && $.addTopLevelView($.__views.__alloyId3804);
    $.__views.__alloyId3805 = Ti.UI.createView({
        id: "__alloyId3805"
    });
    $.__views.__alloyId3804.add($.__views.__alloyId3805);
    $.__views.__alloyId3806 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3806"
    });
    $.__views.__alloyId3805.add($.__views.__alloyId3806);
    $.__views.__alloyId3807 = Ti.UI.createView({
        id: "__alloyId3807"
    });
    $.__views.__alloyId3807 && $.addTopLevelView($.__views.__alloyId3807);
    $.__views.__alloyId3808 = Ti.UI.createView({
        id: "__alloyId3808"
    });
    $.__views.__alloyId3807.add($.__views.__alloyId3808);
    $.__views.__alloyId3809 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3809"
    });
    $.__views.__alloyId3808.add($.__views.__alloyId3809);
    $.__views.__alloyId3810 = Ti.UI.createView({
        id: "__alloyId3810"
    });
    $.__views.__alloyId3810 && $.addTopLevelView($.__views.__alloyId3810);
    $.__views.__alloyId3811 = Ti.UI.createView({
        id: "__alloyId3811"
    });
    $.__views.__alloyId3810.add($.__views.__alloyId3811);
    $.__views.__alloyId3812 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3812"
    });
    $.__views.__alloyId3811.add($.__views.__alloyId3812);
    $.__views.__alloyId3813 = Ti.UI.createView({
        id: "__alloyId3813"
    });
    $.__views.__alloyId3813 && $.addTopLevelView($.__views.__alloyId3813);
    $.__views.__alloyId3814 = Ti.UI.createView({
        id: "__alloyId3814"
    });
    $.__views.__alloyId3813.add($.__views.__alloyId3814);
    $.__views.__alloyId3815 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3815"
    });
    $.__views.__alloyId3814.add($.__views.__alloyId3815);
    $.__views.__alloyId3816 = Ti.UI.createView({
        id: "__alloyId3816"
    });
    $.__views.__alloyId3816 && $.addTopLevelView($.__views.__alloyId3816);
    $.__views.__alloyId3817 = Ti.UI.createView({
        id: "__alloyId3817"
    });
    $.__views.__alloyId3816.add($.__views.__alloyId3817);
    $.__views.__alloyId3818 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3818"
    });
    $.__views.__alloyId3817.add($.__views.__alloyId3818);
    $.__views.__alloyId3819 = Ti.UI.createView({
        id: "__alloyId3819"
    });
    $.__views.__alloyId3819 && $.addTopLevelView($.__views.__alloyId3819);
    $.__views.__alloyId3820 = Ti.UI.createView({
        id: "__alloyId3820"
    });
    $.__views.__alloyId3819.add($.__views.__alloyId3820);
    $.__views.__alloyId3821 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3821"
    });
    $.__views.__alloyId3820.add($.__views.__alloyId3821);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;