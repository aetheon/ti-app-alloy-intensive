function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_733";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_733 = Ti.UI.createView({
        id: "widget_733"
    });
    $.__views.widget_733 && $.addTopLevelView($.__views.widget_733);
    $.__views.__alloyId18356 = Ti.UI.createView({
        id: "__alloyId18356"
    });
    $.__views.widget_733.add($.__views.__alloyId18356);
    $.__views.__alloyId18357 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18357"
    });
    $.__views.__alloyId18356.add($.__views.__alloyId18357);
    $.__views.__alloyId18358 = Ti.UI.createView({
        id: "__alloyId18358"
    });
    $.__views.__alloyId18358 && $.addTopLevelView($.__views.__alloyId18358);
    $.__views.__alloyId18359 = Ti.UI.createView({
        id: "__alloyId18359"
    });
    $.__views.__alloyId18358.add($.__views.__alloyId18359);
    $.__views.__alloyId18360 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18360"
    });
    $.__views.__alloyId18359.add($.__views.__alloyId18360);
    $.__views.__alloyId18361 = Ti.UI.createView({
        id: "__alloyId18361"
    });
    $.__views.__alloyId18361 && $.addTopLevelView($.__views.__alloyId18361);
    $.__views.__alloyId18362 = Ti.UI.createView({
        id: "__alloyId18362"
    });
    $.__views.__alloyId18361.add($.__views.__alloyId18362);
    $.__views.__alloyId18363 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18363"
    });
    $.__views.__alloyId18362.add($.__views.__alloyId18363);
    $.__views.__alloyId18364 = Ti.UI.createView({
        id: "__alloyId18364"
    });
    $.__views.__alloyId18364 && $.addTopLevelView($.__views.__alloyId18364);
    $.__views.__alloyId18365 = Ti.UI.createView({
        id: "__alloyId18365"
    });
    $.__views.__alloyId18364.add($.__views.__alloyId18365);
    $.__views.__alloyId18366 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18366"
    });
    $.__views.__alloyId18365.add($.__views.__alloyId18366);
    $.__views.__alloyId18367 = Ti.UI.createView({
        id: "__alloyId18367"
    });
    $.__views.__alloyId18367 && $.addTopLevelView($.__views.__alloyId18367);
    $.__views.__alloyId18368 = Ti.UI.createView({
        id: "__alloyId18368"
    });
    $.__views.__alloyId18367.add($.__views.__alloyId18368);
    $.__views.__alloyId18369 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18369"
    });
    $.__views.__alloyId18368.add($.__views.__alloyId18369);
    $.__views.__alloyId18370 = Ti.UI.createView({
        id: "__alloyId18370"
    });
    $.__views.__alloyId18370 && $.addTopLevelView($.__views.__alloyId18370);
    $.__views.__alloyId18371 = Ti.UI.createView({
        id: "__alloyId18371"
    });
    $.__views.__alloyId18370.add($.__views.__alloyId18371);
    $.__views.__alloyId18372 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18372"
    });
    $.__views.__alloyId18371.add($.__views.__alloyId18372);
    $.__views.__alloyId18373 = Ti.UI.createView({
        id: "__alloyId18373"
    });
    $.__views.__alloyId18373 && $.addTopLevelView($.__views.__alloyId18373);
    $.__views.__alloyId18374 = Ti.UI.createView({
        id: "__alloyId18374"
    });
    $.__views.__alloyId18373.add($.__views.__alloyId18374);
    $.__views.__alloyId18375 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18375"
    });
    $.__views.__alloyId18374.add($.__views.__alloyId18375);
    $.__views.__alloyId18376 = Ti.UI.createView({
        id: "__alloyId18376"
    });
    $.__views.__alloyId18376 && $.addTopLevelView($.__views.__alloyId18376);
    $.__views.__alloyId18377 = Ti.UI.createView({
        id: "__alloyId18377"
    });
    $.__views.__alloyId18376.add($.__views.__alloyId18377);
    $.__views.__alloyId18378 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18378"
    });
    $.__views.__alloyId18377.add($.__views.__alloyId18378);
    $.__views.__alloyId18379 = Ti.UI.createView({
        id: "__alloyId18379"
    });
    $.__views.__alloyId18379 && $.addTopLevelView($.__views.__alloyId18379);
    $.__views.__alloyId18380 = Ti.UI.createView({
        id: "__alloyId18380"
    });
    $.__views.__alloyId18379.add($.__views.__alloyId18380);
    $.__views.__alloyId18381 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18381"
    });
    $.__views.__alloyId18380.add($.__views.__alloyId18381);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;