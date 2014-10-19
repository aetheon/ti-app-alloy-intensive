function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_700";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_700 = Ti.UI.createView({
        id: "widget_700"
    });
    $.__views.widget_700 && $.addTopLevelView($.__views.widget_700);
    $.__views.__alloyId17420 = Ti.UI.createView({
        id: "__alloyId17420"
    });
    $.__views.widget_700.add($.__views.__alloyId17420);
    $.__views.__alloyId17421 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17421"
    });
    $.__views.__alloyId17420.add($.__views.__alloyId17421);
    $.__views.__alloyId17422 = Ti.UI.createView({
        id: "__alloyId17422"
    });
    $.__views.__alloyId17422 && $.addTopLevelView($.__views.__alloyId17422);
    $.__views.__alloyId17423 = Ti.UI.createView({
        id: "__alloyId17423"
    });
    $.__views.__alloyId17422.add($.__views.__alloyId17423);
    $.__views.__alloyId17424 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17424"
    });
    $.__views.__alloyId17423.add($.__views.__alloyId17424);
    $.__views.__alloyId17425 = Ti.UI.createView({
        id: "__alloyId17425"
    });
    $.__views.__alloyId17425 && $.addTopLevelView($.__views.__alloyId17425);
    $.__views.__alloyId17426 = Ti.UI.createView({
        id: "__alloyId17426"
    });
    $.__views.__alloyId17425.add($.__views.__alloyId17426);
    $.__views.__alloyId17427 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17427"
    });
    $.__views.__alloyId17426.add($.__views.__alloyId17427);
    $.__views.__alloyId17428 = Ti.UI.createView({
        id: "__alloyId17428"
    });
    $.__views.__alloyId17428 && $.addTopLevelView($.__views.__alloyId17428);
    $.__views.__alloyId17429 = Ti.UI.createView({
        id: "__alloyId17429"
    });
    $.__views.__alloyId17428.add($.__views.__alloyId17429);
    $.__views.__alloyId17430 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17430"
    });
    $.__views.__alloyId17429.add($.__views.__alloyId17430);
    $.__views.__alloyId17431 = Ti.UI.createView({
        id: "__alloyId17431"
    });
    $.__views.__alloyId17431 && $.addTopLevelView($.__views.__alloyId17431);
    $.__views.__alloyId17432 = Ti.UI.createView({
        id: "__alloyId17432"
    });
    $.__views.__alloyId17431.add($.__views.__alloyId17432);
    $.__views.__alloyId17433 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17433"
    });
    $.__views.__alloyId17432.add($.__views.__alloyId17433);
    $.__views.__alloyId17434 = Ti.UI.createView({
        id: "__alloyId17434"
    });
    $.__views.__alloyId17434 && $.addTopLevelView($.__views.__alloyId17434);
    $.__views.__alloyId17435 = Ti.UI.createView({
        id: "__alloyId17435"
    });
    $.__views.__alloyId17434.add($.__views.__alloyId17435);
    $.__views.__alloyId17436 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17436"
    });
    $.__views.__alloyId17435.add($.__views.__alloyId17436);
    $.__views.__alloyId17437 = Ti.UI.createView({
        id: "__alloyId17437"
    });
    $.__views.__alloyId17437 && $.addTopLevelView($.__views.__alloyId17437);
    $.__views.__alloyId17438 = Ti.UI.createView({
        id: "__alloyId17438"
    });
    $.__views.__alloyId17437.add($.__views.__alloyId17438);
    $.__views.__alloyId17439 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17439"
    });
    $.__views.__alloyId17438.add($.__views.__alloyId17439);
    $.__views.__alloyId17440 = Ti.UI.createView({
        id: "__alloyId17440"
    });
    $.__views.__alloyId17440 && $.addTopLevelView($.__views.__alloyId17440);
    $.__views.__alloyId17441 = Ti.UI.createView({
        id: "__alloyId17441"
    });
    $.__views.__alloyId17440.add($.__views.__alloyId17441);
    $.__views.__alloyId17442 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17442"
    });
    $.__views.__alloyId17441.add($.__views.__alloyId17442);
    $.__views.__alloyId17443 = Ti.UI.createView({
        id: "__alloyId17443"
    });
    $.__views.__alloyId17443 && $.addTopLevelView($.__views.__alloyId17443);
    $.__views.__alloyId17444 = Ti.UI.createView({
        id: "__alloyId17444"
    });
    $.__views.__alloyId17443.add($.__views.__alloyId17444);
    $.__views.__alloyId17445 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17445"
    });
    $.__views.__alloyId17444.add($.__views.__alloyId17445);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;