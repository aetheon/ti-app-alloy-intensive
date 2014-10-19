function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_813";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_813 = Ti.UI.createView({
        id: "widget_813"
    });
    $.__views.widget_813 && $.addTopLevelView($.__views.widget_813);
    $.__views.__alloyId20670 = Ti.UI.createView({
        id: "__alloyId20670"
    });
    $.__views.widget_813.add($.__views.__alloyId20670);
    $.__views.__alloyId20671 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20671"
    });
    $.__views.__alloyId20670.add($.__views.__alloyId20671);
    $.__views.__alloyId20672 = Ti.UI.createView({
        id: "__alloyId20672"
    });
    $.__views.__alloyId20672 && $.addTopLevelView($.__views.__alloyId20672);
    $.__views.__alloyId20673 = Ti.UI.createView({
        id: "__alloyId20673"
    });
    $.__views.__alloyId20672.add($.__views.__alloyId20673);
    $.__views.__alloyId20674 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20674"
    });
    $.__views.__alloyId20673.add($.__views.__alloyId20674);
    $.__views.__alloyId20675 = Ti.UI.createView({
        id: "__alloyId20675"
    });
    $.__views.__alloyId20675 && $.addTopLevelView($.__views.__alloyId20675);
    $.__views.__alloyId20676 = Ti.UI.createView({
        id: "__alloyId20676"
    });
    $.__views.__alloyId20675.add($.__views.__alloyId20676);
    $.__views.__alloyId20677 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20677"
    });
    $.__views.__alloyId20676.add($.__views.__alloyId20677);
    $.__views.__alloyId20678 = Ti.UI.createView({
        id: "__alloyId20678"
    });
    $.__views.__alloyId20678 && $.addTopLevelView($.__views.__alloyId20678);
    $.__views.__alloyId20679 = Ti.UI.createView({
        id: "__alloyId20679"
    });
    $.__views.__alloyId20678.add($.__views.__alloyId20679);
    $.__views.__alloyId20680 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20680"
    });
    $.__views.__alloyId20679.add($.__views.__alloyId20680);
    $.__views.__alloyId20681 = Ti.UI.createView({
        id: "__alloyId20681"
    });
    $.__views.__alloyId20681 && $.addTopLevelView($.__views.__alloyId20681);
    $.__views.__alloyId20682 = Ti.UI.createView({
        id: "__alloyId20682"
    });
    $.__views.__alloyId20681.add($.__views.__alloyId20682);
    $.__views.__alloyId20683 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20683"
    });
    $.__views.__alloyId20682.add($.__views.__alloyId20683);
    $.__views.__alloyId20684 = Ti.UI.createView({
        id: "__alloyId20684"
    });
    $.__views.__alloyId20684 && $.addTopLevelView($.__views.__alloyId20684);
    $.__views.__alloyId20685 = Ti.UI.createView({
        id: "__alloyId20685"
    });
    $.__views.__alloyId20684.add($.__views.__alloyId20685);
    $.__views.__alloyId20686 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20686"
    });
    $.__views.__alloyId20685.add($.__views.__alloyId20686);
    $.__views.__alloyId20687 = Ti.UI.createView({
        id: "__alloyId20687"
    });
    $.__views.__alloyId20687 && $.addTopLevelView($.__views.__alloyId20687);
    $.__views.__alloyId20688 = Ti.UI.createView({
        id: "__alloyId20688"
    });
    $.__views.__alloyId20687.add($.__views.__alloyId20688);
    $.__views.__alloyId20689 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20689"
    });
    $.__views.__alloyId20688.add($.__views.__alloyId20689);
    $.__views.__alloyId20690 = Ti.UI.createView({
        id: "__alloyId20690"
    });
    $.__views.__alloyId20690 && $.addTopLevelView($.__views.__alloyId20690);
    $.__views.__alloyId20691 = Ti.UI.createView({
        id: "__alloyId20691"
    });
    $.__views.__alloyId20690.add($.__views.__alloyId20691);
    $.__views.__alloyId20692 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20692"
    });
    $.__views.__alloyId20691.add($.__views.__alloyId20692);
    $.__views.__alloyId20693 = Ti.UI.createView({
        id: "__alloyId20693"
    });
    $.__views.__alloyId20693 && $.addTopLevelView($.__views.__alloyId20693);
    $.__views.__alloyId20694 = Ti.UI.createView({
        id: "__alloyId20694"
    });
    $.__views.__alloyId20693.add($.__views.__alloyId20694);
    $.__views.__alloyId20695 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20695"
    });
    $.__views.__alloyId20694.add($.__views.__alloyId20695);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;