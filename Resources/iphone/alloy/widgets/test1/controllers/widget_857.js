function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_857";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_857 = Ti.UI.createView({
        id: "widget_857"
    });
    $.__views.widget_857 && $.addTopLevelView($.__views.widget_857);
    $.__views.__alloyId21918 = Ti.UI.createView({
        id: "__alloyId21918"
    });
    $.__views.widget_857.add($.__views.__alloyId21918);
    $.__views.__alloyId21919 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21919"
    });
    $.__views.__alloyId21918.add($.__views.__alloyId21919);
    $.__views.__alloyId21920 = Ti.UI.createView({
        id: "__alloyId21920"
    });
    $.__views.__alloyId21920 && $.addTopLevelView($.__views.__alloyId21920);
    $.__views.__alloyId21921 = Ti.UI.createView({
        id: "__alloyId21921"
    });
    $.__views.__alloyId21920.add($.__views.__alloyId21921);
    $.__views.__alloyId21922 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21922"
    });
    $.__views.__alloyId21921.add($.__views.__alloyId21922);
    $.__views.__alloyId21923 = Ti.UI.createView({
        id: "__alloyId21923"
    });
    $.__views.__alloyId21923 && $.addTopLevelView($.__views.__alloyId21923);
    $.__views.__alloyId21924 = Ti.UI.createView({
        id: "__alloyId21924"
    });
    $.__views.__alloyId21923.add($.__views.__alloyId21924);
    $.__views.__alloyId21925 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21925"
    });
    $.__views.__alloyId21924.add($.__views.__alloyId21925);
    $.__views.__alloyId21926 = Ti.UI.createView({
        id: "__alloyId21926"
    });
    $.__views.__alloyId21926 && $.addTopLevelView($.__views.__alloyId21926);
    $.__views.__alloyId21927 = Ti.UI.createView({
        id: "__alloyId21927"
    });
    $.__views.__alloyId21926.add($.__views.__alloyId21927);
    $.__views.__alloyId21928 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21928"
    });
    $.__views.__alloyId21927.add($.__views.__alloyId21928);
    $.__views.__alloyId21929 = Ti.UI.createView({
        id: "__alloyId21929"
    });
    $.__views.__alloyId21929 && $.addTopLevelView($.__views.__alloyId21929);
    $.__views.__alloyId21930 = Ti.UI.createView({
        id: "__alloyId21930"
    });
    $.__views.__alloyId21929.add($.__views.__alloyId21930);
    $.__views.__alloyId21931 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21931"
    });
    $.__views.__alloyId21930.add($.__views.__alloyId21931);
    $.__views.__alloyId21932 = Ti.UI.createView({
        id: "__alloyId21932"
    });
    $.__views.__alloyId21932 && $.addTopLevelView($.__views.__alloyId21932);
    $.__views.__alloyId21933 = Ti.UI.createView({
        id: "__alloyId21933"
    });
    $.__views.__alloyId21932.add($.__views.__alloyId21933);
    $.__views.__alloyId21934 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21934"
    });
    $.__views.__alloyId21933.add($.__views.__alloyId21934);
    $.__views.__alloyId21935 = Ti.UI.createView({
        id: "__alloyId21935"
    });
    $.__views.__alloyId21935 && $.addTopLevelView($.__views.__alloyId21935);
    $.__views.__alloyId21936 = Ti.UI.createView({
        id: "__alloyId21936"
    });
    $.__views.__alloyId21935.add($.__views.__alloyId21936);
    $.__views.__alloyId21937 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21937"
    });
    $.__views.__alloyId21936.add($.__views.__alloyId21937);
    $.__views.__alloyId21938 = Ti.UI.createView({
        id: "__alloyId21938"
    });
    $.__views.__alloyId21938 && $.addTopLevelView($.__views.__alloyId21938);
    $.__views.__alloyId21939 = Ti.UI.createView({
        id: "__alloyId21939"
    });
    $.__views.__alloyId21938.add($.__views.__alloyId21939);
    $.__views.__alloyId21940 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21940"
    });
    $.__views.__alloyId21939.add($.__views.__alloyId21940);
    $.__views.__alloyId21941 = Ti.UI.createView({
        id: "__alloyId21941"
    });
    $.__views.__alloyId21941 && $.addTopLevelView($.__views.__alloyId21941);
    $.__views.__alloyId21942 = Ti.UI.createView({
        id: "__alloyId21942"
    });
    $.__views.__alloyId21941.add($.__views.__alloyId21942);
    $.__views.__alloyId21943 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21943"
    });
    $.__views.__alloyId21942.add($.__views.__alloyId21943);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;