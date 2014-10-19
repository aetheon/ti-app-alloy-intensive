function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_493";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_493 = Ti.UI.createView({
        id: "widget_493"
    });
    $.__views.widget_493 && $.addTopLevelView($.__views.widget_493);
    $.__views.__alloyId11414 = Ti.UI.createView({
        id: "__alloyId11414"
    });
    $.__views.widget_493.add($.__views.__alloyId11414);
    $.__views.__alloyId11415 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11415"
    });
    $.__views.__alloyId11414.add($.__views.__alloyId11415);
    $.__views.__alloyId11416 = Ti.UI.createView({
        id: "__alloyId11416"
    });
    $.__views.__alloyId11416 && $.addTopLevelView($.__views.__alloyId11416);
    $.__views.__alloyId11417 = Ti.UI.createView({
        id: "__alloyId11417"
    });
    $.__views.__alloyId11416.add($.__views.__alloyId11417);
    $.__views.__alloyId11418 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11418"
    });
    $.__views.__alloyId11417.add($.__views.__alloyId11418);
    $.__views.__alloyId11419 = Ti.UI.createView({
        id: "__alloyId11419"
    });
    $.__views.__alloyId11419 && $.addTopLevelView($.__views.__alloyId11419);
    $.__views.__alloyId11420 = Ti.UI.createView({
        id: "__alloyId11420"
    });
    $.__views.__alloyId11419.add($.__views.__alloyId11420);
    $.__views.__alloyId11421 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11421"
    });
    $.__views.__alloyId11420.add($.__views.__alloyId11421);
    $.__views.__alloyId11422 = Ti.UI.createView({
        id: "__alloyId11422"
    });
    $.__views.__alloyId11422 && $.addTopLevelView($.__views.__alloyId11422);
    $.__views.__alloyId11423 = Ti.UI.createView({
        id: "__alloyId11423"
    });
    $.__views.__alloyId11422.add($.__views.__alloyId11423);
    $.__views.__alloyId11424 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11424"
    });
    $.__views.__alloyId11423.add($.__views.__alloyId11424);
    $.__views.__alloyId11425 = Ti.UI.createView({
        id: "__alloyId11425"
    });
    $.__views.__alloyId11425 && $.addTopLevelView($.__views.__alloyId11425);
    $.__views.__alloyId11426 = Ti.UI.createView({
        id: "__alloyId11426"
    });
    $.__views.__alloyId11425.add($.__views.__alloyId11426);
    $.__views.__alloyId11427 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11427"
    });
    $.__views.__alloyId11426.add($.__views.__alloyId11427);
    $.__views.__alloyId11428 = Ti.UI.createView({
        id: "__alloyId11428"
    });
    $.__views.__alloyId11428 && $.addTopLevelView($.__views.__alloyId11428);
    $.__views.__alloyId11429 = Ti.UI.createView({
        id: "__alloyId11429"
    });
    $.__views.__alloyId11428.add($.__views.__alloyId11429);
    $.__views.__alloyId11430 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11430"
    });
    $.__views.__alloyId11429.add($.__views.__alloyId11430);
    $.__views.__alloyId11431 = Ti.UI.createView({
        id: "__alloyId11431"
    });
    $.__views.__alloyId11431 && $.addTopLevelView($.__views.__alloyId11431);
    $.__views.__alloyId11432 = Ti.UI.createView({
        id: "__alloyId11432"
    });
    $.__views.__alloyId11431.add($.__views.__alloyId11432);
    $.__views.__alloyId11433 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11433"
    });
    $.__views.__alloyId11432.add($.__views.__alloyId11433);
    $.__views.__alloyId11434 = Ti.UI.createView({
        id: "__alloyId11434"
    });
    $.__views.__alloyId11434 && $.addTopLevelView($.__views.__alloyId11434);
    $.__views.__alloyId11435 = Ti.UI.createView({
        id: "__alloyId11435"
    });
    $.__views.__alloyId11434.add($.__views.__alloyId11435);
    $.__views.__alloyId11436 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11436"
    });
    $.__views.__alloyId11435.add($.__views.__alloyId11436);
    $.__views.__alloyId11437 = Ti.UI.createView({
        id: "__alloyId11437"
    });
    $.__views.__alloyId11437 && $.addTopLevelView($.__views.__alloyId11437);
    $.__views.__alloyId11438 = Ti.UI.createView({
        id: "__alloyId11438"
    });
    $.__views.__alloyId11437.add($.__views.__alloyId11438);
    $.__views.__alloyId11439 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11439"
    });
    $.__views.__alloyId11438.add($.__views.__alloyId11439);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;