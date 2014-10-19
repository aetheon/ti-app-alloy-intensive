function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_578";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_578 = Ti.UI.createView({
        id: "widget_578"
    });
    $.__views.widget_578 && $.addTopLevelView($.__views.widget_578);
    $.__views.__alloyId13858 = Ti.UI.createView({
        id: "__alloyId13858"
    });
    $.__views.widget_578.add($.__views.__alloyId13858);
    $.__views.__alloyId13859 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13859"
    });
    $.__views.__alloyId13858.add($.__views.__alloyId13859);
    $.__views.__alloyId13860 = Ti.UI.createView({
        id: "__alloyId13860"
    });
    $.__views.__alloyId13860 && $.addTopLevelView($.__views.__alloyId13860);
    $.__views.__alloyId13861 = Ti.UI.createView({
        id: "__alloyId13861"
    });
    $.__views.__alloyId13860.add($.__views.__alloyId13861);
    $.__views.__alloyId13862 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13862"
    });
    $.__views.__alloyId13861.add($.__views.__alloyId13862);
    $.__views.__alloyId13863 = Ti.UI.createView({
        id: "__alloyId13863"
    });
    $.__views.__alloyId13863 && $.addTopLevelView($.__views.__alloyId13863);
    $.__views.__alloyId13864 = Ti.UI.createView({
        id: "__alloyId13864"
    });
    $.__views.__alloyId13863.add($.__views.__alloyId13864);
    $.__views.__alloyId13865 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13865"
    });
    $.__views.__alloyId13864.add($.__views.__alloyId13865);
    $.__views.__alloyId13866 = Ti.UI.createView({
        id: "__alloyId13866"
    });
    $.__views.__alloyId13866 && $.addTopLevelView($.__views.__alloyId13866);
    $.__views.__alloyId13867 = Ti.UI.createView({
        id: "__alloyId13867"
    });
    $.__views.__alloyId13866.add($.__views.__alloyId13867);
    $.__views.__alloyId13868 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13868"
    });
    $.__views.__alloyId13867.add($.__views.__alloyId13868);
    $.__views.__alloyId13869 = Ti.UI.createView({
        id: "__alloyId13869"
    });
    $.__views.__alloyId13869 && $.addTopLevelView($.__views.__alloyId13869);
    $.__views.__alloyId13870 = Ti.UI.createView({
        id: "__alloyId13870"
    });
    $.__views.__alloyId13869.add($.__views.__alloyId13870);
    $.__views.__alloyId13871 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13871"
    });
    $.__views.__alloyId13870.add($.__views.__alloyId13871);
    $.__views.__alloyId13872 = Ti.UI.createView({
        id: "__alloyId13872"
    });
    $.__views.__alloyId13872 && $.addTopLevelView($.__views.__alloyId13872);
    $.__views.__alloyId13873 = Ti.UI.createView({
        id: "__alloyId13873"
    });
    $.__views.__alloyId13872.add($.__views.__alloyId13873);
    $.__views.__alloyId13874 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13874"
    });
    $.__views.__alloyId13873.add($.__views.__alloyId13874);
    $.__views.__alloyId13875 = Ti.UI.createView({
        id: "__alloyId13875"
    });
    $.__views.__alloyId13875 && $.addTopLevelView($.__views.__alloyId13875);
    $.__views.__alloyId13876 = Ti.UI.createView({
        id: "__alloyId13876"
    });
    $.__views.__alloyId13875.add($.__views.__alloyId13876);
    $.__views.__alloyId13877 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13877"
    });
    $.__views.__alloyId13876.add($.__views.__alloyId13877);
    $.__views.__alloyId13878 = Ti.UI.createView({
        id: "__alloyId13878"
    });
    $.__views.__alloyId13878 && $.addTopLevelView($.__views.__alloyId13878);
    $.__views.__alloyId13879 = Ti.UI.createView({
        id: "__alloyId13879"
    });
    $.__views.__alloyId13878.add($.__views.__alloyId13879);
    $.__views.__alloyId13880 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13880"
    });
    $.__views.__alloyId13879.add($.__views.__alloyId13880);
    $.__views.__alloyId13881 = Ti.UI.createView({
        id: "__alloyId13881"
    });
    $.__views.__alloyId13881 && $.addTopLevelView($.__views.__alloyId13881);
    $.__views.__alloyId13882 = Ti.UI.createView({
        id: "__alloyId13882"
    });
    $.__views.__alloyId13881.add($.__views.__alloyId13882);
    $.__views.__alloyId13883 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13883"
    });
    $.__views.__alloyId13882.add($.__views.__alloyId13883);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;