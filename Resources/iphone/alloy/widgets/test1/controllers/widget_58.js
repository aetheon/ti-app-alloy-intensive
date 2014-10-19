function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_58";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_58 = Ti.UI.createView({
        id: "widget_58"
    });
    $.__views.widget_58 && $.addTopLevelView($.__views.widget_58);
    $.__views.__alloyId13910 = Ti.UI.createView({
        id: "__alloyId13910"
    });
    $.__views.widget_58.add($.__views.__alloyId13910);
    $.__views.__alloyId13911 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13911"
    });
    $.__views.__alloyId13910.add($.__views.__alloyId13911);
    $.__views.__alloyId13912 = Ti.UI.createView({
        id: "__alloyId13912"
    });
    $.__views.__alloyId13912 && $.addTopLevelView($.__views.__alloyId13912);
    $.__views.__alloyId13913 = Ti.UI.createView({
        id: "__alloyId13913"
    });
    $.__views.__alloyId13912.add($.__views.__alloyId13913);
    $.__views.__alloyId13914 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13914"
    });
    $.__views.__alloyId13913.add($.__views.__alloyId13914);
    $.__views.__alloyId13915 = Ti.UI.createView({
        id: "__alloyId13915"
    });
    $.__views.__alloyId13915 && $.addTopLevelView($.__views.__alloyId13915);
    $.__views.__alloyId13916 = Ti.UI.createView({
        id: "__alloyId13916"
    });
    $.__views.__alloyId13915.add($.__views.__alloyId13916);
    $.__views.__alloyId13917 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13917"
    });
    $.__views.__alloyId13916.add($.__views.__alloyId13917);
    $.__views.__alloyId13918 = Ti.UI.createView({
        id: "__alloyId13918"
    });
    $.__views.__alloyId13918 && $.addTopLevelView($.__views.__alloyId13918);
    $.__views.__alloyId13919 = Ti.UI.createView({
        id: "__alloyId13919"
    });
    $.__views.__alloyId13918.add($.__views.__alloyId13919);
    $.__views.__alloyId13920 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13920"
    });
    $.__views.__alloyId13919.add($.__views.__alloyId13920);
    $.__views.__alloyId13921 = Ti.UI.createView({
        id: "__alloyId13921"
    });
    $.__views.__alloyId13921 && $.addTopLevelView($.__views.__alloyId13921);
    $.__views.__alloyId13922 = Ti.UI.createView({
        id: "__alloyId13922"
    });
    $.__views.__alloyId13921.add($.__views.__alloyId13922);
    $.__views.__alloyId13923 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13923"
    });
    $.__views.__alloyId13922.add($.__views.__alloyId13923);
    $.__views.__alloyId13924 = Ti.UI.createView({
        id: "__alloyId13924"
    });
    $.__views.__alloyId13924 && $.addTopLevelView($.__views.__alloyId13924);
    $.__views.__alloyId13925 = Ti.UI.createView({
        id: "__alloyId13925"
    });
    $.__views.__alloyId13924.add($.__views.__alloyId13925);
    $.__views.__alloyId13926 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13926"
    });
    $.__views.__alloyId13925.add($.__views.__alloyId13926);
    $.__views.__alloyId13927 = Ti.UI.createView({
        id: "__alloyId13927"
    });
    $.__views.__alloyId13927 && $.addTopLevelView($.__views.__alloyId13927);
    $.__views.__alloyId13928 = Ti.UI.createView({
        id: "__alloyId13928"
    });
    $.__views.__alloyId13927.add($.__views.__alloyId13928);
    $.__views.__alloyId13929 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13929"
    });
    $.__views.__alloyId13928.add($.__views.__alloyId13929);
    $.__views.__alloyId13930 = Ti.UI.createView({
        id: "__alloyId13930"
    });
    $.__views.__alloyId13930 && $.addTopLevelView($.__views.__alloyId13930);
    $.__views.__alloyId13931 = Ti.UI.createView({
        id: "__alloyId13931"
    });
    $.__views.__alloyId13930.add($.__views.__alloyId13931);
    $.__views.__alloyId13932 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13932"
    });
    $.__views.__alloyId13931.add($.__views.__alloyId13932);
    $.__views.__alloyId13933 = Ti.UI.createView({
        id: "__alloyId13933"
    });
    $.__views.__alloyId13933 && $.addTopLevelView($.__views.__alloyId13933);
    $.__views.__alloyId13934 = Ti.UI.createView({
        id: "__alloyId13934"
    });
    $.__views.__alloyId13933.add($.__views.__alloyId13934);
    $.__views.__alloyId13935 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13935"
    });
    $.__views.__alloyId13934.add($.__views.__alloyId13935);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;