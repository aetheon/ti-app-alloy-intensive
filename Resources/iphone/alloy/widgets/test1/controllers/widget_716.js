function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_716";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_716 = Ti.UI.createView({
        id: "widget_716"
    });
    $.__views.widget_716 && $.addTopLevelView($.__views.widget_716);
    $.__views.__alloyId17862 = Ti.UI.createView({
        id: "__alloyId17862"
    });
    $.__views.widget_716.add($.__views.__alloyId17862);
    $.__views.__alloyId17863 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17863"
    });
    $.__views.__alloyId17862.add($.__views.__alloyId17863);
    $.__views.__alloyId17864 = Ti.UI.createView({
        id: "__alloyId17864"
    });
    $.__views.__alloyId17864 && $.addTopLevelView($.__views.__alloyId17864);
    $.__views.__alloyId17865 = Ti.UI.createView({
        id: "__alloyId17865"
    });
    $.__views.__alloyId17864.add($.__views.__alloyId17865);
    $.__views.__alloyId17866 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17866"
    });
    $.__views.__alloyId17865.add($.__views.__alloyId17866);
    $.__views.__alloyId17867 = Ti.UI.createView({
        id: "__alloyId17867"
    });
    $.__views.__alloyId17867 && $.addTopLevelView($.__views.__alloyId17867);
    $.__views.__alloyId17868 = Ti.UI.createView({
        id: "__alloyId17868"
    });
    $.__views.__alloyId17867.add($.__views.__alloyId17868);
    $.__views.__alloyId17869 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17869"
    });
    $.__views.__alloyId17868.add($.__views.__alloyId17869);
    $.__views.__alloyId17870 = Ti.UI.createView({
        id: "__alloyId17870"
    });
    $.__views.__alloyId17870 && $.addTopLevelView($.__views.__alloyId17870);
    $.__views.__alloyId17871 = Ti.UI.createView({
        id: "__alloyId17871"
    });
    $.__views.__alloyId17870.add($.__views.__alloyId17871);
    $.__views.__alloyId17872 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17872"
    });
    $.__views.__alloyId17871.add($.__views.__alloyId17872);
    $.__views.__alloyId17873 = Ti.UI.createView({
        id: "__alloyId17873"
    });
    $.__views.__alloyId17873 && $.addTopLevelView($.__views.__alloyId17873);
    $.__views.__alloyId17874 = Ti.UI.createView({
        id: "__alloyId17874"
    });
    $.__views.__alloyId17873.add($.__views.__alloyId17874);
    $.__views.__alloyId17875 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17875"
    });
    $.__views.__alloyId17874.add($.__views.__alloyId17875);
    $.__views.__alloyId17876 = Ti.UI.createView({
        id: "__alloyId17876"
    });
    $.__views.__alloyId17876 && $.addTopLevelView($.__views.__alloyId17876);
    $.__views.__alloyId17877 = Ti.UI.createView({
        id: "__alloyId17877"
    });
    $.__views.__alloyId17876.add($.__views.__alloyId17877);
    $.__views.__alloyId17878 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17878"
    });
    $.__views.__alloyId17877.add($.__views.__alloyId17878);
    $.__views.__alloyId17879 = Ti.UI.createView({
        id: "__alloyId17879"
    });
    $.__views.__alloyId17879 && $.addTopLevelView($.__views.__alloyId17879);
    $.__views.__alloyId17880 = Ti.UI.createView({
        id: "__alloyId17880"
    });
    $.__views.__alloyId17879.add($.__views.__alloyId17880);
    $.__views.__alloyId17881 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17881"
    });
    $.__views.__alloyId17880.add($.__views.__alloyId17881);
    $.__views.__alloyId17882 = Ti.UI.createView({
        id: "__alloyId17882"
    });
    $.__views.__alloyId17882 && $.addTopLevelView($.__views.__alloyId17882);
    $.__views.__alloyId17883 = Ti.UI.createView({
        id: "__alloyId17883"
    });
    $.__views.__alloyId17882.add($.__views.__alloyId17883);
    $.__views.__alloyId17884 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17884"
    });
    $.__views.__alloyId17883.add($.__views.__alloyId17884);
    $.__views.__alloyId17885 = Ti.UI.createView({
        id: "__alloyId17885"
    });
    $.__views.__alloyId17885 && $.addTopLevelView($.__views.__alloyId17885);
    $.__views.__alloyId17886 = Ti.UI.createView({
        id: "__alloyId17886"
    });
    $.__views.__alloyId17885.add($.__views.__alloyId17886);
    $.__views.__alloyId17887 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17887"
    });
    $.__views.__alloyId17886.add($.__views.__alloyId17887);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;