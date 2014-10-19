function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_662";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_662 = Ti.UI.createView({
        id: "widget_662"
    });
    $.__views.widget_662 && $.addTopLevelView($.__views.widget_662);
    $.__views.__alloyId16302 = Ti.UI.createView({
        id: "__alloyId16302"
    });
    $.__views.widget_662.add($.__views.__alloyId16302);
    $.__views.__alloyId16303 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16303"
    });
    $.__views.__alloyId16302.add($.__views.__alloyId16303);
    $.__views.__alloyId16304 = Ti.UI.createView({
        id: "__alloyId16304"
    });
    $.__views.__alloyId16304 && $.addTopLevelView($.__views.__alloyId16304);
    $.__views.__alloyId16305 = Ti.UI.createView({
        id: "__alloyId16305"
    });
    $.__views.__alloyId16304.add($.__views.__alloyId16305);
    $.__views.__alloyId16306 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16306"
    });
    $.__views.__alloyId16305.add($.__views.__alloyId16306);
    $.__views.__alloyId16307 = Ti.UI.createView({
        id: "__alloyId16307"
    });
    $.__views.__alloyId16307 && $.addTopLevelView($.__views.__alloyId16307);
    $.__views.__alloyId16308 = Ti.UI.createView({
        id: "__alloyId16308"
    });
    $.__views.__alloyId16307.add($.__views.__alloyId16308);
    $.__views.__alloyId16309 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16309"
    });
    $.__views.__alloyId16308.add($.__views.__alloyId16309);
    $.__views.__alloyId16310 = Ti.UI.createView({
        id: "__alloyId16310"
    });
    $.__views.__alloyId16310 && $.addTopLevelView($.__views.__alloyId16310);
    $.__views.__alloyId16311 = Ti.UI.createView({
        id: "__alloyId16311"
    });
    $.__views.__alloyId16310.add($.__views.__alloyId16311);
    $.__views.__alloyId16312 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16312"
    });
    $.__views.__alloyId16311.add($.__views.__alloyId16312);
    $.__views.__alloyId16313 = Ti.UI.createView({
        id: "__alloyId16313"
    });
    $.__views.__alloyId16313 && $.addTopLevelView($.__views.__alloyId16313);
    $.__views.__alloyId16314 = Ti.UI.createView({
        id: "__alloyId16314"
    });
    $.__views.__alloyId16313.add($.__views.__alloyId16314);
    $.__views.__alloyId16315 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16315"
    });
    $.__views.__alloyId16314.add($.__views.__alloyId16315);
    $.__views.__alloyId16316 = Ti.UI.createView({
        id: "__alloyId16316"
    });
    $.__views.__alloyId16316 && $.addTopLevelView($.__views.__alloyId16316);
    $.__views.__alloyId16317 = Ti.UI.createView({
        id: "__alloyId16317"
    });
    $.__views.__alloyId16316.add($.__views.__alloyId16317);
    $.__views.__alloyId16318 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16318"
    });
    $.__views.__alloyId16317.add($.__views.__alloyId16318);
    $.__views.__alloyId16319 = Ti.UI.createView({
        id: "__alloyId16319"
    });
    $.__views.__alloyId16319 && $.addTopLevelView($.__views.__alloyId16319);
    $.__views.__alloyId16320 = Ti.UI.createView({
        id: "__alloyId16320"
    });
    $.__views.__alloyId16319.add($.__views.__alloyId16320);
    $.__views.__alloyId16321 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16321"
    });
    $.__views.__alloyId16320.add($.__views.__alloyId16321);
    $.__views.__alloyId16322 = Ti.UI.createView({
        id: "__alloyId16322"
    });
    $.__views.__alloyId16322 && $.addTopLevelView($.__views.__alloyId16322);
    $.__views.__alloyId16323 = Ti.UI.createView({
        id: "__alloyId16323"
    });
    $.__views.__alloyId16322.add($.__views.__alloyId16323);
    $.__views.__alloyId16324 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16324"
    });
    $.__views.__alloyId16323.add($.__views.__alloyId16324);
    $.__views.__alloyId16325 = Ti.UI.createView({
        id: "__alloyId16325"
    });
    $.__views.__alloyId16325 && $.addTopLevelView($.__views.__alloyId16325);
    $.__views.__alloyId16326 = Ti.UI.createView({
        id: "__alloyId16326"
    });
    $.__views.__alloyId16325.add($.__views.__alloyId16326);
    $.__views.__alloyId16327 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16327"
    });
    $.__views.__alloyId16326.add($.__views.__alloyId16327);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;