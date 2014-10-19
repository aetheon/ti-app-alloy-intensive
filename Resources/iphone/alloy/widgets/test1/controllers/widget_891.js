function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_891";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_891 = Ti.UI.createView({
        id: "widget_891"
    });
    $.__views.widget_891 && $.addTopLevelView($.__views.widget_891);
    $.__views.__alloyId22906 = Ti.UI.createView({
        id: "__alloyId22906"
    });
    $.__views.widget_891.add($.__views.__alloyId22906);
    $.__views.__alloyId22907 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22907"
    });
    $.__views.__alloyId22906.add($.__views.__alloyId22907);
    $.__views.__alloyId22908 = Ti.UI.createView({
        id: "__alloyId22908"
    });
    $.__views.__alloyId22908 && $.addTopLevelView($.__views.__alloyId22908);
    $.__views.__alloyId22909 = Ti.UI.createView({
        id: "__alloyId22909"
    });
    $.__views.__alloyId22908.add($.__views.__alloyId22909);
    $.__views.__alloyId22910 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22910"
    });
    $.__views.__alloyId22909.add($.__views.__alloyId22910);
    $.__views.__alloyId22911 = Ti.UI.createView({
        id: "__alloyId22911"
    });
    $.__views.__alloyId22911 && $.addTopLevelView($.__views.__alloyId22911);
    $.__views.__alloyId22912 = Ti.UI.createView({
        id: "__alloyId22912"
    });
    $.__views.__alloyId22911.add($.__views.__alloyId22912);
    $.__views.__alloyId22913 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22913"
    });
    $.__views.__alloyId22912.add($.__views.__alloyId22913);
    $.__views.__alloyId22914 = Ti.UI.createView({
        id: "__alloyId22914"
    });
    $.__views.__alloyId22914 && $.addTopLevelView($.__views.__alloyId22914);
    $.__views.__alloyId22915 = Ti.UI.createView({
        id: "__alloyId22915"
    });
    $.__views.__alloyId22914.add($.__views.__alloyId22915);
    $.__views.__alloyId22916 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22916"
    });
    $.__views.__alloyId22915.add($.__views.__alloyId22916);
    $.__views.__alloyId22917 = Ti.UI.createView({
        id: "__alloyId22917"
    });
    $.__views.__alloyId22917 && $.addTopLevelView($.__views.__alloyId22917);
    $.__views.__alloyId22918 = Ti.UI.createView({
        id: "__alloyId22918"
    });
    $.__views.__alloyId22917.add($.__views.__alloyId22918);
    $.__views.__alloyId22919 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22919"
    });
    $.__views.__alloyId22918.add($.__views.__alloyId22919);
    $.__views.__alloyId22920 = Ti.UI.createView({
        id: "__alloyId22920"
    });
    $.__views.__alloyId22920 && $.addTopLevelView($.__views.__alloyId22920);
    $.__views.__alloyId22921 = Ti.UI.createView({
        id: "__alloyId22921"
    });
    $.__views.__alloyId22920.add($.__views.__alloyId22921);
    $.__views.__alloyId22922 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22922"
    });
    $.__views.__alloyId22921.add($.__views.__alloyId22922);
    $.__views.__alloyId22923 = Ti.UI.createView({
        id: "__alloyId22923"
    });
    $.__views.__alloyId22923 && $.addTopLevelView($.__views.__alloyId22923);
    $.__views.__alloyId22924 = Ti.UI.createView({
        id: "__alloyId22924"
    });
    $.__views.__alloyId22923.add($.__views.__alloyId22924);
    $.__views.__alloyId22925 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22925"
    });
    $.__views.__alloyId22924.add($.__views.__alloyId22925);
    $.__views.__alloyId22926 = Ti.UI.createView({
        id: "__alloyId22926"
    });
    $.__views.__alloyId22926 && $.addTopLevelView($.__views.__alloyId22926);
    $.__views.__alloyId22927 = Ti.UI.createView({
        id: "__alloyId22927"
    });
    $.__views.__alloyId22926.add($.__views.__alloyId22927);
    $.__views.__alloyId22928 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22928"
    });
    $.__views.__alloyId22927.add($.__views.__alloyId22928);
    $.__views.__alloyId22929 = Ti.UI.createView({
        id: "__alloyId22929"
    });
    $.__views.__alloyId22929 && $.addTopLevelView($.__views.__alloyId22929);
    $.__views.__alloyId22930 = Ti.UI.createView({
        id: "__alloyId22930"
    });
    $.__views.__alloyId22929.add($.__views.__alloyId22930);
    $.__views.__alloyId22931 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22931"
    });
    $.__views.__alloyId22930.add($.__views.__alloyId22931);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;