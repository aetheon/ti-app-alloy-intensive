function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_298";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_298 = Ti.UI.createView({
        id: "widget_298"
    });
    $.__views.widget_298 && $.addTopLevelView($.__views.widget_298);
    $.__views.__alloyId5772 = Ti.UI.createView({
        id: "__alloyId5772"
    });
    $.__views.widget_298.add($.__views.__alloyId5772);
    $.__views.__alloyId5773 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5773"
    });
    $.__views.__alloyId5772.add($.__views.__alloyId5773);
    $.__views.__alloyId5774 = Ti.UI.createView({
        id: "__alloyId5774"
    });
    $.__views.__alloyId5774 && $.addTopLevelView($.__views.__alloyId5774);
    $.__views.__alloyId5775 = Ti.UI.createView({
        id: "__alloyId5775"
    });
    $.__views.__alloyId5774.add($.__views.__alloyId5775);
    $.__views.__alloyId5776 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5776"
    });
    $.__views.__alloyId5775.add($.__views.__alloyId5776);
    $.__views.__alloyId5777 = Ti.UI.createView({
        id: "__alloyId5777"
    });
    $.__views.__alloyId5777 && $.addTopLevelView($.__views.__alloyId5777);
    $.__views.__alloyId5778 = Ti.UI.createView({
        id: "__alloyId5778"
    });
    $.__views.__alloyId5777.add($.__views.__alloyId5778);
    $.__views.__alloyId5779 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5779"
    });
    $.__views.__alloyId5778.add($.__views.__alloyId5779);
    $.__views.__alloyId5780 = Ti.UI.createView({
        id: "__alloyId5780"
    });
    $.__views.__alloyId5780 && $.addTopLevelView($.__views.__alloyId5780);
    $.__views.__alloyId5781 = Ti.UI.createView({
        id: "__alloyId5781"
    });
    $.__views.__alloyId5780.add($.__views.__alloyId5781);
    $.__views.__alloyId5782 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5782"
    });
    $.__views.__alloyId5781.add($.__views.__alloyId5782);
    $.__views.__alloyId5783 = Ti.UI.createView({
        id: "__alloyId5783"
    });
    $.__views.__alloyId5783 && $.addTopLevelView($.__views.__alloyId5783);
    $.__views.__alloyId5784 = Ti.UI.createView({
        id: "__alloyId5784"
    });
    $.__views.__alloyId5783.add($.__views.__alloyId5784);
    $.__views.__alloyId5785 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5785"
    });
    $.__views.__alloyId5784.add($.__views.__alloyId5785);
    $.__views.__alloyId5786 = Ti.UI.createView({
        id: "__alloyId5786"
    });
    $.__views.__alloyId5786 && $.addTopLevelView($.__views.__alloyId5786);
    $.__views.__alloyId5787 = Ti.UI.createView({
        id: "__alloyId5787"
    });
    $.__views.__alloyId5786.add($.__views.__alloyId5787);
    $.__views.__alloyId5788 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5788"
    });
    $.__views.__alloyId5787.add($.__views.__alloyId5788);
    $.__views.__alloyId5789 = Ti.UI.createView({
        id: "__alloyId5789"
    });
    $.__views.__alloyId5789 && $.addTopLevelView($.__views.__alloyId5789);
    $.__views.__alloyId5790 = Ti.UI.createView({
        id: "__alloyId5790"
    });
    $.__views.__alloyId5789.add($.__views.__alloyId5790);
    $.__views.__alloyId5791 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5791"
    });
    $.__views.__alloyId5790.add($.__views.__alloyId5791);
    $.__views.__alloyId5792 = Ti.UI.createView({
        id: "__alloyId5792"
    });
    $.__views.__alloyId5792 && $.addTopLevelView($.__views.__alloyId5792);
    $.__views.__alloyId5793 = Ti.UI.createView({
        id: "__alloyId5793"
    });
    $.__views.__alloyId5792.add($.__views.__alloyId5793);
    $.__views.__alloyId5794 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5794"
    });
    $.__views.__alloyId5793.add($.__views.__alloyId5794);
    $.__views.__alloyId5795 = Ti.UI.createView({
        id: "__alloyId5795"
    });
    $.__views.__alloyId5795 && $.addTopLevelView($.__views.__alloyId5795);
    $.__views.__alloyId5796 = Ti.UI.createView({
        id: "__alloyId5796"
    });
    $.__views.__alloyId5795.add($.__views.__alloyId5796);
    $.__views.__alloyId5797 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId5797"
    });
    $.__views.__alloyId5796.add($.__views.__alloyId5797);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;