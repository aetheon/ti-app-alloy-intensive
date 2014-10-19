function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_384";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_384 = Ti.UI.createView({
        id: "widget_384"
    });
    $.__views.widget_384 && $.addTopLevelView($.__views.widget_384);
    $.__views.__alloyId8268 = Ti.UI.createView({
        id: "__alloyId8268"
    });
    $.__views.widget_384.add($.__views.__alloyId8268);
    $.__views.__alloyId8269 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8269"
    });
    $.__views.__alloyId8268.add($.__views.__alloyId8269);
    $.__views.__alloyId8270 = Ti.UI.createView({
        id: "__alloyId8270"
    });
    $.__views.__alloyId8270 && $.addTopLevelView($.__views.__alloyId8270);
    $.__views.__alloyId8271 = Ti.UI.createView({
        id: "__alloyId8271"
    });
    $.__views.__alloyId8270.add($.__views.__alloyId8271);
    $.__views.__alloyId8272 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8272"
    });
    $.__views.__alloyId8271.add($.__views.__alloyId8272);
    $.__views.__alloyId8273 = Ti.UI.createView({
        id: "__alloyId8273"
    });
    $.__views.__alloyId8273 && $.addTopLevelView($.__views.__alloyId8273);
    $.__views.__alloyId8274 = Ti.UI.createView({
        id: "__alloyId8274"
    });
    $.__views.__alloyId8273.add($.__views.__alloyId8274);
    $.__views.__alloyId8275 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8275"
    });
    $.__views.__alloyId8274.add($.__views.__alloyId8275);
    $.__views.__alloyId8276 = Ti.UI.createView({
        id: "__alloyId8276"
    });
    $.__views.__alloyId8276 && $.addTopLevelView($.__views.__alloyId8276);
    $.__views.__alloyId8277 = Ti.UI.createView({
        id: "__alloyId8277"
    });
    $.__views.__alloyId8276.add($.__views.__alloyId8277);
    $.__views.__alloyId8278 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8278"
    });
    $.__views.__alloyId8277.add($.__views.__alloyId8278);
    $.__views.__alloyId8279 = Ti.UI.createView({
        id: "__alloyId8279"
    });
    $.__views.__alloyId8279 && $.addTopLevelView($.__views.__alloyId8279);
    $.__views.__alloyId8280 = Ti.UI.createView({
        id: "__alloyId8280"
    });
    $.__views.__alloyId8279.add($.__views.__alloyId8280);
    $.__views.__alloyId8281 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8281"
    });
    $.__views.__alloyId8280.add($.__views.__alloyId8281);
    $.__views.__alloyId8282 = Ti.UI.createView({
        id: "__alloyId8282"
    });
    $.__views.__alloyId8282 && $.addTopLevelView($.__views.__alloyId8282);
    $.__views.__alloyId8283 = Ti.UI.createView({
        id: "__alloyId8283"
    });
    $.__views.__alloyId8282.add($.__views.__alloyId8283);
    $.__views.__alloyId8284 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8284"
    });
    $.__views.__alloyId8283.add($.__views.__alloyId8284);
    $.__views.__alloyId8285 = Ti.UI.createView({
        id: "__alloyId8285"
    });
    $.__views.__alloyId8285 && $.addTopLevelView($.__views.__alloyId8285);
    $.__views.__alloyId8286 = Ti.UI.createView({
        id: "__alloyId8286"
    });
    $.__views.__alloyId8285.add($.__views.__alloyId8286);
    $.__views.__alloyId8287 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8287"
    });
    $.__views.__alloyId8286.add($.__views.__alloyId8287);
    $.__views.__alloyId8288 = Ti.UI.createView({
        id: "__alloyId8288"
    });
    $.__views.__alloyId8288 && $.addTopLevelView($.__views.__alloyId8288);
    $.__views.__alloyId8289 = Ti.UI.createView({
        id: "__alloyId8289"
    });
    $.__views.__alloyId8288.add($.__views.__alloyId8289);
    $.__views.__alloyId8290 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8290"
    });
    $.__views.__alloyId8289.add($.__views.__alloyId8290);
    $.__views.__alloyId8291 = Ti.UI.createView({
        id: "__alloyId8291"
    });
    $.__views.__alloyId8291 && $.addTopLevelView($.__views.__alloyId8291);
    $.__views.__alloyId8292 = Ti.UI.createView({
        id: "__alloyId8292"
    });
    $.__views.__alloyId8291.add($.__views.__alloyId8292);
    $.__views.__alloyId8293 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId8293"
    });
    $.__views.__alloyId8292.add($.__views.__alloyId8293);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;