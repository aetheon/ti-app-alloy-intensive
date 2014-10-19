function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_212";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_212 = Ti.UI.createView({
        id: "widget_212"
    });
    $.__views.widget_212 && $.addTopLevelView($.__views.widget_212);
    $.__views.__alloyId3328 = Ti.UI.createView({
        id: "__alloyId3328"
    });
    $.__views.widget_212.add($.__views.__alloyId3328);
    $.__views.__alloyId3329 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3329"
    });
    $.__views.__alloyId3328.add($.__views.__alloyId3329);
    $.__views.__alloyId3330 = Ti.UI.createView({
        id: "__alloyId3330"
    });
    $.__views.__alloyId3330 && $.addTopLevelView($.__views.__alloyId3330);
    $.__views.__alloyId3331 = Ti.UI.createView({
        id: "__alloyId3331"
    });
    $.__views.__alloyId3330.add($.__views.__alloyId3331);
    $.__views.__alloyId3332 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3332"
    });
    $.__views.__alloyId3331.add($.__views.__alloyId3332);
    $.__views.__alloyId3333 = Ti.UI.createView({
        id: "__alloyId3333"
    });
    $.__views.__alloyId3333 && $.addTopLevelView($.__views.__alloyId3333);
    $.__views.__alloyId3334 = Ti.UI.createView({
        id: "__alloyId3334"
    });
    $.__views.__alloyId3333.add($.__views.__alloyId3334);
    $.__views.__alloyId3335 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3335"
    });
    $.__views.__alloyId3334.add($.__views.__alloyId3335);
    $.__views.__alloyId3336 = Ti.UI.createView({
        id: "__alloyId3336"
    });
    $.__views.__alloyId3336 && $.addTopLevelView($.__views.__alloyId3336);
    $.__views.__alloyId3337 = Ti.UI.createView({
        id: "__alloyId3337"
    });
    $.__views.__alloyId3336.add($.__views.__alloyId3337);
    $.__views.__alloyId3338 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3338"
    });
    $.__views.__alloyId3337.add($.__views.__alloyId3338);
    $.__views.__alloyId3339 = Ti.UI.createView({
        id: "__alloyId3339"
    });
    $.__views.__alloyId3339 && $.addTopLevelView($.__views.__alloyId3339);
    $.__views.__alloyId3340 = Ti.UI.createView({
        id: "__alloyId3340"
    });
    $.__views.__alloyId3339.add($.__views.__alloyId3340);
    $.__views.__alloyId3341 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3341"
    });
    $.__views.__alloyId3340.add($.__views.__alloyId3341);
    $.__views.__alloyId3342 = Ti.UI.createView({
        id: "__alloyId3342"
    });
    $.__views.__alloyId3342 && $.addTopLevelView($.__views.__alloyId3342);
    $.__views.__alloyId3343 = Ti.UI.createView({
        id: "__alloyId3343"
    });
    $.__views.__alloyId3342.add($.__views.__alloyId3343);
    $.__views.__alloyId3344 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3344"
    });
    $.__views.__alloyId3343.add($.__views.__alloyId3344);
    $.__views.__alloyId3345 = Ti.UI.createView({
        id: "__alloyId3345"
    });
    $.__views.__alloyId3345 && $.addTopLevelView($.__views.__alloyId3345);
    $.__views.__alloyId3346 = Ti.UI.createView({
        id: "__alloyId3346"
    });
    $.__views.__alloyId3345.add($.__views.__alloyId3346);
    $.__views.__alloyId3347 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3347"
    });
    $.__views.__alloyId3346.add($.__views.__alloyId3347);
    $.__views.__alloyId3348 = Ti.UI.createView({
        id: "__alloyId3348"
    });
    $.__views.__alloyId3348 && $.addTopLevelView($.__views.__alloyId3348);
    $.__views.__alloyId3349 = Ti.UI.createView({
        id: "__alloyId3349"
    });
    $.__views.__alloyId3348.add($.__views.__alloyId3349);
    $.__views.__alloyId3350 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3350"
    });
    $.__views.__alloyId3349.add($.__views.__alloyId3350);
    $.__views.__alloyId3351 = Ti.UI.createView({
        id: "__alloyId3351"
    });
    $.__views.__alloyId3351 && $.addTopLevelView($.__views.__alloyId3351);
    $.__views.__alloyId3352 = Ti.UI.createView({
        id: "__alloyId3352"
    });
    $.__views.__alloyId3351.add($.__views.__alloyId3352);
    $.__views.__alloyId3353 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3353"
    });
    $.__views.__alloyId3352.add($.__views.__alloyId3353);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;