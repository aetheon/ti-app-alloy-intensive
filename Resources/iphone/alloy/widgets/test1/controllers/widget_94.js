function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_94";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_94 = Ti.UI.createView({
        id: "widget_94"
    });
    $.__views.widget_94 && $.addTopLevelView($.__views.widget_94);
    $.__views.__alloyId24310 = Ti.UI.createView({
        id: "__alloyId24310"
    });
    $.__views.widget_94.add($.__views.__alloyId24310);
    $.__views.__alloyId24311 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24311"
    });
    $.__views.__alloyId24310.add($.__views.__alloyId24311);
    $.__views.__alloyId24312 = Ti.UI.createView({
        id: "__alloyId24312"
    });
    $.__views.__alloyId24312 && $.addTopLevelView($.__views.__alloyId24312);
    $.__views.__alloyId24313 = Ti.UI.createView({
        id: "__alloyId24313"
    });
    $.__views.__alloyId24312.add($.__views.__alloyId24313);
    $.__views.__alloyId24314 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24314"
    });
    $.__views.__alloyId24313.add($.__views.__alloyId24314);
    $.__views.__alloyId24315 = Ti.UI.createView({
        id: "__alloyId24315"
    });
    $.__views.__alloyId24315 && $.addTopLevelView($.__views.__alloyId24315);
    $.__views.__alloyId24316 = Ti.UI.createView({
        id: "__alloyId24316"
    });
    $.__views.__alloyId24315.add($.__views.__alloyId24316);
    $.__views.__alloyId24317 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24317"
    });
    $.__views.__alloyId24316.add($.__views.__alloyId24317);
    $.__views.__alloyId24318 = Ti.UI.createView({
        id: "__alloyId24318"
    });
    $.__views.__alloyId24318 && $.addTopLevelView($.__views.__alloyId24318);
    $.__views.__alloyId24319 = Ti.UI.createView({
        id: "__alloyId24319"
    });
    $.__views.__alloyId24318.add($.__views.__alloyId24319);
    $.__views.__alloyId24320 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24320"
    });
    $.__views.__alloyId24319.add($.__views.__alloyId24320);
    $.__views.__alloyId24321 = Ti.UI.createView({
        id: "__alloyId24321"
    });
    $.__views.__alloyId24321 && $.addTopLevelView($.__views.__alloyId24321);
    $.__views.__alloyId24322 = Ti.UI.createView({
        id: "__alloyId24322"
    });
    $.__views.__alloyId24321.add($.__views.__alloyId24322);
    $.__views.__alloyId24323 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24323"
    });
    $.__views.__alloyId24322.add($.__views.__alloyId24323);
    $.__views.__alloyId24324 = Ti.UI.createView({
        id: "__alloyId24324"
    });
    $.__views.__alloyId24324 && $.addTopLevelView($.__views.__alloyId24324);
    $.__views.__alloyId24325 = Ti.UI.createView({
        id: "__alloyId24325"
    });
    $.__views.__alloyId24324.add($.__views.__alloyId24325);
    $.__views.__alloyId24326 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24326"
    });
    $.__views.__alloyId24325.add($.__views.__alloyId24326);
    $.__views.__alloyId24327 = Ti.UI.createView({
        id: "__alloyId24327"
    });
    $.__views.__alloyId24327 && $.addTopLevelView($.__views.__alloyId24327);
    $.__views.__alloyId24328 = Ti.UI.createView({
        id: "__alloyId24328"
    });
    $.__views.__alloyId24327.add($.__views.__alloyId24328);
    $.__views.__alloyId24329 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24329"
    });
    $.__views.__alloyId24328.add($.__views.__alloyId24329);
    $.__views.__alloyId24330 = Ti.UI.createView({
        id: "__alloyId24330"
    });
    $.__views.__alloyId24330 && $.addTopLevelView($.__views.__alloyId24330);
    $.__views.__alloyId24331 = Ti.UI.createView({
        id: "__alloyId24331"
    });
    $.__views.__alloyId24330.add($.__views.__alloyId24331);
    $.__views.__alloyId24332 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24332"
    });
    $.__views.__alloyId24331.add($.__views.__alloyId24332);
    $.__views.__alloyId24333 = Ti.UI.createView({
        id: "__alloyId24333"
    });
    $.__views.__alloyId24333 && $.addTopLevelView($.__views.__alloyId24333);
    $.__views.__alloyId24334 = Ti.UI.createView({
        id: "__alloyId24334"
    });
    $.__views.__alloyId24333.add($.__views.__alloyId24334);
    $.__views.__alloyId24335 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24335"
    });
    $.__views.__alloyId24334.add($.__views.__alloyId24335);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;