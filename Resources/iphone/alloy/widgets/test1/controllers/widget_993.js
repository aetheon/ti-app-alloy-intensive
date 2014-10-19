function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_993";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_993 = Ti.UI.createView({
        id: "widget_993"
    });
    $.__views.widget_993 && $.addTopLevelView($.__views.widget_993);
    $.__views.__alloyId25844 = Ti.UI.createView({
        id: "__alloyId25844"
    });
    $.__views.widget_993.add($.__views.__alloyId25844);
    $.__views.__alloyId25845 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25845"
    });
    $.__views.__alloyId25844.add($.__views.__alloyId25845);
    $.__views.__alloyId25846 = Ti.UI.createView({
        id: "__alloyId25846"
    });
    $.__views.__alloyId25846 && $.addTopLevelView($.__views.__alloyId25846);
    $.__views.__alloyId25847 = Ti.UI.createView({
        id: "__alloyId25847"
    });
    $.__views.__alloyId25846.add($.__views.__alloyId25847);
    $.__views.__alloyId25848 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25848"
    });
    $.__views.__alloyId25847.add($.__views.__alloyId25848);
    $.__views.__alloyId25849 = Ti.UI.createView({
        id: "__alloyId25849"
    });
    $.__views.__alloyId25849 && $.addTopLevelView($.__views.__alloyId25849);
    $.__views.__alloyId25850 = Ti.UI.createView({
        id: "__alloyId25850"
    });
    $.__views.__alloyId25849.add($.__views.__alloyId25850);
    $.__views.__alloyId25851 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25851"
    });
    $.__views.__alloyId25850.add($.__views.__alloyId25851);
    $.__views.__alloyId25852 = Ti.UI.createView({
        id: "__alloyId25852"
    });
    $.__views.__alloyId25852 && $.addTopLevelView($.__views.__alloyId25852);
    $.__views.__alloyId25853 = Ti.UI.createView({
        id: "__alloyId25853"
    });
    $.__views.__alloyId25852.add($.__views.__alloyId25853);
    $.__views.__alloyId25854 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25854"
    });
    $.__views.__alloyId25853.add($.__views.__alloyId25854);
    $.__views.__alloyId25855 = Ti.UI.createView({
        id: "__alloyId25855"
    });
    $.__views.__alloyId25855 && $.addTopLevelView($.__views.__alloyId25855);
    $.__views.__alloyId25856 = Ti.UI.createView({
        id: "__alloyId25856"
    });
    $.__views.__alloyId25855.add($.__views.__alloyId25856);
    $.__views.__alloyId25857 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25857"
    });
    $.__views.__alloyId25856.add($.__views.__alloyId25857);
    $.__views.__alloyId25858 = Ti.UI.createView({
        id: "__alloyId25858"
    });
    $.__views.__alloyId25858 && $.addTopLevelView($.__views.__alloyId25858);
    $.__views.__alloyId25859 = Ti.UI.createView({
        id: "__alloyId25859"
    });
    $.__views.__alloyId25858.add($.__views.__alloyId25859);
    $.__views.__alloyId25860 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25860"
    });
    $.__views.__alloyId25859.add($.__views.__alloyId25860);
    $.__views.__alloyId25861 = Ti.UI.createView({
        id: "__alloyId25861"
    });
    $.__views.__alloyId25861 && $.addTopLevelView($.__views.__alloyId25861);
    $.__views.__alloyId25862 = Ti.UI.createView({
        id: "__alloyId25862"
    });
    $.__views.__alloyId25861.add($.__views.__alloyId25862);
    $.__views.__alloyId25863 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25863"
    });
    $.__views.__alloyId25862.add($.__views.__alloyId25863);
    $.__views.__alloyId25864 = Ti.UI.createView({
        id: "__alloyId25864"
    });
    $.__views.__alloyId25864 && $.addTopLevelView($.__views.__alloyId25864);
    $.__views.__alloyId25865 = Ti.UI.createView({
        id: "__alloyId25865"
    });
    $.__views.__alloyId25864.add($.__views.__alloyId25865);
    $.__views.__alloyId25866 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25866"
    });
    $.__views.__alloyId25865.add($.__views.__alloyId25866);
    $.__views.__alloyId25867 = Ti.UI.createView({
        id: "__alloyId25867"
    });
    $.__views.__alloyId25867 && $.addTopLevelView($.__views.__alloyId25867);
    $.__views.__alloyId25868 = Ti.UI.createView({
        id: "__alloyId25868"
    });
    $.__views.__alloyId25867.add($.__views.__alloyId25868);
    $.__views.__alloyId25869 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25869"
    });
    $.__views.__alloyId25868.add($.__views.__alloyId25869);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;