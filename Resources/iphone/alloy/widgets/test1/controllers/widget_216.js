function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_216";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_216 = Ti.UI.createView({
        id: "widget_216"
    });
    $.__views.widget_216 && $.addTopLevelView($.__views.widget_216);
    $.__views.__alloyId3432 = Ti.UI.createView({
        id: "__alloyId3432"
    });
    $.__views.widget_216.add($.__views.__alloyId3432);
    $.__views.__alloyId3433 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3433"
    });
    $.__views.__alloyId3432.add($.__views.__alloyId3433);
    $.__views.__alloyId3434 = Ti.UI.createView({
        id: "__alloyId3434"
    });
    $.__views.__alloyId3434 && $.addTopLevelView($.__views.__alloyId3434);
    $.__views.__alloyId3435 = Ti.UI.createView({
        id: "__alloyId3435"
    });
    $.__views.__alloyId3434.add($.__views.__alloyId3435);
    $.__views.__alloyId3436 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3436"
    });
    $.__views.__alloyId3435.add($.__views.__alloyId3436);
    $.__views.__alloyId3437 = Ti.UI.createView({
        id: "__alloyId3437"
    });
    $.__views.__alloyId3437 && $.addTopLevelView($.__views.__alloyId3437);
    $.__views.__alloyId3438 = Ti.UI.createView({
        id: "__alloyId3438"
    });
    $.__views.__alloyId3437.add($.__views.__alloyId3438);
    $.__views.__alloyId3439 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3439"
    });
    $.__views.__alloyId3438.add($.__views.__alloyId3439);
    $.__views.__alloyId3440 = Ti.UI.createView({
        id: "__alloyId3440"
    });
    $.__views.__alloyId3440 && $.addTopLevelView($.__views.__alloyId3440);
    $.__views.__alloyId3441 = Ti.UI.createView({
        id: "__alloyId3441"
    });
    $.__views.__alloyId3440.add($.__views.__alloyId3441);
    $.__views.__alloyId3442 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3442"
    });
    $.__views.__alloyId3441.add($.__views.__alloyId3442);
    $.__views.__alloyId3443 = Ti.UI.createView({
        id: "__alloyId3443"
    });
    $.__views.__alloyId3443 && $.addTopLevelView($.__views.__alloyId3443);
    $.__views.__alloyId3444 = Ti.UI.createView({
        id: "__alloyId3444"
    });
    $.__views.__alloyId3443.add($.__views.__alloyId3444);
    $.__views.__alloyId3445 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3445"
    });
    $.__views.__alloyId3444.add($.__views.__alloyId3445);
    $.__views.__alloyId3446 = Ti.UI.createView({
        id: "__alloyId3446"
    });
    $.__views.__alloyId3446 && $.addTopLevelView($.__views.__alloyId3446);
    $.__views.__alloyId3447 = Ti.UI.createView({
        id: "__alloyId3447"
    });
    $.__views.__alloyId3446.add($.__views.__alloyId3447);
    $.__views.__alloyId3448 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3448"
    });
    $.__views.__alloyId3447.add($.__views.__alloyId3448);
    $.__views.__alloyId3449 = Ti.UI.createView({
        id: "__alloyId3449"
    });
    $.__views.__alloyId3449 && $.addTopLevelView($.__views.__alloyId3449);
    $.__views.__alloyId3450 = Ti.UI.createView({
        id: "__alloyId3450"
    });
    $.__views.__alloyId3449.add($.__views.__alloyId3450);
    $.__views.__alloyId3451 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3451"
    });
    $.__views.__alloyId3450.add($.__views.__alloyId3451);
    $.__views.__alloyId3452 = Ti.UI.createView({
        id: "__alloyId3452"
    });
    $.__views.__alloyId3452 && $.addTopLevelView($.__views.__alloyId3452);
    $.__views.__alloyId3453 = Ti.UI.createView({
        id: "__alloyId3453"
    });
    $.__views.__alloyId3452.add($.__views.__alloyId3453);
    $.__views.__alloyId3454 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3454"
    });
    $.__views.__alloyId3453.add($.__views.__alloyId3454);
    $.__views.__alloyId3455 = Ti.UI.createView({
        id: "__alloyId3455"
    });
    $.__views.__alloyId3455 && $.addTopLevelView($.__views.__alloyId3455);
    $.__views.__alloyId3456 = Ti.UI.createView({
        id: "__alloyId3456"
    });
    $.__views.__alloyId3455.add($.__views.__alloyId3456);
    $.__views.__alloyId3457 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId3457"
    });
    $.__views.__alloyId3456.add($.__views.__alloyId3457);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;