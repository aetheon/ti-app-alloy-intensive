function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_748";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_748 = Ti.UI.createView({
        id: "widget_748"
    });
    $.__views.widget_748 && $.addTopLevelView($.__views.widget_748);
    $.__views.__alloyId18772 = Ti.UI.createView({
        id: "__alloyId18772"
    });
    $.__views.widget_748.add($.__views.__alloyId18772);
    $.__views.__alloyId18773 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18773"
    });
    $.__views.__alloyId18772.add($.__views.__alloyId18773);
    $.__views.__alloyId18774 = Ti.UI.createView({
        id: "__alloyId18774"
    });
    $.__views.__alloyId18774 && $.addTopLevelView($.__views.__alloyId18774);
    $.__views.__alloyId18775 = Ti.UI.createView({
        id: "__alloyId18775"
    });
    $.__views.__alloyId18774.add($.__views.__alloyId18775);
    $.__views.__alloyId18776 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18776"
    });
    $.__views.__alloyId18775.add($.__views.__alloyId18776);
    $.__views.__alloyId18777 = Ti.UI.createView({
        id: "__alloyId18777"
    });
    $.__views.__alloyId18777 && $.addTopLevelView($.__views.__alloyId18777);
    $.__views.__alloyId18778 = Ti.UI.createView({
        id: "__alloyId18778"
    });
    $.__views.__alloyId18777.add($.__views.__alloyId18778);
    $.__views.__alloyId18779 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18779"
    });
    $.__views.__alloyId18778.add($.__views.__alloyId18779);
    $.__views.__alloyId18780 = Ti.UI.createView({
        id: "__alloyId18780"
    });
    $.__views.__alloyId18780 && $.addTopLevelView($.__views.__alloyId18780);
    $.__views.__alloyId18781 = Ti.UI.createView({
        id: "__alloyId18781"
    });
    $.__views.__alloyId18780.add($.__views.__alloyId18781);
    $.__views.__alloyId18782 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18782"
    });
    $.__views.__alloyId18781.add($.__views.__alloyId18782);
    $.__views.__alloyId18783 = Ti.UI.createView({
        id: "__alloyId18783"
    });
    $.__views.__alloyId18783 && $.addTopLevelView($.__views.__alloyId18783);
    $.__views.__alloyId18784 = Ti.UI.createView({
        id: "__alloyId18784"
    });
    $.__views.__alloyId18783.add($.__views.__alloyId18784);
    $.__views.__alloyId18785 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18785"
    });
    $.__views.__alloyId18784.add($.__views.__alloyId18785);
    $.__views.__alloyId18786 = Ti.UI.createView({
        id: "__alloyId18786"
    });
    $.__views.__alloyId18786 && $.addTopLevelView($.__views.__alloyId18786);
    $.__views.__alloyId18787 = Ti.UI.createView({
        id: "__alloyId18787"
    });
    $.__views.__alloyId18786.add($.__views.__alloyId18787);
    $.__views.__alloyId18788 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18788"
    });
    $.__views.__alloyId18787.add($.__views.__alloyId18788);
    $.__views.__alloyId18789 = Ti.UI.createView({
        id: "__alloyId18789"
    });
    $.__views.__alloyId18789 && $.addTopLevelView($.__views.__alloyId18789);
    $.__views.__alloyId18790 = Ti.UI.createView({
        id: "__alloyId18790"
    });
    $.__views.__alloyId18789.add($.__views.__alloyId18790);
    $.__views.__alloyId18791 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18791"
    });
    $.__views.__alloyId18790.add($.__views.__alloyId18791);
    $.__views.__alloyId18792 = Ti.UI.createView({
        id: "__alloyId18792"
    });
    $.__views.__alloyId18792 && $.addTopLevelView($.__views.__alloyId18792);
    $.__views.__alloyId18793 = Ti.UI.createView({
        id: "__alloyId18793"
    });
    $.__views.__alloyId18792.add($.__views.__alloyId18793);
    $.__views.__alloyId18794 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18794"
    });
    $.__views.__alloyId18793.add($.__views.__alloyId18794);
    $.__views.__alloyId18795 = Ti.UI.createView({
        id: "__alloyId18795"
    });
    $.__views.__alloyId18795 && $.addTopLevelView($.__views.__alloyId18795);
    $.__views.__alloyId18796 = Ti.UI.createView({
        id: "__alloyId18796"
    });
    $.__views.__alloyId18795.add($.__views.__alloyId18796);
    $.__views.__alloyId18797 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId18797"
    });
    $.__views.__alloyId18796.add($.__views.__alloyId18797);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;