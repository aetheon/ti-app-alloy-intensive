function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_613";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_613 = Ti.UI.createView({
        id: "widget_613"
    });
    $.__views.widget_613 && $.addTopLevelView($.__views.widget_613);
    $.__views.__alloyId14898 = Ti.UI.createView({
        id: "__alloyId14898"
    });
    $.__views.widget_613.add($.__views.__alloyId14898);
    $.__views.__alloyId14899 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14899"
    });
    $.__views.__alloyId14898.add($.__views.__alloyId14899);
    $.__views.__alloyId14900 = Ti.UI.createView({
        id: "__alloyId14900"
    });
    $.__views.__alloyId14900 && $.addTopLevelView($.__views.__alloyId14900);
    $.__views.__alloyId14901 = Ti.UI.createView({
        id: "__alloyId14901"
    });
    $.__views.__alloyId14900.add($.__views.__alloyId14901);
    $.__views.__alloyId14902 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14902"
    });
    $.__views.__alloyId14901.add($.__views.__alloyId14902);
    $.__views.__alloyId14903 = Ti.UI.createView({
        id: "__alloyId14903"
    });
    $.__views.__alloyId14903 && $.addTopLevelView($.__views.__alloyId14903);
    $.__views.__alloyId14904 = Ti.UI.createView({
        id: "__alloyId14904"
    });
    $.__views.__alloyId14903.add($.__views.__alloyId14904);
    $.__views.__alloyId14905 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14905"
    });
    $.__views.__alloyId14904.add($.__views.__alloyId14905);
    $.__views.__alloyId14906 = Ti.UI.createView({
        id: "__alloyId14906"
    });
    $.__views.__alloyId14906 && $.addTopLevelView($.__views.__alloyId14906);
    $.__views.__alloyId14907 = Ti.UI.createView({
        id: "__alloyId14907"
    });
    $.__views.__alloyId14906.add($.__views.__alloyId14907);
    $.__views.__alloyId14908 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14908"
    });
    $.__views.__alloyId14907.add($.__views.__alloyId14908);
    $.__views.__alloyId14909 = Ti.UI.createView({
        id: "__alloyId14909"
    });
    $.__views.__alloyId14909 && $.addTopLevelView($.__views.__alloyId14909);
    $.__views.__alloyId14910 = Ti.UI.createView({
        id: "__alloyId14910"
    });
    $.__views.__alloyId14909.add($.__views.__alloyId14910);
    $.__views.__alloyId14911 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14911"
    });
    $.__views.__alloyId14910.add($.__views.__alloyId14911);
    $.__views.__alloyId14912 = Ti.UI.createView({
        id: "__alloyId14912"
    });
    $.__views.__alloyId14912 && $.addTopLevelView($.__views.__alloyId14912);
    $.__views.__alloyId14913 = Ti.UI.createView({
        id: "__alloyId14913"
    });
    $.__views.__alloyId14912.add($.__views.__alloyId14913);
    $.__views.__alloyId14914 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14914"
    });
    $.__views.__alloyId14913.add($.__views.__alloyId14914);
    $.__views.__alloyId14915 = Ti.UI.createView({
        id: "__alloyId14915"
    });
    $.__views.__alloyId14915 && $.addTopLevelView($.__views.__alloyId14915);
    $.__views.__alloyId14916 = Ti.UI.createView({
        id: "__alloyId14916"
    });
    $.__views.__alloyId14915.add($.__views.__alloyId14916);
    $.__views.__alloyId14917 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14917"
    });
    $.__views.__alloyId14916.add($.__views.__alloyId14917);
    $.__views.__alloyId14918 = Ti.UI.createView({
        id: "__alloyId14918"
    });
    $.__views.__alloyId14918 && $.addTopLevelView($.__views.__alloyId14918);
    $.__views.__alloyId14919 = Ti.UI.createView({
        id: "__alloyId14919"
    });
    $.__views.__alloyId14918.add($.__views.__alloyId14919);
    $.__views.__alloyId14920 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14920"
    });
    $.__views.__alloyId14919.add($.__views.__alloyId14920);
    $.__views.__alloyId14921 = Ti.UI.createView({
        id: "__alloyId14921"
    });
    $.__views.__alloyId14921 && $.addTopLevelView($.__views.__alloyId14921);
    $.__views.__alloyId14922 = Ti.UI.createView({
        id: "__alloyId14922"
    });
    $.__views.__alloyId14921.add($.__views.__alloyId14922);
    $.__views.__alloyId14923 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14923"
    });
    $.__views.__alloyId14922.add($.__views.__alloyId14923);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;