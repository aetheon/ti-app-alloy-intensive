function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_491";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_491 = Ti.UI.createView({
        id: "widget_491"
    });
    $.__views.widget_491 && $.addTopLevelView($.__views.widget_491);
    $.__views.__alloyId11362 = Ti.UI.createView({
        id: "__alloyId11362"
    });
    $.__views.widget_491.add($.__views.__alloyId11362);
    $.__views.__alloyId11363 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11363"
    });
    $.__views.__alloyId11362.add($.__views.__alloyId11363);
    $.__views.__alloyId11364 = Ti.UI.createView({
        id: "__alloyId11364"
    });
    $.__views.__alloyId11364 && $.addTopLevelView($.__views.__alloyId11364);
    $.__views.__alloyId11365 = Ti.UI.createView({
        id: "__alloyId11365"
    });
    $.__views.__alloyId11364.add($.__views.__alloyId11365);
    $.__views.__alloyId11366 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11366"
    });
    $.__views.__alloyId11365.add($.__views.__alloyId11366);
    $.__views.__alloyId11367 = Ti.UI.createView({
        id: "__alloyId11367"
    });
    $.__views.__alloyId11367 && $.addTopLevelView($.__views.__alloyId11367);
    $.__views.__alloyId11368 = Ti.UI.createView({
        id: "__alloyId11368"
    });
    $.__views.__alloyId11367.add($.__views.__alloyId11368);
    $.__views.__alloyId11369 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11369"
    });
    $.__views.__alloyId11368.add($.__views.__alloyId11369);
    $.__views.__alloyId11370 = Ti.UI.createView({
        id: "__alloyId11370"
    });
    $.__views.__alloyId11370 && $.addTopLevelView($.__views.__alloyId11370);
    $.__views.__alloyId11371 = Ti.UI.createView({
        id: "__alloyId11371"
    });
    $.__views.__alloyId11370.add($.__views.__alloyId11371);
    $.__views.__alloyId11372 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11372"
    });
    $.__views.__alloyId11371.add($.__views.__alloyId11372);
    $.__views.__alloyId11373 = Ti.UI.createView({
        id: "__alloyId11373"
    });
    $.__views.__alloyId11373 && $.addTopLevelView($.__views.__alloyId11373);
    $.__views.__alloyId11374 = Ti.UI.createView({
        id: "__alloyId11374"
    });
    $.__views.__alloyId11373.add($.__views.__alloyId11374);
    $.__views.__alloyId11375 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11375"
    });
    $.__views.__alloyId11374.add($.__views.__alloyId11375);
    $.__views.__alloyId11376 = Ti.UI.createView({
        id: "__alloyId11376"
    });
    $.__views.__alloyId11376 && $.addTopLevelView($.__views.__alloyId11376);
    $.__views.__alloyId11377 = Ti.UI.createView({
        id: "__alloyId11377"
    });
    $.__views.__alloyId11376.add($.__views.__alloyId11377);
    $.__views.__alloyId11378 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11378"
    });
    $.__views.__alloyId11377.add($.__views.__alloyId11378);
    $.__views.__alloyId11379 = Ti.UI.createView({
        id: "__alloyId11379"
    });
    $.__views.__alloyId11379 && $.addTopLevelView($.__views.__alloyId11379);
    $.__views.__alloyId11380 = Ti.UI.createView({
        id: "__alloyId11380"
    });
    $.__views.__alloyId11379.add($.__views.__alloyId11380);
    $.__views.__alloyId11381 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11381"
    });
    $.__views.__alloyId11380.add($.__views.__alloyId11381);
    $.__views.__alloyId11382 = Ti.UI.createView({
        id: "__alloyId11382"
    });
    $.__views.__alloyId11382 && $.addTopLevelView($.__views.__alloyId11382);
    $.__views.__alloyId11383 = Ti.UI.createView({
        id: "__alloyId11383"
    });
    $.__views.__alloyId11382.add($.__views.__alloyId11383);
    $.__views.__alloyId11384 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11384"
    });
    $.__views.__alloyId11383.add($.__views.__alloyId11384);
    $.__views.__alloyId11385 = Ti.UI.createView({
        id: "__alloyId11385"
    });
    $.__views.__alloyId11385 && $.addTopLevelView($.__views.__alloyId11385);
    $.__views.__alloyId11386 = Ti.UI.createView({
        id: "__alloyId11386"
    });
    $.__views.__alloyId11385.add($.__views.__alloyId11386);
    $.__views.__alloyId11387 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11387"
    });
    $.__views.__alloyId11386.add($.__views.__alloyId11387);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;