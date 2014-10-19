function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_821";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_821 = Ti.UI.createView({
        id: "widget_821"
    });
    $.__views.widget_821 && $.addTopLevelView($.__views.widget_821);
    $.__views.__alloyId20904 = Ti.UI.createView({
        id: "__alloyId20904"
    });
    $.__views.widget_821.add($.__views.__alloyId20904);
    $.__views.__alloyId20905 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20905"
    });
    $.__views.__alloyId20904.add($.__views.__alloyId20905);
    $.__views.__alloyId20906 = Ti.UI.createView({
        id: "__alloyId20906"
    });
    $.__views.__alloyId20906 && $.addTopLevelView($.__views.__alloyId20906);
    $.__views.__alloyId20907 = Ti.UI.createView({
        id: "__alloyId20907"
    });
    $.__views.__alloyId20906.add($.__views.__alloyId20907);
    $.__views.__alloyId20908 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20908"
    });
    $.__views.__alloyId20907.add($.__views.__alloyId20908);
    $.__views.__alloyId20909 = Ti.UI.createView({
        id: "__alloyId20909"
    });
    $.__views.__alloyId20909 && $.addTopLevelView($.__views.__alloyId20909);
    $.__views.__alloyId20910 = Ti.UI.createView({
        id: "__alloyId20910"
    });
    $.__views.__alloyId20909.add($.__views.__alloyId20910);
    $.__views.__alloyId20911 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20911"
    });
    $.__views.__alloyId20910.add($.__views.__alloyId20911);
    $.__views.__alloyId20912 = Ti.UI.createView({
        id: "__alloyId20912"
    });
    $.__views.__alloyId20912 && $.addTopLevelView($.__views.__alloyId20912);
    $.__views.__alloyId20913 = Ti.UI.createView({
        id: "__alloyId20913"
    });
    $.__views.__alloyId20912.add($.__views.__alloyId20913);
    $.__views.__alloyId20914 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20914"
    });
    $.__views.__alloyId20913.add($.__views.__alloyId20914);
    $.__views.__alloyId20915 = Ti.UI.createView({
        id: "__alloyId20915"
    });
    $.__views.__alloyId20915 && $.addTopLevelView($.__views.__alloyId20915);
    $.__views.__alloyId20916 = Ti.UI.createView({
        id: "__alloyId20916"
    });
    $.__views.__alloyId20915.add($.__views.__alloyId20916);
    $.__views.__alloyId20917 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20917"
    });
    $.__views.__alloyId20916.add($.__views.__alloyId20917);
    $.__views.__alloyId20918 = Ti.UI.createView({
        id: "__alloyId20918"
    });
    $.__views.__alloyId20918 && $.addTopLevelView($.__views.__alloyId20918);
    $.__views.__alloyId20919 = Ti.UI.createView({
        id: "__alloyId20919"
    });
    $.__views.__alloyId20918.add($.__views.__alloyId20919);
    $.__views.__alloyId20920 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20920"
    });
    $.__views.__alloyId20919.add($.__views.__alloyId20920);
    $.__views.__alloyId20921 = Ti.UI.createView({
        id: "__alloyId20921"
    });
    $.__views.__alloyId20921 && $.addTopLevelView($.__views.__alloyId20921);
    $.__views.__alloyId20922 = Ti.UI.createView({
        id: "__alloyId20922"
    });
    $.__views.__alloyId20921.add($.__views.__alloyId20922);
    $.__views.__alloyId20923 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20923"
    });
    $.__views.__alloyId20922.add($.__views.__alloyId20923);
    $.__views.__alloyId20924 = Ti.UI.createView({
        id: "__alloyId20924"
    });
    $.__views.__alloyId20924 && $.addTopLevelView($.__views.__alloyId20924);
    $.__views.__alloyId20925 = Ti.UI.createView({
        id: "__alloyId20925"
    });
    $.__views.__alloyId20924.add($.__views.__alloyId20925);
    $.__views.__alloyId20926 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20926"
    });
    $.__views.__alloyId20925.add($.__views.__alloyId20926);
    $.__views.__alloyId20927 = Ti.UI.createView({
        id: "__alloyId20927"
    });
    $.__views.__alloyId20927 && $.addTopLevelView($.__views.__alloyId20927);
    $.__views.__alloyId20928 = Ti.UI.createView({
        id: "__alloyId20928"
    });
    $.__views.__alloyId20927.add($.__views.__alloyId20928);
    $.__views.__alloyId20929 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20929"
    });
    $.__views.__alloyId20928.add($.__views.__alloyId20929);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;