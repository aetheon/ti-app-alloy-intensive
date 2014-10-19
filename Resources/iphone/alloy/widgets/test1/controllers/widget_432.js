function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_432";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_432 = Ti.UI.createView({
        id: "widget_432"
    });
    $.__views.widget_432 && $.addTopLevelView($.__views.widget_432);
    $.__views.__alloyId9672 = Ti.UI.createView({
        id: "__alloyId9672"
    });
    $.__views.widget_432.add($.__views.__alloyId9672);
    $.__views.__alloyId9673 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9673"
    });
    $.__views.__alloyId9672.add($.__views.__alloyId9673);
    $.__views.__alloyId9674 = Ti.UI.createView({
        id: "__alloyId9674"
    });
    $.__views.__alloyId9674 && $.addTopLevelView($.__views.__alloyId9674);
    $.__views.__alloyId9675 = Ti.UI.createView({
        id: "__alloyId9675"
    });
    $.__views.__alloyId9674.add($.__views.__alloyId9675);
    $.__views.__alloyId9676 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9676"
    });
    $.__views.__alloyId9675.add($.__views.__alloyId9676);
    $.__views.__alloyId9677 = Ti.UI.createView({
        id: "__alloyId9677"
    });
    $.__views.__alloyId9677 && $.addTopLevelView($.__views.__alloyId9677);
    $.__views.__alloyId9678 = Ti.UI.createView({
        id: "__alloyId9678"
    });
    $.__views.__alloyId9677.add($.__views.__alloyId9678);
    $.__views.__alloyId9679 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9679"
    });
    $.__views.__alloyId9678.add($.__views.__alloyId9679);
    $.__views.__alloyId9680 = Ti.UI.createView({
        id: "__alloyId9680"
    });
    $.__views.__alloyId9680 && $.addTopLevelView($.__views.__alloyId9680);
    $.__views.__alloyId9681 = Ti.UI.createView({
        id: "__alloyId9681"
    });
    $.__views.__alloyId9680.add($.__views.__alloyId9681);
    $.__views.__alloyId9682 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9682"
    });
    $.__views.__alloyId9681.add($.__views.__alloyId9682);
    $.__views.__alloyId9683 = Ti.UI.createView({
        id: "__alloyId9683"
    });
    $.__views.__alloyId9683 && $.addTopLevelView($.__views.__alloyId9683);
    $.__views.__alloyId9684 = Ti.UI.createView({
        id: "__alloyId9684"
    });
    $.__views.__alloyId9683.add($.__views.__alloyId9684);
    $.__views.__alloyId9685 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9685"
    });
    $.__views.__alloyId9684.add($.__views.__alloyId9685);
    $.__views.__alloyId9686 = Ti.UI.createView({
        id: "__alloyId9686"
    });
    $.__views.__alloyId9686 && $.addTopLevelView($.__views.__alloyId9686);
    $.__views.__alloyId9687 = Ti.UI.createView({
        id: "__alloyId9687"
    });
    $.__views.__alloyId9686.add($.__views.__alloyId9687);
    $.__views.__alloyId9688 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9688"
    });
    $.__views.__alloyId9687.add($.__views.__alloyId9688);
    $.__views.__alloyId9689 = Ti.UI.createView({
        id: "__alloyId9689"
    });
    $.__views.__alloyId9689 && $.addTopLevelView($.__views.__alloyId9689);
    $.__views.__alloyId9690 = Ti.UI.createView({
        id: "__alloyId9690"
    });
    $.__views.__alloyId9689.add($.__views.__alloyId9690);
    $.__views.__alloyId9691 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9691"
    });
    $.__views.__alloyId9690.add($.__views.__alloyId9691);
    $.__views.__alloyId9692 = Ti.UI.createView({
        id: "__alloyId9692"
    });
    $.__views.__alloyId9692 && $.addTopLevelView($.__views.__alloyId9692);
    $.__views.__alloyId9693 = Ti.UI.createView({
        id: "__alloyId9693"
    });
    $.__views.__alloyId9692.add($.__views.__alloyId9693);
    $.__views.__alloyId9694 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9694"
    });
    $.__views.__alloyId9693.add($.__views.__alloyId9694);
    $.__views.__alloyId9695 = Ti.UI.createView({
        id: "__alloyId9695"
    });
    $.__views.__alloyId9695 && $.addTopLevelView($.__views.__alloyId9695);
    $.__views.__alloyId9696 = Ti.UI.createView({
        id: "__alloyId9696"
    });
    $.__views.__alloyId9695.add($.__views.__alloyId9696);
    $.__views.__alloyId9697 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9697"
    });
    $.__views.__alloyId9696.add($.__views.__alloyId9697);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;