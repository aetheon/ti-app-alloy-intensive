function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_203";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_203 = Ti.UI.createView({
        id: "widget_203"
    });
    $.__views.widget_203 && $.addTopLevelView($.__views.widget_203);
    $.__views.__alloyId3068 = Ti.UI.createView({
        id: "__alloyId3068"
    });
    $.__views.widget_203.add($.__views.__alloyId3068);
    $.__views.__alloyId3069 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3069"
    });
    $.__views.__alloyId3068.add($.__views.__alloyId3069);
    $.__views.__alloyId3070 = Ti.UI.createView({
        id: "__alloyId3070"
    });
    $.__views.__alloyId3070 && $.addTopLevelView($.__views.__alloyId3070);
    $.__views.__alloyId3071 = Ti.UI.createView({
        id: "__alloyId3071"
    });
    $.__views.__alloyId3070.add($.__views.__alloyId3071);
    $.__views.__alloyId3072 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3072"
    });
    $.__views.__alloyId3071.add($.__views.__alloyId3072);
    $.__views.__alloyId3073 = Ti.UI.createView({
        id: "__alloyId3073"
    });
    $.__views.__alloyId3073 && $.addTopLevelView($.__views.__alloyId3073);
    $.__views.__alloyId3074 = Ti.UI.createView({
        id: "__alloyId3074"
    });
    $.__views.__alloyId3073.add($.__views.__alloyId3074);
    $.__views.__alloyId3075 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3075"
    });
    $.__views.__alloyId3074.add($.__views.__alloyId3075);
    $.__views.__alloyId3076 = Ti.UI.createView({
        id: "__alloyId3076"
    });
    $.__views.__alloyId3076 && $.addTopLevelView($.__views.__alloyId3076);
    $.__views.__alloyId3077 = Ti.UI.createView({
        id: "__alloyId3077"
    });
    $.__views.__alloyId3076.add($.__views.__alloyId3077);
    $.__views.__alloyId3078 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3078"
    });
    $.__views.__alloyId3077.add($.__views.__alloyId3078);
    $.__views.__alloyId3079 = Ti.UI.createView({
        id: "__alloyId3079"
    });
    $.__views.__alloyId3079 && $.addTopLevelView($.__views.__alloyId3079);
    $.__views.__alloyId3080 = Ti.UI.createView({
        id: "__alloyId3080"
    });
    $.__views.__alloyId3079.add($.__views.__alloyId3080);
    $.__views.__alloyId3081 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3081"
    });
    $.__views.__alloyId3080.add($.__views.__alloyId3081);
    $.__views.__alloyId3082 = Ti.UI.createView({
        id: "__alloyId3082"
    });
    $.__views.__alloyId3082 && $.addTopLevelView($.__views.__alloyId3082);
    $.__views.__alloyId3083 = Ti.UI.createView({
        id: "__alloyId3083"
    });
    $.__views.__alloyId3082.add($.__views.__alloyId3083);
    $.__views.__alloyId3084 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3084"
    });
    $.__views.__alloyId3083.add($.__views.__alloyId3084);
    $.__views.__alloyId3085 = Ti.UI.createView({
        id: "__alloyId3085"
    });
    $.__views.__alloyId3085 && $.addTopLevelView($.__views.__alloyId3085);
    $.__views.__alloyId3086 = Ti.UI.createView({
        id: "__alloyId3086"
    });
    $.__views.__alloyId3085.add($.__views.__alloyId3086);
    $.__views.__alloyId3087 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3087"
    });
    $.__views.__alloyId3086.add($.__views.__alloyId3087);
    $.__views.__alloyId3088 = Ti.UI.createView({
        id: "__alloyId3088"
    });
    $.__views.__alloyId3088 && $.addTopLevelView($.__views.__alloyId3088);
    $.__views.__alloyId3089 = Ti.UI.createView({
        id: "__alloyId3089"
    });
    $.__views.__alloyId3088.add($.__views.__alloyId3089);
    $.__views.__alloyId3090 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3090"
    });
    $.__views.__alloyId3089.add($.__views.__alloyId3090);
    $.__views.__alloyId3091 = Ti.UI.createView({
        id: "__alloyId3091"
    });
    $.__views.__alloyId3091 && $.addTopLevelView($.__views.__alloyId3091);
    $.__views.__alloyId3092 = Ti.UI.createView({
        id: "__alloyId3092"
    });
    $.__views.__alloyId3091.add($.__views.__alloyId3092);
    $.__views.__alloyId3093 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3093"
    });
    $.__views.__alloyId3092.add($.__views.__alloyId3093);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;