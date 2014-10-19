function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_661";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_661 = Ti.UI.createView({
        id: "widget_661"
    });
    $.__views.widget_661 && $.addTopLevelView($.__views.widget_661);
    $.__views.__alloyId16276 = Ti.UI.createView({
        id: "__alloyId16276"
    });
    $.__views.widget_661.add($.__views.__alloyId16276);
    $.__views.__alloyId16277 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16277"
    });
    $.__views.__alloyId16276.add($.__views.__alloyId16277);
    $.__views.__alloyId16278 = Ti.UI.createView({
        id: "__alloyId16278"
    });
    $.__views.__alloyId16278 && $.addTopLevelView($.__views.__alloyId16278);
    $.__views.__alloyId16279 = Ti.UI.createView({
        id: "__alloyId16279"
    });
    $.__views.__alloyId16278.add($.__views.__alloyId16279);
    $.__views.__alloyId16280 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16280"
    });
    $.__views.__alloyId16279.add($.__views.__alloyId16280);
    $.__views.__alloyId16281 = Ti.UI.createView({
        id: "__alloyId16281"
    });
    $.__views.__alloyId16281 && $.addTopLevelView($.__views.__alloyId16281);
    $.__views.__alloyId16282 = Ti.UI.createView({
        id: "__alloyId16282"
    });
    $.__views.__alloyId16281.add($.__views.__alloyId16282);
    $.__views.__alloyId16283 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16283"
    });
    $.__views.__alloyId16282.add($.__views.__alloyId16283);
    $.__views.__alloyId16284 = Ti.UI.createView({
        id: "__alloyId16284"
    });
    $.__views.__alloyId16284 && $.addTopLevelView($.__views.__alloyId16284);
    $.__views.__alloyId16285 = Ti.UI.createView({
        id: "__alloyId16285"
    });
    $.__views.__alloyId16284.add($.__views.__alloyId16285);
    $.__views.__alloyId16286 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16286"
    });
    $.__views.__alloyId16285.add($.__views.__alloyId16286);
    $.__views.__alloyId16287 = Ti.UI.createView({
        id: "__alloyId16287"
    });
    $.__views.__alloyId16287 && $.addTopLevelView($.__views.__alloyId16287);
    $.__views.__alloyId16288 = Ti.UI.createView({
        id: "__alloyId16288"
    });
    $.__views.__alloyId16287.add($.__views.__alloyId16288);
    $.__views.__alloyId16289 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16289"
    });
    $.__views.__alloyId16288.add($.__views.__alloyId16289);
    $.__views.__alloyId16290 = Ti.UI.createView({
        id: "__alloyId16290"
    });
    $.__views.__alloyId16290 && $.addTopLevelView($.__views.__alloyId16290);
    $.__views.__alloyId16291 = Ti.UI.createView({
        id: "__alloyId16291"
    });
    $.__views.__alloyId16290.add($.__views.__alloyId16291);
    $.__views.__alloyId16292 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16292"
    });
    $.__views.__alloyId16291.add($.__views.__alloyId16292);
    $.__views.__alloyId16293 = Ti.UI.createView({
        id: "__alloyId16293"
    });
    $.__views.__alloyId16293 && $.addTopLevelView($.__views.__alloyId16293);
    $.__views.__alloyId16294 = Ti.UI.createView({
        id: "__alloyId16294"
    });
    $.__views.__alloyId16293.add($.__views.__alloyId16294);
    $.__views.__alloyId16295 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16295"
    });
    $.__views.__alloyId16294.add($.__views.__alloyId16295);
    $.__views.__alloyId16296 = Ti.UI.createView({
        id: "__alloyId16296"
    });
    $.__views.__alloyId16296 && $.addTopLevelView($.__views.__alloyId16296);
    $.__views.__alloyId16297 = Ti.UI.createView({
        id: "__alloyId16297"
    });
    $.__views.__alloyId16296.add($.__views.__alloyId16297);
    $.__views.__alloyId16298 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16298"
    });
    $.__views.__alloyId16297.add($.__views.__alloyId16298);
    $.__views.__alloyId16299 = Ti.UI.createView({
        id: "__alloyId16299"
    });
    $.__views.__alloyId16299 && $.addTopLevelView($.__views.__alloyId16299);
    $.__views.__alloyId16300 = Ti.UI.createView({
        id: "__alloyId16300"
    });
    $.__views.__alloyId16299.add($.__views.__alloyId16300);
    $.__views.__alloyId16301 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16301"
    });
    $.__views.__alloyId16300.add($.__views.__alloyId16301);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;