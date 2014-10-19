function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_206";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_206 = Ti.UI.createView({
        id: "widget_206"
    });
    $.__views.widget_206 && $.addTopLevelView($.__views.widget_206);
    $.__views.__alloyId3146 = Ti.UI.createView({
        id: "__alloyId3146"
    });
    $.__views.widget_206.add($.__views.__alloyId3146);
    $.__views.__alloyId3147 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3147"
    });
    $.__views.__alloyId3146.add($.__views.__alloyId3147);
    $.__views.__alloyId3148 = Ti.UI.createView({
        id: "__alloyId3148"
    });
    $.__views.__alloyId3148 && $.addTopLevelView($.__views.__alloyId3148);
    $.__views.__alloyId3149 = Ti.UI.createView({
        id: "__alloyId3149"
    });
    $.__views.__alloyId3148.add($.__views.__alloyId3149);
    $.__views.__alloyId3150 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3150"
    });
    $.__views.__alloyId3149.add($.__views.__alloyId3150);
    $.__views.__alloyId3151 = Ti.UI.createView({
        id: "__alloyId3151"
    });
    $.__views.__alloyId3151 && $.addTopLevelView($.__views.__alloyId3151);
    $.__views.__alloyId3152 = Ti.UI.createView({
        id: "__alloyId3152"
    });
    $.__views.__alloyId3151.add($.__views.__alloyId3152);
    $.__views.__alloyId3153 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3153"
    });
    $.__views.__alloyId3152.add($.__views.__alloyId3153);
    $.__views.__alloyId3154 = Ti.UI.createView({
        id: "__alloyId3154"
    });
    $.__views.__alloyId3154 && $.addTopLevelView($.__views.__alloyId3154);
    $.__views.__alloyId3155 = Ti.UI.createView({
        id: "__alloyId3155"
    });
    $.__views.__alloyId3154.add($.__views.__alloyId3155);
    $.__views.__alloyId3156 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3156"
    });
    $.__views.__alloyId3155.add($.__views.__alloyId3156);
    $.__views.__alloyId3157 = Ti.UI.createView({
        id: "__alloyId3157"
    });
    $.__views.__alloyId3157 && $.addTopLevelView($.__views.__alloyId3157);
    $.__views.__alloyId3158 = Ti.UI.createView({
        id: "__alloyId3158"
    });
    $.__views.__alloyId3157.add($.__views.__alloyId3158);
    $.__views.__alloyId3159 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3159"
    });
    $.__views.__alloyId3158.add($.__views.__alloyId3159);
    $.__views.__alloyId3160 = Ti.UI.createView({
        id: "__alloyId3160"
    });
    $.__views.__alloyId3160 && $.addTopLevelView($.__views.__alloyId3160);
    $.__views.__alloyId3161 = Ti.UI.createView({
        id: "__alloyId3161"
    });
    $.__views.__alloyId3160.add($.__views.__alloyId3161);
    $.__views.__alloyId3162 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3162"
    });
    $.__views.__alloyId3161.add($.__views.__alloyId3162);
    $.__views.__alloyId3163 = Ti.UI.createView({
        id: "__alloyId3163"
    });
    $.__views.__alloyId3163 && $.addTopLevelView($.__views.__alloyId3163);
    $.__views.__alloyId3164 = Ti.UI.createView({
        id: "__alloyId3164"
    });
    $.__views.__alloyId3163.add($.__views.__alloyId3164);
    $.__views.__alloyId3165 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3165"
    });
    $.__views.__alloyId3164.add($.__views.__alloyId3165);
    $.__views.__alloyId3166 = Ti.UI.createView({
        id: "__alloyId3166"
    });
    $.__views.__alloyId3166 && $.addTopLevelView($.__views.__alloyId3166);
    $.__views.__alloyId3167 = Ti.UI.createView({
        id: "__alloyId3167"
    });
    $.__views.__alloyId3166.add($.__views.__alloyId3167);
    $.__views.__alloyId3168 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3168"
    });
    $.__views.__alloyId3167.add($.__views.__alloyId3168);
    $.__views.__alloyId3169 = Ti.UI.createView({
        id: "__alloyId3169"
    });
    $.__views.__alloyId3169 && $.addTopLevelView($.__views.__alloyId3169);
    $.__views.__alloyId3170 = Ti.UI.createView({
        id: "__alloyId3170"
    });
    $.__views.__alloyId3169.add($.__views.__alloyId3170);
    $.__views.__alloyId3171 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3171"
    });
    $.__views.__alloyId3170.add($.__views.__alloyId3171);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;