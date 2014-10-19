function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_352";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_352 = Ti.UI.createView({
        id: "widget_352"
    });
    $.__views.widget_352 && $.addTopLevelView($.__views.widget_352);
    $.__views.__alloyId7358 = Ti.UI.createView({
        id: "__alloyId7358"
    });
    $.__views.widget_352.add($.__views.__alloyId7358);
    $.__views.__alloyId7359 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7359"
    });
    $.__views.__alloyId7358.add($.__views.__alloyId7359);
    $.__views.__alloyId7360 = Ti.UI.createView({
        id: "__alloyId7360"
    });
    $.__views.__alloyId7360 && $.addTopLevelView($.__views.__alloyId7360);
    $.__views.__alloyId7361 = Ti.UI.createView({
        id: "__alloyId7361"
    });
    $.__views.__alloyId7360.add($.__views.__alloyId7361);
    $.__views.__alloyId7362 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7362"
    });
    $.__views.__alloyId7361.add($.__views.__alloyId7362);
    $.__views.__alloyId7363 = Ti.UI.createView({
        id: "__alloyId7363"
    });
    $.__views.__alloyId7363 && $.addTopLevelView($.__views.__alloyId7363);
    $.__views.__alloyId7364 = Ti.UI.createView({
        id: "__alloyId7364"
    });
    $.__views.__alloyId7363.add($.__views.__alloyId7364);
    $.__views.__alloyId7365 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7365"
    });
    $.__views.__alloyId7364.add($.__views.__alloyId7365);
    $.__views.__alloyId7366 = Ti.UI.createView({
        id: "__alloyId7366"
    });
    $.__views.__alloyId7366 && $.addTopLevelView($.__views.__alloyId7366);
    $.__views.__alloyId7367 = Ti.UI.createView({
        id: "__alloyId7367"
    });
    $.__views.__alloyId7366.add($.__views.__alloyId7367);
    $.__views.__alloyId7368 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7368"
    });
    $.__views.__alloyId7367.add($.__views.__alloyId7368);
    $.__views.__alloyId7369 = Ti.UI.createView({
        id: "__alloyId7369"
    });
    $.__views.__alloyId7369 && $.addTopLevelView($.__views.__alloyId7369);
    $.__views.__alloyId7370 = Ti.UI.createView({
        id: "__alloyId7370"
    });
    $.__views.__alloyId7369.add($.__views.__alloyId7370);
    $.__views.__alloyId7371 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7371"
    });
    $.__views.__alloyId7370.add($.__views.__alloyId7371);
    $.__views.__alloyId7372 = Ti.UI.createView({
        id: "__alloyId7372"
    });
    $.__views.__alloyId7372 && $.addTopLevelView($.__views.__alloyId7372);
    $.__views.__alloyId7373 = Ti.UI.createView({
        id: "__alloyId7373"
    });
    $.__views.__alloyId7372.add($.__views.__alloyId7373);
    $.__views.__alloyId7374 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7374"
    });
    $.__views.__alloyId7373.add($.__views.__alloyId7374);
    $.__views.__alloyId7375 = Ti.UI.createView({
        id: "__alloyId7375"
    });
    $.__views.__alloyId7375 && $.addTopLevelView($.__views.__alloyId7375);
    $.__views.__alloyId7376 = Ti.UI.createView({
        id: "__alloyId7376"
    });
    $.__views.__alloyId7375.add($.__views.__alloyId7376);
    $.__views.__alloyId7377 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7377"
    });
    $.__views.__alloyId7376.add($.__views.__alloyId7377);
    $.__views.__alloyId7378 = Ti.UI.createView({
        id: "__alloyId7378"
    });
    $.__views.__alloyId7378 && $.addTopLevelView($.__views.__alloyId7378);
    $.__views.__alloyId7379 = Ti.UI.createView({
        id: "__alloyId7379"
    });
    $.__views.__alloyId7378.add($.__views.__alloyId7379);
    $.__views.__alloyId7380 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7380"
    });
    $.__views.__alloyId7379.add($.__views.__alloyId7380);
    $.__views.__alloyId7381 = Ti.UI.createView({
        id: "__alloyId7381"
    });
    $.__views.__alloyId7381 && $.addTopLevelView($.__views.__alloyId7381);
    $.__views.__alloyId7382 = Ti.UI.createView({
        id: "__alloyId7382"
    });
    $.__views.__alloyId7381.add($.__views.__alloyId7382);
    $.__views.__alloyId7383 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7383"
    });
    $.__views.__alloyId7382.add($.__views.__alloyId7383);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;