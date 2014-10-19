function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_647";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_647 = Ti.UI.createView({
        id: "widget_647"
    });
    $.__views.widget_647 && $.addTopLevelView($.__views.widget_647);
    $.__views.__alloyId15860 = Ti.UI.createView({
        id: "__alloyId15860"
    });
    $.__views.widget_647.add($.__views.__alloyId15860);
    $.__views.__alloyId15861 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15861"
    });
    $.__views.__alloyId15860.add($.__views.__alloyId15861);
    $.__views.__alloyId15862 = Ti.UI.createView({
        id: "__alloyId15862"
    });
    $.__views.__alloyId15862 && $.addTopLevelView($.__views.__alloyId15862);
    $.__views.__alloyId15863 = Ti.UI.createView({
        id: "__alloyId15863"
    });
    $.__views.__alloyId15862.add($.__views.__alloyId15863);
    $.__views.__alloyId15864 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15864"
    });
    $.__views.__alloyId15863.add($.__views.__alloyId15864);
    $.__views.__alloyId15865 = Ti.UI.createView({
        id: "__alloyId15865"
    });
    $.__views.__alloyId15865 && $.addTopLevelView($.__views.__alloyId15865);
    $.__views.__alloyId15866 = Ti.UI.createView({
        id: "__alloyId15866"
    });
    $.__views.__alloyId15865.add($.__views.__alloyId15866);
    $.__views.__alloyId15867 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15867"
    });
    $.__views.__alloyId15866.add($.__views.__alloyId15867);
    $.__views.__alloyId15868 = Ti.UI.createView({
        id: "__alloyId15868"
    });
    $.__views.__alloyId15868 && $.addTopLevelView($.__views.__alloyId15868);
    $.__views.__alloyId15869 = Ti.UI.createView({
        id: "__alloyId15869"
    });
    $.__views.__alloyId15868.add($.__views.__alloyId15869);
    $.__views.__alloyId15870 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15870"
    });
    $.__views.__alloyId15869.add($.__views.__alloyId15870);
    $.__views.__alloyId15871 = Ti.UI.createView({
        id: "__alloyId15871"
    });
    $.__views.__alloyId15871 && $.addTopLevelView($.__views.__alloyId15871);
    $.__views.__alloyId15872 = Ti.UI.createView({
        id: "__alloyId15872"
    });
    $.__views.__alloyId15871.add($.__views.__alloyId15872);
    $.__views.__alloyId15873 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15873"
    });
    $.__views.__alloyId15872.add($.__views.__alloyId15873);
    $.__views.__alloyId15874 = Ti.UI.createView({
        id: "__alloyId15874"
    });
    $.__views.__alloyId15874 && $.addTopLevelView($.__views.__alloyId15874);
    $.__views.__alloyId15875 = Ti.UI.createView({
        id: "__alloyId15875"
    });
    $.__views.__alloyId15874.add($.__views.__alloyId15875);
    $.__views.__alloyId15876 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15876"
    });
    $.__views.__alloyId15875.add($.__views.__alloyId15876);
    $.__views.__alloyId15877 = Ti.UI.createView({
        id: "__alloyId15877"
    });
    $.__views.__alloyId15877 && $.addTopLevelView($.__views.__alloyId15877);
    $.__views.__alloyId15878 = Ti.UI.createView({
        id: "__alloyId15878"
    });
    $.__views.__alloyId15877.add($.__views.__alloyId15878);
    $.__views.__alloyId15879 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15879"
    });
    $.__views.__alloyId15878.add($.__views.__alloyId15879);
    $.__views.__alloyId15880 = Ti.UI.createView({
        id: "__alloyId15880"
    });
    $.__views.__alloyId15880 && $.addTopLevelView($.__views.__alloyId15880);
    $.__views.__alloyId15881 = Ti.UI.createView({
        id: "__alloyId15881"
    });
    $.__views.__alloyId15880.add($.__views.__alloyId15881);
    $.__views.__alloyId15882 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15882"
    });
    $.__views.__alloyId15881.add($.__views.__alloyId15882);
    $.__views.__alloyId15883 = Ti.UI.createView({
        id: "__alloyId15883"
    });
    $.__views.__alloyId15883 && $.addTopLevelView($.__views.__alloyId15883);
    $.__views.__alloyId15884 = Ti.UI.createView({
        id: "__alloyId15884"
    });
    $.__views.__alloyId15883.add($.__views.__alloyId15884);
    $.__views.__alloyId15885 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15885"
    });
    $.__views.__alloyId15884.add($.__views.__alloyId15885);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;