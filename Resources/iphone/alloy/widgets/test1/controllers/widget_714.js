function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_714";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_714 = Ti.UI.createView({
        id: "widget_714"
    });
    $.__views.widget_714 && $.addTopLevelView($.__views.widget_714);
    $.__views.__alloyId17810 = Ti.UI.createView({
        id: "__alloyId17810"
    });
    $.__views.widget_714.add($.__views.__alloyId17810);
    $.__views.__alloyId17811 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17811"
    });
    $.__views.__alloyId17810.add($.__views.__alloyId17811);
    $.__views.__alloyId17812 = Ti.UI.createView({
        id: "__alloyId17812"
    });
    $.__views.__alloyId17812 && $.addTopLevelView($.__views.__alloyId17812);
    $.__views.__alloyId17813 = Ti.UI.createView({
        id: "__alloyId17813"
    });
    $.__views.__alloyId17812.add($.__views.__alloyId17813);
    $.__views.__alloyId17814 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17814"
    });
    $.__views.__alloyId17813.add($.__views.__alloyId17814);
    $.__views.__alloyId17815 = Ti.UI.createView({
        id: "__alloyId17815"
    });
    $.__views.__alloyId17815 && $.addTopLevelView($.__views.__alloyId17815);
    $.__views.__alloyId17816 = Ti.UI.createView({
        id: "__alloyId17816"
    });
    $.__views.__alloyId17815.add($.__views.__alloyId17816);
    $.__views.__alloyId17817 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17817"
    });
    $.__views.__alloyId17816.add($.__views.__alloyId17817);
    $.__views.__alloyId17818 = Ti.UI.createView({
        id: "__alloyId17818"
    });
    $.__views.__alloyId17818 && $.addTopLevelView($.__views.__alloyId17818);
    $.__views.__alloyId17819 = Ti.UI.createView({
        id: "__alloyId17819"
    });
    $.__views.__alloyId17818.add($.__views.__alloyId17819);
    $.__views.__alloyId17820 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17820"
    });
    $.__views.__alloyId17819.add($.__views.__alloyId17820);
    $.__views.__alloyId17821 = Ti.UI.createView({
        id: "__alloyId17821"
    });
    $.__views.__alloyId17821 && $.addTopLevelView($.__views.__alloyId17821);
    $.__views.__alloyId17822 = Ti.UI.createView({
        id: "__alloyId17822"
    });
    $.__views.__alloyId17821.add($.__views.__alloyId17822);
    $.__views.__alloyId17823 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17823"
    });
    $.__views.__alloyId17822.add($.__views.__alloyId17823);
    $.__views.__alloyId17824 = Ti.UI.createView({
        id: "__alloyId17824"
    });
    $.__views.__alloyId17824 && $.addTopLevelView($.__views.__alloyId17824);
    $.__views.__alloyId17825 = Ti.UI.createView({
        id: "__alloyId17825"
    });
    $.__views.__alloyId17824.add($.__views.__alloyId17825);
    $.__views.__alloyId17826 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17826"
    });
    $.__views.__alloyId17825.add($.__views.__alloyId17826);
    $.__views.__alloyId17827 = Ti.UI.createView({
        id: "__alloyId17827"
    });
    $.__views.__alloyId17827 && $.addTopLevelView($.__views.__alloyId17827);
    $.__views.__alloyId17828 = Ti.UI.createView({
        id: "__alloyId17828"
    });
    $.__views.__alloyId17827.add($.__views.__alloyId17828);
    $.__views.__alloyId17829 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17829"
    });
    $.__views.__alloyId17828.add($.__views.__alloyId17829);
    $.__views.__alloyId17830 = Ti.UI.createView({
        id: "__alloyId17830"
    });
    $.__views.__alloyId17830 && $.addTopLevelView($.__views.__alloyId17830);
    $.__views.__alloyId17831 = Ti.UI.createView({
        id: "__alloyId17831"
    });
    $.__views.__alloyId17830.add($.__views.__alloyId17831);
    $.__views.__alloyId17832 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17832"
    });
    $.__views.__alloyId17831.add($.__views.__alloyId17832);
    $.__views.__alloyId17833 = Ti.UI.createView({
        id: "__alloyId17833"
    });
    $.__views.__alloyId17833 && $.addTopLevelView($.__views.__alloyId17833);
    $.__views.__alloyId17834 = Ti.UI.createView({
        id: "__alloyId17834"
    });
    $.__views.__alloyId17833.add($.__views.__alloyId17834);
    $.__views.__alloyId17835 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17835"
    });
    $.__views.__alloyId17834.add($.__views.__alloyId17835);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;