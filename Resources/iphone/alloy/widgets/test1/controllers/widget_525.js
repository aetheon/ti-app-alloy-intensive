function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_525";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_525 = Ti.UI.createView({
        id: "widget_525"
    });
    $.__views.widget_525 && $.addTopLevelView($.__views.widget_525);
    $.__views.__alloyId12350 = Ti.UI.createView({
        id: "__alloyId12350"
    });
    $.__views.widget_525.add($.__views.__alloyId12350);
    $.__views.__alloyId12351 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12351"
    });
    $.__views.__alloyId12350.add($.__views.__alloyId12351);
    $.__views.__alloyId12352 = Ti.UI.createView({
        id: "__alloyId12352"
    });
    $.__views.__alloyId12352 && $.addTopLevelView($.__views.__alloyId12352);
    $.__views.__alloyId12353 = Ti.UI.createView({
        id: "__alloyId12353"
    });
    $.__views.__alloyId12352.add($.__views.__alloyId12353);
    $.__views.__alloyId12354 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12354"
    });
    $.__views.__alloyId12353.add($.__views.__alloyId12354);
    $.__views.__alloyId12355 = Ti.UI.createView({
        id: "__alloyId12355"
    });
    $.__views.__alloyId12355 && $.addTopLevelView($.__views.__alloyId12355);
    $.__views.__alloyId12356 = Ti.UI.createView({
        id: "__alloyId12356"
    });
    $.__views.__alloyId12355.add($.__views.__alloyId12356);
    $.__views.__alloyId12357 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12357"
    });
    $.__views.__alloyId12356.add($.__views.__alloyId12357);
    $.__views.__alloyId12358 = Ti.UI.createView({
        id: "__alloyId12358"
    });
    $.__views.__alloyId12358 && $.addTopLevelView($.__views.__alloyId12358);
    $.__views.__alloyId12359 = Ti.UI.createView({
        id: "__alloyId12359"
    });
    $.__views.__alloyId12358.add($.__views.__alloyId12359);
    $.__views.__alloyId12360 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12360"
    });
    $.__views.__alloyId12359.add($.__views.__alloyId12360);
    $.__views.__alloyId12361 = Ti.UI.createView({
        id: "__alloyId12361"
    });
    $.__views.__alloyId12361 && $.addTopLevelView($.__views.__alloyId12361);
    $.__views.__alloyId12362 = Ti.UI.createView({
        id: "__alloyId12362"
    });
    $.__views.__alloyId12361.add($.__views.__alloyId12362);
    $.__views.__alloyId12363 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12363"
    });
    $.__views.__alloyId12362.add($.__views.__alloyId12363);
    $.__views.__alloyId12364 = Ti.UI.createView({
        id: "__alloyId12364"
    });
    $.__views.__alloyId12364 && $.addTopLevelView($.__views.__alloyId12364);
    $.__views.__alloyId12365 = Ti.UI.createView({
        id: "__alloyId12365"
    });
    $.__views.__alloyId12364.add($.__views.__alloyId12365);
    $.__views.__alloyId12366 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12366"
    });
    $.__views.__alloyId12365.add($.__views.__alloyId12366);
    $.__views.__alloyId12367 = Ti.UI.createView({
        id: "__alloyId12367"
    });
    $.__views.__alloyId12367 && $.addTopLevelView($.__views.__alloyId12367);
    $.__views.__alloyId12368 = Ti.UI.createView({
        id: "__alloyId12368"
    });
    $.__views.__alloyId12367.add($.__views.__alloyId12368);
    $.__views.__alloyId12369 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12369"
    });
    $.__views.__alloyId12368.add($.__views.__alloyId12369);
    $.__views.__alloyId12370 = Ti.UI.createView({
        id: "__alloyId12370"
    });
    $.__views.__alloyId12370 && $.addTopLevelView($.__views.__alloyId12370);
    $.__views.__alloyId12371 = Ti.UI.createView({
        id: "__alloyId12371"
    });
    $.__views.__alloyId12370.add($.__views.__alloyId12371);
    $.__views.__alloyId12372 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12372"
    });
    $.__views.__alloyId12371.add($.__views.__alloyId12372);
    $.__views.__alloyId12373 = Ti.UI.createView({
        id: "__alloyId12373"
    });
    $.__views.__alloyId12373 && $.addTopLevelView($.__views.__alloyId12373);
    $.__views.__alloyId12374 = Ti.UI.createView({
        id: "__alloyId12374"
    });
    $.__views.__alloyId12373.add($.__views.__alloyId12374);
    $.__views.__alloyId12375 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId12375"
    });
    $.__views.__alloyId12374.add($.__views.__alloyId12375);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;