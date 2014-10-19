function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_952";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_952 = Ti.UI.createView({
        id: "widget_952"
    });
    $.__views.widget_952 && $.addTopLevelView($.__views.widget_952);
    $.__views.__alloyId24674 = Ti.UI.createView({
        id: "__alloyId24674"
    });
    $.__views.widget_952.add($.__views.__alloyId24674);
    $.__views.__alloyId24675 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24675"
    });
    $.__views.__alloyId24674.add($.__views.__alloyId24675);
    $.__views.__alloyId24676 = Ti.UI.createView({
        id: "__alloyId24676"
    });
    $.__views.__alloyId24676 && $.addTopLevelView($.__views.__alloyId24676);
    $.__views.__alloyId24677 = Ti.UI.createView({
        id: "__alloyId24677"
    });
    $.__views.__alloyId24676.add($.__views.__alloyId24677);
    $.__views.__alloyId24678 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24678"
    });
    $.__views.__alloyId24677.add($.__views.__alloyId24678);
    $.__views.__alloyId24679 = Ti.UI.createView({
        id: "__alloyId24679"
    });
    $.__views.__alloyId24679 && $.addTopLevelView($.__views.__alloyId24679);
    $.__views.__alloyId24680 = Ti.UI.createView({
        id: "__alloyId24680"
    });
    $.__views.__alloyId24679.add($.__views.__alloyId24680);
    $.__views.__alloyId24681 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24681"
    });
    $.__views.__alloyId24680.add($.__views.__alloyId24681);
    $.__views.__alloyId24682 = Ti.UI.createView({
        id: "__alloyId24682"
    });
    $.__views.__alloyId24682 && $.addTopLevelView($.__views.__alloyId24682);
    $.__views.__alloyId24683 = Ti.UI.createView({
        id: "__alloyId24683"
    });
    $.__views.__alloyId24682.add($.__views.__alloyId24683);
    $.__views.__alloyId24684 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24684"
    });
    $.__views.__alloyId24683.add($.__views.__alloyId24684);
    $.__views.__alloyId24685 = Ti.UI.createView({
        id: "__alloyId24685"
    });
    $.__views.__alloyId24685 && $.addTopLevelView($.__views.__alloyId24685);
    $.__views.__alloyId24686 = Ti.UI.createView({
        id: "__alloyId24686"
    });
    $.__views.__alloyId24685.add($.__views.__alloyId24686);
    $.__views.__alloyId24687 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24687"
    });
    $.__views.__alloyId24686.add($.__views.__alloyId24687);
    $.__views.__alloyId24688 = Ti.UI.createView({
        id: "__alloyId24688"
    });
    $.__views.__alloyId24688 && $.addTopLevelView($.__views.__alloyId24688);
    $.__views.__alloyId24689 = Ti.UI.createView({
        id: "__alloyId24689"
    });
    $.__views.__alloyId24688.add($.__views.__alloyId24689);
    $.__views.__alloyId24690 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24690"
    });
    $.__views.__alloyId24689.add($.__views.__alloyId24690);
    $.__views.__alloyId24691 = Ti.UI.createView({
        id: "__alloyId24691"
    });
    $.__views.__alloyId24691 && $.addTopLevelView($.__views.__alloyId24691);
    $.__views.__alloyId24692 = Ti.UI.createView({
        id: "__alloyId24692"
    });
    $.__views.__alloyId24691.add($.__views.__alloyId24692);
    $.__views.__alloyId24693 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24693"
    });
    $.__views.__alloyId24692.add($.__views.__alloyId24693);
    $.__views.__alloyId24694 = Ti.UI.createView({
        id: "__alloyId24694"
    });
    $.__views.__alloyId24694 && $.addTopLevelView($.__views.__alloyId24694);
    $.__views.__alloyId24695 = Ti.UI.createView({
        id: "__alloyId24695"
    });
    $.__views.__alloyId24694.add($.__views.__alloyId24695);
    $.__views.__alloyId24696 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24696"
    });
    $.__views.__alloyId24695.add($.__views.__alloyId24696);
    $.__views.__alloyId24697 = Ti.UI.createView({
        id: "__alloyId24697"
    });
    $.__views.__alloyId24697 && $.addTopLevelView($.__views.__alloyId24697);
    $.__views.__alloyId24698 = Ti.UI.createView({
        id: "__alloyId24698"
    });
    $.__views.__alloyId24697.add($.__views.__alloyId24698);
    $.__views.__alloyId24699 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId24699"
    });
    $.__views.__alloyId24698.add($.__views.__alloyId24699);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;