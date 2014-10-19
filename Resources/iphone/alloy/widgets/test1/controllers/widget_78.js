function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_78";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_78 = Ti.UI.createView({
        id: "widget_78"
    });
    $.__views.widget_78 && $.addTopLevelView($.__views.widget_78);
    $.__views.__alloyId19682 = Ti.UI.createView({
        id: "__alloyId19682"
    });
    $.__views.widget_78.add($.__views.__alloyId19682);
    $.__views.__alloyId19683 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19683"
    });
    $.__views.__alloyId19682.add($.__views.__alloyId19683);
    $.__views.__alloyId19684 = Ti.UI.createView({
        id: "__alloyId19684"
    });
    $.__views.__alloyId19684 && $.addTopLevelView($.__views.__alloyId19684);
    $.__views.__alloyId19685 = Ti.UI.createView({
        id: "__alloyId19685"
    });
    $.__views.__alloyId19684.add($.__views.__alloyId19685);
    $.__views.__alloyId19686 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19686"
    });
    $.__views.__alloyId19685.add($.__views.__alloyId19686);
    $.__views.__alloyId19687 = Ti.UI.createView({
        id: "__alloyId19687"
    });
    $.__views.__alloyId19687 && $.addTopLevelView($.__views.__alloyId19687);
    $.__views.__alloyId19688 = Ti.UI.createView({
        id: "__alloyId19688"
    });
    $.__views.__alloyId19687.add($.__views.__alloyId19688);
    $.__views.__alloyId19689 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19689"
    });
    $.__views.__alloyId19688.add($.__views.__alloyId19689);
    $.__views.__alloyId19690 = Ti.UI.createView({
        id: "__alloyId19690"
    });
    $.__views.__alloyId19690 && $.addTopLevelView($.__views.__alloyId19690);
    $.__views.__alloyId19691 = Ti.UI.createView({
        id: "__alloyId19691"
    });
    $.__views.__alloyId19690.add($.__views.__alloyId19691);
    $.__views.__alloyId19692 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19692"
    });
    $.__views.__alloyId19691.add($.__views.__alloyId19692);
    $.__views.__alloyId19693 = Ti.UI.createView({
        id: "__alloyId19693"
    });
    $.__views.__alloyId19693 && $.addTopLevelView($.__views.__alloyId19693);
    $.__views.__alloyId19694 = Ti.UI.createView({
        id: "__alloyId19694"
    });
    $.__views.__alloyId19693.add($.__views.__alloyId19694);
    $.__views.__alloyId19695 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19695"
    });
    $.__views.__alloyId19694.add($.__views.__alloyId19695);
    $.__views.__alloyId19696 = Ti.UI.createView({
        id: "__alloyId19696"
    });
    $.__views.__alloyId19696 && $.addTopLevelView($.__views.__alloyId19696);
    $.__views.__alloyId19697 = Ti.UI.createView({
        id: "__alloyId19697"
    });
    $.__views.__alloyId19696.add($.__views.__alloyId19697);
    $.__views.__alloyId19698 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19698"
    });
    $.__views.__alloyId19697.add($.__views.__alloyId19698);
    $.__views.__alloyId19699 = Ti.UI.createView({
        id: "__alloyId19699"
    });
    $.__views.__alloyId19699 && $.addTopLevelView($.__views.__alloyId19699);
    $.__views.__alloyId19700 = Ti.UI.createView({
        id: "__alloyId19700"
    });
    $.__views.__alloyId19699.add($.__views.__alloyId19700);
    $.__views.__alloyId19701 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19701"
    });
    $.__views.__alloyId19700.add($.__views.__alloyId19701);
    $.__views.__alloyId19702 = Ti.UI.createView({
        id: "__alloyId19702"
    });
    $.__views.__alloyId19702 && $.addTopLevelView($.__views.__alloyId19702);
    $.__views.__alloyId19703 = Ti.UI.createView({
        id: "__alloyId19703"
    });
    $.__views.__alloyId19702.add($.__views.__alloyId19703);
    $.__views.__alloyId19704 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19704"
    });
    $.__views.__alloyId19703.add($.__views.__alloyId19704);
    $.__views.__alloyId19705 = Ti.UI.createView({
        id: "__alloyId19705"
    });
    $.__views.__alloyId19705 && $.addTopLevelView($.__views.__alloyId19705);
    $.__views.__alloyId19706 = Ti.UI.createView({
        id: "__alloyId19706"
    });
    $.__views.__alloyId19705.add($.__views.__alloyId19706);
    $.__views.__alloyId19707 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId19707"
    });
    $.__views.__alloyId19706.add($.__views.__alloyId19707);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;