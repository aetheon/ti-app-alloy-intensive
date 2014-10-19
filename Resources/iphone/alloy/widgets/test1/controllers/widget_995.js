function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_995";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_995 = Ti.UI.createView({
        id: "widget_995"
    });
    $.__views.widget_995 && $.addTopLevelView($.__views.widget_995);
    $.__views.__alloyId25896 = Ti.UI.createView({
        id: "__alloyId25896"
    });
    $.__views.widget_995.add($.__views.__alloyId25896);
    $.__views.__alloyId25897 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25897"
    });
    $.__views.__alloyId25896.add($.__views.__alloyId25897);
    $.__views.__alloyId25898 = Ti.UI.createView({
        id: "__alloyId25898"
    });
    $.__views.__alloyId25898 && $.addTopLevelView($.__views.__alloyId25898);
    $.__views.__alloyId25899 = Ti.UI.createView({
        id: "__alloyId25899"
    });
    $.__views.__alloyId25898.add($.__views.__alloyId25899);
    $.__views.__alloyId25900 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25900"
    });
    $.__views.__alloyId25899.add($.__views.__alloyId25900);
    $.__views.__alloyId25901 = Ti.UI.createView({
        id: "__alloyId25901"
    });
    $.__views.__alloyId25901 && $.addTopLevelView($.__views.__alloyId25901);
    $.__views.__alloyId25902 = Ti.UI.createView({
        id: "__alloyId25902"
    });
    $.__views.__alloyId25901.add($.__views.__alloyId25902);
    $.__views.__alloyId25903 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25903"
    });
    $.__views.__alloyId25902.add($.__views.__alloyId25903);
    $.__views.__alloyId25904 = Ti.UI.createView({
        id: "__alloyId25904"
    });
    $.__views.__alloyId25904 && $.addTopLevelView($.__views.__alloyId25904);
    $.__views.__alloyId25905 = Ti.UI.createView({
        id: "__alloyId25905"
    });
    $.__views.__alloyId25904.add($.__views.__alloyId25905);
    $.__views.__alloyId25906 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25906"
    });
    $.__views.__alloyId25905.add($.__views.__alloyId25906);
    $.__views.__alloyId25907 = Ti.UI.createView({
        id: "__alloyId25907"
    });
    $.__views.__alloyId25907 && $.addTopLevelView($.__views.__alloyId25907);
    $.__views.__alloyId25908 = Ti.UI.createView({
        id: "__alloyId25908"
    });
    $.__views.__alloyId25907.add($.__views.__alloyId25908);
    $.__views.__alloyId25909 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25909"
    });
    $.__views.__alloyId25908.add($.__views.__alloyId25909);
    $.__views.__alloyId25910 = Ti.UI.createView({
        id: "__alloyId25910"
    });
    $.__views.__alloyId25910 && $.addTopLevelView($.__views.__alloyId25910);
    $.__views.__alloyId25911 = Ti.UI.createView({
        id: "__alloyId25911"
    });
    $.__views.__alloyId25910.add($.__views.__alloyId25911);
    $.__views.__alloyId25912 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25912"
    });
    $.__views.__alloyId25911.add($.__views.__alloyId25912);
    $.__views.__alloyId25913 = Ti.UI.createView({
        id: "__alloyId25913"
    });
    $.__views.__alloyId25913 && $.addTopLevelView($.__views.__alloyId25913);
    $.__views.__alloyId25914 = Ti.UI.createView({
        id: "__alloyId25914"
    });
    $.__views.__alloyId25913.add($.__views.__alloyId25914);
    $.__views.__alloyId25915 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25915"
    });
    $.__views.__alloyId25914.add($.__views.__alloyId25915);
    $.__views.__alloyId25916 = Ti.UI.createView({
        id: "__alloyId25916"
    });
    $.__views.__alloyId25916 && $.addTopLevelView($.__views.__alloyId25916);
    $.__views.__alloyId25917 = Ti.UI.createView({
        id: "__alloyId25917"
    });
    $.__views.__alloyId25916.add($.__views.__alloyId25917);
    $.__views.__alloyId25918 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25918"
    });
    $.__views.__alloyId25917.add($.__views.__alloyId25918);
    $.__views.__alloyId25919 = Ti.UI.createView({
        id: "__alloyId25919"
    });
    $.__views.__alloyId25919 && $.addTopLevelView($.__views.__alloyId25919);
    $.__views.__alloyId25920 = Ti.UI.createView({
        id: "__alloyId25920"
    });
    $.__views.__alloyId25919.add($.__views.__alloyId25920);
    $.__views.__alloyId25921 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25921"
    });
    $.__views.__alloyId25920.add($.__views.__alloyId25921);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;