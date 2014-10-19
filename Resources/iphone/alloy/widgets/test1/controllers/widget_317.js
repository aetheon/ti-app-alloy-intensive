function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_317";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_317 = Ti.UI.createView({
        id: "widget_317"
    });
    $.__views.widget_317 && $.addTopLevelView($.__views.widget_317);
    $.__views.__alloyId6344 = Ti.UI.createView({
        id: "__alloyId6344"
    });
    $.__views.widget_317.add($.__views.__alloyId6344);
    $.__views.__alloyId6345 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6345"
    });
    $.__views.__alloyId6344.add($.__views.__alloyId6345);
    $.__views.__alloyId6346 = Ti.UI.createView({
        id: "__alloyId6346"
    });
    $.__views.__alloyId6346 && $.addTopLevelView($.__views.__alloyId6346);
    $.__views.__alloyId6347 = Ti.UI.createView({
        id: "__alloyId6347"
    });
    $.__views.__alloyId6346.add($.__views.__alloyId6347);
    $.__views.__alloyId6348 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6348"
    });
    $.__views.__alloyId6347.add($.__views.__alloyId6348);
    $.__views.__alloyId6349 = Ti.UI.createView({
        id: "__alloyId6349"
    });
    $.__views.__alloyId6349 && $.addTopLevelView($.__views.__alloyId6349);
    $.__views.__alloyId6350 = Ti.UI.createView({
        id: "__alloyId6350"
    });
    $.__views.__alloyId6349.add($.__views.__alloyId6350);
    $.__views.__alloyId6351 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6351"
    });
    $.__views.__alloyId6350.add($.__views.__alloyId6351);
    $.__views.__alloyId6352 = Ti.UI.createView({
        id: "__alloyId6352"
    });
    $.__views.__alloyId6352 && $.addTopLevelView($.__views.__alloyId6352);
    $.__views.__alloyId6353 = Ti.UI.createView({
        id: "__alloyId6353"
    });
    $.__views.__alloyId6352.add($.__views.__alloyId6353);
    $.__views.__alloyId6354 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6354"
    });
    $.__views.__alloyId6353.add($.__views.__alloyId6354);
    $.__views.__alloyId6355 = Ti.UI.createView({
        id: "__alloyId6355"
    });
    $.__views.__alloyId6355 && $.addTopLevelView($.__views.__alloyId6355);
    $.__views.__alloyId6356 = Ti.UI.createView({
        id: "__alloyId6356"
    });
    $.__views.__alloyId6355.add($.__views.__alloyId6356);
    $.__views.__alloyId6357 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6357"
    });
    $.__views.__alloyId6356.add($.__views.__alloyId6357);
    $.__views.__alloyId6358 = Ti.UI.createView({
        id: "__alloyId6358"
    });
    $.__views.__alloyId6358 && $.addTopLevelView($.__views.__alloyId6358);
    $.__views.__alloyId6359 = Ti.UI.createView({
        id: "__alloyId6359"
    });
    $.__views.__alloyId6358.add($.__views.__alloyId6359);
    $.__views.__alloyId6360 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6360"
    });
    $.__views.__alloyId6359.add($.__views.__alloyId6360);
    $.__views.__alloyId6361 = Ti.UI.createView({
        id: "__alloyId6361"
    });
    $.__views.__alloyId6361 && $.addTopLevelView($.__views.__alloyId6361);
    $.__views.__alloyId6362 = Ti.UI.createView({
        id: "__alloyId6362"
    });
    $.__views.__alloyId6361.add($.__views.__alloyId6362);
    $.__views.__alloyId6363 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6363"
    });
    $.__views.__alloyId6362.add($.__views.__alloyId6363);
    $.__views.__alloyId6364 = Ti.UI.createView({
        id: "__alloyId6364"
    });
    $.__views.__alloyId6364 && $.addTopLevelView($.__views.__alloyId6364);
    $.__views.__alloyId6365 = Ti.UI.createView({
        id: "__alloyId6365"
    });
    $.__views.__alloyId6364.add($.__views.__alloyId6365);
    $.__views.__alloyId6366 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6366"
    });
    $.__views.__alloyId6365.add($.__views.__alloyId6366);
    $.__views.__alloyId6367 = Ti.UI.createView({
        id: "__alloyId6367"
    });
    $.__views.__alloyId6367 && $.addTopLevelView($.__views.__alloyId6367);
    $.__views.__alloyId6368 = Ti.UI.createView({
        id: "__alloyId6368"
    });
    $.__views.__alloyId6367.add($.__views.__alloyId6368);
    $.__views.__alloyId6369 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6369"
    });
    $.__views.__alloyId6368.add($.__views.__alloyId6369);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;