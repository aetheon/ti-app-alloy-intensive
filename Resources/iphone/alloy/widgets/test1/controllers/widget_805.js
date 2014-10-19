function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_805";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_805 = Ti.UI.createView({
        id: "widget_805"
    });
    $.__views.widget_805 && $.addTopLevelView($.__views.widget_805);
    $.__views.__alloyId20436 = Ti.UI.createView({
        id: "__alloyId20436"
    });
    $.__views.widget_805.add($.__views.__alloyId20436);
    $.__views.__alloyId20437 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20437"
    });
    $.__views.__alloyId20436.add($.__views.__alloyId20437);
    $.__views.__alloyId20438 = Ti.UI.createView({
        id: "__alloyId20438"
    });
    $.__views.__alloyId20438 && $.addTopLevelView($.__views.__alloyId20438);
    $.__views.__alloyId20439 = Ti.UI.createView({
        id: "__alloyId20439"
    });
    $.__views.__alloyId20438.add($.__views.__alloyId20439);
    $.__views.__alloyId20440 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20440"
    });
    $.__views.__alloyId20439.add($.__views.__alloyId20440);
    $.__views.__alloyId20441 = Ti.UI.createView({
        id: "__alloyId20441"
    });
    $.__views.__alloyId20441 && $.addTopLevelView($.__views.__alloyId20441);
    $.__views.__alloyId20442 = Ti.UI.createView({
        id: "__alloyId20442"
    });
    $.__views.__alloyId20441.add($.__views.__alloyId20442);
    $.__views.__alloyId20443 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20443"
    });
    $.__views.__alloyId20442.add($.__views.__alloyId20443);
    $.__views.__alloyId20444 = Ti.UI.createView({
        id: "__alloyId20444"
    });
    $.__views.__alloyId20444 && $.addTopLevelView($.__views.__alloyId20444);
    $.__views.__alloyId20445 = Ti.UI.createView({
        id: "__alloyId20445"
    });
    $.__views.__alloyId20444.add($.__views.__alloyId20445);
    $.__views.__alloyId20446 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20446"
    });
    $.__views.__alloyId20445.add($.__views.__alloyId20446);
    $.__views.__alloyId20447 = Ti.UI.createView({
        id: "__alloyId20447"
    });
    $.__views.__alloyId20447 && $.addTopLevelView($.__views.__alloyId20447);
    $.__views.__alloyId20448 = Ti.UI.createView({
        id: "__alloyId20448"
    });
    $.__views.__alloyId20447.add($.__views.__alloyId20448);
    $.__views.__alloyId20449 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20449"
    });
    $.__views.__alloyId20448.add($.__views.__alloyId20449);
    $.__views.__alloyId20450 = Ti.UI.createView({
        id: "__alloyId20450"
    });
    $.__views.__alloyId20450 && $.addTopLevelView($.__views.__alloyId20450);
    $.__views.__alloyId20451 = Ti.UI.createView({
        id: "__alloyId20451"
    });
    $.__views.__alloyId20450.add($.__views.__alloyId20451);
    $.__views.__alloyId20452 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20452"
    });
    $.__views.__alloyId20451.add($.__views.__alloyId20452);
    $.__views.__alloyId20453 = Ti.UI.createView({
        id: "__alloyId20453"
    });
    $.__views.__alloyId20453 && $.addTopLevelView($.__views.__alloyId20453);
    $.__views.__alloyId20454 = Ti.UI.createView({
        id: "__alloyId20454"
    });
    $.__views.__alloyId20453.add($.__views.__alloyId20454);
    $.__views.__alloyId20455 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20455"
    });
    $.__views.__alloyId20454.add($.__views.__alloyId20455);
    $.__views.__alloyId20456 = Ti.UI.createView({
        id: "__alloyId20456"
    });
    $.__views.__alloyId20456 && $.addTopLevelView($.__views.__alloyId20456);
    $.__views.__alloyId20457 = Ti.UI.createView({
        id: "__alloyId20457"
    });
    $.__views.__alloyId20456.add($.__views.__alloyId20457);
    $.__views.__alloyId20458 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20458"
    });
    $.__views.__alloyId20457.add($.__views.__alloyId20458);
    $.__views.__alloyId20459 = Ti.UI.createView({
        id: "__alloyId20459"
    });
    $.__views.__alloyId20459 && $.addTopLevelView($.__views.__alloyId20459);
    $.__views.__alloyId20460 = Ti.UI.createView({
        id: "__alloyId20460"
    });
    $.__views.__alloyId20459.add($.__views.__alloyId20460);
    $.__views.__alloyId20461 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20461"
    });
    $.__views.__alloyId20460.add($.__views.__alloyId20461);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;