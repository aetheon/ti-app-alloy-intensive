function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_522";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_522 = Ti.UI.createView({
        id: "widget_522"
    });
    $.__views.widget_522 && $.addTopLevelView($.__views.widget_522);
    $.__views.__alloyId12272 = Ti.UI.createView({
        id: "__alloyId12272"
    });
    $.__views.widget_522.add($.__views.__alloyId12272);
    $.__views.__alloyId12273 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12273"
    });
    $.__views.__alloyId12272.add($.__views.__alloyId12273);
    $.__views.__alloyId12274 = Ti.UI.createView({
        id: "__alloyId12274"
    });
    $.__views.__alloyId12274 && $.addTopLevelView($.__views.__alloyId12274);
    $.__views.__alloyId12275 = Ti.UI.createView({
        id: "__alloyId12275"
    });
    $.__views.__alloyId12274.add($.__views.__alloyId12275);
    $.__views.__alloyId12276 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12276"
    });
    $.__views.__alloyId12275.add($.__views.__alloyId12276);
    $.__views.__alloyId12277 = Ti.UI.createView({
        id: "__alloyId12277"
    });
    $.__views.__alloyId12277 && $.addTopLevelView($.__views.__alloyId12277);
    $.__views.__alloyId12278 = Ti.UI.createView({
        id: "__alloyId12278"
    });
    $.__views.__alloyId12277.add($.__views.__alloyId12278);
    $.__views.__alloyId12279 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12279"
    });
    $.__views.__alloyId12278.add($.__views.__alloyId12279);
    $.__views.__alloyId12280 = Ti.UI.createView({
        id: "__alloyId12280"
    });
    $.__views.__alloyId12280 && $.addTopLevelView($.__views.__alloyId12280);
    $.__views.__alloyId12281 = Ti.UI.createView({
        id: "__alloyId12281"
    });
    $.__views.__alloyId12280.add($.__views.__alloyId12281);
    $.__views.__alloyId12282 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12282"
    });
    $.__views.__alloyId12281.add($.__views.__alloyId12282);
    $.__views.__alloyId12283 = Ti.UI.createView({
        id: "__alloyId12283"
    });
    $.__views.__alloyId12283 && $.addTopLevelView($.__views.__alloyId12283);
    $.__views.__alloyId12284 = Ti.UI.createView({
        id: "__alloyId12284"
    });
    $.__views.__alloyId12283.add($.__views.__alloyId12284);
    $.__views.__alloyId12285 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12285"
    });
    $.__views.__alloyId12284.add($.__views.__alloyId12285);
    $.__views.__alloyId12286 = Ti.UI.createView({
        id: "__alloyId12286"
    });
    $.__views.__alloyId12286 && $.addTopLevelView($.__views.__alloyId12286);
    $.__views.__alloyId12287 = Ti.UI.createView({
        id: "__alloyId12287"
    });
    $.__views.__alloyId12286.add($.__views.__alloyId12287);
    $.__views.__alloyId12288 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12288"
    });
    $.__views.__alloyId12287.add($.__views.__alloyId12288);
    $.__views.__alloyId12289 = Ti.UI.createView({
        id: "__alloyId12289"
    });
    $.__views.__alloyId12289 && $.addTopLevelView($.__views.__alloyId12289);
    $.__views.__alloyId12290 = Ti.UI.createView({
        id: "__alloyId12290"
    });
    $.__views.__alloyId12289.add($.__views.__alloyId12290);
    $.__views.__alloyId12291 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12291"
    });
    $.__views.__alloyId12290.add($.__views.__alloyId12291);
    $.__views.__alloyId12292 = Ti.UI.createView({
        id: "__alloyId12292"
    });
    $.__views.__alloyId12292 && $.addTopLevelView($.__views.__alloyId12292);
    $.__views.__alloyId12293 = Ti.UI.createView({
        id: "__alloyId12293"
    });
    $.__views.__alloyId12292.add($.__views.__alloyId12293);
    $.__views.__alloyId12294 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12294"
    });
    $.__views.__alloyId12293.add($.__views.__alloyId12294);
    $.__views.__alloyId12295 = Ti.UI.createView({
        id: "__alloyId12295"
    });
    $.__views.__alloyId12295 && $.addTopLevelView($.__views.__alloyId12295);
    $.__views.__alloyId12296 = Ti.UI.createView({
        id: "__alloyId12296"
    });
    $.__views.__alloyId12295.add($.__views.__alloyId12296);
    $.__views.__alloyId12297 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12297"
    });
    $.__views.__alloyId12296.add($.__views.__alloyId12297);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;