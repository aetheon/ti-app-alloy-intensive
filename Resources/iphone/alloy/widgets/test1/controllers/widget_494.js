function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_494";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_494 = Ti.UI.createView({
        id: "widget_494"
    });
    $.__views.widget_494 && $.addTopLevelView($.__views.widget_494);
    $.__views.__alloyId11440 = Ti.UI.createView({
        id: "__alloyId11440"
    });
    $.__views.widget_494.add($.__views.__alloyId11440);
    $.__views.__alloyId11441 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11441"
    });
    $.__views.__alloyId11440.add($.__views.__alloyId11441);
    $.__views.__alloyId11442 = Ti.UI.createView({
        id: "__alloyId11442"
    });
    $.__views.__alloyId11442 && $.addTopLevelView($.__views.__alloyId11442);
    $.__views.__alloyId11443 = Ti.UI.createView({
        id: "__alloyId11443"
    });
    $.__views.__alloyId11442.add($.__views.__alloyId11443);
    $.__views.__alloyId11444 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11444"
    });
    $.__views.__alloyId11443.add($.__views.__alloyId11444);
    $.__views.__alloyId11445 = Ti.UI.createView({
        id: "__alloyId11445"
    });
    $.__views.__alloyId11445 && $.addTopLevelView($.__views.__alloyId11445);
    $.__views.__alloyId11446 = Ti.UI.createView({
        id: "__alloyId11446"
    });
    $.__views.__alloyId11445.add($.__views.__alloyId11446);
    $.__views.__alloyId11447 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11447"
    });
    $.__views.__alloyId11446.add($.__views.__alloyId11447);
    $.__views.__alloyId11448 = Ti.UI.createView({
        id: "__alloyId11448"
    });
    $.__views.__alloyId11448 && $.addTopLevelView($.__views.__alloyId11448);
    $.__views.__alloyId11449 = Ti.UI.createView({
        id: "__alloyId11449"
    });
    $.__views.__alloyId11448.add($.__views.__alloyId11449);
    $.__views.__alloyId11450 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11450"
    });
    $.__views.__alloyId11449.add($.__views.__alloyId11450);
    $.__views.__alloyId11451 = Ti.UI.createView({
        id: "__alloyId11451"
    });
    $.__views.__alloyId11451 && $.addTopLevelView($.__views.__alloyId11451);
    $.__views.__alloyId11452 = Ti.UI.createView({
        id: "__alloyId11452"
    });
    $.__views.__alloyId11451.add($.__views.__alloyId11452);
    $.__views.__alloyId11453 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11453"
    });
    $.__views.__alloyId11452.add($.__views.__alloyId11453);
    $.__views.__alloyId11454 = Ti.UI.createView({
        id: "__alloyId11454"
    });
    $.__views.__alloyId11454 && $.addTopLevelView($.__views.__alloyId11454);
    $.__views.__alloyId11455 = Ti.UI.createView({
        id: "__alloyId11455"
    });
    $.__views.__alloyId11454.add($.__views.__alloyId11455);
    $.__views.__alloyId11456 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11456"
    });
    $.__views.__alloyId11455.add($.__views.__alloyId11456);
    $.__views.__alloyId11457 = Ti.UI.createView({
        id: "__alloyId11457"
    });
    $.__views.__alloyId11457 && $.addTopLevelView($.__views.__alloyId11457);
    $.__views.__alloyId11458 = Ti.UI.createView({
        id: "__alloyId11458"
    });
    $.__views.__alloyId11457.add($.__views.__alloyId11458);
    $.__views.__alloyId11459 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11459"
    });
    $.__views.__alloyId11458.add($.__views.__alloyId11459);
    $.__views.__alloyId11460 = Ti.UI.createView({
        id: "__alloyId11460"
    });
    $.__views.__alloyId11460 && $.addTopLevelView($.__views.__alloyId11460);
    $.__views.__alloyId11461 = Ti.UI.createView({
        id: "__alloyId11461"
    });
    $.__views.__alloyId11460.add($.__views.__alloyId11461);
    $.__views.__alloyId11462 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11462"
    });
    $.__views.__alloyId11461.add($.__views.__alloyId11462);
    $.__views.__alloyId11463 = Ti.UI.createView({
        id: "__alloyId11463"
    });
    $.__views.__alloyId11463 && $.addTopLevelView($.__views.__alloyId11463);
    $.__views.__alloyId11464 = Ti.UI.createView({
        id: "__alloyId11464"
    });
    $.__views.__alloyId11463.add($.__views.__alloyId11464);
    $.__views.__alloyId11465 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11465"
    });
    $.__views.__alloyId11464.add($.__views.__alloyId11465);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;