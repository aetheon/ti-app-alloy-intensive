function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_631";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_631 = Ti.UI.createView({
        id: "widget_631"
    });
    $.__views.widget_631 && $.addTopLevelView($.__views.widget_631);
    $.__views.__alloyId15418 = Ti.UI.createView({
        id: "__alloyId15418"
    });
    $.__views.widget_631.add($.__views.__alloyId15418);
    $.__views.__alloyId15419 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15419"
    });
    $.__views.__alloyId15418.add($.__views.__alloyId15419);
    $.__views.__alloyId15420 = Ti.UI.createView({
        id: "__alloyId15420"
    });
    $.__views.__alloyId15420 && $.addTopLevelView($.__views.__alloyId15420);
    $.__views.__alloyId15421 = Ti.UI.createView({
        id: "__alloyId15421"
    });
    $.__views.__alloyId15420.add($.__views.__alloyId15421);
    $.__views.__alloyId15422 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15422"
    });
    $.__views.__alloyId15421.add($.__views.__alloyId15422);
    $.__views.__alloyId15423 = Ti.UI.createView({
        id: "__alloyId15423"
    });
    $.__views.__alloyId15423 && $.addTopLevelView($.__views.__alloyId15423);
    $.__views.__alloyId15424 = Ti.UI.createView({
        id: "__alloyId15424"
    });
    $.__views.__alloyId15423.add($.__views.__alloyId15424);
    $.__views.__alloyId15425 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15425"
    });
    $.__views.__alloyId15424.add($.__views.__alloyId15425);
    $.__views.__alloyId15426 = Ti.UI.createView({
        id: "__alloyId15426"
    });
    $.__views.__alloyId15426 && $.addTopLevelView($.__views.__alloyId15426);
    $.__views.__alloyId15427 = Ti.UI.createView({
        id: "__alloyId15427"
    });
    $.__views.__alloyId15426.add($.__views.__alloyId15427);
    $.__views.__alloyId15428 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15428"
    });
    $.__views.__alloyId15427.add($.__views.__alloyId15428);
    $.__views.__alloyId15429 = Ti.UI.createView({
        id: "__alloyId15429"
    });
    $.__views.__alloyId15429 && $.addTopLevelView($.__views.__alloyId15429);
    $.__views.__alloyId15430 = Ti.UI.createView({
        id: "__alloyId15430"
    });
    $.__views.__alloyId15429.add($.__views.__alloyId15430);
    $.__views.__alloyId15431 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15431"
    });
    $.__views.__alloyId15430.add($.__views.__alloyId15431);
    $.__views.__alloyId15432 = Ti.UI.createView({
        id: "__alloyId15432"
    });
    $.__views.__alloyId15432 && $.addTopLevelView($.__views.__alloyId15432);
    $.__views.__alloyId15433 = Ti.UI.createView({
        id: "__alloyId15433"
    });
    $.__views.__alloyId15432.add($.__views.__alloyId15433);
    $.__views.__alloyId15434 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15434"
    });
    $.__views.__alloyId15433.add($.__views.__alloyId15434);
    $.__views.__alloyId15435 = Ti.UI.createView({
        id: "__alloyId15435"
    });
    $.__views.__alloyId15435 && $.addTopLevelView($.__views.__alloyId15435);
    $.__views.__alloyId15436 = Ti.UI.createView({
        id: "__alloyId15436"
    });
    $.__views.__alloyId15435.add($.__views.__alloyId15436);
    $.__views.__alloyId15437 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15437"
    });
    $.__views.__alloyId15436.add($.__views.__alloyId15437);
    $.__views.__alloyId15438 = Ti.UI.createView({
        id: "__alloyId15438"
    });
    $.__views.__alloyId15438 && $.addTopLevelView($.__views.__alloyId15438);
    $.__views.__alloyId15439 = Ti.UI.createView({
        id: "__alloyId15439"
    });
    $.__views.__alloyId15438.add($.__views.__alloyId15439);
    $.__views.__alloyId15440 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15440"
    });
    $.__views.__alloyId15439.add($.__views.__alloyId15440);
    $.__views.__alloyId15441 = Ti.UI.createView({
        id: "__alloyId15441"
    });
    $.__views.__alloyId15441 && $.addTopLevelView($.__views.__alloyId15441);
    $.__views.__alloyId15442 = Ti.UI.createView({
        id: "__alloyId15442"
    });
    $.__views.__alloyId15441.add($.__views.__alloyId15442);
    $.__views.__alloyId15443 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15443"
    });
    $.__views.__alloyId15442.add($.__views.__alloyId15443);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;