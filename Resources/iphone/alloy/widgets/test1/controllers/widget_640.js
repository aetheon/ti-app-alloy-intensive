function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_640";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_640 = Ti.UI.createView({
        id: "widget_640"
    });
    $.__views.widget_640 && $.addTopLevelView($.__views.widget_640);
    $.__views.__alloyId15678 = Ti.UI.createView({
        id: "__alloyId15678"
    });
    $.__views.widget_640.add($.__views.__alloyId15678);
    $.__views.__alloyId15679 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15679"
    });
    $.__views.__alloyId15678.add($.__views.__alloyId15679);
    $.__views.__alloyId15680 = Ti.UI.createView({
        id: "__alloyId15680"
    });
    $.__views.__alloyId15680 && $.addTopLevelView($.__views.__alloyId15680);
    $.__views.__alloyId15681 = Ti.UI.createView({
        id: "__alloyId15681"
    });
    $.__views.__alloyId15680.add($.__views.__alloyId15681);
    $.__views.__alloyId15682 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15682"
    });
    $.__views.__alloyId15681.add($.__views.__alloyId15682);
    $.__views.__alloyId15683 = Ti.UI.createView({
        id: "__alloyId15683"
    });
    $.__views.__alloyId15683 && $.addTopLevelView($.__views.__alloyId15683);
    $.__views.__alloyId15684 = Ti.UI.createView({
        id: "__alloyId15684"
    });
    $.__views.__alloyId15683.add($.__views.__alloyId15684);
    $.__views.__alloyId15685 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15685"
    });
    $.__views.__alloyId15684.add($.__views.__alloyId15685);
    $.__views.__alloyId15686 = Ti.UI.createView({
        id: "__alloyId15686"
    });
    $.__views.__alloyId15686 && $.addTopLevelView($.__views.__alloyId15686);
    $.__views.__alloyId15687 = Ti.UI.createView({
        id: "__alloyId15687"
    });
    $.__views.__alloyId15686.add($.__views.__alloyId15687);
    $.__views.__alloyId15688 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15688"
    });
    $.__views.__alloyId15687.add($.__views.__alloyId15688);
    $.__views.__alloyId15689 = Ti.UI.createView({
        id: "__alloyId15689"
    });
    $.__views.__alloyId15689 && $.addTopLevelView($.__views.__alloyId15689);
    $.__views.__alloyId15690 = Ti.UI.createView({
        id: "__alloyId15690"
    });
    $.__views.__alloyId15689.add($.__views.__alloyId15690);
    $.__views.__alloyId15691 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15691"
    });
    $.__views.__alloyId15690.add($.__views.__alloyId15691);
    $.__views.__alloyId15692 = Ti.UI.createView({
        id: "__alloyId15692"
    });
    $.__views.__alloyId15692 && $.addTopLevelView($.__views.__alloyId15692);
    $.__views.__alloyId15693 = Ti.UI.createView({
        id: "__alloyId15693"
    });
    $.__views.__alloyId15692.add($.__views.__alloyId15693);
    $.__views.__alloyId15694 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15694"
    });
    $.__views.__alloyId15693.add($.__views.__alloyId15694);
    $.__views.__alloyId15695 = Ti.UI.createView({
        id: "__alloyId15695"
    });
    $.__views.__alloyId15695 && $.addTopLevelView($.__views.__alloyId15695);
    $.__views.__alloyId15696 = Ti.UI.createView({
        id: "__alloyId15696"
    });
    $.__views.__alloyId15695.add($.__views.__alloyId15696);
    $.__views.__alloyId15697 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15697"
    });
    $.__views.__alloyId15696.add($.__views.__alloyId15697);
    $.__views.__alloyId15698 = Ti.UI.createView({
        id: "__alloyId15698"
    });
    $.__views.__alloyId15698 && $.addTopLevelView($.__views.__alloyId15698);
    $.__views.__alloyId15699 = Ti.UI.createView({
        id: "__alloyId15699"
    });
    $.__views.__alloyId15698.add($.__views.__alloyId15699);
    $.__views.__alloyId15700 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15700"
    });
    $.__views.__alloyId15699.add($.__views.__alloyId15700);
    $.__views.__alloyId15701 = Ti.UI.createView({
        id: "__alloyId15701"
    });
    $.__views.__alloyId15701 && $.addTopLevelView($.__views.__alloyId15701);
    $.__views.__alloyId15702 = Ti.UI.createView({
        id: "__alloyId15702"
    });
    $.__views.__alloyId15701.add($.__views.__alloyId15702);
    $.__views.__alloyId15703 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId15703"
    });
    $.__views.__alloyId15702.add($.__views.__alloyId15703);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;