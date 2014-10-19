function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_256";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_256 = Ti.UI.createView({
        id: "widget_256"
    });
    $.__views.widget_256 && $.addTopLevelView($.__views.widget_256);
    $.__views.__alloyId4576 = Ti.UI.createView({
        id: "__alloyId4576"
    });
    $.__views.widget_256.add($.__views.__alloyId4576);
    $.__views.__alloyId4577 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4577"
    });
    $.__views.__alloyId4576.add($.__views.__alloyId4577);
    $.__views.__alloyId4578 = Ti.UI.createView({
        id: "__alloyId4578"
    });
    $.__views.__alloyId4578 && $.addTopLevelView($.__views.__alloyId4578);
    $.__views.__alloyId4579 = Ti.UI.createView({
        id: "__alloyId4579"
    });
    $.__views.__alloyId4578.add($.__views.__alloyId4579);
    $.__views.__alloyId4580 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4580"
    });
    $.__views.__alloyId4579.add($.__views.__alloyId4580);
    $.__views.__alloyId4581 = Ti.UI.createView({
        id: "__alloyId4581"
    });
    $.__views.__alloyId4581 && $.addTopLevelView($.__views.__alloyId4581);
    $.__views.__alloyId4582 = Ti.UI.createView({
        id: "__alloyId4582"
    });
    $.__views.__alloyId4581.add($.__views.__alloyId4582);
    $.__views.__alloyId4583 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4583"
    });
    $.__views.__alloyId4582.add($.__views.__alloyId4583);
    $.__views.__alloyId4584 = Ti.UI.createView({
        id: "__alloyId4584"
    });
    $.__views.__alloyId4584 && $.addTopLevelView($.__views.__alloyId4584);
    $.__views.__alloyId4585 = Ti.UI.createView({
        id: "__alloyId4585"
    });
    $.__views.__alloyId4584.add($.__views.__alloyId4585);
    $.__views.__alloyId4586 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4586"
    });
    $.__views.__alloyId4585.add($.__views.__alloyId4586);
    $.__views.__alloyId4587 = Ti.UI.createView({
        id: "__alloyId4587"
    });
    $.__views.__alloyId4587 && $.addTopLevelView($.__views.__alloyId4587);
    $.__views.__alloyId4588 = Ti.UI.createView({
        id: "__alloyId4588"
    });
    $.__views.__alloyId4587.add($.__views.__alloyId4588);
    $.__views.__alloyId4589 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4589"
    });
    $.__views.__alloyId4588.add($.__views.__alloyId4589);
    $.__views.__alloyId4590 = Ti.UI.createView({
        id: "__alloyId4590"
    });
    $.__views.__alloyId4590 && $.addTopLevelView($.__views.__alloyId4590);
    $.__views.__alloyId4591 = Ti.UI.createView({
        id: "__alloyId4591"
    });
    $.__views.__alloyId4590.add($.__views.__alloyId4591);
    $.__views.__alloyId4592 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4592"
    });
    $.__views.__alloyId4591.add($.__views.__alloyId4592);
    $.__views.__alloyId4593 = Ti.UI.createView({
        id: "__alloyId4593"
    });
    $.__views.__alloyId4593 && $.addTopLevelView($.__views.__alloyId4593);
    $.__views.__alloyId4594 = Ti.UI.createView({
        id: "__alloyId4594"
    });
    $.__views.__alloyId4593.add($.__views.__alloyId4594);
    $.__views.__alloyId4595 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4595"
    });
    $.__views.__alloyId4594.add($.__views.__alloyId4595);
    $.__views.__alloyId4596 = Ti.UI.createView({
        id: "__alloyId4596"
    });
    $.__views.__alloyId4596 && $.addTopLevelView($.__views.__alloyId4596);
    $.__views.__alloyId4597 = Ti.UI.createView({
        id: "__alloyId4597"
    });
    $.__views.__alloyId4596.add($.__views.__alloyId4597);
    $.__views.__alloyId4598 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4598"
    });
    $.__views.__alloyId4597.add($.__views.__alloyId4598);
    $.__views.__alloyId4599 = Ti.UI.createView({
        id: "__alloyId4599"
    });
    $.__views.__alloyId4599 && $.addTopLevelView($.__views.__alloyId4599);
    $.__views.__alloyId4600 = Ti.UI.createView({
        id: "__alloyId4600"
    });
    $.__views.__alloyId4599.add($.__views.__alloyId4600);
    $.__views.__alloyId4601 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4601"
    });
    $.__views.__alloyId4600.add($.__views.__alloyId4601);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;