function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_232";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_232 = Ti.UI.createView({
        id: "widget_232"
    });
    $.__views.widget_232 && $.addTopLevelView($.__views.widget_232);
    $.__views.__alloyId3900 = Ti.UI.createView({
        id: "__alloyId3900"
    });
    $.__views.widget_232.add($.__views.__alloyId3900);
    $.__views.__alloyId3901 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3901"
    });
    $.__views.__alloyId3900.add($.__views.__alloyId3901);
    $.__views.__alloyId3902 = Ti.UI.createView({
        id: "__alloyId3902"
    });
    $.__views.__alloyId3902 && $.addTopLevelView($.__views.__alloyId3902);
    $.__views.__alloyId3903 = Ti.UI.createView({
        id: "__alloyId3903"
    });
    $.__views.__alloyId3902.add($.__views.__alloyId3903);
    $.__views.__alloyId3904 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3904"
    });
    $.__views.__alloyId3903.add($.__views.__alloyId3904);
    $.__views.__alloyId3905 = Ti.UI.createView({
        id: "__alloyId3905"
    });
    $.__views.__alloyId3905 && $.addTopLevelView($.__views.__alloyId3905);
    $.__views.__alloyId3906 = Ti.UI.createView({
        id: "__alloyId3906"
    });
    $.__views.__alloyId3905.add($.__views.__alloyId3906);
    $.__views.__alloyId3907 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3907"
    });
    $.__views.__alloyId3906.add($.__views.__alloyId3907);
    $.__views.__alloyId3908 = Ti.UI.createView({
        id: "__alloyId3908"
    });
    $.__views.__alloyId3908 && $.addTopLevelView($.__views.__alloyId3908);
    $.__views.__alloyId3909 = Ti.UI.createView({
        id: "__alloyId3909"
    });
    $.__views.__alloyId3908.add($.__views.__alloyId3909);
    $.__views.__alloyId3910 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3910"
    });
    $.__views.__alloyId3909.add($.__views.__alloyId3910);
    $.__views.__alloyId3911 = Ti.UI.createView({
        id: "__alloyId3911"
    });
    $.__views.__alloyId3911 && $.addTopLevelView($.__views.__alloyId3911);
    $.__views.__alloyId3912 = Ti.UI.createView({
        id: "__alloyId3912"
    });
    $.__views.__alloyId3911.add($.__views.__alloyId3912);
    $.__views.__alloyId3913 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3913"
    });
    $.__views.__alloyId3912.add($.__views.__alloyId3913);
    $.__views.__alloyId3914 = Ti.UI.createView({
        id: "__alloyId3914"
    });
    $.__views.__alloyId3914 && $.addTopLevelView($.__views.__alloyId3914);
    $.__views.__alloyId3915 = Ti.UI.createView({
        id: "__alloyId3915"
    });
    $.__views.__alloyId3914.add($.__views.__alloyId3915);
    $.__views.__alloyId3916 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3916"
    });
    $.__views.__alloyId3915.add($.__views.__alloyId3916);
    $.__views.__alloyId3917 = Ti.UI.createView({
        id: "__alloyId3917"
    });
    $.__views.__alloyId3917 && $.addTopLevelView($.__views.__alloyId3917);
    $.__views.__alloyId3918 = Ti.UI.createView({
        id: "__alloyId3918"
    });
    $.__views.__alloyId3917.add($.__views.__alloyId3918);
    $.__views.__alloyId3919 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3919"
    });
    $.__views.__alloyId3918.add($.__views.__alloyId3919);
    $.__views.__alloyId3920 = Ti.UI.createView({
        id: "__alloyId3920"
    });
    $.__views.__alloyId3920 && $.addTopLevelView($.__views.__alloyId3920);
    $.__views.__alloyId3921 = Ti.UI.createView({
        id: "__alloyId3921"
    });
    $.__views.__alloyId3920.add($.__views.__alloyId3921);
    $.__views.__alloyId3922 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3922"
    });
    $.__views.__alloyId3921.add($.__views.__alloyId3922);
    $.__views.__alloyId3923 = Ti.UI.createView({
        id: "__alloyId3923"
    });
    $.__views.__alloyId3923 && $.addTopLevelView($.__views.__alloyId3923);
    $.__views.__alloyId3924 = Ti.UI.createView({
        id: "__alloyId3924"
    });
    $.__views.__alloyId3923.add($.__views.__alloyId3924);
    $.__views.__alloyId3925 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3925"
    });
    $.__views.__alloyId3924.add($.__views.__alloyId3925);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;