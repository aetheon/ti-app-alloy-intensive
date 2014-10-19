function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_941";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_941 = Ti.UI.createView({
        id: "widget_941"
    });
    $.__views.widget_941 && $.addTopLevelView($.__views.widget_941);
    $.__views.__alloyId24362 = Ti.UI.createView({
        id: "__alloyId24362"
    });
    $.__views.widget_941.add($.__views.__alloyId24362);
    $.__views.__alloyId24363 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24363"
    });
    $.__views.__alloyId24362.add($.__views.__alloyId24363);
    $.__views.__alloyId24364 = Ti.UI.createView({
        id: "__alloyId24364"
    });
    $.__views.__alloyId24364 && $.addTopLevelView($.__views.__alloyId24364);
    $.__views.__alloyId24365 = Ti.UI.createView({
        id: "__alloyId24365"
    });
    $.__views.__alloyId24364.add($.__views.__alloyId24365);
    $.__views.__alloyId24366 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24366"
    });
    $.__views.__alloyId24365.add($.__views.__alloyId24366);
    $.__views.__alloyId24367 = Ti.UI.createView({
        id: "__alloyId24367"
    });
    $.__views.__alloyId24367 && $.addTopLevelView($.__views.__alloyId24367);
    $.__views.__alloyId24368 = Ti.UI.createView({
        id: "__alloyId24368"
    });
    $.__views.__alloyId24367.add($.__views.__alloyId24368);
    $.__views.__alloyId24369 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24369"
    });
    $.__views.__alloyId24368.add($.__views.__alloyId24369);
    $.__views.__alloyId24370 = Ti.UI.createView({
        id: "__alloyId24370"
    });
    $.__views.__alloyId24370 && $.addTopLevelView($.__views.__alloyId24370);
    $.__views.__alloyId24371 = Ti.UI.createView({
        id: "__alloyId24371"
    });
    $.__views.__alloyId24370.add($.__views.__alloyId24371);
    $.__views.__alloyId24372 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24372"
    });
    $.__views.__alloyId24371.add($.__views.__alloyId24372);
    $.__views.__alloyId24373 = Ti.UI.createView({
        id: "__alloyId24373"
    });
    $.__views.__alloyId24373 && $.addTopLevelView($.__views.__alloyId24373);
    $.__views.__alloyId24374 = Ti.UI.createView({
        id: "__alloyId24374"
    });
    $.__views.__alloyId24373.add($.__views.__alloyId24374);
    $.__views.__alloyId24375 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24375"
    });
    $.__views.__alloyId24374.add($.__views.__alloyId24375);
    $.__views.__alloyId24376 = Ti.UI.createView({
        id: "__alloyId24376"
    });
    $.__views.__alloyId24376 && $.addTopLevelView($.__views.__alloyId24376);
    $.__views.__alloyId24377 = Ti.UI.createView({
        id: "__alloyId24377"
    });
    $.__views.__alloyId24376.add($.__views.__alloyId24377);
    $.__views.__alloyId24378 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24378"
    });
    $.__views.__alloyId24377.add($.__views.__alloyId24378);
    $.__views.__alloyId24379 = Ti.UI.createView({
        id: "__alloyId24379"
    });
    $.__views.__alloyId24379 && $.addTopLevelView($.__views.__alloyId24379);
    $.__views.__alloyId24380 = Ti.UI.createView({
        id: "__alloyId24380"
    });
    $.__views.__alloyId24379.add($.__views.__alloyId24380);
    $.__views.__alloyId24381 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24381"
    });
    $.__views.__alloyId24380.add($.__views.__alloyId24381);
    $.__views.__alloyId24382 = Ti.UI.createView({
        id: "__alloyId24382"
    });
    $.__views.__alloyId24382 && $.addTopLevelView($.__views.__alloyId24382);
    $.__views.__alloyId24383 = Ti.UI.createView({
        id: "__alloyId24383"
    });
    $.__views.__alloyId24382.add($.__views.__alloyId24383);
    $.__views.__alloyId24384 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24384"
    });
    $.__views.__alloyId24383.add($.__views.__alloyId24384);
    $.__views.__alloyId24385 = Ti.UI.createView({
        id: "__alloyId24385"
    });
    $.__views.__alloyId24385 && $.addTopLevelView($.__views.__alloyId24385);
    $.__views.__alloyId24386 = Ti.UI.createView({
        id: "__alloyId24386"
    });
    $.__views.__alloyId24385.add($.__views.__alloyId24386);
    $.__views.__alloyId24387 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24387"
    });
    $.__views.__alloyId24386.add($.__views.__alloyId24387);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;