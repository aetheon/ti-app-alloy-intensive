function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_129";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_129 = Ti.UI.createView({
        id: "widget_129"
    });
    $.__views.widget_129 && $.addTopLevelView($.__views.widget_129);
    $.__views.__alloyId910 = Ti.UI.createView({
        id: "__alloyId910"
    });
    $.__views.widget_129.add($.__views.__alloyId910);
    $.__views.__alloyId911 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId911"
    });
    $.__views.__alloyId910.add($.__views.__alloyId911);
    $.__views.__alloyId912 = Ti.UI.createView({
        id: "__alloyId912"
    });
    $.__views.__alloyId912 && $.addTopLevelView($.__views.__alloyId912);
    $.__views.__alloyId913 = Ti.UI.createView({
        id: "__alloyId913"
    });
    $.__views.__alloyId912.add($.__views.__alloyId913);
    $.__views.__alloyId914 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId914"
    });
    $.__views.__alloyId913.add($.__views.__alloyId914);
    $.__views.__alloyId915 = Ti.UI.createView({
        id: "__alloyId915"
    });
    $.__views.__alloyId915 && $.addTopLevelView($.__views.__alloyId915);
    $.__views.__alloyId916 = Ti.UI.createView({
        id: "__alloyId916"
    });
    $.__views.__alloyId915.add($.__views.__alloyId916);
    $.__views.__alloyId917 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId917"
    });
    $.__views.__alloyId916.add($.__views.__alloyId917);
    $.__views.__alloyId918 = Ti.UI.createView({
        id: "__alloyId918"
    });
    $.__views.__alloyId918 && $.addTopLevelView($.__views.__alloyId918);
    $.__views.__alloyId919 = Ti.UI.createView({
        id: "__alloyId919"
    });
    $.__views.__alloyId918.add($.__views.__alloyId919);
    $.__views.__alloyId920 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId920"
    });
    $.__views.__alloyId919.add($.__views.__alloyId920);
    $.__views.__alloyId921 = Ti.UI.createView({
        id: "__alloyId921"
    });
    $.__views.__alloyId921 && $.addTopLevelView($.__views.__alloyId921);
    $.__views.__alloyId922 = Ti.UI.createView({
        id: "__alloyId922"
    });
    $.__views.__alloyId921.add($.__views.__alloyId922);
    $.__views.__alloyId923 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId923"
    });
    $.__views.__alloyId922.add($.__views.__alloyId923);
    $.__views.__alloyId924 = Ti.UI.createView({
        id: "__alloyId924"
    });
    $.__views.__alloyId924 && $.addTopLevelView($.__views.__alloyId924);
    $.__views.__alloyId925 = Ti.UI.createView({
        id: "__alloyId925"
    });
    $.__views.__alloyId924.add($.__views.__alloyId925);
    $.__views.__alloyId926 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId926"
    });
    $.__views.__alloyId925.add($.__views.__alloyId926);
    $.__views.__alloyId927 = Ti.UI.createView({
        id: "__alloyId927"
    });
    $.__views.__alloyId927 && $.addTopLevelView($.__views.__alloyId927);
    $.__views.__alloyId928 = Ti.UI.createView({
        id: "__alloyId928"
    });
    $.__views.__alloyId927.add($.__views.__alloyId928);
    $.__views.__alloyId929 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId929"
    });
    $.__views.__alloyId928.add($.__views.__alloyId929);
    $.__views.__alloyId930 = Ti.UI.createView({
        id: "__alloyId930"
    });
    $.__views.__alloyId930 && $.addTopLevelView($.__views.__alloyId930);
    $.__views.__alloyId931 = Ti.UI.createView({
        id: "__alloyId931"
    });
    $.__views.__alloyId930.add($.__views.__alloyId931);
    $.__views.__alloyId932 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId932"
    });
    $.__views.__alloyId931.add($.__views.__alloyId932);
    $.__views.__alloyId933 = Ti.UI.createView({
        id: "__alloyId933"
    });
    $.__views.__alloyId933 && $.addTopLevelView($.__views.__alloyId933);
    $.__views.__alloyId934 = Ti.UI.createView({
        id: "__alloyId934"
    });
    $.__views.__alloyId933.add($.__views.__alloyId934);
    $.__views.__alloyId935 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId935"
    });
    $.__views.__alloyId934.add($.__views.__alloyId935);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;