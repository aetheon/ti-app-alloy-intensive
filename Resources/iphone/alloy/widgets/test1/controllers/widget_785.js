function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_785";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_785 = Ti.UI.createView({
        id: "widget_785"
    });
    $.__views.widget_785 && $.addTopLevelView($.__views.widget_785);
    $.__views.__alloyId19838 = Ti.UI.createView({
        id: "__alloyId19838"
    });
    $.__views.widget_785.add($.__views.__alloyId19838);
    $.__views.__alloyId19839 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19839"
    });
    $.__views.__alloyId19838.add($.__views.__alloyId19839);
    $.__views.__alloyId19840 = Ti.UI.createView({
        id: "__alloyId19840"
    });
    $.__views.__alloyId19840 && $.addTopLevelView($.__views.__alloyId19840);
    $.__views.__alloyId19841 = Ti.UI.createView({
        id: "__alloyId19841"
    });
    $.__views.__alloyId19840.add($.__views.__alloyId19841);
    $.__views.__alloyId19842 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19842"
    });
    $.__views.__alloyId19841.add($.__views.__alloyId19842);
    $.__views.__alloyId19843 = Ti.UI.createView({
        id: "__alloyId19843"
    });
    $.__views.__alloyId19843 && $.addTopLevelView($.__views.__alloyId19843);
    $.__views.__alloyId19844 = Ti.UI.createView({
        id: "__alloyId19844"
    });
    $.__views.__alloyId19843.add($.__views.__alloyId19844);
    $.__views.__alloyId19845 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19845"
    });
    $.__views.__alloyId19844.add($.__views.__alloyId19845);
    $.__views.__alloyId19846 = Ti.UI.createView({
        id: "__alloyId19846"
    });
    $.__views.__alloyId19846 && $.addTopLevelView($.__views.__alloyId19846);
    $.__views.__alloyId19847 = Ti.UI.createView({
        id: "__alloyId19847"
    });
    $.__views.__alloyId19846.add($.__views.__alloyId19847);
    $.__views.__alloyId19848 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19848"
    });
    $.__views.__alloyId19847.add($.__views.__alloyId19848);
    $.__views.__alloyId19849 = Ti.UI.createView({
        id: "__alloyId19849"
    });
    $.__views.__alloyId19849 && $.addTopLevelView($.__views.__alloyId19849);
    $.__views.__alloyId19850 = Ti.UI.createView({
        id: "__alloyId19850"
    });
    $.__views.__alloyId19849.add($.__views.__alloyId19850);
    $.__views.__alloyId19851 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19851"
    });
    $.__views.__alloyId19850.add($.__views.__alloyId19851);
    $.__views.__alloyId19852 = Ti.UI.createView({
        id: "__alloyId19852"
    });
    $.__views.__alloyId19852 && $.addTopLevelView($.__views.__alloyId19852);
    $.__views.__alloyId19853 = Ti.UI.createView({
        id: "__alloyId19853"
    });
    $.__views.__alloyId19852.add($.__views.__alloyId19853);
    $.__views.__alloyId19854 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19854"
    });
    $.__views.__alloyId19853.add($.__views.__alloyId19854);
    $.__views.__alloyId19855 = Ti.UI.createView({
        id: "__alloyId19855"
    });
    $.__views.__alloyId19855 && $.addTopLevelView($.__views.__alloyId19855);
    $.__views.__alloyId19856 = Ti.UI.createView({
        id: "__alloyId19856"
    });
    $.__views.__alloyId19855.add($.__views.__alloyId19856);
    $.__views.__alloyId19857 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19857"
    });
    $.__views.__alloyId19856.add($.__views.__alloyId19857);
    $.__views.__alloyId19858 = Ti.UI.createView({
        id: "__alloyId19858"
    });
    $.__views.__alloyId19858 && $.addTopLevelView($.__views.__alloyId19858);
    $.__views.__alloyId19859 = Ti.UI.createView({
        id: "__alloyId19859"
    });
    $.__views.__alloyId19858.add($.__views.__alloyId19859);
    $.__views.__alloyId19860 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19860"
    });
    $.__views.__alloyId19859.add($.__views.__alloyId19860);
    $.__views.__alloyId19861 = Ti.UI.createView({
        id: "__alloyId19861"
    });
    $.__views.__alloyId19861 && $.addTopLevelView($.__views.__alloyId19861);
    $.__views.__alloyId19862 = Ti.UI.createView({
        id: "__alloyId19862"
    });
    $.__views.__alloyId19861.add($.__views.__alloyId19862);
    $.__views.__alloyId19863 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19863"
    });
    $.__views.__alloyId19862.add($.__views.__alloyId19863);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;