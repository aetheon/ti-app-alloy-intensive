function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_718";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_718 = Ti.UI.createView({
        id: "widget_718"
    });
    $.__views.widget_718 && $.addTopLevelView($.__views.widget_718);
    $.__views.__alloyId17914 = Ti.UI.createView({
        id: "__alloyId17914"
    });
    $.__views.widget_718.add($.__views.__alloyId17914);
    $.__views.__alloyId17915 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17915"
    });
    $.__views.__alloyId17914.add($.__views.__alloyId17915);
    $.__views.__alloyId17916 = Ti.UI.createView({
        id: "__alloyId17916"
    });
    $.__views.__alloyId17916 && $.addTopLevelView($.__views.__alloyId17916);
    $.__views.__alloyId17917 = Ti.UI.createView({
        id: "__alloyId17917"
    });
    $.__views.__alloyId17916.add($.__views.__alloyId17917);
    $.__views.__alloyId17918 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17918"
    });
    $.__views.__alloyId17917.add($.__views.__alloyId17918);
    $.__views.__alloyId17919 = Ti.UI.createView({
        id: "__alloyId17919"
    });
    $.__views.__alloyId17919 && $.addTopLevelView($.__views.__alloyId17919);
    $.__views.__alloyId17920 = Ti.UI.createView({
        id: "__alloyId17920"
    });
    $.__views.__alloyId17919.add($.__views.__alloyId17920);
    $.__views.__alloyId17921 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17921"
    });
    $.__views.__alloyId17920.add($.__views.__alloyId17921);
    $.__views.__alloyId17922 = Ti.UI.createView({
        id: "__alloyId17922"
    });
    $.__views.__alloyId17922 && $.addTopLevelView($.__views.__alloyId17922);
    $.__views.__alloyId17923 = Ti.UI.createView({
        id: "__alloyId17923"
    });
    $.__views.__alloyId17922.add($.__views.__alloyId17923);
    $.__views.__alloyId17924 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17924"
    });
    $.__views.__alloyId17923.add($.__views.__alloyId17924);
    $.__views.__alloyId17925 = Ti.UI.createView({
        id: "__alloyId17925"
    });
    $.__views.__alloyId17925 && $.addTopLevelView($.__views.__alloyId17925);
    $.__views.__alloyId17926 = Ti.UI.createView({
        id: "__alloyId17926"
    });
    $.__views.__alloyId17925.add($.__views.__alloyId17926);
    $.__views.__alloyId17927 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17927"
    });
    $.__views.__alloyId17926.add($.__views.__alloyId17927);
    $.__views.__alloyId17928 = Ti.UI.createView({
        id: "__alloyId17928"
    });
    $.__views.__alloyId17928 && $.addTopLevelView($.__views.__alloyId17928);
    $.__views.__alloyId17929 = Ti.UI.createView({
        id: "__alloyId17929"
    });
    $.__views.__alloyId17928.add($.__views.__alloyId17929);
    $.__views.__alloyId17930 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17930"
    });
    $.__views.__alloyId17929.add($.__views.__alloyId17930);
    $.__views.__alloyId17931 = Ti.UI.createView({
        id: "__alloyId17931"
    });
    $.__views.__alloyId17931 && $.addTopLevelView($.__views.__alloyId17931);
    $.__views.__alloyId17932 = Ti.UI.createView({
        id: "__alloyId17932"
    });
    $.__views.__alloyId17931.add($.__views.__alloyId17932);
    $.__views.__alloyId17933 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17933"
    });
    $.__views.__alloyId17932.add($.__views.__alloyId17933);
    $.__views.__alloyId17934 = Ti.UI.createView({
        id: "__alloyId17934"
    });
    $.__views.__alloyId17934 && $.addTopLevelView($.__views.__alloyId17934);
    $.__views.__alloyId17935 = Ti.UI.createView({
        id: "__alloyId17935"
    });
    $.__views.__alloyId17934.add($.__views.__alloyId17935);
    $.__views.__alloyId17936 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17936"
    });
    $.__views.__alloyId17935.add($.__views.__alloyId17936);
    $.__views.__alloyId17937 = Ti.UI.createView({
        id: "__alloyId17937"
    });
    $.__views.__alloyId17937 && $.addTopLevelView($.__views.__alloyId17937);
    $.__views.__alloyId17938 = Ti.UI.createView({
        id: "__alloyId17938"
    });
    $.__views.__alloyId17937.add($.__views.__alloyId17938);
    $.__views.__alloyId17939 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17939"
    });
    $.__views.__alloyId17938.add($.__views.__alloyId17939);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;