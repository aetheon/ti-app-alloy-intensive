function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_750";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_750 = Ti.UI.createView({
        id: "widget_750"
    });
    $.__views.widget_750 && $.addTopLevelView($.__views.widget_750);
    $.__views.__alloyId18850 = Ti.UI.createView({
        id: "__alloyId18850"
    });
    $.__views.widget_750.add($.__views.__alloyId18850);
    $.__views.__alloyId18851 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18851"
    });
    $.__views.__alloyId18850.add($.__views.__alloyId18851);
    $.__views.__alloyId18852 = Ti.UI.createView({
        id: "__alloyId18852"
    });
    $.__views.__alloyId18852 && $.addTopLevelView($.__views.__alloyId18852);
    $.__views.__alloyId18853 = Ti.UI.createView({
        id: "__alloyId18853"
    });
    $.__views.__alloyId18852.add($.__views.__alloyId18853);
    $.__views.__alloyId18854 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18854"
    });
    $.__views.__alloyId18853.add($.__views.__alloyId18854);
    $.__views.__alloyId18855 = Ti.UI.createView({
        id: "__alloyId18855"
    });
    $.__views.__alloyId18855 && $.addTopLevelView($.__views.__alloyId18855);
    $.__views.__alloyId18856 = Ti.UI.createView({
        id: "__alloyId18856"
    });
    $.__views.__alloyId18855.add($.__views.__alloyId18856);
    $.__views.__alloyId18857 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18857"
    });
    $.__views.__alloyId18856.add($.__views.__alloyId18857);
    $.__views.__alloyId18858 = Ti.UI.createView({
        id: "__alloyId18858"
    });
    $.__views.__alloyId18858 && $.addTopLevelView($.__views.__alloyId18858);
    $.__views.__alloyId18859 = Ti.UI.createView({
        id: "__alloyId18859"
    });
    $.__views.__alloyId18858.add($.__views.__alloyId18859);
    $.__views.__alloyId18860 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18860"
    });
    $.__views.__alloyId18859.add($.__views.__alloyId18860);
    $.__views.__alloyId18861 = Ti.UI.createView({
        id: "__alloyId18861"
    });
    $.__views.__alloyId18861 && $.addTopLevelView($.__views.__alloyId18861);
    $.__views.__alloyId18862 = Ti.UI.createView({
        id: "__alloyId18862"
    });
    $.__views.__alloyId18861.add($.__views.__alloyId18862);
    $.__views.__alloyId18863 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18863"
    });
    $.__views.__alloyId18862.add($.__views.__alloyId18863);
    $.__views.__alloyId18864 = Ti.UI.createView({
        id: "__alloyId18864"
    });
    $.__views.__alloyId18864 && $.addTopLevelView($.__views.__alloyId18864);
    $.__views.__alloyId18865 = Ti.UI.createView({
        id: "__alloyId18865"
    });
    $.__views.__alloyId18864.add($.__views.__alloyId18865);
    $.__views.__alloyId18866 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18866"
    });
    $.__views.__alloyId18865.add($.__views.__alloyId18866);
    $.__views.__alloyId18867 = Ti.UI.createView({
        id: "__alloyId18867"
    });
    $.__views.__alloyId18867 && $.addTopLevelView($.__views.__alloyId18867);
    $.__views.__alloyId18868 = Ti.UI.createView({
        id: "__alloyId18868"
    });
    $.__views.__alloyId18867.add($.__views.__alloyId18868);
    $.__views.__alloyId18869 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18869"
    });
    $.__views.__alloyId18868.add($.__views.__alloyId18869);
    $.__views.__alloyId18870 = Ti.UI.createView({
        id: "__alloyId18870"
    });
    $.__views.__alloyId18870 && $.addTopLevelView($.__views.__alloyId18870);
    $.__views.__alloyId18871 = Ti.UI.createView({
        id: "__alloyId18871"
    });
    $.__views.__alloyId18870.add($.__views.__alloyId18871);
    $.__views.__alloyId18872 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18872"
    });
    $.__views.__alloyId18871.add($.__views.__alloyId18872);
    $.__views.__alloyId18873 = Ti.UI.createView({
        id: "__alloyId18873"
    });
    $.__views.__alloyId18873 && $.addTopLevelView($.__views.__alloyId18873);
    $.__views.__alloyId18874 = Ti.UI.createView({
        id: "__alloyId18874"
    });
    $.__views.__alloyId18873.add($.__views.__alloyId18874);
    $.__views.__alloyId18875 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18875"
    });
    $.__views.__alloyId18874.add($.__views.__alloyId18875);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;