function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_301";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_301 = Ti.UI.createView({
        id: "widget_301"
    });
    $.__views.widget_301 && $.addTopLevelView($.__views.widget_301);
    $.__views.__alloyId5902 = Ti.UI.createView({
        id: "__alloyId5902"
    });
    $.__views.widget_301.add($.__views.__alloyId5902);
    $.__views.__alloyId5903 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5903"
    });
    $.__views.__alloyId5902.add($.__views.__alloyId5903);
    $.__views.__alloyId5904 = Ti.UI.createView({
        id: "__alloyId5904"
    });
    $.__views.__alloyId5904 && $.addTopLevelView($.__views.__alloyId5904);
    $.__views.__alloyId5905 = Ti.UI.createView({
        id: "__alloyId5905"
    });
    $.__views.__alloyId5904.add($.__views.__alloyId5905);
    $.__views.__alloyId5906 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5906"
    });
    $.__views.__alloyId5905.add($.__views.__alloyId5906);
    $.__views.__alloyId5907 = Ti.UI.createView({
        id: "__alloyId5907"
    });
    $.__views.__alloyId5907 && $.addTopLevelView($.__views.__alloyId5907);
    $.__views.__alloyId5908 = Ti.UI.createView({
        id: "__alloyId5908"
    });
    $.__views.__alloyId5907.add($.__views.__alloyId5908);
    $.__views.__alloyId5909 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5909"
    });
    $.__views.__alloyId5908.add($.__views.__alloyId5909);
    $.__views.__alloyId5910 = Ti.UI.createView({
        id: "__alloyId5910"
    });
    $.__views.__alloyId5910 && $.addTopLevelView($.__views.__alloyId5910);
    $.__views.__alloyId5911 = Ti.UI.createView({
        id: "__alloyId5911"
    });
    $.__views.__alloyId5910.add($.__views.__alloyId5911);
    $.__views.__alloyId5912 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5912"
    });
    $.__views.__alloyId5911.add($.__views.__alloyId5912);
    $.__views.__alloyId5913 = Ti.UI.createView({
        id: "__alloyId5913"
    });
    $.__views.__alloyId5913 && $.addTopLevelView($.__views.__alloyId5913);
    $.__views.__alloyId5914 = Ti.UI.createView({
        id: "__alloyId5914"
    });
    $.__views.__alloyId5913.add($.__views.__alloyId5914);
    $.__views.__alloyId5915 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5915"
    });
    $.__views.__alloyId5914.add($.__views.__alloyId5915);
    $.__views.__alloyId5916 = Ti.UI.createView({
        id: "__alloyId5916"
    });
    $.__views.__alloyId5916 && $.addTopLevelView($.__views.__alloyId5916);
    $.__views.__alloyId5917 = Ti.UI.createView({
        id: "__alloyId5917"
    });
    $.__views.__alloyId5916.add($.__views.__alloyId5917);
    $.__views.__alloyId5918 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5918"
    });
    $.__views.__alloyId5917.add($.__views.__alloyId5918);
    $.__views.__alloyId5919 = Ti.UI.createView({
        id: "__alloyId5919"
    });
    $.__views.__alloyId5919 && $.addTopLevelView($.__views.__alloyId5919);
    $.__views.__alloyId5920 = Ti.UI.createView({
        id: "__alloyId5920"
    });
    $.__views.__alloyId5919.add($.__views.__alloyId5920);
    $.__views.__alloyId5921 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5921"
    });
    $.__views.__alloyId5920.add($.__views.__alloyId5921);
    $.__views.__alloyId5922 = Ti.UI.createView({
        id: "__alloyId5922"
    });
    $.__views.__alloyId5922 && $.addTopLevelView($.__views.__alloyId5922);
    $.__views.__alloyId5923 = Ti.UI.createView({
        id: "__alloyId5923"
    });
    $.__views.__alloyId5922.add($.__views.__alloyId5923);
    $.__views.__alloyId5924 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5924"
    });
    $.__views.__alloyId5923.add($.__views.__alloyId5924);
    $.__views.__alloyId5925 = Ti.UI.createView({
        id: "__alloyId5925"
    });
    $.__views.__alloyId5925 && $.addTopLevelView($.__views.__alloyId5925);
    $.__views.__alloyId5926 = Ti.UI.createView({
        id: "__alloyId5926"
    });
    $.__views.__alloyId5925.add($.__views.__alloyId5926);
    $.__views.__alloyId5927 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5927"
    });
    $.__views.__alloyId5926.add($.__views.__alloyId5927);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;