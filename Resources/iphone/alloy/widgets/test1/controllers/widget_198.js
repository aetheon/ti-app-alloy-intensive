function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_198";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_198 = Ti.UI.createView({
        id: "widget_198"
    });
    $.__views.widget_198 && $.addTopLevelView($.__views.widget_198);
    $.__views.__alloyId2886 = Ti.UI.createView({
        id: "__alloyId2886"
    });
    $.__views.widget_198.add($.__views.__alloyId2886);
    $.__views.__alloyId2887 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2887"
    });
    $.__views.__alloyId2886.add($.__views.__alloyId2887);
    $.__views.__alloyId2888 = Ti.UI.createView({
        id: "__alloyId2888"
    });
    $.__views.__alloyId2888 && $.addTopLevelView($.__views.__alloyId2888);
    $.__views.__alloyId2889 = Ti.UI.createView({
        id: "__alloyId2889"
    });
    $.__views.__alloyId2888.add($.__views.__alloyId2889);
    $.__views.__alloyId2890 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2890"
    });
    $.__views.__alloyId2889.add($.__views.__alloyId2890);
    $.__views.__alloyId2891 = Ti.UI.createView({
        id: "__alloyId2891"
    });
    $.__views.__alloyId2891 && $.addTopLevelView($.__views.__alloyId2891);
    $.__views.__alloyId2892 = Ti.UI.createView({
        id: "__alloyId2892"
    });
    $.__views.__alloyId2891.add($.__views.__alloyId2892);
    $.__views.__alloyId2893 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2893"
    });
    $.__views.__alloyId2892.add($.__views.__alloyId2893);
    $.__views.__alloyId2894 = Ti.UI.createView({
        id: "__alloyId2894"
    });
    $.__views.__alloyId2894 && $.addTopLevelView($.__views.__alloyId2894);
    $.__views.__alloyId2895 = Ti.UI.createView({
        id: "__alloyId2895"
    });
    $.__views.__alloyId2894.add($.__views.__alloyId2895);
    $.__views.__alloyId2896 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2896"
    });
    $.__views.__alloyId2895.add($.__views.__alloyId2896);
    $.__views.__alloyId2897 = Ti.UI.createView({
        id: "__alloyId2897"
    });
    $.__views.__alloyId2897 && $.addTopLevelView($.__views.__alloyId2897);
    $.__views.__alloyId2898 = Ti.UI.createView({
        id: "__alloyId2898"
    });
    $.__views.__alloyId2897.add($.__views.__alloyId2898);
    $.__views.__alloyId2899 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2899"
    });
    $.__views.__alloyId2898.add($.__views.__alloyId2899);
    $.__views.__alloyId2900 = Ti.UI.createView({
        id: "__alloyId2900"
    });
    $.__views.__alloyId2900 && $.addTopLevelView($.__views.__alloyId2900);
    $.__views.__alloyId2901 = Ti.UI.createView({
        id: "__alloyId2901"
    });
    $.__views.__alloyId2900.add($.__views.__alloyId2901);
    $.__views.__alloyId2902 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2902"
    });
    $.__views.__alloyId2901.add($.__views.__alloyId2902);
    $.__views.__alloyId2903 = Ti.UI.createView({
        id: "__alloyId2903"
    });
    $.__views.__alloyId2903 && $.addTopLevelView($.__views.__alloyId2903);
    $.__views.__alloyId2904 = Ti.UI.createView({
        id: "__alloyId2904"
    });
    $.__views.__alloyId2903.add($.__views.__alloyId2904);
    $.__views.__alloyId2905 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2905"
    });
    $.__views.__alloyId2904.add($.__views.__alloyId2905);
    $.__views.__alloyId2906 = Ti.UI.createView({
        id: "__alloyId2906"
    });
    $.__views.__alloyId2906 && $.addTopLevelView($.__views.__alloyId2906);
    $.__views.__alloyId2907 = Ti.UI.createView({
        id: "__alloyId2907"
    });
    $.__views.__alloyId2906.add($.__views.__alloyId2907);
    $.__views.__alloyId2908 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2908"
    });
    $.__views.__alloyId2907.add($.__views.__alloyId2908);
    $.__views.__alloyId2909 = Ti.UI.createView({
        id: "__alloyId2909"
    });
    $.__views.__alloyId2909 && $.addTopLevelView($.__views.__alloyId2909);
    $.__views.__alloyId2910 = Ti.UI.createView({
        id: "__alloyId2910"
    });
    $.__views.__alloyId2909.add($.__views.__alloyId2910);
    $.__views.__alloyId2911 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2911"
    });
    $.__views.__alloyId2910.add($.__views.__alloyId2911);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;