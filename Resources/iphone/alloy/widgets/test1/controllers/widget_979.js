function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_979";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_979 = Ti.UI.createView({
        id: "widget_979"
    });
    $.__views.widget_979 && $.addTopLevelView($.__views.widget_979);
    $.__views.__alloyId25428 = Ti.UI.createView({
        id: "__alloyId25428"
    });
    $.__views.widget_979.add($.__views.__alloyId25428);
    $.__views.__alloyId25429 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25429"
    });
    $.__views.__alloyId25428.add($.__views.__alloyId25429);
    $.__views.__alloyId25430 = Ti.UI.createView({
        id: "__alloyId25430"
    });
    $.__views.__alloyId25430 && $.addTopLevelView($.__views.__alloyId25430);
    $.__views.__alloyId25431 = Ti.UI.createView({
        id: "__alloyId25431"
    });
    $.__views.__alloyId25430.add($.__views.__alloyId25431);
    $.__views.__alloyId25432 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25432"
    });
    $.__views.__alloyId25431.add($.__views.__alloyId25432);
    $.__views.__alloyId25433 = Ti.UI.createView({
        id: "__alloyId25433"
    });
    $.__views.__alloyId25433 && $.addTopLevelView($.__views.__alloyId25433);
    $.__views.__alloyId25434 = Ti.UI.createView({
        id: "__alloyId25434"
    });
    $.__views.__alloyId25433.add($.__views.__alloyId25434);
    $.__views.__alloyId25435 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25435"
    });
    $.__views.__alloyId25434.add($.__views.__alloyId25435);
    $.__views.__alloyId25436 = Ti.UI.createView({
        id: "__alloyId25436"
    });
    $.__views.__alloyId25436 && $.addTopLevelView($.__views.__alloyId25436);
    $.__views.__alloyId25437 = Ti.UI.createView({
        id: "__alloyId25437"
    });
    $.__views.__alloyId25436.add($.__views.__alloyId25437);
    $.__views.__alloyId25438 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25438"
    });
    $.__views.__alloyId25437.add($.__views.__alloyId25438);
    $.__views.__alloyId25439 = Ti.UI.createView({
        id: "__alloyId25439"
    });
    $.__views.__alloyId25439 && $.addTopLevelView($.__views.__alloyId25439);
    $.__views.__alloyId25440 = Ti.UI.createView({
        id: "__alloyId25440"
    });
    $.__views.__alloyId25439.add($.__views.__alloyId25440);
    $.__views.__alloyId25441 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25441"
    });
    $.__views.__alloyId25440.add($.__views.__alloyId25441);
    $.__views.__alloyId25442 = Ti.UI.createView({
        id: "__alloyId25442"
    });
    $.__views.__alloyId25442 && $.addTopLevelView($.__views.__alloyId25442);
    $.__views.__alloyId25443 = Ti.UI.createView({
        id: "__alloyId25443"
    });
    $.__views.__alloyId25442.add($.__views.__alloyId25443);
    $.__views.__alloyId25444 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25444"
    });
    $.__views.__alloyId25443.add($.__views.__alloyId25444);
    $.__views.__alloyId25445 = Ti.UI.createView({
        id: "__alloyId25445"
    });
    $.__views.__alloyId25445 && $.addTopLevelView($.__views.__alloyId25445);
    $.__views.__alloyId25446 = Ti.UI.createView({
        id: "__alloyId25446"
    });
    $.__views.__alloyId25445.add($.__views.__alloyId25446);
    $.__views.__alloyId25447 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25447"
    });
    $.__views.__alloyId25446.add($.__views.__alloyId25447);
    $.__views.__alloyId25448 = Ti.UI.createView({
        id: "__alloyId25448"
    });
    $.__views.__alloyId25448 && $.addTopLevelView($.__views.__alloyId25448);
    $.__views.__alloyId25449 = Ti.UI.createView({
        id: "__alloyId25449"
    });
    $.__views.__alloyId25448.add($.__views.__alloyId25449);
    $.__views.__alloyId25450 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25450"
    });
    $.__views.__alloyId25449.add($.__views.__alloyId25450);
    $.__views.__alloyId25451 = Ti.UI.createView({
        id: "__alloyId25451"
    });
    $.__views.__alloyId25451 && $.addTopLevelView($.__views.__alloyId25451);
    $.__views.__alloyId25452 = Ti.UI.createView({
        id: "__alloyId25452"
    });
    $.__views.__alloyId25451.add($.__views.__alloyId25452);
    $.__views.__alloyId25453 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25453"
    });
    $.__views.__alloyId25452.add($.__views.__alloyId25453);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;