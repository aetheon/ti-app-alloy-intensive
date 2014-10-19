function WPATH(s) {
    var index = s.lastIndexOf("/");
    var path = -1 === index ? "test1/" + s : s.substring(0, index) + "/test1/" + s.substring(index + 1);
    return path;
}

function Controller() {
    new (require("alloy/widget"))("test1");
    this.__widgetId = "test1";
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "widget_851";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    $.__views.widget_851 = Ti.UI.createView({
        id: "widget_851"
    });
    $.__views.widget_851 && $.addTopLevelView($.__views.widget_851);
    $.__views.__alloyId21762 = Ti.UI.createView({
        id: "__alloyId21762"
    });
    $.__views.widget_851.add($.__views.__alloyId21762);
    $.__views.__alloyId21763 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21763"
    });
    $.__views.__alloyId21762.add($.__views.__alloyId21763);
    $.__views.__alloyId21764 = Ti.UI.createView({
        id: "__alloyId21764"
    });
    $.__views.__alloyId21764 && $.addTopLevelView($.__views.__alloyId21764);
    $.__views.__alloyId21765 = Ti.UI.createView({
        id: "__alloyId21765"
    });
    $.__views.__alloyId21764.add($.__views.__alloyId21765);
    $.__views.__alloyId21766 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21766"
    });
    $.__views.__alloyId21765.add($.__views.__alloyId21766);
    $.__views.__alloyId21767 = Ti.UI.createView({
        id: "__alloyId21767"
    });
    $.__views.__alloyId21767 && $.addTopLevelView($.__views.__alloyId21767);
    $.__views.__alloyId21768 = Ti.UI.createView({
        id: "__alloyId21768"
    });
    $.__views.__alloyId21767.add($.__views.__alloyId21768);
    $.__views.__alloyId21769 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21769"
    });
    $.__views.__alloyId21768.add($.__views.__alloyId21769);
    $.__views.__alloyId21770 = Ti.UI.createView({
        id: "__alloyId21770"
    });
    $.__views.__alloyId21770 && $.addTopLevelView($.__views.__alloyId21770);
    $.__views.__alloyId21771 = Ti.UI.createView({
        id: "__alloyId21771"
    });
    $.__views.__alloyId21770.add($.__views.__alloyId21771);
    $.__views.__alloyId21772 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21772"
    });
    $.__views.__alloyId21771.add($.__views.__alloyId21772);
    $.__views.__alloyId21773 = Ti.UI.createView({
        id: "__alloyId21773"
    });
    $.__views.__alloyId21773 && $.addTopLevelView($.__views.__alloyId21773);
    $.__views.__alloyId21774 = Ti.UI.createView({
        id: "__alloyId21774"
    });
    $.__views.__alloyId21773.add($.__views.__alloyId21774);
    $.__views.__alloyId21775 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21775"
    });
    $.__views.__alloyId21774.add($.__views.__alloyId21775);
    $.__views.__alloyId21776 = Ti.UI.createView({
        id: "__alloyId21776"
    });
    $.__views.__alloyId21776 && $.addTopLevelView($.__views.__alloyId21776);
    $.__views.__alloyId21777 = Ti.UI.createView({
        id: "__alloyId21777"
    });
    $.__views.__alloyId21776.add($.__views.__alloyId21777);
    $.__views.__alloyId21778 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21778"
    });
    $.__views.__alloyId21777.add($.__views.__alloyId21778);
    $.__views.__alloyId21779 = Ti.UI.createView({
        id: "__alloyId21779"
    });
    $.__views.__alloyId21779 && $.addTopLevelView($.__views.__alloyId21779);
    $.__views.__alloyId21780 = Ti.UI.createView({
        id: "__alloyId21780"
    });
    $.__views.__alloyId21779.add($.__views.__alloyId21780);
    $.__views.__alloyId21781 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21781"
    });
    $.__views.__alloyId21780.add($.__views.__alloyId21781);
    $.__views.__alloyId21782 = Ti.UI.createView({
        id: "__alloyId21782"
    });
    $.__views.__alloyId21782 && $.addTopLevelView($.__views.__alloyId21782);
    $.__views.__alloyId21783 = Ti.UI.createView({
        id: "__alloyId21783"
    });
    $.__views.__alloyId21782.add($.__views.__alloyId21783);
    $.__views.__alloyId21784 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21784"
    });
    $.__views.__alloyId21783.add($.__views.__alloyId21784);
    $.__views.__alloyId21785 = Ti.UI.createView({
        id: "__alloyId21785"
    });
    $.__views.__alloyId21785 && $.addTopLevelView($.__views.__alloyId21785);
    $.__views.__alloyId21786 = Ti.UI.createView({
        id: "__alloyId21786"
    });
    $.__views.__alloyId21785.add($.__views.__alloyId21786);
    $.__views.__alloyId21787 = Ti.UI.createLabel({
        color: "#000",
        font: {
            fontSize: 18,
            fontWeight: "bold"
        },
        height: Ti.UI.SIZE,
        width: Ti.UI.SIZE,
        text: "I'm the default widget",
        id: "__alloyId21787"
    });
    $.__views.__alloyId21786.add($.__views.__alloyId21787);
    exports.destroy = function() {};
    _.extend($, $.__views);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;