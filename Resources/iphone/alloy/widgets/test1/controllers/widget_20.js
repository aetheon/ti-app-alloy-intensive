function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_20";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_20 = Ti.UI.createView({
        id: "widget_20"
    });
    $.__views.widget_20 && $.addTopLevelView($.__views.widget_20);
    $.__views.__alloyId2964 = Ti.UI.createView({
        id: "__alloyId2964"
    });
    $.__views.widget_20.add($.__views.__alloyId2964);
    $.__views.__alloyId2965 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2965"
    });
    $.__views.__alloyId2964.add($.__views.__alloyId2965);
    $.__views.__alloyId2966 = Ti.UI.createView({
        id: "__alloyId2966"
    });
    $.__views.__alloyId2966 && $.addTopLevelView($.__views.__alloyId2966);
    $.__views.__alloyId2967 = Ti.UI.createView({
        id: "__alloyId2967"
    });
    $.__views.__alloyId2966.add($.__views.__alloyId2967);
    $.__views.__alloyId2968 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2968"
    });
    $.__views.__alloyId2967.add($.__views.__alloyId2968);
    $.__views.__alloyId2969 = Ti.UI.createView({
        id: "__alloyId2969"
    });
    $.__views.__alloyId2969 && $.addTopLevelView($.__views.__alloyId2969);
    $.__views.__alloyId2970 = Ti.UI.createView({
        id: "__alloyId2970"
    });
    $.__views.__alloyId2969.add($.__views.__alloyId2970);
    $.__views.__alloyId2971 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2971"
    });
    $.__views.__alloyId2970.add($.__views.__alloyId2971);
    $.__views.__alloyId2972 = Ti.UI.createView({
        id: "__alloyId2972"
    });
    $.__views.__alloyId2972 && $.addTopLevelView($.__views.__alloyId2972);
    $.__views.__alloyId2973 = Ti.UI.createView({
        id: "__alloyId2973"
    });
    $.__views.__alloyId2972.add($.__views.__alloyId2973);
    $.__views.__alloyId2974 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2974"
    });
    $.__views.__alloyId2973.add($.__views.__alloyId2974);
    $.__views.__alloyId2975 = Ti.UI.createView({
        id: "__alloyId2975"
    });
    $.__views.__alloyId2975 && $.addTopLevelView($.__views.__alloyId2975);
    $.__views.__alloyId2976 = Ti.UI.createView({
        id: "__alloyId2976"
    });
    $.__views.__alloyId2975.add($.__views.__alloyId2976);
    $.__views.__alloyId2977 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2977"
    });
    $.__views.__alloyId2976.add($.__views.__alloyId2977);
    $.__views.__alloyId2978 = Ti.UI.createView({
        id: "__alloyId2978"
    });
    $.__views.__alloyId2978 && $.addTopLevelView($.__views.__alloyId2978);
    $.__views.__alloyId2979 = Ti.UI.createView({
        id: "__alloyId2979"
    });
    $.__views.__alloyId2978.add($.__views.__alloyId2979);
    $.__views.__alloyId2980 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2980"
    });
    $.__views.__alloyId2979.add($.__views.__alloyId2980);
    $.__views.__alloyId2981 = Ti.UI.createView({
        id: "__alloyId2981"
    });
    $.__views.__alloyId2981 && $.addTopLevelView($.__views.__alloyId2981);
    $.__views.__alloyId2982 = Ti.UI.createView({
        id: "__alloyId2982"
    });
    $.__views.__alloyId2981.add($.__views.__alloyId2982);
    $.__views.__alloyId2983 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2983"
    });
    $.__views.__alloyId2982.add($.__views.__alloyId2983);
    $.__views.__alloyId2984 = Ti.UI.createView({
        id: "__alloyId2984"
    });
    $.__views.__alloyId2984 && $.addTopLevelView($.__views.__alloyId2984);
    $.__views.__alloyId2985 = Ti.UI.createView({
        id: "__alloyId2985"
    });
    $.__views.__alloyId2984.add($.__views.__alloyId2985);
    $.__views.__alloyId2986 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2986"
    });
    $.__views.__alloyId2985.add($.__views.__alloyId2986);
    $.__views.__alloyId2987 = Ti.UI.createView({
        id: "__alloyId2987"
    });
    $.__views.__alloyId2987 && $.addTopLevelView($.__views.__alloyId2987);
    $.__views.__alloyId2988 = Ti.UI.createView({
        id: "__alloyId2988"
    });
    $.__views.__alloyId2987.add($.__views.__alloyId2988);
    $.__views.__alloyId2989 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId2989"
    });
    $.__views.__alloyId2988.add($.__views.__alloyId2989);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;