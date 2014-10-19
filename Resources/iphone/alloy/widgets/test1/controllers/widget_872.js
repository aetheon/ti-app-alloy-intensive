function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_872";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_872 = Ti.UI.createView({
        id: "widget_872"
    });
    $.__views.widget_872 && $.addTopLevelView($.__views.widget_872);
    $.__views.__alloyId22360 = Ti.UI.createView({
        id: "__alloyId22360"
    });
    $.__views.widget_872.add($.__views.__alloyId22360);
    $.__views.__alloyId22361 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22361"
    });
    $.__views.__alloyId22360.add($.__views.__alloyId22361);
    $.__views.__alloyId22362 = Ti.UI.createView({
        id: "__alloyId22362"
    });
    $.__views.__alloyId22362 && $.addTopLevelView($.__views.__alloyId22362);
    $.__views.__alloyId22363 = Ti.UI.createView({
        id: "__alloyId22363"
    });
    $.__views.__alloyId22362.add($.__views.__alloyId22363);
    $.__views.__alloyId22364 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22364"
    });
    $.__views.__alloyId22363.add($.__views.__alloyId22364);
    $.__views.__alloyId22365 = Ti.UI.createView({
        id: "__alloyId22365"
    });
    $.__views.__alloyId22365 && $.addTopLevelView($.__views.__alloyId22365);
    $.__views.__alloyId22366 = Ti.UI.createView({
        id: "__alloyId22366"
    });
    $.__views.__alloyId22365.add($.__views.__alloyId22366);
    $.__views.__alloyId22367 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22367"
    });
    $.__views.__alloyId22366.add($.__views.__alloyId22367);
    $.__views.__alloyId22368 = Ti.UI.createView({
        id: "__alloyId22368"
    });
    $.__views.__alloyId22368 && $.addTopLevelView($.__views.__alloyId22368);
    $.__views.__alloyId22369 = Ti.UI.createView({
        id: "__alloyId22369"
    });
    $.__views.__alloyId22368.add($.__views.__alloyId22369);
    $.__views.__alloyId22370 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22370"
    });
    $.__views.__alloyId22369.add($.__views.__alloyId22370);
    $.__views.__alloyId22371 = Ti.UI.createView({
        id: "__alloyId22371"
    });
    $.__views.__alloyId22371 && $.addTopLevelView($.__views.__alloyId22371);
    $.__views.__alloyId22372 = Ti.UI.createView({
        id: "__alloyId22372"
    });
    $.__views.__alloyId22371.add($.__views.__alloyId22372);
    $.__views.__alloyId22373 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22373"
    });
    $.__views.__alloyId22372.add($.__views.__alloyId22373);
    $.__views.__alloyId22374 = Ti.UI.createView({
        id: "__alloyId22374"
    });
    $.__views.__alloyId22374 && $.addTopLevelView($.__views.__alloyId22374);
    $.__views.__alloyId22375 = Ti.UI.createView({
        id: "__alloyId22375"
    });
    $.__views.__alloyId22374.add($.__views.__alloyId22375);
    $.__views.__alloyId22376 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22376"
    });
    $.__views.__alloyId22375.add($.__views.__alloyId22376);
    $.__views.__alloyId22377 = Ti.UI.createView({
        id: "__alloyId22377"
    });
    $.__views.__alloyId22377 && $.addTopLevelView($.__views.__alloyId22377);
    $.__views.__alloyId22378 = Ti.UI.createView({
        id: "__alloyId22378"
    });
    $.__views.__alloyId22377.add($.__views.__alloyId22378);
    $.__views.__alloyId22379 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22379"
    });
    $.__views.__alloyId22378.add($.__views.__alloyId22379);
    $.__views.__alloyId22380 = Ti.UI.createView({
        id: "__alloyId22380"
    });
    $.__views.__alloyId22380 && $.addTopLevelView($.__views.__alloyId22380);
    $.__views.__alloyId22381 = Ti.UI.createView({
        id: "__alloyId22381"
    });
    $.__views.__alloyId22380.add($.__views.__alloyId22381);
    $.__views.__alloyId22382 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22382"
    });
    $.__views.__alloyId22381.add($.__views.__alloyId22382);
    $.__views.__alloyId22383 = Ti.UI.createView({
        id: "__alloyId22383"
    });
    $.__views.__alloyId22383 && $.addTopLevelView($.__views.__alloyId22383);
    $.__views.__alloyId22384 = Ti.UI.createView({
        id: "__alloyId22384"
    });
    $.__views.__alloyId22383.add($.__views.__alloyId22384);
    $.__views.__alloyId22385 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22385"
    });
    $.__views.__alloyId22384.add($.__views.__alloyId22385);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;