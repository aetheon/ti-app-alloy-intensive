function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_283";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_283 = Ti.UI.createView({
        id: "widget_283"
    });
    $.__views.widget_283 && $.addTopLevelView($.__views.widget_283);
    $.__views.__alloyId5356 = Ti.UI.createView({
        id: "__alloyId5356"
    });
    $.__views.widget_283.add($.__views.__alloyId5356);
    $.__views.__alloyId5357 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5357"
    });
    $.__views.__alloyId5356.add($.__views.__alloyId5357);
    $.__views.__alloyId5358 = Ti.UI.createView({
        id: "__alloyId5358"
    });
    $.__views.__alloyId5358 && $.addTopLevelView($.__views.__alloyId5358);
    $.__views.__alloyId5359 = Ti.UI.createView({
        id: "__alloyId5359"
    });
    $.__views.__alloyId5358.add($.__views.__alloyId5359);
    $.__views.__alloyId5360 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5360"
    });
    $.__views.__alloyId5359.add($.__views.__alloyId5360);
    $.__views.__alloyId5361 = Ti.UI.createView({
        id: "__alloyId5361"
    });
    $.__views.__alloyId5361 && $.addTopLevelView($.__views.__alloyId5361);
    $.__views.__alloyId5362 = Ti.UI.createView({
        id: "__alloyId5362"
    });
    $.__views.__alloyId5361.add($.__views.__alloyId5362);
    $.__views.__alloyId5363 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5363"
    });
    $.__views.__alloyId5362.add($.__views.__alloyId5363);
    $.__views.__alloyId5364 = Ti.UI.createView({
        id: "__alloyId5364"
    });
    $.__views.__alloyId5364 && $.addTopLevelView($.__views.__alloyId5364);
    $.__views.__alloyId5365 = Ti.UI.createView({
        id: "__alloyId5365"
    });
    $.__views.__alloyId5364.add($.__views.__alloyId5365);
    $.__views.__alloyId5366 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5366"
    });
    $.__views.__alloyId5365.add($.__views.__alloyId5366);
    $.__views.__alloyId5367 = Ti.UI.createView({
        id: "__alloyId5367"
    });
    $.__views.__alloyId5367 && $.addTopLevelView($.__views.__alloyId5367);
    $.__views.__alloyId5368 = Ti.UI.createView({
        id: "__alloyId5368"
    });
    $.__views.__alloyId5367.add($.__views.__alloyId5368);
    $.__views.__alloyId5369 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5369"
    });
    $.__views.__alloyId5368.add($.__views.__alloyId5369);
    $.__views.__alloyId5370 = Ti.UI.createView({
        id: "__alloyId5370"
    });
    $.__views.__alloyId5370 && $.addTopLevelView($.__views.__alloyId5370);
    $.__views.__alloyId5371 = Ti.UI.createView({
        id: "__alloyId5371"
    });
    $.__views.__alloyId5370.add($.__views.__alloyId5371);
    $.__views.__alloyId5372 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5372"
    });
    $.__views.__alloyId5371.add($.__views.__alloyId5372);
    $.__views.__alloyId5373 = Ti.UI.createView({
        id: "__alloyId5373"
    });
    $.__views.__alloyId5373 && $.addTopLevelView($.__views.__alloyId5373);
    $.__views.__alloyId5374 = Ti.UI.createView({
        id: "__alloyId5374"
    });
    $.__views.__alloyId5373.add($.__views.__alloyId5374);
    $.__views.__alloyId5375 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5375"
    });
    $.__views.__alloyId5374.add($.__views.__alloyId5375);
    $.__views.__alloyId5376 = Ti.UI.createView({
        id: "__alloyId5376"
    });
    $.__views.__alloyId5376 && $.addTopLevelView($.__views.__alloyId5376);
    $.__views.__alloyId5377 = Ti.UI.createView({
        id: "__alloyId5377"
    });
    $.__views.__alloyId5376.add($.__views.__alloyId5377);
    $.__views.__alloyId5378 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5378"
    });
    $.__views.__alloyId5377.add($.__views.__alloyId5378);
    $.__views.__alloyId5379 = Ti.UI.createView({
        id: "__alloyId5379"
    });
    $.__views.__alloyId5379 && $.addTopLevelView($.__views.__alloyId5379);
    $.__views.__alloyId5380 = Ti.UI.createView({
        id: "__alloyId5380"
    });
    $.__views.__alloyId5379.add($.__views.__alloyId5380);
    $.__views.__alloyId5381 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5381"
    });
    $.__views.__alloyId5380.add($.__views.__alloyId5381);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;