function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_436";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_436 = Ti.UI.createView({
        id: "widget_436"
    });
    $.__views.widget_436 && $.addTopLevelView($.__views.widget_436);
    $.__views.__alloyId9776 = Ti.UI.createView({
        id: "__alloyId9776"
    });
    $.__views.widget_436.add($.__views.__alloyId9776);
    $.__views.__alloyId9777 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9777"
    });
    $.__views.__alloyId9776.add($.__views.__alloyId9777);
    $.__views.__alloyId9778 = Ti.UI.createView({
        id: "__alloyId9778"
    });
    $.__views.__alloyId9778 && $.addTopLevelView($.__views.__alloyId9778);
    $.__views.__alloyId9779 = Ti.UI.createView({
        id: "__alloyId9779"
    });
    $.__views.__alloyId9778.add($.__views.__alloyId9779);
    $.__views.__alloyId9780 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9780"
    });
    $.__views.__alloyId9779.add($.__views.__alloyId9780);
    $.__views.__alloyId9781 = Ti.UI.createView({
        id: "__alloyId9781"
    });
    $.__views.__alloyId9781 && $.addTopLevelView($.__views.__alloyId9781);
    $.__views.__alloyId9782 = Ti.UI.createView({
        id: "__alloyId9782"
    });
    $.__views.__alloyId9781.add($.__views.__alloyId9782);
    $.__views.__alloyId9783 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9783"
    });
    $.__views.__alloyId9782.add($.__views.__alloyId9783);
    $.__views.__alloyId9784 = Ti.UI.createView({
        id: "__alloyId9784"
    });
    $.__views.__alloyId9784 && $.addTopLevelView($.__views.__alloyId9784);
    $.__views.__alloyId9785 = Ti.UI.createView({
        id: "__alloyId9785"
    });
    $.__views.__alloyId9784.add($.__views.__alloyId9785);
    $.__views.__alloyId9786 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9786"
    });
    $.__views.__alloyId9785.add($.__views.__alloyId9786);
    $.__views.__alloyId9787 = Ti.UI.createView({
        id: "__alloyId9787"
    });
    $.__views.__alloyId9787 && $.addTopLevelView($.__views.__alloyId9787);
    $.__views.__alloyId9788 = Ti.UI.createView({
        id: "__alloyId9788"
    });
    $.__views.__alloyId9787.add($.__views.__alloyId9788);
    $.__views.__alloyId9789 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9789"
    });
    $.__views.__alloyId9788.add($.__views.__alloyId9789);
    $.__views.__alloyId9790 = Ti.UI.createView({
        id: "__alloyId9790"
    });
    $.__views.__alloyId9790 && $.addTopLevelView($.__views.__alloyId9790);
    $.__views.__alloyId9791 = Ti.UI.createView({
        id: "__alloyId9791"
    });
    $.__views.__alloyId9790.add($.__views.__alloyId9791);
    $.__views.__alloyId9792 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9792"
    });
    $.__views.__alloyId9791.add($.__views.__alloyId9792);
    $.__views.__alloyId9793 = Ti.UI.createView({
        id: "__alloyId9793"
    });
    $.__views.__alloyId9793 && $.addTopLevelView($.__views.__alloyId9793);
    $.__views.__alloyId9794 = Ti.UI.createView({
        id: "__alloyId9794"
    });
    $.__views.__alloyId9793.add($.__views.__alloyId9794);
    $.__views.__alloyId9795 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9795"
    });
    $.__views.__alloyId9794.add($.__views.__alloyId9795);
    $.__views.__alloyId9796 = Ti.UI.createView({
        id: "__alloyId9796"
    });
    $.__views.__alloyId9796 && $.addTopLevelView($.__views.__alloyId9796);
    $.__views.__alloyId9797 = Ti.UI.createView({
        id: "__alloyId9797"
    });
    $.__views.__alloyId9796.add($.__views.__alloyId9797);
    $.__views.__alloyId9798 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9798"
    });
    $.__views.__alloyId9797.add($.__views.__alloyId9798);
    $.__views.__alloyId9799 = Ti.UI.createView({
        id: "__alloyId9799"
    });
    $.__views.__alloyId9799 && $.addTopLevelView($.__views.__alloyId9799);
    $.__views.__alloyId9800 = Ti.UI.createView({
        id: "__alloyId9800"
    });
    $.__views.__alloyId9799.add($.__views.__alloyId9800);
    $.__views.__alloyId9801 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId9801"
    });
    $.__views.__alloyId9800.add($.__views.__alloyId9801);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;