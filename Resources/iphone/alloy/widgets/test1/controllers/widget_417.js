function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_417";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_417 = Ti.UI.createView({
        id: "widget_417"
    });
    $.__views.widget_417 && $.addTopLevelView($.__views.widget_417);
    $.__views.__alloyId9230 = Ti.UI.createView({
        id: "__alloyId9230"
    });
    $.__views.widget_417.add($.__views.__alloyId9230);
    $.__views.__alloyId9231 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9231"
    });
    $.__views.__alloyId9230.add($.__views.__alloyId9231);
    $.__views.__alloyId9232 = Ti.UI.createView({
        id: "__alloyId9232"
    });
    $.__views.__alloyId9232 && $.addTopLevelView($.__views.__alloyId9232);
    $.__views.__alloyId9233 = Ti.UI.createView({
        id: "__alloyId9233"
    });
    $.__views.__alloyId9232.add($.__views.__alloyId9233);
    $.__views.__alloyId9234 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9234"
    });
    $.__views.__alloyId9233.add($.__views.__alloyId9234);
    $.__views.__alloyId9235 = Ti.UI.createView({
        id: "__alloyId9235"
    });
    $.__views.__alloyId9235 && $.addTopLevelView($.__views.__alloyId9235);
    $.__views.__alloyId9236 = Ti.UI.createView({
        id: "__alloyId9236"
    });
    $.__views.__alloyId9235.add($.__views.__alloyId9236);
    $.__views.__alloyId9237 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9237"
    });
    $.__views.__alloyId9236.add($.__views.__alloyId9237);
    $.__views.__alloyId9238 = Ti.UI.createView({
        id: "__alloyId9238"
    });
    $.__views.__alloyId9238 && $.addTopLevelView($.__views.__alloyId9238);
    $.__views.__alloyId9239 = Ti.UI.createView({
        id: "__alloyId9239"
    });
    $.__views.__alloyId9238.add($.__views.__alloyId9239);
    $.__views.__alloyId9240 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9240"
    });
    $.__views.__alloyId9239.add($.__views.__alloyId9240);
    $.__views.__alloyId9241 = Ti.UI.createView({
        id: "__alloyId9241"
    });
    $.__views.__alloyId9241 && $.addTopLevelView($.__views.__alloyId9241);
    $.__views.__alloyId9242 = Ti.UI.createView({
        id: "__alloyId9242"
    });
    $.__views.__alloyId9241.add($.__views.__alloyId9242);
    $.__views.__alloyId9243 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9243"
    });
    $.__views.__alloyId9242.add($.__views.__alloyId9243);
    $.__views.__alloyId9244 = Ti.UI.createView({
        id: "__alloyId9244"
    });
    $.__views.__alloyId9244 && $.addTopLevelView($.__views.__alloyId9244);
    $.__views.__alloyId9245 = Ti.UI.createView({
        id: "__alloyId9245"
    });
    $.__views.__alloyId9244.add($.__views.__alloyId9245);
    $.__views.__alloyId9246 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9246"
    });
    $.__views.__alloyId9245.add($.__views.__alloyId9246);
    $.__views.__alloyId9247 = Ti.UI.createView({
        id: "__alloyId9247"
    });
    $.__views.__alloyId9247 && $.addTopLevelView($.__views.__alloyId9247);
    $.__views.__alloyId9248 = Ti.UI.createView({
        id: "__alloyId9248"
    });
    $.__views.__alloyId9247.add($.__views.__alloyId9248);
    $.__views.__alloyId9249 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9249"
    });
    $.__views.__alloyId9248.add($.__views.__alloyId9249);
    $.__views.__alloyId9250 = Ti.UI.createView({
        id: "__alloyId9250"
    });
    $.__views.__alloyId9250 && $.addTopLevelView($.__views.__alloyId9250);
    $.__views.__alloyId9251 = Ti.UI.createView({
        id: "__alloyId9251"
    });
    $.__views.__alloyId9250.add($.__views.__alloyId9251);
    $.__views.__alloyId9252 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9252"
    });
    $.__views.__alloyId9251.add($.__views.__alloyId9252);
    $.__views.__alloyId9253 = Ti.UI.createView({
        id: "__alloyId9253"
    });
    $.__views.__alloyId9253 && $.addTopLevelView($.__views.__alloyId9253);
    $.__views.__alloyId9254 = Ti.UI.createView({
        id: "__alloyId9254"
    });
    $.__views.__alloyId9253.add($.__views.__alloyId9254);
    $.__views.__alloyId9255 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9255"
    });
    $.__views.__alloyId9254.add($.__views.__alloyId9255);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;