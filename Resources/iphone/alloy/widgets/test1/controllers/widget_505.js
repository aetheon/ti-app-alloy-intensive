function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_505";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_505 = Ti.UI.createView({
        id: "widget_505"
    });
    $.__views.widget_505 && $.addTopLevelView($.__views.widget_505);
    $.__views.__alloyId11778 = Ti.UI.createView({
        id: "__alloyId11778"
    });
    $.__views.widget_505.add($.__views.__alloyId11778);
    $.__views.__alloyId11779 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11779"
    });
    $.__views.__alloyId11778.add($.__views.__alloyId11779);
    $.__views.__alloyId11780 = Ti.UI.createView({
        id: "__alloyId11780"
    });
    $.__views.__alloyId11780 && $.addTopLevelView($.__views.__alloyId11780);
    $.__views.__alloyId11781 = Ti.UI.createView({
        id: "__alloyId11781"
    });
    $.__views.__alloyId11780.add($.__views.__alloyId11781);
    $.__views.__alloyId11782 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11782"
    });
    $.__views.__alloyId11781.add($.__views.__alloyId11782);
    $.__views.__alloyId11783 = Ti.UI.createView({
        id: "__alloyId11783"
    });
    $.__views.__alloyId11783 && $.addTopLevelView($.__views.__alloyId11783);
    $.__views.__alloyId11784 = Ti.UI.createView({
        id: "__alloyId11784"
    });
    $.__views.__alloyId11783.add($.__views.__alloyId11784);
    $.__views.__alloyId11785 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11785"
    });
    $.__views.__alloyId11784.add($.__views.__alloyId11785);
    $.__views.__alloyId11786 = Ti.UI.createView({
        id: "__alloyId11786"
    });
    $.__views.__alloyId11786 && $.addTopLevelView($.__views.__alloyId11786);
    $.__views.__alloyId11787 = Ti.UI.createView({
        id: "__alloyId11787"
    });
    $.__views.__alloyId11786.add($.__views.__alloyId11787);
    $.__views.__alloyId11788 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11788"
    });
    $.__views.__alloyId11787.add($.__views.__alloyId11788);
    $.__views.__alloyId11789 = Ti.UI.createView({
        id: "__alloyId11789"
    });
    $.__views.__alloyId11789 && $.addTopLevelView($.__views.__alloyId11789);
    $.__views.__alloyId11790 = Ti.UI.createView({
        id: "__alloyId11790"
    });
    $.__views.__alloyId11789.add($.__views.__alloyId11790);
    $.__views.__alloyId11791 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11791"
    });
    $.__views.__alloyId11790.add($.__views.__alloyId11791);
    $.__views.__alloyId11792 = Ti.UI.createView({
        id: "__alloyId11792"
    });
    $.__views.__alloyId11792 && $.addTopLevelView($.__views.__alloyId11792);
    $.__views.__alloyId11793 = Ti.UI.createView({
        id: "__alloyId11793"
    });
    $.__views.__alloyId11792.add($.__views.__alloyId11793);
    $.__views.__alloyId11794 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11794"
    });
    $.__views.__alloyId11793.add($.__views.__alloyId11794);
    $.__views.__alloyId11795 = Ti.UI.createView({
        id: "__alloyId11795"
    });
    $.__views.__alloyId11795 && $.addTopLevelView($.__views.__alloyId11795);
    $.__views.__alloyId11796 = Ti.UI.createView({
        id: "__alloyId11796"
    });
    $.__views.__alloyId11795.add($.__views.__alloyId11796);
    $.__views.__alloyId11797 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11797"
    });
    $.__views.__alloyId11796.add($.__views.__alloyId11797);
    $.__views.__alloyId11798 = Ti.UI.createView({
        id: "__alloyId11798"
    });
    $.__views.__alloyId11798 && $.addTopLevelView($.__views.__alloyId11798);
    $.__views.__alloyId11799 = Ti.UI.createView({
        id: "__alloyId11799"
    });
    $.__views.__alloyId11798.add($.__views.__alloyId11799);
    $.__views.__alloyId11800 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11800"
    });
    $.__views.__alloyId11799.add($.__views.__alloyId11800);
    $.__views.__alloyId11801 = Ti.UI.createView({
        id: "__alloyId11801"
    });
    $.__views.__alloyId11801 && $.addTopLevelView($.__views.__alloyId11801);
    $.__views.__alloyId11802 = Ti.UI.createView({
        id: "__alloyId11802"
    });
    $.__views.__alloyId11801.add($.__views.__alloyId11802);
    $.__views.__alloyId11803 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId11803"
    });
    $.__views.__alloyId11802.add($.__views.__alloyId11803);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;