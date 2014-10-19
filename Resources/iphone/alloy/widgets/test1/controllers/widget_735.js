function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_735";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_735 = Ti.UI.createView({
        id: "widget_735"
    });
    $.__views.widget_735 && $.addTopLevelView($.__views.widget_735);
    $.__views.__alloyId18408 = Ti.UI.createView({
        id: "__alloyId18408"
    });
    $.__views.widget_735.add($.__views.__alloyId18408);
    $.__views.__alloyId18409 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18409"
    });
    $.__views.__alloyId18408.add($.__views.__alloyId18409);
    $.__views.__alloyId18410 = Ti.UI.createView({
        id: "__alloyId18410"
    });
    $.__views.__alloyId18410 && $.addTopLevelView($.__views.__alloyId18410);
    $.__views.__alloyId18411 = Ti.UI.createView({
        id: "__alloyId18411"
    });
    $.__views.__alloyId18410.add($.__views.__alloyId18411);
    $.__views.__alloyId18412 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18412"
    });
    $.__views.__alloyId18411.add($.__views.__alloyId18412);
    $.__views.__alloyId18413 = Ti.UI.createView({
        id: "__alloyId18413"
    });
    $.__views.__alloyId18413 && $.addTopLevelView($.__views.__alloyId18413);
    $.__views.__alloyId18414 = Ti.UI.createView({
        id: "__alloyId18414"
    });
    $.__views.__alloyId18413.add($.__views.__alloyId18414);
    $.__views.__alloyId18415 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18415"
    });
    $.__views.__alloyId18414.add($.__views.__alloyId18415);
    $.__views.__alloyId18416 = Ti.UI.createView({
        id: "__alloyId18416"
    });
    $.__views.__alloyId18416 && $.addTopLevelView($.__views.__alloyId18416);
    $.__views.__alloyId18417 = Ti.UI.createView({
        id: "__alloyId18417"
    });
    $.__views.__alloyId18416.add($.__views.__alloyId18417);
    $.__views.__alloyId18418 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18418"
    });
    $.__views.__alloyId18417.add($.__views.__alloyId18418);
    $.__views.__alloyId18419 = Ti.UI.createView({
        id: "__alloyId18419"
    });
    $.__views.__alloyId18419 && $.addTopLevelView($.__views.__alloyId18419);
    $.__views.__alloyId18420 = Ti.UI.createView({
        id: "__alloyId18420"
    });
    $.__views.__alloyId18419.add($.__views.__alloyId18420);
    $.__views.__alloyId18421 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18421"
    });
    $.__views.__alloyId18420.add($.__views.__alloyId18421);
    $.__views.__alloyId18422 = Ti.UI.createView({
        id: "__alloyId18422"
    });
    $.__views.__alloyId18422 && $.addTopLevelView($.__views.__alloyId18422);
    $.__views.__alloyId18423 = Ti.UI.createView({
        id: "__alloyId18423"
    });
    $.__views.__alloyId18422.add($.__views.__alloyId18423);
    $.__views.__alloyId18424 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18424"
    });
    $.__views.__alloyId18423.add($.__views.__alloyId18424);
    $.__views.__alloyId18425 = Ti.UI.createView({
        id: "__alloyId18425"
    });
    $.__views.__alloyId18425 && $.addTopLevelView($.__views.__alloyId18425);
    $.__views.__alloyId18426 = Ti.UI.createView({
        id: "__alloyId18426"
    });
    $.__views.__alloyId18425.add($.__views.__alloyId18426);
    $.__views.__alloyId18427 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18427"
    });
    $.__views.__alloyId18426.add($.__views.__alloyId18427);
    $.__views.__alloyId18428 = Ti.UI.createView({
        id: "__alloyId18428"
    });
    $.__views.__alloyId18428 && $.addTopLevelView($.__views.__alloyId18428);
    $.__views.__alloyId18429 = Ti.UI.createView({
        id: "__alloyId18429"
    });
    $.__views.__alloyId18428.add($.__views.__alloyId18429);
    $.__views.__alloyId18430 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18430"
    });
    $.__views.__alloyId18429.add($.__views.__alloyId18430);
    $.__views.__alloyId18431 = Ti.UI.createView({
        id: "__alloyId18431"
    });
    $.__views.__alloyId18431 && $.addTopLevelView($.__views.__alloyId18431);
    $.__views.__alloyId18432 = Ti.UI.createView({
        id: "__alloyId18432"
    });
    $.__views.__alloyId18431.add($.__views.__alloyId18432);
    $.__views.__alloyId18433 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18433"
    });
    $.__views.__alloyId18432.add($.__views.__alloyId18433);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;