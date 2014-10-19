function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_560";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_560 = Ti.UI.createView({
        id: "widget_560"
    });
    $.__views.widget_560 && $.addTopLevelView($.__views.widget_560);
    $.__views.__alloyId13364 = Ti.UI.createView({
        id: "__alloyId13364"
    });
    $.__views.widget_560.add($.__views.__alloyId13364);
    $.__views.__alloyId13365 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13365"
    });
    $.__views.__alloyId13364.add($.__views.__alloyId13365);
    $.__views.__alloyId13366 = Ti.UI.createView({
        id: "__alloyId13366"
    });
    $.__views.__alloyId13366 && $.addTopLevelView($.__views.__alloyId13366);
    $.__views.__alloyId13367 = Ti.UI.createView({
        id: "__alloyId13367"
    });
    $.__views.__alloyId13366.add($.__views.__alloyId13367);
    $.__views.__alloyId13368 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13368"
    });
    $.__views.__alloyId13367.add($.__views.__alloyId13368);
    $.__views.__alloyId13369 = Ti.UI.createView({
        id: "__alloyId13369"
    });
    $.__views.__alloyId13369 && $.addTopLevelView($.__views.__alloyId13369);
    $.__views.__alloyId13370 = Ti.UI.createView({
        id: "__alloyId13370"
    });
    $.__views.__alloyId13369.add($.__views.__alloyId13370);
    $.__views.__alloyId13371 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13371"
    });
    $.__views.__alloyId13370.add($.__views.__alloyId13371);
    $.__views.__alloyId13372 = Ti.UI.createView({
        id: "__alloyId13372"
    });
    $.__views.__alloyId13372 && $.addTopLevelView($.__views.__alloyId13372);
    $.__views.__alloyId13373 = Ti.UI.createView({
        id: "__alloyId13373"
    });
    $.__views.__alloyId13372.add($.__views.__alloyId13373);
    $.__views.__alloyId13374 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13374"
    });
    $.__views.__alloyId13373.add($.__views.__alloyId13374);
    $.__views.__alloyId13375 = Ti.UI.createView({
        id: "__alloyId13375"
    });
    $.__views.__alloyId13375 && $.addTopLevelView($.__views.__alloyId13375);
    $.__views.__alloyId13376 = Ti.UI.createView({
        id: "__alloyId13376"
    });
    $.__views.__alloyId13375.add($.__views.__alloyId13376);
    $.__views.__alloyId13377 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13377"
    });
    $.__views.__alloyId13376.add($.__views.__alloyId13377);
    $.__views.__alloyId13378 = Ti.UI.createView({
        id: "__alloyId13378"
    });
    $.__views.__alloyId13378 && $.addTopLevelView($.__views.__alloyId13378);
    $.__views.__alloyId13379 = Ti.UI.createView({
        id: "__alloyId13379"
    });
    $.__views.__alloyId13378.add($.__views.__alloyId13379);
    $.__views.__alloyId13380 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13380"
    });
    $.__views.__alloyId13379.add($.__views.__alloyId13380);
    $.__views.__alloyId13381 = Ti.UI.createView({
        id: "__alloyId13381"
    });
    $.__views.__alloyId13381 && $.addTopLevelView($.__views.__alloyId13381);
    $.__views.__alloyId13382 = Ti.UI.createView({
        id: "__alloyId13382"
    });
    $.__views.__alloyId13381.add($.__views.__alloyId13382);
    $.__views.__alloyId13383 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13383"
    });
    $.__views.__alloyId13382.add($.__views.__alloyId13383);
    $.__views.__alloyId13384 = Ti.UI.createView({
        id: "__alloyId13384"
    });
    $.__views.__alloyId13384 && $.addTopLevelView($.__views.__alloyId13384);
    $.__views.__alloyId13385 = Ti.UI.createView({
        id: "__alloyId13385"
    });
    $.__views.__alloyId13384.add($.__views.__alloyId13385);
    $.__views.__alloyId13386 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13386"
    });
    $.__views.__alloyId13385.add($.__views.__alloyId13386);
    $.__views.__alloyId13387 = Ti.UI.createView({
        id: "__alloyId13387"
    });
    $.__views.__alloyId13387 && $.addTopLevelView($.__views.__alloyId13387);
    $.__views.__alloyId13388 = Ti.UI.createView({
        id: "__alloyId13388"
    });
    $.__views.__alloyId13387.add($.__views.__alloyId13388);
    $.__views.__alloyId13389 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13389"
    });
    $.__views.__alloyId13388.add($.__views.__alloyId13389);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;