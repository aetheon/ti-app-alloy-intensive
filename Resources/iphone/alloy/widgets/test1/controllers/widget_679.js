function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_679";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_679 = Ti.UI.createView({
        id: "widget_679"
    });
    $.__views.widget_679 && $.addTopLevelView($.__views.widget_679);
    $.__views.__alloyId16770 = Ti.UI.createView({
        id: "__alloyId16770"
    });
    $.__views.widget_679.add($.__views.__alloyId16770);
    $.__views.__alloyId16771 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16771"
    });
    $.__views.__alloyId16770.add($.__views.__alloyId16771);
    $.__views.__alloyId16772 = Ti.UI.createView({
        id: "__alloyId16772"
    });
    $.__views.__alloyId16772 && $.addTopLevelView($.__views.__alloyId16772);
    $.__views.__alloyId16773 = Ti.UI.createView({
        id: "__alloyId16773"
    });
    $.__views.__alloyId16772.add($.__views.__alloyId16773);
    $.__views.__alloyId16774 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16774"
    });
    $.__views.__alloyId16773.add($.__views.__alloyId16774);
    $.__views.__alloyId16775 = Ti.UI.createView({
        id: "__alloyId16775"
    });
    $.__views.__alloyId16775 && $.addTopLevelView($.__views.__alloyId16775);
    $.__views.__alloyId16776 = Ti.UI.createView({
        id: "__alloyId16776"
    });
    $.__views.__alloyId16775.add($.__views.__alloyId16776);
    $.__views.__alloyId16777 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16777"
    });
    $.__views.__alloyId16776.add($.__views.__alloyId16777);
    $.__views.__alloyId16778 = Ti.UI.createView({
        id: "__alloyId16778"
    });
    $.__views.__alloyId16778 && $.addTopLevelView($.__views.__alloyId16778);
    $.__views.__alloyId16779 = Ti.UI.createView({
        id: "__alloyId16779"
    });
    $.__views.__alloyId16778.add($.__views.__alloyId16779);
    $.__views.__alloyId16780 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16780"
    });
    $.__views.__alloyId16779.add($.__views.__alloyId16780);
    $.__views.__alloyId16781 = Ti.UI.createView({
        id: "__alloyId16781"
    });
    $.__views.__alloyId16781 && $.addTopLevelView($.__views.__alloyId16781);
    $.__views.__alloyId16782 = Ti.UI.createView({
        id: "__alloyId16782"
    });
    $.__views.__alloyId16781.add($.__views.__alloyId16782);
    $.__views.__alloyId16783 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16783"
    });
    $.__views.__alloyId16782.add($.__views.__alloyId16783);
    $.__views.__alloyId16784 = Ti.UI.createView({
        id: "__alloyId16784"
    });
    $.__views.__alloyId16784 && $.addTopLevelView($.__views.__alloyId16784);
    $.__views.__alloyId16785 = Ti.UI.createView({
        id: "__alloyId16785"
    });
    $.__views.__alloyId16784.add($.__views.__alloyId16785);
    $.__views.__alloyId16786 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16786"
    });
    $.__views.__alloyId16785.add($.__views.__alloyId16786);
    $.__views.__alloyId16787 = Ti.UI.createView({
        id: "__alloyId16787"
    });
    $.__views.__alloyId16787 && $.addTopLevelView($.__views.__alloyId16787);
    $.__views.__alloyId16788 = Ti.UI.createView({
        id: "__alloyId16788"
    });
    $.__views.__alloyId16787.add($.__views.__alloyId16788);
    $.__views.__alloyId16789 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16789"
    });
    $.__views.__alloyId16788.add($.__views.__alloyId16789);
    $.__views.__alloyId16790 = Ti.UI.createView({
        id: "__alloyId16790"
    });
    $.__views.__alloyId16790 && $.addTopLevelView($.__views.__alloyId16790);
    $.__views.__alloyId16791 = Ti.UI.createView({
        id: "__alloyId16791"
    });
    $.__views.__alloyId16790.add($.__views.__alloyId16791);
    $.__views.__alloyId16792 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16792"
    });
    $.__views.__alloyId16791.add($.__views.__alloyId16792);
    $.__views.__alloyId16793 = Ti.UI.createView({
        id: "__alloyId16793"
    });
    $.__views.__alloyId16793 && $.addTopLevelView($.__views.__alloyId16793);
    $.__views.__alloyId16794 = Ti.UI.createView({
        id: "__alloyId16794"
    });
    $.__views.__alloyId16793.add($.__views.__alloyId16794);
    $.__views.__alloyId16795 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId16795"
    });
    $.__views.__alloyId16794.add($.__views.__alloyId16795);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;