function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_127";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_127 = Ti.UI.createView({
        id: "widget_127"
    });
    $.__views.widget_127 && $.addTopLevelView($.__views.widget_127);
    $.__views.__alloyId858 = Ti.UI.createView({
        id: "__alloyId858"
    });
    $.__views.widget_127.add($.__views.__alloyId858);
    $.__views.__alloyId859 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId859"
    });
    $.__views.__alloyId858.add($.__views.__alloyId859);
    $.__views.__alloyId860 = Ti.UI.createView({
        id: "__alloyId860"
    });
    $.__views.__alloyId860 && $.addTopLevelView($.__views.__alloyId860);
    $.__views.__alloyId861 = Ti.UI.createView({
        id: "__alloyId861"
    });
    $.__views.__alloyId860.add($.__views.__alloyId861);
    $.__views.__alloyId862 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId862"
    });
    $.__views.__alloyId861.add($.__views.__alloyId862);
    $.__views.__alloyId863 = Ti.UI.createView({
        id: "__alloyId863"
    });
    $.__views.__alloyId863 && $.addTopLevelView($.__views.__alloyId863);
    $.__views.__alloyId864 = Ti.UI.createView({
        id: "__alloyId864"
    });
    $.__views.__alloyId863.add($.__views.__alloyId864);
    $.__views.__alloyId865 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId865"
    });
    $.__views.__alloyId864.add($.__views.__alloyId865);
    $.__views.__alloyId866 = Ti.UI.createView({
        id: "__alloyId866"
    });
    $.__views.__alloyId866 && $.addTopLevelView($.__views.__alloyId866);
    $.__views.__alloyId867 = Ti.UI.createView({
        id: "__alloyId867"
    });
    $.__views.__alloyId866.add($.__views.__alloyId867);
    $.__views.__alloyId868 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId868"
    });
    $.__views.__alloyId867.add($.__views.__alloyId868);
    $.__views.__alloyId869 = Ti.UI.createView({
        id: "__alloyId869"
    });
    $.__views.__alloyId869 && $.addTopLevelView($.__views.__alloyId869);
    $.__views.__alloyId870 = Ti.UI.createView({
        id: "__alloyId870"
    });
    $.__views.__alloyId869.add($.__views.__alloyId870);
    $.__views.__alloyId871 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId871"
    });
    $.__views.__alloyId870.add($.__views.__alloyId871);
    $.__views.__alloyId872 = Ti.UI.createView({
        id: "__alloyId872"
    });
    $.__views.__alloyId872 && $.addTopLevelView($.__views.__alloyId872);
    $.__views.__alloyId873 = Ti.UI.createView({
        id: "__alloyId873"
    });
    $.__views.__alloyId872.add($.__views.__alloyId873);
    $.__views.__alloyId874 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId874"
    });
    $.__views.__alloyId873.add($.__views.__alloyId874);
    $.__views.__alloyId875 = Ti.UI.createView({
        id: "__alloyId875"
    });
    $.__views.__alloyId875 && $.addTopLevelView($.__views.__alloyId875);
    $.__views.__alloyId876 = Ti.UI.createView({
        id: "__alloyId876"
    });
    $.__views.__alloyId875.add($.__views.__alloyId876);
    $.__views.__alloyId877 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId877"
    });
    $.__views.__alloyId876.add($.__views.__alloyId877);
    $.__views.__alloyId878 = Ti.UI.createView({
        id: "__alloyId878"
    });
    $.__views.__alloyId878 && $.addTopLevelView($.__views.__alloyId878);
    $.__views.__alloyId879 = Ti.UI.createView({
        id: "__alloyId879"
    });
    $.__views.__alloyId878.add($.__views.__alloyId879);
    $.__views.__alloyId880 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId880"
    });
    $.__views.__alloyId879.add($.__views.__alloyId880);
    $.__views.__alloyId881 = Ti.UI.createView({
        id: "__alloyId881"
    });
    $.__views.__alloyId881 && $.addTopLevelView($.__views.__alloyId881);
    $.__views.__alloyId882 = Ti.UI.createView({
        id: "__alloyId882"
    });
    $.__views.__alloyId881.add($.__views.__alloyId882);
    $.__views.__alloyId883 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId883"
    });
    $.__views.__alloyId882.add($.__views.__alloyId883);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;