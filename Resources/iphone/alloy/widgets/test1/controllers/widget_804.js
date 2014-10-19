function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_804";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_804 = Ti.UI.createView({
        id: "widget_804"
    });
    $.__views.widget_804 && $.addTopLevelView($.__views.widget_804);
    $.__views.__alloyId20410 = Ti.UI.createView({
        id: "__alloyId20410"
    });
    $.__views.widget_804.add($.__views.__alloyId20410);
    $.__views.__alloyId20411 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20411"
    });
    $.__views.__alloyId20410.add($.__views.__alloyId20411);
    $.__views.__alloyId20412 = Ti.UI.createView({
        id: "__alloyId20412"
    });
    $.__views.__alloyId20412 && $.addTopLevelView($.__views.__alloyId20412);
    $.__views.__alloyId20413 = Ti.UI.createView({
        id: "__alloyId20413"
    });
    $.__views.__alloyId20412.add($.__views.__alloyId20413);
    $.__views.__alloyId20414 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20414"
    });
    $.__views.__alloyId20413.add($.__views.__alloyId20414);
    $.__views.__alloyId20415 = Ti.UI.createView({
        id: "__alloyId20415"
    });
    $.__views.__alloyId20415 && $.addTopLevelView($.__views.__alloyId20415);
    $.__views.__alloyId20416 = Ti.UI.createView({
        id: "__alloyId20416"
    });
    $.__views.__alloyId20415.add($.__views.__alloyId20416);
    $.__views.__alloyId20417 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20417"
    });
    $.__views.__alloyId20416.add($.__views.__alloyId20417);
    $.__views.__alloyId20418 = Ti.UI.createView({
        id: "__alloyId20418"
    });
    $.__views.__alloyId20418 && $.addTopLevelView($.__views.__alloyId20418);
    $.__views.__alloyId20419 = Ti.UI.createView({
        id: "__alloyId20419"
    });
    $.__views.__alloyId20418.add($.__views.__alloyId20419);
    $.__views.__alloyId20420 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20420"
    });
    $.__views.__alloyId20419.add($.__views.__alloyId20420);
    $.__views.__alloyId20421 = Ti.UI.createView({
        id: "__alloyId20421"
    });
    $.__views.__alloyId20421 && $.addTopLevelView($.__views.__alloyId20421);
    $.__views.__alloyId20422 = Ti.UI.createView({
        id: "__alloyId20422"
    });
    $.__views.__alloyId20421.add($.__views.__alloyId20422);
    $.__views.__alloyId20423 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20423"
    });
    $.__views.__alloyId20422.add($.__views.__alloyId20423);
    $.__views.__alloyId20424 = Ti.UI.createView({
        id: "__alloyId20424"
    });
    $.__views.__alloyId20424 && $.addTopLevelView($.__views.__alloyId20424);
    $.__views.__alloyId20425 = Ti.UI.createView({
        id: "__alloyId20425"
    });
    $.__views.__alloyId20424.add($.__views.__alloyId20425);
    $.__views.__alloyId20426 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20426"
    });
    $.__views.__alloyId20425.add($.__views.__alloyId20426);
    $.__views.__alloyId20427 = Ti.UI.createView({
        id: "__alloyId20427"
    });
    $.__views.__alloyId20427 && $.addTopLevelView($.__views.__alloyId20427);
    $.__views.__alloyId20428 = Ti.UI.createView({
        id: "__alloyId20428"
    });
    $.__views.__alloyId20427.add($.__views.__alloyId20428);
    $.__views.__alloyId20429 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20429"
    });
    $.__views.__alloyId20428.add($.__views.__alloyId20429);
    $.__views.__alloyId20430 = Ti.UI.createView({
        id: "__alloyId20430"
    });
    $.__views.__alloyId20430 && $.addTopLevelView($.__views.__alloyId20430);
    $.__views.__alloyId20431 = Ti.UI.createView({
        id: "__alloyId20431"
    });
    $.__views.__alloyId20430.add($.__views.__alloyId20431);
    $.__views.__alloyId20432 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20432"
    });
    $.__views.__alloyId20431.add($.__views.__alloyId20432);
    $.__views.__alloyId20433 = Ti.UI.createView({
        id: "__alloyId20433"
    });
    $.__views.__alloyId20433 && $.addTopLevelView($.__views.__alloyId20433);
    $.__views.__alloyId20434 = Ti.UI.createView({
        id: "__alloyId20434"
    });
    $.__views.__alloyId20433.add($.__views.__alloyId20434);
    $.__views.__alloyId20435 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20435"
    });
    $.__views.__alloyId20434.add($.__views.__alloyId20435);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;