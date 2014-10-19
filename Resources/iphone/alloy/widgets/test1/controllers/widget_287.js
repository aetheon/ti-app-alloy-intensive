function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_287";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_287 = Ti.UI.createView({
        id: "widget_287"
    });
    $.__views.widget_287 && $.addTopLevelView($.__views.widget_287);
    $.__views.__alloyId5460 = Ti.UI.createView({
        id: "__alloyId5460"
    });
    $.__views.widget_287.add($.__views.__alloyId5460);
    $.__views.__alloyId5461 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5461"
    });
    $.__views.__alloyId5460.add($.__views.__alloyId5461);
    $.__views.__alloyId5462 = Ti.UI.createView({
        id: "__alloyId5462"
    });
    $.__views.__alloyId5462 && $.addTopLevelView($.__views.__alloyId5462);
    $.__views.__alloyId5463 = Ti.UI.createView({
        id: "__alloyId5463"
    });
    $.__views.__alloyId5462.add($.__views.__alloyId5463);
    $.__views.__alloyId5464 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5464"
    });
    $.__views.__alloyId5463.add($.__views.__alloyId5464);
    $.__views.__alloyId5465 = Ti.UI.createView({
        id: "__alloyId5465"
    });
    $.__views.__alloyId5465 && $.addTopLevelView($.__views.__alloyId5465);
    $.__views.__alloyId5466 = Ti.UI.createView({
        id: "__alloyId5466"
    });
    $.__views.__alloyId5465.add($.__views.__alloyId5466);
    $.__views.__alloyId5467 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5467"
    });
    $.__views.__alloyId5466.add($.__views.__alloyId5467);
    $.__views.__alloyId5468 = Ti.UI.createView({
        id: "__alloyId5468"
    });
    $.__views.__alloyId5468 && $.addTopLevelView($.__views.__alloyId5468);
    $.__views.__alloyId5469 = Ti.UI.createView({
        id: "__alloyId5469"
    });
    $.__views.__alloyId5468.add($.__views.__alloyId5469);
    $.__views.__alloyId5470 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5470"
    });
    $.__views.__alloyId5469.add($.__views.__alloyId5470);
    $.__views.__alloyId5471 = Ti.UI.createView({
        id: "__alloyId5471"
    });
    $.__views.__alloyId5471 && $.addTopLevelView($.__views.__alloyId5471);
    $.__views.__alloyId5472 = Ti.UI.createView({
        id: "__alloyId5472"
    });
    $.__views.__alloyId5471.add($.__views.__alloyId5472);
    $.__views.__alloyId5473 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5473"
    });
    $.__views.__alloyId5472.add($.__views.__alloyId5473);
    $.__views.__alloyId5474 = Ti.UI.createView({
        id: "__alloyId5474"
    });
    $.__views.__alloyId5474 && $.addTopLevelView($.__views.__alloyId5474);
    $.__views.__alloyId5475 = Ti.UI.createView({
        id: "__alloyId5475"
    });
    $.__views.__alloyId5474.add($.__views.__alloyId5475);
    $.__views.__alloyId5476 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5476"
    });
    $.__views.__alloyId5475.add($.__views.__alloyId5476);
    $.__views.__alloyId5477 = Ti.UI.createView({
        id: "__alloyId5477"
    });
    $.__views.__alloyId5477 && $.addTopLevelView($.__views.__alloyId5477);
    $.__views.__alloyId5478 = Ti.UI.createView({
        id: "__alloyId5478"
    });
    $.__views.__alloyId5477.add($.__views.__alloyId5478);
    $.__views.__alloyId5479 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5479"
    });
    $.__views.__alloyId5478.add($.__views.__alloyId5479);
    $.__views.__alloyId5480 = Ti.UI.createView({
        id: "__alloyId5480"
    });
    $.__views.__alloyId5480 && $.addTopLevelView($.__views.__alloyId5480);
    $.__views.__alloyId5481 = Ti.UI.createView({
        id: "__alloyId5481"
    });
    $.__views.__alloyId5480.add($.__views.__alloyId5481);
    $.__views.__alloyId5482 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5482"
    });
    $.__views.__alloyId5481.add($.__views.__alloyId5482);
    $.__views.__alloyId5483 = Ti.UI.createView({
        id: "__alloyId5483"
    });
    $.__views.__alloyId5483 && $.addTopLevelView($.__views.__alloyId5483);
    $.__views.__alloyId5484 = Ti.UI.createView({
        id: "__alloyId5484"
    });
    $.__views.__alloyId5483.add($.__views.__alloyId5484);
    $.__views.__alloyId5485 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5485"
    });
    $.__views.__alloyId5484.add($.__views.__alloyId5485);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;