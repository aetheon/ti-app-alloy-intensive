function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_542";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_542 = Ti.UI.createView({
        id: "widget_542"
    });
    $.__views.widget_542 && $.addTopLevelView($.__views.widget_542);
    $.__views.__alloyId12844 = Ti.UI.createView({
        id: "__alloyId12844"
    });
    $.__views.widget_542.add($.__views.__alloyId12844);
    $.__views.__alloyId12845 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12845"
    });
    $.__views.__alloyId12844.add($.__views.__alloyId12845);
    $.__views.__alloyId12846 = Ti.UI.createView({
        id: "__alloyId12846"
    });
    $.__views.__alloyId12846 && $.addTopLevelView($.__views.__alloyId12846);
    $.__views.__alloyId12847 = Ti.UI.createView({
        id: "__alloyId12847"
    });
    $.__views.__alloyId12846.add($.__views.__alloyId12847);
    $.__views.__alloyId12848 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12848"
    });
    $.__views.__alloyId12847.add($.__views.__alloyId12848);
    $.__views.__alloyId12849 = Ti.UI.createView({
        id: "__alloyId12849"
    });
    $.__views.__alloyId12849 && $.addTopLevelView($.__views.__alloyId12849);
    $.__views.__alloyId12850 = Ti.UI.createView({
        id: "__alloyId12850"
    });
    $.__views.__alloyId12849.add($.__views.__alloyId12850);
    $.__views.__alloyId12851 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12851"
    });
    $.__views.__alloyId12850.add($.__views.__alloyId12851);
    $.__views.__alloyId12852 = Ti.UI.createView({
        id: "__alloyId12852"
    });
    $.__views.__alloyId12852 && $.addTopLevelView($.__views.__alloyId12852);
    $.__views.__alloyId12853 = Ti.UI.createView({
        id: "__alloyId12853"
    });
    $.__views.__alloyId12852.add($.__views.__alloyId12853);
    $.__views.__alloyId12854 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12854"
    });
    $.__views.__alloyId12853.add($.__views.__alloyId12854);
    $.__views.__alloyId12855 = Ti.UI.createView({
        id: "__alloyId12855"
    });
    $.__views.__alloyId12855 && $.addTopLevelView($.__views.__alloyId12855);
    $.__views.__alloyId12856 = Ti.UI.createView({
        id: "__alloyId12856"
    });
    $.__views.__alloyId12855.add($.__views.__alloyId12856);
    $.__views.__alloyId12857 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12857"
    });
    $.__views.__alloyId12856.add($.__views.__alloyId12857);
    $.__views.__alloyId12858 = Ti.UI.createView({
        id: "__alloyId12858"
    });
    $.__views.__alloyId12858 && $.addTopLevelView($.__views.__alloyId12858);
    $.__views.__alloyId12859 = Ti.UI.createView({
        id: "__alloyId12859"
    });
    $.__views.__alloyId12858.add($.__views.__alloyId12859);
    $.__views.__alloyId12860 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12860"
    });
    $.__views.__alloyId12859.add($.__views.__alloyId12860);
    $.__views.__alloyId12861 = Ti.UI.createView({
        id: "__alloyId12861"
    });
    $.__views.__alloyId12861 && $.addTopLevelView($.__views.__alloyId12861);
    $.__views.__alloyId12862 = Ti.UI.createView({
        id: "__alloyId12862"
    });
    $.__views.__alloyId12861.add($.__views.__alloyId12862);
    $.__views.__alloyId12863 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12863"
    });
    $.__views.__alloyId12862.add($.__views.__alloyId12863);
    $.__views.__alloyId12864 = Ti.UI.createView({
        id: "__alloyId12864"
    });
    $.__views.__alloyId12864 && $.addTopLevelView($.__views.__alloyId12864);
    $.__views.__alloyId12865 = Ti.UI.createView({
        id: "__alloyId12865"
    });
    $.__views.__alloyId12864.add($.__views.__alloyId12865);
    $.__views.__alloyId12866 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12866"
    });
    $.__views.__alloyId12865.add($.__views.__alloyId12866);
    $.__views.__alloyId12867 = Ti.UI.createView({
        id: "__alloyId12867"
    });
    $.__views.__alloyId12867 && $.addTopLevelView($.__views.__alloyId12867);
    $.__views.__alloyId12868 = Ti.UI.createView({
        id: "__alloyId12868"
    });
    $.__views.__alloyId12867.add($.__views.__alloyId12868);
    $.__views.__alloyId12869 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12869"
    });
    $.__views.__alloyId12868.add($.__views.__alloyId12869);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;