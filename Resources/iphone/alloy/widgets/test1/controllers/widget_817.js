function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_817";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_817 = Ti.UI.createView({
        id: "widget_817"
    });
    $.__views.widget_817 && $.addTopLevelView($.__views.widget_817);
    $.__views.__alloyId20774 = Ti.UI.createView({
        id: "__alloyId20774"
    });
    $.__views.widget_817.add($.__views.__alloyId20774);
    $.__views.__alloyId20775 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20775"
    });
    $.__views.__alloyId20774.add($.__views.__alloyId20775);
    $.__views.__alloyId20776 = Ti.UI.createView({
        id: "__alloyId20776"
    });
    $.__views.__alloyId20776 && $.addTopLevelView($.__views.__alloyId20776);
    $.__views.__alloyId20777 = Ti.UI.createView({
        id: "__alloyId20777"
    });
    $.__views.__alloyId20776.add($.__views.__alloyId20777);
    $.__views.__alloyId20778 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20778"
    });
    $.__views.__alloyId20777.add($.__views.__alloyId20778);
    $.__views.__alloyId20779 = Ti.UI.createView({
        id: "__alloyId20779"
    });
    $.__views.__alloyId20779 && $.addTopLevelView($.__views.__alloyId20779);
    $.__views.__alloyId20780 = Ti.UI.createView({
        id: "__alloyId20780"
    });
    $.__views.__alloyId20779.add($.__views.__alloyId20780);
    $.__views.__alloyId20781 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20781"
    });
    $.__views.__alloyId20780.add($.__views.__alloyId20781);
    $.__views.__alloyId20782 = Ti.UI.createView({
        id: "__alloyId20782"
    });
    $.__views.__alloyId20782 && $.addTopLevelView($.__views.__alloyId20782);
    $.__views.__alloyId20783 = Ti.UI.createView({
        id: "__alloyId20783"
    });
    $.__views.__alloyId20782.add($.__views.__alloyId20783);
    $.__views.__alloyId20784 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20784"
    });
    $.__views.__alloyId20783.add($.__views.__alloyId20784);
    $.__views.__alloyId20785 = Ti.UI.createView({
        id: "__alloyId20785"
    });
    $.__views.__alloyId20785 && $.addTopLevelView($.__views.__alloyId20785);
    $.__views.__alloyId20786 = Ti.UI.createView({
        id: "__alloyId20786"
    });
    $.__views.__alloyId20785.add($.__views.__alloyId20786);
    $.__views.__alloyId20787 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20787"
    });
    $.__views.__alloyId20786.add($.__views.__alloyId20787);
    $.__views.__alloyId20788 = Ti.UI.createView({
        id: "__alloyId20788"
    });
    $.__views.__alloyId20788 && $.addTopLevelView($.__views.__alloyId20788);
    $.__views.__alloyId20789 = Ti.UI.createView({
        id: "__alloyId20789"
    });
    $.__views.__alloyId20788.add($.__views.__alloyId20789);
    $.__views.__alloyId20790 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20790"
    });
    $.__views.__alloyId20789.add($.__views.__alloyId20790);
    $.__views.__alloyId20791 = Ti.UI.createView({
        id: "__alloyId20791"
    });
    $.__views.__alloyId20791 && $.addTopLevelView($.__views.__alloyId20791);
    $.__views.__alloyId20792 = Ti.UI.createView({
        id: "__alloyId20792"
    });
    $.__views.__alloyId20791.add($.__views.__alloyId20792);
    $.__views.__alloyId20793 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20793"
    });
    $.__views.__alloyId20792.add($.__views.__alloyId20793);
    $.__views.__alloyId20794 = Ti.UI.createView({
        id: "__alloyId20794"
    });
    $.__views.__alloyId20794 && $.addTopLevelView($.__views.__alloyId20794);
    $.__views.__alloyId20795 = Ti.UI.createView({
        id: "__alloyId20795"
    });
    $.__views.__alloyId20794.add($.__views.__alloyId20795);
    $.__views.__alloyId20796 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20796"
    });
    $.__views.__alloyId20795.add($.__views.__alloyId20796);
    $.__views.__alloyId20797 = Ti.UI.createView({
        id: "__alloyId20797"
    });
    $.__views.__alloyId20797 && $.addTopLevelView($.__views.__alloyId20797);
    $.__views.__alloyId20798 = Ti.UI.createView({
        id: "__alloyId20798"
    });
    $.__views.__alloyId20797.add($.__views.__alloyId20798);
    $.__views.__alloyId20799 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId20799"
    });
    $.__views.__alloyId20798.add($.__views.__alloyId20799);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;