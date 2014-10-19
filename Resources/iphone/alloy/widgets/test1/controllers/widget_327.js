function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_327";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_327 = Ti.UI.createView({
        id: "widget_327"
    });
    $.__views.widget_327 && $.addTopLevelView($.__views.widget_327);
    $.__views.__alloyId6630 = Ti.UI.createView({
        id: "__alloyId6630"
    });
    $.__views.widget_327.add($.__views.__alloyId6630);
    $.__views.__alloyId6631 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6631"
    });
    $.__views.__alloyId6630.add($.__views.__alloyId6631);
    $.__views.__alloyId6632 = Ti.UI.createView({
        id: "__alloyId6632"
    });
    $.__views.__alloyId6632 && $.addTopLevelView($.__views.__alloyId6632);
    $.__views.__alloyId6633 = Ti.UI.createView({
        id: "__alloyId6633"
    });
    $.__views.__alloyId6632.add($.__views.__alloyId6633);
    $.__views.__alloyId6634 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6634"
    });
    $.__views.__alloyId6633.add($.__views.__alloyId6634);
    $.__views.__alloyId6635 = Ti.UI.createView({
        id: "__alloyId6635"
    });
    $.__views.__alloyId6635 && $.addTopLevelView($.__views.__alloyId6635);
    $.__views.__alloyId6636 = Ti.UI.createView({
        id: "__alloyId6636"
    });
    $.__views.__alloyId6635.add($.__views.__alloyId6636);
    $.__views.__alloyId6637 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6637"
    });
    $.__views.__alloyId6636.add($.__views.__alloyId6637);
    $.__views.__alloyId6638 = Ti.UI.createView({
        id: "__alloyId6638"
    });
    $.__views.__alloyId6638 && $.addTopLevelView($.__views.__alloyId6638);
    $.__views.__alloyId6639 = Ti.UI.createView({
        id: "__alloyId6639"
    });
    $.__views.__alloyId6638.add($.__views.__alloyId6639);
    $.__views.__alloyId6640 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6640"
    });
    $.__views.__alloyId6639.add($.__views.__alloyId6640);
    $.__views.__alloyId6641 = Ti.UI.createView({
        id: "__alloyId6641"
    });
    $.__views.__alloyId6641 && $.addTopLevelView($.__views.__alloyId6641);
    $.__views.__alloyId6642 = Ti.UI.createView({
        id: "__alloyId6642"
    });
    $.__views.__alloyId6641.add($.__views.__alloyId6642);
    $.__views.__alloyId6643 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6643"
    });
    $.__views.__alloyId6642.add($.__views.__alloyId6643);
    $.__views.__alloyId6644 = Ti.UI.createView({
        id: "__alloyId6644"
    });
    $.__views.__alloyId6644 && $.addTopLevelView($.__views.__alloyId6644);
    $.__views.__alloyId6645 = Ti.UI.createView({
        id: "__alloyId6645"
    });
    $.__views.__alloyId6644.add($.__views.__alloyId6645);
    $.__views.__alloyId6646 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6646"
    });
    $.__views.__alloyId6645.add($.__views.__alloyId6646);
    $.__views.__alloyId6647 = Ti.UI.createView({
        id: "__alloyId6647"
    });
    $.__views.__alloyId6647 && $.addTopLevelView($.__views.__alloyId6647);
    $.__views.__alloyId6648 = Ti.UI.createView({
        id: "__alloyId6648"
    });
    $.__views.__alloyId6647.add($.__views.__alloyId6648);
    $.__views.__alloyId6649 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6649"
    });
    $.__views.__alloyId6648.add($.__views.__alloyId6649);
    $.__views.__alloyId6650 = Ti.UI.createView({
        id: "__alloyId6650"
    });
    $.__views.__alloyId6650 && $.addTopLevelView($.__views.__alloyId6650);
    $.__views.__alloyId6651 = Ti.UI.createView({
        id: "__alloyId6651"
    });
    $.__views.__alloyId6650.add($.__views.__alloyId6651);
    $.__views.__alloyId6652 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6652"
    });
    $.__views.__alloyId6651.add($.__views.__alloyId6652);
    $.__views.__alloyId6653 = Ti.UI.createView({
        id: "__alloyId6653"
    });
    $.__views.__alloyId6653 && $.addTopLevelView($.__views.__alloyId6653);
    $.__views.__alloyId6654 = Ti.UI.createView({
        id: "__alloyId6654"
    });
    $.__views.__alloyId6653.add($.__views.__alloyId6654);
    $.__views.__alloyId6655 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId6655"
    });
    $.__views.__alloyId6654.add($.__views.__alloyId6655);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;