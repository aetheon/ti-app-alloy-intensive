function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_337";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_337 = Ti.UI.createView({
        id: "widget_337"
    });
    $.__views.widget_337 && $.addTopLevelView($.__views.widget_337);
    $.__views.__alloyId6916 = Ti.UI.createView({
        id: "__alloyId6916"
    });
    $.__views.widget_337.add($.__views.__alloyId6916);
    $.__views.__alloyId6917 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6917"
    });
    $.__views.__alloyId6916.add($.__views.__alloyId6917);
    $.__views.__alloyId6918 = Ti.UI.createView({
        id: "__alloyId6918"
    });
    $.__views.__alloyId6918 && $.addTopLevelView($.__views.__alloyId6918);
    $.__views.__alloyId6919 = Ti.UI.createView({
        id: "__alloyId6919"
    });
    $.__views.__alloyId6918.add($.__views.__alloyId6919);
    $.__views.__alloyId6920 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6920"
    });
    $.__views.__alloyId6919.add($.__views.__alloyId6920);
    $.__views.__alloyId6921 = Ti.UI.createView({
        id: "__alloyId6921"
    });
    $.__views.__alloyId6921 && $.addTopLevelView($.__views.__alloyId6921);
    $.__views.__alloyId6922 = Ti.UI.createView({
        id: "__alloyId6922"
    });
    $.__views.__alloyId6921.add($.__views.__alloyId6922);
    $.__views.__alloyId6923 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6923"
    });
    $.__views.__alloyId6922.add($.__views.__alloyId6923);
    $.__views.__alloyId6924 = Ti.UI.createView({
        id: "__alloyId6924"
    });
    $.__views.__alloyId6924 && $.addTopLevelView($.__views.__alloyId6924);
    $.__views.__alloyId6925 = Ti.UI.createView({
        id: "__alloyId6925"
    });
    $.__views.__alloyId6924.add($.__views.__alloyId6925);
    $.__views.__alloyId6926 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6926"
    });
    $.__views.__alloyId6925.add($.__views.__alloyId6926);
    $.__views.__alloyId6927 = Ti.UI.createView({
        id: "__alloyId6927"
    });
    $.__views.__alloyId6927 && $.addTopLevelView($.__views.__alloyId6927);
    $.__views.__alloyId6928 = Ti.UI.createView({
        id: "__alloyId6928"
    });
    $.__views.__alloyId6927.add($.__views.__alloyId6928);
    $.__views.__alloyId6929 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6929"
    });
    $.__views.__alloyId6928.add($.__views.__alloyId6929);
    $.__views.__alloyId6930 = Ti.UI.createView({
        id: "__alloyId6930"
    });
    $.__views.__alloyId6930 && $.addTopLevelView($.__views.__alloyId6930);
    $.__views.__alloyId6931 = Ti.UI.createView({
        id: "__alloyId6931"
    });
    $.__views.__alloyId6930.add($.__views.__alloyId6931);
    $.__views.__alloyId6932 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6932"
    });
    $.__views.__alloyId6931.add($.__views.__alloyId6932);
    $.__views.__alloyId6933 = Ti.UI.createView({
        id: "__alloyId6933"
    });
    $.__views.__alloyId6933 && $.addTopLevelView($.__views.__alloyId6933);
    $.__views.__alloyId6934 = Ti.UI.createView({
        id: "__alloyId6934"
    });
    $.__views.__alloyId6933.add($.__views.__alloyId6934);
    $.__views.__alloyId6935 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6935"
    });
    $.__views.__alloyId6934.add($.__views.__alloyId6935);
    $.__views.__alloyId6936 = Ti.UI.createView({
        id: "__alloyId6936"
    });
    $.__views.__alloyId6936 && $.addTopLevelView($.__views.__alloyId6936);
    $.__views.__alloyId6937 = Ti.UI.createView({
        id: "__alloyId6937"
    });
    $.__views.__alloyId6936.add($.__views.__alloyId6937);
    $.__views.__alloyId6938 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6938"
    });
    $.__views.__alloyId6937.add($.__views.__alloyId6938);
    $.__views.__alloyId6939 = Ti.UI.createView({
        id: "__alloyId6939"
    });
    $.__views.__alloyId6939 && $.addTopLevelView($.__views.__alloyId6939);
    $.__views.__alloyId6940 = Ti.UI.createView({
        id: "__alloyId6940"
    });
    $.__views.__alloyId6939.add($.__views.__alloyId6940);
    $.__views.__alloyId6941 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6941"
    });
    $.__views.__alloyId6940.add($.__views.__alloyId6941);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;