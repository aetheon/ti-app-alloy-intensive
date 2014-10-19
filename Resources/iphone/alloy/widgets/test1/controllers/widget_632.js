function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_632";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_632 = Ti.UI.createView({
        id: "widget_632"
    });
    $.__views.widget_632 && $.addTopLevelView($.__views.widget_632);
    $.__views.__alloyId15444 = Ti.UI.createView({
        id: "__alloyId15444"
    });
    $.__views.widget_632.add($.__views.__alloyId15444);
    $.__views.__alloyId15445 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15445"
    });
    $.__views.__alloyId15444.add($.__views.__alloyId15445);
    $.__views.__alloyId15446 = Ti.UI.createView({
        id: "__alloyId15446"
    });
    $.__views.__alloyId15446 && $.addTopLevelView($.__views.__alloyId15446);
    $.__views.__alloyId15447 = Ti.UI.createView({
        id: "__alloyId15447"
    });
    $.__views.__alloyId15446.add($.__views.__alloyId15447);
    $.__views.__alloyId15448 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15448"
    });
    $.__views.__alloyId15447.add($.__views.__alloyId15448);
    $.__views.__alloyId15449 = Ti.UI.createView({
        id: "__alloyId15449"
    });
    $.__views.__alloyId15449 && $.addTopLevelView($.__views.__alloyId15449);
    $.__views.__alloyId15450 = Ti.UI.createView({
        id: "__alloyId15450"
    });
    $.__views.__alloyId15449.add($.__views.__alloyId15450);
    $.__views.__alloyId15451 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15451"
    });
    $.__views.__alloyId15450.add($.__views.__alloyId15451);
    $.__views.__alloyId15452 = Ti.UI.createView({
        id: "__alloyId15452"
    });
    $.__views.__alloyId15452 && $.addTopLevelView($.__views.__alloyId15452);
    $.__views.__alloyId15453 = Ti.UI.createView({
        id: "__alloyId15453"
    });
    $.__views.__alloyId15452.add($.__views.__alloyId15453);
    $.__views.__alloyId15454 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15454"
    });
    $.__views.__alloyId15453.add($.__views.__alloyId15454);
    $.__views.__alloyId15455 = Ti.UI.createView({
        id: "__alloyId15455"
    });
    $.__views.__alloyId15455 && $.addTopLevelView($.__views.__alloyId15455);
    $.__views.__alloyId15456 = Ti.UI.createView({
        id: "__alloyId15456"
    });
    $.__views.__alloyId15455.add($.__views.__alloyId15456);
    $.__views.__alloyId15457 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15457"
    });
    $.__views.__alloyId15456.add($.__views.__alloyId15457);
    $.__views.__alloyId15458 = Ti.UI.createView({
        id: "__alloyId15458"
    });
    $.__views.__alloyId15458 && $.addTopLevelView($.__views.__alloyId15458);
    $.__views.__alloyId15459 = Ti.UI.createView({
        id: "__alloyId15459"
    });
    $.__views.__alloyId15458.add($.__views.__alloyId15459);
    $.__views.__alloyId15460 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15460"
    });
    $.__views.__alloyId15459.add($.__views.__alloyId15460);
    $.__views.__alloyId15461 = Ti.UI.createView({
        id: "__alloyId15461"
    });
    $.__views.__alloyId15461 && $.addTopLevelView($.__views.__alloyId15461);
    $.__views.__alloyId15462 = Ti.UI.createView({
        id: "__alloyId15462"
    });
    $.__views.__alloyId15461.add($.__views.__alloyId15462);
    $.__views.__alloyId15463 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15463"
    });
    $.__views.__alloyId15462.add($.__views.__alloyId15463);
    $.__views.__alloyId15464 = Ti.UI.createView({
        id: "__alloyId15464"
    });
    $.__views.__alloyId15464 && $.addTopLevelView($.__views.__alloyId15464);
    $.__views.__alloyId15465 = Ti.UI.createView({
        id: "__alloyId15465"
    });
    $.__views.__alloyId15464.add($.__views.__alloyId15465);
    $.__views.__alloyId15466 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15466"
    });
    $.__views.__alloyId15465.add($.__views.__alloyId15466);
    $.__views.__alloyId15467 = Ti.UI.createView({
        id: "__alloyId15467"
    });
    $.__views.__alloyId15467 && $.addTopLevelView($.__views.__alloyId15467);
    $.__views.__alloyId15468 = Ti.UI.createView({
        id: "__alloyId15468"
    });
    $.__views.__alloyId15467.add($.__views.__alloyId15468);
    $.__views.__alloyId15469 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15469"
    });
    $.__views.__alloyId15468.add($.__views.__alloyId15469);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;