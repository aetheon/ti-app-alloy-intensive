function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_575";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_575 = Ti.UI.createView({
        id: "widget_575"
    });
    $.__views.widget_575 && $.addTopLevelView($.__views.widget_575);
    $.__views.__alloyId13780 = Ti.UI.createView({
        id: "__alloyId13780"
    });
    $.__views.widget_575.add($.__views.__alloyId13780);
    $.__views.__alloyId13781 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13781"
    });
    $.__views.__alloyId13780.add($.__views.__alloyId13781);
    $.__views.__alloyId13782 = Ti.UI.createView({
        id: "__alloyId13782"
    });
    $.__views.__alloyId13782 && $.addTopLevelView($.__views.__alloyId13782);
    $.__views.__alloyId13783 = Ti.UI.createView({
        id: "__alloyId13783"
    });
    $.__views.__alloyId13782.add($.__views.__alloyId13783);
    $.__views.__alloyId13784 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13784"
    });
    $.__views.__alloyId13783.add($.__views.__alloyId13784);
    $.__views.__alloyId13785 = Ti.UI.createView({
        id: "__alloyId13785"
    });
    $.__views.__alloyId13785 && $.addTopLevelView($.__views.__alloyId13785);
    $.__views.__alloyId13786 = Ti.UI.createView({
        id: "__alloyId13786"
    });
    $.__views.__alloyId13785.add($.__views.__alloyId13786);
    $.__views.__alloyId13787 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13787"
    });
    $.__views.__alloyId13786.add($.__views.__alloyId13787);
    $.__views.__alloyId13788 = Ti.UI.createView({
        id: "__alloyId13788"
    });
    $.__views.__alloyId13788 && $.addTopLevelView($.__views.__alloyId13788);
    $.__views.__alloyId13789 = Ti.UI.createView({
        id: "__alloyId13789"
    });
    $.__views.__alloyId13788.add($.__views.__alloyId13789);
    $.__views.__alloyId13790 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13790"
    });
    $.__views.__alloyId13789.add($.__views.__alloyId13790);
    $.__views.__alloyId13791 = Ti.UI.createView({
        id: "__alloyId13791"
    });
    $.__views.__alloyId13791 && $.addTopLevelView($.__views.__alloyId13791);
    $.__views.__alloyId13792 = Ti.UI.createView({
        id: "__alloyId13792"
    });
    $.__views.__alloyId13791.add($.__views.__alloyId13792);
    $.__views.__alloyId13793 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13793"
    });
    $.__views.__alloyId13792.add($.__views.__alloyId13793);
    $.__views.__alloyId13794 = Ti.UI.createView({
        id: "__alloyId13794"
    });
    $.__views.__alloyId13794 && $.addTopLevelView($.__views.__alloyId13794);
    $.__views.__alloyId13795 = Ti.UI.createView({
        id: "__alloyId13795"
    });
    $.__views.__alloyId13794.add($.__views.__alloyId13795);
    $.__views.__alloyId13796 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13796"
    });
    $.__views.__alloyId13795.add($.__views.__alloyId13796);
    $.__views.__alloyId13797 = Ti.UI.createView({
        id: "__alloyId13797"
    });
    $.__views.__alloyId13797 && $.addTopLevelView($.__views.__alloyId13797);
    $.__views.__alloyId13798 = Ti.UI.createView({
        id: "__alloyId13798"
    });
    $.__views.__alloyId13797.add($.__views.__alloyId13798);
    $.__views.__alloyId13799 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13799"
    });
    $.__views.__alloyId13798.add($.__views.__alloyId13799);
    $.__views.__alloyId13800 = Ti.UI.createView({
        id: "__alloyId13800"
    });
    $.__views.__alloyId13800 && $.addTopLevelView($.__views.__alloyId13800);
    $.__views.__alloyId13801 = Ti.UI.createView({
        id: "__alloyId13801"
    });
    $.__views.__alloyId13800.add($.__views.__alloyId13801);
    $.__views.__alloyId13802 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13802"
    });
    $.__views.__alloyId13801.add($.__views.__alloyId13802);
    $.__views.__alloyId13803 = Ti.UI.createView({
        id: "__alloyId13803"
    });
    $.__views.__alloyId13803 && $.addTopLevelView($.__views.__alloyId13803);
    $.__views.__alloyId13804 = Ti.UI.createView({
        id: "__alloyId13804"
    });
    $.__views.__alloyId13803.add($.__views.__alloyId13804);
    $.__views.__alloyId13805 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId13805"
    });
    $.__views.__alloyId13804.add($.__views.__alloyId13805);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;