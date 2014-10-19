function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_909";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_909 = Ti.UI.createView({
        id: "widget_909"
    });
    $.__views.widget_909 && $.addTopLevelView($.__views.widget_909);
    $.__views.__alloyId23426 = Ti.UI.createView({
        id: "__alloyId23426"
    });
    $.__views.widget_909.add($.__views.__alloyId23426);
    $.__views.__alloyId23427 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23427"
    });
    $.__views.__alloyId23426.add($.__views.__alloyId23427);
    $.__views.__alloyId23428 = Ti.UI.createView({
        id: "__alloyId23428"
    });
    $.__views.__alloyId23428 && $.addTopLevelView($.__views.__alloyId23428);
    $.__views.__alloyId23429 = Ti.UI.createView({
        id: "__alloyId23429"
    });
    $.__views.__alloyId23428.add($.__views.__alloyId23429);
    $.__views.__alloyId23430 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23430"
    });
    $.__views.__alloyId23429.add($.__views.__alloyId23430);
    $.__views.__alloyId23431 = Ti.UI.createView({
        id: "__alloyId23431"
    });
    $.__views.__alloyId23431 && $.addTopLevelView($.__views.__alloyId23431);
    $.__views.__alloyId23432 = Ti.UI.createView({
        id: "__alloyId23432"
    });
    $.__views.__alloyId23431.add($.__views.__alloyId23432);
    $.__views.__alloyId23433 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23433"
    });
    $.__views.__alloyId23432.add($.__views.__alloyId23433);
    $.__views.__alloyId23434 = Ti.UI.createView({
        id: "__alloyId23434"
    });
    $.__views.__alloyId23434 && $.addTopLevelView($.__views.__alloyId23434);
    $.__views.__alloyId23435 = Ti.UI.createView({
        id: "__alloyId23435"
    });
    $.__views.__alloyId23434.add($.__views.__alloyId23435);
    $.__views.__alloyId23436 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23436"
    });
    $.__views.__alloyId23435.add($.__views.__alloyId23436);
    $.__views.__alloyId23437 = Ti.UI.createView({
        id: "__alloyId23437"
    });
    $.__views.__alloyId23437 && $.addTopLevelView($.__views.__alloyId23437);
    $.__views.__alloyId23438 = Ti.UI.createView({
        id: "__alloyId23438"
    });
    $.__views.__alloyId23437.add($.__views.__alloyId23438);
    $.__views.__alloyId23439 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23439"
    });
    $.__views.__alloyId23438.add($.__views.__alloyId23439);
    $.__views.__alloyId23440 = Ti.UI.createView({
        id: "__alloyId23440"
    });
    $.__views.__alloyId23440 && $.addTopLevelView($.__views.__alloyId23440);
    $.__views.__alloyId23441 = Ti.UI.createView({
        id: "__alloyId23441"
    });
    $.__views.__alloyId23440.add($.__views.__alloyId23441);
    $.__views.__alloyId23442 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23442"
    });
    $.__views.__alloyId23441.add($.__views.__alloyId23442);
    $.__views.__alloyId23443 = Ti.UI.createView({
        id: "__alloyId23443"
    });
    $.__views.__alloyId23443 && $.addTopLevelView($.__views.__alloyId23443);
    $.__views.__alloyId23444 = Ti.UI.createView({
        id: "__alloyId23444"
    });
    $.__views.__alloyId23443.add($.__views.__alloyId23444);
    $.__views.__alloyId23445 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23445"
    });
    $.__views.__alloyId23444.add($.__views.__alloyId23445);
    $.__views.__alloyId23446 = Ti.UI.createView({
        id: "__alloyId23446"
    });
    $.__views.__alloyId23446 && $.addTopLevelView($.__views.__alloyId23446);
    $.__views.__alloyId23447 = Ti.UI.createView({
        id: "__alloyId23447"
    });
    $.__views.__alloyId23446.add($.__views.__alloyId23447);
    $.__views.__alloyId23448 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23448"
    });
    $.__views.__alloyId23447.add($.__views.__alloyId23448);
    $.__views.__alloyId23449 = Ti.UI.createView({
        id: "__alloyId23449"
    });
    $.__views.__alloyId23449 && $.addTopLevelView($.__views.__alloyId23449);
    $.__views.__alloyId23450 = Ti.UI.createView({
        id: "__alloyId23450"
    });
    $.__views.__alloyId23449.add($.__views.__alloyId23450);
    $.__views.__alloyId23451 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId23451"
    });
    $.__views.__alloyId23450.add($.__views.__alloyId23451);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;