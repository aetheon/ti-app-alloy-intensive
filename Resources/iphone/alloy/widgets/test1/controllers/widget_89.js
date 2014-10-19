function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_89";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_89 = Ti.UI.createView({
        id: "widget_89"
    });
    $.__views.widget_89 && $.addTopLevelView($.__views.widget_89);
    $.__views.__alloyId22854 = Ti.UI.createView({
        id: "__alloyId22854"
    });
    $.__views.widget_89.add($.__views.__alloyId22854);
    $.__views.__alloyId22855 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22855"
    });
    $.__views.__alloyId22854.add($.__views.__alloyId22855);
    $.__views.__alloyId22856 = Ti.UI.createView({
        id: "__alloyId22856"
    });
    $.__views.__alloyId22856 && $.addTopLevelView($.__views.__alloyId22856);
    $.__views.__alloyId22857 = Ti.UI.createView({
        id: "__alloyId22857"
    });
    $.__views.__alloyId22856.add($.__views.__alloyId22857);
    $.__views.__alloyId22858 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22858"
    });
    $.__views.__alloyId22857.add($.__views.__alloyId22858);
    $.__views.__alloyId22859 = Ti.UI.createView({
        id: "__alloyId22859"
    });
    $.__views.__alloyId22859 && $.addTopLevelView($.__views.__alloyId22859);
    $.__views.__alloyId22860 = Ti.UI.createView({
        id: "__alloyId22860"
    });
    $.__views.__alloyId22859.add($.__views.__alloyId22860);
    $.__views.__alloyId22861 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22861"
    });
    $.__views.__alloyId22860.add($.__views.__alloyId22861);
    $.__views.__alloyId22862 = Ti.UI.createView({
        id: "__alloyId22862"
    });
    $.__views.__alloyId22862 && $.addTopLevelView($.__views.__alloyId22862);
    $.__views.__alloyId22863 = Ti.UI.createView({
        id: "__alloyId22863"
    });
    $.__views.__alloyId22862.add($.__views.__alloyId22863);
    $.__views.__alloyId22864 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22864"
    });
    $.__views.__alloyId22863.add($.__views.__alloyId22864);
    $.__views.__alloyId22865 = Ti.UI.createView({
        id: "__alloyId22865"
    });
    $.__views.__alloyId22865 && $.addTopLevelView($.__views.__alloyId22865);
    $.__views.__alloyId22866 = Ti.UI.createView({
        id: "__alloyId22866"
    });
    $.__views.__alloyId22865.add($.__views.__alloyId22866);
    $.__views.__alloyId22867 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22867"
    });
    $.__views.__alloyId22866.add($.__views.__alloyId22867);
    $.__views.__alloyId22868 = Ti.UI.createView({
        id: "__alloyId22868"
    });
    $.__views.__alloyId22868 && $.addTopLevelView($.__views.__alloyId22868);
    $.__views.__alloyId22869 = Ti.UI.createView({
        id: "__alloyId22869"
    });
    $.__views.__alloyId22868.add($.__views.__alloyId22869);
    $.__views.__alloyId22870 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22870"
    });
    $.__views.__alloyId22869.add($.__views.__alloyId22870);
    $.__views.__alloyId22871 = Ti.UI.createView({
        id: "__alloyId22871"
    });
    $.__views.__alloyId22871 && $.addTopLevelView($.__views.__alloyId22871);
    $.__views.__alloyId22872 = Ti.UI.createView({
        id: "__alloyId22872"
    });
    $.__views.__alloyId22871.add($.__views.__alloyId22872);
    $.__views.__alloyId22873 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22873"
    });
    $.__views.__alloyId22872.add($.__views.__alloyId22873);
    $.__views.__alloyId22874 = Ti.UI.createView({
        id: "__alloyId22874"
    });
    $.__views.__alloyId22874 && $.addTopLevelView($.__views.__alloyId22874);
    $.__views.__alloyId22875 = Ti.UI.createView({
        id: "__alloyId22875"
    });
    $.__views.__alloyId22874.add($.__views.__alloyId22875);
    $.__views.__alloyId22876 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22876"
    });
    $.__views.__alloyId22875.add($.__views.__alloyId22876);
    $.__views.__alloyId22877 = Ti.UI.createView({
        id: "__alloyId22877"
    });
    $.__views.__alloyId22877 && $.addTopLevelView($.__views.__alloyId22877);
    $.__views.__alloyId22878 = Ti.UI.createView({
        id: "__alloyId22878"
    });
    $.__views.__alloyId22877.add($.__views.__alloyId22878);
    $.__views.__alloyId22879 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22879"
    });
    $.__views.__alloyId22878.add($.__views.__alloyId22879);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;