function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_926";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_926 = Ti.UI.createView({
        id: "widget_926"
    });
    $.__views.widget_926 && $.addTopLevelView($.__views.widget_926);
    $.__views.__alloyId23920 = Ti.UI.createView({
        id: "__alloyId23920"
    });
    $.__views.widget_926.add($.__views.__alloyId23920);
    $.__views.__alloyId23921 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23921"
    });
    $.__views.__alloyId23920.add($.__views.__alloyId23921);
    $.__views.__alloyId23922 = Ti.UI.createView({
        id: "__alloyId23922"
    });
    $.__views.__alloyId23922 && $.addTopLevelView($.__views.__alloyId23922);
    $.__views.__alloyId23923 = Ti.UI.createView({
        id: "__alloyId23923"
    });
    $.__views.__alloyId23922.add($.__views.__alloyId23923);
    $.__views.__alloyId23924 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23924"
    });
    $.__views.__alloyId23923.add($.__views.__alloyId23924);
    $.__views.__alloyId23925 = Ti.UI.createView({
        id: "__alloyId23925"
    });
    $.__views.__alloyId23925 && $.addTopLevelView($.__views.__alloyId23925);
    $.__views.__alloyId23926 = Ti.UI.createView({
        id: "__alloyId23926"
    });
    $.__views.__alloyId23925.add($.__views.__alloyId23926);
    $.__views.__alloyId23927 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23927"
    });
    $.__views.__alloyId23926.add($.__views.__alloyId23927);
    $.__views.__alloyId23928 = Ti.UI.createView({
        id: "__alloyId23928"
    });
    $.__views.__alloyId23928 && $.addTopLevelView($.__views.__alloyId23928);
    $.__views.__alloyId23929 = Ti.UI.createView({
        id: "__alloyId23929"
    });
    $.__views.__alloyId23928.add($.__views.__alloyId23929);
    $.__views.__alloyId23930 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23930"
    });
    $.__views.__alloyId23929.add($.__views.__alloyId23930);
    $.__views.__alloyId23931 = Ti.UI.createView({
        id: "__alloyId23931"
    });
    $.__views.__alloyId23931 && $.addTopLevelView($.__views.__alloyId23931);
    $.__views.__alloyId23932 = Ti.UI.createView({
        id: "__alloyId23932"
    });
    $.__views.__alloyId23931.add($.__views.__alloyId23932);
    $.__views.__alloyId23933 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23933"
    });
    $.__views.__alloyId23932.add($.__views.__alloyId23933);
    $.__views.__alloyId23934 = Ti.UI.createView({
        id: "__alloyId23934"
    });
    $.__views.__alloyId23934 && $.addTopLevelView($.__views.__alloyId23934);
    $.__views.__alloyId23935 = Ti.UI.createView({
        id: "__alloyId23935"
    });
    $.__views.__alloyId23934.add($.__views.__alloyId23935);
    $.__views.__alloyId23936 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23936"
    });
    $.__views.__alloyId23935.add($.__views.__alloyId23936);
    $.__views.__alloyId23937 = Ti.UI.createView({
        id: "__alloyId23937"
    });
    $.__views.__alloyId23937 && $.addTopLevelView($.__views.__alloyId23937);
    $.__views.__alloyId23938 = Ti.UI.createView({
        id: "__alloyId23938"
    });
    $.__views.__alloyId23937.add($.__views.__alloyId23938);
    $.__views.__alloyId23939 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23939"
    });
    $.__views.__alloyId23938.add($.__views.__alloyId23939);
    $.__views.__alloyId23940 = Ti.UI.createView({
        id: "__alloyId23940"
    });
    $.__views.__alloyId23940 && $.addTopLevelView($.__views.__alloyId23940);
    $.__views.__alloyId23941 = Ti.UI.createView({
        id: "__alloyId23941"
    });
    $.__views.__alloyId23940.add($.__views.__alloyId23941);
    $.__views.__alloyId23942 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23942"
    });
    $.__views.__alloyId23941.add($.__views.__alloyId23942);
    $.__views.__alloyId23943 = Ti.UI.createView({
        id: "__alloyId23943"
    });
    $.__views.__alloyId23943 && $.addTopLevelView($.__views.__alloyId23943);
    $.__views.__alloyId23944 = Ti.UI.createView({
        id: "__alloyId23944"
    });
    $.__views.__alloyId23943.add($.__views.__alloyId23944);
    $.__views.__alloyId23945 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23945"
    });
    $.__views.__alloyId23944.add($.__views.__alloyId23945);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;