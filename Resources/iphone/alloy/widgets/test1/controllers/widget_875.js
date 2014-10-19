function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_875";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_875 = Ti.UI.createView({
        id: "widget_875"
    });
    $.__views.widget_875 && $.addTopLevelView($.__views.widget_875);
    $.__views.__alloyId22438 = Ti.UI.createView({
        id: "__alloyId22438"
    });
    $.__views.widget_875.add($.__views.__alloyId22438);
    $.__views.__alloyId22439 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22439"
    });
    $.__views.__alloyId22438.add($.__views.__alloyId22439);
    $.__views.__alloyId22440 = Ti.UI.createView({
        id: "__alloyId22440"
    });
    $.__views.__alloyId22440 && $.addTopLevelView($.__views.__alloyId22440);
    $.__views.__alloyId22441 = Ti.UI.createView({
        id: "__alloyId22441"
    });
    $.__views.__alloyId22440.add($.__views.__alloyId22441);
    $.__views.__alloyId22442 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22442"
    });
    $.__views.__alloyId22441.add($.__views.__alloyId22442);
    $.__views.__alloyId22443 = Ti.UI.createView({
        id: "__alloyId22443"
    });
    $.__views.__alloyId22443 && $.addTopLevelView($.__views.__alloyId22443);
    $.__views.__alloyId22444 = Ti.UI.createView({
        id: "__alloyId22444"
    });
    $.__views.__alloyId22443.add($.__views.__alloyId22444);
    $.__views.__alloyId22445 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22445"
    });
    $.__views.__alloyId22444.add($.__views.__alloyId22445);
    $.__views.__alloyId22446 = Ti.UI.createView({
        id: "__alloyId22446"
    });
    $.__views.__alloyId22446 && $.addTopLevelView($.__views.__alloyId22446);
    $.__views.__alloyId22447 = Ti.UI.createView({
        id: "__alloyId22447"
    });
    $.__views.__alloyId22446.add($.__views.__alloyId22447);
    $.__views.__alloyId22448 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22448"
    });
    $.__views.__alloyId22447.add($.__views.__alloyId22448);
    $.__views.__alloyId22449 = Ti.UI.createView({
        id: "__alloyId22449"
    });
    $.__views.__alloyId22449 && $.addTopLevelView($.__views.__alloyId22449);
    $.__views.__alloyId22450 = Ti.UI.createView({
        id: "__alloyId22450"
    });
    $.__views.__alloyId22449.add($.__views.__alloyId22450);
    $.__views.__alloyId22451 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22451"
    });
    $.__views.__alloyId22450.add($.__views.__alloyId22451);
    $.__views.__alloyId22452 = Ti.UI.createView({
        id: "__alloyId22452"
    });
    $.__views.__alloyId22452 && $.addTopLevelView($.__views.__alloyId22452);
    $.__views.__alloyId22453 = Ti.UI.createView({
        id: "__alloyId22453"
    });
    $.__views.__alloyId22452.add($.__views.__alloyId22453);
    $.__views.__alloyId22454 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22454"
    });
    $.__views.__alloyId22453.add($.__views.__alloyId22454);
    $.__views.__alloyId22455 = Ti.UI.createView({
        id: "__alloyId22455"
    });
    $.__views.__alloyId22455 && $.addTopLevelView($.__views.__alloyId22455);
    $.__views.__alloyId22456 = Ti.UI.createView({
        id: "__alloyId22456"
    });
    $.__views.__alloyId22455.add($.__views.__alloyId22456);
    $.__views.__alloyId22457 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22457"
    });
    $.__views.__alloyId22456.add($.__views.__alloyId22457);
    $.__views.__alloyId22458 = Ti.UI.createView({
        id: "__alloyId22458"
    });
    $.__views.__alloyId22458 && $.addTopLevelView($.__views.__alloyId22458);
    $.__views.__alloyId22459 = Ti.UI.createView({
        id: "__alloyId22459"
    });
    $.__views.__alloyId22458.add($.__views.__alloyId22459);
    $.__views.__alloyId22460 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22460"
    });
    $.__views.__alloyId22459.add($.__views.__alloyId22460);
    $.__views.__alloyId22461 = Ti.UI.createView({
        id: "__alloyId22461"
    });
    $.__views.__alloyId22461 && $.addTopLevelView($.__views.__alloyId22461);
    $.__views.__alloyId22462 = Ti.UI.createView({
        id: "__alloyId22462"
    });
    $.__views.__alloyId22461.add($.__views.__alloyId22462);
    $.__views.__alloyId22463 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId22463"
    });
    $.__views.__alloyId22462.add($.__views.__alloyId22463);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;