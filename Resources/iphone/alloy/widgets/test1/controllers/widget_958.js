function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_958";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_958 = Ti.UI.createView({
        id: "widget_958"
    });
    $.__views.widget_958 && $.addTopLevelView($.__views.widget_958);
    $.__views.__alloyId24830 = Ti.UI.createView({
        id: "__alloyId24830"
    });
    $.__views.widget_958.add($.__views.__alloyId24830);
    $.__views.__alloyId24831 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24831"
    });
    $.__views.__alloyId24830.add($.__views.__alloyId24831);
    $.__views.__alloyId24832 = Ti.UI.createView({
        id: "__alloyId24832"
    });
    $.__views.__alloyId24832 && $.addTopLevelView($.__views.__alloyId24832);
    $.__views.__alloyId24833 = Ti.UI.createView({
        id: "__alloyId24833"
    });
    $.__views.__alloyId24832.add($.__views.__alloyId24833);
    $.__views.__alloyId24834 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24834"
    });
    $.__views.__alloyId24833.add($.__views.__alloyId24834);
    $.__views.__alloyId24835 = Ti.UI.createView({
        id: "__alloyId24835"
    });
    $.__views.__alloyId24835 && $.addTopLevelView($.__views.__alloyId24835);
    $.__views.__alloyId24836 = Ti.UI.createView({
        id: "__alloyId24836"
    });
    $.__views.__alloyId24835.add($.__views.__alloyId24836);
    $.__views.__alloyId24837 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24837"
    });
    $.__views.__alloyId24836.add($.__views.__alloyId24837);
    $.__views.__alloyId24838 = Ti.UI.createView({
        id: "__alloyId24838"
    });
    $.__views.__alloyId24838 && $.addTopLevelView($.__views.__alloyId24838);
    $.__views.__alloyId24839 = Ti.UI.createView({
        id: "__alloyId24839"
    });
    $.__views.__alloyId24838.add($.__views.__alloyId24839);
    $.__views.__alloyId24840 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24840"
    });
    $.__views.__alloyId24839.add($.__views.__alloyId24840);
    $.__views.__alloyId24841 = Ti.UI.createView({
        id: "__alloyId24841"
    });
    $.__views.__alloyId24841 && $.addTopLevelView($.__views.__alloyId24841);
    $.__views.__alloyId24842 = Ti.UI.createView({
        id: "__alloyId24842"
    });
    $.__views.__alloyId24841.add($.__views.__alloyId24842);
    $.__views.__alloyId24843 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24843"
    });
    $.__views.__alloyId24842.add($.__views.__alloyId24843);
    $.__views.__alloyId24844 = Ti.UI.createView({
        id: "__alloyId24844"
    });
    $.__views.__alloyId24844 && $.addTopLevelView($.__views.__alloyId24844);
    $.__views.__alloyId24845 = Ti.UI.createView({
        id: "__alloyId24845"
    });
    $.__views.__alloyId24844.add($.__views.__alloyId24845);
    $.__views.__alloyId24846 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24846"
    });
    $.__views.__alloyId24845.add($.__views.__alloyId24846);
    $.__views.__alloyId24847 = Ti.UI.createView({
        id: "__alloyId24847"
    });
    $.__views.__alloyId24847 && $.addTopLevelView($.__views.__alloyId24847);
    $.__views.__alloyId24848 = Ti.UI.createView({
        id: "__alloyId24848"
    });
    $.__views.__alloyId24847.add($.__views.__alloyId24848);
    $.__views.__alloyId24849 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24849"
    });
    $.__views.__alloyId24848.add($.__views.__alloyId24849);
    $.__views.__alloyId24850 = Ti.UI.createView({
        id: "__alloyId24850"
    });
    $.__views.__alloyId24850 && $.addTopLevelView($.__views.__alloyId24850);
    $.__views.__alloyId24851 = Ti.UI.createView({
        id: "__alloyId24851"
    });
    $.__views.__alloyId24850.add($.__views.__alloyId24851);
    $.__views.__alloyId24852 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24852"
    });
    $.__views.__alloyId24851.add($.__views.__alloyId24852);
    $.__views.__alloyId24853 = Ti.UI.createView({
        id: "__alloyId24853"
    });
    $.__views.__alloyId24853 && $.addTopLevelView($.__views.__alloyId24853);
    $.__views.__alloyId24854 = Ti.UI.createView({
        id: "__alloyId24854"
    });
    $.__views.__alloyId24853.add($.__views.__alloyId24854);
    $.__views.__alloyId24855 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24855"
    });
    $.__views.__alloyId24854.add($.__views.__alloyId24855);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;