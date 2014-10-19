function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_598";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_598 = Ti.UI.createView({
        id: "widget_598"
    });
    $.__views.widget_598 && $.addTopLevelView($.__views.widget_598);
    $.__views.__alloyId14430 = Ti.UI.createView({
        id: "__alloyId14430"
    });
    $.__views.widget_598.add($.__views.__alloyId14430);
    $.__views.__alloyId14431 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14431"
    });
    $.__views.__alloyId14430.add($.__views.__alloyId14431);
    $.__views.__alloyId14432 = Ti.UI.createView({
        id: "__alloyId14432"
    });
    $.__views.__alloyId14432 && $.addTopLevelView($.__views.__alloyId14432);
    $.__views.__alloyId14433 = Ti.UI.createView({
        id: "__alloyId14433"
    });
    $.__views.__alloyId14432.add($.__views.__alloyId14433);
    $.__views.__alloyId14434 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14434"
    });
    $.__views.__alloyId14433.add($.__views.__alloyId14434);
    $.__views.__alloyId14435 = Ti.UI.createView({
        id: "__alloyId14435"
    });
    $.__views.__alloyId14435 && $.addTopLevelView($.__views.__alloyId14435);
    $.__views.__alloyId14436 = Ti.UI.createView({
        id: "__alloyId14436"
    });
    $.__views.__alloyId14435.add($.__views.__alloyId14436);
    $.__views.__alloyId14437 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14437"
    });
    $.__views.__alloyId14436.add($.__views.__alloyId14437);
    $.__views.__alloyId14438 = Ti.UI.createView({
        id: "__alloyId14438"
    });
    $.__views.__alloyId14438 && $.addTopLevelView($.__views.__alloyId14438);
    $.__views.__alloyId14439 = Ti.UI.createView({
        id: "__alloyId14439"
    });
    $.__views.__alloyId14438.add($.__views.__alloyId14439);
    $.__views.__alloyId14440 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14440"
    });
    $.__views.__alloyId14439.add($.__views.__alloyId14440);
    $.__views.__alloyId14441 = Ti.UI.createView({
        id: "__alloyId14441"
    });
    $.__views.__alloyId14441 && $.addTopLevelView($.__views.__alloyId14441);
    $.__views.__alloyId14442 = Ti.UI.createView({
        id: "__alloyId14442"
    });
    $.__views.__alloyId14441.add($.__views.__alloyId14442);
    $.__views.__alloyId14443 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14443"
    });
    $.__views.__alloyId14442.add($.__views.__alloyId14443);
    $.__views.__alloyId14444 = Ti.UI.createView({
        id: "__alloyId14444"
    });
    $.__views.__alloyId14444 && $.addTopLevelView($.__views.__alloyId14444);
    $.__views.__alloyId14445 = Ti.UI.createView({
        id: "__alloyId14445"
    });
    $.__views.__alloyId14444.add($.__views.__alloyId14445);
    $.__views.__alloyId14446 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14446"
    });
    $.__views.__alloyId14445.add($.__views.__alloyId14446);
    $.__views.__alloyId14447 = Ti.UI.createView({
        id: "__alloyId14447"
    });
    $.__views.__alloyId14447 && $.addTopLevelView($.__views.__alloyId14447);
    $.__views.__alloyId14448 = Ti.UI.createView({
        id: "__alloyId14448"
    });
    $.__views.__alloyId14447.add($.__views.__alloyId14448);
    $.__views.__alloyId14449 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14449"
    });
    $.__views.__alloyId14448.add($.__views.__alloyId14449);
    $.__views.__alloyId14450 = Ti.UI.createView({
        id: "__alloyId14450"
    });
    $.__views.__alloyId14450 && $.addTopLevelView($.__views.__alloyId14450);
    $.__views.__alloyId14451 = Ti.UI.createView({
        id: "__alloyId14451"
    });
    $.__views.__alloyId14450.add($.__views.__alloyId14451);
    $.__views.__alloyId14452 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14452"
    });
    $.__views.__alloyId14451.add($.__views.__alloyId14452);
    $.__views.__alloyId14453 = Ti.UI.createView({
        id: "__alloyId14453"
    });
    $.__views.__alloyId14453 && $.addTopLevelView($.__views.__alloyId14453);
    $.__views.__alloyId14454 = Ti.UI.createView({
        id: "__alloyId14454"
    });
    $.__views.__alloyId14453.add($.__views.__alloyId14454);
    $.__views.__alloyId14455 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId14455"
    });
    $.__views.__alloyId14454.add($.__views.__alloyId14455);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;