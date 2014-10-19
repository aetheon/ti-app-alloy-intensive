function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_290";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_290 = Ti.UI.createView({
        id: "widget_290"
    });
    $.__views.widget_290 && $.addTopLevelView($.__views.widget_290);
    $.__views.__alloyId5564 = Ti.UI.createView({
        id: "__alloyId5564"
    });
    $.__views.widget_290.add($.__views.__alloyId5564);
    $.__views.__alloyId5565 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5565"
    });
    $.__views.__alloyId5564.add($.__views.__alloyId5565);
    $.__views.__alloyId5566 = Ti.UI.createView({
        id: "__alloyId5566"
    });
    $.__views.__alloyId5566 && $.addTopLevelView($.__views.__alloyId5566);
    $.__views.__alloyId5567 = Ti.UI.createView({
        id: "__alloyId5567"
    });
    $.__views.__alloyId5566.add($.__views.__alloyId5567);
    $.__views.__alloyId5568 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5568"
    });
    $.__views.__alloyId5567.add($.__views.__alloyId5568);
    $.__views.__alloyId5569 = Ti.UI.createView({
        id: "__alloyId5569"
    });
    $.__views.__alloyId5569 && $.addTopLevelView($.__views.__alloyId5569);
    $.__views.__alloyId5570 = Ti.UI.createView({
        id: "__alloyId5570"
    });
    $.__views.__alloyId5569.add($.__views.__alloyId5570);
    $.__views.__alloyId5571 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5571"
    });
    $.__views.__alloyId5570.add($.__views.__alloyId5571);
    $.__views.__alloyId5572 = Ti.UI.createView({
        id: "__alloyId5572"
    });
    $.__views.__alloyId5572 && $.addTopLevelView($.__views.__alloyId5572);
    $.__views.__alloyId5573 = Ti.UI.createView({
        id: "__alloyId5573"
    });
    $.__views.__alloyId5572.add($.__views.__alloyId5573);
    $.__views.__alloyId5574 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5574"
    });
    $.__views.__alloyId5573.add($.__views.__alloyId5574);
    $.__views.__alloyId5575 = Ti.UI.createView({
        id: "__alloyId5575"
    });
    $.__views.__alloyId5575 && $.addTopLevelView($.__views.__alloyId5575);
    $.__views.__alloyId5576 = Ti.UI.createView({
        id: "__alloyId5576"
    });
    $.__views.__alloyId5575.add($.__views.__alloyId5576);
    $.__views.__alloyId5577 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5577"
    });
    $.__views.__alloyId5576.add($.__views.__alloyId5577);
    $.__views.__alloyId5578 = Ti.UI.createView({
        id: "__alloyId5578"
    });
    $.__views.__alloyId5578 && $.addTopLevelView($.__views.__alloyId5578);
    $.__views.__alloyId5579 = Ti.UI.createView({
        id: "__alloyId5579"
    });
    $.__views.__alloyId5578.add($.__views.__alloyId5579);
    $.__views.__alloyId5580 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5580"
    });
    $.__views.__alloyId5579.add($.__views.__alloyId5580);
    $.__views.__alloyId5581 = Ti.UI.createView({
        id: "__alloyId5581"
    });
    $.__views.__alloyId5581 && $.addTopLevelView($.__views.__alloyId5581);
    $.__views.__alloyId5582 = Ti.UI.createView({
        id: "__alloyId5582"
    });
    $.__views.__alloyId5581.add($.__views.__alloyId5582);
    $.__views.__alloyId5583 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5583"
    });
    $.__views.__alloyId5582.add($.__views.__alloyId5583);
    $.__views.__alloyId5584 = Ti.UI.createView({
        id: "__alloyId5584"
    });
    $.__views.__alloyId5584 && $.addTopLevelView($.__views.__alloyId5584);
    $.__views.__alloyId5585 = Ti.UI.createView({
        id: "__alloyId5585"
    });
    $.__views.__alloyId5584.add($.__views.__alloyId5585);
    $.__views.__alloyId5586 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5586"
    });
    $.__views.__alloyId5585.add($.__views.__alloyId5586);
    $.__views.__alloyId5587 = Ti.UI.createView({
        id: "__alloyId5587"
    });
    $.__views.__alloyId5587 && $.addTopLevelView($.__views.__alloyId5587);
    $.__views.__alloyId5588 = Ti.UI.createView({
        id: "__alloyId5588"
    });
    $.__views.__alloyId5587.add($.__views.__alloyId5588);
    $.__views.__alloyId5589 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5589"
    });
    $.__views.__alloyId5588.add($.__views.__alloyId5589);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;