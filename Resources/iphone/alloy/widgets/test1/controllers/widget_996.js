function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_996";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_996 = Ti.UI.createView({
        id: "widget_996"
    });
    $.__views.widget_996 && $.addTopLevelView($.__views.widget_996);
    $.__views.__alloyId25922 = Ti.UI.createView({
        id: "__alloyId25922"
    });
    $.__views.widget_996.add($.__views.__alloyId25922);
    $.__views.__alloyId25923 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25923"
    });
    $.__views.__alloyId25922.add($.__views.__alloyId25923);
    $.__views.__alloyId25924 = Ti.UI.createView({
        id: "__alloyId25924"
    });
    $.__views.__alloyId25924 && $.addTopLevelView($.__views.__alloyId25924);
    $.__views.__alloyId25925 = Ti.UI.createView({
        id: "__alloyId25925"
    });
    $.__views.__alloyId25924.add($.__views.__alloyId25925);
    $.__views.__alloyId25926 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25926"
    });
    $.__views.__alloyId25925.add($.__views.__alloyId25926);
    $.__views.__alloyId25927 = Ti.UI.createView({
        id: "__alloyId25927"
    });
    $.__views.__alloyId25927 && $.addTopLevelView($.__views.__alloyId25927);
    $.__views.__alloyId25928 = Ti.UI.createView({
        id: "__alloyId25928"
    });
    $.__views.__alloyId25927.add($.__views.__alloyId25928);
    $.__views.__alloyId25929 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25929"
    });
    $.__views.__alloyId25928.add($.__views.__alloyId25929);
    $.__views.__alloyId25930 = Ti.UI.createView({
        id: "__alloyId25930"
    });
    $.__views.__alloyId25930 && $.addTopLevelView($.__views.__alloyId25930);
    $.__views.__alloyId25931 = Ti.UI.createView({
        id: "__alloyId25931"
    });
    $.__views.__alloyId25930.add($.__views.__alloyId25931);
    $.__views.__alloyId25932 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25932"
    });
    $.__views.__alloyId25931.add($.__views.__alloyId25932);
    $.__views.__alloyId25933 = Ti.UI.createView({
        id: "__alloyId25933"
    });
    $.__views.__alloyId25933 && $.addTopLevelView($.__views.__alloyId25933);
    $.__views.__alloyId25934 = Ti.UI.createView({
        id: "__alloyId25934"
    });
    $.__views.__alloyId25933.add($.__views.__alloyId25934);
    $.__views.__alloyId25935 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25935"
    });
    $.__views.__alloyId25934.add($.__views.__alloyId25935);
    $.__views.__alloyId25936 = Ti.UI.createView({
        id: "__alloyId25936"
    });
    $.__views.__alloyId25936 && $.addTopLevelView($.__views.__alloyId25936);
    $.__views.__alloyId25937 = Ti.UI.createView({
        id: "__alloyId25937"
    });
    $.__views.__alloyId25936.add($.__views.__alloyId25937);
    $.__views.__alloyId25938 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25938"
    });
    $.__views.__alloyId25937.add($.__views.__alloyId25938);
    $.__views.__alloyId25939 = Ti.UI.createView({
        id: "__alloyId25939"
    });
    $.__views.__alloyId25939 && $.addTopLevelView($.__views.__alloyId25939);
    $.__views.__alloyId25940 = Ti.UI.createView({
        id: "__alloyId25940"
    });
    $.__views.__alloyId25939.add($.__views.__alloyId25940);
    $.__views.__alloyId25941 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25941"
    });
    $.__views.__alloyId25940.add($.__views.__alloyId25941);
    $.__views.__alloyId25942 = Ti.UI.createView({
        id: "__alloyId25942"
    });
    $.__views.__alloyId25942 && $.addTopLevelView($.__views.__alloyId25942);
    $.__views.__alloyId25943 = Ti.UI.createView({
        id: "__alloyId25943"
    });
    $.__views.__alloyId25942.add($.__views.__alloyId25943);
    $.__views.__alloyId25944 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25944"
    });
    $.__views.__alloyId25943.add($.__views.__alloyId25944);
    $.__views.__alloyId25945 = Ti.UI.createView({
        id: "__alloyId25945"
    });
    $.__views.__alloyId25945 && $.addTopLevelView($.__views.__alloyId25945);
    $.__views.__alloyId25946 = Ti.UI.createView({
        id: "__alloyId25946"
    });
    $.__views.__alloyId25945.add($.__views.__alloyId25946);
    $.__views.__alloyId25947 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25947"
    });
    $.__views.__alloyId25946.add($.__views.__alloyId25947);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;