function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_595";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_595 = Ti.UI.createView({
        id: "widget_595"
    });
    $.__views.widget_595 && $.addTopLevelView($.__views.widget_595);
    $.__views.__alloyId14352 = Ti.UI.createView({
        id: "__alloyId14352"
    });
    $.__views.widget_595.add($.__views.__alloyId14352);
    $.__views.__alloyId14353 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14353"
    });
    $.__views.__alloyId14352.add($.__views.__alloyId14353);
    $.__views.__alloyId14354 = Ti.UI.createView({
        id: "__alloyId14354"
    });
    $.__views.__alloyId14354 && $.addTopLevelView($.__views.__alloyId14354);
    $.__views.__alloyId14355 = Ti.UI.createView({
        id: "__alloyId14355"
    });
    $.__views.__alloyId14354.add($.__views.__alloyId14355);
    $.__views.__alloyId14356 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14356"
    });
    $.__views.__alloyId14355.add($.__views.__alloyId14356);
    $.__views.__alloyId14357 = Ti.UI.createView({
        id: "__alloyId14357"
    });
    $.__views.__alloyId14357 && $.addTopLevelView($.__views.__alloyId14357);
    $.__views.__alloyId14358 = Ti.UI.createView({
        id: "__alloyId14358"
    });
    $.__views.__alloyId14357.add($.__views.__alloyId14358);
    $.__views.__alloyId14359 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14359"
    });
    $.__views.__alloyId14358.add($.__views.__alloyId14359);
    $.__views.__alloyId14360 = Ti.UI.createView({
        id: "__alloyId14360"
    });
    $.__views.__alloyId14360 && $.addTopLevelView($.__views.__alloyId14360);
    $.__views.__alloyId14361 = Ti.UI.createView({
        id: "__alloyId14361"
    });
    $.__views.__alloyId14360.add($.__views.__alloyId14361);
    $.__views.__alloyId14362 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14362"
    });
    $.__views.__alloyId14361.add($.__views.__alloyId14362);
    $.__views.__alloyId14363 = Ti.UI.createView({
        id: "__alloyId14363"
    });
    $.__views.__alloyId14363 && $.addTopLevelView($.__views.__alloyId14363);
    $.__views.__alloyId14364 = Ti.UI.createView({
        id: "__alloyId14364"
    });
    $.__views.__alloyId14363.add($.__views.__alloyId14364);
    $.__views.__alloyId14365 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14365"
    });
    $.__views.__alloyId14364.add($.__views.__alloyId14365);
    $.__views.__alloyId14366 = Ti.UI.createView({
        id: "__alloyId14366"
    });
    $.__views.__alloyId14366 && $.addTopLevelView($.__views.__alloyId14366);
    $.__views.__alloyId14367 = Ti.UI.createView({
        id: "__alloyId14367"
    });
    $.__views.__alloyId14366.add($.__views.__alloyId14367);
    $.__views.__alloyId14368 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14368"
    });
    $.__views.__alloyId14367.add($.__views.__alloyId14368);
    $.__views.__alloyId14369 = Ti.UI.createView({
        id: "__alloyId14369"
    });
    $.__views.__alloyId14369 && $.addTopLevelView($.__views.__alloyId14369);
    $.__views.__alloyId14370 = Ti.UI.createView({
        id: "__alloyId14370"
    });
    $.__views.__alloyId14369.add($.__views.__alloyId14370);
    $.__views.__alloyId14371 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14371"
    });
    $.__views.__alloyId14370.add($.__views.__alloyId14371);
    $.__views.__alloyId14372 = Ti.UI.createView({
        id: "__alloyId14372"
    });
    $.__views.__alloyId14372 && $.addTopLevelView($.__views.__alloyId14372);
    $.__views.__alloyId14373 = Ti.UI.createView({
        id: "__alloyId14373"
    });
    $.__views.__alloyId14372.add($.__views.__alloyId14373);
    $.__views.__alloyId14374 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14374"
    });
    $.__views.__alloyId14373.add($.__views.__alloyId14374);
    $.__views.__alloyId14375 = Ti.UI.createView({
        id: "__alloyId14375"
    });
    $.__views.__alloyId14375 && $.addTopLevelView($.__views.__alloyId14375);
    $.__views.__alloyId14376 = Ti.UI.createView({
        id: "__alloyId14376"
    });
    $.__views.__alloyId14375.add($.__views.__alloyId14376);
    $.__views.__alloyId14377 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14377"
    });
    $.__views.__alloyId14376.add($.__views.__alloyId14377);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;