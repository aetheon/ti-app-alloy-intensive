function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_544";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_544 = Ti.UI.createView({
        id: "widget_544"
    });
    $.__views.widget_544 && $.addTopLevelView($.__views.widget_544);
    $.__views.__alloyId12896 = Ti.UI.createView({
        id: "__alloyId12896"
    });
    $.__views.widget_544.add($.__views.__alloyId12896);
    $.__views.__alloyId12897 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12897"
    });
    $.__views.__alloyId12896.add($.__views.__alloyId12897);
    $.__views.__alloyId12898 = Ti.UI.createView({
        id: "__alloyId12898"
    });
    $.__views.__alloyId12898 && $.addTopLevelView($.__views.__alloyId12898);
    $.__views.__alloyId12899 = Ti.UI.createView({
        id: "__alloyId12899"
    });
    $.__views.__alloyId12898.add($.__views.__alloyId12899);
    $.__views.__alloyId12900 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12900"
    });
    $.__views.__alloyId12899.add($.__views.__alloyId12900);
    $.__views.__alloyId12901 = Ti.UI.createView({
        id: "__alloyId12901"
    });
    $.__views.__alloyId12901 && $.addTopLevelView($.__views.__alloyId12901);
    $.__views.__alloyId12902 = Ti.UI.createView({
        id: "__alloyId12902"
    });
    $.__views.__alloyId12901.add($.__views.__alloyId12902);
    $.__views.__alloyId12903 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12903"
    });
    $.__views.__alloyId12902.add($.__views.__alloyId12903);
    $.__views.__alloyId12904 = Ti.UI.createView({
        id: "__alloyId12904"
    });
    $.__views.__alloyId12904 && $.addTopLevelView($.__views.__alloyId12904);
    $.__views.__alloyId12905 = Ti.UI.createView({
        id: "__alloyId12905"
    });
    $.__views.__alloyId12904.add($.__views.__alloyId12905);
    $.__views.__alloyId12906 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12906"
    });
    $.__views.__alloyId12905.add($.__views.__alloyId12906);
    $.__views.__alloyId12907 = Ti.UI.createView({
        id: "__alloyId12907"
    });
    $.__views.__alloyId12907 && $.addTopLevelView($.__views.__alloyId12907);
    $.__views.__alloyId12908 = Ti.UI.createView({
        id: "__alloyId12908"
    });
    $.__views.__alloyId12907.add($.__views.__alloyId12908);
    $.__views.__alloyId12909 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12909"
    });
    $.__views.__alloyId12908.add($.__views.__alloyId12909);
    $.__views.__alloyId12910 = Ti.UI.createView({
        id: "__alloyId12910"
    });
    $.__views.__alloyId12910 && $.addTopLevelView($.__views.__alloyId12910);
    $.__views.__alloyId12911 = Ti.UI.createView({
        id: "__alloyId12911"
    });
    $.__views.__alloyId12910.add($.__views.__alloyId12911);
    $.__views.__alloyId12912 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12912"
    });
    $.__views.__alloyId12911.add($.__views.__alloyId12912);
    $.__views.__alloyId12913 = Ti.UI.createView({
        id: "__alloyId12913"
    });
    $.__views.__alloyId12913 && $.addTopLevelView($.__views.__alloyId12913);
    $.__views.__alloyId12914 = Ti.UI.createView({
        id: "__alloyId12914"
    });
    $.__views.__alloyId12913.add($.__views.__alloyId12914);
    $.__views.__alloyId12915 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12915"
    });
    $.__views.__alloyId12914.add($.__views.__alloyId12915);
    $.__views.__alloyId12916 = Ti.UI.createView({
        id: "__alloyId12916"
    });
    $.__views.__alloyId12916 && $.addTopLevelView($.__views.__alloyId12916);
    $.__views.__alloyId12917 = Ti.UI.createView({
        id: "__alloyId12917"
    });
    $.__views.__alloyId12916.add($.__views.__alloyId12917);
    $.__views.__alloyId12918 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12918"
    });
    $.__views.__alloyId12917.add($.__views.__alloyId12918);
    $.__views.__alloyId12919 = Ti.UI.createView({
        id: "__alloyId12919"
    });
    $.__views.__alloyId12919 && $.addTopLevelView($.__views.__alloyId12919);
    $.__views.__alloyId12920 = Ti.UI.createView({
        id: "__alloyId12920"
    });
    $.__views.__alloyId12919.add($.__views.__alloyId12920);
    $.__views.__alloyId12921 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12921"
    });
    $.__views.__alloyId12920.add($.__views.__alloyId12921);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;