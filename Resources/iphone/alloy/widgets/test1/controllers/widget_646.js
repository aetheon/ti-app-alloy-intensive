function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_646";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_646 = Ti.UI.createView({
        id: "widget_646"
    });
    $.__views.widget_646 && $.addTopLevelView($.__views.widget_646);
    $.__views.__alloyId15834 = Ti.UI.createView({
        id: "__alloyId15834"
    });
    $.__views.widget_646.add($.__views.__alloyId15834);
    $.__views.__alloyId15835 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15835"
    });
    $.__views.__alloyId15834.add($.__views.__alloyId15835);
    $.__views.__alloyId15836 = Ti.UI.createView({
        id: "__alloyId15836"
    });
    $.__views.__alloyId15836 && $.addTopLevelView($.__views.__alloyId15836);
    $.__views.__alloyId15837 = Ti.UI.createView({
        id: "__alloyId15837"
    });
    $.__views.__alloyId15836.add($.__views.__alloyId15837);
    $.__views.__alloyId15838 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15838"
    });
    $.__views.__alloyId15837.add($.__views.__alloyId15838);
    $.__views.__alloyId15839 = Ti.UI.createView({
        id: "__alloyId15839"
    });
    $.__views.__alloyId15839 && $.addTopLevelView($.__views.__alloyId15839);
    $.__views.__alloyId15840 = Ti.UI.createView({
        id: "__alloyId15840"
    });
    $.__views.__alloyId15839.add($.__views.__alloyId15840);
    $.__views.__alloyId15841 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15841"
    });
    $.__views.__alloyId15840.add($.__views.__alloyId15841);
    $.__views.__alloyId15842 = Ti.UI.createView({
        id: "__alloyId15842"
    });
    $.__views.__alloyId15842 && $.addTopLevelView($.__views.__alloyId15842);
    $.__views.__alloyId15843 = Ti.UI.createView({
        id: "__alloyId15843"
    });
    $.__views.__alloyId15842.add($.__views.__alloyId15843);
    $.__views.__alloyId15844 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15844"
    });
    $.__views.__alloyId15843.add($.__views.__alloyId15844);
    $.__views.__alloyId15845 = Ti.UI.createView({
        id: "__alloyId15845"
    });
    $.__views.__alloyId15845 && $.addTopLevelView($.__views.__alloyId15845);
    $.__views.__alloyId15846 = Ti.UI.createView({
        id: "__alloyId15846"
    });
    $.__views.__alloyId15845.add($.__views.__alloyId15846);
    $.__views.__alloyId15847 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15847"
    });
    $.__views.__alloyId15846.add($.__views.__alloyId15847);
    $.__views.__alloyId15848 = Ti.UI.createView({
        id: "__alloyId15848"
    });
    $.__views.__alloyId15848 && $.addTopLevelView($.__views.__alloyId15848);
    $.__views.__alloyId15849 = Ti.UI.createView({
        id: "__alloyId15849"
    });
    $.__views.__alloyId15848.add($.__views.__alloyId15849);
    $.__views.__alloyId15850 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15850"
    });
    $.__views.__alloyId15849.add($.__views.__alloyId15850);
    $.__views.__alloyId15851 = Ti.UI.createView({
        id: "__alloyId15851"
    });
    $.__views.__alloyId15851 && $.addTopLevelView($.__views.__alloyId15851);
    $.__views.__alloyId15852 = Ti.UI.createView({
        id: "__alloyId15852"
    });
    $.__views.__alloyId15851.add($.__views.__alloyId15852);
    $.__views.__alloyId15853 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15853"
    });
    $.__views.__alloyId15852.add($.__views.__alloyId15853);
    $.__views.__alloyId15854 = Ti.UI.createView({
        id: "__alloyId15854"
    });
    $.__views.__alloyId15854 && $.addTopLevelView($.__views.__alloyId15854);
    $.__views.__alloyId15855 = Ti.UI.createView({
        id: "__alloyId15855"
    });
    $.__views.__alloyId15854.add($.__views.__alloyId15855);
    $.__views.__alloyId15856 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15856"
    });
    $.__views.__alloyId15855.add($.__views.__alloyId15856);
    $.__views.__alloyId15857 = Ti.UI.createView({
        id: "__alloyId15857"
    });
    $.__views.__alloyId15857 && $.addTopLevelView($.__views.__alloyId15857);
    $.__views.__alloyId15858 = Ti.UI.createView({
        id: "__alloyId15858"
    });
    $.__views.__alloyId15857.add($.__views.__alloyId15858);
    $.__views.__alloyId15859 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15859"
    });
    $.__views.__alloyId15858.add($.__views.__alloyId15859);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;