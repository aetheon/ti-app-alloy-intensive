function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_649";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_649 = Ti.UI.createView({
        id: "widget_649"
    });
    $.__views.widget_649 && $.addTopLevelView($.__views.widget_649);
    $.__views.__alloyId15912 = Ti.UI.createView({
        id: "__alloyId15912"
    });
    $.__views.widget_649.add($.__views.__alloyId15912);
    $.__views.__alloyId15913 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15913"
    });
    $.__views.__alloyId15912.add($.__views.__alloyId15913);
    $.__views.__alloyId15914 = Ti.UI.createView({
        id: "__alloyId15914"
    });
    $.__views.__alloyId15914 && $.addTopLevelView($.__views.__alloyId15914);
    $.__views.__alloyId15915 = Ti.UI.createView({
        id: "__alloyId15915"
    });
    $.__views.__alloyId15914.add($.__views.__alloyId15915);
    $.__views.__alloyId15916 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15916"
    });
    $.__views.__alloyId15915.add($.__views.__alloyId15916);
    $.__views.__alloyId15917 = Ti.UI.createView({
        id: "__alloyId15917"
    });
    $.__views.__alloyId15917 && $.addTopLevelView($.__views.__alloyId15917);
    $.__views.__alloyId15918 = Ti.UI.createView({
        id: "__alloyId15918"
    });
    $.__views.__alloyId15917.add($.__views.__alloyId15918);
    $.__views.__alloyId15919 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15919"
    });
    $.__views.__alloyId15918.add($.__views.__alloyId15919);
    $.__views.__alloyId15920 = Ti.UI.createView({
        id: "__alloyId15920"
    });
    $.__views.__alloyId15920 && $.addTopLevelView($.__views.__alloyId15920);
    $.__views.__alloyId15921 = Ti.UI.createView({
        id: "__alloyId15921"
    });
    $.__views.__alloyId15920.add($.__views.__alloyId15921);
    $.__views.__alloyId15922 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15922"
    });
    $.__views.__alloyId15921.add($.__views.__alloyId15922);
    $.__views.__alloyId15923 = Ti.UI.createView({
        id: "__alloyId15923"
    });
    $.__views.__alloyId15923 && $.addTopLevelView($.__views.__alloyId15923);
    $.__views.__alloyId15924 = Ti.UI.createView({
        id: "__alloyId15924"
    });
    $.__views.__alloyId15923.add($.__views.__alloyId15924);
    $.__views.__alloyId15925 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15925"
    });
    $.__views.__alloyId15924.add($.__views.__alloyId15925);
    $.__views.__alloyId15926 = Ti.UI.createView({
        id: "__alloyId15926"
    });
    $.__views.__alloyId15926 && $.addTopLevelView($.__views.__alloyId15926);
    $.__views.__alloyId15927 = Ti.UI.createView({
        id: "__alloyId15927"
    });
    $.__views.__alloyId15926.add($.__views.__alloyId15927);
    $.__views.__alloyId15928 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15928"
    });
    $.__views.__alloyId15927.add($.__views.__alloyId15928);
    $.__views.__alloyId15929 = Ti.UI.createView({
        id: "__alloyId15929"
    });
    $.__views.__alloyId15929 && $.addTopLevelView($.__views.__alloyId15929);
    $.__views.__alloyId15930 = Ti.UI.createView({
        id: "__alloyId15930"
    });
    $.__views.__alloyId15929.add($.__views.__alloyId15930);
    $.__views.__alloyId15931 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15931"
    });
    $.__views.__alloyId15930.add($.__views.__alloyId15931);
    $.__views.__alloyId15932 = Ti.UI.createView({
        id: "__alloyId15932"
    });
    $.__views.__alloyId15932 && $.addTopLevelView($.__views.__alloyId15932);
    $.__views.__alloyId15933 = Ti.UI.createView({
        id: "__alloyId15933"
    });
    $.__views.__alloyId15932.add($.__views.__alloyId15933);
    $.__views.__alloyId15934 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15934"
    });
    $.__views.__alloyId15933.add($.__views.__alloyId15934);
    $.__views.__alloyId15935 = Ti.UI.createView({
        id: "__alloyId15935"
    });
    $.__views.__alloyId15935 && $.addTopLevelView($.__views.__alloyId15935);
    $.__views.__alloyId15936 = Ti.UI.createView({
        id: "__alloyId15936"
    });
    $.__views.__alloyId15935.add($.__views.__alloyId15936);
    $.__views.__alloyId15937 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15937"
    });
    $.__views.__alloyId15936.add($.__views.__alloyId15937);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;