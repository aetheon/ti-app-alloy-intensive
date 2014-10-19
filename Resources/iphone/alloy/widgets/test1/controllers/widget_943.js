function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_943";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_943 = Ti.UI.createView({
        id: "widget_943"
    });
    $.__views.widget_943 && $.addTopLevelView($.__views.widget_943);
    $.__views.__alloyId24414 = Ti.UI.createView({
        id: "__alloyId24414"
    });
    $.__views.widget_943.add($.__views.__alloyId24414);
    $.__views.__alloyId24415 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24415"
    });
    $.__views.__alloyId24414.add($.__views.__alloyId24415);
    $.__views.__alloyId24416 = Ti.UI.createView({
        id: "__alloyId24416"
    });
    $.__views.__alloyId24416 && $.addTopLevelView($.__views.__alloyId24416);
    $.__views.__alloyId24417 = Ti.UI.createView({
        id: "__alloyId24417"
    });
    $.__views.__alloyId24416.add($.__views.__alloyId24417);
    $.__views.__alloyId24418 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24418"
    });
    $.__views.__alloyId24417.add($.__views.__alloyId24418);
    $.__views.__alloyId24419 = Ti.UI.createView({
        id: "__alloyId24419"
    });
    $.__views.__alloyId24419 && $.addTopLevelView($.__views.__alloyId24419);
    $.__views.__alloyId24420 = Ti.UI.createView({
        id: "__alloyId24420"
    });
    $.__views.__alloyId24419.add($.__views.__alloyId24420);
    $.__views.__alloyId24421 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24421"
    });
    $.__views.__alloyId24420.add($.__views.__alloyId24421);
    $.__views.__alloyId24422 = Ti.UI.createView({
        id: "__alloyId24422"
    });
    $.__views.__alloyId24422 && $.addTopLevelView($.__views.__alloyId24422);
    $.__views.__alloyId24423 = Ti.UI.createView({
        id: "__alloyId24423"
    });
    $.__views.__alloyId24422.add($.__views.__alloyId24423);
    $.__views.__alloyId24424 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24424"
    });
    $.__views.__alloyId24423.add($.__views.__alloyId24424);
    $.__views.__alloyId24425 = Ti.UI.createView({
        id: "__alloyId24425"
    });
    $.__views.__alloyId24425 && $.addTopLevelView($.__views.__alloyId24425);
    $.__views.__alloyId24426 = Ti.UI.createView({
        id: "__alloyId24426"
    });
    $.__views.__alloyId24425.add($.__views.__alloyId24426);
    $.__views.__alloyId24427 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24427"
    });
    $.__views.__alloyId24426.add($.__views.__alloyId24427);
    $.__views.__alloyId24428 = Ti.UI.createView({
        id: "__alloyId24428"
    });
    $.__views.__alloyId24428 && $.addTopLevelView($.__views.__alloyId24428);
    $.__views.__alloyId24429 = Ti.UI.createView({
        id: "__alloyId24429"
    });
    $.__views.__alloyId24428.add($.__views.__alloyId24429);
    $.__views.__alloyId24430 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24430"
    });
    $.__views.__alloyId24429.add($.__views.__alloyId24430);
    $.__views.__alloyId24431 = Ti.UI.createView({
        id: "__alloyId24431"
    });
    $.__views.__alloyId24431 && $.addTopLevelView($.__views.__alloyId24431);
    $.__views.__alloyId24432 = Ti.UI.createView({
        id: "__alloyId24432"
    });
    $.__views.__alloyId24431.add($.__views.__alloyId24432);
    $.__views.__alloyId24433 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24433"
    });
    $.__views.__alloyId24432.add($.__views.__alloyId24433);
    $.__views.__alloyId24434 = Ti.UI.createView({
        id: "__alloyId24434"
    });
    $.__views.__alloyId24434 && $.addTopLevelView($.__views.__alloyId24434);
    $.__views.__alloyId24435 = Ti.UI.createView({
        id: "__alloyId24435"
    });
    $.__views.__alloyId24434.add($.__views.__alloyId24435);
    $.__views.__alloyId24436 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24436"
    });
    $.__views.__alloyId24435.add($.__views.__alloyId24436);
    $.__views.__alloyId24437 = Ti.UI.createView({
        id: "__alloyId24437"
    });
    $.__views.__alloyId24437 && $.addTopLevelView($.__views.__alloyId24437);
    $.__views.__alloyId24438 = Ti.UI.createView({
        id: "__alloyId24438"
    });
    $.__views.__alloyId24437.add($.__views.__alloyId24438);
    $.__views.__alloyId24439 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24439"
    });
    $.__views.__alloyId24438.add($.__views.__alloyId24439);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;