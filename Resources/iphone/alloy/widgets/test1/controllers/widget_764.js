function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_764";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_764 = Ti.UI.createView({
        id: "widget_764"
    });
    $.__views.widget_764 && $.addTopLevelView($.__views.widget_764);
    $.__views.__alloyId19240 = Ti.UI.createView({
        id: "__alloyId19240"
    });
    $.__views.widget_764.add($.__views.__alloyId19240);
    $.__views.__alloyId19241 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19241"
    });
    $.__views.__alloyId19240.add($.__views.__alloyId19241);
    $.__views.__alloyId19242 = Ti.UI.createView({
        id: "__alloyId19242"
    });
    $.__views.__alloyId19242 && $.addTopLevelView($.__views.__alloyId19242);
    $.__views.__alloyId19243 = Ti.UI.createView({
        id: "__alloyId19243"
    });
    $.__views.__alloyId19242.add($.__views.__alloyId19243);
    $.__views.__alloyId19244 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19244"
    });
    $.__views.__alloyId19243.add($.__views.__alloyId19244);
    $.__views.__alloyId19245 = Ti.UI.createView({
        id: "__alloyId19245"
    });
    $.__views.__alloyId19245 && $.addTopLevelView($.__views.__alloyId19245);
    $.__views.__alloyId19246 = Ti.UI.createView({
        id: "__alloyId19246"
    });
    $.__views.__alloyId19245.add($.__views.__alloyId19246);
    $.__views.__alloyId19247 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19247"
    });
    $.__views.__alloyId19246.add($.__views.__alloyId19247);
    $.__views.__alloyId19248 = Ti.UI.createView({
        id: "__alloyId19248"
    });
    $.__views.__alloyId19248 && $.addTopLevelView($.__views.__alloyId19248);
    $.__views.__alloyId19249 = Ti.UI.createView({
        id: "__alloyId19249"
    });
    $.__views.__alloyId19248.add($.__views.__alloyId19249);
    $.__views.__alloyId19250 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19250"
    });
    $.__views.__alloyId19249.add($.__views.__alloyId19250);
    $.__views.__alloyId19251 = Ti.UI.createView({
        id: "__alloyId19251"
    });
    $.__views.__alloyId19251 && $.addTopLevelView($.__views.__alloyId19251);
    $.__views.__alloyId19252 = Ti.UI.createView({
        id: "__alloyId19252"
    });
    $.__views.__alloyId19251.add($.__views.__alloyId19252);
    $.__views.__alloyId19253 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19253"
    });
    $.__views.__alloyId19252.add($.__views.__alloyId19253);
    $.__views.__alloyId19254 = Ti.UI.createView({
        id: "__alloyId19254"
    });
    $.__views.__alloyId19254 && $.addTopLevelView($.__views.__alloyId19254);
    $.__views.__alloyId19255 = Ti.UI.createView({
        id: "__alloyId19255"
    });
    $.__views.__alloyId19254.add($.__views.__alloyId19255);
    $.__views.__alloyId19256 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19256"
    });
    $.__views.__alloyId19255.add($.__views.__alloyId19256);
    $.__views.__alloyId19257 = Ti.UI.createView({
        id: "__alloyId19257"
    });
    $.__views.__alloyId19257 && $.addTopLevelView($.__views.__alloyId19257);
    $.__views.__alloyId19258 = Ti.UI.createView({
        id: "__alloyId19258"
    });
    $.__views.__alloyId19257.add($.__views.__alloyId19258);
    $.__views.__alloyId19259 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19259"
    });
    $.__views.__alloyId19258.add($.__views.__alloyId19259);
    $.__views.__alloyId19260 = Ti.UI.createView({
        id: "__alloyId19260"
    });
    $.__views.__alloyId19260 && $.addTopLevelView($.__views.__alloyId19260);
    $.__views.__alloyId19261 = Ti.UI.createView({
        id: "__alloyId19261"
    });
    $.__views.__alloyId19260.add($.__views.__alloyId19261);
    $.__views.__alloyId19262 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19262"
    });
    $.__views.__alloyId19261.add($.__views.__alloyId19262);
    $.__views.__alloyId19263 = Ti.UI.createView({
        id: "__alloyId19263"
    });
    $.__views.__alloyId19263 && $.addTopLevelView($.__views.__alloyId19263);
    $.__views.__alloyId19264 = Ti.UI.createView({
        id: "__alloyId19264"
    });
    $.__views.__alloyId19263.add($.__views.__alloyId19264);
    $.__views.__alloyId19265 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19265"
    });
    $.__views.__alloyId19264.add($.__views.__alloyId19265);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;