function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_430";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_430 = Ti.UI.createView({
        id: "widget_430"
    });
    $.__views.widget_430 && $.addTopLevelView($.__views.widget_430);
    $.__views.__alloyId9620 = Ti.UI.createView({
        id: "__alloyId9620"
    });
    $.__views.widget_430.add($.__views.__alloyId9620);
    $.__views.__alloyId9621 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9621"
    });
    $.__views.__alloyId9620.add($.__views.__alloyId9621);
    $.__views.__alloyId9622 = Ti.UI.createView({
        id: "__alloyId9622"
    });
    $.__views.__alloyId9622 && $.addTopLevelView($.__views.__alloyId9622);
    $.__views.__alloyId9623 = Ti.UI.createView({
        id: "__alloyId9623"
    });
    $.__views.__alloyId9622.add($.__views.__alloyId9623);
    $.__views.__alloyId9624 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9624"
    });
    $.__views.__alloyId9623.add($.__views.__alloyId9624);
    $.__views.__alloyId9625 = Ti.UI.createView({
        id: "__alloyId9625"
    });
    $.__views.__alloyId9625 && $.addTopLevelView($.__views.__alloyId9625);
    $.__views.__alloyId9626 = Ti.UI.createView({
        id: "__alloyId9626"
    });
    $.__views.__alloyId9625.add($.__views.__alloyId9626);
    $.__views.__alloyId9627 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9627"
    });
    $.__views.__alloyId9626.add($.__views.__alloyId9627);
    $.__views.__alloyId9628 = Ti.UI.createView({
        id: "__alloyId9628"
    });
    $.__views.__alloyId9628 && $.addTopLevelView($.__views.__alloyId9628);
    $.__views.__alloyId9629 = Ti.UI.createView({
        id: "__alloyId9629"
    });
    $.__views.__alloyId9628.add($.__views.__alloyId9629);
    $.__views.__alloyId9630 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9630"
    });
    $.__views.__alloyId9629.add($.__views.__alloyId9630);
    $.__views.__alloyId9631 = Ti.UI.createView({
        id: "__alloyId9631"
    });
    $.__views.__alloyId9631 && $.addTopLevelView($.__views.__alloyId9631);
    $.__views.__alloyId9632 = Ti.UI.createView({
        id: "__alloyId9632"
    });
    $.__views.__alloyId9631.add($.__views.__alloyId9632);
    $.__views.__alloyId9633 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9633"
    });
    $.__views.__alloyId9632.add($.__views.__alloyId9633);
    $.__views.__alloyId9634 = Ti.UI.createView({
        id: "__alloyId9634"
    });
    $.__views.__alloyId9634 && $.addTopLevelView($.__views.__alloyId9634);
    $.__views.__alloyId9635 = Ti.UI.createView({
        id: "__alloyId9635"
    });
    $.__views.__alloyId9634.add($.__views.__alloyId9635);
    $.__views.__alloyId9636 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9636"
    });
    $.__views.__alloyId9635.add($.__views.__alloyId9636);
    $.__views.__alloyId9637 = Ti.UI.createView({
        id: "__alloyId9637"
    });
    $.__views.__alloyId9637 && $.addTopLevelView($.__views.__alloyId9637);
    $.__views.__alloyId9638 = Ti.UI.createView({
        id: "__alloyId9638"
    });
    $.__views.__alloyId9637.add($.__views.__alloyId9638);
    $.__views.__alloyId9639 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9639"
    });
    $.__views.__alloyId9638.add($.__views.__alloyId9639);
    $.__views.__alloyId9640 = Ti.UI.createView({
        id: "__alloyId9640"
    });
    $.__views.__alloyId9640 && $.addTopLevelView($.__views.__alloyId9640);
    $.__views.__alloyId9641 = Ti.UI.createView({
        id: "__alloyId9641"
    });
    $.__views.__alloyId9640.add($.__views.__alloyId9641);
    $.__views.__alloyId9642 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9642"
    });
    $.__views.__alloyId9641.add($.__views.__alloyId9642);
    $.__views.__alloyId9643 = Ti.UI.createView({
        id: "__alloyId9643"
    });
    $.__views.__alloyId9643 && $.addTopLevelView($.__views.__alloyId9643);
    $.__views.__alloyId9644 = Ti.UI.createView({
        id: "__alloyId9644"
    });
    $.__views.__alloyId9643.add($.__views.__alloyId9644);
    $.__views.__alloyId9645 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9645"
    });
    $.__views.__alloyId9644.add($.__views.__alloyId9645);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;