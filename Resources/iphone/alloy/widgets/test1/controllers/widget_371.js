function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_371";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_371 = Ti.UI.createView({
        id: "widget_371"
    });
    $.__views.widget_371 && $.addTopLevelView($.__views.widget_371);
    $.__views.__alloyId7904 = Ti.UI.createView({
        id: "__alloyId7904"
    });
    $.__views.widget_371.add($.__views.__alloyId7904);
    $.__views.__alloyId7905 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7905"
    });
    $.__views.__alloyId7904.add($.__views.__alloyId7905);
    $.__views.__alloyId7906 = Ti.UI.createView({
        id: "__alloyId7906"
    });
    $.__views.__alloyId7906 && $.addTopLevelView($.__views.__alloyId7906);
    $.__views.__alloyId7907 = Ti.UI.createView({
        id: "__alloyId7907"
    });
    $.__views.__alloyId7906.add($.__views.__alloyId7907);
    $.__views.__alloyId7908 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7908"
    });
    $.__views.__alloyId7907.add($.__views.__alloyId7908);
    $.__views.__alloyId7909 = Ti.UI.createView({
        id: "__alloyId7909"
    });
    $.__views.__alloyId7909 && $.addTopLevelView($.__views.__alloyId7909);
    $.__views.__alloyId7910 = Ti.UI.createView({
        id: "__alloyId7910"
    });
    $.__views.__alloyId7909.add($.__views.__alloyId7910);
    $.__views.__alloyId7911 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7911"
    });
    $.__views.__alloyId7910.add($.__views.__alloyId7911);
    $.__views.__alloyId7912 = Ti.UI.createView({
        id: "__alloyId7912"
    });
    $.__views.__alloyId7912 && $.addTopLevelView($.__views.__alloyId7912);
    $.__views.__alloyId7913 = Ti.UI.createView({
        id: "__alloyId7913"
    });
    $.__views.__alloyId7912.add($.__views.__alloyId7913);
    $.__views.__alloyId7914 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7914"
    });
    $.__views.__alloyId7913.add($.__views.__alloyId7914);
    $.__views.__alloyId7915 = Ti.UI.createView({
        id: "__alloyId7915"
    });
    $.__views.__alloyId7915 && $.addTopLevelView($.__views.__alloyId7915);
    $.__views.__alloyId7916 = Ti.UI.createView({
        id: "__alloyId7916"
    });
    $.__views.__alloyId7915.add($.__views.__alloyId7916);
    $.__views.__alloyId7917 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7917"
    });
    $.__views.__alloyId7916.add($.__views.__alloyId7917);
    $.__views.__alloyId7918 = Ti.UI.createView({
        id: "__alloyId7918"
    });
    $.__views.__alloyId7918 && $.addTopLevelView($.__views.__alloyId7918);
    $.__views.__alloyId7919 = Ti.UI.createView({
        id: "__alloyId7919"
    });
    $.__views.__alloyId7918.add($.__views.__alloyId7919);
    $.__views.__alloyId7920 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7920"
    });
    $.__views.__alloyId7919.add($.__views.__alloyId7920);
    $.__views.__alloyId7921 = Ti.UI.createView({
        id: "__alloyId7921"
    });
    $.__views.__alloyId7921 && $.addTopLevelView($.__views.__alloyId7921);
    $.__views.__alloyId7922 = Ti.UI.createView({
        id: "__alloyId7922"
    });
    $.__views.__alloyId7921.add($.__views.__alloyId7922);
    $.__views.__alloyId7923 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7923"
    });
    $.__views.__alloyId7922.add($.__views.__alloyId7923);
    $.__views.__alloyId7924 = Ti.UI.createView({
        id: "__alloyId7924"
    });
    $.__views.__alloyId7924 && $.addTopLevelView($.__views.__alloyId7924);
    $.__views.__alloyId7925 = Ti.UI.createView({
        id: "__alloyId7925"
    });
    $.__views.__alloyId7924.add($.__views.__alloyId7925);
    $.__views.__alloyId7926 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7926"
    });
    $.__views.__alloyId7925.add($.__views.__alloyId7926);
    $.__views.__alloyId7927 = Ti.UI.createView({
        id: "__alloyId7927"
    });
    $.__views.__alloyId7927 && $.addTopLevelView($.__views.__alloyId7927);
    $.__views.__alloyId7928 = Ti.UI.createView({
        id: "__alloyId7928"
    });
    $.__views.__alloyId7927.add($.__views.__alloyId7928);
    $.__views.__alloyId7929 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7929"
    });
    $.__views.__alloyId7928.add($.__views.__alloyId7929);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;