function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_708";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_708 = Ti.UI.createView({
        id: "widget_708"
    });
    $.__views.widget_708 && $.addTopLevelView($.__views.widget_708);
    $.__views.__alloyId17628 = Ti.UI.createView({
        id: "__alloyId17628"
    });
    $.__views.widget_708.add($.__views.__alloyId17628);
    $.__views.__alloyId17629 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17629"
    });
    $.__views.__alloyId17628.add($.__views.__alloyId17629);
    $.__views.__alloyId17630 = Ti.UI.createView({
        id: "__alloyId17630"
    });
    $.__views.__alloyId17630 && $.addTopLevelView($.__views.__alloyId17630);
    $.__views.__alloyId17631 = Ti.UI.createView({
        id: "__alloyId17631"
    });
    $.__views.__alloyId17630.add($.__views.__alloyId17631);
    $.__views.__alloyId17632 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17632"
    });
    $.__views.__alloyId17631.add($.__views.__alloyId17632);
    $.__views.__alloyId17633 = Ti.UI.createView({
        id: "__alloyId17633"
    });
    $.__views.__alloyId17633 && $.addTopLevelView($.__views.__alloyId17633);
    $.__views.__alloyId17634 = Ti.UI.createView({
        id: "__alloyId17634"
    });
    $.__views.__alloyId17633.add($.__views.__alloyId17634);
    $.__views.__alloyId17635 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17635"
    });
    $.__views.__alloyId17634.add($.__views.__alloyId17635);
    $.__views.__alloyId17636 = Ti.UI.createView({
        id: "__alloyId17636"
    });
    $.__views.__alloyId17636 && $.addTopLevelView($.__views.__alloyId17636);
    $.__views.__alloyId17637 = Ti.UI.createView({
        id: "__alloyId17637"
    });
    $.__views.__alloyId17636.add($.__views.__alloyId17637);
    $.__views.__alloyId17638 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17638"
    });
    $.__views.__alloyId17637.add($.__views.__alloyId17638);
    $.__views.__alloyId17639 = Ti.UI.createView({
        id: "__alloyId17639"
    });
    $.__views.__alloyId17639 && $.addTopLevelView($.__views.__alloyId17639);
    $.__views.__alloyId17640 = Ti.UI.createView({
        id: "__alloyId17640"
    });
    $.__views.__alloyId17639.add($.__views.__alloyId17640);
    $.__views.__alloyId17641 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17641"
    });
    $.__views.__alloyId17640.add($.__views.__alloyId17641);
    $.__views.__alloyId17642 = Ti.UI.createView({
        id: "__alloyId17642"
    });
    $.__views.__alloyId17642 && $.addTopLevelView($.__views.__alloyId17642);
    $.__views.__alloyId17643 = Ti.UI.createView({
        id: "__alloyId17643"
    });
    $.__views.__alloyId17642.add($.__views.__alloyId17643);
    $.__views.__alloyId17644 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17644"
    });
    $.__views.__alloyId17643.add($.__views.__alloyId17644);
    $.__views.__alloyId17645 = Ti.UI.createView({
        id: "__alloyId17645"
    });
    $.__views.__alloyId17645 && $.addTopLevelView($.__views.__alloyId17645);
    $.__views.__alloyId17646 = Ti.UI.createView({
        id: "__alloyId17646"
    });
    $.__views.__alloyId17645.add($.__views.__alloyId17646);
    $.__views.__alloyId17647 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17647"
    });
    $.__views.__alloyId17646.add($.__views.__alloyId17647);
    $.__views.__alloyId17648 = Ti.UI.createView({
        id: "__alloyId17648"
    });
    $.__views.__alloyId17648 && $.addTopLevelView($.__views.__alloyId17648);
    $.__views.__alloyId17649 = Ti.UI.createView({
        id: "__alloyId17649"
    });
    $.__views.__alloyId17648.add($.__views.__alloyId17649);
    $.__views.__alloyId17650 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17650"
    });
    $.__views.__alloyId17649.add($.__views.__alloyId17650);
    $.__views.__alloyId17651 = Ti.UI.createView({
        id: "__alloyId17651"
    });
    $.__views.__alloyId17651 && $.addTopLevelView($.__views.__alloyId17651);
    $.__views.__alloyId17652 = Ti.UI.createView({
        id: "__alloyId17652"
    });
    $.__views.__alloyId17651.add($.__views.__alloyId17652);
    $.__views.__alloyId17653 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId17653"
    });
    $.__views.__alloyId17652.add($.__views.__alloyId17653);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;