function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_902";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_902 = Ti.UI.createView({
        id: "widget_902"
    });
    $.__views.widget_902 && $.addTopLevelView($.__views.widget_902);
    $.__views.__alloyId23244 = Ti.UI.createView({
        id: "__alloyId23244"
    });
    $.__views.widget_902.add($.__views.__alloyId23244);
    $.__views.__alloyId23245 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23245"
    });
    $.__views.__alloyId23244.add($.__views.__alloyId23245);
    $.__views.__alloyId23246 = Ti.UI.createView({
        id: "__alloyId23246"
    });
    $.__views.__alloyId23246 && $.addTopLevelView($.__views.__alloyId23246);
    $.__views.__alloyId23247 = Ti.UI.createView({
        id: "__alloyId23247"
    });
    $.__views.__alloyId23246.add($.__views.__alloyId23247);
    $.__views.__alloyId23248 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23248"
    });
    $.__views.__alloyId23247.add($.__views.__alloyId23248);
    $.__views.__alloyId23249 = Ti.UI.createView({
        id: "__alloyId23249"
    });
    $.__views.__alloyId23249 && $.addTopLevelView($.__views.__alloyId23249);
    $.__views.__alloyId23250 = Ti.UI.createView({
        id: "__alloyId23250"
    });
    $.__views.__alloyId23249.add($.__views.__alloyId23250);
    $.__views.__alloyId23251 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23251"
    });
    $.__views.__alloyId23250.add($.__views.__alloyId23251);
    $.__views.__alloyId23252 = Ti.UI.createView({
        id: "__alloyId23252"
    });
    $.__views.__alloyId23252 && $.addTopLevelView($.__views.__alloyId23252);
    $.__views.__alloyId23253 = Ti.UI.createView({
        id: "__alloyId23253"
    });
    $.__views.__alloyId23252.add($.__views.__alloyId23253);
    $.__views.__alloyId23254 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23254"
    });
    $.__views.__alloyId23253.add($.__views.__alloyId23254);
    $.__views.__alloyId23255 = Ti.UI.createView({
        id: "__alloyId23255"
    });
    $.__views.__alloyId23255 && $.addTopLevelView($.__views.__alloyId23255);
    $.__views.__alloyId23256 = Ti.UI.createView({
        id: "__alloyId23256"
    });
    $.__views.__alloyId23255.add($.__views.__alloyId23256);
    $.__views.__alloyId23257 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23257"
    });
    $.__views.__alloyId23256.add($.__views.__alloyId23257);
    $.__views.__alloyId23258 = Ti.UI.createView({
        id: "__alloyId23258"
    });
    $.__views.__alloyId23258 && $.addTopLevelView($.__views.__alloyId23258);
    $.__views.__alloyId23259 = Ti.UI.createView({
        id: "__alloyId23259"
    });
    $.__views.__alloyId23258.add($.__views.__alloyId23259);
    $.__views.__alloyId23260 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23260"
    });
    $.__views.__alloyId23259.add($.__views.__alloyId23260);
    $.__views.__alloyId23261 = Ti.UI.createView({
        id: "__alloyId23261"
    });
    $.__views.__alloyId23261 && $.addTopLevelView($.__views.__alloyId23261);
    $.__views.__alloyId23262 = Ti.UI.createView({
        id: "__alloyId23262"
    });
    $.__views.__alloyId23261.add($.__views.__alloyId23262);
    $.__views.__alloyId23263 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23263"
    });
    $.__views.__alloyId23262.add($.__views.__alloyId23263);
    $.__views.__alloyId23264 = Ti.UI.createView({
        id: "__alloyId23264"
    });
    $.__views.__alloyId23264 && $.addTopLevelView($.__views.__alloyId23264);
    $.__views.__alloyId23265 = Ti.UI.createView({
        id: "__alloyId23265"
    });
    $.__views.__alloyId23264.add($.__views.__alloyId23265);
    $.__views.__alloyId23266 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23266"
    });
    $.__views.__alloyId23265.add($.__views.__alloyId23266);
    $.__views.__alloyId23267 = Ti.UI.createView({
        id: "__alloyId23267"
    });
    $.__views.__alloyId23267 && $.addTopLevelView($.__views.__alloyId23267);
    $.__views.__alloyId23268 = Ti.UI.createView({
        id: "__alloyId23268"
    });
    $.__views.__alloyId23267.add($.__views.__alloyId23268);
    $.__views.__alloyId23269 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23269"
    });
    $.__views.__alloyId23268.add($.__views.__alloyId23269);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;