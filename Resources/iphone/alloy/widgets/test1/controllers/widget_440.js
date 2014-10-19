function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_440";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_440 = Ti.UI.createView({
        id: "widget_440"
    });
    $.__views.widget_440 && $.addTopLevelView($.__views.widget_440);
    $.__views.__alloyId9906 = Ti.UI.createView({
        id: "__alloyId9906"
    });
    $.__views.widget_440.add($.__views.__alloyId9906);
    $.__views.__alloyId9907 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9907"
    });
    $.__views.__alloyId9906.add($.__views.__alloyId9907);
    $.__views.__alloyId9908 = Ti.UI.createView({
        id: "__alloyId9908"
    });
    $.__views.__alloyId9908 && $.addTopLevelView($.__views.__alloyId9908);
    $.__views.__alloyId9909 = Ti.UI.createView({
        id: "__alloyId9909"
    });
    $.__views.__alloyId9908.add($.__views.__alloyId9909);
    $.__views.__alloyId9910 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9910"
    });
    $.__views.__alloyId9909.add($.__views.__alloyId9910);
    $.__views.__alloyId9911 = Ti.UI.createView({
        id: "__alloyId9911"
    });
    $.__views.__alloyId9911 && $.addTopLevelView($.__views.__alloyId9911);
    $.__views.__alloyId9912 = Ti.UI.createView({
        id: "__alloyId9912"
    });
    $.__views.__alloyId9911.add($.__views.__alloyId9912);
    $.__views.__alloyId9913 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9913"
    });
    $.__views.__alloyId9912.add($.__views.__alloyId9913);
    $.__views.__alloyId9914 = Ti.UI.createView({
        id: "__alloyId9914"
    });
    $.__views.__alloyId9914 && $.addTopLevelView($.__views.__alloyId9914);
    $.__views.__alloyId9915 = Ti.UI.createView({
        id: "__alloyId9915"
    });
    $.__views.__alloyId9914.add($.__views.__alloyId9915);
    $.__views.__alloyId9916 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9916"
    });
    $.__views.__alloyId9915.add($.__views.__alloyId9916);
    $.__views.__alloyId9917 = Ti.UI.createView({
        id: "__alloyId9917"
    });
    $.__views.__alloyId9917 && $.addTopLevelView($.__views.__alloyId9917);
    $.__views.__alloyId9918 = Ti.UI.createView({
        id: "__alloyId9918"
    });
    $.__views.__alloyId9917.add($.__views.__alloyId9918);
    $.__views.__alloyId9919 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9919"
    });
    $.__views.__alloyId9918.add($.__views.__alloyId9919);
    $.__views.__alloyId9920 = Ti.UI.createView({
        id: "__alloyId9920"
    });
    $.__views.__alloyId9920 && $.addTopLevelView($.__views.__alloyId9920);
    $.__views.__alloyId9921 = Ti.UI.createView({
        id: "__alloyId9921"
    });
    $.__views.__alloyId9920.add($.__views.__alloyId9921);
    $.__views.__alloyId9922 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9922"
    });
    $.__views.__alloyId9921.add($.__views.__alloyId9922);
    $.__views.__alloyId9923 = Ti.UI.createView({
        id: "__alloyId9923"
    });
    $.__views.__alloyId9923 && $.addTopLevelView($.__views.__alloyId9923);
    $.__views.__alloyId9924 = Ti.UI.createView({
        id: "__alloyId9924"
    });
    $.__views.__alloyId9923.add($.__views.__alloyId9924);
    $.__views.__alloyId9925 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9925"
    });
    $.__views.__alloyId9924.add($.__views.__alloyId9925);
    $.__views.__alloyId9926 = Ti.UI.createView({
        id: "__alloyId9926"
    });
    $.__views.__alloyId9926 && $.addTopLevelView($.__views.__alloyId9926);
    $.__views.__alloyId9927 = Ti.UI.createView({
        id: "__alloyId9927"
    });
    $.__views.__alloyId9926.add($.__views.__alloyId9927);
    $.__views.__alloyId9928 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9928"
    });
    $.__views.__alloyId9927.add($.__views.__alloyId9928);
    $.__views.__alloyId9929 = Ti.UI.createView({
        id: "__alloyId9929"
    });
    $.__views.__alloyId9929 && $.addTopLevelView($.__views.__alloyId9929);
    $.__views.__alloyId9930 = Ti.UI.createView({
        id: "__alloyId9930"
    });
    $.__views.__alloyId9929.add($.__views.__alloyId9930);
    $.__views.__alloyId9931 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9931"
    });
    $.__views.__alloyId9930.add($.__views.__alloyId9931);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;