function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_420";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_420 = Ti.UI.createView({
        id: "widget_420"
    });
    $.__views.widget_420 && $.addTopLevelView($.__views.widget_420);
    $.__views.__alloyId9334 = Ti.UI.createView({
        id: "__alloyId9334"
    });
    $.__views.widget_420.add($.__views.__alloyId9334);
    $.__views.__alloyId9335 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9335"
    });
    $.__views.__alloyId9334.add($.__views.__alloyId9335);
    $.__views.__alloyId9336 = Ti.UI.createView({
        id: "__alloyId9336"
    });
    $.__views.__alloyId9336 && $.addTopLevelView($.__views.__alloyId9336);
    $.__views.__alloyId9337 = Ti.UI.createView({
        id: "__alloyId9337"
    });
    $.__views.__alloyId9336.add($.__views.__alloyId9337);
    $.__views.__alloyId9338 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9338"
    });
    $.__views.__alloyId9337.add($.__views.__alloyId9338);
    $.__views.__alloyId9339 = Ti.UI.createView({
        id: "__alloyId9339"
    });
    $.__views.__alloyId9339 && $.addTopLevelView($.__views.__alloyId9339);
    $.__views.__alloyId9340 = Ti.UI.createView({
        id: "__alloyId9340"
    });
    $.__views.__alloyId9339.add($.__views.__alloyId9340);
    $.__views.__alloyId9341 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9341"
    });
    $.__views.__alloyId9340.add($.__views.__alloyId9341);
    $.__views.__alloyId9342 = Ti.UI.createView({
        id: "__alloyId9342"
    });
    $.__views.__alloyId9342 && $.addTopLevelView($.__views.__alloyId9342);
    $.__views.__alloyId9343 = Ti.UI.createView({
        id: "__alloyId9343"
    });
    $.__views.__alloyId9342.add($.__views.__alloyId9343);
    $.__views.__alloyId9344 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9344"
    });
    $.__views.__alloyId9343.add($.__views.__alloyId9344);
    $.__views.__alloyId9345 = Ti.UI.createView({
        id: "__alloyId9345"
    });
    $.__views.__alloyId9345 && $.addTopLevelView($.__views.__alloyId9345);
    $.__views.__alloyId9346 = Ti.UI.createView({
        id: "__alloyId9346"
    });
    $.__views.__alloyId9345.add($.__views.__alloyId9346);
    $.__views.__alloyId9347 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9347"
    });
    $.__views.__alloyId9346.add($.__views.__alloyId9347);
    $.__views.__alloyId9348 = Ti.UI.createView({
        id: "__alloyId9348"
    });
    $.__views.__alloyId9348 && $.addTopLevelView($.__views.__alloyId9348);
    $.__views.__alloyId9349 = Ti.UI.createView({
        id: "__alloyId9349"
    });
    $.__views.__alloyId9348.add($.__views.__alloyId9349);
    $.__views.__alloyId9350 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9350"
    });
    $.__views.__alloyId9349.add($.__views.__alloyId9350);
    $.__views.__alloyId9351 = Ti.UI.createView({
        id: "__alloyId9351"
    });
    $.__views.__alloyId9351 && $.addTopLevelView($.__views.__alloyId9351);
    $.__views.__alloyId9352 = Ti.UI.createView({
        id: "__alloyId9352"
    });
    $.__views.__alloyId9351.add($.__views.__alloyId9352);
    $.__views.__alloyId9353 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9353"
    });
    $.__views.__alloyId9352.add($.__views.__alloyId9353);
    $.__views.__alloyId9354 = Ti.UI.createView({
        id: "__alloyId9354"
    });
    $.__views.__alloyId9354 && $.addTopLevelView($.__views.__alloyId9354);
    $.__views.__alloyId9355 = Ti.UI.createView({
        id: "__alloyId9355"
    });
    $.__views.__alloyId9354.add($.__views.__alloyId9355);
    $.__views.__alloyId9356 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9356"
    });
    $.__views.__alloyId9355.add($.__views.__alloyId9356);
    $.__views.__alloyId9357 = Ti.UI.createView({
        id: "__alloyId9357"
    });
    $.__views.__alloyId9357 && $.addTopLevelView($.__views.__alloyId9357);
    $.__views.__alloyId9358 = Ti.UI.createView({
        id: "__alloyId9358"
    });
    $.__views.__alloyId9357.add($.__views.__alloyId9358);
    $.__views.__alloyId9359 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9359"
    });
    $.__views.__alloyId9358.add($.__views.__alloyId9359);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;