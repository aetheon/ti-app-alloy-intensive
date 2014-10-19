function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_853";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_853 = Ti.UI.createView({
        id: "widget_853"
    });
    $.__views.widget_853 && $.addTopLevelView($.__views.widget_853);
    $.__views.__alloyId21814 = Ti.UI.createView({
        id: "__alloyId21814"
    });
    $.__views.widget_853.add($.__views.__alloyId21814);
    $.__views.__alloyId21815 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21815"
    });
    $.__views.__alloyId21814.add($.__views.__alloyId21815);
    $.__views.__alloyId21816 = Ti.UI.createView({
        id: "__alloyId21816"
    });
    $.__views.__alloyId21816 && $.addTopLevelView($.__views.__alloyId21816);
    $.__views.__alloyId21817 = Ti.UI.createView({
        id: "__alloyId21817"
    });
    $.__views.__alloyId21816.add($.__views.__alloyId21817);
    $.__views.__alloyId21818 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21818"
    });
    $.__views.__alloyId21817.add($.__views.__alloyId21818);
    $.__views.__alloyId21819 = Ti.UI.createView({
        id: "__alloyId21819"
    });
    $.__views.__alloyId21819 && $.addTopLevelView($.__views.__alloyId21819);
    $.__views.__alloyId21820 = Ti.UI.createView({
        id: "__alloyId21820"
    });
    $.__views.__alloyId21819.add($.__views.__alloyId21820);
    $.__views.__alloyId21821 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21821"
    });
    $.__views.__alloyId21820.add($.__views.__alloyId21821);
    $.__views.__alloyId21822 = Ti.UI.createView({
        id: "__alloyId21822"
    });
    $.__views.__alloyId21822 && $.addTopLevelView($.__views.__alloyId21822);
    $.__views.__alloyId21823 = Ti.UI.createView({
        id: "__alloyId21823"
    });
    $.__views.__alloyId21822.add($.__views.__alloyId21823);
    $.__views.__alloyId21824 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21824"
    });
    $.__views.__alloyId21823.add($.__views.__alloyId21824);
    $.__views.__alloyId21825 = Ti.UI.createView({
        id: "__alloyId21825"
    });
    $.__views.__alloyId21825 && $.addTopLevelView($.__views.__alloyId21825);
    $.__views.__alloyId21826 = Ti.UI.createView({
        id: "__alloyId21826"
    });
    $.__views.__alloyId21825.add($.__views.__alloyId21826);
    $.__views.__alloyId21827 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21827"
    });
    $.__views.__alloyId21826.add($.__views.__alloyId21827);
    $.__views.__alloyId21828 = Ti.UI.createView({
        id: "__alloyId21828"
    });
    $.__views.__alloyId21828 && $.addTopLevelView($.__views.__alloyId21828);
    $.__views.__alloyId21829 = Ti.UI.createView({
        id: "__alloyId21829"
    });
    $.__views.__alloyId21828.add($.__views.__alloyId21829);
    $.__views.__alloyId21830 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21830"
    });
    $.__views.__alloyId21829.add($.__views.__alloyId21830);
    $.__views.__alloyId21831 = Ti.UI.createView({
        id: "__alloyId21831"
    });
    $.__views.__alloyId21831 && $.addTopLevelView($.__views.__alloyId21831);
    $.__views.__alloyId21832 = Ti.UI.createView({
        id: "__alloyId21832"
    });
    $.__views.__alloyId21831.add($.__views.__alloyId21832);
    $.__views.__alloyId21833 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21833"
    });
    $.__views.__alloyId21832.add($.__views.__alloyId21833);
    $.__views.__alloyId21834 = Ti.UI.createView({
        id: "__alloyId21834"
    });
    $.__views.__alloyId21834 && $.addTopLevelView($.__views.__alloyId21834);
    $.__views.__alloyId21835 = Ti.UI.createView({
        id: "__alloyId21835"
    });
    $.__views.__alloyId21834.add($.__views.__alloyId21835);
    $.__views.__alloyId21836 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21836"
    });
    $.__views.__alloyId21835.add($.__views.__alloyId21836);
    $.__views.__alloyId21837 = Ti.UI.createView({
        id: "__alloyId21837"
    });
    $.__views.__alloyId21837 && $.addTopLevelView($.__views.__alloyId21837);
    $.__views.__alloyId21838 = Ti.UI.createView({
        id: "__alloyId21838"
    });
    $.__views.__alloyId21837.add($.__views.__alloyId21838);
    $.__views.__alloyId21839 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21839"
    });
    $.__views.__alloyId21838.add($.__views.__alloyId21839);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;