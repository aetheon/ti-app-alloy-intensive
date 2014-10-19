function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_990";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_990 = Ti.UI.createView({
        id: "widget_990"
    });
    $.__views.widget_990 && $.addTopLevelView($.__views.widget_990);
    $.__views.__alloyId25766 = Ti.UI.createView({
        id: "__alloyId25766"
    });
    $.__views.widget_990.add($.__views.__alloyId25766);
    $.__views.__alloyId25767 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25767"
    });
    $.__views.__alloyId25766.add($.__views.__alloyId25767);
    $.__views.__alloyId25768 = Ti.UI.createView({
        id: "__alloyId25768"
    });
    $.__views.__alloyId25768 && $.addTopLevelView($.__views.__alloyId25768);
    $.__views.__alloyId25769 = Ti.UI.createView({
        id: "__alloyId25769"
    });
    $.__views.__alloyId25768.add($.__views.__alloyId25769);
    $.__views.__alloyId25770 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25770"
    });
    $.__views.__alloyId25769.add($.__views.__alloyId25770);
    $.__views.__alloyId25771 = Ti.UI.createView({
        id: "__alloyId25771"
    });
    $.__views.__alloyId25771 && $.addTopLevelView($.__views.__alloyId25771);
    $.__views.__alloyId25772 = Ti.UI.createView({
        id: "__alloyId25772"
    });
    $.__views.__alloyId25771.add($.__views.__alloyId25772);
    $.__views.__alloyId25773 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25773"
    });
    $.__views.__alloyId25772.add($.__views.__alloyId25773);
    $.__views.__alloyId25774 = Ti.UI.createView({
        id: "__alloyId25774"
    });
    $.__views.__alloyId25774 && $.addTopLevelView($.__views.__alloyId25774);
    $.__views.__alloyId25775 = Ti.UI.createView({
        id: "__alloyId25775"
    });
    $.__views.__alloyId25774.add($.__views.__alloyId25775);
    $.__views.__alloyId25776 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25776"
    });
    $.__views.__alloyId25775.add($.__views.__alloyId25776);
    $.__views.__alloyId25777 = Ti.UI.createView({
        id: "__alloyId25777"
    });
    $.__views.__alloyId25777 && $.addTopLevelView($.__views.__alloyId25777);
    $.__views.__alloyId25778 = Ti.UI.createView({
        id: "__alloyId25778"
    });
    $.__views.__alloyId25777.add($.__views.__alloyId25778);
    $.__views.__alloyId25779 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25779"
    });
    $.__views.__alloyId25778.add($.__views.__alloyId25779);
    $.__views.__alloyId25780 = Ti.UI.createView({
        id: "__alloyId25780"
    });
    $.__views.__alloyId25780 && $.addTopLevelView($.__views.__alloyId25780);
    $.__views.__alloyId25781 = Ti.UI.createView({
        id: "__alloyId25781"
    });
    $.__views.__alloyId25780.add($.__views.__alloyId25781);
    $.__views.__alloyId25782 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25782"
    });
    $.__views.__alloyId25781.add($.__views.__alloyId25782);
    $.__views.__alloyId25783 = Ti.UI.createView({
        id: "__alloyId25783"
    });
    $.__views.__alloyId25783 && $.addTopLevelView($.__views.__alloyId25783);
    $.__views.__alloyId25784 = Ti.UI.createView({
        id: "__alloyId25784"
    });
    $.__views.__alloyId25783.add($.__views.__alloyId25784);
    $.__views.__alloyId25785 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25785"
    });
    $.__views.__alloyId25784.add($.__views.__alloyId25785);
    $.__views.__alloyId25786 = Ti.UI.createView({
        id: "__alloyId25786"
    });
    $.__views.__alloyId25786 && $.addTopLevelView($.__views.__alloyId25786);
    $.__views.__alloyId25787 = Ti.UI.createView({
        id: "__alloyId25787"
    });
    $.__views.__alloyId25786.add($.__views.__alloyId25787);
    $.__views.__alloyId25788 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25788"
    });
    $.__views.__alloyId25787.add($.__views.__alloyId25788);
    $.__views.__alloyId25789 = Ti.UI.createView({
        id: "__alloyId25789"
    });
    $.__views.__alloyId25789 && $.addTopLevelView($.__views.__alloyId25789);
    $.__views.__alloyId25790 = Ti.UI.createView({
        id: "__alloyId25790"
    });
    $.__views.__alloyId25789.add($.__views.__alloyId25790);
    $.__views.__alloyId25791 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId25791"
    });
    $.__views.__alloyId25790.add($.__views.__alloyId25791);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;