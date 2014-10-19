function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_351";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_351 = Ti.UI.createView({
        id: "widget_351"
    });
    $.__views.widget_351 && $.addTopLevelView($.__views.widget_351);
    $.__views.__alloyId7332 = Ti.UI.createView({
        id: "__alloyId7332"
    });
    $.__views.widget_351.add($.__views.__alloyId7332);
    $.__views.__alloyId7333 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7333"
    });
    $.__views.__alloyId7332.add($.__views.__alloyId7333);
    $.__views.__alloyId7334 = Ti.UI.createView({
        id: "__alloyId7334"
    });
    $.__views.__alloyId7334 && $.addTopLevelView($.__views.__alloyId7334);
    $.__views.__alloyId7335 = Ti.UI.createView({
        id: "__alloyId7335"
    });
    $.__views.__alloyId7334.add($.__views.__alloyId7335);
    $.__views.__alloyId7336 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7336"
    });
    $.__views.__alloyId7335.add($.__views.__alloyId7336);
    $.__views.__alloyId7337 = Ti.UI.createView({
        id: "__alloyId7337"
    });
    $.__views.__alloyId7337 && $.addTopLevelView($.__views.__alloyId7337);
    $.__views.__alloyId7338 = Ti.UI.createView({
        id: "__alloyId7338"
    });
    $.__views.__alloyId7337.add($.__views.__alloyId7338);
    $.__views.__alloyId7339 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7339"
    });
    $.__views.__alloyId7338.add($.__views.__alloyId7339);
    $.__views.__alloyId7340 = Ti.UI.createView({
        id: "__alloyId7340"
    });
    $.__views.__alloyId7340 && $.addTopLevelView($.__views.__alloyId7340);
    $.__views.__alloyId7341 = Ti.UI.createView({
        id: "__alloyId7341"
    });
    $.__views.__alloyId7340.add($.__views.__alloyId7341);
    $.__views.__alloyId7342 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7342"
    });
    $.__views.__alloyId7341.add($.__views.__alloyId7342);
    $.__views.__alloyId7343 = Ti.UI.createView({
        id: "__alloyId7343"
    });
    $.__views.__alloyId7343 && $.addTopLevelView($.__views.__alloyId7343);
    $.__views.__alloyId7344 = Ti.UI.createView({
        id: "__alloyId7344"
    });
    $.__views.__alloyId7343.add($.__views.__alloyId7344);
    $.__views.__alloyId7345 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7345"
    });
    $.__views.__alloyId7344.add($.__views.__alloyId7345);
    $.__views.__alloyId7346 = Ti.UI.createView({
        id: "__alloyId7346"
    });
    $.__views.__alloyId7346 && $.addTopLevelView($.__views.__alloyId7346);
    $.__views.__alloyId7347 = Ti.UI.createView({
        id: "__alloyId7347"
    });
    $.__views.__alloyId7346.add($.__views.__alloyId7347);
    $.__views.__alloyId7348 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7348"
    });
    $.__views.__alloyId7347.add($.__views.__alloyId7348);
    $.__views.__alloyId7349 = Ti.UI.createView({
        id: "__alloyId7349"
    });
    $.__views.__alloyId7349 && $.addTopLevelView($.__views.__alloyId7349);
    $.__views.__alloyId7350 = Ti.UI.createView({
        id: "__alloyId7350"
    });
    $.__views.__alloyId7349.add($.__views.__alloyId7350);
    $.__views.__alloyId7351 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7351"
    });
    $.__views.__alloyId7350.add($.__views.__alloyId7351);
    $.__views.__alloyId7352 = Ti.UI.createView({
        id: "__alloyId7352"
    });
    $.__views.__alloyId7352 && $.addTopLevelView($.__views.__alloyId7352);
    $.__views.__alloyId7353 = Ti.UI.createView({
        id: "__alloyId7353"
    });
    $.__views.__alloyId7352.add($.__views.__alloyId7353);
    $.__views.__alloyId7354 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7354"
    });
    $.__views.__alloyId7353.add($.__views.__alloyId7354);
    $.__views.__alloyId7355 = Ti.UI.createView({
        id: "__alloyId7355"
    });
    $.__views.__alloyId7355 && $.addTopLevelView($.__views.__alloyId7355);
    $.__views.__alloyId7356 = Ti.UI.createView({
        id: "__alloyId7356"
    });
    $.__views.__alloyId7355.add($.__views.__alloyId7356);
    $.__views.__alloyId7357 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7357"
    });
    $.__views.__alloyId7356.add($.__views.__alloyId7357);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;