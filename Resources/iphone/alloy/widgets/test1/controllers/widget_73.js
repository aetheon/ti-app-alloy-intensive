function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_73";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_73 = Ti.UI.createView({
        id: "widget_73"
    });
    $.__views.widget_73 && $.addTopLevelView($.__views.widget_73);
    $.__views.__alloyId18252 = Ti.UI.createView({
        id: "__alloyId18252"
    });
    $.__views.widget_73.add($.__views.__alloyId18252);
    $.__views.__alloyId18253 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18253"
    });
    $.__views.__alloyId18252.add($.__views.__alloyId18253);
    $.__views.__alloyId18254 = Ti.UI.createView({
        id: "__alloyId18254"
    });
    $.__views.__alloyId18254 && $.addTopLevelView($.__views.__alloyId18254);
    $.__views.__alloyId18255 = Ti.UI.createView({
        id: "__alloyId18255"
    });
    $.__views.__alloyId18254.add($.__views.__alloyId18255);
    $.__views.__alloyId18256 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18256"
    });
    $.__views.__alloyId18255.add($.__views.__alloyId18256);
    $.__views.__alloyId18257 = Ti.UI.createView({
        id: "__alloyId18257"
    });
    $.__views.__alloyId18257 && $.addTopLevelView($.__views.__alloyId18257);
    $.__views.__alloyId18258 = Ti.UI.createView({
        id: "__alloyId18258"
    });
    $.__views.__alloyId18257.add($.__views.__alloyId18258);
    $.__views.__alloyId18259 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18259"
    });
    $.__views.__alloyId18258.add($.__views.__alloyId18259);
    $.__views.__alloyId18260 = Ti.UI.createView({
        id: "__alloyId18260"
    });
    $.__views.__alloyId18260 && $.addTopLevelView($.__views.__alloyId18260);
    $.__views.__alloyId18261 = Ti.UI.createView({
        id: "__alloyId18261"
    });
    $.__views.__alloyId18260.add($.__views.__alloyId18261);
    $.__views.__alloyId18262 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18262"
    });
    $.__views.__alloyId18261.add($.__views.__alloyId18262);
    $.__views.__alloyId18263 = Ti.UI.createView({
        id: "__alloyId18263"
    });
    $.__views.__alloyId18263 && $.addTopLevelView($.__views.__alloyId18263);
    $.__views.__alloyId18264 = Ti.UI.createView({
        id: "__alloyId18264"
    });
    $.__views.__alloyId18263.add($.__views.__alloyId18264);
    $.__views.__alloyId18265 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18265"
    });
    $.__views.__alloyId18264.add($.__views.__alloyId18265);
    $.__views.__alloyId18266 = Ti.UI.createView({
        id: "__alloyId18266"
    });
    $.__views.__alloyId18266 && $.addTopLevelView($.__views.__alloyId18266);
    $.__views.__alloyId18267 = Ti.UI.createView({
        id: "__alloyId18267"
    });
    $.__views.__alloyId18266.add($.__views.__alloyId18267);
    $.__views.__alloyId18268 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18268"
    });
    $.__views.__alloyId18267.add($.__views.__alloyId18268);
    $.__views.__alloyId18269 = Ti.UI.createView({
        id: "__alloyId18269"
    });
    $.__views.__alloyId18269 && $.addTopLevelView($.__views.__alloyId18269);
    $.__views.__alloyId18270 = Ti.UI.createView({
        id: "__alloyId18270"
    });
    $.__views.__alloyId18269.add($.__views.__alloyId18270);
    $.__views.__alloyId18271 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18271"
    });
    $.__views.__alloyId18270.add($.__views.__alloyId18271);
    $.__views.__alloyId18272 = Ti.UI.createView({
        id: "__alloyId18272"
    });
    $.__views.__alloyId18272 && $.addTopLevelView($.__views.__alloyId18272);
    $.__views.__alloyId18273 = Ti.UI.createView({
        id: "__alloyId18273"
    });
    $.__views.__alloyId18272.add($.__views.__alloyId18273);
    $.__views.__alloyId18274 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18274"
    });
    $.__views.__alloyId18273.add($.__views.__alloyId18274);
    $.__views.__alloyId18275 = Ti.UI.createView({
        id: "__alloyId18275"
    });
    $.__views.__alloyId18275 && $.addTopLevelView($.__views.__alloyId18275);
    $.__views.__alloyId18276 = Ti.UI.createView({
        id: "__alloyId18276"
    });
    $.__views.__alloyId18275.add($.__views.__alloyId18276);
    $.__views.__alloyId18277 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18277"
    });
    $.__views.__alloyId18276.add($.__views.__alloyId18277);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;