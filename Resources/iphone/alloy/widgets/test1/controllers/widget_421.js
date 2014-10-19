function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_421";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_421 = Ti.UI.createView({
        id: "widget_421"
    });
    $.__views.widget_421 && $.addTopLevelView($.__views.widget_421);
    $.__views.__alloyId9360 = Ti.UI.createView({
        id: "__alloyId9360"
    });
    $.__views.widget_421.add($.__views.__alloyId9360);
    $.__views.__alloyId9361 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9361"
    });
    $.__views.__alloyId9360.add($.__views.__alloyId9361);
    $.__views.__alloyId9362 = Ti.UI.createView({
        id: "__alloyId9362"
    });
    $.__views.__alloyId9362 && $.addTopLevelView($.__views.__alloyId9362);
    $.__views.__alloyId9363 = Ti.UI.createView({
        id: "__alloyId9363"
    });
    $.__views.__alloyId9362.add($.__views.__alloyId9363);
    $.__views.__alloyId9364 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9364"
    });
    $.__views.__alloyId9363.add($.__views.__alloyId9364);
    $.__views.__alloyId9365 = Ti.UI.createView({
        id: "__alloyId9365"
    });
    $.__views.__alloyId9365 && $.addTopLevelView($.__views.__alloyId9365);
    $.__views.__alloyId9366 = Ti.UI.createView({
        id: "__alloyId9366"
    });
    $.__views.__alloyId9365.add($.__views.__alloyId9366);
    $.__views.__alloyId9367 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9367"
    });
    $.__views.__alloyId9366.add($.__views.__alloyId9367);
    $.__views.__alloyId9368 = Ti.UI.createView({
        id: "__alloyId9368"
    });
    $.__views.__alloyId9368 && $.addTopLevelView($.__views.__alloyId9368);
    $.__views.__alloyId9369 = Ti.UI.createView({
        id: "__alloyId9369"
    });
    $.__views.__alloyId9368.add($.__views.__alloyId9369);
    $.__views.__alloyId9370 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9370"
    });
    $.__views.__alloyId9369.add($.__views.__alloyId9370);
    $.__views.__alloyId9371 = Ti.UI.createView({
        id: "__alloyId9371"
    });
    $.__views.__alloyId9371 && $.addTopLevelView($.__views.__alloyId9371);
    $.__views.__alloyId9372 = Ti.UI.createView({
        id: "__alloyId9372"
    });
    $.__views.__alloyId9371.add($.__views.__alloyId9372);
    $.__views.__alloyId9373 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9373"
    });
    $.__views.__alloyId9372.add($.__views.__alloyId9373);
    $.__views.__alloyId9374 = Ti.UI.createView({
        id: "__alloyId9374"
    });
    $.__views.__alloyId9374 && $.addTopLevelView($.__views.__alloyId9374);
    $.__views.__alloyId9375 = Ti.UI.createView({
        id: "__alloyId9375"
    });
    $.__views.__alloyId9374.add($.__views.__alloyId9375);
    $.__views.__alloyId9376 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9376"
    });
    $.__views.__alloyId9375.add($.__views.__alloyId9376);
    $.__views.__alloyId9377 = Ti.UI.createView({
        id: "__alloyId9377"
    });
    $.__views.__alloyId9377 && $.addTopLevelView($.__views.__alloyId9377);
    $.__views.__alloyId9378 = Ti.UI.createView({
        id: "__alloyId9378"
    });
    $.__views.__alloyId9377.add($.__views.__alloyId9378);
    $.__views.__alloyId9379 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9379"
    });
    $.__views.__alloyId9378.add($.__views.__alloyId9379);
    $.__views.__alloyId9380 = Ti.UI.createView({
        id: "__alloyId9380"
    });
    $.__views.__alloyId9380 && $.addTopLevelView($.__views.__alloyId9380);
    $.__views.__alloyId9381 = Ti.UI.createView({
        id: "__alloyId9381"
    });
    $.__views.__alloyId9380.add($.__views.__alloyId9381);
    $.__views.__alloyId9382 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9382"
    });
    $.__views.__alloyId9381.add($.__views.__alloyId9382);
    $.__views.__alloyId9383 = Ti.UI.createView({
        id: "__alloyId9383"
    });
    $.__views.__alloyId9383 && $.addTopLevelView($.__views.__alloyId9383);
    $.__views.__alloyId9384 = Ti.UI.createView({
        id: "__alloyId9384"
    });
    $.__views.__alloyId9383.add($.__views.__alloyId9384);
    $.__views.__alloyId9385 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9385"
    });
    $.__views.__alloyId9384.add($.__views.__alloyId9385);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;