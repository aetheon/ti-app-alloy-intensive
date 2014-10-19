function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_699";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_699 = Ti.UI.createView({
        id: "widget_699"
    });
    $.__views.widget_699 && $.addTopLevelView($.__views.widget_699);
    $.__views.__alloyId17342 = Ti.UI.createView({
        id: "__alloyId17342"
    });
    $.__views.widget_699.add($.__views.__alloyId17342);
    $.__views.__alloyId17343 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17343"
    });
    $.__views.__alloyId17342.add($.__views.__alloyId17343);
    $.__views.__alloyId17344 = Ti.UI.createView({
        id: "__alloyId17344"
    });
    $.__views.__alloyId17344 && $.addTopLevelView($.__views.__alloyId17344);
    $.__views.__alloyId17345 = Ti.UI.createView({
        id: "__alloyId17345"
    });
    $.__views.__alloyId17344.add($.__views.__alloyId17345);
    $.__views.__alloyId17346 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17346"
    });
    $.__views.__alloyId17345.add($.__views.__alloyId17346);
    $.__views.__alloyId17347 = Ti.UI.createView({
        id: "__alloyId17347"
    });
    $.__views.__alloyId17347 && $.addTopLevelView($.__views.__alloyId17347);
    $.__views.__alloyId17348 = Ti.UI.createView({
        id: "__alloyId17348"
    });
    $.__views.__alloyId17347.add($.__views.__alloyId17348);
    $.__views.__alloyId17349 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17349"
    });
    $.__views.__alloyId17348.add($.__views.__alloyId17349);
    $.__views.__alloyId17350 = Ti.UI.createView({
        id: "__alloyId17350"
    });
    $.__views.__alloyId17350 && $.addTopLevelView($.__views.__alloyId17350);
    $.__views.__alloyId17351 = Ti.UI.createView({
        id: "__alloyId17351"
    });
    $.__views.__alloyId17350.add($.__views.__alloyId17351);
    $.__views.__alloyId17352 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17352"
    });
    $.__views.__alloyId17351.add($.__views.__alloyId17352);
    $.__views.__alloyId17353 = Ti.UI.createView({
        id: "__alloyId17353"
    });
    $.__views.__alloyId17353 && $.addTopLevelView($.__views.__alloyId17353);
    $.__views.__alloyId17354 = Ti.UI.createView({
        id: "__alloyId17354"
    });
    $.__views.__alloyId17353.add($.__views.__alloyId17354);
    $.__views.__alloyId17355 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17355"
    });
    $.__views.__alloyId17354.add($.__views.__alloyId17355);
    $.__views.__alloyId17356 = Ti.UI.createView({
        id: "__alloyId17356"
    });
    $.__views.__alloyId17356 && $.addTopLevelView($.__views.__alloyId17356);
    $.__views.__alloyId17357 = Ti.UI.createView({
        id: "__alloyId17357"
    });
    $.__views.__alloyId17356.add($.__views.__alloyId17357);
    $.__views.__alloyId17358 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17358"
    });
    $.__views.__alloyId17357.add($.__views.__alloyId17358);
    $.__views.__alloyId17359 = Ti.UI.createView({
        id: "__alloyId17359"
    });
    $.__views.__alloyId17359 && $.addTopLevelView($.__views.__alloyId17359);
    $.__views.__alloyId17360 = Ti.UI.createView({
        id: "__alloyId17360"
    });
    $.__views.__alloyId17359.add($.__views.__alloyId17360);
    $.__views.__alloyId17361 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17361"
    });
    $.__views.__alloyId17360.add($.__views.__alloyId17361);
    $.__views.__alloyId17362 = Ti.UI.createView({
        id: "__alloyId17362"
    });
    $.__views.__alloyId17362 && $.addTopLevelView($.__views.__alloyId17362);
    $.__views.__alloyId17363 = Ti.UI.createView({
        id: "__alloyId17363"
    });
    $.__views.__alloyId17362.add($.__views.__alloyId17363);
    $.__views.__alloyId17364 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17364"
    });
    $.__views.__alloyId17363.add($.__views.__alloyId17364);
    $.__views.__alloyId17365 = Ti.UI.createView({
        id: "__alloyId17365"
    });
    $.__views.__alloyId17365 && $.addTopLevelView($.__views.__alloyId17365);
    $.__views.__alloyId17366 = Ti.UI.createView({
        id: "__alloyId17366"
    });
    $.__views.__alloyId17365.add($.__views.__alloyId17366);
    $.__views.__alloyId17367 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17367"
    });
    $.__views.__alloyId17366.add($.__views.__alloyId17367);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;