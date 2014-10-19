function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_834";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_834 = Ti.UI.createView({
        id: "widget_834"
    });
    $.__views.widget_834 && $.addTopLevelView($.__views.widget_834);
    $.__views.__alloyId21268 = Ti.UI.createView({
        id: "__alloyId21268"
    });
    $.__views.widget_834.add($.__views.__alloyId21268);
    $.__views.__alloyId21269 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21269"
    });
    $.__views.__alloyId21268.add($.__views.__alloyId21269);
    $.__views.__alloyId21270 = Ti.UI.createView({
        id: "__alloyId21270"
    });
    $.__views.__alloyId21270 && $.addTopLevelView($.__views.__alloyId21270);
    $.__views.__alloyId21271 = Ti.UI.createView({
        id: "__alloyId21271"
    });
    $.__views.__alloyId21270.add($.__views.__alloyId21271);
    $.__views.__alloyId21272 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21272"
    });
    $.__views.__alloyId21271.add($.__views.__alloyId21272);
    $.__views.__alloyId21273 = Ti.UI.createView({
        id: "__alloyId21273"
    });
    $.__views.__alloyId21273 && $.addTopLevelView($.__views.__alloyId21273);
    $.__views.__alloyId21274 = Ti.UI.createView({
        id: "__alloyId21274"
    });
    $.__views.__alloyId21273.add($.__views.__alloyId21274);
    $.__views.__alloyId21275 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21275"
    });
    $.__views.__alloyId21274.add($.__views.__alloyId21275);
    $.__views.__alloyId21276 = Ti.UI.createView({
        id: "__alloyId21276"
    });
    $.__views.__alloyId21276 && $.addTopLevelView($.__views.__alloyId21276);
    $.__views.__alloyId21277 = Ti.UI.createView({
        id: "__alloyId21277"
    });
    $.__views.__alloyId21276.add($.__views.__alloyId21277);
    $.__views.__alloyId21278 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21278"
    });
    $.__views.__alloyId21277.add($.__views.__alloyId21278);
    $.__views.__alloyId21279 = Ti.UI.createView({
        id: "__alloyId21279"
    });
    $.__views.__alloyId21279 && $.addTopLevelView($.__views.__alloyId21279);
    $.__views.__alloyId21280 = Ti.UI.createView({
        id: "__alloyId21280"
    });
    $.__views.__alloyId21279.add($.__views.__alloyId21280);
    $.__views.__alloyId21281 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21281"
    });
    $.__views.__alloyId21280.add($.__views.__alloyId21281);
    $.__views.__alloyId21282 = Ti.UI.createView({
        id: "__alloyId21282"
    });
    $.__views.__alloyId21282 && $.addTopLevelView($.__views.__alloyId21282);
    $.__views.__alloyId21283 = Ti.UI.createView({
        id: "__alloyId21283"
    });
    $.__views.__alloyId21282.add($.__views.__alloyId21283);
    $.__views.__alloyId21284 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21284"
    });
    $.__views.__alloyId21283.add($.__views.__alloyId21284);
    $.__views.__alloyId21285 = Ti.UI.createView({
        id: "__alloyId21285"
    });
    $.__views.__alloyId21285 && $.addTopLevelView($.__views.__alloyId21285);
    $.__views.__alloyId21286 = Ti.UI.createView({
        id: "__alloyId21286"
    });
    $.__views.__alloyId21285.add($.__views.__alloyId21286);
    $.__views.__alloyId21287 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21287"
    });
    $.__views.__alloyId21286.add($.__views.__alloyId21287);
    $.__views.__alloyId21288 = Ti.UI.createView({
        id: "__alloyId21288"
    });
    $.__views.__alloyId21288 && $.addTopLevelView($.__views.__alloyId21288);
    $.__views.__alloyId21289 = Ti.UI.createView({
        id: "__alloyId21289"
    });
    $.__views.__alloyId21288.add($.__views.__alloyId21289);
    $.__views.__alloyId21290 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21290"
    });
    $.__views.__alloyId21289.add($.__views.__alloyId21290);
    $.__views.__alloyId21291 = Ti.UI.createView({
        id: "__alloyId21291"
    });
    $.__views.__alloyId21291 && $.addTopLevelView($.__views.__alloyId21291);
    $.__views.__alloyId21292 = Ti.UI.createView({
        id: "__alloyId21292"
    });
    $.__views.__alloyId21291.add($.__views.__alloyId21292);
    $.__views.__alloyId21293 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21293"
    });
    $.__views.__alloyId21292.add($.__views.__alloyId21293);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;