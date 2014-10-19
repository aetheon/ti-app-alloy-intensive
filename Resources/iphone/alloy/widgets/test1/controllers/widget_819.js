function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_819";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_819 = Ti.UI.createView({
        id: "widget_819"
    });
    $.__views.widget_819 && $.addTopLevelView($.__views.widget_819);
    $.__views.__alloyId20826 = Ti.UI.createView({
        id: "__alloyId20826"
    });
    $.__views.widget_819.add($.__views.__alloyId20826);
    $.__views.__alloyId20827 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20827"
    });
    $.__views.__alloyId20826.add($.__views.__alloyId20827);
    $.__views.__alloyId20828 = Ti.UI.createView({
        id: "__alloyId20828"
    });
    $.__views.__alloyId20828 && $.addTopLevelView($.__views.__alloyId20828);
    $.__views.__alloyId20829 = Ti.UI.createView({
        id: "__alloyId20829"
    });
    $.__views.__alloyId20828.add($.__views.__alloyId20829);
    $.__views.__alloyId20830 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20830"
    });
    $.__views.__alloyId20829.add($.__views.__alloyId20830);
    $.__views.__alloyId20831 = Ti.UI.createView({
        id: "__alloyId20831"
    });
    $.__views.__alloyId20831 && $.addTopLevelView($.__views.__alloyId20831);
    $.__views.__alloyId20832 = Ti.UI.createView({
        id: "__alloyId20832"
    });
    $.__views.__alloyId20831.add($.__views.__alloyId20832);
    $.__views.__alloyId20833 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20833"
    });
    $.__views.__alloyId20832.add($.__views.__alloyId20833);
    $.__views.__alloyId20834 = Ti.UI.createView({
        id: "__alloyId20834"
    });
    $.__views.__alloyId20834 && $.addTopLevelView($.__views.__alloyId20834);
    $.__views.__alloyId20835 = Ti.UI.createView({
        id: "__alloyId20835"
    });
    $.__views.__alloyId20834.add($.__views.__alloyId20835);
    $.__views.__alloyId20836 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20836"
    });
    $.__views.__alloyId20835.add($.__views.__alloyId20836);
    $.__views.__alloyId20837 = Ti.UI.createView({
        id: "__alloyId20837"
    });
    $.__views.__alloyId20837 && $.addTopLevelView($.__views.__alloyId20837);
    $.__views.__alloyId20838 = Ti.UI.createView({
        id: "__alloyId20838"
    });
    $.__views.__alloyId20837.add($.__views.__alloyId20838);
    $.__views.__alloyId20839 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20839"
    });
    $.__views.__alloyId20838.add($.__views.__alloyId20839);
    $.__views.__alloyId20840 = Ti.UI.createView({
        id: "__alloyId20840"
    });
    $.__views.__alloyId20840 && $.addTopLevelView($.__views.__alloyId20840);
    $.__views.__alloyId20841 = Ti.UI.createView({
        id: "__alloyId20841"
    });
    $.__views.__alloyId20840.add($.__views.__alloyId20841);
    $.__views.__alloyId20842 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20842"
    });
    $.__views.__alloyId20841.add($.__views.__alloyId20842);
    $.__views.__alloyId20843 = Ti.UI.createView({
        id: "__alloyId20843"
    });
    $.__views.__alloyId20843 && $.addTopLevelView($.__views.__alloyId20843);
    $.__views.__alloyId20844 = Ti.UI.createView({
        id: "__alloyId20844"
    });
    $.__views.__alloyId20843.add($.__views.__alloyId20844);
    $.__views.__alloyId20845 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20845"
    });
    $.__views.__alloyId20844.add($.__views.__alloyId20845);
    $.__views.__alloyId20846 = Ti.UI.createView({
        id: "__alloyId20846"
    });
    $.__views.__alloyId20846 && $.addTopLevelView($.__views.__alloyId20846);
    $.__views.__alloyId20847 = Ti.UI.createView({
        id: "__alloyId20847"
    });
    $.__views.__alloyId20846.add($.__views.__alloyId20847);
    $.__views.__alloyId20848 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20848"
    });
    $.__views.__alloyId20847.add($.__views.__alloyId20848);
    $.__views.__alloyId20849 = Ti.UI.createView({
        id: "__alloyId20849"
    });
    $.__views.__alloyId20849 && $.addTopLevelView($.__views.__alloyId20849);
    $.__views.__alloyId20850 = Ti.UI.createView({
        id: "__alloyId20850"
    });
    $.__views.__alloyId20849.add($.__views.__alloyId20850);
    $.__views.__alloyId20851 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20851"
    });
    $.__views.__alloyId20850.add($.__views.__alloyId20851);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;