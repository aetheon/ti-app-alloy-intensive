function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_405";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_405 = Ti.UI.createView({
        id: "widget_405"
    });
    $.__views.widget_405 && $.addTopLevelView($.__views.widget_405);
    $.__views.__alloyId8892 = Ti.UI.createView({
        id: "__alloyId8892"
    });
    $.__views.widget_405.add($.__views.__alloyId8892);
    $.__views.__alloyId8893 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8893"
    });
    $.__views.__alloyId8892.add($.__views.__alloyId8893);
    $.__views.__alloyId8894 = Ti.UI.createView({
        id: "__alloyId8894"
    });
    $.__views.__alloyId8894 && $.addTopLevelView($.__views.__alloyId8894);
    $.__views.__alloyId8895 = Ti.UI.createView({
        id: "__alloyId8895"
    });
    $.__views.__alloyId8894.add($.__views.__alloyId8895);
    $.__views.__alloyId8896 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8896"
    });
    $.__views.__alloyId8895.add($.__views.__alloyId8896);
    $.__views.__alloyId8897 = Ti.UI.createView({
        id: "__alloyId8897"
    });
    $.__views.__alloyId8897 && $.addTopLevelView($.__views.__alloyId8897);
    $.__views.__alloyId8898 = Ti.UI.createView({
        id: "__alloyId8898"
    });
    $.__views.__alloyId8897.add($.__views.__alloyId8898);
    $.__views.__alloyId8899 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8899"
    });
    $.__views.__alloyId8898.add($.__views.__alloyId8899);
    $.__views.__alloyId8900 = Ti.UI.createView({
        id: "__alloyId8900"
    });
    $.__views.__alloyId8900 && $.addTopLevelView($.__views.__alloyId8900);
    $.__views.__alloyId8901 = Ti.UI.createView({
        id: "__alloyId8901"
    });
    $.__views.__alloyId8900.add($.__views.__alloyId8901);
    $.__views.__alloyId8902 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8902"
    });
    $.__views.__alloyId8901.add($.__views.__alloyId8902);
    $.__views.__alloyId8903 = Ti.UI.createView({
        id: "__alloyId8903"
    });
    $.__views.__alloyId8903 && $.addTopLevelView($.__views.__alloyId8903);
    $.__views.__alloyId8904 = Ti.UI.createView({
        id: "__alloyId8904"
    });
    $.__views.__alloyId8903.add($.__views.__alloyId8904);
    $.__views.__alloyId8905 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8905"
    });
    $.__views.__alloyId8904.add($.__views.__alloyId8905);
    $.__views.__alloyId8906 = Ti.UI.createView({
        id: "__alloyId8906"
    });
    $.__views.__alloyId8906 && $.addTopLevelView($.__views.__alloyId8906);
    $.__views.__alloyId8907 = Ti.UI.createView({
        id: "__alloyId8907"
    });
    $.__views.__alloyId8906.add($.__views.__alloyId8907);
    $.__views.__alloyId8908 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8908"
    });
    $.__views.__alloyId8907.add($.__views.__alloyId8908);
    $.__views.__alloyId8909 = Ti.UI.createView({
        id: "__alloyId8909"
    });
    $.__views.__alloyId8909 && $.addTopLevelView($.__views.__alloyId8909);
    $.__views.__alloyId8910 = Ti.UI.createView({
        id: "__alloyId8910"
    });
    $.__views.__alloyId8909.add($.__views.__alloyId8910);
    $.__views.__alloyId8911 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8911"
    });
    $.__views.__alloyId8910.add($.__views.__alloyId8911);
    $.__views.__alloyId8912 = Ti.UI.createView({
        id: "__alloyId8912"
    });
    $.__views.__alloyId8912 && $.addTopLevelView($.__views.__alloyId8912);
    $.__views.__alloyId8913 = Ti.UI.createView({
        id: "__alloyId8913"
    });
    $.__views.__alloyId8912.add($.__views.__alloyId8913);
    $.__views.__alloyId8914 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8914"
    });
    $.__views.__alloyId8913.add($.__views.__alloyId8914);
    $.__views.__alloyId8915 = Ti.UI.createView({
        id: "__alloyId8915"
    });
    $.__views.__alloyId8915 && $.addTopLevelView($.__views.__alloyId8915);
    $.__views.__alloyId8916 = Ti.UI.createView({
        id: "__alloyId8916"
    });
    $.__views.__alloyId8915.add($.__views.__alloyId8916);
    $.__views.__alloyId8917 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8917"
    });
    $.__views.__alloyId8916.add($.__views.__alloyId8917);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;