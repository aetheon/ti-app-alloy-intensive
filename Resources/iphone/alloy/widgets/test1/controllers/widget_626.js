function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_626";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_626 = Ti.UI.createView({
        id: "widget_626"
    });
    $.__views.widget_626 && $.addTopLevelView($.__views.widget_626);
    $.__views.__alloyId15262 = Ti.UI.createView({
        id: "__alloyId15262"
    });
    $.__views.widget_626.add($.__views.__alloyId15262);
    $.__views.__alloyId15263 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15263"
    });
    $.__views.__alloyId15262.add($.__views.__alloyId15263);
    $.__views.__alloyId15264 = Ti.UI.createView({
        id: "__alloyId15264"
    });
    $.__views.__alloyId15264 && $.addTopLevelView($.__views.__alloyId15264);
    $.__views.__alloyId15265 = Ti.UI.createView({
        id: "__alloyId15265"
    });
    $.__views.__alloyId15264.add($.__views.__alloyId15265);
    $.__views.__alloyId15266 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15266"
    });
    $.__views.__alloyId15265.add($.__views.__alloyId15266);
    $.__views.__alloyId15267 = Ti.UI.createView({
        id: "__alloyId15267"
    });
    $.__views.__alloyId15267 && $.addTopLevelView($.__views.__alloyId15267);
    $.__views.__alloyId15268 = Ti.UI.createView({
        id: "__alloyId15268"
    });
    $.__views.__alloyId15267.add($.__views.__alloyId15268);
    $.__views.__alloyId15269 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15269"
    });
    $.__views.__alloyId15268.add($.__views.__alloyId15269);
    $.__views.__alloyId15270 = Ti.UI.createView({
        id: "__alloyId15270"
    });
    $.__views.__alloyId15270 && $.addTopLevelView($.__views.__alloyId15270);
    $.__views.__alloyId15271 = Ti.UI.createView({
        id: "__alloyId15271"
    });
    $.__views.__alloyId15270.add($.__views.__alloyId15271);
    $.__views.__alloyId15272 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15272"
    });
    $.__views.__alloyId15271.add($.__views.__alloyId15272);
    $.__views.__alloyId15273 = Ti.UI.createView({
        id: "__alloyId15273"
    });
    $.__views.__alloyId15273 && $.addTopLevelView($.__views.__alloyId15273);
    $.__views.__alloyId15274 = Ti.UI.createView({
        id: "__alloyId15274"
    });
    $.__views.__alloyId15273.add($.__views.__alloyId15274);
    $.__views.__alloyId15275 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15275"
    });
    $.__views.__alloyId15274.add($.__views.__alloyId15275);
    $.__views.__alloyId15276 = Ti.UI.createView({
        id: "__alloyId15276"
    });
    $.__views.__alloyId15276 && $.addTopLevelView($.__views.__alloyId15276);
    $.__views.__alloyId15277 = Ti.UI.createView({
        id: "__alloyId15277"
    });
    $.__views.__alloyId15276.add($.__views.__alloyId15277);
    $.__views.__alloyId15278 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15278"
    });
    $.__views.__alloyId15277.add($.__views.__alloyId15278);
    $.__views.__alloyId15279 = Ti.UI.createView({
        id: "__alloyId15279"
    });
    $.__views.__alloyId15279 && $.addTopLevelView($.__views.__alloyId15279);
    $.__views.__alloyId15280 = Ti.UI.createView({
        id: "__alloyId15280"
    });
    $.__views.__alloyId15279.add($.__views.__alloyId15280);
    $.__views.__alloyId15281 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15281"
    });
    $.__views.__alloyId15280.add($.__views.__alloyId15281);
    $.__views.__alloyId15282 = Ti.UI.createView({
        id: "__alloyId15282"
    });
    $.__views.__alloyId15282 && $.addTopLevelView($.__views.__alloyId15282);
    $.__views.__alloyId15283 = Ti.UI.createView({
        id: "__alloyId15283"
    });
    $.__views.__alloyId15282.add($.__views.__alloyId15283);
    $.__views.__alloyId15284 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15284"
    });
    $.__views.__alloyId15283.add($.__views.__alloyId15284);
    $.__views.__alloyId15285 = Ti.UI.createView({
        id: "__alloyId15285"
    });
    $.__views.__alloyId15285 && $.addTopLevelView($.__views.__alloyId15285);
    $.__views.__alloyId15286 = Ti.UI.createView({
        id: "__alloyId15286"
    });
    $.__views.__alloyId15285.add($.__views.__alloyId15286);
    $.__views.__alloyId15287 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15287"
    });
    $.__views.__alloyId15286.add($.__views.__alloyId15287);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;