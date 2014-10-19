function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_593";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_593 = Ti.UI.createView({
        id: "widget_593"
    });
    $.__views.widget_593 && $.addTopLevelView($.__views.widget_593);
    $.__views.__alloyId14300 = Ti.UI.createView({
        id: "__alloyId14300"
    });
    $.__views.widget_593.add($.__views.__alloyId14300);
    $.__views.__alloyId14301 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14301"
    });
    $.__views.__alloyId14300.add($.__views.__alloyId14301);
    $.__views.__alloyId14302 = Ti.UI.createView({
        id: "__alloyId14302"
    });
    $.__views.__alloyId14302 && $.addTopLevelView($.__views.__alloyId14302);
    $.__views.__alloyId14303 = Ti.UI.createView({
        id: "__alloyId14303"
    });
    $.__views.__alloyId14302.add($.__views.__alloyId14303);
    $.__views.__alloyId14304 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14304"
    });
    $.__views.__alloyId14303.add($.__views.__alloyId14304);
    $.__views.__alloyId14305 = Ti.UI.createView({
        id: "__alloyId14305"
    });
    $.__views.__alloyId14305 && $.addTopLevelView($.__views.__alloyId14305);
    $.__views.__alloyId14306 = Ti.UI.createView({
        id: "__alloyId14306"
    });
    $.__views.__alloyId14305.add($.__views.__alloyId14306);
    $.__views.__alloyId14307 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14307"
    });
    $.__views.__alloyId14306.add($.__views.__alloyId14307);
    $.__views.__alloyId14308 = Ti.UI.createView({
        id: "__alloyId14308"
    });
    $.__views.__alloyId14308 && $.addTopLevelView($.__views.__alloyId14308);
    $.__views.__alloyId14309 = Ti.UI.createView({
        id: "__alloyId14309"
    });
    $.__views.__alloyId14308.add($.__views.__alloyId14309);
    $.__views.__alloyId14310 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14310"
    });
    $.__views.__alloyId14309.add($.__views.__alloyId14310);
    $.__views.__alloyId14311 = Ti.UI.createView({
        id: "__alloyId14311"
    });
    $.__views.__alloyId14311 && $.addTopLevelView($.__views.__alloyId14311);
    $.__views.__alloyId14312 = Ti.UI.createView({
        id: "__alloyId14312"
    });
    $.__views.__alloyId14311.add($.__views.__alloyId14312);
    $.__views.__alloyId14313 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14313"
    });
    $.__views.__alloyId14312.add($.__views.__alloyId14313);
    $.__views.__alloyId14314 = Ti.UI.createView({
        id: "__alloyId14314"
    });
    $.__views.__alloyId14314 && $.addTopLevelView($.__views.__alloyId14314);
    $.__views.__alloyId14315 = Ti.UI.createView({
        id: "__alloyId14315"
    });
    $.__views.__alloyId14314.add($.__views.__alloyId14315);
    $.__views.__alloyId14316 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14316"
    });
    $.__views.__alloyId14315.add($.__views.__alloyId14316);
    $.__views.__alloyId14317 = Ti.UI.createView({
        id: "__alloyId14317"
    });
    $.__views.__alloyId14317 && $.addTopLevelView($.__views.__alloyId14317);
    $.__views.__alloyId14318 = Ti.UI.createView({
        id: "__alloyId14318"
    });
    $.__views.__alloyId14317.add($.__views.__alloyId14318);
    $.__views.__alloyId14319 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14319"
    });
    $.__views.__alloyId14318.add($.__views.__alloyId14319);
    $.__views.__alloyId14320 = Ti.UI.createView({
        id: "__alloyId14320"
    });
    $.__views.__alloyId14320 && $.addTopLevelView($.__views.__alloyId14320);
    $.__views.__alloyId14321 = Ti.UI.createView({
        id: "__alloyId14321"
    });
    $.__views.__alloyId14320.add($.__views.__alloyId14321);
    $.__views.__alloyId14322 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14322"
    });
    $.__views.__alloyId14321.add($.__views.__alloyId14322);
    $.__views.__alloyId14323 = Ti.UI.createView({
        id: "__alloyId14323"
    });
    $.__views.__alloyId14323 && $.addTopLevelView($.__views.__alloyId14323);
    $.__views.__alloyId14324 = Ti.UI.createView({
        id: "__alloyId14324"
    });
    $.__views.__alloyId14323.add($.__views.__alloyId14324);
    $.__views.__alloyId14325 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14325"
    });
    $.__views.__alloyId14324.add($.__views.__alloyId14325);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;