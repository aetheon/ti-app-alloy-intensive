function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_299";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_299 = Ti.UI.createView({
        id: "widget_299"
    });
    $.__views.widget_299 && $.addTopLevelView($.__views.widget_299);
    $.__views.__alloyId5798 = Ti.UI.createView({
        id: "__alloyId5798"
    });
    $.__views.widget_299.add($.__views.__alloyId5798);
    $.__views.__alloyId5799 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5799"
    });
    $.__views.__alloyId5798.add($.__views.__alloyId5799);
    $.__views.__alloyId5800 = Ti.UI.createView({
        id: "__alloyId5800"
    });
    $.__views.__alloyId5800 && $.addTopLevelView($.__views.__alloyId5800);
    $.__views.__alloyId5801 = Ti.UI.createView({
        id: "__alloyId5801"
    });
    $.__views.__alloyId5800.add($.__views.__alloyId5801);
    $.__views.__alloyId5802 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5802"
    });
    $.__views.__alloyId5801.add($.__views.__alloyId5802);
    $.__views.__alloyId5803 = Ti.UI.createView({
        id: "__alloyId5803"
    });
    $.__views.__alloyId5803 && $.addTopLevelView($.__views.__alloyId5803);
    $.__views.__alloyId5804 = Ti.UI.createView({
        id: "__alloyId5804"
    });
    $.__views.__alloyId5803.add($.__views.__alloyId5804);
    $.__views.__alloyId5805 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5805"
    });
    $.__views.__alloyId5804.add($.__views.__alloyId5805);
    $.__views.__alloyId5806 = Ti.UI.createView({
        id: "__alloyId5806"
    });
    $.__views.__alloyId5806 && $.addTopLevelView($.__views.__alloyId5806);
    $.__views.__alloyId5807 = Ti.UI.createView({
        id: "__alloyId5807"
    });
    $.__views.__alloyId5806.add($.__views.__alloyId5807);
    $.__views.__alloyId5808 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5808"
    });
    $.__views.__alloyId5807.add($.__views.__alloyId5808);
    $.__views.__alloyId5809 = Ti.UI.createView({
        id: "__alloyId5809"
    });
    $.__views.__alloyId5809 && $.addTopLevelView($.__views.__alloyId5809);
    $.__views.__alloyId5810 = Ti.UI.createView({
        id: "__alloyId5810"
    });
    $.__views.__alloyId5809.add($.__views.__alloyId5810);
    $.__views.__alloyId5811 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5811"
    });
    $.__views.__alloyId5810.add($.__views.__alloyId5811);
    $.__views.__alloyId5812 = Ti.UI.createView({
        id: "__alloyId5812"
    });
    $.__views.__alloyId5812 && $.addTopLevelView($.__views.__alloyId5812);
    $.__views.__alloyId5813 = Ti.UI.createView({
        id: "__alloyId5813"
    });
    $.__views.__alloyId5812.add($.__views.__alloyId5813);
    $.__views.__alloyId5814 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5814"
    });
    $.__views.__alloyId5813.add($.__views.__alloyId5814);
    $.__views.__alloyId5815 = Ti.UI.createView({
        id: "__alloyId5815"
    });
    $.__views.__alloyId5815 && $.addTopLevelView($.__views.__alloyId5815);
    $.__views.__alloyId5816 = Ti.UI.createView({
        id: "__alloyId5816"
    });
    $.__views.__alloyId5815.add($.__views.__alloyId5816);
    $.__views.__alloyId5817 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5817"
    });
    $.__views.__alloyId5816.add($.__views.__alloyId5817);
    $.__views.__alloyId5818 = Ti.UI.createView({
        id: "__alloyId5818"
    });
    $.__views.__alloyId5818 && $.addTopLevelView($.__views.__alloyId5818);
    $.__views.__alloyId5819 = Ti.UI.createView({
        id: "__alloyId5819"
    });
    $.__views.__alloyId5818.add($.__views.__alloyId5819);
    $.__views.__alloyId5820 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5820"
    });
    $.__views.__alloyId5819.add($.__views.__alloyId5820);
    $.__views.__alloyId5821 = Ti.UI.createView({
        id: "__alloyId5821"
    });
    $.__views.__alloyId5821 && $.addTopLevelView($.__views.__alloyId5821);
    $.__views.__alloyId5822 = Ti.UI.createView({
        id: "__alloyId5822"
    });
    $.__views.__alloyId5821.add($.__views.__alloyId5822);
    $.__views.__alloyId5823 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5823"
    });
    $.__views.__alloyId5822.add($.__views.__alloyId5823);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;