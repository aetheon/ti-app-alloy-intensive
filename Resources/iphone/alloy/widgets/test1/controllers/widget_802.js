function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_802";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_802 = Ti.UI.createView({
        id: "widget_802"
    });
    $.__views.widget_802 && $.addTopLevelView($.__views.widget_802);
    $.__views.__alloyId20358 = Ti.UI.createView({
        id: "__alloyId20358"
    });
    $.__views.widget_802.add($.__views.__alloyId20358);
    $.__views.__alloyId20359 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20359"
    });
    $.__views.__alloyId20358.add($.__views.__alloyId20359);
    $.__views.__alloyId20360 = Ti.UI.createView({
        id: "__alloyId20360"
    });
    $.__views.__alloyId20360 && $.addTopLevelView($.__views.__alloyId20360);
    $.__views.__alloyId20361 = Ti.UI.createView({
        id: "__alloyId20361"
    });
    $.__views.__alloyId20360.add($.__views.__alloyId20361);
    $.__views.__alloyId20362 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20362"
    });
    $.__views.__alloyId20361.add($.__views.__alloyId20362);
    $.__views.__alloyId20363 = Ti.UI.createView({
        id: "__alloyId20363"
    });
    $.__views.__alloyId20363 && $.addTopLevelView($.__views.__alloyId20363);
    $.__views.__alloyId20364 = Ti.UI.createView({
        id: "__alloyId20364"
    });
    $.__views.__alloyId20363.add($.__views.__alloyId20364);
    $.__views.__alloyId20365 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20365"
    });
    $.__views.__alloyId20364.add($.__views.__alloyId20365);
    $.__views.__alloyId20366 = Ti.UI.createView({
        id: "__alloyId20366"
    });
    $.__views.__alloyId20366 && $.addTopLevelView($.__views.__alloyId20366);
    $.__views.__alloyId20367 = Ti.UI.createView({
        id: "__alloyId20367"
    });
    $.__views.__alloyId20366.add($.__views.__alloyId20367);
    $.__views.__alloyId20368 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20368"
    });
    $.__views.__alloyId20367.add($.__views.__alloyId20368);
    $.__views.__alloyId20369 = Ti.UI.createView({
        id: "__alloyId20369"
    });
    $.__views.__alloyId20369 && $.addTopLevelView($.__views.__alloyId20369);
    $.__views.__alloyId20370 = Ti.UI.createView({
        id: "__alloyId20370"
    });
    $.__views.__alloyId20369.add($.__views.__alloyId20370);
    $.__views.__alloyId20371 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20371"
    });
    $.__views.__alloyId20370.add($.__views.__alloyId20371);
    $.__views.__alloyId20372 = Ti.UI.createView({
        id: "__alloyId20372"
    });
    $.__views.__alloyId20372 && $.addTopLevelView($.__views.__alloyId20372);
    $.__views.__alloyId20373 = Ti.UI.createView({
        id: "__alloyId20373"
    });
    $.__views.__alloyId20372.add($.__views.__alloyId20373);
    $.__views.__alloyId20374 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20374"
    });
    $.__views.__alloyId20373.add($.__views.__alloyId20374);
    $.__views.__alloyId20375 = Ti.UI.createView({
        id: "__alloyId20375"
    });
    $.__views.__alloyId20375 && $.addTopLevelView($.__views.__alloyId20375);
    $.__views.__alloyId20376 = Ti.UI.createView({
        id: "__alloyId20376"
    });
    $.__views.__alloyId20375.add($.__views.__alloyId20376);
    $.__views.__alloyId20377 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20377"
    });
    $.__views.__alloyId20376.add($.__views.__alloyId20377);
    $.__views.__alloyId20378 = Ti.UI.createView({
        id: "__alloyId20378"
    });
    $.__views.__alloyId20378 && $.addTopLevelView($.__views.__alloyId20378);
    $.__views.__alloyId20379 = Ti.UI.createView({
        id: "__alloyId20379"
    });
    $.__views.__alloyId20378.add($.__views.__alloyId20379);
    $.__views.__alloyId20380 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20380"
    });
    $.__views.__alloyId20379.add($.__views.__alloyId20380);
    $.__views.__alloyId20381 = Ti.UI.createView({
        id: "__alloyId20381"
    });
    $.__views.__alloyId20381 && $.addTopLevelView($.__views.__alloyId20381);
    $.__views.__alloyId20382 = Ti.UI.createView({
        id: "__alloyId20382"
    });
    $.__views.__alloyId20381.add($.__views.__alloyId20382);
    $.__views.__alloyId20383 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20383"
    });
    $.__views.__alloyId20382.add($.__views.__alloyId20383);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;