function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_3";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_3 = Ti.UI.createView({
        id: "widget_3"
    });
    $.__views.widget_3 && $.addTopLevelView($.__views.widget_3);
    $.__views.__alloyId5824 = Ti.UI.createView({
        id: "__alloyId5824"
    });
    $.__views.widget_3.add($.__views.__alloyId5824);
    $.__views.__alloyId5825 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5825"
    });
    $.__views.__alloyId5824.add($.__views.__alloyId5825);
    $.__views.__alloyId5826 = Ti.UI.createView({
        id: "__alloyId5826"
    });
    $.__views.__alloyId5826 && $.addTopLevelView($.__views.__alloyId5826);
    $.__views.__alloyId5827 = Ti.UI.createView({
        id: "__alloyId5827"
    });
    $.__views.__alloyId5826.add($.__views.__alloyId5827);
    $.__views.__alloyId5828 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5828"
    });
    $.__views.__alloyId5827.add($.__views.__alloyId5828);
    $.__views.__alloyId5829 = Ti.UI.createView({
        id: "__alloyId5829"
    });
    $.__views.__alloyId5829 && $.addTopLevelView($.__views.__alloyId5829);
    $.__views.__alloyId5830 = Ti.UI.createView({
        id: "__alloyId5830"
    });
    $.__views.__alloyId5829.add($.__views.__alloyId5830);
    $.__views.__alloyId5831 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5831"
    });
    $.__views.__alloyId5830.add($.__views.__alloyId5831);
    $.__views.__alloyId5832 = Ti.UI.createView({
        id: "__alloyId5832"
    });
    $.__views.__alloyId5832 && $.addTopLevelView($.__views.__alloyId5832);
    $.__views.__alloyId5833 = Ti.UI.createView({
        id: "__alloyId5833"
    });
    $.__views.__alloyId5832.add($.__views.__alloyId5833);
    $.__views.__alloyId5834 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5834"
    });
    $.__views.__alloyId5833.add($.__views.__alloyId5834);
    $.__views.__alloyId5835 = Ti.UI.createView({
        id: "__alloyId5835"
    });
    $.__views.__alloyId5835 && $.addTopLevelView($.__views.__alloyId5835);
    $.__views.__alloyId5836 = Ti.UI.createView({
        id: "__alloyId5836"
    });
    $.__views.__alloyId5835.add($.__views.__alloyId5836);
    $.__views.__alloyId5837 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5837"
    });
    $.__views.__alloyId5836.add($.__views.__alloyId5837);
    $.__views.__alloyId5838 = Ti.UI.createView({
        id: "__alloyId5838"
    });
    $.__views.__alloyId5838 && $.addTopLevelView($.__views.__alloyId5838);
    $.__views.__alloyId5839 = Ti.UI.createView({
        id: "__alloyId5839"
    });
    $.__views.__alloyId5838.add($.__views.__alloyId5839);
    $.__views.__alloyId5840 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5840"
    });
    $.__views.__alloyId5839.add($.__views.__alloyId5840);
    $.__views.__alloyId5841 = Ti.UI.createView({
        id: "__alloyId5841"
    });
    $.__views.__alloyId5841 && $.addTopLevelView($.__views.__alloyId5841);
    $.__views.__alloyId5842 = Ti.UI.createView({
        id: "__alloyId5842"
    });
    $.__views.__alloyId5841.add($.__views.__alloyId5842);
    $.__views.__alloyId5843 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5843"
    });
    $.__views.__alloyId5842.add($.__views.__alloyId5843);
    $.__views.__alloyId5844 = Ti.UI.createView({
        id: "__alloyId5844"
    });
    $.__views.__alloyId5844 && $.addTopLevelView($.__views.__alloyId5844);
    $.__views.__alloyId5845 = Ti.UI.createView({
        id: "__alloyId5845"
    });
    $.__views.__alloyId5844.add($.__views.__alloyId5845);
    $.__views.__alloyId5846 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5846"
    });
    $.__views.__alloyId5845.add($.__views.__alloyId5846);
    $.__views.__alloyId5847 = Ti.UI.createView({
        id: "__alloyId5847"
    });
    $.__views.__alloyId5847 && $.addTopLevelView($.__views.__alloyId5847);
    $.__views.__alloyId5848 = Ti.UI.createView({
        id: "__alloyId5848"
    });
    $.__views.__alloyId5847.add($.__views.__alloyId5848);
    $.__views.__alloyId5849 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5849"
    });
    $.__views.__alloyId5848.add($.__views.__alloyId5849);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;