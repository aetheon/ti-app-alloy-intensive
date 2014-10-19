function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_811";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_811 = Ti.UI.createView({
        id: "widget_811"
    });
    $.__views.widget_811 && $.addTopLevelView($.__views.widget_811);
    $.__views.__alloyId20618 = Ti.UI.createView({
        id: "__alloyId20618"
    });
    $.__views.widget_811.add($.__views.__alloyId20618);
    $.__views.__alloyId20619 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20619"
    });
    $.__views.__alloyId20618.add($.__views.__alloyId20619);
    $.__views.__alloyId20620 = Ti.UI.createView({
        id: "__alloyId20620"
    });
    $.__views.__alloyId20620 && $.addTopLevelView($.__views.__alloyId20620);
    $.__views.__alloyId20621 = Ti.UI.createView({
        id: "__alloyId20621"
    });
    $.__views.__alloyId20620.add($.__views.__alloyId20621);
    $.__views.__alloyId20622 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20622"
    });
    $.__views.__alloyId20621.add($.__views.__alloyId20622);
    $.__views.__alloyId20623 = Ti.UI.createView({
        id: "__alloyId20623"
    });
    $.__views.__alloyId20623 && $.addTopLevelView($.__views.__alloyId20623);
    $.__views.__alloyId20624 = Ti.UI.createView({
        id: "__alloyId20624"
    });
    $.__views.__alloyId20623.add($.__views.__alloyId20624);
    $.__views.__alloyId20625 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20625"
    });
    $.__views.__alloyId20624.add($.__views.__alloyId20625);
    $.__views.__alloyId20626 = Ti.UI.createView({
        id: "__alloyId20626"
    });
    $.__views.__alloyId20626 && $.addTopLevelView($.__views.__alloyId20626);
    $.__views.__alloyId20627 = Ti.UI.createView({
        id: "__alloyId20627"
    });
    $.__views.__alloyId20626.add($.__views.__alloyId20627);
    $.__views.__alloyId20628 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20628"
    });
    $.__views.__alloyId20627.add($.__views.__alloyId20628);
    $.__views.__alloyId20629 = Ti.UI.createView({
        id: "__alloyId20629"
    });
    $.__views.__alloyId20629 && $.addTopLevelView($.__views.__alloyId20629);
    $.__views.__alloyId20630 = Ti.UI.createView({
        id: "__alloyId20630"
    });
    $.__views.__alloyId20629.add($.__views.__alloyId20630);
    $.__views.__alloyId20631 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20631"
    });
    $.__views.__alloyId20630.add($.__views.__alloyId20631);
    $.__views.__alloyId20632 = Ti.UI.createView({
        id: "__alloyId20632"
    });
    $.__views.__alloyId20632 && $.addTopLevelView($.__views.__alloyId20632);
    $.__views.__alloyId20633 = Ti.UI.createView({
        id: "__alloyId20633"
    });
    $.__views.__alloyId20632.add($.__views.__alloyId20633);
    $.__views.__alloyId20634 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20634"
    });
    $.__views.__alloyId20633.add($.__views.__alloyId20634);
    $.__views.__alloyId20635 = Ti.UI.createView({
        id: "__alloyId20635"
    });
    $.__views.__alloyId20635 && $.addTopLevelView($.__views.__alloyId20635);
    $.__views.__alloyId20636 = Ti.UI.createView({
        id: "__alloyId20636"
    });
    $.__views.__alloyId20635.add($.__views.__alloyId20636);
    $.__views.__alloyId20637 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20637"
    });
    $.__views.__alloyId20636.add($.__views.__alloyId20637);
    $.__views.__alloyId20638 = Ti.UI.createView({
        id: "__alloyId20638"
    });
    $.__views.__alloyId20638 && $.addTopLevelView($.__views.__alloyId20638);
    $.__views.__alloyId20639 = Ti.UI.createView({
        id: "__alloyId20639"
    });
    $.__views.__alloyId20638.add($.__views.__alloyId20639);
    $.__views.__alloyId20640 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20640"
    });
    $.__views.__alloyId20639.add($.__views.__alloyId20640);
    $.__views.__alloyId20641 = Ti.UI.createView({
        id: "__alloyId20641"
    });
    $.__views.__alloyId20641 && $.addTopLevelView($.__views.__alloyId20641);
    $.__views.__alloyId20642 = Ti.UI.createView({
        id: "__alloyId20642"
    });
    $.__views.__alloyId20641.add($.__views.__alloyId20642);
    $.__views.__alloyId20643 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20643"
    });
    $.__views.__alloyId20642.add($.__views.__alloyId20643);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;