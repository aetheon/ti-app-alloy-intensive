function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_35";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_35 = Ti.UI.createView({
        id: "widget_35"
    });
    $.__views.widget_35 && $.addTopLevelView($.__views.widget_35);
    $.__views.__alloyId7280 = Ti.UI.createView({
        id: "__alloyId7280"
    });
    $.__views.widget_35.add($.__views.__alloyId7280);
    $.__views.__alloyId7281 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7281"
    });
    $.__views.__alloyId7280.add($.__views.__alloyId7281);
    $.__views.__alloyId7282 = Ti.UI.createView({
        id: "__alloyId7282"
    });
    $.__views.__alloyId7282 && $.addTopLevelView($.__views.__alloyId7282);
    $.__views.__alloyId7283 = Ti.UI.createView({
        id: "__alloyId7283"
    });
    $.__views.__alloyId7282.add($.__views.__alloyId7283);
    $.__views.__alloyId7284 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7284"
    });
    $.__views.__alloyId7283.add($.__views.__alloyId7284);
    $.__views.__alloyId7285 = Ti.UI.createView({
        id: "__alloyId7285"
    });
    $.__views.__alloyId7285 && $.addTopLevelView($.__views.__alloyId7285);
    $.__views.__alloyId7286 = Ti.UI.createView({
        id: "__alloyId7286"
    });
    $.__views.__alloyId7285.add($.__views.__alloyId7286);
    $.__views.__alloyId7287 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7287"
    });
    $.__views.__alloyId7286.add($.__views.__alloyId7287);
    $.__views.__alloyId7288 = Ti.UI.createView({
        id: "__alloyId7288"
    });
    $.__views.__alloyId7288 && $.addTopLevelView($.__views.__alloyId7288);
    $.__views.__alloyId7289 = Ti.UI.createView({
        id: "__alloyId7289"
    });
    $.__views.__alloyId7288.add($.__views.__alloyId7289);
    $.__views.__alloyId7290 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7290"
    });
    $.__views.__alloyId7289.add($.__views.__alloyId7290);
    $.__views.__alloyId7291 = Ti.UI.createView({
        id: "__alloyId7291"
    });
    $.__views.__alloyId7291 && $.addTopLevelView($.__views.__alloyId7291);
    $.__views.__alloyId7292 = Ti.UI.createView({
        id: "__alloyId7292"
    });
    $.__views.__alloyId7291.add($.__views.__alloyId7292);
    $.__views.__alloyId7293 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7293"
    });
    $.__views.__alloyId7292.add($.__views.__alloyId7293);
    $.__views.__alloyId7294 = Ti.UI.createView({
        id: "__alloyId7294"
    });
    $.__views.__alloyId7294 && $.addTopLevelView($.__views.__alloyId7294);
    $.__views.__alloyId7295 = Ti.UI.createView({
        id: "__alloyId7295"
    });
    $.__views.__alloyId7294.add($.__views.__alloyId7295);
    $.__views.__alloyId7296 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7296"
    });
    $.__views.__alloyId7295.add($.__views.__alloyId7296);
    $.__views.__alloyId7297 = Ti.UI.createView({
        id: "__alloyId7297"
    });
    $.__views.__alloyId7297 && $.addTopLevelView($.__views.__alloyId7297);
    $.__views.__alloyId7298 = Ti.UI.createView({
        id: "__alloyId7298"
    });
    $.__views.__alloyId7297.add($.__views.__alloyId7298);
    $.__views.__alloyId7299 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7299"
    });
    $.__views.__alloyId7298.add($.__views.__alloyId7299);
    $.__views.__alloyId7300 = Ti.UI.createView({
        id: "__alloyId7300"
    });
    $.__views.__alloyId7300 && $.addTopLevelView($.__views.__alloyId7300);
    $.__views.__alloyId7301 = Ti.UI.createView({
        id: "__alloyId7301"
    });
    $.__views.__alloyId7300.add($.__views.__alloyId7301);
    $.__views.__alloyId7302 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7302"
    });
    $.__views.__alloyId7301.add($.__views.__alloyId7302);
    $.__views.__alloyId7303 = Ti.UI.createView({
        id: "__alloyId7303"
    });
    $.__views.__alloyId7303 && $.addTopLevelView($.__views.__alloyId7303);
    $.__views.__alloyId7304 = Ti.UI.createView({
        id: "__alloyId7304"
    });
    $.__views.__alloyId7303.add($.__views.__alloyId7304);
    $.__views.__alloyId7305 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7305"
    });
    $.__views.__alloyId7304.add($.__views.__alloyId7305);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;