function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_985";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_985 = Ti.UI.createView({
        id: "widget_985"
    });
    $.__views.widget_985 && $.addTopLevelView($.__views.widget_985);
    $.__views.__alloyId25610 = Ti.UI.createView({
        id: "__alloyId25610"
    });
    $.__views.widget_985.add($.__views.__alloyId25610);
    $.__views.__alloyId25611 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25611"
    });
    $.__views.__alloyId25610.add($.__views.__alloyId25611);
    $.__views.__alloyId25612 = Ti.UI.createView({
        id: "__alloyId25612"
    });
    $.__views.__alloyId25612 && $.addTopLevelView($.__views.__alloyId25612);
    $.__views.__alloyId25613 = Ti.UI.createView({
        id: "__alloyId25613"
    });
    $.__views.__alloyId25612.add($.__views.__alloyId25613);
    $.__views.__alloyId25614 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25614"
    });
    $.__views.__alloyId25613.add($.__views.__alloyId25614);
    $.__views.__alloyId25615 = Ti.UI.createView({
        id: "__alloyId25615"
    });
    $.__views.__alloyId25615 && $.addTopLevelView($.__views.__alloyId25615);
    $.__views.__alloyId25616 = Ti.UI.createView({
        id: "__alloyId25616"
    });
    $.__views.__alloyId25615.add($.__views.__alloyId25616);
    $.__views.__alloyId25617 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25617"
    });
    $.__views.__alloyId25616.add($.__views.__alloyId25617);
    $.__views.__alloyId25618 = Ti.UI.createView({
        id: "__alloyId25618"
    });
    $.__views.__alloyId25618 && $.addTopLevelView($.__views.__alloyId25618);
    $.__views.__alloyId25619 = Ti.UI.createView({
        id: "__alloyId25619"
    });
    $.__views.__alloyId25618.add($.__views.__alloyId25619);
    $.__views.__alloyId25620 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25620"
    });
    $.__views.__alloyId25619.add($.__views.__alloyId25620);
    $.__views.__alloyId25621 = Ti.UI.createView({
        id: "__alloyId25621"
    });
    $.__views.__alloyId25621 && $.addTopLevelView($.__views.__alloyId25621);
    $.__views.__alloyId25622 = Ti.UI.createView({
        id: "__alloyId25622"
    });
    $.__views.__alloyId25621.add($.__views.__alloyId25622);
    $.__views.__alloyId25623 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25623"
    });
    $.__views.__alloyId25622.add($.__views.__alloyId25623);
    $.__views.__alloyId25624 = Ti.UI.createView({
        id: "__alloyId25624"
    });
    $.__views.__alloyId25624 && $.addTopLevelView($.__views.__alloyId25624);
    $.__views.__alloyId25625 = Ti.UI.createView({
        id: "__alloyId25625"
    });
    $.__views.__alloyId25624.add($.__views.__alloyId25625);
    $.__views.__alloyId25626 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25626"
    });
    $.__views.__alloyId25625.add($.__views.__alloyId25626);
    $.__views.__alloyId25627 = Ti.UI.createView({
        id: "__alloyId25627"
    });
    $.__views.__alloyId25627 && $.addTopLevelView($.__views.__alloyId25627);
    $.__views.__alloyId25628 = Ti.UI.createView({
        id: "__alloyId25628"
    });
    $.__views.__alloyId25627.add($.__views.__alloyId25628);
    $.__views.__alloyId25629 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25629"
    });
    $.__views.__alloyId25628.add($.__views.__alloyId25629);
    $.__views.__alloyId25630 = Ti.UI.createView({
        id: "__alloyId25630"
    });
    $.__views.__alloyId25630 && $.addTopLevelView($.__views.__alloyId25630);
    $.__views.__alloyId25631 = Ti.UI.createView({
        id: "__alloyId25631"
    });
    $.__views.__alloyId25630.add($.__views.__alloyId25631);
    $.__views.__alloyId25632 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25632"
    });
    $.__views.__alloyId25631.add($.__views.__alloyId25632);
    $.__views.__alloyId25633 = Ti.UI.createView({
        id: "__alloyId25633"
    });
    $.__views.__alloyId25633 && $.addTopLevelView($.__views.__alloyId25633);
    $.__views.__alloyId25634 = Ti.UI.createView({
        id: "__alloyId25634"
    });
    $.__views.__alloyId25633.add($.__views.__alloyId25634);
    $.__views.__alloyId25635 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25635"
    });
    $.__views.__alloyId25634.add($.__views.__alloyId25635);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;