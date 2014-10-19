function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_833";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_833 = Ti.UI.createView({
        id: "widget_833"
    });
    $.__views.widget_833 && $.addTopLevelView($.__views.widget_833);
    $.__views.__alloyId21242 = Ti.UI.createView({
        id: "__alloyId21242"
    });
    $.__views.widget_833.add($.__views.__alloyId21242);
    $.__views.__alloyId21243 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21243"
    });
    $.__views.__alloyId21242.add($.__views.__alloyId21243);
    $.__views.__alloyId21244 = Ti.UI.createView({
        id: "__alloyId21244"
    });
    $.__views.__alloyId21244 && $.addTopLevelView($.__views.__alloyId21244);
    $.__views.__alloyId21245 = Ti.UI.createView({
        id: "__alloyId21245"
    });
    $.__views.__alloyId21244.add($.__views.__alloyId21245);
    $.__views.__alloyId21246 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21246"
    });
    $.__views.__alloyId21245.add($.__views.__alloyId21246);
    $.__views.__alloyId21247 = Ti.UI.createView({
        id: "__alloyId21247"
    });
    $.__views.__alloyId21247 && $.addTopLevelView($.__views.__alloyId21247);
    $.__views.__alloyId21248 = Ti.UI.createView({
        id: "__alloyId21248"
    });
    $.__views.__alloyId21247.add($.__views.__alloyId21248);
    $.__views.__alloyId21249 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21249"
    });
    $.__views.__alloyId21248.add($.__views.__alloyId21249);
    $.__views.__alloyId21250 = Ti.UI.createView({
        id: "__alloyId21250"
    });
    $.__views.__alloyId21250 && $.addTopLevelView($.__views.__alloyId21250);
    $.__views.__alloyId21251 = Ti.UI.createView({
        id: "__alloyId21251"
    });
    $.__views.__alloyId21250.add($.__views.__alloyId21251);
    $.__views.__alloyId21252 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21252"
    });
    $.__views.__alloyId21251.add($.__views.__alloyId21252);
    $.__views.__alloyId21253 = Ti.UI.createView({
        id: "__alloyId21253"
    });
    $.__views.__alloyId21253 && $.addTopLevelView($.__views.__alloyId21253);
    $.__views.__alloyId21254 = Ti.UI.createView({
        id: "__alloyId21254"
    });
    $.__views.__alloyId21253.add($.__views.__alloyId21254);
    $.__views.__alloyId21255 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21255"
    });
    $.__views.__alloyId21254.add($.__views.__alloyId21255);
    $.__views.__alloyId21256 = Ti.UI.createView({
        id: "__alloyId21256"
    });
    $.__views.__alloyId21256 && $.addTopLevelView($.__views.__alloyId21256);
    $.__views.__alloyId21257 = Ti.UI.createView({
        id: "__alloyId21257"
    });
    $.__views.__alloyId21256.add($.__views.__alloyId21257);
    $.__views.__alloyId21258 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21258"
    });
    $.__views.__alloyId21257.add($.__views.__alloyId21258);
    $.__views.__alloyId21259 = Ti.UI.createView({
        id: "__alloyId21259"
    });
    $.__views.__alloyId21259 && $.addTopLevelView($.__views.__alloyId21259);
    $.__views.__alloyId21260 = Ti.UI.createView({
        id: "__alloyId21260"
    });
    $.__views.__alloyId21259.add($.__views.__alloyId21260);
    $.__views.__alloyId21261 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21261"
    });
    $.__views.__alloyId21260.add($.__views.__alloyId21261);
    $.__views.__alloyId21262 = Ti.UI.createView({
        id: "__alloyId21262"
    });
    $.__views.__alloyId21262 && $.addTopLevelView($.__views.__alloyId21262);
    $.__views.__alloyId21263 = Ti.UI.createView({
        id: "__alloyId21263"
    });
    $.__views.__alloyId21262.add($.__views.__alloyId21263);
    $.__views.__alloyId21264 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21264"
    });
    $.__views.__alloyId21263.add($.__views.__alloyId21264);
    $.__views.__alloyId21265 = Ti.UI.createView({
        id: "__alloyId21265"
    });
    $.__views.__alloyId21265 && $.addTopLevelView($.__views.__alloyId21265);
    $.__views.__alloyId21266 = Ti.UI.createView({
        id: "__alloyId21266"
    });
    $.__views.__alloyId21265.add($.__views.__alloyId21266);
    $.__views.__alloyId21267 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21267"
    });
    $.__views.__alloyId21266.add($.__views.__alloyId21267);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;