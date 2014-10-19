function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_250";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_250 = Ti.UI.createView({
        id: "widget_250"
    });
    $.__views.widget_250 && $.addTopLevelView($.__views.widget_250);
    $.__views.__alloyId4420 = Ti.UI.createView({
        id: "__alloyId4420"
    });
    $.__views.widget_250.add($.__views.__alloyId4420);
    $.__views.__alloyId4421 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4421"
    });
    $.__views.__alloyId4420.add($.__views.__alloyId4421);
    $.__views.__alloyId4422 = Ti.UI.createView({
        id: "__alloyId4422"
    });
    $.__views.__alloyId4422 && $.addTopLevelView($.__views.__alloyId4422);
    $.__views.__alloyId4423 = Ti.UI.createView({
        id: "__alloyId4423"
    });
    $.__views.__alloyId4422.add($.__views.__alloyId4423);
    $.__views.__alloyId4424 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4424"
    });
    $.__views.__alloyId4423.add($.__views.__alloyId4424);
    $.__views.__alloyId4425 = Ti.UI.createView({
        id: "__alloyId4425"
    });
    $.__views.__alloyId4425 && $.addTopLevelView($.__views.__alloyId4425);
    $.__views.__alloyId4426 = Ti.UI.createView({
        id: "__alloyId4426"
    });
    $.__views.__alloyId4425.add($.__views.__alloyId4426);
    $.__views.__alloyId4427 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4427"
    });
    $.__views.__alloyId4426.add($.__views.__alloyId4427);
    $.__views.__alloyId4428 = Ti.UI.createView({
        id: "__alloyId4428"
    });
    $.__views.__alloyId4428 && $.addTopLevelView($.__views.__alloyId4428);
    $.__views.__alloyId4429 = Ti.UI.createView({
        id: "__alloyId4429"
    });
    $.__views.__alloyId4428.add($.__views.__alloyId4429);
    $.__views.__alloyId4430 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4430"
    });
    $.__views.__alloyId4429.add($.__views.__alloyId4430);
    $.__views.__alloyId4431 = Ti.UI.createView({
        id: "__alloyId4431"
    });
    $.__views.__alloyId4431 && $.addTopLevelView($.__views.__alloyId4431);
    $.__views.__alloyId4432 = Ti.UI.createView({
        id: "__alloyId4432"
    });
    $.__views.__alloyId4431.add($.__views.__alloyId4432);
    $.__views.__alloyId4433 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4433"
    });
    $.__views.__alloyId4432.add($.__views.__alloyId4433);
    $.__views.__alloyId4434 = Ti.UI.createView({
        id: "__alloyId4434"
    });
    $.__views.__alloyId4434 && $.addTopLevelView($.__views.__alloyId4434);
    $.__views.__alloyId4435 = Ti.UI.createView({
        id: "__alloyId4435"
    });
    $.__views.__alloyId4434.add($.__views.__alloyId4435);
    $.__views.__alloyId4436 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4436"
    });
    $.__views.__alloyId4435.add($.__views.__alloyId4436);
    $.__views.__alloyId4437 = Ti.UI.createView({
        id: "__alloyId4437"
    });
    $.__views.__alloyId4437 && $.addTopLevelView($.__views.__alloyId4437);
    $.__views.__alloyId4438 = Ti.UI.createView({
        id: "__alloyId4438"
    });
    $.__views.__alloyId4437.add($.__views.__alloyId4438);
    $.__views.__alloyId4439 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4439"
    });
    $.__views.__alloyId4438.add($.__views.__alloyId4439);
    $.__views.__alloyId4440 = Ti.UI.createView({
        id: "__alloyId4440"
    });
    $.__views.__alloyId4440 && $.addTopLevelView($.__views.__alloyId4440);
    $.__views.__alloyId4441 = Ti.UI.createView({
        id: "__alloyId4441"
    });
    $.__views.__alloyId4440.add($.__views.__alloyId4441);
    $.__views.__alloyId4442 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4442"
    });
    $.__views.__alloyId4441.add($.__views.__alloyId4442);
    $.__views.__alloyId4443 = Ti.UI.createView({
        id: "__alloyId4443"
    });
    $.__views.__alloyId4443 && $.addTopLevelView($.__views.__alloyId4443);
    $.__views.__alloyId4444 = Ti.UI.createView({
        id: "__alloyId4444"
    });
    $.__views.__alloyId4443.add($.__views.__alloyId4444);
    $.__views.__alloyId4445 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4445"
    });
    $.__views.__alloyId4444.add($.__views.__alloyId4445);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;