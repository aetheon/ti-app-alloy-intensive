function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_209";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_209 = Ti.UI.createView({
        id: "widget_209"
    });
    $.__views.widget_209 && $.addTopLevelView($.__views.widget_209);
    $.__views.__alloyId3224 = Ti.UI.createView({
        id: "__alloyId3224"
    });
    $.__views.widget_209.add($.__views.__alloyId3224);
    $.__views.__alloyId3225 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3225"
    });
    $.__views.__alloyId3224.add($.__views.__alloyId3225);
    $.__views.__alloyId3226 = Ti.UI.createView({
        id: "__alloyId3226"
    });
    $.__views.__alloyId3226 && $.addTopLevelView($.__views.__alloyId3226);
    $.__views.__alloyId3227 = Ti.UI.createView({
        id: "__alloyId3227"
    });
    $.__views.__alloyId3226.add($.__views.__alloyId3227);
    $.__views.__alloyId3228 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3228"
    });
    $.__views.__alloyId3227.add($.__views.__alloyId3228);
    $.__views.__alloyId3229 = Ti.UI.createView({
        id: "__alloyId3229"
    });
    $.__views.__alloyId3229 && $.addTopLevelView($.__views.__alloyId3229);
    $.__views.__alloyId3230 = Ti.UI.createView({
        id: "__alloyId3230"
    });
    $.__views.__alloyId3229.add($.__views.__alloyId3230);
    $.__views.__alloyId3231 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3231"
    });
    $.__views.__alloyId3230.add($.__views.__alloyId3231);
    $.__views.__alloyId3232 = Ti.UI.createView({
        id: "__alloyId3232"
    });
    $.__views.__alloyId3232 && $.addTopLevelView($.__views.__alloyId3232);
    $.__views.__alloyId3233 = Ti.UI.createView({
        id: "__alloyId3233"
    });
    $.__views.__alloyId3232.add($.__views.__alloyId3233);
    $.__views.__alloyId3234 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3234"
    });
    $.__views.__alloyId3233.add($.__views.__alloyId3234);
    $.__views.__alloyId3235 = Ti.UI.createView({
        id: "__alloyId3235"
    });
    $.__views.__alloyId3235 && $.addTopLevelView($.__views.__alloyId3235);
    $.__views.__alloyId3236 = Ti.UI.createView({
        id: "__alloyId3236"
    });
    $.__views.__alloyId3235.add($.__views.__alloyId3236);
    $.__views.__alloyId3237 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3237"
    });
    $.__views.__alloyId3236.add($.__views.__alloyId3237);
    $.__views.__alloyId3238 = Ti.UI.createView({
        id: "__alloyId3238"
    });
    $.__views.__alloyId3238 && $.addTopLevelView($.__views.__alloyId3238);
    $.__views.__alloyId3239 = Ti.UI.createView({
        id: "__alloyId3239"
    });
    $.__views.__alloyId3238.add($.__views.__alloyId3239);
    $.__views.__alloyId3240 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3240"
    });
    $.__views.__alloyId3239.add($.__views.__alloyId3240);
    $.__views.__alloyId3241 = Ti.UI.createView({
        id: "__alloyId3241"
    });
    $.__views.__alloyId3241 && $.addTopLevelView($.__views.__alloyId3241);
    $.__views.__alloyId3242 = Ti.UI.createView({
        id: "__alloyId3242"
    });
    $.__views.__alloyId3241.add($.__views.__alloyId3242);
    $.__views.__alloyId3243 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3243"
    });
    $.__views.__alloyId3242.add($.__views.__alloyId3243);
    $.__views.__alloyId3244 = Ti.UI.createView({
        id: "__alloyId3244"
    });
    $.__views.__alloyId3244 && $.addTopLevelView($.__views.__alloyId3244);
    $.__views.__alloyId3245 = Ti.UI.createView({
        id: "__alloyId3245"
    });
    $.__views.__alloyId3244.add($.__views.__alloyId3245);
    $.__views.__alloyId3246 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3246"
    });
    $.__views.__alloyId3245.add($.__views.__alloyId3246);
    $.__views.__alloyId3247 = Ti.UI.createView({
        id: "__alloyId3247"
    });
    $.__views.__alloyId3247 && $.addTopLevelView($.__views.__alloyId3247);
    $.__views.__alloyId3248 = Ti.UI.createView({
        id: "__alloyId3248"
    });
    $.__views.__alloyId3247.add($.__views.__alloyId3248);
    $.__views.__alloyId3249 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3249"
    });
    $.__views.__alloyId3248.add($.__views.__alloyId3249);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;