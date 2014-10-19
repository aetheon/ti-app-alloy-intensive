function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_28";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_28 = Ti.UI.createView({
        id: "widget_28"
    });
    $.__views.widget_28 && $.addTopLevelView($.__views.widget_28);
    $.__views.__alloyId5252 = Ti.UI.createView({
        id: "__alloyId5252"
    });
    $.__views.widget_28.add($.__views.__alloyId5252);
    $.__views.__alloyId5253 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5253"
    });
    $.__views.__alloyId5252.add($.__views.__alloyId5253);
    $.__views.__alloyId5254 = Ti.UI.createView({
        id: "__alloyId5254"
    });
    $.__views.__alloyId5254 && $.addTopLevelView($.__views.__alloyId5254);
    $.__views.__alloyId5255 = Ti.UI.createView({
        id: "__alloyId5255"
    });
    $.__views.__alloyId5254.add($.__views.__alloyId5255);
    $.__views.__alloyId5256 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5256"
    });
    $.__views.__alloyId5255.add($.__views.__alloyId5256);
    $.__views.__alloyId5257 = Ti.UI.createView({
        id: "__alloyId5257"
    });
    $.__views.__alloyId5257 && $.addTopLevelView($.__views.__alloyId5257);
    $.__views.__alloyId5258 = Ti.UI.createView({
        id: "__alloyId5258"
    });
    $.__views.__alloyId5257.add($.__views.__alloyId5258);
    $.__views.__alloyId5259 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5259"
    });
    $.__views.__alloyId5258.add($.__views.__alloyId5259);
    $.__views.__alloyId5260 = Ti.UI.createView({
        id: "__alloyId5260"
    });
    $.__views.__alloyId5260 && $.addTopLevelView($.__views.__alloyId5260);
    $.__views.__alloyId5261 = Ti.UI.createView({
        id: "__alloyId5261"
    });
    $.__views.__alloyId5260.add($.__views.__alloyId5261);
    $.__views.__alloyId5262 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5262"
    });
    $.__views.__alloyId5261.add($.__views.__alloyId5262);
    $.__views.__alloyId5263 = Ti.UI.createView({
        id: "__alloyId5263"
    });
    $.__views.__alloyId5263 && $.addTopLevelView($.__views.__alloyId5263);
    $.__views.__alloyId5264 = Ti.UI.createView({
        id: "__alloyId5264"
    });
    $.__views.__alloyId5263.add($.__views.__alloyId5264);
    $.__views.__alloyId5265 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5265"
    });
    $.__views.__alloyId5264.add($.__views.__alloyId5265);
    $.__views.__alloyId5266 = Ti.UI.createView({
        id: "__alloyId5266"
    });
    $.__views.__alloyId5266 && $.addTopLevelView($.__views.__alloyId5266);
    $.__views.__alloyId5267 = Ti.UI.createView({
        id: "__alloyId5267"
    });
    $.__views.__alloyId5266.add($.__views.__alloyId5267);
    $.__views.__alloyId5268 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5268"
    });
    $.__views.__alloyId5267.add($.__views.__alloyId5268);
    $.__views.__alloyId5269 = Ti.UI.createView({
        id: "__alloyId5269"
    });
    $.__views.__alloyId5269 && $.addTopLevelView($.__views.__alloyId5269);
    $.__views.__alloyId5270 = Ti.UI.createView({
        id: "__alloyId5270"
    });
    $.__views.__alloyId5269.add($.__views.__alloyId5270);
    $.__views.__alloyId5271 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5271"
    });
    $.__views.__alloyId5270.add($.__views.__alloyId5271);
    $.__views.__alloyId5272 = Ti.UI.createView({
        id: "__alloyId5272"
    });
    $.__views.__alloyId5272 && $.addTopLevelView($.__views.__alloyId5272);
    $.__views.__alloyId5273 = Ti.UI.createView({
        id: "__alloyId5273"
    });
    $.__views.__alloyId5272.add($.__views.__alloyId5273);
    $.__views.__alloyId5274 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5274"
    });
    $.__views.__alloyId5273.add($.__views.__alloyId5274);
    $.__views.__alloyId5275 = Ti.UI.createView({
        id: "__alloyId5275"
    });
    $.__views.__alloyId5275 && $.addTopLevelView($.__views.__alloyId5275);
    $.__views.__alloyId5276 = Ti.UI.createView({
        id: "__alloyId5276"
    });
    $.__views.__alloyId5275.add($.__views.__alloyId5276);
    $.__views.__alloyId5277 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5277"
    });
    $.__views.__alloyId5276.add($.__views.__alloyId5277);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;