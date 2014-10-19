function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_799";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_799 = Ti.UI.createView({
        id: "widget_799"
    });
    $.__views.widget_799 && $.addTopLevelView($.__views.widget_799);
    $.__views.__alloyId20228 = Ti.UI.createView({
        id: "__alloyId20228"
    });
    $.__views.widget_799.add($.__views.__alloyId20228);
    $.__views.__alloyId20229 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20229"
    });
    $.__views.__alloyId20228.add($.__views.__alloyId20229);
    $.__views.__alloyId20230 = Ti.UI.createView({
        id: "__alloyId20230"
    });
    $.__views.__alloyId20230 && $.addTopLevelView($.__views.__alloyId20230);
    $.__views.__alloyId20231 = Ti.UI.createView({
        id: "__alloyId20231"
    });
    $.__views.__alloyId20230.add($.__views.__alloyId20231);
    $.__views.__alloyId20232 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20232"
    });
    $.__views.__alloyId20231.add($.__views.__alloyId20232);
    $.__views.__alloyId20233 = Ti.UI.createView({
        id: "__alloyId20233"
    });
    $.__views.__alloyId20233 && $.addTopLevelView($.__views.__alloyId20233);
    $.__views.__alloyId20234 = Ti.UI.createView({
        id: "__alloyId20234"
    });
    $.__views.__alloyId20233.add($.__views.__alloyId20234);
    $.__views.__alloyId20235 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20235"
    });
    $.__views.__alloyId20234.add($.__views.__alloyId20235);
    $.__views.__alloyId20236 = Ti.UI.createView({
        id: "__alloyId20236"
    });
    $.__views.__alloyId20236 && $.addTopLevelView($.__views.__alloyId20236);
    $.__views.__alloyId20237 = Ti.UI.createView({
        id: "__alloyId20237"
    });
    $.__views.__alloyId20236.add($.__views.__alloyId20237);
    $.__views.__alloyId20238 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20238"
    });
    $.__views.__alloyId20237.add($.__views.__alloyId20238);
    $.__views.__alloyId20239 = Ti.UI.createView({
        id: "__alloyId20239"
    });
    $.__views.__alloyId20239 && $.addTopLevelView($.__views.__alloyId20239);
    $.__views.__alloyId20240 = Ti.UI.createView({
        id: "__alloyId20240"
    });
    $.__views.__alloyId20239.add($.__views.__alloyId20240);
    $.__views.__alloyId20241 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20241"
    });
    $.__views.__alloyId20240.add($.__views.__alloyId20241);
    $.__views.__alloyId20242 = Ti.UI.createView({
        id: "__alloyId20242"
    });
    $.__views.__alloyId20242 && $.addTopLevelView($.__views.__alloyId20242);
    $.__views.__alloyId20243 = Ti.UI.createView({
        id: "__alloyId20243"
    });
    $.__views.__alloyId20242.add($.__views.__alloyId20243);
    $.__views.__alloyId20244 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20244"
    });
    $.__views.__alloyId20243.add($.__views.__alloyId20244);
    $.__views.__alloyId20245 = Ti.UI.createView({
        id: "__alloyId20245"
    });
    $.__views.__alloyId20245 && $.addTopLevelView($.__views.__alloyId20245);
    $.__views.__alloyId20246 = Ti.UI.createView({
        id: "__alloyId20246"
    });
    $.__views.__alloyId20245.add($.__views.__alloyId20246);
    $.__views.__alloyId20247 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20247"
    });
    $.__views.__alloyId20246.add($.__views.__alloyId20247);
    $.__views.__alloyId20248 = Ti.UI.createView({
        id: "__alloyId20248"
    });
    $.__views.__alloyId20248 && $.addTopLevelView($.__views.__alloyId20248);
    $.__views.__alloyId20249 = Ti.UI.createView({
        id: "__alloyId20249"
    });
    $.__views.__alloyId20248.add($.__views.__alloyId20249);
    $.__views.__alloyId20250 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20250"
    });
    $.__views.__alloyId20249.add($.__views.__alloyId20250);
    $.__views.__alloyId20251 = Ti.UI.createView({
        id: "__alloyId20251"
    });
    $.__views.__alloyId20251 && $.addTopLevelView($.__views.__alloyId20251);
    $.__views.__alloyId20252 = Ti.UI.createView({
        id: "__alloyId20252"
    });
    $.__views.__alloyId20251.add($.__views.__alloyId20252);
    $.__views.__alloyId20253 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20253"
    });
    $.__views.__alloyId20252.add($.__views.__alloyId20253);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;