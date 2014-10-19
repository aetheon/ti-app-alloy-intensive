function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_752";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_752 = Ti.UI.createView({
        id: "widget_752"
    });
    $.__views.widget_752 && $.addTopLevelView($.__views.widget_752);
    $.__views.__alloyId18902 = Ti.UI.createView({
        id: "__alloyId18902"
    });
    $.__views.widget_752.add($.__views.__alloyId18902);
    $.__views.__alloyId18903 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18903"
    });
    $.__views.__alloyId18902.add($.__views.__alloyId18903);
    $.__views.__alloyId18904 = Ti.UI.createView({
        id: "__alloyId18904"
    });
    $.__views.__alloyId18904 && $.addTopLevelView($.__views.__alloyId18904);
    $.__views.__alloyId18905 = Ti.UI.createView({
        id: "__alloyId18905"
    });
    $.__views.__alloyId18904.add($.__views.__alloyId18905);
    $.__views.__alloyId18906 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18906"
    });
    $.__views.__alloyId18905.add($.__views.__alloyId18906);
    $.__views.__alloyId18907 = Ti.UI.createView({
        id: "__alloyId18907"
    });
    $.__views.__alloyId18907 && $.addTopLevelView($.__views.__alloyId18907);
    $.__views.__alloyId18908 = Ti.UI.createView({
        id: "__alloyId18908"
    });
    $.__views.__alloyId18907.add($.__views.__alloyId18908);
    $.__views.__alloyId18909 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18909"
    });
    $.__views.__alloyId18908.add($.__views.__alloyId18909);
    $.__views.__alloyId18910 = Ti.UI.createView({
        id: "__alloyId18910"
    });
    $.__views.__alloyId18910 && $.addTopLevelView($.__views.__alloyId18910);
    $.__views.__alloyId18911 = Ti.UI.createView({
        id: "__alloyId18911"
    });
    $.__views.__alloyId18910.add($.__views.__alloyId18911);
    $.__views.__alloyId18912 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18912"
    });
    $.__views.__alloyId18911.add($.__views.__alloyId18912);
    $.__views.__alloyId18913 = Ti.UI.createView({
        id: "__alloyId18913"
    });
    $.__views.__alloyId18913 && $.addTopLevelView($.__views.__alloyId18913);
    $.__views.__alloyId18914 = Ti.UI.createView({
        id: "__alloyId18914"
    });
    $.__views.__alloyId18913.add($.__views.__alloyId18914);
    $.__views.__alloyId18915 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18915"
    });
    $.__views.__alloyId18914.add($.__views.__alloyId18915);
    $.__views.__alloyId18916 = Ti.UI.createView({
        id: "__alloyId18916"
    });
    $.__views.__alloyId18916 && $.addTopLevelView($.__views.__alloyId18916);
    $.__views.__alloyId18917 = Ti.UI.createView({
        id: "__alloyId18917"
    });
    $.__views.__alloyId18916.add($.__views.__alloyId18917);
    $.__views.__alloyId18918 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18918"
    });
    $.__views.__alloyId18917.add($.__views.__alloyId18918);
    $.__views.__alloyId18919 = Ti.UI.createView({
        id: "__alloyId18919"
    });
    $.__views.__alloyId18919 && $.addTopLevelView($.__views.__alloyId18919);
    $.__views.__alloyId18920 = Ti.UI.createView({
        id: "__alloyId18920"
    });
    $.__views.__alloyId18919.add($.__views.__alloyId18920);
    $.__views.__alloyId18921 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18921"
    });
    $.__views.__alloyId18920.add($.__views.__alloyId18921);
    $.__views.__alloyId18922 = Ti.UI.createView({
        id: "__alloyId18922"
    });
    $.__views.__alloyId18922 && $.addTopLevelView($.__views.__alloyId18922);
    $.__views.__alloyId18923 = Ti.UI.createView({
        id: "__alloyId18923"
    });
    $.__views.__alloyId18922.add($.__views.__alloyId18923);
    $.__views.__alloyId18924 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18924"
    });
    $.__views.__alloyId18923.add($.__views.__alloyId18924);
    $.__views.__alloyId18925 = Ti.UI.createView({
        id: "__alloyId18925"
    });
    $.__views.__alloyId18925 && $.addTopLevelView($.__views.__alloyId18925);
    $.__views.__alloyId18926 = Ti.UI.createView({
        id: "__alloyId18926"
    });
    $.__views.__alloyId18925.add($.__views.__alloyId18926);
    $.__views.__alloyId18927 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18927"
    });
    $.__views.__alloyId18926.add($.__views.__alloyId18927);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;