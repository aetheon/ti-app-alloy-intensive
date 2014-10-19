function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_701";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_701 = Ti.UI.createView({
        id: "widget_701"
    });
    $.__views.widget_701 && $.addTopLevelView($.__views.widget_701);
    $.__views.__alloyId17446 = Ti.UI.createView({
        id: "__alloyId17446"
    });
    $.__views.widget_701.add($.__views.__alloyId17446);
    $.__views.__alloyId17447 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17447"
    });
    $.__views.__alloyId17446.add($.__views.__alloyId17447);
    $.__views.__alloyId17448 = Ti.UI.createView({
        id: "__alloyId17448"
    });
    $.__views.__alloyId17448 && $.addTopLevelView($.__views.__alloyId17448);
    $.__views.__alloyId17449 = Ti.UI.createView({
        id: "__alloyId17449"
    });
    $.__views.__alloyId17448.add($.__views.__alloyId17449);
    $.__views.__alloyId17450 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17450"
    });
    $.__views.__alloyId17449.add($.__views.__alloyId17450);
    $.__views.__alloyId17451 = Ti.UI.createView({
        id: "__alloyId17451"
    });
    $.__views.__alloyId17451 && $.addTopLevelView($.__views.__alloyId17451);
    $.__views.__alloyId17452 = Ti.UI.createView({
        id: "__alloyId17452"
    });
    $.__views.__alloyId17451.add($.__views.__alloyId17452);
    $.__views.__alloyId17453 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17453"
    });
    $.__views.__alloyId17452.add($.__views.__alloyId17453);
    $.__views.__alloyId17454 = Ti.UI.createView({
        id: "__alloyId17454"
    });
    $.__views.__alloyId17454 && $.addTopLevelView($.__views.__alloyId17454);
    $.__views.__alloyId17455 = Ti.UI.createView({
        id: "__alloyId17455"
    });
    $.__views.__alloyId17454.add($.__views.__alloyId17455);
    $.__views.__alloyId17456 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17456"
    });
    $.__views.__alloyId17455.add($.__views.__alloyId17456);
    $.__views.__alloyId17457 = Ti.UI.createView({
        id: "__alloyId17457"
    });
    $.__views.__alloyId17457 && $.addTopLevelView($.__views.__alloyId17457);
    $.__views.__alloyId17458 = Ti.UI.createView({
        id: "__alloyId17458"
    });
    $.__views.__alloyId17457.add($.__views.__alloyId17458);
    $.__views.__alloyId17459 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17459"
    });
    $.__views.__alloyId17458.add($.__views.__alloyId17459);
    $.__views.__alloyId17460 = Ti.UI.createView({
        id: "__alloyId17460"
    });
    $.__views.__alloyId17460 && $.addTopLevelView($.__views.__alloyId17460);
    $.__views.__alloyId17461 = Ti.UI.createView({
        id: "__alloyId17461"
    });
    $.__views.__alloyId17460.add($.__views.__alloyId17461);
    $.__views.__alloyId17462 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17462"
    });
    $.__views.__alloyId17461.add($.__views.__alloyId17462);
    $.__views.__alloyId17463 = Ti.UI.createView({
        id: "__alloyId17463"
    });
    $.__views.__alloyId17463 && $.addTopLevelView($.__views.__alloyId17463);
    $.__views.__alloyId17464 = Ti.UI.createView({
        id: "__alloyId17464"
    });
    $.__views.__alloyId17463.add($.__views.__alloyId17464);
    $.__views.__alloyId17465 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17465"
    });
    $.__views.__alloyId17464.add($.__views.__alloyId17465);
    $.__views.__alloyId17466 = Ti.UI.createView({
        id: "__alloyId17466"
    });
    $.__views.__alloyId17466 && $.addTopLevelView($.__views.__alloyId17466);
    $.__views.__alloyId17467 = Ti.UI.createView({
        id: "__alloyId17467"
    });
    $.__views.__alloyId17466.add($.__views.__alloyId17467);
    $.__views.__alloyId17468 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17468"
    });
    $.__views.__alloyId17467.add($.__views.__alloyId17468);
    $.__views.__alloyId17469 = Ti.UI.createView({
        id: "__alloyId17469"
    });
    $.__views.__alloyId17469 && $.addTopLevelView($.__views.__alloyId17469);
    $.__views.__alloyId17470 = Ti.UI.createView({
        id: "__alloyId17470"
    });
    $.__views.__alloyId17469.add($.__views.__alloyId17470);
    $.__views.__alloyId17471 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17471"
    });
    $.__views.__alloyId17470.add($.__views.__alloyId17471);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;