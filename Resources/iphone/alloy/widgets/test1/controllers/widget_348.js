function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_348";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_348 = Ti.UI.createView({
        id: "widget_348"
    });
    $.__views.widget_348 && $.addTopLevelView($.__views.widget_348);
    $.__views.__alloyId7228 = Ti.UI.createView({
        id: "__alloyId7228"
    });
    $.__views.widget_348.add($.__views.__alloyId7228);
    $.__views.__alloyId7229 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7229"
    });
    $.__views.__alloyId7228.add($.__views.__alloyId7229);
    $.__views.__alloyId7230 = Ti.UI.createView({
        id: "__alloyId7230"
    });
    $.__views.__alloyId7230 && $.addTopLevelView($.__views.__alloyId7230);
    $.__views.__alloyId7231 = Ti.UI.createView({
        id: "__alloyId7231"
    });
    $.__views.__alloyId7230.add($.__views.__alloyId7231);
    $.__views.__alloyId7232 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7232"
    });
    $.__views.__alloyId7231.add($.__views.__alloyId7232);
    $.__views.__alloyId7233 = Ti.UI.createView({
        id: "__alloyId7233"
    });
    $.__views.__alloyId7233 && $.addTopLevelView($.__views.__alloyId7233);
    $.__views.__alloyId7234 = Ti.UI.createView({
        id: "__alloyId7234"
    });
    $.__views.__alloyId7233.add($.__views.__alloyId7234);
    $.__views.__alloyId7235 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7235"
    });
    $.__views.__alloyId7234.add($.__views.__alloyId7235);
    $.__views.__alloyId7236 = Ti.UI.createView({
        id: "__alloyId7236"
    });
    $.__views.__alloyId7236 && $.addTopLevelView($.__views.__alloyId7236);
    $.__views.__alloyId7237 = Ti.UI.createView({
        id: "__alloyId7237"
    });
    $.__views.__alloyId7236.add($.__views.__alloyId7237);
    $.__views.__alloyId7238 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7238"
    });
    $.__views.__alloyId7237.add($.__views.__alloyId7238);
    $.__views.__alloyId7239 = Ti.UI.createView({
        id: "__alloyId7239"
    });
    $.__views.__alloyId7239 && $.addTopLevelView($.__views.__alloyId7239);
    $.__views.__alloyId7240 = Ti.UI.createView({
        id: "__alloyId7240"
    });
    $.__views.__alloyId7239.add($.__views.__alloyId7240);
    $.__views.__alloyId7241 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7241"
    });
    $.__views.__alloyId7240.add($.__views.__alloyId7241);
    $.__views.__alloyId7242 = Ti.UI.createView({
        id: "__alloyId7242"
    });
    $.__views.__alloyId7242 && $.addTopLevelView($.__views.__alloyId7242);
    $.__views.__alloyId7243 = Ti.UI.createView({
        id: "__alloyId7243"
    });
    $.__views.__alloyId7242.add($.__views.__alloyId7243);
    $.__views.__alloyId7244 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7244"
    });
    $.__views.__alloyId7243.add($.__views.__alloyId7244);
    $.__views.__alloyId7245 = Ti.UI.createView({
        id: "__alloyId7245"
    });
    $.__views.__alloyId7245 && $.addTopLevelView($.__views.__alloyId7245);
    $.__views.__alloyId7246 = Ti.UI.createView({
        id: "__alloyId7246"
    });
    $.__views.__alloyId7245.add($.__views.__alloyId7246);
    $.__views.__alloyId7247 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7247"
    });
    $.__views.__alloyId7246.add($.__views.__alloyId7247);
    $.__views.__alloyId7248 = Ti.UI.createView({
        id: "__alloyId7248"
    });
    $.__views.__alloyId7248 && $.addTopLevelView($.__views.__alloyId7248);
    $.__views.__alloyId7249 = Ti.UI.createView({
        id: "__alloyId7249"
    });
    $.__views.__alloyId7248.add($.__views.__alloyId7249);
    $.__views.__alloyId7250 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7250"
    });
    $.__views.__alloyId7249.add($.__views.__alloyId7250);
    $.__views.__alloyId7251 = Ti.UI.createView({
        id: "__alloyId7251"
    });
    $.__views.__alloyId7251 && $.addTopLevelView($.__views.__alloyId7251);
    $.__views.__alloyId7252 = Ti.UI.createView({
        id: "__alloyId7252"
    });
    $.__views.__alloyId7251.add($.__views.__alloyId7252);
    $.__views.__alloyId7253 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7253"
    });
    $.__views.__alloyId7252.add($.__views.__alloyId7253);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;