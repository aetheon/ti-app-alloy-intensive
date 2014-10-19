function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_749";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_749 = Ti.UI.createView({
        id: "widget_749"
    });
    $.__views.widget_749 && $.addTopLevelView($.__views.widget_749);
    $.__views.__alloyId18798 = Ti.UI.createView({
        id: "__alloyId18798"
    });
    $.__views.widget_749.add($.__views.__alloyId18798);
    $.__views.__alloyId18799 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18799"
    });
    $.__views.__alloyId18798.add($.__views.__alloyId18799);
    $.__views.__alloyId18800 = Ti.UI.createView({
        id: "__alloyId18800"
    });
    $.__views.__alloyId18800 && $.addTopLevelView($.__views.__alloyId18800);
    $.__views.__alloyId18801 = Ti.UI.createView({
        id: "__alloyId18801"
    });
    $.__views.__alloyId18800.add($.__views.__alloyId18801);
    $.__views.__alloyId18802 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18802"
    });
    $.__views.__alloyId18801.add($.__views.__alloyId18802);
    $.__views.__alloyId18803 = Ti.UI.createView({
        id: "__alloyId18803"
    });
    $.__views.__alloyId18803 && $.addTopLevelView($.__views.__alloyId18803);
    $.__views.__alloyId18804 = Ti.UI.createView({
        id: "__alloyId18804"
    });
    $.__views.__alloyId18803.add($.__views.__alloyId18804);
    $.__views.__alloyId18805 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18805"
    });
    $.__views.__alloyId18804.add($.__views.__alloyId18805);
    $.__views.__alloyId18806 = Ti.UI.createView({
        id: "__alloyId18806"
    });
    $.__views.__alloyId18806 && $.addTopLevelView($.__views.__alloyId18806);
    $.__views.__alloyId18807 = Ti.UI.createView({
        id: "__alloyId18807"
    });
    $.__views.__alloyId18806.add($.__views.__alloyId18807);
    $.__views.__alloyId18808 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18808"
    });
    $.__views.__alloyId18807.add($.__views.__alloyId18808);
    $.__views.__alloyId18809 = Ti.UI.createView({
        id: "__alloyId18809"
    });
    $.__views.__alloyId18809 && $.addTopLevelView($.__views.__alloyId18809);
    $.__views.__alloyId18810 = Ti.UI.createView({
        id: "__alloyId18810"
    });
    $.__views.__alloyId18809.add($.__views.__alloyId18810);
    $.__views.__alloyId18811 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18811"
    });
    $.__views.__alloyId18810.add($.__views.__alloyId18811);
    $.__views.__alloyId18812 = Ti.UI.createView({
        id: "__alloyId18812"
    });
    $.__views.__alloyId18812 && $.addTopLevelView($.__views.__alloyId18812);
    $.__views.__alloyId18813 = Ti.UI.createView({
        id: "__alloyId18813"
    });
    $.__views.__alloyId18812.add($.__views.__alloyId18813);
    $.__views.__alloyId18814 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18814"
    });
    $.__views.__alloyId18813.add($.__views.__alloyId18814);
    $.__views.__alloyId18815 = Ti.UI.createView({
        id: "__alloyId18815"
    });
    $.__views.__alloyId18815 && $.addTopLevelView($.__views.__alloyId18815);
    $.__views.__alloyId18816 = Ti.UI.createView({
        id: "__alloyId18816"
    });
    $.__views.__alloyId18815.add($.__views.__alloyId18816);
    $.__views.__alloyId18817 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18817"
    });
    $.__views.__alloyId18816.add($.__views.__alloyId18817);
    $.__views.__alloyId18818 = Ti.UI.createView({
        id: "__alloyId18818"
    });
    $.__views.__alloyId18818 && $.addTopLevelView($.__views.__alloyId18818);
    $.__views.__alloyId18819 = Ti.UI.createView({
        id: "__alloyId18819"
    });
    $.__views.__alloyId18818.add($.__views.__alloyId18819);
    $.__views.__alloyId18820 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18820"
    });
    $.__views.__alloyId18819.add($.__views.__alloyId18820);
    $.__views.__alloyId18821 = Ti.UI.createView({
        id: "__alloyId18821"
    });
    $.__views.__alloyId18821 && $.addTopLevelView($.__views.__alloyId18821);
    $.__views.__alloyId18822 = Ti.UI.createView({
        id: "__alloyId18822"
    });
    $.__views.__alloyId18821.add($.__views.__alloyId18822);
    $.__views.__alloyId18823 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18823"
    });
    $.__views.__alloyId18822.add($.__views.__alloyId18823);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;