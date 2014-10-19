function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_263";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_263 = Ti.UI.createView({
        id: "widget_263"
    });
    $.__views.widget_263 && $.addTopLevelView($.__views.widget_263);
    $.__views.__alloyId4784 = Ti.UI.createView({
        id: "__alloyId4784"
    });
    $.__views.widget_263.add($.__views.__alloyId4784);
    $.__views.__alloyId4785 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4785"
    });
    $.__views.__alloyId4784.add($.__views.__alloyId4785);
    $.__views.__alloyId4786 = Ti.UI.createView({
        id: "__alloyId4786"
    });
    $.__views.__alloyId4786 && $.addTopLevelView($.__views.__alloyId4786);
    $.__views.__alloyId4787 = Ti.UI.createView({
        id: "__alloyId4787"
    });
    $.__views.__alloyId4786.add($.__views.__alloyId4787);
    $.__views.__alloyId4788 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4788"
    });
    $.__views.__alloyId4787.add($.__views.__alloyId4788);
    $.__views.__alloyId4789 = Ti.UI.createView({
        id: "__alloyId4789"
    });
    $.__views.__alloyId4789 && $.addTopLevelView($.__views.__alloyId4789);
    $.__views.__alloyId4790 = Ti.UI.createView({
        id: "__alloyId4790"
    });
    $.__views.__alloyId4789.add($.__views.__alloyId4790);
    $.__views.__alloyId4791 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4791"
    });
    $.__views.__alloyId4790.add($.__views.__alloyId4791);
    $.__views.__alloyId4792 = Ti.UI.createView({
        id: "__alloyId4792"
    });
    $.__views.__alloyId4792 && $.addTopLevelView($.__views.__alloyId4792);
    $.__views.__alloyId4793 = Ti.UI.createView({
        id: "__alloyId4793"
    });
    $.__views.__alloyId4792.add($.__views.__alloyId4793);
    $.__views.__alloyId4794 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4794"
    });
    $.__views.__alloyId4793.add($.__views.__alloyId4794);
    $.__views.__alloyId4795 = Ti.UI.createView({
        id: "__alloyId4795"
    });
    $.__views.__alloyId4795 && $.addTopLevelView($.__views.__alloyId4795);
    $.__views.__alloyId4796 = Ti.UI.createView({
        id: "__alloyId4796"
    });
    $.__views.__alloyId4795.add($.__views.__alloyId4796);
    $.__views.__alloyId4797 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4797"
    });
    $.__views.__alloyId4796.add($.__views.__alloyId4797);
    $.__views.__alloyId4798 = Ti.UI.createView({
        id: "__alloyId4798"
    });
    $.__views.__alloyId4798 && $.addTopLevelView($.__views.__alloyId4798);
    $.__views.__alloyId4799 = Ti.UI.createView({
        id: "__alloyId4799"
    });
    $.__views.__alloyId4798.add($.__views.__alloyId4799);
    $.__views.__alloyId4800 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4800"
    });
    $.__views.__alloyId4799.add($.__views.__alloyId4800);
    $.__views.__alloyId4801 = Ti.UI.createView({
        id: "__alloyId4801"
    });
    $.__views.__alloyId4801 && $.addTopLevelView($.__views.__alloyId4801);
    $.__views.__alloyId4802 = Ti.UI.createView({
        id: "__alloyId4802"
    });
    $.__views.__alloyId4801.add($.__views.__alloyId4802);
    $.__views.__alloyId4803 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4803"
    });
    $.__views.__alloyId4802.add($.__views.__alloyId4803);
    $.__views.__alloyId4804 = Ti.UI.createView({
        id: "__alloyId4804"
    });
    $.__views.__alloyId4804 && $.addTopLevelView($.__views.__alloyId4804);
    $.__views.__alloyId4805 = Ti.UI.createView({
        id: "__alloyId4805"
    });
    $.__views.__alloyId4804.add($.__views.__alloyId4805);
    $.__views.__alloyId4806 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4806"
    });
    $.__views.__alloyId4805.add($.__views.__alloyId4806);
    $.__views.__alloyId4807 = Ti.UI.createView({
        id: "__alloyId4807"
    });
    $.__views.__alloyId4807 && $.addTopLevelView($.__views.__alloyId4807);
    $.__views.__alloyId4808 = Ti.UI.createView({
        id: "__alloyId4808"
    });
    $.__views.__alloyId4807.add($.__views.__alloyId4808);
    $.__views.__alloyId4809 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId4809"
    });
    $.__views.__alloyId4808.add($.__views.__alloyId4809);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;