function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_439";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_439 = Ti.UI.createView({
        id: "widget_439"
    });
    $.__views.widget_439 && $.addTopLevelView($.__views.widget_439);
    $.__views.__alloyId9854 = Ti.UI.createView({
        id: "__alloyId9854"
    });
    $.__views.widget_439.add($.__views.__alloyId9854);
    $.__views.__alloyId9855 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9855"
    });
    $.__views.__alloyId9854.add($.__views.__alloyId9855);
    $.__views.__alloyId9856 = Ti.UI.createView({
        id: "__alloyId9856"
    });
    $.__views.__alloyId9856 && $.addTopLevelView($.__views.__alloyId9856);
    $.__views.__alloyId9857 = Ti.UI.createView({
        id: "__alloyId9857"
    });
    $.__views.__alloyId9856.add($.__views.__alloyId9857);
    $.__views.__alloyId9858 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9858"
    });
    $.__views.__alloyId9857.add($.__views.__alloyId9858);
    $.__views.__alloyId9859 = Ti.UI.createView({
        id: "__alloyId9859"
    });
    $.__views.__alloyId9859 && $.addTopLevelView($.__views.__alloyId9859);
    $.__views.__alloyId9860 = Ti.UI.createView({
        id: "__alloyId9860"
    });
    $.__views.__alloyId9859.add($.__views.__alloyId9860);
    $.__views.__alloyId9861 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9861"
    });
    $.__views.__alloyId9860.add($.__views.__alloyId9861);
    $.__views.__alloyId9862 = Ti.UI.createView({
        id: "__alloyId9862"
    });
    $.__views.__alloyId9862 && $.addTopLevelView($.__views.__alloyId9862);
    $.__views.__alloyId9863 = Ti.UI.createView({
        id: "__alloyId9863"
    });
    $.__views.__alloyId9862.add($.__views.__alloyId9863);
    $.__views.__alloyId9864 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9864"
    });
    $.__views.__alloyId9863.add($.__views.__alloyId9864);
    $.__views.__alloyId9865 = Ti.UI.createView({
        id: "__alloyId9865"
    });
    $.__views.__alloyId9865 && $.addTopLevelView($.__views.__alloyId9865);
    $.__views.__alloyId9866 = Ti.UI.createView({
        id: "__alloyId9866"
    });
    $.__views.__alloyId9865.add($.__views.__alloyId9866);
    $.__views.__alloyId9867 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9867"
    });
    $.__views.__alloyId9866.add($.__views.__alloyId9867);
    $.__views.__alloyId9868 = Ti.UI.createView({
        id: "__alloyId9868"
    });
    $.__views.__alloyId9868 && $.addTopLevelView($.__views.__alloyId9868);
    $.__views.__alloyId9869 = Ti.UI.createView({
        id: "__alloyId9869"
    });
    $.__views.__alloyId9868.add($.__views.__alloyId9869);
    $.__views.__alloyId9870 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9870"
    });
    $.__views.__alloyId9869.add($.__views.__alloyId9870);
    $.__views.__alloyId9871 = Ti.UI.createView({
        id: "__alloyId9871"
    });
    $.__views.__alloyId9871 && $.addTopLevelView($.__views.__alloyId9871);
    $.__views.__alloyId9872 = Ti.UI.createView({
        id: "__alloyId9872"
    });
    $.__views.__alloyId9871.add($.__views.__alloyId9872);
    $.__views.__alloyId9873 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9873"
    });
    $.__views.__alloyId9872.add($.__views.__alloyId9873);
    $.__views.__alloyId9874 = Ti.UI.createView({
        id: "__alloyId9874"
    });
    $.__views.__alloyId9874 && $.addTopLevelView($.__views.__alloyId9874);
    $.__views.__alloyId9875 = Ti.UI.createView({
        id: "__alloyId9875"
    });
    $.__views.__alloyId9874.add($.__views.__alloyId9875);
    $.__views.__alloyId9876 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9876"
    });
    $.__views.__alloyId9875.add($.__views.__alloyId9876);
    $.__views.__alloyId9877 = Ti.UI.createView({
        id: "__alloyId9877"
    });
    $.__views.__alloyId9877 && $.addTopLevelView($.__views.__alloyId9877);
    $.__views.__alloyId9878 = Ti.UI.createView({
        id: "__alloyId9878"
    });
    $.__views.__alloyId9877.add($.__views.__alloyId9878);
    $.__views.__alloyId9879 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9879"
    });
    $.__views.__alloyId9878.add($.__views.__alloyId9879);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;