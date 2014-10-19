function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_736";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_736 = Ti.UI.createView({
        id: "widget_736"
    });
    $.__views.widget_736 && $.addTopLevelView($.__views.widget_736);
    $.__views.__alloyId18434 = Ti.UI.createView({
        id: "__alloyId18434"
    });
    $.__views.widget_736.add($.__views.__alloyId18434);
    $.__views.__alloyId18435 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18435"
    });
    $.__views.__alloyId18434.add($.__views.__alloyId18435);
    $.__views.__alloyId18436 = Ti.UI.createView({
        id: "__alloyId18436"
    });
    $.__views.__alloyId18436 && $.addTopLevelView($.__views.__alloyId18436);
    $.__views.__alloyId18437 = Ti.UI.createView({
        id: "__alloyId18437"
    });
    $.__views.__alloyId18436.add($.__views.__alloyId18437);
    $.__views.__alloyId18438 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18438"
    });
    $.__views.__alloyId18437.add($.__views.__alloyId18438);
    $.__views.__alloyId18439 = Ti.UI.createView({
        id: "__alloyId18439"
    });
    $.__views.__alloyId18439 && $.addTopLevelView($.__views.__alloyId18439);
    $.__views.__alloyId18440 = Ti.UI.createView({
        id: "__alloyId18440"
    });
    $.__views.__alloyId18439.add($.__views.__alloyId18440);
    $.__views.__alloyId18441 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18441"
    });
    $.__views.__alloyId18440.add($.__views.__alloyId18441);
    $.__views.__alloyId18442 = Ti.UI.createView({
        id: "__alloyId18442"
    });
    $.__views.__alloyId18442 && $.addTopLevelView($.__views.__alloyId18442);
    $.__views.__alloyId18443 = Ti.UI.createView({
        id: "__alloyId18443"
    });
    $.__views.__alloyId18442.add($.__views.__alloyId18443);
    $.__views.__alloyId18444 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18444"
    });
    $.__views.__alloyId18443.add($.__views.__alloyId18444);
    $.__views.__alloyId18445 = Ti.UI.createView({
        id: "__alloyId18445"
    });
    $.__views.__alloyId18445 && $.addTopLevelView($.__views.__alloyId18445);
    $.__views.__alloyId18446 = Ti.UI.createView({
        id: "__alloyId18446"
    });
    $.__views.__alloyId18445.add($.__views.__alloyId18446);
    $.__views.__alloyId18447 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18447"
    });
    $.__views.__alloyId18446.add($.__views.__alloyId18447);
    $.__views.__alloyId18448 = Ti.UI.createView({
        id: "__alloyId18448"
    });
    $.__views.__alloyId18448 && $.addTopLevelView($.__views.__alloyId18448);
    $.__views.__alloyId18449 = Ti.UI.createView({
        id: "__alloyId18449"
    });
    $.__views.__alloyId18448.add($.__views.__alloyId18449);
    $.__views.__alloyId18450 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18450"
    });
    $.__views.__alloyId18449.add($.__views.__alloyId18450);
    $.__views.__alloyId18451 = Ti.UI.createView({
        id: "__alloyId18451"
    });
    $.__views.__alloyId18451 && $.addTopLevelView($.__views.__alloyId18451);
    $.__views.__alloyId18452 = Ti.UI.createView({
        id: "__alloyId18452"
    });
    $.__views.__alloyId18451.add($.__views.__alloyId18452);
    $.__views.__alloyId18453 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18453"
    });
    $.__views.__alloyId18452.add($.__views.__alloyId18453);
    $.__views.__alloyId18454 = Ti.UI.createView({
        id: "__alloyId18454"
    });
    $.__views.__alloyId18454 && $.addTopLevelView($.__views.__alloyId18454);
    $.__views.__alloyId18455 = Ti.UI.createView({
        id: "__alloyId18455"
    });
    $.__views.__alloyId18454.add($.__views.__alloyId18455);
    $.__views.__alloyId18456 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18456"
    });
    $.__views.__alloyId18455.add($.__views.__alloyId18456);
    $.__views.__alloyId18457 = Ti.UI.createView({
        id: "__alloyId18457"
    });
    $.__views.__alloyId18457 && $.addTopLevelView($.__views.__alloyId18457);
    $.__views.__alloyId18458 = Ti.UI.createView({
        id: "__alloyId18458"
    });
    $.__views.__alloyId18457.add($.__views.__alloyId18458);
    $.__views.__alloyId18459 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18459"
    });
    $.__views.__alloyId18458.add($.__views.__alloyId18459);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;