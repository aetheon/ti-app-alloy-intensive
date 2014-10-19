function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_292";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_292 = Ti.UI.createView({
        id: "widget_292"
    });
    $.__views.widget_292 && $.addTopLevelView($.__views.widget_292);
    $.__views.__alloyId5616 = Ti.UI.createView({
        id: "__alloyId5616"
    });
    $.__views.widget_292.add($.__views.__alloyId5616);
    $.__views.__alloyId5617 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5617"
    });
    $.__views.__alloyId5616.add($.__views.__alloyId5617);
    $.__views.__alloyId5618 = Ti.UI.createView({
        id: "__alloyId5618"
    });
    $.__views.__alloyId5618 && $.addTopLevelView($.__views.__alloyId5618);
    $.__views.__alloyId5619 = Ti.UI.createView({
        id: "__alloyId5619"
    });
    $.__views.__alloyId5618.add($.__views.__alloyId5619);
    $.__views.__alloyId5620 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5620"
    });
    $.__views.__alloyId5619.add($.__views.__alloyId5620);
    $.__views.__alloyId5621 = Ti.UI.createView({
        id: "__alloyId5621"
    });
    $.__views.__alloyId5621 && $.addTopLevelView($.__views.__alloyId5621);
    $.__views.__alloyId5622 = Ti.UI.createView({
        id: "__alloyId5622"
    });
    $.__views.__alloyId5621.add($.__views.__alloyId5622);
    $.__views.__alloyId5623 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5623"
    });
    $.__views.__alloyId5622.add($.__views.__alloyId5623);
    $.__views.__alloyId5624 = Ti.UI.createView({
        id: "__alloyId5624"
    });
    $.__views.__alloyId5624 && $.addTopLevelView($.__views.__alloyId5624);
    $.__views.__alloyId5625 = Ti.UI.createView({
        id: "__alloyId5625"
    });
    $.__views.__alloyId5624.add($.__views.__alloyId5625);
    $.__views.__alloyId5626 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5626"
    });
    $.__views.__alloyId5625.add($.__views.__alloyId5626);
    $.__views.__alloyId5627 = Ti.UI.createView({
        id: "__alloyId5627"
    });
    $.__views.__alloyId5627 && $.addTopLevelView($.__views.__alloyId5627);
    $.__views.__alloyId5628 = Ti.UI.createView({
        id: "__alloyId5628"
    });
    $.__views.__alloyId5627.add($.__views.__alloyId5628);
    $.__views.__alloyId5629 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5629"
    });
    $.__views.__alloyId5628.add($.__views.__alloyId5629);
    $.__views.__alloyId5630 = Ti.UI.createView({
        id: "__alloyId5630"
    });
    $.__views.__alloyId5630 && $.addTopLevelView($.__views.__alloyId5630);
    $.__views.__alloyId5631 = Ti.UI.createView({
        id: "__alloyId5631"
    });
    $.__views.__alloyId5630.add($.__views.__alloyId5631);
    $.__views.__alloyId5632 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5632"
    });
    $.__views.__alloyId5631.add($.__views.__alloyId5632);
    $.__views.__alloyId5633 = Ti.UI.createView({
        id: "__alloyId5633"
    });
    $.__views.__alloyId5633 && $.addTopLevelView($.__views.__alloyId5633);
    $.__views.__alloyId5634 = Ti.UI.createView({
        id: "__alloyId5634"
    });
    $.__views.__alloyId5633.add($.__views.__alloyId5634);
    $.__views.__alloyId5635 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5635"
    });
    $.__views.__alloyId5634.add($.__views.__alloyId5635);
    $.__views.__alloyId5636 = Ti.UI.createView({
        id: "__alloyId5636"
    });
    $.__views.__alloyId5636 && $.addTopLevelView($.__views.__alloyId5636);
    $.__views.__alloyId5637 = Ti.UI.createView({
        id: "__alloyId5637"
    });
    $.__views.__alloyId5636.add($.__views.__alloyId5637);
    $.__views.__alloyId5638 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5638"
    });
    $.__views.__alloyId5637.add($.__views.__alloyId5638);
    $.__views.__alloyId5639 = Ti.UI.createView({
        id: "__alloyId5639"
    });
    $.__views.__alloyId5639 && $.addTopLevelView($.__views.__alloyId5639);
    $.__views.__alloyId5640 = Ti.UI.createView({
        id: "__alloyId5640"
    });
    $.__views.__alloyId5639.add($.__views.__alloyId5640);
    $.__views.__alloyId5641 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5641"
    });
    $.__views.__alloyId5640.add($.__views.__alloyId5641);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;