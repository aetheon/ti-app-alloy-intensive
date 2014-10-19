function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_577";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_577 = Ti.UI.createView({
        id: "widget_577"
    });
    $.__views.widget_577 && $.addTopLevelView($.__views.widget_577);
    $.__views.__alloyId13832 = Ti.UI.createView({
        id: "__alloyId13832"
    });
    $.__views.widget_577.add($.__views.__alloyId13832);
    $.__views.__alloyId13833 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13833"
    });
    $.__views.__alloyId13832.add($.__views.__alloyId13833);
    $.__views.__alloyId13834 = Ti.UI.createView({
        id: "__alloyId13834"
    });
    $.__views.__alloyId13834 && $.addTopLevelView($.__views.__alloyId13834);
    $.__views.__alloyId13835 = Ti.UI.createView({
        id: "__alloyId13835"
    });
    $.__views.__alloyId13834.add($.__views.__alloyId13835);
    $.__views.__alloyId13836 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13836"
    });
    $.__views.__alloyId13835.add($.__views.__alloyId13836);
    $.__views.__alloyId13837 = Ti.UI.createView({
        id: "__alloyId13837"
    });
    $.__views.__alloyId13837 && $.addTopLevelView($.__views.__alloyId13837);
    $.__views.__alloyId13838 = Ti.UI.createView({
        id: "__alloyId13838"
    });
    $.__views.__alloyId13837.add($.__views.__alloyId13838);
    $.__views.__alloyId13839 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13839"
    });
    $.__views.__alloyId13838.add($.__views.__alloyId13839);
    $.__views.__alloyId13840 = Ti.UI.createView({
        id: "__alloyId13840"
    });
    $.__views.__alloyId13840 && $.addTopLevelView($.__views.__alloyId13840);
    $.__views.__alloyId13841 = Ti.UI.createView({
        id: "__alloyId13841"
    });
    $.__views.__alloyId13840.add($.__views.__alloyId13841);
    $.__views.__alloyId13842 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13842"
    });
    $.__views.__alloyId13841.add($.__views.__alloyId13842);
    $.__views.__alloyId13843 = Ti.UI.createView({
        id: "__alloyId13843"
    });
    $.__views.__alloyId13843 && $.addTopLevelView($.__views.__alloyId13843);
    $.__views.__alloyId13844 = Ti.UI.createView({
        id: "__alloyId13844"
    });
    $.__views.__alloyId13843.add($.__views.__alloyId13844);
    $.__views.__alloyId13845 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13845"
    });
    $.__views.__alloyId13844.add($.__views.__alloyId13845);
    $.__views.__alloyId13846 = Ti.UI.createView({
        id: "__alloyId13846"
    });
    $.__views.__alloyId13846 && $.addTopLevelView($.__views.__alloyId13846);
    $.__views.__alloyId13847 = Ti.UI.createView({
        id: "__alloyId13847"
    });
    $.__views.__alloyId13846.add($.__views.__alloyId13847);
    $.__views.__alloyId13848 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13848"
    });
    $.__views.__alloyId13847.add($.__views.__alloyId13848);
    $.__views.__alloyId13849 = Ti.UI.createView({
        id: "__alloyId13849"
    });
    $.__views.__alloyId13849 && $.addTopLevelView($.__views.__alloyId13849);
    $.__views.__alloyId13850 = Ti.UI.createView({
        id: "__alloyId13850"
    });
    $.__views.__alloyId13849.add($.__views.__alloyId13850);
    $.__views.__alloyId13851 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13851"
    });
    $.__views.__alloyId13850.add($.__views.__alloyId13851);
    $.__views.__alloyId13852 = Ti.UI.createView({
        id: "__alloyId13852"
    });
    $.__views.__alloyId13852 && $.addTopLevelView($.__views.__alloyId13852);
    $.__views.__alloyId13853 = Ti.UI.createView({
        id: "__alloyId13853"
    });
    $.__views.__alloyId13852.add($.__views.__alloyId13853);
    $.__views.__alloyId13854 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13854"
    });
    $.__views.__alloyId13853.add($.__views.__alloyId13854);
    $.__views.__alloyId13855 = Ti.UI.createView({
        id: "__alloyId13855"
    });
    $.__views.__alloyId13855 && $.addTopLevelView($.__views.__alloyId13855);
    $.__views.__alloyId13856 = Ti.UI.createView({
        id: "__alloyId13856"
    });
    $.__views.__alloyId13855.add($.__views.__alloyId13856);
    $.__views.__alloyId13857 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13857"
    });
    $.__views.__alloyId13856.add($.__views.__alloyId13857);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;