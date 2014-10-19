function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_788";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_788 = Ti.UI.createView({
        id: "widget_788"
    });
    $.__views.widget_788 && $.addTopLevelView($.__views.widget_788);
    $.__views.__alloyId19916 = Ti.UI.createView({
        id: "__alloyId19916"
    });
    $.__views.widget_788.add($.__views.__alloyId19916);
    $.__views.__alloyId19917 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19917"
    });
    $.__views.__alloyId19916.add($.__views.__alloyId19917);
    $.__views.__alloyId19918 = Ti.UI.createView({
        id: "__alloyId19918"
    });
    $.__views.__alloyId19918 && $.addTopLevelView($.__views.__alloyId19918);
    $.__views.__alloyId19919 = Ti.UI.createView({
        id: "__alloyId19919"
    });
    $.__views.__alloyId19918.add($.__views.__alloyId19919);
    $.__views.__alloyId19920 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19920"
    });
    $.__views.__alloyId19919.add($.__views.__alloyId19920);
    $.__views.__alloyId19921 = Ti.UI.createView({
        id: "__alloyId19921"
    });
    $.__views.__alloyId19921 && $.addTopLevelView($.__views.__alloyId19921);
    $.__views.__alloyId19922 = Ti.UI.createView({
        id: "__alloyId19922"
    });
    $.__views.__alloyId19921.add($.__views.__alloyId19922);
    $.__views.__alloyId19923 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19923"
    });
    $.__views.__alloyId19922.add($.__views.__alloyId19923);
    $.__views.__alloyId19924 = Ti.UI.createView({
        id: "__alloyId19924"
    });
    $.__views.__alloyId19924 && $.addTopLevelView($.__views.__alloyId19924);
    $.__views.__alloyId19925 = Ti.UI.createView({
        id: "__alloyId19925"
    });
    $.__views.__alloyId19924.add($.__views.__alloyId19925);
    $.__views.__alloyId19926 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19926"
    });
    $.__views.__alloyId19925.add($.__views.__alloyId19926);
    $.__views.__alloyId19927 = Ti.UI.createView({
        id: "__alloyId19927"
    });
    $.__views.__alloyId19927 && $.addTopLevelView($.__views.__alloyId19927);
    $.__views.__alloyId19928 = Ti.UI.createView({
        id: "__alloyId19928"
    });
    $.__views.__alloyId19927.add($.__views.__alloyId19928);
    $.__views.__alloyId19929 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19929"
    });
    $.__views.__alloyId19928.add($.__views.__alloyId19929);
    $.__views.__alloyId19930 = Ti.UI.createView({
        id: "__alloyId19930"
    });
    $.__views.__alloyId19930 && $.addTopLevelView($.__views.__alloyId19930);
    $.__views.__alloyId19931 = Ti.UI.createView({
        id: "__alloyId19931"
    });
    $.__views.__alloyId19930.add($.__views.__alloyId19931);
    $.__views.__alloyId19932 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19932"
    });
    $.__views.__alloyId19931.add($.__views.__alloyId19932);
    $.__views.__alloyId19933 = Ti.UI.createView({
        id: "__alloyId19933"
    });
    $.__views.__alloyId19933 && $.addTopLevelView($.__views.__alloyId19933);
    $.__views.__alloyId19934 = Ti.UI.createView({
        id: "__alloyId19934"
    });
    $.__views.__alloyId19933.add($.__views.__alloyId19934);
    $.__views.__alloyId19935 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19935"
    });
    $.__views.__alloyId19934.add($.__views.__alloyId19935);
    $.__views.__alloyId19936 = Ti.UI.createView({
        id: "__alloyId19936"
    });
    $.__views.__alloyId19936 && $.addTopLevelView($.__views.__alloyId19936);
    $.__views.__alloyId19937 = Ti.UI.createView({
        id: "__alloyId19937"
    });
    $.__views.__alloyId19936.add($.__views.__alloyId19937);
    $.__views.__alloyId19938 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19938"
    });
    $.__views.__alloyId19937.add($.__views.__alloyId19938);
    $.__views.__alloyId19939 = Ti.UI.createView({
        id: "__alloyId19939"
    });
    $.__views.__alloyId19939 && $.addTopLevelView($.__views.__alloyId19939);
    $.__views.__alloyId19940 = Ti.UI.createView({
        id: "__alloyId19940"
    });
    $.__views.__alloyId19939.add($.__views.__alloyId19940);
    $.__views.__alloyId19941 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19941"
    });
    $.__views.__alloyId19940.add($.__views.__alloyId19941);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;