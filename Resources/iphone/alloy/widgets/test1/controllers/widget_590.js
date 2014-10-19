function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_590";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_590 = Ti.UI.createView({
        id: "widget_590"
    });
    $.__views.widget_590 && $.addTopLevelView($.__views.widget_590);
    $.__views.__alloyId14222 = Ti.UI.createView({
        id: "__alloyId14222"
    });
    $.__views.widget_590.add($.__views.__alloyId14222);
    $.__views.__alloyId14223 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14223"
    });
    $.__views.__alloyId14222.add($.__views.__alloyId14223);
    $.__views.__alloyId14224 = Ti.UI.createView({
        id: "__alloyId14224"
    });
    $.__views.__alloyId14224 && $.addTopLevelView($.__views.__alloyId14224);
    $.__views.__alloyId14225 = Ti.UI.createView({
        id: "__alloyId14225"
    });
    $.__views.__alloyId14224.add($.__views.__alloyId14225);
    $.__views.__alloyId14226 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14226"
    });
    $.__views.__alloyId14225.add($.__views.__alloyId14226);
    $.__views.__alloyId14227 = Ti.UI.createView({
        id: "__alloyId14227"
    });
    $.__views.__alloyId14227 && $.addTopLevelView($.__views.__alloyId14227);
    $.__views.__alloyId14228 = Ti.UI.createView({
        id: "__alloyId14228"
    });
    $.__views.__alloyId14227.add($.__views.__alloyId14228);
    $.__views.__alloyId14229 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14229"
    });
    $.__views.__alloyId14228.add($.__views.__alloyId14229);
    $.__views.__alloyId14230 = Ti.UI.createView({
        id: "__alloyId14230"
    });
    $.__views.__alloyId14230 && $.addTopLevelView($.__views.__alloyId14230);
    $.__views.__alloyId14231 = Ti.UI.createView({
        id: "__alloyId14231"
    });
    $.__views.__alloyId14230.add($.__views.__alloyId14231);
    $.__views.__alloyId14232 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14232"
    });
    $.__views.__alloyId14231.add($.__views.__alloyId14232);
    $.__views.__alloyId14233 = Ti.UI.createView({
        id: "__alloyId14233"
    });
    $.__views.__alloyId14233 && $.addTopLevelView($.__views.__alloyId14233);
    $.__views.__alloyId14234 = Ti.UI.createView({
        id: "__alloyId14234"
    });
    $.__views.__alloyId14233.add($.__views.__alloyId14234);
    $.__views.__alloyId14235 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14235"
    });
    $.__views.__alloyId14234.add($.__views.__alloyId14235);
    $.__views.__alloyId14236 = Ti.UI.createView({
        id: "__alloyId14236"
    });
    $.__views.__alloyId14236 && $.addTopLevelView($.__views.__alloyId14236);
    $.__views.__alloyId14237 = Ti.UI.createView({
        id: "__alloyId14237"
    });
    $.__views.__alloyId14236.add($.__views.__alloyId14237);
    $.__views.__alloyId14238 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14238"
    });
    $.__views.__alloyId14237.add($.__views.__alloyId14238);
    $.__views.__alloyId14239 = Ti.UI.createView({
        id: "__alloyId14239"
    });
    $.__views.__alloyId14239 && $.addTopLevelView($.__views.__alloyId14239);
    $.__views.__alloyId14240 = Ti.UI.createView({
        id: "__alloyId14240"
    });
    $.__views.__alloyId14239.add($.__views.__alloyId14240);
    $.__views.__alloyId14241 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14241"
    });
    $.__views.__alloyId14240.add($.__views.__alloyId14241);
    $.__views.__alloyId14242 = Ti.UI.createView({
        id: "__alloyId14242"
    });
    $.__views.__alloyId14242 && $.addTopLevelView($.__views.__alloyId14242);
    $.__views.__alloyId14243 = Ti.UI.createView({
        id: "__alloyId14243"
    });
    $.__views.__alloyId14242.add($.__views.__alloyId14243);
    $.__views.__alloyId14244 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14244"
    });
    $.__views.__alloyId14243.add($.__views.__alloyId14244);
    $.__views.__alloyId14245 = Ti.UI.createView({
        id: "__alloyId14245"
    });
    $.__views.__alloyId14245 && $.addTopLevelView($.__views.__alloyId14245);
    $.__views.__alloyId14246 = Ti.UI.createView({
        id: "__alloyId14246"
    });
    $.__views.__alloyId14245.add($.__views.__alloyId14246);
    $.__views.__alloyId14247 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14247"
    });
    $.__views.__alloyId14246.add($.__views.__alloyId14247);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;