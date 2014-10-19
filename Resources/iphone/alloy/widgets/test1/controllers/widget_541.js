function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_541";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_541 = Ti.UI.createView({
        id: "widget_541"
    });
    $.__views.widget_541 && $.addTopLevelView($.__views.widget_541);
    $.__views.__alloyId12818 = Ti.UI.createView({
        id: "__alloyId12818"
    });
    $.__views.widget_541.add($.__views.__alloyId12818);
    $.__views.__alloyId12819 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12819"
    });
    $.__views.__alloyId12818.add($.__views.__alloyId12819);
    $.__views.__alloyId12820 = Ti.UI.createView({
        id: "__alloyId12820"
    });
    $.__views.__alloyId12820 && $.addTopLevelView($.__views.__alloyId12820);
    $.__views.__alloyId12821 = Ti.UI.createView({
        id: "__alloyId12821"
    });
    $.__views.__alloyId12820.add($.__views.__alloyId12821);
    $.__views.__alloyId12822 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12822"
    });
    $.__views.__alloyId12821.add($.__views.__alloyId12822);
    $.__views.__alloyId12823 = Ti.UI.createView({
        id: "__alloyId12823"
    });
    $.__views.__alloyId12823 && $.addTopLevelView($.__views.__alloyId12823);
    $.__views.__alloyId12824 = Ti.UI.createView({
        id: "__alloyId12824"
    });
    $.__views.__alloyId12823.add($.__views.__alloyId12824);
    $.__views.__alloyId12825 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12825"
    });
    $.__views.__alloyId12824.add($.__views.__alloyId12825);
    $.__views.__alloyId12826 = Ti.UI.createView({
        id: "__alloyId12826"
    });
    $.__views.__alloyId12826 && $.addTopLevelView($.__views.__alloyId12826);
    $.__views.__alloyId12827 = Ti.UI.createView({
        id: "__alloyId12827"
    });
    $.__views.__alloyId12826.add($.__views.__alloyId12827);
    $.__views.__alloyId12828 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12828"
    });
    $.__views.__alloyId12827.add($.__views.__alloyId12828);
    $.__views.__alloyId12829 = Ti.UI.createView({
        id: "__alloyId12829"
    });
    $.__views.__alloyId12829 && $.addTopLevelView($.__views.__alloyId12829);
    $.__views.__alloyId12830 = Ti.UI.createView({
        id: "__alloyId12830"
    });
    $.__views.__alloyId12829.add($.__views.__alloyId12830);
    $.__views.__alloyId12831 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12831"
    });
    $.__views.__alloyId12830.add($.__views.__alloyId12831);
    $.__views.__alloyId12832 = Ti.UI.createView({
        id: "__alloyId12832"
    });
    $.__views.__alloyId12832 && $.addTopLevelView($.__views.__alloyId12832);
    $.__views.__alloyId12833 = Ti.UI.createView({
        id: "__alloyId12833"
    });
    $.__views.__alloyId12832.add($.__views.__alloyId12833);
    $.__views.__alloyId12834 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12834"
    });
    $.__views.__alloyId12833.add($.__views.__alloyId12834);
    $.__views.__alloyId12835 = Ti.UI.createView({
        id: "__alloyId12835"
    });
    $.__views.__alloyId12835 && $.addTopLevelView($.__views.__alloyId12835);
    $.__views.__alloyId12836 = Ti.UI.createView({
        id: "__alloyId12836"
    });
    $.__views.__alloyId12835.add($.__views.__alloyId12836);
    $.__views.__alloyId12837 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12837"
    });
    $.__views.__alloyId12836.add($.__views.__alloyId12837);
    $.__views.__alloyId12838 = Ti.UI.createView({
        id: "__alloyId12838"
    });
    $.__views.__alloyId12838 && $.addTopLevelView($.__views.__alloyId12838);
    $.__views.__alloyId12839 = Ti.UI.createView({
        id: "__alloyId12839"
    });
    $.__views.__alloyId12838.add($.__views.__alloyId12839);
    $.__views.__alloyId12840 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12840"
    });
    $.__views.__alloyId12839.add($.__views.__alloyId12840);
    $.__views.__alloyId12841 = Ti.UI.createView({
        id: "__alloyId12841"
    });
    $.__views.__alloyId12841 && $.addTopLevelView($.__views.__alloyId12841);
    $.__views.__alloyId12842 = Ti.UI.createView({
        id: "__alloyId12842"
    });
    $.__views.__alloyId12841.add($.__views.__alloyId12842);
    $.__views.__alloyId12843 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12843"
    });
    $.__views.__alloyId12842.add($.__views.__alloyId12843);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;