function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_944";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_944 = Ti.UI.createView({
        id: "widget_944"
    });
    $.__views.widget_944 && $.addTopLevelView($.__views.widget_944);
    $.__views.__alloyId24440 = Ti.UI.createView({
        id: "__alloyId24440"
    });
    $.__views.widget_944.add($.__views.__alloyId24440);
    $.__views.__alloyId24441 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24441"
    });
    $.__views.__alloyId24440.add($.__views.__alloyId24441);
    $.__views.__alloyId24442 = Ti.UI.createView({
        id: "__alloyId24442"
    });
    $.__views.__alloyId24442 && $.addTopLevelView($.__views.__alloyId24442);
    $.__views.__alloyId24443 = Ti.UI.createView({
        id: "__alloyId24443"
    });
    $.__views.__alloyId24442.add($.__views.__alloyId24443);
    $.__views.__alloyId24444 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24444"
    });
    $.__views.__alloyId24443.add($.__views.__alloyId24444);
    $.__views.__alloyId24445 = Ti.UI.createView({
        id: "__alloyId24445"
    });
    $.__views.__alloyId24445 && $.addTopLevelView($.__views.__alloyId24445);
    $.__views.__alloyId24446 = Ti.UI.createView({
        id: "__alloyId24446"
    });
    $.__views.__alloyId24445.add($.__views.__alloyId24446);
    $.__views.__alloyId24447 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24447"
    });
    $.__views.__alloyId24446.add($.__views.__alloyId24447);
    $.__views.__alloyId24448 = Ti.UI.createView({
        id: "__alloyId24448"
    });
    $.__views.__alloyId24448 && $.addTopLevelView($.__views.__alloyId24448);
    $.__views.__alloyId24449 = Ti.UI.createView({
        id: "__alloyId24449"
    });
    $.__views.__alloyId24448.add($.__views.__alloyId24449);
    $.__views.__alloyId24450 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24450"
    });
    $.__views.__alloyId24449.add($.__views.__alloyId24450);
    $.__views.__alloyId24451 = Ti.UI.createView({
        id: "__alloyId24451"
    });
    $.__views.__alloyId24451 && $.addTopLevelView($.__views.__alloyId24451);
    $.__views.__alloyId24452 = Ti.UI.createView({
        id: "__alloyId24452"
    });
    $.__views.__alloyId24451.add($.__views.__alloyId24452);
    $.__views.__alloyId24453 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24453"
    });
    $.__views.__alloyId24452.add($.__views.__alloyId24453);
    $.__views.__alloyId24454 = Ti.UI.createView({
        id: "__alloyId24454"
    });
    $.__views.__alloyId24454 && $.addTopLevelView($.__views.__alloyId24454);
    $.__views.__alloyId24455 = Ti.UI.createView({
        id: "__alloyId24455"
    });
    $.__views.__alloyId24454.add($.__views.__alloyId24455);
    $.__views.__alloyId24456 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24456"
    });
    $.__views.__alloyId24455.add($.__views.__alloyId24456);
    $.__views.__alloyId24457 = Ti.UI.createView({
        id: "__alloyId24457"
    });
    $.__views.__alloyId24457 && $.addTopLevelView($.__views.__alloyId24457);
    $.__views.__alloyId24458 = Ti.UI.createView({
        id: "__alloyId24458"
    });
    $.__views.__alloyId24457.add($.__views.__alloyId24458);
    $.__views.__alloyId24459 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24459"
    });
    $.__views.__alloyId24458.add($.__views.__alloyId24459);
    $.__views.__alloyId24460 = Ti.UI.createView({
        id: "__alloyId24460"
    });
    $.__views.__alloyId24460 && $.addTopLevelView($.__views.__alloyId24460);
    $.__views.__alloyId24461 = Ti.UI.createView({
        id: "__alloyId24461"
    });
    $.__views.__alloyId24460.add($.__views.__alloyId24461);
    $.__views.__alloyId24462 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24462"
    });
    $.__views.__alloyId24461.add($.__views.__alloyId24462);
    $.__views.__alloyId24463 = Ti.UI.createView({
        id: "__alloyId24463"
    });
    $.__views.__alloyId24463 && $.addTopLevelView($.__views.__alloyId24463);
    $.__views.__alloyId24464 = Ti.UI.createView({
        id: "__alloyId24464"
    });
    $.__views.__alloyId24463.add($.__views.__alloyId24464);
    $.__views.__alloyId24465 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24465"
    });
    $.__views.__alloyId24464.add($.__views.__alloyId24465);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;