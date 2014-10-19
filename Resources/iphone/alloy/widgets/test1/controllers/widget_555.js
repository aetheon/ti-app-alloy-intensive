function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_555";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_555 = Ti.UI.createView({
        id: "widget_555"
    });
    $.__views.widget_555 && $.addTopLevelView($.__views.widget_555);
    $.__views.__alloyId13208 = Ti.UI.createView({
        id: "__alloyId13208"
    });
    $.__views.widget_555.add($.__views.__alloyId13208);
    $.__views.__alloyId13209 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13209"
    });
    $.__views.__alloyId13208.add($.__views.__alloyId13209);
    $.__views.__alloyId13210 = Ti.UI.createView({
        id: "__alloyId13210"
    });
    $.__views.__alloyId13210 && $.addTopLevelView($.__views.__alloyId13210);
    $.__views.__alloyId13211 = Ti.UI.createView({
        id: "__alloyId13211"
    });
    $.__views.__alloyId13210.add($.__views.__alloyId13211);
    $.__views.__alloyId13212 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13212"
    });
    $.__views.__alloyId13211.add($.__views.__alloyId13212);
    $.__views.__alloyId13213 = Ti.UI.createView({
        id: "__alloyId13213"
    });
    $.__views.__alloyId13213 && $.addTopLevelView($.__views.__alloyId13213);
    $.__views.__alloyId13214 = Ti.UI.createView({
        id: "__alloyId13214"
    });
    $.__views.__alloyId13213.add($.__views.__alloyId13214);
    $.__views.__alloyId13215 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13215"
    });
    $.__views.__alloyId13214.add($.__views.__alloyId13215);
    $.__views.__alloyId13216 = Ti.UI.createView({
        id: "__alloyId13216"
    });
    $.__views.__alloyId13216 && $.addTopLevelView($.__views.__alloyId13216);
    $.__views.__alloyId13217 = Ti.UI.createView({
        id: "__alloyId13217"
    });
    $.__views.__alloyId13216.add($.__views.__alloyId13217);
    $.__views.__alloyId13218 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13218"
    });
    $.__views.__alloyId13217.add($.__views.__alloyId13218);
    $.__views.__alloyId13219 = Ti.UI.createView({
        id: "__alloyId13219"
    });
    $.__views.__alloyId13219 && $.addTopLevelView($.__views.__alloyId13219);
    $.__views.__alloyId13220 = Ti.UI.createView({
        id: "__alloyId13220"
    });
    $.__views.__alloyId13219.add($.__views.__alloyId13220);
    $.__views.__alloyId13221 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13221"
    });
    $.__views.__alloyId13220.add($.__views.__alloyId13221);
    $.__views.__alloyId13222 = Ti.UI.createView({
        id: "__alloyId13222"
    });
    $.__views.__alloyId13222 && $.addTopLevelView($.__views.__alloyId13222);
    $.__views.__alloyId13223 = Ti.UI.createView({
        id: "__alloyId13223"
    });
    $.__views.__alloyId13222.add($.__views.__alloyId13223);
    $.__views.__alloyId13224 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13224"
    });
    $.__views.__alloyId13223.add($.__views.__alloyId13224);
    $.__views.__alloyId13225 = Ti.UI.createView({
        id: "__alloyId13225"
    });
    $.__views.__alloyId13225 && $.addTopLevelView($.__views.__alloyId13225);
    $.__views.__alloyId13226 = Ti.UI.createView({
        id: "__alloyId13226"
    });
    $.__views.__alloyId13225.add($.__views.__alloyId13226);
    $.__views.__alloyId13227 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13227"
    });
    $.__views.__alloyId13226.add($.__views.__alloyId13227);
    $.__views.__alloyId13228 = Ti.UI.createView({
        id: "__alloyId13228"
    });
    $.__views.__alloyId13228 && $.addTopLevelView($.__views.__alloyId13228);
    $.__views.__alloyId13229 = Ti.UI.createView({
        id: "__alloyId13229"
    });
    $.__views.__alloyId13228.add($.__views.__alloyId13229);
    $.__views.__alloyId13230 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13230"
    });
    $.__views.__alloyId13229.add($.__views.__alloyId13230);
    $.__views.__alloyId13231 = Ti.UI.createView({
        id: "__alloyId13231"
    });
    $.__views.__alloyId13231 && $.addTopLevelView($.__views.__alloyId13231);
    $.__views.__alloyId13232 = Ti.UI.createView({
        id: "__alloyId13232"
    });
    $.__views.__alloyId13231.add($.__views.__alloyId13232);
    $.__views.__alloyId13233 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13233"
    });
    $.__views.__alloyId13232.add($.__views.__alloyId13233);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;