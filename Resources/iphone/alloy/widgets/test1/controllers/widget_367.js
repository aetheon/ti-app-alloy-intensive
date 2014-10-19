function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_367";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_367 = Ti.UI.createView({
        id: "widget_367"
    });
    $.__views.widget_367 && $.addTopLevelView($.__views.widget_367);
    $.__views.__alloyId7774 = Ti.UI.createView({
        id: "__alloyId7774"
    });
    $.__views.widget_367.add($.__views.__alloyId7774);
    $.__views.__alloyId7775 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7775"
    });
    $.__views.__alloyId7774.add($.__views.__alloyId7775);
    $.__views.__alloyId7776 = Ti.UI.createView({
        id: "__alloyId7776"
    });
    $.__views.__alloyId7776 && $.addTopLevelView($.__views.__alloyId7776);
    $.__views.__alloyId7777 = Ti.UI.createView({
        id: "__alloyId7777"
    });
    $.__views.__alloyId7776.add($.__views.__alloyId7777);
    $.__views.__alloyId7778 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7778"
    });
    $.__views.__alloyId7777.add($.__views.__alloyId7778);
    $.__views.__alloyId7779 = Ti.UI.createView({
        id: "__alloyId7779"
    });
    $.__views.__alloyId7779 && $.addTopLevelView($.__views.__alloyId7779);
    $.__views.__alloyId7780 = Ti.UI.createView({
        id: "__alloyId7780"
    });
    $.__views.__alloyId7779.add($.__views.__alloyId7780);
    $.__views.__alloyId7781 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7781"
    });
    $.__views.__alloyId7780.add($.__views.__alloyId7781);
    $.__views.__alloyId7782 = Ti.UI.createView({
        id: "__alloyId7782"
    });
    $.__views.__alloyId7782 && $.addTopLevelView($.__views.__alloyId7782);
    $.__views.__alloyId7783 = Ti.UI.createView({
        id: "__alloyId7783"
    });
    $.__views.__alloyId7782.add($.__views.__alloyId7783);
    $.__views.__alloyId7784 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7784"
    });
    $.__views.__alloyId7783.add($.__views.__alloyId7784);
    $.__views.__alloyId7785 = Ti.UI.createView({
        id: "__alloyId7785"
    });
    $.__views.__alloyId7785 && $.addTopLevelView($.__views.__alloyId7785);
    $.__views.__alloyId7786 = Ti.UI.createView({
        id: "__alloyId7786"
    });
    $.__views.__alloyId7785.add($.__views.__alloyId7786);
    $.__views.__alloyId7787 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7787"
    });
    $.__views.__alloyId7786.add($.__views.__alloyId7787);
    $.__views.__alloyId7788 = Ti.UI.createView({
        id: "__alloyId7788"
    });
    $.__views.__alloyId7788 && $.addTopLevelView($.__views.__alloyId7788);
    $.__views.__alloyId7789 = Ti.UI.createView({
        id: "__alloyId7789"
    });
    $.__views.__alloyId7788.add($.__views.__alloyId7789);
    $.__views.__alloyId7790 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7790"
    });
    $.__views.__alloyId7789.add($.__views.__alloyId7790);
    $.__views.__alloyId7791 = Ti.UI.createView({
        id: "__alloyId7791"
    });
    $.__views.__alloyId7791 && $.addTopLevelView($.__views.__alloyId7791);
    $.__views.__alloyId7792 = Ti.UI.createView({
        id: "__alloyId7792"
    });
    $.__views.__alloyId7791.add($.__views.__alloyId7792);
    $.__views.__alloyId7793 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7793"
    });
    $.__views.__alloyId7792.add($.__views.__alloyId7793);
    $.__views.__alloyId7794 = Ti.UI.createView({
        id: "__alloyId7794"
    });
    $.__views.__alloyId7794 && $.addTopLevelView($.__views.__alloyId7794);
    $.__views.__alloyId7795 = Ti.UI.createView({
        id: "__alloyId7795"
    });
    $.__views.__alloyId7794.add($.__views.__alloyId7795);
    $.__views.__alloyId7796 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7796"
    });
    $.__views.__alloyId7795.add($.__views.__alloyId7796);
    $.__views.__alloyId7797 = Ti.UI.createView({
        id: "__alloyId7797"
    });
    $.__views.__alloyId7797 && $.addTopLevelView($.__views.__alloyId7797);
    $.__views.__alloyId7798 = Ti.UI.createView({
        id: "__alloyId7798"
    });
    $.__views.__alloyId7797.add($.__views.__alloyId7798);
    $.__views.__alloyId7799 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId7799"
    });
    $.__views.__alloyId7798.add($.__views.__alloyId7799);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;